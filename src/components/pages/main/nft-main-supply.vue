<script>
import { defineComponent } from 'vue'

import nftLazyLoadImage from "../../ui-kit/lazy-load-image/nft-lazy-load-image.vue";

export default defineComponent({
  name: "nft-main-supply",

  components: {
    nftLazyLoadImage
  },

  data() {
    return {
      text: [
          "All Digital Artifacts (NFTs) are unique, and the community will determine the rarity and significance of historical figures.<br><br>",
          "150 NFTs have been sold through a <a class='green-text link' href='https://ordinalsmint.tech/buy-ordinals' title='https://ordinalsmint.tech/buy-ordinals'>whitelist (WL)</a> for 0.025 BTC each.<br><br>",
          "By owning a Historical digital artifact (NFT), you become a member of the namesake collectors' club!"
      ]
    }
  }
})
</script>

<template>
  <div class="nft-main-supply">
    <main>
      <div class="text">
        <h3
            v-for="row in text"
            v-html="row"
        ></h3>
      </div>

      <nft-lazy-load-image
        class="image"
        image-file-format="jpg"
        image-filename="Marilyn_Monroe"
        path-to-image="/assets/images/nfts"
        :resolution-collection="{
          256: 256,
          512: 512,
          1024: 1024,
        }"
        alt="Marilyn Monroe"
        :differentFolders="true"
      />
    </main>
  </div>
</template>

<style scoped lang="sass">
.nft-main-supply
  width: 100%
  display: flex

  @media (min-width: $bigScreenStart)
    max-width: 1430px
    padding-left: 70px
    padding-right: 70px

  @media (max-width: $smallScreenEnd)
    max-width: 700px

  main
    display: flex
    align-items: center
    background-color: #101A33
    width: 100%

    @media (min-width: $bigScreenStart)
      gap: 21px
      padding: 60px 70px
      +border-radius(40px)

    @media (max-width: $smallScreenEnd)
      gap: 30px
      flex-direction: column
      padding: 30px 20px 20px
      +border-radius(20px)

    .text
      display: flex
      flex-direction: column
      width: 100%
      color: #F0FBF7

      @media (min-width: $bigScreenStart)
        flex: 1
        font-size: 20px
        padding-left: 50px

      @media (max-width: $smallScreenEnd)
        font-size: 16px

    .image
      +border-radius(20px)

      @media (min-width: $bigScreenStart)
        width: 324px

      @media (max-width: $smallScreenEnd)
        width: 100%
</style>