<script>
import { defineComponent } from 'vue'

import nftAuctionBreadcrumbs from "./auction/nft-auction-breadcrumbs.vue";

export default defineComponent({
  name: "nft-auction",

  components: {
    nftAuctionBreadcrumbs
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

  mounted() {
    this.loopUpdateLastBid()
  },

  methods: {
    connectWallet() {
      this.$emit('connectWallet')
    },

    doBid(bidValue) {
      this.$emit('doBid', bidValue)
    },

    loopUpdateLastBid() {
      setTimeout(async () => {
        await this.$emit('update-last-bid')

        this.loopUpdateLastBid()
      }, 500)
    }
  }
})
</script>

<template>
  <div class="nft-auction">
    <nft-auction-breadcrumbs />

    <router-view
        :address="address"
        :lots="lots"
        @connect-wallet="connectWallet"
        @do-bid="doBid"
    />
  </div>
</template>

<style scoped lang="sass">
.nft-auction
  display: flex
  flex-direction: column
  width: 100%
  z-index: 10

  @media (min-width: $bigScreenStart)
    margin-top: 160px
    max-width: calc(1290px + 60px * 2)
    gap: 40px
    padding-left: 60px
    padding-right: 60px

  @media (max-width: $smallScreenEnd), (any-pointer: coarse)
    margin-top: 88px
    gap: 30px
    padding-left: 20px
    padding-right: 20px
</style>