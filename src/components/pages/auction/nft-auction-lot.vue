<script>
import { defineComponent } from 'vue'

import nft404 from "../../ui-kit/404/nft-404.vue";

import nftAuctionLotCompleted from "./lot/nft-auction-lot-completed.vue";
import nftAuctionLotActive from "./lot/nft-auction-lot-active.vue";
import nftAuctionLotUpcoming from "./lot/nft-auction-lot-upcoming.vue";

export default defineComponent({
  name: "nft-auction-lot",

  components: {
    nft404,

    nftAuctionLotCompleted,
    nftAuctionLotActive,
    nftAuctionLotUpcoming
  },

  props: {
    address: {
      type: String,
      default() {
        return null
      }
    },

    lots: {
      type: Array,
      default() {
        return []
      }
    }
  },

  methods: {
    connectWallet() {
      this.$emit('connectWallet')
    },

    doBid(bidValue) {
      this.$emit('doBid', bidValue)
    },
  },

  computed: {
    nftId() {
      return this.$route.params.id
    },

    lot() {
      return this.lots.find(nft => nft.id === this.nftId)
    },

    lotStatus() {
      return this.lot.status
    },

    statusIsActive() {
      return this.lotStatus === "Active"
    },

    statusIsUpcoming() {
      return this.lotStatus === "Upcoming"
    },

    statusIsCompleted() {
      return this.lotStatus === "Completed"
    },

    error404() {
      return this.lot === undefined
    },
  }
})
</script>

<template>
  <nft404 v-if="error404" />

  <template v-else>
    <nft-auction-lot-completed
      v-if="statusIsCompleted"
      :lot="lot"
      :address="address"
    />

    <nft-auction-lot-active
      v-if="statusIsActive"
      :lot="lot"
      :address="address"
      @connect-wallet="connectWallet"
      @do-bid="doBid"
    />

    <nft-auction-lot-upcoming
      v-if="statusIsUpcoming"
      :lot="lot"
    />
  </template>
</template>

<style scoped lang="sass">

</style>