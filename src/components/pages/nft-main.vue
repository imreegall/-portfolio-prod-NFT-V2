<template>
  <div class="nft-main">
    <div class="wrapper">
      <nft-main-welcome/>
      <nft-main-carousel/>
    </div>

    <nft-main-parallax />
    <nft-main-supply />
<!--    <nft-main-auction />-->
<!--    <nft-main-charity-mission />-->
    <nft-main-roadmap/>
    <nft-main-social-network/>
  </div>
</template>

<script>
import nftMainWelcome from "./main/nft-main-welcome.vue";
import nftMainCarousel from "./main/nft-main-carousel.vue";
import nftMainParallax from "./main/nft-main-parallax.vue";
import nftMainSupply from "./main/nft-main-supply.vue";
import nftMainAuction from "./main/nft-main-auction.vue";
import nftMainCharityMission from "./main/nft-main-charity-mission.vue";
import nftMainRoadmap from "./main/nft-main-roadmap.vue";
import nftMainSocialNetwork from "./main/nft-main-social-network.vue";

export default {
  name: "nft-main",
  components: {
    nftMainWelcome,
    nftMainCarousel,
    nftMainParallax,
    nftMainSupply,
    nftMainAuction,
    nftMainCharityMission,
    nftMainRoadmap,
    nftMainSocialNetwork,
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

    @media (max-width: $smallScreenEnd), (any-pointer: coarse)
      gap: 60px

    > .wrapper
      width: 100%
      display: flex
      flex-direction: column
      align-items: center
      overflow: hidden

      @media (min-width: $bigScreenStart)
        gap: 140px
        padding-top: 252px

      @media (max-width: $smallScreenEnd), (any-pointer: coarse)
        gap: 60px
        padding-top: 82px
</style>