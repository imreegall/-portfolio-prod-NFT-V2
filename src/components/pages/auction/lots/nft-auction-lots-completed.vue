<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "nft-auction-lot-completed",

  props: {
    lot: {
      type: Object,
      default() {
        return null
      }
    }
  }
})
</script>

<template>
  <div class="nft-auction-lot-completed">
    <main>
      <router-link
          class="image"
          :to="{ name: 'nft', params: { id: lot.id } }"
          :style="{
              backgroundImage: `url(/assets/images/auction/nfts/${ lot.nft.img })`
          }"
      ></router-link>

      <aside>

      </aside>
    </main>

    <a href="#" class="button"><h2>Receive your NFT</h2></a>
  </div>
</template>

<style scoped lang="sass">
.nft-auction-lot-completed
  width: 100%
  background-color: $lotBackground

  @media (min-width: $bigScreenStart)
    +border-radius(50px)
    padding: 30px 80px 30px 30px

  @media (max-width: $smallScreenEnd), (any-pointer: coarse)
    display: flex
    +border-radius(10px)
    padding: 10px
    flex-direction: column
    align-items: center
    gap: 16px

  &:hover
    background-color: $lotBackgroundHover

  > main
    width: 100%
    display: flex
    align-items: flex-start

    @media (min-width: $bigScreenStart)
      gap: 30px

    @media (max-width: $smallScreenEnd), (any-pointer: coarse)
      gap: 16px

    > .image
      aspect-ratio: 1
      +background-image-settings()

      @media (min-width: $bigScreenStart)
        width: 260px
        +border-radius(16px)

      @media (max-width: $smallScreenEnd), (any-pointer: coarse)
        width: 112px
        +border-radius(4px)

    > aside
      display: flex

  > .button
    @media (min-width: $bigScreenStart)
      display: none

    @media (max-width: $smallScreenEnd), (any-pointer: coarse)
      background-color: $green
      padding: 6px 12px
      text-align: center
      +border-radius(40px)
      font-size: 16px
      color: $lotButtonBackground
      width: calc(100% - 12px)

      &:hover
        background-color: #18d793

      &:active
        padding: 7px 12px 5px
</style>