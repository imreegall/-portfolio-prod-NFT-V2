<script>
import {defineComponent} from 'vue'

import nftAuctionSocials from "../../../ui-kit/auction/nft-auction-socials.vue";

import getDayMonthYearFromDate from "../../../../functions/getDayMonthYearFromDate.js";

export default defineComponent({
  name: "nft-auction-lots-upcoming",

  components: {
    nftAuctionSocials
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
      getDayMonthYearFromDate
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
            <img class="round" src="/assets/images/svg/loadingRound.svg" alt="">

            <h2 class="title">Upcoming</h2>
          </div>

          <div class="options">
            <nft-auction-socials />
          </div>
        </div>
      </article>

      <div class="start">
        <h2 class="title">Auction start at</h2>

        <h2 class="date">{{ getDayMonthYearFromDate(lot.date) }}</h2>
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
    gap: 16px

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

          @keyframes rounding
            0%
              transform: rotate(0)
            100%
              transform: rotate(360deg)

          > .round
            +border-radius(50%)
            aspect-ratio: 1
            animation: infinite linear rounding 1s

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

          @media (max-width: $smallScreenEnd)
            display: none

    > .start
      display: flex
      align-items: center
      gap: 8px

      @media (min-width: $bigScreenStart)
        flex-direction: column
        width: 180px
        justify-content: center

      @media (max-width: $smallScreenEnd)

      > .title
        color: $lotBidTitle
        line-height: 1

        @media (min-width: $bigScreenStart)
          font-size: 17px

        @media (max-width: $smallScreenEnd)
          font-size: 15px
          text-align: center

      > .date
        color: $white
        font-variant-numeric: lining-nums
        line-height: 1

        @media (min-width: $bigScreenStart)
          font-size: 24px

        @media (max-width: $smallScreenEnd)
          font-size: 16px
</style>