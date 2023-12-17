<script setup>
  import nftHeader from "./components/nft-header.vue";
  import nftMain from "./components/nft-main.vue";
  import nftFooter from "./components/nft-footer.vue";
</script>

<template>
  <div class="mainContainer">
    <nft-header/>
    <nft-main/>
    <nft-footer/>
  </div>
</template>

<style lang="sass">
  #app
    display: flex
    justify-content: center
    width: 100%

    .mainContainer
      display: flex
      flex-direction: column
      align-items: center
      width: 100%
      min-height: 100vh

      //@media (min-width: $bigScreenStart)
      //  $padding: 60px
      //  max-width: calc(1430px + $padding * 2)
      //
      //@media (max-width: $smallScreenEnd), (any-pointer: coarse)
      //  max-width: 100%
</style>
