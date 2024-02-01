<script>
import { defineComponent } from "vue";

import nftHeader from "./components/ui-kit/nft-header.vue";
import nftFooter from "./components/ui-kit/nft-footer.vue";

import nftBurgerMenu from "./components/ui-kit/burger-menu/nft-burger-menu.vue";

import nftWalletConnector from "./components/functionality/wallet/nft-wallet-connector.vue";

import rawLots from "./storage/auction/lots/lots.js";

export default defineComponent({
  name: "App",

  components: {
    nftHeader,
    nftFooter,
    nftBurgerMenu,
    nftWalletConnector
  },

  data() {
    return {
      isBurgerMenuShown: false,

      address: null,

      highestBid: null,

      rawLots,

      tryToBid: false
    }
  },

  methods: {
    openWalletModal() {
      this.$refs.walletConnector.openModal()
    },

    async doBid(bidValue) {
      if (this.tryToBid) {
        return
      }

      this.tryToBid = true

      await this.$refs.walletConnector.doBid(bidValue).then(() => {
        this.tryToBid = false
      })
    },

    async handleUpdateHighestBid() {
      this.highestBid = ((await this.$refs.walletConnector.getHighestBid()) / BigInt(1000000000)).toString()
    }
  },

  computed: {
    lots() {
      function lotsSortingFunction(prevLot, nextLot) {
        const isNeedToSort =
            prevLot.status === 'Active'     && nextLot.status === 'Completed'   ||
            prevLot.status === 'Upcoming'   && nextLot.status === 'Active'      ||
            prevLot.status === 'Upcoming'   && nextLot.status === 'Completed'

        if (isNeedToSort) {
          return 1
        }

        return -1
      }

      return this.rawLots.sort(lotsSortingFunction)
    }
  },

  watch: {
    highestBid: {
      handler(highestBid) {
        const activeLot = this.rawLots.find(lot => lot.status === 'Active')

        if (!activeLot) {
          return
        }

        activeLot.cost = highestBid
      }
    }
  }
})
</script>

<template>
  <div class="mainContainer">
    <nft-header
        :address="address"
        @handleBurgerButtonClick="isBurgerMenuShown = true"
        @handleConnectButtonClick="openWalletModal"
    />

    <router-view
        :address="address"
        :lots="lots"
        @connect-wallet="openWalletModal"
        @do-bid="doBid"
        @updateLastBid="handleUpdateHighestBid"
    />

    <nft-footer/>

    <nft-burger-menu
        v-show="isBurgerMenuShown"
        :address="address"
        @close-burger-menu="isBurgerMenuShown = false"
        @open-modal="openWalletModal"
    />

    <nft-wallet-connector
        ref="walletConnector"
        @updateData="addr => address = addr"
    />
  </div>
</template>

<style lang="sass">
  #app
    display: flex
    justify-content: center
    width: 100%

    .mainContainer
      display: flex
      flex-direction: column
      align-items: center
      width: 100%
      min-height: 100vh
</style>
