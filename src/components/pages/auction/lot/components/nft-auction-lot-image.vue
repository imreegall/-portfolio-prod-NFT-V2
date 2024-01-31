<script>
import { defineComponent } from 'vue'

import nftSvgPointer from "../../../../ui-kit/svgs/nft-svg-pointer.vue";

export default defineComponent({
  name: "nft-auction-lot-image",

  components: {
    nftSvgPointer
  },

  props: {
    imageFilename: {
      type: String,
      default() {
        return ""
      }
    },

    link: {
      type: String,
      default() {
        return ""
      }
    }
  }
})
</script>

<template>
  <div
      class="nft-auction-lot-image"
      :style="{
              backgroundImage: `url(/assets/images/auction/nfts/${ imageFilename })`
          }"
  >
    <nft-svg-pointer class="pointer" />

    <a
        class="link"
        target="_blank"
        :href="link"
    ></a>
  </div>
</template>

<style scoped lang="sass">
.nft-auction-lot-image
  +background-image-settings()
  aspect-ratio: 1
  display: flex
  justify-content: flex-start
  align-items: flex-end
  position: relative

  @media (min-width: $bigScreenStart)
    width: 410px
    +border-radius(20px)

  @media (max-width: $smallScreenEnd)
    width: 100%
    +border-radius(6px)

  .pointer
    width: 10%
    height: 10%
    margin: 5%

  .link
    width: 100%
    height: 100%
    position: absolute
    top: 0
    left: 0
    z-index: 10
    +border-radius(inherit)
</style>