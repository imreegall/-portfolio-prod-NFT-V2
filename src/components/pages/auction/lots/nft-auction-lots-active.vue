<script>
import {defineComponent} from 'vue'

import nftAuctionSocials from "../../../ui-kit/auction/nft-auction-socials.vue";

import nftSvgStar from "../../../ui-kit/svgs/nft-svg-star.vue";

export default defineComponent({
  name: "nft-auction-lots-active",

  components: {
    nftAuctionSocials,

    nftSvgStar
  },

  props: {
    lot: {
      type: Object,
      default() {
        return null
      }
    }
  },

  computed: {
    lotPageRouteParams() {
      return { name: 'nft', params: { id: this.lot.id } }
    }
  }
})
</script>

<template>
  <div class="nft-auction-lot-completed">
    <router-link
        class="image"
        :to="lotPageRouteParams"
        :style="{
              backgroundImage: `url(/assets/images/nfts/1024/${ lot.nft.img })`
          }"
    ></router-link>

    <aside>
      <article>
        <div class="info">
          <router-link :to="lotPageRouteParams" class="title">
            <h6>{{ lot.nft.title }}</h6>
          </router-link>

          <div class="description">
            <h3 class="text" v-html="lot.nft.description"></h3>

            <router-link :to="lotPageRouteParams" class="show-more">
              <h4>Show more</h4>
            </router-link>
          </div>
        </div>

        <div class="stats">
          <div class="status">
            <div class="round"></div>

            <h2 class="title">Active</h2>
          </div>

          <div class="options">
            <nft-auction-socials />

            <router-link :to="lotPageRouteParams" class="button">
              <h2>PLACE A BID</h2>
            </router-link>
          </div>
        </div>
      </article>

      <div class="price">
        <nft-svg-star class="star" />

        <h2 class="title">Highest Bid</h2>

        <div class="value">
          <h2 class="number">{{ lot.cost }}</h2>

          <h4 class="postfix">TRUD</h4>
        </div>
      </div>
    </aside>
  </div>
</template>

<style scoped lang="sass">
.nft-auction-lot-completed
  width: 100%
  background-color: $lotBackground
  display: flex

  @media (min-width: $bigScreenStart)
    +border-radius(50px)
    padding: 30px 80px 30px 30px
    gap: 30px

  @media (max-width: $smallScreenEnd)
    display: flex
    +border-radius(10px)
    padding: 10px
    gap: 11px

  &:hover
    background-color: $lotBackgroundHover

  > .image
    aspect-ratio: 1
    +background-image-settings()

    @media (min-width: $bigScreenStart)
      width: 260px
      +border-radius(16px)

    @media (max-width: $smallScreenEnd)
      width: 112px
      +border-radius(4px)

  > aside
    display: flex
    width: 100%
    flex: 1

    @media (min-width: $bigScreenStart)
      gap: 30px

    @media (max-width: $smallScreenEnd)
      gap: 12px
      flex-direction: column
      align-self: normal
      justify-content: space-between

    > article
      display: flex
      flex-direction: column
      align-items: flex-start
      width: 100%

      @media (min-width: $bigScreenStart)
        gap: 30px
        flex: 1
        justify-content: space-between

      @media (max-width: $smallScreenEnd)
        gap: 16px
        padding-left: 5px

      > .info
        display: flex
        flex-direction: column
        gap: 24px
        align-items: flex-start
        width: 100%

        > .title
          color: $white
          line-height: 1

          @media (min-width: $bigScreenStart)
            font-size: 24px

          @media (max-width: $smallScreenEnd)
            font-size: 20px

        > .description
          @media (min-width: $bigScreenStart)
            display: flex
            flex-direction: column
            align-items: flex-start
            gap: 17px
            width: 100%

            > .text
              color: $white
              font-size: 16px
              line-height: 140%
              display: -webkit-box
              -webkit-box-orient: vertical
              overflow: hidden
              -webkit-line-clamp: 3

            > .show-more
              font-size: 17px
              line-height: 1
              color: $crumbsGray
              cursor: pointer
              +user-select(none)

          @media (max-width: $smallScreenEnd)
            display: none

      > .stats
        @media (min-width: $bigScreenStart)
          display: flex
          flex-direction: column
          align-items: flex-start
          gap: 20px
          width: 100%

        @media (max-width: $smallScreenEnd)

        > .status
          display: flex
          align-items: center
          +user-select(none)

          @media (min-width: $bigScreenStart)
            gap: 8px

          @media (max-width: $smallScreenEnd)
            gap: 4px

          > .round
            background-color: $green
            +border-radius(50%)
            aspect-ratio: 1

            @media (min-width: $bigScreenStart)
              width: 16px

            @media (max-width: $smallScreenEnd)
              width: 12px

          > .title
            color: $white
            line-height: 1

            @media (min-width: $bigScreenStart)
              font-size: 20px

            @media (max-width: $smallScreenEnd)
              font-size: 16px

        > .options
          @media (min-width: $bigScreenStart)
            display: flex
            justify-content: space-between
            flex-direction: row-reverse
            align-items: center
            width: 100%
            max-width: 437px

            > .button
              padding: 10px 24px
              +border-radius(999px)
              position: relative
              overflow: hidden
              +user-select(none)
              font-size: 20px
              border: 1px solid $teamGreenName
              background-color: $lotButtonBackground
              color: $teamGreenName

              @keyframes light
                0%
                  left: -100%
                100%
                  left: 100%

              &::after
                content: ""
                display: block
                width: 100%
                height: 100%
                position: absolute
                top: 0
                left: -100%
                background: linear-gradient(105deg, transparent 0%, transparent 5%, $white 60%, transparent 61%)
                animation: light 3s infinite linear

          @media (max-width: $smallScreenEnd)
            display: none

    > .price
      display: flex
      flex-direction: column
      align-items: center
      justify-content: center
      gap: 8px

      @media (min-width: $bigScreenStart)
        position: relative
        width: 180px

      @media (max-width: $smallScreenEnd)
        background-color: $headerGreen
        padding: 12px 16px
        +border-radius(10px)

      > .star
        @media (min-width: $bigScreenStart)
          position: absolute
          width: 180px
          aspect-ratio: 1

        @media (max-width: $smallScreenEnd)
          display: none

      > .title
        color: $lotBidTitle
        z-index: 10
        line-height: 1

        @media (min-width: $bigScreenStart)
          font-size: 17px

        @media (max-width: $smallScreenEnd)
          font-size: 15px

      > .value
        display: flex
        z-index: 10

        @media (min-width: $bigScreenStart)
          flex-direction: column
          align-items: center

        @media (max-width: $smallScreenEnd)
          gap: 4px
          align-items: baseline

        > .number
          color: $white
          font-variant-numeric: lining-nums
          line-height: 1

          @media (min-width: $bigScreenStart)
            font-size: 24px

          @media (max-width: $smallScreenEnd)
            font-size: 16px

        > .postfix
          color: $white
          line-height: 1

          @media (min-width: $bigScreenStart)
            font-size: 20px

          @media (max-width: $smallScreenEnd)
            font-size: 15px
</style>