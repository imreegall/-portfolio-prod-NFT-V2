<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "parallax-frame1",
})
</script>

<template>
  <div class="parallax-frame1">
    <div class="background"></div>

    <div class="image1"></div>

    <div class="image2"></div>

    <div class="image3"></div>

    <div class="text">
      The era of digital<br>artifacts has arrived!
    </div>
  </div>
</template>

<style scoped lang="sass">
.parallax-frame1
  width: 100%
  height: 100lvh
  position: relative
  display: flex
  align-items: center
  justify-content: center
  background-color: $mainBackground
  z-index: 10
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
    background-image: url("/assets/images/frame1/background.jpg")
    +background-image-settings()
    pointer-events: none
    width: 100%
    height: 100vh
    mix-blend-mode: color-dodge
    position: relative

    &::after
      position: absolute
      width: 100%
      height: 100%
      display: block
      content: ""
      background: linear-gradient(78deg, rgba(0, 0, 0, 0.20) 35.6%, rgba(0, 0, 0, 0.00) 49.99%)

  @media (min-width: $bigScreenStart)
    @keyframes image1
      0%
        transform: translateX(0) translateY(0)

      50%
        transform: translateX(0) translateY(calc(100% / 250 * -24))

      100%
        transform: translateX(0) translateY(0)

  @media (max-width: $smallScreenEnd)
    @keyframes image1
      0%
        transform: translateX(0) translateY(0)

      25%
        transform: translateX(0) translateY(calc(100% / 250 * -20))

      50%
        transform: translateX(0) translateY(0)

      75%
        transform: translateX(0) translateY(calc(100% / 250 * 20))

      100%
        transform: translateX(0) translateY(0)

  .image1
    background-image: url("/assets/images/frame1/NFT.svg")
    +background-image-settings()
    pointer-events: none
    position: absolute
    aspect-ratio: 1
    animation: image1 7s infinite linear
    transform: translateX(0) translateY(0)
    mix-blend-mode: difference

    @media (min-width: $bigScreenStart)
      width: calc(100% / 1920 * 250)
      margin-left: 20%
      margin-bottom: 8%

    @media (max-width: $smallScreenEnd)
      width: 150px
      margin-right: -60%
      margin-bottom: 25%

  @keyframes image2
    0%
      transform: translateX(0) translateY(0)

    25%
      transform: translateX(calc(100% / 130 * 33)) translateY(calc(100% / 130 * 33))

    50%
      transform: translateX(calc(100% / 130 * 50)) translateY(calc(100% / 130 * 33))

    75%
      transform: translateX(calc(100% / 130 * 25)) translateY(calc(100% / 130 * 13))

    100%
      transform: translateX(0) translateY(0)

  .image2
    background-image: url("/assets/images/frame1/rocket.svg")
    +background-image-settings()
    pointer-events: none
    position: absolute
    aspect-ratio: 1
    animation: image2 10s infinite linear
    transform: translateX(0) translateY(0)
    mix-blend-mode: difference

    @media (min-width: $bigScreenStart)
      margin-left: 5%
      margin-bottom: 2%
      width: calc(100% / 1920 * 130)

    @media (max-width: $smallScreenEnd)
      width: 100px
      margin-right: -15%

  @keyframes image3
    0%
      transform: translateX(0) translateY(0)

    33%
      transform: translateX(0) translateY(calc(100% / 80 * 24))

    66%
      transform: translateX(calc(100% / 80 * 12)) translateY(calc(100% / 80 * 12))

    100%
      transform: translateX(0px) translateY(0px)

  .image3
    background-image: url("/assets/images/frame1/eth.svg")
    +background-image-settings()
    pointer-events: none
    position: absolute
    aspect-ratio: 1
    animation: image3 6s infinite linear
    transform: translateX(0) translateY(0)
    mix-blend-mode: difference

    @media (min-width: $bigScreenStart)
      margin-top: 3%
      margin-left: 28%
      width: calc(100% / 1920 * 80)

    @media (max-width: $smallScreenEnd)
      width: 75px
      margin-right: -85%
      margin-bottom: -10%

  @keyframes text1
    0%
      transform: scale(1)

    50%
      transform: scale(1.1)

    100%
      transform: scale(1)

  .text
    font-family: Apex, "Calibri Light", sans-serif
    font-weight: 700
    line-height: 130%
    color: #CFF4E7
    position: absolute
    animation: text1 3s infinite linear
    transform: scale(1)

    @media (min-width: $bigScreenStart)
      left: calc(100% / 1920 * 315)
      bottom: calc(100% / 1080 * 143)
      font-size: 4dvmax

    @media (max-width: $smallScreenEnd)
      width: 100%
      bottom: 10%
      left: 0
      font-size: 32px
      display: flex
      justify-content: center
      align-items: center
</style>