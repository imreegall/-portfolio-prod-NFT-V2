<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "parallax-frame2",

  props: {
    vh: {
      type: Number,
      default() {
        return 0
      },
    },
  },

  data() {
    return {
      isMobile: false,

      apes: [
        {
          id: 1,

          desktop: {
            size: 80,
            position: [-700, -200, -48],
            blur: 1,
            mixBlendMode: "plus-lighter",
          },
        },

        {
          id: 2,

          desktop: {
            size: 140,
            position: [-500, -300, -25],
            mixBlendMode: "plus-lighter",
          },
        },

        {
          id: 3,

          desktop: {
            size: 40,
            position: [-360, -200, -33],
            blur: 1,
            mixBlendMode: "plus-lighter",
          },
        },

        {
          id: 4,

          desktop: {
            size: 70,
            position: [-200, -270, -21],
            blur: 1,
            mixBlendMode: "plus-lighter",
          },

          mobile: {
            size: 400,
            position: [-50, -800, -3],
            blur: 1,
            mixBlendMode: "plus-lighter",
          },
        },

        {
          id: 5,

          desktop: {
            size: 40,
            position: [200, -280, 22],
            blur: 1,
            mixBlendMode: "plus-lighter",
          },

          mobile: {
            size: 250,
            position: [500, -800, 22],
            blur: 1,
            mixBlendMode: "plus-lighter",
          },
        },

        {
          id: 6,

          desktop: {
            size: 150,
            position: [400, -240, 22],
            mixBlendMode: "plus-lighter",
          },
        },

        {
          id: 7,

          desktop: {
            size: 80,
            position: [600, -300, 35],
            blur: 1,
            mixBlendMode: "plus-lighter",
          },
        },

        {
          id: 8,

          desktop: {
            size: 70,
            position: [600, -100, 42],
            blur: 1,
            mixBlendMode: "plus-lighter",
          },
        },

        {
          id: 9,

          desktop: {
            size: 70,
            position: [660, 140, 75],
            blur: 1,
            mixBlendMode: "plus-lighter",
          },
        },

        {
          id: 10,

          desktop: {
            size: 120,
            position: [350, 50, 105],
            mixBlendMode: "plus-lighter",
          },
        },

        {
          id: 11,

          desktop: {
            size: 40,
            position: [380, 300, 154],
            blur: 1,
            mixBlendMode: "plus-lighter",
          },

          mobile: {
            size: 250,
            position: [600, 500, 154],
            blur: 1,
            mixBlendMode: "plus-lighter",
          },
        },

        {
          id: 12,

          desktop: {
            size: 20,
            position: [270, 180, 67],
            blur: 0.5,
            mixBlendMode: "plus-lighter",
          },
        },

        {
          id: 13,

          desktop: {
            size: 30,
            position: [260, -70, 46],
            blur: 0.5,
            mixBlendMode: "plus-lighter",
          },
        },

        {
          id: 14,

          desktop: {
            size: 30,
            position: [150, 200, 15],
            blur: 0.5,
            mixBlendMode: "plus-lighter",
          },

          mobile: {
            size: 125,
            position: [-500, 450, 15],
            blur: 0.5,
            mixBlendMode: "plus-lighter",
          },
        },

        {
          id: 15,

          desktop: {
            size: 80,
            position: [70, -70, 31],
            blur: 0.5,
            mixBlendMode: "plus-lighter",
          },

          mobile: {
            size: 400,
            position: [250, -250, 31],
            blur: 0.5,
            mixBlendMode: "plus-lighter",
          },
        },

        {
          id: 16,

          desktop: {
            size: 30,
            position: [20, 0, -25],
            blur: 1,
            mixBlendMode: "plus-lighter",
          },

          mobile: {
            size: 125,
            position: [20, 50, -25],
            blur: 1,
            mixBlendMode: "plus-lighter",
          },
        },

        {
          id: 17,

          desktop: {
            size: 45,
            position: [-60, -30, -34],
            blur: 1,
            mixBlendMode: "plus-lighter",
          },

          mobile: {
            size: 250,
            position: [-300, -50, -34],
            blur: 1,
            mixBlendMode: "plus-lighter",
          },
        },

        {
          id: 18,

          desktop: {
            size: 100,
            position: [10, 90, -168],
            mixBlendMode: "plus-lighter",
          },

          mobile: {
            size: 500,
            position: [0, 450, -168],
            mixBlendMode: "plus-lighter",
          },
        },

        {
          id: 19,

          desktop: {
            size: 70,
            position: [-30, 300, -21],
            blur: 0.5,
            mixBlendMode: "plus-lighter",
          },

          mobile: {
            size: 350,
            position: [-550, -450, -21],
            blur: 0.5,
            mixBlendMode: "plus-lighter",
          },
        },

        {
          id: 20,

          desktop: {
            size: 40,
            position: [-160, 220, -158],
            blur: 1,
            mixBlendMode: "plus-lighter",
          },
        },

        {
          id: 21,

          desktop: {
            size: 130,
            position: [-250, 320, -18],
            mixBlendMode: "plus-lighter",
          },
        },

        {
          id: 22,

          desktop: {
            size: 80,
            position: [-470, 300, -118],
            blur: 1,
            mixBlendMode: "plus-lighter",
          },

          mobile: {
            size: 300,
            position: [-680, 50, -118],
            blur: 0.5,
            mixBlendMode: "plus-lighter",
          },
        },

        {
          id: 23,

          desktop: {
            size: 30,
            position: [-570, 220, -94],
            blur: 1,
            mixBlendMode: "plus-lighter",
          },
        },
      ],
    }
  },

  mounted() {
    this.checkMobile()

    window.addEventListener('resize', this.checkMobile)
    window.addEventListener('orientationchange', this.checkMobile)
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobile)
    window.removeEventListener('orientationchange', this.checkMobile)
  },

  methods: {
    checkMobile() {
      this.isMobile = window.matchMedia('(max-width: 1279px)').matches
    },
  },

  computed: {
    apesOffsetBefore() {
      if (this.vh < 100) {
        return 1
      }

      if (this.vh > 200) {
        return 0
      }

      return 1 - (this.vh - 100) / 100
    },

    apesOffsetAfter() {
      if (this.vh < 300) {
        return 1
      }

      if (this.vh > 400) {
        return 0
      }

      return 1 - (this.vh - 300) / 100
    },

    mobileConf() {
      return this.isMobile ? 'mobile' : 'desktop'
    },
  },
})
</script>

