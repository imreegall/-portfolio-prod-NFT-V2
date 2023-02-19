<template>
  <div class="nft-main-social-support" id="social-support">
    <div class="social-support-title">
      <h2>Social support</h2>
    </div>

    <div class="social-support-text">
      <h3>15% of NFT sales are allocated
        to support new projects
        in various areas of society.</h3><br>

      <h3>Support for scientific startups
        through the purchase of nft
        legendary scientists. The corresponding
        mechanism works for all
        areas of society.</h3><br>

      <h3> The participation of the collection
        in various spheres of society will
        increase its popularity
        and reputation.</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "nft-main-social-support"
}
</script>

<style lang="sass">
  .nft-main-social-support
    display: flex
    flex-direction: column
    align-items: center
    max-width: 1430px
    width: 100%

    @media (min-width: $bigScreenStart)
      gap: 50px

    @media (max-width: $smallScreenEnd), (any-pointer: coarse)
      gap: 30px
      max-width: 700px

    .social-support-title
      line-height: 110%

      @media (min-width: $bigScreenStart)
        font-size: 50px

      @media (max-width: $smallScreenEnd), (any-pointer: coarse)
        font-size: 30px

    .social-support-text
      background: linear-gradient(94.15deg, #141E36 1.01%, #101A33 100%)
      line-height: 130%
      border: 1px solid $white

      @media (min-width: $bigScreenStart)
        font-size: 24px
        padding: 50px 70px
        +border-radius(30px)

      @media (max-width: $smallScreenEnd), (any-pointer: coarse)
        font-size: 16px
        padding: 30px 20px
        +border-radius(20px)
</style>