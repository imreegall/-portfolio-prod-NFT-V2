<script>
import { defineComponent } from 'vue'

import nftAuctionLotImage from "./components/nft-auction-lot-image.vue";

import nftSvgShare from "../../../ui-kit/svgs/nft-svg-share.vue";
import nftSvgInstagram from "../../../ui-kit/svgs/nft-svg-instagram.vue";
import nftSvgTikTok from "../../../ui-kit/svgs/nft-svg-tik-tok.vue";
import nftSvgYoutube from "../../../ui-kit/svgs/nft-svg-youtube.vue";
import nftSvgTwitter from "../../../ui-kit/svgs/nft-svg-twitter.vue";

import shareCurrentPage from "../../../../functions/shareCurrentPage.js";

import getDayMonthYearFromDate from "../../../../functions/getDayMonthYearFromDate.js";

export default defineComponent({
  name: "nft-auction-lot-upcoming",

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
    }
  },

  data() {
    return {
      getDayMonthYearFromDate,

      isDescriptionShown: true,

      isCopying: false,
    }
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
    }
  }
})
</script>

<template>
  <div class="nft-auction-lot-upcoming">
    <aside>
      <nft-auction-lot-image
          :image-filename="lot.nft.img"
          :link="lot.nft.okxLink"
      />

      <div class="upcoming-date">
        <h2 class="title">Auction start at</h2>

        <h2 class="date">{{ getDayMonthYearFromDate(lot.date) }}</h2>
      </div>
    </aside>

    <main>
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
    </main>
  </div>
</template>

<style scoped lang="sass">
.nft-auction-lot-upcoming
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

  aside
    display: flex
    flex-direction: column
    align-items: center

    @media (min-width: $bigScreenStart)
      gap: 50px

    @media (max-width: $smallScreenEnd)
      width: 100%
      gap: 30px

    .upcoming-date
      display: flex
      flex-direction: column
      align-items: center
      width: 100%

      @media (min-width: $bigScreenStart)
        gap: 24px
        padding: 30px
        background-color: $lotBackground
        +border-radius(20px)

      @media (max-width: $smallScreenEnd)
        gap: 16px
        padding: 16px
        background-color: $lotBidBackground
        +border-radius(10px)

      > .title
        font-size: 17px
        color: $lotBidTitle

      > .date
        color: $white
        font-variant-numeric: lining-nums

        @media (min-width: $bigScreenStart)
          font-size: 24px

        @media (max-width: $smallScreenEnd)
          font-size: 20px

  main
    display: flex
    flex-direction: column
    gap: 30px
    width: 100%
    flex: 1

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
</style>