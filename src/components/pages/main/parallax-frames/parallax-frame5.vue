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

  methods: {
    buttonClick() {
      this.$router.push({ name: "lots" })
    },
  },
})
</script>

<template>
  <div class="parallax-frame5">
    <div class="background">
      <div class="rocket only-mb"></div>
    </div>

    <main>
      <div class="text">
        That's why we've created The Legendary
        Historical Collection just for you! It
        consists of 1,000 Bitcoin NFTs dedicated
        to historical figures of the past—individuals
        who made an unforgettable contribution
        to the development of humanity, countries,
        cultures, and nations. Let their stars
        forever shine brightly in the cosmic
        world of Bitcoin!

        <br><br>

        Over time, this collection is poised to
        become the most recognizable, valuable,
        and popular among all Bitcoin collections.
        We are humans, and that means Legend
        humans should take the top spot! Not
        beasts, fictional characters, or
        objects, but us - people!

        <br><br>

        Let's celebrate the true legends who
        have left their mark on our world, as
        they deserve to be celebrated and
        remembered in the realm of Bitcoin NFTs.
      </div>

      <div class="button only-ds" @click="buttonClick">
        <span>Auction house</span>
      </div>
    </main>
  </div>
</template>

<style scoped lang="sass">
.parallax-frame5
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
    background-image: url("/assets/images/frame5/background.jpg")
    +background-image-settings()
    pointer-events: none
    width: 100%
    height: 100vh
    mix-blend-mode: plus-lighter

    @media (min-width: $bigScreenStart)

    @media (max-width: $smallScreenEnd)
      transform: scale(1.2) translateY(-280px)
      display: flex
      align-items: center
      justify-content: center

    .rocket
      width: 150px
      aspect-ratio: calc(185 / 120)
      +background-image-settings()
      background-image: url("/assets/images/frame5/rocket.png")
      mix-blend-mode: screen
      transform: rotate(3deg) translateY(50px) translateX(-50px)

  main
    display: flex
    flex-direction: column
    gap: 50px
    align-items: center
    position: absolute

    @media (min-width: $bigScreenStart)

    @media (max-width: $smallScreenEnd)
      width: 100%
      height: 100%

    .text
      color: #F0FBF7
      font-family: Raleway, "Calibri Light", sans-serif
      font-weight: 500
      line-height: 130%
      background-color: rgba(10, 15, 36, 0.70)

      @media (min-width: $bigScreenStart)
        +border-radius(10px)
        padding: 1.4% 1.8%
        max-width: calc(100% / 1920 * 810)
        font-size: 1dvmax

      @media (max-width: $smallScreenEnd)
        bottom: 0
        position: absolute
        width: 100%
        padding: 20px
        +border-radius(10px 10px 0 0)
        font-size: 16px
        text-align: center

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