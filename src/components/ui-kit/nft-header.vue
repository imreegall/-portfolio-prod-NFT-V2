<script>
export default {
  name: "nft-header",

  props: {
    shortAddress: {
      type: String,
      default() {
        return null
      },
    },
  },

  data() {
    return {
      soon: false,
    }
  },

  methods: {
    handleConnectButtonClick() {
      this.$emit('handleConnectButtonClick')
    },

    handleNavClick(pathName) {
      this.$router.push({ name: pathName })
    },

    handleLinkClick(url) {
      window.open(url, "_blank")
    },

    handleSoonButtonClick(event) {
      if (this.soon) {
        return
      }

      this.soon = true

      const element = event.currentTarget
      const title = element.innerHTML
      element.innerHTML = "Soon"

      setTimeout(() => {
        element.innerHTML = title
        this.soon = false
      }, 1000)
    },

    handleBurgerButtonClick() {
      this.$emit('handleBurgerButtonClick')
    },
  },
}
</script>

<template>
  <div class="nft-header">
    <div class="title" @click="handleNavClick('main')">TRUD FAMILY</div>

    <nav class="only-ds">
      <h2 @click="handleNavClick('lots')">Auction house</h2>

      <h2 @click="handleLinkClick('https://trud.family/')">TRUD Token</h2>

      <h2 @click="handleSoonButtonClick">Club</h2>
    </nav>

    <div class="button only-ds" @click="handleConnectButtonClick">
      <h2>{{ shortAddress || "Connect" }}</h2>
    </div>

    <svg class="burger only-mb" @click="handleBurgerButtonClick" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M5.83203 16.4062H34.1654C34.8284 16.4062 35.4643 16.1429 35.9331 15.674C36.402 15.2052 36.6654 14.5693 36.6654 13.9062C36.6654 13.2432 36.402 12.6073 35.9331 12.1385C35.4643 11.6696 34.8284 11.4062 34.1654 11.4062H5.83203C5.16899 11.4062 4.53311 11.6696 4.06426 12.1385C3.59542 12.6073 3.33203 13.2432 3.33203 13.9062C3.33203 14.5693 3.59542 15.2052 4.06426 15.674C4.53311 16.1429 5.16899 16.4062 5.83203 16.4062ZM34.1654 23.5938H5.83203C5.16899 23.5938 4.53311 23.8571 4.06426 24.326C3.59542 24.7948 3.33203 25.4307 3.33203 26.0938C3.33203 26.7568 3.59542 27.3927 4.06426 27.8615C4.53311 28.3304 5.16899 28.5938 5.83203 28.5938H34.1654C34.8284 28.5938 35.4643 28.3304 35.9331 27.8615C36.402 27.3927 36.6654 26.7568 36.6654 26.0938C36.6654 25.4307 36.402 24.7948 35.9331 24.326C35.4643 23.8571 34.8284 23.5938 34.1654 23.5938Z" fill="#31E7A7"/>
    </svg>
  </div>
</template>

<style lang="sass">
  .nft-header
    position: absolute
    top: 0
    width: 100%
    display: flex
    justify-content: space-between
    align-items: center

    @media (min-width: $bigScreenStart)
      padding: 40px 60px 150px
      max-width: calc(1290px + 60px * 2)

    @media (max-width: $smallScreenEnd), (any-pointer: coarse)
      padding: 24px 16px 0

    > .title
      font-family: "VujahdayScript", "Calibri Light", sans-serif
      text-align: center
      +user-select(none)

      @media (min-width: $bigScreenStart)
        font-size: 36px
        line-height: 47px

      @media (max-width: $smallScreenEnd), (any-pointer: coarse)
        font-size: 24px
        line-height: 15px

      &:hover
        cursor: pointer

    nav
      display: flex

      > *
        color: $white
        font-size: 20px
        padding: 12px 27px 14px
        +border-radius(999px)
        +user-select(none)

        &:hover
          background-color: $headerGreen
          cursor: pointer

    .button
      background-color: $teamGreenName
      padding: 12px 40px 14px
      +border-radius(999px)
      font-size: 20px
      color: $darkgreen
      +user-select(none)

      &:hover
        cursor: pointer
        background-color: $teamGreenNameLight
        
    .burger
      +user-select(none)

      &:hover
        cursor: pointer
</style>