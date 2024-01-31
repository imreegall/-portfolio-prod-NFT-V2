<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "nft-auction-lots-active",

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
  <h1>{{ lot.nft.title }}</h1>
</template>

<style scoped lang="sass">

</style>