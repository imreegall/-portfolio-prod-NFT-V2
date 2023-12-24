<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "nft-404",
})
</script>

<template>
  <div class="nft-404">
    <h1 class="title">404 PAGE NOT&nbsp;FOUND</h1>
  </div>
</template>

<style scoped lang="sass">
.nft-404
  width: 100%
  height: 100%
  display: flex
  justify-content: center
  align-items: center
  padding: 30px
  text-align: center

  > .title
    font-variant-numeric: lining-nums proportional-nums
    font-size: 50px
</style>