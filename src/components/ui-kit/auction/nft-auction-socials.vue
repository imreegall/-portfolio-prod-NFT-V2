<script>
import { defineComponent } from 'vue'

import nftSvgInstagram from "../svgs/nft-svg-instagram.vue";
import nftSvgTikTok from "../svgs/nft-svg-tik-tok.vue";
import nftSvgYoutube from "../svgs/nft-svg-youtube.vue";
import nftSvgTwitter from "../svgs/nft-svg-twitter.vue";

export default defineComponent({
  name: "nft-auction-socials",

  components: {
    nftSvgInstagram,
    nftSvgTikTok,
    nftSvgYoutube,
    nftSvgTwitter
  },

  props: {
    instagramLink: {
      type: String,
      default() {
        return "#"
      }
    },

    tiktokLink: {
      type: String,
      default() {
        return "#"
      }
    },

    youtubeLink: {
      type: String,
      default() {
        return "#"
      }
    },

    twitterLink: {
      type: String,
      default() {
        return "#"
      }
    },
  },
})
</script>

<template>
  <div class="nft-auction-socials">
    <a :href="instagramLink" class="social">
      <nft-svg-instagram />
    </a>

    <a :href="tiktokLink" class="social">
      <nft-svg-tik-tok />
    </a>

    <a :href="youtubeLink" class="social">
      <nft-svg-youtube />
    </a>

    <a :href="twitterLink" class="social">
      <nft-svg-twitter />
    </a>
  </div>
</template>

<style scoped lang="sass">
.nft-auction-socials
  display: flex
  align-items: center
  width: 100%
  justify-content: space-between

  @media (min-width: $bigScreenStart)
    max-width: 180px

  @media (max-width: $smallScreenEnd)
    max-width: 228px

  .social
    font-size: 0
</style>