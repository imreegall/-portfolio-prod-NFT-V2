<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "parallax-frame3",

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
          size: 160,
          position: [-600, -170, -6],
        },

        {
          size: 90,
          position: [-620, 100, -24],
          blur: 1,
        },

        {
          size: 160,
          position: [-480, 230, -52],
        },

        {
          size: 70,
          position: [-470, 50, -22],
          blur: 1,
        },

        {
          size: 100,
          position: [-350, -120, 48],
          blur: 1,
        },

        {
          size: 70,
          position: [-290, 160, 0],
          blur: 1,
        },

        {
          size: 90,
          position: [-210, 10, -40],
          blur: 0.5,
        },

        {
          size: 190,
          position: [-150, -280, -16],
        },

        {
          size: 230,
          position: [-20, 160, -7],
        },

        {
          size: 50,
          position: [-90, -30, 6],
          blur: 1,
        },

        {
          size: 120,
          position: [50, -60, 20],
          blur: 0.5,
        },

        {
          size: 100,
          position: [50, -300, 3],
          blur: 1,
        },

        {
          size: 100,
          position: [60, 330, 143],
          blur: 1,
        },

        {
          size: 90,
          position: [280, -300, 16],
          blur: 1,
        },

        {
          size: 100,
          position: [360, 270, -18],
          blur: 0.5,
        },

        {
          size: 100,
          position: [570, -330, -26],
        },

        {
          size: 60,
          position: [620, 330, 30],
          blur: 1,
        },
      ],
    }
  },

  computed: {
    iconsOffsetBefore() {
      if (this.vh < 500) {
        return 0
      }

      if (this.vh > 600) {
        return 1
      }

      return (this.vh - 500) / 100
    },

    iconsOffsetAfter() {
      if (this.vh < 700) {
        return 0
      }

      if (this.vh > 800) {
        return 1
      }

      return (this.vh - 700) / 100
    },
  },
})
</script>

<template>
  <div
      class="parallax-frame3"
  >
    <main
        :style="{
            filter: `brightness(${ 100 * (1 / Math.cbrt(iconsOffsetBefore)) }%)`,
        }"
    >
      <div class="background"></div>

      <div
          class="explode"
          :style="{
            filter: `opacity(${ 1 - Math.cbrt(Math.cbrt(iconsOffsetBefore)) })`,
        }"
      ></div>

      <div class="text">
        We invite you to pay close attention
        to a new trend, this is NFT in the Bitcoin blockchain.
        In early 2023, Bitcoin enthusiast Casey
        Rodarmor created the Ordinal protocol.
        This protocol

        <br><br>

        allows you to create NFTs in the Bitcoin
        blockchain itself, the image is forever
        recorded in the blockchain, it is completely
        uploaded there and no one can pull
        it out or delete it from there.

        <br><br>

        The Bitcoin blockchain itself acts as a repository
        for your NFT and no attack on the Blockchain
        can remove it from there.
      </div>

      <div
          :class="`icon-wrapper`"
          v-for="(icon, index) in icons"
          :key="`parallax-frame3-icon-${ index + 1 }`"
          :style="{
            width: `calc(100% / 1920 * ${ icon.size })`,
            transform: `translateX(calc(100% / ${ icon.size } * ${ icon.position[0] * iconsOffsetBefore }))
                translateY(calc(100% / ${ icon.size } * ${ icon.position[1] * iconsOffsetBefore - icon.size * iconsOffsetAfter }))
                rotate(${ icon.position[2] + ((20 + 10 * ((index + 1) % 5)) * (iconsOffsetBefore === 0 ? 0 : (1 / iconsOffsetBefore - 1))) }deg)
                scale(${ Math.cbrt(iconsOffsetBefore) })`,
            filter: `blur(${ icon.blur }px)` || `unset`,
            mixBlendMode: icon.mixBlendMode || `unset`,
            zIndex: icon.size,
        }"
      >
        <div
            class="icon"
            :class="{
                'icon-small': icon.size < 50,
                'icon-medium': icon.size < 100,
                'icon-large': icon.size >= 100,
            }"
            :style="{
              backgroundImage: `url(/assets/images/frame3/icons/${ index + 1 }.png)`,
              animationDuration: `${ 8 + (index + 1) % 5 }s`
          }"
        ></div>
      </div>
    </main>
  </div>
</template>

<style scoped lang="sass">
.parallax-frame3
  width: 100%
  height: 100vh
  //position: fixed
  position: relative
  display: flex
  align-items: center
  justify-content: center
  //transition: .1s

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
      background-image: url("/public/assets/images/frame3/background.png")
      +background-image-settings()
      pointer-events: none
      width: 100%
      height: 100vh
      transform: rotateY(180deg)
      mix-blend-mode: plus-lighter

    .explode
      position: absolute
      width: 100%
      height: 100%
      background-color: white
      z-index: 500

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
      max-width: calc(100% / 1920 * 480)
      transform: translateX(calc(100% / 480 * 450))

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

      .icon
        position: absolute
        animation-timing-function: ease-in-out
        animation-iteration-count: infinite
        width: 100%
        height: 100%
        +background-image-settings()
        +border-radius(3%)

        &.icon-small
          animation-name: iconSmall

        &.icon-medium
          animation-name: iconMedium

        &.icon-large
          animation-name: iconLarge
</style>