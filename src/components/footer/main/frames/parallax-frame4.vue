<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "parallax-frame4",

  props: {
    percent: {
      type: Number,
      default() {
        return 0
      },
    },

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
          size: 50,
          position: [-560, -140, 0],
        },

        {
          size: 50,
          position: [-390, -120, 0],
        },

        {
          size: 50,
          position: [-180, -170, 0],
        },

        {
          size: 50,
          position: [70, -150, 0],
        },

        {
          size: 50,
          position: [460, -250, 0],
        },

        {
          size: 50,
          position: [560, -380, 0],
        },

        {
          size: 50,
          position: [340, 240, 0],
        },

        {
          size: 50,
          position: [190, 370, 0],
        },

        {
          size: 50,
          position: [-330, 230, 0],
        },
      ],
    }
  },

  computed: {
    iconsOffset() {
      if (this.vh < 700) {
        return 1
      }

      if (this.vh > 800 && this.vh < 900) {
        return 0
      }

      if (this.vh > 1000) {
        return -1
      }

      if (this.vh <= 800) {
        return 1 - (this.vh - 700) / 100
      } else {
        return (this.vh - 900) / -100
      }

      // if (this.percent < 79) {
      //   return 1
      // }
      //
      // if (this.percent > 85 && this.percent < 94) {
      //   return 0
      // }
      //
      // if (this.percent > 100) {
      //   return -1
      // }
      //
      // if (this.percent <= 85) {
      //   return 1 - (this.percent - 79) / 6
      // } else {
      //   return (this.percent - 94) / -6
      // }
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
        :class="`icon-wrapper`"
        v-for="(icon, index) in icons"
        :key="`parallax-frame4-icon-${ index + 1 }`"
        :style="{
            width: `calc(100% / 1920 * ${ icon.size })`,
            transform: `translateX(calc(100% / ${ icon.size } * ${ icon.position[0] }))
                translateY(calc(100% / ${ icon.size } * ${ icon.position[1] + 200 * iconsOffset }))`,
        }"
    >
      <div
          class="icon"
          :style="{
              backgroundImage: `url(/public/assets/images/frame4/icons/${ index + 1 }.png)`,
          }"
      ></div>
    </div>

    <div class="text">
      Each person has his own star,
      his soul is connected to this star.
      Also in the world of Bitcoin,
      each image has its own satoshi,
      to which it becomes forever tied!

      <br><br>

      You can put photos of your loved
      ones in their memory on the legendary
      Bitcoin blockchain!

      <br><br>

      Isn't this what we've been waiting
      for in the NFT world?
    </div>
  </div>
</template>

<style scoped lang="sass">
.parallax-frame4
  width: 100%
  height: 100vh
  //position: fixed
  position: relative
  display: flex
  align-items: center
  justify-content: center
  //transition: .1s
  background-color: $mainBackground

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
    background-image: url("/public/assets/images/frame4/background.png")
    +background-image-settings()
    pointer-events: none
    width: 100%
    height: 100vh
    mix-blend-mode: plus-lighter

  .star-sky
    position: absolute
    z-index: 10
    +background-image-settings()
    background-image: url("/public/assets/images/frame4/starSky.svg")
    width: calc(100% / 1920 * 1127)
    aspect-ratio: calc(1127 / 746.5)
    pointer-events: none

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
      box-shadow: 0 0 74px 0 #1CC2A5

  .text
    color: #F0FBF7
    font-family: Raleway, "Calibri Light", sans-serif
    font-size: 1dvmax
    font-weight: 500
    line-height: 130%
    position: absolute
    background-color: rgba(10, 15, 36, 0.70)
    +border-radius(10px)
    padding: 1% 1.3%
    max-width: calc(100% / 1920 * 539)
    top: calc((100% - (100% / 1080 * 290)) / 2 + 100% / 1080 * 75)
</style>