<template>
  <div class="parallax-frame2">
    <main>
      <div class="background"></div>

      <div class="text">
        For the entire time that NFTs have
        existed, we've seen a multitude of
        different collections across various blockchains.

        <br><br>

        All of their images are stored on hosting services,
        with the NFT itself being nothing more than
        a link to that image. If you remove the image
        from the hosting service, your token becomes
        a hollow shell.

        <br><br>

        So, what are you really buying?
      </div>

      <div
          v-for="(ape, index) in apes.filter(apeEl => apeEl[mobileConf])"
          :class="`ape-wrapper`"
          :key="`parallax-frame2-ape-${ index + 1 }`"
          :style="{
              width: `calc(100% / 1920 * ${ ape[mobileConf].size })`,
              transform: `translateX(calc(100% / ${ ape[mobileConf].size } * ${ ape[mobileConf].position[0] * apesOffsetAfter }))
                  translateY(calc(100% / ${ ape[mobileConf].size } * ${ ape[mobileConf].position[1] * apesOffsetAfter + ape[mobileConf].size * apesOffsetBefore * 2 }))
                  rotate(${ ape[mobileConf].position[2] + ((20 + 10 * ((index + 1) % 5)) * (apesOffsetAfter === 0 ? 0 : (1 / apesOffsetAfter - 1))) }deg)
                  scale(${ Math.cbrt(apesOffsetAfter) })`,
              filter: ape[mobileConf].blur ? `blur(${ ape[mobileConf].blur }px)` : 'unset',
              mixBlendMode: ape[mobileConf].mixBlendMode || `unset`,
          }"
      >
        <div
            class="ape"
            :class="{
                'ape-small': ape[mobileConf].size < 50,
                'ape-medium': ape[mobileConf].size < 100,
                'ape-large': ape[mobileConf].size >= 100,
            }"
            :style="{
                animationDuration: `${ 8 + (index + 1) % 5 }s`,
            }"
        >
          <div
              class="image"
              :style="{
                  backgroundImage: `url(/assets/images/frame2/apes/${ ape.id }.png)`,
              }"
          ></div>

          <div class="lazy-load lazy-load-image"></div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped lang="sass">
