<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "nft-ref",

  mounted() {
    localStorage.setItem('ref', this.refName)
    this.$emit('updateRef', this.refName)
    this.$router.push({ name: "whitelist" })
  },

  computed: {
    refName() {
      return this.$route.params.ref || ""
    }
  }
})
</script>

<template>

</template>

<style scoped lang="sass">

</style>