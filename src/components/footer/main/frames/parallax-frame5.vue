<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "parallax-frame5",

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
})
</script>

<template>
  <div class="parallax-frame5">
    <div class="background"></div>

    <main>
      <div class="text">
        That's why we created the Legendary Historical
        Collection for you! It consists of 1000
        Bitcoin NFTs dedicated to historical
        figures of the past. To those people
        who left an unforgettable contribution

        <br><br>

        in the development of humanity,
        countries, cultures and peoples!
        May their stars forever remain shining
        brightly in the cosmic world of Bitcoin!
        The Legendary Historical Collection will
        be the most recognizable, dear

        <br><br>

        and popular among all Bitcoin collections.
        We are humans, that means Legend humans
        should come first! Not animals and stones,
        not fictional characters and objects,
        but you and I - people!
      </div>

      <div class="button">
        <span>OKX Marketplace</span>
      </div>
    </main>
  </div>
</template>

<style scoped lang="sass">
.parallax-frame5
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
    background-image: url("/public/assets/images/frame5/background.png")
    +background-image-settings()
    pointer-events: none
    width: 100%
    height: 100vh
    mix-blend-mode: plus-lighter

  main
    display: flex
    flex-direction: column
    gap: 50px
    align-items: center
    position: absolute

    .text
      color: #F0FBF7
      font-family: Raleway, "Calibri Light", sans-serif
      font-size: 1dvmax
      font-weight: 500
      line-height: 130%
      background-color: rgba(10, 15, 36, 0.70)
      +border-radius(10px)
      padding: 1.4% 1.8%
      max-width: calc(100% / 1920 * 810)

    .button
      background-color: #1CC287
      +border-radius(999px)
      padding: 0.8% 3% 0.9%
      font-family: Raleway, "Calibri Light", sans-serif
      font-size: 1.3dvmax
      font-weight: 600
      color: #003600
      position: relative
      +user-select(none)

      &:hover
        cursor: pointer
        background-color: #1ed994

      &:active
        > *
          top: 1px

      span
        position: relative
</style>