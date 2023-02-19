<template>
  <div class="nft-main">
    <nft-main-welcome/>
    <nft-main-carousel/>
    <nft-main-social-network/>
    <nft-main-social-support/>
    <nft-main-roadmap/>
    <nft-main-team/>
  </div>
</template>

<script>
import nftMainWelcome from "./footer/main/nft-main-welcome.vue";
import nftMainSocialNetwork from "./footer/main/nft-main-social-network.vue";
import nftMainSocialSupport from "./footer/main/nft-main-social-support.vue";
import nftMainTeam from "./footer/main/nft-main-team.vue";
import nftMainCarousel from "./footer/main/nft-main-carousel.vue";
import nftMainRoadmap from "./footer/main/nft-main-roadmap.vue";

export default {
  name: "nft-main",
  components: {
    nftMainWelcome,
    nftMainSocialNetwork,
    nftMainSocialSupport,
    nftMainTeam,
    nftMainCarousel,
    nftMainRoadmap
  }
}
</script>

<style lang="sass">
  .nft-main
    width: 100%
    display: flex
    flex-direction: column
    align-items: center

    @media (min-width: $bigScreenStart)
      gap: 140px
      $padding: 60px
      padding: 0 $padding

    @media (max-width: $smallScreenEnd), (any-pointer: coarse)
      gap: 60px
      $padding: 8px
      padding: 0 $padding
</style>