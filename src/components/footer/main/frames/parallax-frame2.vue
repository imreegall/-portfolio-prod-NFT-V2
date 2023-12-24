<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "parallax-frame2",

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
      apes: [
        {
          size: 80,
          position: [-700, -200, -48],
          blur: 1,
          mixBlendMode: "plus-lighter",
        },

        {
          size: 140,
          position: [-500, -300, -25],
        },

        {
          size: 40,
          position: [-360, -200, -33],
          blur: 1,
          mixBlendMode: "plus-lighter",
        },

        {
          size: 70,
          position: [-200, -270, -21],
          blur: 1,
          mixBlendMode: "plus-lighter",
        },

        {
          size: 40,
          position: [200, -280, 22],
          blur: 1,
        },

        {
          size: 150,
          position: [400, -240, 22],
          mixBlendMode: "plus-lighter",
        },

        {
          size: 80,
          position: [600, -300, 35],
          blur: 1,
          mixBlendMode: "plus-lighter",
        },

        {
          size: 70,
          position: [600, -100, 42],
          blur: 1,
          mixBlendMode: "plus-lighter",
        },

        {
          size: 70,
          position: [660, 140, 75],
          blur: 1,
          mixBlendMode: "plus-lighter",
        },

        {
          size: 120,
          position: [350, 50, 105],
          mixBlendMode: "plus-lighter",
        },

        {
          size: 40,
          position: [380, 300, 154],
          blur: 1,
          mixBlendMode: "plus-lighter",
        },

        {
          size: 20,
          position: [270, 180, 67],
          blur: 0.5,
          mixBlendMode: "plus-lighter",
        },

        {
          size: 30,
          position: [260, -70, 46],
          blur: 0.5,
          mixBlendMode: "plus-lighter",
        },

        {
          size: 30,
          position: [150, 200, 15],
          blur: 0.5,
          mixBlendMode: "plus-lighter",
        },

        {
          size: 80,
          position: [70, -70, 31],
          blur: 0.5,
          mixBlendMode: "plus-lighter",
        },

        {
          size: 30,
          position: [20, 0, -25],
          blur: 1,
          mixBlendMode: "plus-lighter",
        },

        {
          size: 45,
          position: [-60, -30, -34],
          blur: 1,
          mixBlendMode: "plus-lighter",
        },

        {
          size: 100,
          position: [10, 90, -168],
          mixBlendMode: "plus-lighter",
        },

        {
          size: 70,
          position: [-30, 300, -21],
          blur: 0.5,
          mixBlendMode: "plus-lighter",
        },

        {
          size: 40,
          position: [-160, 220, -158],
          blur: 1,
          mixBlendMode: "plus-lighter",
        },

        {
          size: 130,
          position: [-250, 320, -18],
          mixBlendMode: "plus-lighter",
        },

        {
          size: 80,
          position: [-470, 300, -118],
          blur: 1,
          mixBlendMode: "plus-lighter",
        },

        {
          size: 30,
          position: [-570, 220, -94],
          blur: 1,
          mixBlendMode: "plus-lighter",
        },
      ],
    }
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
  },
})
</script>

<template>
  <div
      class="parallax-frame2"
  >
    <main
        :style="{
            filter: `brightness(${ 100 * (1 / Math.cbrt(apesOffsetAfter)) }%)`,
        }"
    >
      <div class="background"></div>

      <div
          class="explode"
          :style="{
            filter: `opacity(${ 1 - Math.cbrt(Math.cbrt(apesOffsetAfter)) })`,
        }"
      ></div>

      <div class="text">
        Over the entire existence of NFTs,
        we have seen many different
        collections on a variety of blockchains.

        <br><br>

        All their images are stored on hosting sites;
        the NFT itself is simply a link to this image.
        If you delete the image from the hosting,
        your token will become a dummy.

        <br><br>

        So what are you actually buying?
      </div>

      <div
          :class="`ape-wrapper`"
          v-for="(ape, index) in apes"
          :key="`parallax-frame2-ape-${ index + 1 }`"
          :style="{
            width: `calc(100% / 1920 * ${ ape.size })`,
            transform: `translateX(calc(100% / ${ ape.size } * ${ ape.position[0] * apesOffsetAfter }))
                translateY(calc(100% / ${ ape.size } * ${ ape.position[1] * apesOffsetAfter + ape.size * apesOffsetBefore * 2 }))
                rotate(${ ape.position[2] + ((20 + 10 * ((index + 1) % 5)) * (apesOffsetAfter === 0 ? 0 : (1 / apesOffsetAfter - 1))) }deg)
                scale(${ Math.cbrt(apesOffsetAfter) })`,
            filter: `blur(${ ape.blur }px)` || `unset`,
            mixBlendMode: ape.mixBlendMode || `unset`,
        }"
      >
        <div
            class="ape"
            :class="{
                'ape-small': ape.size < 50,
                'ape-medium': ape.size < 100,
                'ape-large': ape.size >= 100,
            }"
            :style="{
              backgroundImage: `url(/assets/images/frame2/apes/${ index + 1 }.png)`,
              animationDuration: `${ 8 + (index + 1) % 5 }s`,
          }"
        ></div>
      </div>
    </main>
  </div>
</template>

<style scoped lang="sass">
.parallax-frame2
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

  main
    width: 100%
    height: 100%
    position: absolute
    display: flex
    align-items: center
    justify-content: center
    background-color: #141A28

    .background
      background-image: url("/public/assets/images/frame2/background.png")
      +background-image-settings()
      pointer-events: none
      width: 100%
      height: 100vh
      mix-blend-mode: plus-lighter

    .explode
      position: absolute
      width: 100%
      height: 100%
      background-color: white
      z-index: 9

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
      max-width: calc(100% / 1920 * 523)
      transform: translateX(calc(100% / 523 * -400))

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

      .ape
        position: absolute
        animation-timing-function: ease-in-out
        animation-iteration-count: infinite
        width: 100%
        height: 100%
        +background-image-settings()
        +border-radius(3%)
        mix-blend-mode: plus-lighter

        &.ape-small
          animation-name: apeSmall

        &.ape-medium
          animation-name: apeMedium

        &.ape-large
          animation-name: apeLarge
</style>