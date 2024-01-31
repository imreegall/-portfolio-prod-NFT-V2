<script>
import { defineComponent } from 'vue'

import nftAuctionLotImage from "./components/nft-auction-lot-image.vue";

import nftSvgShare from "../../../ui-kit/svgs/nft-svg-share.vue";
import nftSvgInstagram from "../../../ui-kit/svgs/nft-svg-instagram.vue";
import nftSvgTikTok from "../../../ui-kit/svgs/nft-svg-tik-tok.vue";
import nftSvgYoutube from "../../../ui-kit/svgs/nft-svg-youtube.vue";
import nftSvgTwitter from "../../../ui-kit/svgs/nft-svg-twitter.vue";

import shareCurrentPage from "../../../../functions/shareCurrentPage.js";

export default defineComponent({
  name: "nft-auction-lot-active",

  components: {
    nftAuctionLotImage,

    nftSvgShare,
    nftSvgInstagram,
    nftSvgTikTok,
    nftSvgYoutube,
    nftSvgTwitter
  },

  props: {
    lot: {
      type: Object,
      default() {
        return null
      }
    },

    address: {
      type: String,
      default() {
        return ""
      }
    }
  },

  data() {
    return {
      isDescriptionShown: true,

      isBidInputShown: false,
      bidValue: 0,

      isCopying: false,

      currentDate: new Date()
    }
  },

  mounted() {
    setInterval(this.currentDateUpdate, 999)
  },

  methods: {
    handleShareButtonClick() {
      if (this.isCopying) {
        return
      }

      this.isCopying = true

      setTimeout(() => {
        this.isCopying = false
      }, 1000)

      shareCurrentPage()
    },

    handleWalletConnectButtonClick() {
      this.$emit('connectWallet')
    },

    handlePlaceBidButtonClick() {
      if (!this.isBidInputShown) {
        this.isBidInputShown = !this.isBidInputShown

        return
      }

      if (!Number.isInteger(this.bidValue)) {
        return
      }

      this.$emit('doBid', this.bidValue)
    },

    currentDateUpdate() {
      this.currentDate = new Date()
    }
  },

  computed: {
    dateDifference() {
      const endDate = this.lot.date

      if (!endDate) {
        return null
      }

      const datesDifference = endDate - this.currentDate

      if (datesDifference < 0) {
        return 0
      }

      const msInSecond = 1000
      const msInMinute = msInSecond * 60
      const msInHour = msInMinute * 60
      const msInDay = msInHour * 24

      const seconds = Math.floor(datesDifference % msInMinute / msInSecond).toString().padStart(2, "0")
      const minutes = Math.floor(datesDifference % msInHour / msInMinute).toString().padStart(2, "0")
      const hours = Math.floor(datesDifference % msInDay / msInHour).toString().padStart(2, "0")
      const days = Math.floor(datesDifference / msInDay)

      return [days, hours, minutes, seconds].join(":")
    }
  },

  watch: {
    'lot.cost': {
      immediate: true,
      deep: true,
      handler(newCost) {
        this.bidValue = newCost + 1
      }
    },

    address: {
      handler() {
        this.isBidInputShown = false
      }
    }
  }
})
</script>

<template>
  <div class="nft-auction-lot-active">
    <aside>
      <nft-auction-lot-image
          :image-filename="lot.nft.img"
          :link="lot.nft.okxLink"
      />

      <div class="bid-wrapper">
        <div class="text">
          <h2 class="title">Current rate</h2>

          <div class="price-wrapper">
            <h2 class="value">{{ lot.cost }}</h2>

            <h4 class="postfix">TRUD</h4>
          </div>
        </div>

        <template
            v-if="address && address.length"
        >
          <button
              @click="handlePlaceBidButtonClick"
          >Place a Bid</button>

          <input
              type="number"
              name="bet"
              pattern="\d*"
              v-show="isBidInputShown"
              v-model="bidValue"
          >
        </template>

        <button
            v-else
            @click="handleWalletConnectButtonClick"
        >Connect wallet</button>
      </div>
    </aside>

    <main>
      <article>
        <div class="top">
          <div class="name">
            <h6 class="title">{{ lot.nft.title }}</h6>

            <nft-svg-share
                class="button"
                @click="handleShareButtonClick"
            />
          </div>

          <div class="description">
            <h3
                class="text"
                :class="{
                  active: isDescriptionShown
              }"
                v-html="lot.nft.description"
            ></h3>

            <h4
                class="show-more"
                @click="isDescriptionShown = !isDescriptionShown"
            >
              {{ isDescriptionShown ? `Show more` : `Show less` }}
            </h4>
          </div>
        </div>

        <div class="socials">
          <a href="#" class="social">
            <nft-svg-instagram />
          </a>

          <a href="#" class="social">
            <nft-svg-tik-tok />
          </a>

          <a href="#" class="social">
            <nft-svg-youtube />
          </a>

          <a href="#" class="social">
            <nft-svg-twitter />
          </a>
        </div>
      </article>

      <aside>
        <h2 class="title">Auction ends in</h2>

        <h2 class="date">{{ dateDifference }}</h2>
      </aside>
    </main>
  </div>
