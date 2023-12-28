<script>
import { defineComponent } from "vue";

import nftHeader from "./components/nft-header.vue";
import nftFooter from "./components/nft-footer.vue";

import nftBurgerMenu from "./components/burger-menu/nft-burger-menu.vue";

import nftWalletConnector from "./components/footer/main/wallet/nft-wallet-connector.vue";

import lots from "./components/lots/lots.js";

export default defineComponent({
  name: "App",

  components: {
    nftHeader,
    nftFooter,
    nftBurgerMenu,
    nftWalletConnector,
  },

  data() {
    return {
      isBurgerMenuShown: false,

      address: null,

      tryToCheckWalletApproveResult: null,
      tryToRemoveApprovalResult: null,
      tryToApproveResult: null,
      tryToBidResult: null,
      auctionActiveInfo: null,
      highestBid: null,
      tryToStartAuctionResult: null,
      tryToEndAuctionResult: null,

      lots,

      tryToBid: false,
    }
  },

  mounted() {
    setInterval(async () => {
      await this.handleGetHighestBidButtonClick()
    }, 500)
  },

  methods: {
    openWalletModal() {
      this.$refs.walletConnector.openModal()
    },

    async handleCheckWalletApproveButtonClick() {
      this.tryToCheckWalletApproveResult = null
      console.log('Try to check approve...')
      const result = await this.$refs.walletConnector.checkApprove()
      this.tryToCheckWalletApproveResult = result ? (result.hash ? "success" : result) : "error"
      console.log('Check approve result:', result)
    },

    async handleRemoveApprovalButtonClick() {
      this.tryToRemoveApprovalResult = null
      const result = await this.$refs.walletConnector.removeApprove()
      this.tryToRemoveApprovalResult = result ? (result.hash ? "success" : result) : "error"
    },

    async handleApproveButtonClick() {
      this.tryToApproveResult = null
      const result = await this.$refs.walletConnector.doApprove()
      this.tryToApproveResult = result ? (result.hash ? "success" : result) : "error"
    },

    async handleBidButtonClick(betValue) {
      if (this.tryToBid) {
        return
      }

      this.tryToBid = true

      await this.$refs.walletConnector.doBid(betValue).then(() => {
        this.tryToBid = false
      })
    },

    async handleCheckAuctionIsActiveButtonClick() {
      this.auctionActiveInfo = null
      this.auctionActiveInfo = await this.$refs.walletConnector.isActive()
    },

    async handleGetHighestBidButtonClick() {
      this.highestBid = ((await this.$refs.walletConnector.getHighestBid()) / BigInt(1000000000)).toString()
    },

    async handleStartAuctionButtonClick() {
      this.tryToStartAuctionResult = null
      const result = await this.$refs.walletConnector.start()
      this.tryToStartAuctionResult = result ? (result.hash ? "success" : result) : "error"
    },

    async handleEndAuctionButtonClick() {
      this.tryToEndAuctionResult = null
      const result = await this.$refs.walletConnector.stop()
      this.tryToEndAuctionResult = result ? (result.hash ? "success" : result) : "error"
    },
  },

  computed: {
    shortAddress() {
      if (!this.address) {
        return null
      }

      return this.address.substring(0, 4) + "..." + this.address.substring(this.address.length - 2, this.address.length)
    },

    activeLot() {
      return lots.filter(lot => lot.status === "Active")[0]
    }
  },

  watch: {
    highestBid: {
      handler(highestBid) {
        this.activeLot.lastBid = highestBid
      },
    },
  },
})
</script>

<template>
  <div class="mainContainer">
    <nft-header
        :shortAddress="shortAddress"
        @handleBurgerButtonClick="isBurgerMenuShown = true"
        @handleConnectButtonClick="openWalletModal"
    />

    <router-view
        :address="address"
        :tryToCheckWalletApproveResult="tryToCheckWalletApproveResult"
        :tryToRemoveApprovalResult="tryToRemoveApprovalResult"
        :tryToApproveResult="tryToApproveResult"
        :tryToBidResult="tryToBidResult"
        :auctionActiveInfo="auctionActiveInfo"
        :highestBid="highestBid"
        :tryToStartAuctionResult="tryToStartAuctionResult"
        :tryToEndAuctionResult="tryToEndAuctionResult"
        @handleCheckWalletApproveButtonClick="handleCheckWalletApproveButtonClick"
        @handleRemoveApprovalButtonClick="handleRemoveApprovalButtonClick"
        @handleApproveButtonClick="handleApproveButtonClick"
        @handleBidButtonClick="handleBidButtonClick"
        @handleCheckAuctionIsActiveButtonClick="handleCheckAuctionIsActiveButtonClick"
        @handleGetHighestBidButtonClick="handleGetHighestBidButtonClick"
        @handleStartAuctionButtonClick="handleStartAuctionButtonClick"
        @handleEndAuctionButtonClick="handleEndAuctionButtonClick"
    />

    <nft-footer/>

    <nft-burger-menu
        v-show="isBurgerMenuShown"
        :shortAddress="shortAddress"
        @handleCloseButtonClick="isBurgerMenuShown = false"
        @handleConnectButtonClick="openWalletModal"
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

      //@media (min-width: $bigScreenStart)
      //  $padding: 60px
      //  max-width: calc(1430px + $padding * 2)
      //
      //@media (max-width: $smallScreenEnd), (any-pointer: coarse)
      //  max-width: 100%
</style>
