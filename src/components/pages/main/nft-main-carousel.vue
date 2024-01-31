<template>
  <ul class="nft-main-carousel" id="collection">
      <li
          class="lenta-cont"
          v-for="n in 5"
      >
        <ul class="lenta">
          <li
              class="lenta-el lazy-load-image"
              v-for="i in 27"
              v-bind:style="'background-image: url(/assets/images/carousel/' + n + '/' + (((i - 1) % 9) + 1) + '.jpg);'"
          ></li>
        </ul>
      </li>
  </ul>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "nft-main-carousel",
})
</script>

<style lang="sass">
  @keyframes carouselMoveToRight
    0%
      margin-left: 0

    100%
      margin-left: calc(100% / 3)

  @keyframes carouselMoveToLeft
    0%
      margin-left: 0

    100%
      margin-left: -(calc(100% / 3))

  .nft-main-carousel
    display: flex
    flex-direction: column
    align-items: center
    gap: var(--gap)
    width: 100%
    overflow: hidden

    @media (min-width: $bigScreenStart)
      --gap: calc(100vw / 100 * (20 / (1920 / 100)))

    @media (max-width: $smallScreenEnd), (any-pointer: coarse)
      --gap: calc(100vw / 100 * (8 / (360 / 100)))

    .lenta-cont
      display: flex

      &:nth-child(1)
        .lenta
          animation: 40s carouselMoveToRight infinite linear

      &:nth-child(2)
        .lenta
          animation: 45s carouselMoveToLeft infinite linear

      &:nth-child(3)
        .lenta
          animation: 60s carouselMoveToRight infinite linear

      &:nth-child(4)
        .lenta
          animation: 55s carouselMoveToLeft infinite linear

      &:nth-child(5)
        .lenta
          animation: 40s carouselMoveToRight infinite linear

      .lenta
        display: flex
        gap: var(--gap)
        padding-left: var(--lentaPadding)
        padding-right: var(--lentaPadding)
        margin-left: 0
        transition: margin-left, margin-right
        --lentaPadding: calc(var(--gap) / 2)

        .lenta-el
          +background-image-settings()
          width: var(--imageSize)
          height: var(--imageSize)
          --imageSize: calc((100vw - var(--gap) * (var(--imagesNumber) - 1)) / var(--imagesNumber))

          @media (min-width: $bigScreenStart)
            +border-radius(20px)
            --imagesNumber: 8

          @media (max-width: $smallScreenEnd), (any-pointer: coarse)
            +border-radius(12px)
            --imagesNumber: 4
</style>