.parallax-frame2
  width: 100%
  height: 100lvh
  position: relative
  display: flex
  align-items: center
  justify-content: center
  background-color: $mainBackground
  overflow: hidden

  @media (min-width: $bigScreenStart)
    &::before
      content: ""
      display: block
      position: absolute
      top: -1px
      left: 0
      width: 100%
      height: 10%
      background: linear-gradient($mainBackground, transparent)
      z-index: 10

    &::after
      content: ""
      display: block
      position: absolute
      bottom: -1px
      left: 0
      width: 100%
      height: 10%
      background: linear-gradient(to top, $mainBackground, transparent)
      z-index: 10

  main
    width: 100%
    height: 100%
    position: absolute
    display: flex
    align-items: center
    justify-content: center
    background-color: #141A28

    @media (min-width: $bigScreenStart)

    @media (max-width: $smallScreenEnd), (any-pointer: coarse)
      flex-direction: column

    .background
      background-image: url("/assets/images/frame2/background.png")
      +background-image-settings()
      pointer-events: none
      width: 100%

      @media (min-width: $bigScreenStart)
        mix-blend-mode: plus-lighter
        height: 100vh

      @media (max-width: $smallScreenEnd), (any-pointer: coarse)
        transform: scale(1.7)
        flex: 1
        height: 100%

    .explode
      position: absolute
      width: 100%
      height: 100%
      background-color: white
      z-index: 9

    .text
      color: #F0FBF7
      font-family: Raleway, "Calibri Light", sans-serif
      font-weight: 500
      line-height: 130%

      @media (min-width: $bigScreenStart)
        position: absolute
        max-width: calc(100% / 1920 * 523)
        padding: 1% 1.3%
        transform: translateX(calc(100% / 523 * -400))
        +border-radius(10px)
        font-size: 1dvmax
        background-color: rgba(10, 15, 36, 0.70)

      @media (max-width: $smallScreenEnd), (any-pointer: coarse)
        width: 100%
        display: flex
        justify-content: center
        align-items: center
        z-index: 10
        font-size: 16px
        padding: 20px
        text-align: center
        background-color: rgba(10, 15, 36)
        +border-radius(10px 10px 0 0)

    @keyframes apeSmall
      0%
        transform: translateX(0) translateY(0) rotate(0)

      25%
        transform: translateX(0) translateY(calc(100% / 50 * -5)) rotate(-5deg)

      50%
        transform: translateX(calc(100% / 50 * 5)) translateY(calc(100% / 50 * -5)) rotate(0)

      75%
        transform: translateX(calc(100% / 50 * 5)) translateY(0) rotate(5deg)

      100%
        transform: translateX(0) translateY(0) rotate(0)

    @keyframes apeMedium
      0%
        transform: translateX(0) translateY(0) rotate(0)

      25%
        transform: translateX(0) translateY(calc(100% / 100 * -10)) rotate(-5deg)

      50%
        transform: translateX(calc(100% / 100 * 10)) translateY(calc(100% / 100 * -10)) rotate(0)

      75%
        transform: translateX(calc(100% / 100 * 10)) translateY(0) rotate(5deg)

      100%
        transform: translateX(0) translateY(0) rotate(0)

    @keyframes apeLarge
      0%
        transform: translateX(0) translateY(0) rotate(0)

      25%
        transform: translateX(0) translateY(calc(100% / 150 * -15)) rotate(-5deg)

      50%
        transform: translateX(calc(100% / 150 * 15)) translateY(calc(100% / 150 * -15)) rotate(0)

      75%
        transform: translateX(calc(100% / 150 * 15)) translateY(0) rotate(5deg)

      100%
        transform: translateX(0) translateY(0) rotate(0)

    .ape-wrapper
      position: absolute
      aspect-ratio: 1
      mix-blend-mode: plus-lighter

      @media (min-width: $bigScreenStart)

      @media (max-width: $smallScreenEnd), (any-pointer: coarse)
        margin-bottom: 55%
        margin-left: 5%

      .ape
        position: absolute
        animation-timing-function: ease-in-out
        animation-iteration-count: infinite
        width: 100%
        height: 100%
        +border-radius(3%)
        overflow: hidden

        &.ape-small
          animation-name: apeSmall

        &.ape-medium
          animation-name: apeMedium

        &.ape-large
          animation-name: apeLarge

        .image
          +background-image-settings()
          width: 100%
          height: 100%
          position: absolute
          top: 0
          left: 0
          z-index: 999
          display: flex

        .lazy-load
          width: 100%
          height: 100%
          position: absolute
          top: 0
          left: 0
          z-index: -999
          display: flex
</style>