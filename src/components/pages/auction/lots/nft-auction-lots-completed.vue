<script>
import { defineComponent } from 'vue'

import nftAuctionSocials from "../../../ui-kit/auction/nft-auction-socials.vue";

import nftShortAddress from "../../../mixins/nft-short-address.vue";

import nftSvgFire from "../../../ui-kit/svgs/nft-svg-fire.vue";

export default defineComponent({
  name: "nft-auction-lot-completed",

  mixins: [
    nftShortAddress
  ],

  components: {
    nftAuctionSocials,

    nftSvgFire
  },

  props: {
    lot: {
      type: Object,
      default() {
        return null
      }
    },

    walletAddress: {
      type: String,
      default() {
        return ""
      }
    }
  },

  computed: {
    lotPageRouteParams() {
      return { name: 'nft', params: { id: this.lot.id } }
    },

    address() {
      return this.lot.address
    },

    isOwner() {
      return this.address === this.walletAddress
    }
  }
})
</script>

<template>
  <div class="nft-auction-lot-completed">
    <main>
      <router-link
          class="image"
          :to="lotPageRouteParams"
          :style="{
              backgroundImage: `url(/assets/images/auction/nfts/${ lot.nft.img })`
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

              <h2 class="title">Completed</h2>
            </div>

            <div class="options">
              <nft-auction-socials class="socials" />

              <router-link
                  v-if="isOwner"
                  :to="lotPageRouteParams"
                  class="button"
              >
                <h2>Receive your NFT</h2>
              </router-link>
            </div>
          </div>
        </article>

        <div class="price">
          <div class="winner" v-if="isOwner">
            <h4 class="title">Winner</h4>

            <h2 class="address">{{ shortAddress }}</h2>
          </div>

          <div class="cost">
            <nft-svg-fire class="fire" />

            <div class="value">
              <h2 class="number">{{ lot.cost }}</h2>

              <h4 class="postfix">TRUD</h4>
            </div>
          </div>
        </div>
      </aside>
    </main>

    <router-link
        :to="lotPageRouteParams"
        class="button"
        v-if="isOwner"
    >
      <h2>Receive your NFT</h2>
    </router-link>
  </div>
</template>

<style scoped lang="sass">
.nft-auction-lot-completed
  width: 100%
  background-color: $lotBackground

  @media (min-width: $bigScreenStart)
    +border-radius(50px)
    padding: 30px 80px 30px 30px

  @media (max-width: $smallScreenEnd), (any-pointer: coarse)
    display: flex
    +border-radius(10px)
    padding: 10px
    flex-direction: column
    align-items: center
    gap: 16px

  &:hover
    background-color: $lotBackgroundHover

  > main
    width: 100%
    display: flex

    @media (min-width: $bigScreenStart)
      gap: 30px

    @media (max-width: $smallScreenEnd), (any-pointer: coarse)
      gap: 11px

    > .image
      +background-image-settings()

      @media (min-width: $bigScreenStart)
        width: 260px
        height: 260px
        +border-radius(16px)

      @media (max-width: $smallScreenEnd), (any-pointer: coarse)
        width: 112px
        height: 112px
        +border-radius(4px)

    > aside
      display: flex
      width: 100%
      flex: 1

      @media (min-width: $bigScreenStart)
        gap: 30px

      @media (max-width: $smallScreenEnd), (any-pointer: coarse)
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

        @media (max-width: $smallScreenEnd), (any-pointer: coarse)
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

            @media (max-width: $smallScreenEnd), (any-pointer: coarse)
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

            @media (max-width: $smallScreenEnd), (any-pointer: coarse)
              display: none

        > .stats
          @media (min-width: $bigScreenStart)
            display: flex
            flex-direction: column
            align-items: flex-start
            gap: 20px
            width: 100%

          @media (max-width: $smallScreenEnd), (any-pointer: coarse)

          > .status
            display: flex
            align-items: center
            +user-select(none)

            @media (min-width: $bigScreenStart)
              gap: 8px

            @media (max-width: $smallScreenEnd), (any-pointer: coarse)
              gap: 4px

            > .round
              background-color: $crumbsGray
              +border-radius(50%)
              aspect-ratio: 1

              @media (min-width: $bigScreenStart)
                width: 16px

              @media (max-width: $smallScreenEnd), (any-pointer: coarse)
                width: 12px

            > .title
              color: $lotBidTitle
              line-height: 1

              @media (min-width: $bigScreenStart)
                font-size: 20px

              @media (max-width: $smallScreenEnd), (any-pointer: coarse)
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
                background-color: $green
                +border-radius(40px)
                color: $darkgreen
                font-size: 20px
                line-height: 1
                +user-select(none)
                cursor: pointer
                text-align: center

                &:hover
                  background-color: #18d793

                &:active
                  padding: 11px 24px 9px

              > .socials
                flex: 1

            @media (max-width: $smallScreenEnd), (any-pointer: coarse)
              display: none

      > .price
        @media (min-width: $bigScreenStart)
          display: flex
          align-items: center
          align-self: normal

        @media (max-width: $smallScreenEnd), (any-pointer: coarse)

        > .winner
          @media (min-width: $bigScreenStart)
            display: flex
            align-items: center
            flex-direction: column
            gap: 12px
            padding: 12px 18px
            background-color: $headerGreen
            +border-radius(10px)

            > .title
              color: $white
              font-size: 17px
              line-height: 1

            > .address
              color: $white
              font-size: 20px
              line-height: 1
              font-variant-numeric: lining-nums

          @media (max-width: $smallScreenEnd), (any-pointer: coarse)
            display: none

        > .cost
          display: flex
          align-items: center

          @media (min-width: $bigScreenStart)
            flex-direction: column
            gap: 16px
            width: 180px
            height: 180px
            justify-content: center

          @media (max-width: $smallScreenEnd), (any-pointer: coarse)

          > .fire
            @media (min-width: $bigScreenStart)
              height: 80px
              width: 80px

            @media (max-width: $smallScreenEnd), (any-pointer: coarse)
              height: 24px
              width: 24px

          > .value
            display: flex

            @media (min-width: $bigScreenStart)
              flex-direction: column
              align-items: center

            @media (max-width: $smallScreenEnd), (any-pointer: coarse)
              gap: 4px
              align-items: baseline

            > .number
              color: $white
              font-variant-numeric: lining-nums

              @media (min-width: $bigScreenStart)
                font-size: 24px

              @media (max-width: $smallScreenEnd), (any-pointer: coarse)
                font-size: 17px

            > .postfix
              color: $white

              @media (min-width: $bigScreenStart)
                font-size: 20px

              @media (max-width: $smallScreenEnd), (any-pointer: coarse)
                font-size: 15px

  > .button
    @media (min-width: $bigScreenStart)
      display: none

    @media (max-width: $smallScreenEnd), (any-pointer: coarse)
      background-color: $green
      padding: 6px 12px
      text-align: center
      +border-radius(40px)
      font-size: 16px
      color: $lotButtonBackground
      width: calc(100% - 12px)

      &:hover
        background-color: #18d793

      &:active
        padding: 7px 12px 5px
</style>