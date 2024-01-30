<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "parallax-frame3",

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

      icons: [
        {
          id: 1,

          desktop: {
            size: 160,
            position: [-600, -170, -6],
          },
        },

        {
          id: 2,

          desktop: {
            size: 90,
            position: [-620, 100, -24],
            blur: 1,
          },
        },

        {
          id: 3,

          desktop: {
            size: 160,
            position: [-480, 230, -52],
          },
        },

        {
          id: 4,

          desktop: {
            size: 70,
            position: [-470, 50, -22],
            blur: 1,
          },
        },

        {
          id: 5,

          desktop: {
            size: 100,
            position: [-350, -120, 48],
            blur: 1,
          },
        },

        {
          id: 6,

          desktop: {
            size: 70,
            position: [-290, 160, 0],
            blur: 1,
          },
        },

        {
          id: 7,

          desktop: {
            size: 90,
            position: [-210, 10, -40],
            blur: 0.5,
          },

          mobile: {
            size: 400,
            position: [-600, -900, -8],
            blur: 0.5,
          }
        },

        {
          id: 8,

          desktop: {
            size: 190,
            position: [-150, -280, -16],
          },

          mobile: {
            size: 600,
            position: [-1000, -1400, -16],
          }
        },

        {
          id: 9,

          desktop: {
            size: 230,
            position: [-20, 160, -7],
          },

          mobile: {
            size: 800,
            position: [200, -500, 4],
          }
        },

        {
          id: 10,

          desktop: {
            size: 50,
            position: [-90, -30, 6],
            blur: 1,
          },

          mobile: {
            size: 200,
            position: [-970, -720, 6],
            blur: 1,
          }
        },

        {
          id: 11,

          desktop: {
            size: 120,
            position: [50, -60, 20],
            blur: 0.5,
          },

          mobile: {
            size: 400,
            position: [-550, -200, 8],
            blur: 0.5,
          }
        },

        {
          id: 12,

          desktop: {
            size: 100,
            position: [50, -300, 3],
            blur: 1,
          },
        },

        {
          id: 13,

          desktop: {
            size: 100,
            position: [60, 330, 143],
            blur: 1,
          },
        },

        {
          id: 14,

          desktop: {
            size: 90,
            position: [280, -300, 16],
            blur: 1,
          },

          mobile: {
            size: 400,
            position: [450, -1400, 16],
            blur: 1,
          }
        },

        {
          id: 15,

          desktop: {
            size: 100,
            position: [360, 270, -18],
            blur: 0.5,
          },
        },

        {
          id: 16,

          desktop: {
            size: 100,
            position: [570, -330, -26],
          },
        },

        {
          id: 17,

          desktop: {
            size: 60,
            position: [620, 330, 30],
            blur: 1,
          },
        },

        {
          id: 18,

          mobile: {
            size: 300,
            position: [-230, -1300, 16],
            blur: 1,
          },
        },
      ],
    }
  },

  mounted() {
    this.checkMobile()

    window.addEventListener('resize', this.checkMobile)
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobile)
  },

  methods: {
    checkMobile() {
      this.isMobile = window.matchMedia('(max-width: 1279px)').matches
    },
  },

  computed: {
    iconsOffsetBefore() {
      if (this.vh < 400) {
        return 0
      }

      if (this.vh > 500) {
        return 1
      }

      return (this.vh - 400) / 100
    },

    iconsOffsetAfter() {
      if (this.vh < 600) {
        return 0
      }

      if (this.vh > 700) {
        return 1
      }

      return (this.vh - 600) / 100
    },

    mobileConf() {
      return this.isMobile ? 'mobile' : 'desktop'
    },
  },
})
</script>

