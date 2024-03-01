<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "nft-ref-need-connect",

  methods: {
    handleConnectTextClick() {
      this.$emit('connectWallet')
    }
  }
})
</script>

<template>
  <div class="nft-ref-need-connect">
    <h2>Please <span @click="handleConnectTextClick">connect</span> your wallet</h2>
  </div>
</template>

<style scoped lang="sass">
.nft-ref-need-connect
  background-color: #1D2332
  +border-radius(20px)
  padding: 50px
  text-align: center

  @media (min-width: $bigScreenStart)

  @media (max-width: $smallScreenEnd)
    width: 100%

  span
    color: $green
    cursor: pointer
</style>