<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "parallax-frame4",

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
      icons: [
        {
          id: 1,

          desktop: {
            size: 50,
            position: [-560, -140, 0],
          },

          mobile: {
            size: 120,
            position: [-750, -1050, 0],
          },
        },

        {
          id: 2,

          desktop: {
            size: 50,
            position: [-390, -120, 0],
          },

          mobile: {
            size: 120,
            position: [-560, -1020, 0],
          },
        },

        {
          id: 3,

          desktop: {
            size: 50,
            position: [-180, -170, 0],
          },

          mobile: {
            size: 120,
            position: [-270, -1100, 0],
          },
        },

        {
          id: 4,

          desktop: {
            size: 50,
            position: [70, -150, 0],
          },

          mobile: {
            size: 120,
            position: [70, -1050, 0],
          },
        },

        {
          id: 5,

          desktop: {
            size: 50,
            position: [460, -250, 0],
          },

          mobile: {
            size: 120,
            position: [650, -1220, 0],
          },
        },

        {
          id: 6,

          desktop: {
            size: 50,
            position: [560, -380, 0],
          },

          mobile: {
            size: 120,
            position: [800, -1400, 0],
          },
        },

        {
          id: 7,

          desktop: {
            size: 50,
            position: [340, 240, 0],
          },

          mobile: {
            size: 120,
            position: [470, -520, 0],
          },
        },

        {
          id: 8,

          desktop: {
            size: 50,
            position: [190, 370, 0],
          },

          mobile: {
            size: 120,
            position: [280, -330, 0],
          },
        },

        {
          id: 9,

          desktop: {
            size: 50,
            position: [-330, 230, 0],
          },

          mobile: {
            size: 120,
            position: [-460, -500, 0],
          },
        },
      ],
    }
  },

  computed: {
    iconsOffset() {
      if (this.vh < 600) {
        return 1
      }

      if (this.vh > 700 && this.vh < 800) {
        return 0
      }

      if (this.vh > 900) {
        return -1
      }

      if (this.vh <= 700) {
        return 1 - (this.vh - 600) / 100
      } else {
        return (this.vh - 800) / -100
      }
    },
  },
})
</script>

<template>
  <div class="parallax-frame4">
    <div class="background"></div>

    <div
        class="star-sky"
        :style="{
            transform: `translateY(calc(100% / 750 * ${ 200 * iconsOffset }))`,
        }"
    ></div>

    <div
        :class="`icon-wrapper only-ds`"
        v-for="icon in icons"
        :style="{
            width: `calc(100% / 1920 * ${ icon.desktop.size })`,
            transform: `translateX(calc(100% / ${ icon.desktop.size } * ${ icon.desktop.position[0] }))
                translateY(calc(100% / ${ icon.desktop.size } * ${ icon.desktop.position[1] + 200 * iconsOffset }))`,
        }"
    >
      <div
          class="icon lazy-load-image"
          :style="{
              backgroundImage: `url(/assets/images/frame4/icons/${ icon.id }.png)`,
          }"
      ></div>
    </div>

    <div
        :class="`icon-wrapper only-mb`"
        v-for="icon in icons"
        :style="{
            width: `calc(100% / 1920 * ${ icon.mobile.size })`,
            transform: `translateX(calc(100% / ${ icon.mobile.size } * ${ icon.mobile.position[0] }))
                translateY(calc(100% / ${ icon.mobile.size } * ${ icon.mobile.position[1] + 200 * iconsOffset }))`,
        }"
    >
      <div
          class="icon lazy-load-image"
          :style="{
              backgroundImage: `url(/assets/images/frame4/icons/${ icon.id }.png)`,
          }"
      ></div>
    </div>

    <div class="text">
      Every person has their own star,
      their soul connected to that
      celestial body. Similarly, in
      the world of Bitcoin, every image
      is tied to its own Satoshi, forever bound.

      <br><br>

      You can immortalize the photos of your
      loved ones in the legendary Bitcoin
      blockchain as a tribute to their memory.

      <br><br>

      Isn't this what we've all been waiting
      for in the world of NFTs?
    </div>
  </div>
</template>

<style scoped lang="sass">
.parallax-frame4
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

  .background
    background-image: url("/assets/images/frame4/background.png")
    +background-image-settings()
    pointer-events: none
    width: 100%
    height: 100vh
    mix-blend-mode: plus-lighter

    @media (min-width: $bigScreenStart)

    @media (max-width: $smallScreenEnd), (any-pointer: coarse)
      transform: scale(1.5)

  .star-sky
    position: absolute
    z-index: 10
    +background-image-settings()
    background-image: url("/assets/images/frame4/starSky.svg")
    aspect-ratio: calc(1127 / 746.5)
    pointer-events: none

    @media (min-width: $bigScreenStart)
      width: calc(100% / 1920 * 1127)

    @media (max-width: $smallScreenEnd), (any-pointer: coarse)
      width: 350px
      margin-bottom: 90%

  .icon-wrapper
    position: absolute
    aspect-ratio: 1
    z-index: 10

    .icon
      position: absolute
      width: 100%
      height: 100%
      +background-image-settings()
      +border-radius(2px)
      box-shadow: 0 0 20px 2px #1CC2A5

  .text
    color: #F0FBF7
    font-family: Raleway, "Calibri Light", sans-serif
    font-weight: 500
    line-height: 130%
    position: absolute
    background-color: rgba(10, 15, 36, 0.70)

    @media (min-width: $bigScreenStart)
      +border-radius(10px)
      padding: 1% 1.3%
      max-width: calc(100% / 1920 * 539)
      top: calc((100% - (100% / 1080 * 290)) / 2 + 100% / 1080 * 75)
      font-size: 1dvmax

    @media (max-width: $smallScreenEnd), (any-pointer: coarse)
      bottom: 0
      padding: 20px
      +border-radius(10px 10px 0 0)
      font-size: 16px
      text-align: center
</style>