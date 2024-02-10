<script>
import { defineComponent } from "vue";

import nftLazyLoadImage from "../../ui-kit/lazy-load-image/nft-lazy-load-image.vue";

export default defineComponent({
  name: "nft-main-carousel",

  components: {
    nftLazyLoadImage
  },

  data() {
    return {
      imagesRows: [
        [
          "Martin_Luther_King",
          "Johann_Sebastian_Bach",
          "Benjamin_Franklin",
          "Leonardo_da_Vinci",
          "Abraham_Lincoln",
          "Henry_Ford",
          "Omar_Khayyam",
          "Ernesto_Cardenal",
          "Oscar_Wilde"
        ],

        [
          "George_Orwell",
          "Adeline_Virginia_Woolf",
          "William_Shakespeare",
          "Nikola_Tesla",
          "Steve_Jobs",
          "Albert_Einstein",
          "Luis_Paster",
          "Marilyn_Monroe",
          "Tupac_Shakur"
        ],

        [
          "Joseph_Stalin",
          "Charles_Dickens",
          "Pele",
          "Mohammad_Reza_Pahlavi",
          "Marie_Curie",
          "Lev_Tolstoy",
          "Bob_Marley",
          "Winston_Churchill",
          "Napoleon_Bonaparte"
        ],

        [
          "Karl_Marx",
          "Muhammad_Ali",
          "Michael_Faraday",
          "Genghis_Khan",
          "Mahatma_Gandhi",
          "Mark_Twain",
          "John_Kennedy",
          "Jules_Verne",
          "Julius_Caesar"
        ],

        [
          "Colonel_Sanders",
          "Edgar_Allan_Poe",
          "Che_Guevara",
          "Plato",
          "Isaac_Newton",
          "Nelson_Mandela",
          "Janna_Dark",
          "Fedor_Dostoevsky",
          "Michelangelo"
        ]
      ]
    }
  }
})
</script>

<template>
  <ul class="nft-main-carousel" id="collection">
    <li
      class="row-wrapper"
      v-for="imagesRow in imagesRows"
    >
      <div class="row">
        <nft-lazy-load-image
          class="image"
          v-for="image in [...imagesRow, ...imagesRow, ...imagesRow]"
          image-file-format="jpg"
          :image-filename="image"
          path-to-image="/assets/images/nfts"
          :resolution-collection="{
            128: 512,
            256: 1024,
            512: 4096,
            1024: 8192,
          }"
          :alt="image.replaceAll('_', ' ')"
          :differentFolders="true"
        />
      </div>
    </li>
  </ul>
</template>

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

  @media (max-width: $smallScreenEnd)
    --gap: calc(100vw / 100 * (8 / (360 / 100)))

  .row-wrapper
    display: flex

    &:nth-child(1)
      .row
        animation: 40s carouselMoveToRight infinite linear

    &:nth-child(2)
      .row
        animation: 45s carouselMoveToLeft infinite linear

    &:nth-child(3)
      .row
        animation: 60s carouselMoveToRight infinite linear

    &:nth-child(4)
      .row
        animation: 55s carouselMoveToLeft infinite linear

    &:nth-child(5)
      .row
        animation: 40s carouselMoveToRight infinite linear

    .row
      display: flex
      gap: var(--gap)
      padding-left: var(--lentaPadding)
      padding-right: var(--lentaPadding)
      margin-left: 0
      transition: margin-left, margin-right
      --lentaPadding: calc(var(--gap) / 2)

      .image
        width: var(--imageSize)
        height: var(--imageSize)
        --imageSize: calc((100vw - var(--gap) * (var(--imagesNumber) - 1)) / var(--imagesNumber))

        @media (min-width: $bigScreenStart)
          +border-radius(20px)
          --imagesNumber: 8

        @media (max-width: $smallScreenEnd)
          +border-radius(12px)
          --imagesNumber: 4
</style>
