<script>
import { defineComponent } from 'vue'

import nftShortAddress from "../../mixins/nft-short-address.vue";

import nftSvgBurgerMenuCloseButton from "../svgs/nft-svg-burger-menu-close-button.vue";
import nftSvgWallet from "../svgs/nft-svg-wallet.vue";

export default defineComponent({
  name: "nft-burger-menu",

  mixins: [
      nftShortAddress
  ],

  components: {
    nftSvgBurgerMenuCloseButton,
    nftSvgWallet
  },

  props: {
    address: {
      type: String,
      default() {
        return ""
      }
    }
  },

  methods: {
    handleCloseButtonClick() {
      this.closeBurgerMenu()
    },

    closeBurgerMenu() {
      this.$emit('closeBurgerMenu')
    },

    openModal() {
      this.$emit('openModal')
      this.closeBurgerMenu()
    },

    handleSoonButtonClick(event) {
      if (this.soon) {
        return
      }

      this.soon = true

      const element = event.currentTarget
      const oldTitle = element.innerHTML
      element.innerHTML = "Soon"

      setTimeout(() => {
        element.innerHTML = oldTitle
        this.soon = false
      }, 1000)
    },
  },
})
</script>

<template>
  <div class="nft-burger-menu">
    <nft-svg-burger-menu-close-button class="close-button" @click="handleCloseButtonClick" />

    <nav>
      <router-link :to="{ name: 'lots' }" @click="closeBurgerMenu">
        <h2 class="title">Auction house</h2>
      </router-link>

      <a href="https://trud.family/" target="_blank" @click="closeBurgerMenu">
        <h2 class="title">TRUD Token</h2>
      </a>

      <a
          href="https://www.okx.com/web3/marketplace/nft/collection/btc/historical-collection-1"
          target="_blank"
          @click="closeBurgerMenu"
      >
        <h2 class="title">Collection</h2>
      </a>
    </nav>

    <div class="buttons-wrapper">
      <button v-if="address" @click="openModal">
        {{ shortAddress }}
      </button>

      <button v-else @click="openModal">
        Connect

        <nft-svg-wallet />
      </button>

      <h2 class="button-club" @click="handleSoonButtonClick">Club</h2>
    </div>
  </div>
</template>

<style scoped lang="sass">
.nft-burger-menu
  position: fixed
  width: 100%
  height: 100%
  background-color: #101520F2
  z-index: 999
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  gap: 80px

  .close-button
    position: absolute
    top: 27px
    right: 26px
    +user-select(none)
    
    &:hover
      cursor: pointer

  nav
    display: flex
    flex-direction: column
    align-items: center
    gap: 40px

    > *
      font-size: 20px
      color: #F0FBF7
      
      &:hover
        cursor: pointer

  .buttons-wrapper
    display: flex
    flex-direction: column
    gap: 30px
    align-items: center

    button
      display: flex
      gap: 16px
      align-items: center
      padding: 12px 40px 14px
      background-color: #1CC287
      +border-radius(999px)
      color: #003600
      font-size: 20px
      font-variant-numeric: lining-nums
      font-family: Raleway, sans-serif
      font-weight: 600

      &:hover
        cursor: pointer

    .button-club
      padding: 12px 40px 14px
      border: 2px solid #1CC287
      +border-radius(999px)
      color: #1CC287
      font-size: 20px

      &:hover
        cursor: pointer
</style>