<template>
  <div class="parallax-frame3">
    <main>
      <div class="background"></div>

      <div class="text">
        We invite you to take a close look
        at a new trend - NFTs on the Bitcoin
        blockchain. In early 2023, Bitcoin
        enthusiast Casey Rodarmor introduced
        the Ordinal protocol.

        <br><br>

        This protocol enables the creation
        of NFTs directly within the Bitcoin
        blockchain, with the image being
        permanently embedded in the blockchain,
        fully stored and protected there,
        impervious to removal or deletion by
        anyone. The Bitcoin blockchain itself
        serves as the secure vault for your NFT,
        immune to any attacks that might attempt to remove it.

        <br><br>

        In essence, your NFT is forever enshrined
        within the robust infrastructure of the
        Bitcoin blockchain, safeguarded from any
        potential threats.
      </div>

      <div
          :class="`icon-wrapper`"
          v-for="(icon, index) in icons.filter(apeEl => apeEl[mobileConf])"
          :style="{
              width: `calc(100% / 1920 * ${ icon[mobileConf].size })`,
              transform: `translateX(calc(100% / ${ icon[mobileConf].size } * ${ icon[mobileConf].position[0] * iconsOffsetBefore }))
                  translateY(calc(100% / ${ icon[mobileConf].size } * ${ icon[mobileConf].position[1] * iconsOffsetBefore - icon[mobileConf].size * iconsOffsetAfter }))
                  rotate(${ icon[mobileConf].position[2] + ((20 + 10 * ((index + 1) % 5)) * (iconsOffsetBefore === 0 ? 0 : (1 / iconsOffsetBefore - 1))) }deg)
                  scale(${ Math.cbrt(iconsOffsetBefore) })`,
              filter: icon[mobileConf].blur ? `blur(${ icon[mobileConf].blur }px)` : 'unset',
              mixBlendMode: icon[mobileConf].mixBlendMode || `unset`,
          }"
      >
        <div
            class="image-wrapper"
             :class="{
                'icon-small': icon[mobileConf].size < 50,
                'icon-medium': icon[mobileConf].size < 100,
                'icon-large': icon[mobileConf].size >= 100,
              }"
             :style="{
                  animationDuration: `${ 8 + (index + 1) % 5 }s`
              }"
        >
          <div
              class="icon lazy-load-image"
              :style="{
                  backgroundImage: `url(/assets/images/frame3/icons/${ icon.id }.png)`,
              }"
          ></div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped lang="sass">
.parallax-frame3
  width: 100%
  height: 100lvh
  position: relative
  display: flex
  align-items: center
  justify-content: center

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
      z-index: 1000

    &::after
      content: ""
      display: block
      position: absolute
      bottom: -1px
      left: 0
      width: 100%
      height: 10%
      background: linear-gradient(to top, $mainBackground, transparent)
      z-index: 1000

  main
    width: 100%
    height: 100%
    position: absolute
    display: flex
    align-items: center
    justify-content: center
    background-color: $mainBackground

    .background
      background-image: url("/assets/images/frame3/background.png")
      +background-image-settings()
      pointer-events: none
      width: 100%
      height: 100vh
      mix-blend-mode: plus-lighter

      @media (min-width: $bigScreenStart)
        transform: rotateY(180deg)

      @media (max-width: $smallScreenEnd), (any-pointer: coarse)
        transform: scale(1)

    .explode
      position: absolute
      width: 100%
      height: 100%
      background-color: white
      z-index: 500

    .text
      color: #F0FBF7
      font-family: Raleway, "Calibri Light", sans-serif
      font-weight: 500
      line-height: 130%
      position: absolute
      background-color: rgba(10, 15, 36, 0.70)

      @media (min-width: $bigScreenStart)
        padding: 1% 1.3%
        max-width: calc(100% / 1920 * 480)
        transform: translateX(calc(100% / 480 * 450))
        +border-radius(10px)
        font-size: 1dvmax

      @media (max-width: $smallScreenEnd), (any-pointer: coarse)
        bottom: 0
        padding: 20px
        +border-radius(10px 10px 0 0)
        font-size: 16px
        text-align: center
        z-index: 999

    @keyframes iconSmall
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

    @keyframes iconMedium
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

    @keyframes iconLarge
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

    .icon-wrapper
      position: absolute
      aspect-ratio: 1

      @media (min-width: $bigScreenStart)

      @media (max-width: $smallScreenEnd), (any-pointer: coarse)
        margin-bottom: -15%
        margin-left: 25%

      .image-wrapper
        animation-timing-function: ease-in-out
        animation-iteration-count: infinite
        width: 100%
        height: 100%

        &.icon-small
          animation-name: iconSmall

        &.icon-medium
          animation-name: iconMedium

        &.icon-large
          animation-name: iconLarge

        .icon
          position: absolute
          width: 100%
          height: 100%
          +background-image-settings()

          @media (min-width: $bigScreenStart)
            +border-radius(3%)

          @media (max-width: $smallScreenEnd), (any-pointer: coarse)
            +border-radius(10%)
</style>