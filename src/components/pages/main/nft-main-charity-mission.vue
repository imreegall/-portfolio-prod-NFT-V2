<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "nft-main-charity-mission",

  data() {
    return {
      text: [
          "15% of NFT sales are allocated to support new projects in various spheres of society.<br><br>",
          "Support for scientific startups through the purchase of legendary scientists by nft. The corresponding mechanism works for all types of activities.<br><br>",
          "The participation of the collection in various spheres of society will increase its popularity and reputation.<br><br>",
          "15% of NFT sales are allocated to support new projects in various spheres of society.<br><br>",
          "Support for scientific startups through the purchase of legendary scientists by nft. The corresponding mechanism works for all types of activities.<br><br>",
          "The participation of the collection in various spheres of society will increase its popularity and reputation."
      ],
    }
  },
})
</script>

<template>
  <div class="nft-main-charity-mission">
    <h2 class="title">Charity mission</h2>

    <main>
      <h2
          v-for="row in text"
          v-html="row"
      ></h2>
    </main>
  </div>
</template>

<style scoped lang="sass">
.nft-main-charity-mission
  display: flex
  flex-direction: column
  align-items: center
  width: 100%

  @media (min-width: $bigScreenStart)
    max-width: 1430px
    padding-left: 70px
    padding-right: 70px
    gap: 50px

  @media (max-width: $smallScreenEnd)
    max-width: 700px
    gap: 20px

  > .title
    color: #F0FBF7

    @media (min-width: $bigScreenStart)
      font-size: 50px

    @media (max-width: $smallScreenEnd)
      font-size: 30px

  main
    display: flex
    flex-direction: column
    align-items: flex-start
    width: 100%
    color: #F0FBF7
    background-color: #101A33

    @media (min-width: $bigScreenStart)
      font-size: 20px
      padding: 60px 70px
      +border-radius(30px)

    @media (max-width: $smallScreenEnd)
      font-size: 16px
      padding: 30px 20px
      +border-radius(20px)
</style>