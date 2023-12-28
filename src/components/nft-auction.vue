<script>
import { defineComponent } from 'vue'

import nftAuctionBreadcrumbs from "./auction/nft-auction-breadcrumbs.vue";

export default defineComponent({
  name: "nft-auction",

  components: {
    nftAuctionBreadcrumbs,
  },

  props: {
    address: {
      type: String,
      default() {
        return null
      },
    },

    tryToCheckWalletApproveResult: {
      type: String,
      default() {
        return null
      },
    },

    tryToRemoveApprovalResult: {
      type: String,
      default() {
        return null
      },
    },

    tryToApproveResult: {
      type: String,
      default() {
        return null
      },
    },

    tryToBidResult: {
      type: String,
      default() {
        return null
      },
    },

    auctionActiveInfo: {
      type: Boolean,
      default() {
        return null
      },
    },

    highestBid: {
      type: String,
      default() {
        return null
      },
    },

    tryToStartAuctionResult: {
      type: String,
      default() {
        return null
      },
    },

    tryToEndAuctionResult: {
      type: String,
      default() {
        return null
      },
    },
  },

  methods: {
    handleCheckWalletApproveButtonClick() {
      this.$emit('handleCheckWalletApproveButtonClick')
    },

    handleRemoveApprovalButtonClick() {
      this.$emit('handleRemoveApprovalButtonClick')
    },

    handleApproveButtonClick() {
      this.$emit('handleApproveButtonClick')
    },

    handleCheckAuctionIsActiveButtonClick() {
      this.$emit('handleCheckAuctionIsActiveButtonClick')
    },

    handleGetHighestBidButtonClick() {
      this.$emit('handleGetHighestBidButtonClick')
    },

    handleBidButtonClick(betValue) {
      this.$emit('handleBidButtonClick', betValue)
    },

    handleStartAuctionButtonClick() {
      this.$emit('handleStartAuctionButtonClick')
    },

    handleEndAuctionButtonClick() {
      this.$emit('handleEndAuctionButtonClick')
    },
  },
})
</script>

<template>
  <div class="nft-auction">
    <nft-auction-breadcrumbs />

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