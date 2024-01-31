<script>
import { defineComponent } from 'vue'

import nftAuctionLotImage from "./components/nft-auction-lot-image.vue";

import nftSvgShare from "../../../ui-kit/svgs/nft-svg-share.vue";
import nftSvgFire from "../../../ui-kit/svgs/nft-svg-fire.vue";
import nftSvgInstagram from "../../../ui-kit/svgs/nft-svg-instagram.vue";
import nftSvgTikTok from "../../../ui-kit/svgs/nft-svg-tik-tok.vue";
import nftSvgYoutube from "../../../ui-kit/svgs/nft-svg-youtube.vue";
import nftSvgTwitter from "../../../ui-kit/svgs/nft-svg-twitter.vue";

import shareCurrentPage from "../../../../functions/shareCurrentPage.js";

export default defineComponent({
  name: "nft-auction-lot-completed",

  components: {
    nftAuctionLotImage,

    nftSvgShare,
    nftSvgFire,
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

      isCopying: false
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
  <div class="nft-auction-lot-completed">
    <aside>
      <nft-auction-lot-image
          :image-filename="lot.nft.img"
          :link="lot.nft.okxLink"
      />

      <a
          v-if="lot.address === address"
          href="#"
          class="button"
      ><h2>Receive your NFT</h2></a>
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

      <div class="bottom">
        <div class="winner">
          <h4 class="title">Winner</h4>

          <h2 class="value">{{ lot.address }}</h2>
        </div>

        <div class="stats">
          <div class="burned">
            <nft-svg-fire />

            <div class="text">
              <h2 class="title">Burned:</h2>

              <h2 class="value">{{ lot.cost }}</h2>

              <h4 class="postfix">TRUD</h4>
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
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped lang="sass">
.nft-auction-lot-completed
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

    .button
      padding: 12px 40px 14px
      background-color: $green
      +border-radius(41px)
      color: $darkgreen
      font-size: 20px
      +user-select(none)

      @media (min-width: $bigScreenStart)

      @media (max-width: $smallScreenEnd)
        width: 100%
        text-align: center

      &:hover
        background-color: #18d793

      &:active
        padding: 13px 40px 13px

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

    .bottom
      display: flex
      flex-direction: column
      width: 100%

      @media (min-width: $bigScreenStart)
        align-items: flex-start
        gap: 30px

      @media (max-width: $smallScreenEnd)
        align-items: center
        gap: 24px

      .winner
        display: flex
        flex-wrap: wrap
        gap: 12px
        justify-content: center
        align-items: baseline
        background-color: $headerGreen
        +border-radius(10px)
        padding: 12px 16px

        > .title
          color: $white
          font-size: 16px

        > .value
          color: $white
          word-break: break-all
          text-align: center
          font-variant-numeric: lining-nums

          @media (min-width: $bigScreenStart)
            font-size: 20px

          @media (max-width: $smallScreenEnd)
            font-size: 17px

      .stats
        display: flex
        align-items: center

        @media (min-width: $bigScreenStart)
          gap: 70px

        @media (max-width: $smallScreenEnd)
          gap: 30px
          flex-direction: column

        .burned
          display: flex
          gap: 4px
          align-items: center

          > .text
            display: flex
            gap: 4px
            align-items: baseline

            > .title
              color: $lotBidTitle

              @media (min-width: $bigScreenStart)
                font-size: 20px

              @media (max-width: $smallScreenEnd)
                font-size: 17px

            > .value
              color: $white
              font-variant-numeric: lining-nums

              @media (min-width: $bigScreenStart)
                font-size: 24px

              @media (max-width: $smallScreenEnd)
                font-size: 17px

            > .postfix
              color: $white

              @media (min-width: $bigScreenStart)
                font-size: 20px

              @media (max-width: $smallScreenEnd)
                font-size: 16px

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