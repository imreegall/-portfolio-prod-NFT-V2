<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "nft-lazy-load-image",

  props: {
    pathToImage: {
      type: String,
      required: true
    },

    imageFilename: {
      type: String,
      required: true
    },

    imageFileFormat: {
      type: String,
      required: true
    },

    resolutionCollection: {
      type: Object,
      default() {
        return {}
      }
    },

    alt: {
      type: String,
      default() {
        return ""
      }
    },

    loadingRound: {
      type: Boolean,
      default() {
        return true
      }
    },

    differentFolders: {
      type: Boolean,
      default() {
        return false
      }
    }
  },

  computed: {
    isAllowToShow() {
      if (!this.imageFilename) {
        return false
      }

      return !!this.imageFileFormat
    },

    mainImageSrc() {
      const resolutionsArray = Object.keys(this.resolutionCollection)
      const resolutionsCount = resolutionsArray.length

      if (!resolutionsCount) {
        return this.pathToImage + "/" + this.imageFilename + "." + this.imageFileFormat
      }

      const biggestResolution = resolutionsArray[resolutionsCount - 1]

      if (this.differentFolders) {
        return this.pathToImage + "/" + biggestResolution + "/" + this.imageFilename + "-" + this.resolutionCollection[resolutionsCount - 1] + "." + this.imageFileFormat
      } else {
        return this.pathToImage + "/" + this.imageFilename + "-" + this.resolutionCollection[resolutionsCount - 1] + "." + this.imageFileFormat
      }
    },

    srcset() {
      const resolutionsArray = Object.keys(this.resolutionCollection)

      return resolutionsArray.map(imageWidth => {
        let path

        if (this.differentFolders) {
          path = this.pathToImage + "/" + imageWidth
        } else {
          path = this.pathToImage
        }

        return path + "/" + this.imageFilename + "-" + imageWidth + "." + this.imageFileFormat + " " + this.resolutionCollection[imageWidth] + "w"
      }).join(", ")
    }
  }
})
</script>

<template>
  <div
    class="nft-lazy-load-image"
    :class="{
      active: loadingRound
    }"
  >
    <img
      v-if="isAllowToShow"
      :src="mainImageSrc"
      :alt="alt"
      :srcset="srcset"
    >

    <div class="loading-round" v-if="loadingRound"></div>
  </div>
</template>

<style scoped lang="sass">
@keyframes imageLoadingRound
  0%
    transform: rotate(0)
  100%
    transform: rotate(360deg)

.nft-lazy-load-image
  overflow: hidden

  &.active
    background-color: #2a2f3b
    display: flex
    justify-content: center
    align-items: center
    position: relative

    img
      z-index: 1

  img
    width: 100%
    height: 100%

  .loading-round
    position: absolute
    width: 50%
    height: 50%
    +background-image-settings()
    background-image: url("/public/assets/images/svg/imageLoadingRound.svg")
    transform: rotate(0)
    animation: imageLoadingRound 3s linear infinite
    transition: transform
    aspect-ratio: 1
</style>