</template>

<style scoped lang="sass">
.nft-auction-lot-active
  display: flex

  @media (min-width: $bigScreenStart)
    align-items: flex-start
    gap: 60px

  @media (max-width: $smallScreenEnd)
    align-items: center
    flex-direction: column
    gap: 30px
    background-color: $lotBackground
    padding: 20px 20px 35px
    +border-radius(10px)

  > aside
    display: flex
    flex-direction: column
    align-items: center

    @media (min-width: $bigScreenStart)
      gap: 50px

    @media (max-width: $smallScreenEnd)
      width: 100%
      gap: 30px

    .bid-wrapper
      display: flex
      flex-direction: column
      align-items: center
      width: 100%

      @media (min-width: $bigScreenStart)
        gap: 30px
        padding: 30px
        background-color: $lotBackground
        +border-radius(20px)

      @media (max-width: $smallScreenEnd)
        gap: 20px
        padding: 16px
        background-color: $lotBidBackground
        +border-radius(10px)

      > .text
        display: flex
        flex-direction: column
        align-items: center

        @media (min-width: $bigScreenStart)
          gap: 16px

        @media (max-width: $smallScreenEnd)
          gap: 12px

        > .title
          font-size: 17px
          color: $lotBidTitle

        .price-wrapper
          display: flex
          align-items: baseline
          gap: 4px

          > .value
            color: $white
            font-variant-numeric: lining-nums

            @media (min-width: $bigScreenStart)
              font-size: 24px

            @media (max-width: $smallScreenEnd)
              font-size: 20px

          > .postfix
            color: $white

            @media (min-width: $bigScreenStart)
              font-size: 20px

            @media (max-width: $smallScreenEnd)
              font-size: 17px

      button
        padding: 12px 40px 14px
        background-color: $green
        +border-radius(41px)
        color: $darkgreen
        font-size: 20px
        +user-select(none)
        cursor: pointer
        font-weight: 600
        font-family: Raleway, sans-serif

        @media (min-width: $bigScreenStart)

        @media (max-width: $smallScreenEnd)
          width: 100%
          text-align: center

        &:hover
          background-color: #18d793

        &:active
          padding: 13px 40px 13px

      input
        width: 100%
        +border-radius(10px)
        padding: 10px 20px
        background-color: $mainBackground
        font-family: Raleway, "Calibri Light" ,sans-serif
        font-size: 24px
        font-variant-numeric: lining-nums
        text-align: center
        font-weight: 600

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button
          -webkit-appearance: none
          margin: 0

  main
    display: flex
    flex-direction: column
    width: 100%

    @media (min-width: $bigScreenStart)
      gap: 40px
      align-items: flex-start
      flex: 1

    @media (max-width: $smallScreenEnd)
      gap: 30px
      align-items: center

    > article
      display: flex
      flex-direction: column
      gap: 30px
      width: 100%

      @media (min-width: $bigScreenStart)
        background-color: $lotBackground
        padding: 32px 50px 50px
        +border-radius(20px)
        align-items: flex-start

      @media (max-width: $smallScreenEnd)
        align-items: center

      .top
        display: flex
        flex-direction: column
        align-items: center
        width: 100%

        @media (min-width: $bigScreenStart)
          gap: 30px

        @media (max-width: $smallScreenEnd)
          gap: 24px

        .name
          width: 100%
          display: flex
          align-items: flex-end
          justify-content: space-between
          gap: 20px

          > .title
            font-size: 24px
            color: $white

          .button
            cursor: pointer
            +user-select(none)
            align-self: flex-start

            &:active
              margin-top: 1px
              margin-bottom: -1px

        .description
          display: flex
          width: 100%
          flex-direction: column
          align-items: flex-start

          @media (min-width: $bigScreenStart)
            gap: 20px

          @media (max-width: $smallScreenEnd)
            gap: 24px

          > .text
            font-size: 16px
            color: $white
            line-height: 140%
            display: -webkit-box
            -webkit-box-orient: vertical
            overflow: hidden

            &.active
              @media (min-width: $bigScreenStart)
                -webkit-line-clamp: 4

              @media (max-width: $smallScreenEnd)
                -webkit-line-clamp: 3

          .show-more
            font-size: 16px
            color: $crumbsGray
            cursor: pointer
            +user-select(none)

      .socials
        display: flex
        align-items: center

        @media (min-width: $bigScreenStart)
          gap: 20px

        @media (max-width: $smallScreenEnd)
          gap: 36px

        .social
          font-size: 0

    > aside
      display: flex
      flex-direction: column
      align-items: center
      gap: 10px

      @media (min-width: $bigScreenStart)
        background-color: $lotBackground
        padding: 32px 50px
        +border-radius(20px)

      @media (max-width: $smallScreenEnd)

      > .title
        color: $lotBidTitle
        font-size: 17px

      > .date
        color: $white
        font-size: 24px
        font-variant-numeric: lining-nums tabular-nums
</style>