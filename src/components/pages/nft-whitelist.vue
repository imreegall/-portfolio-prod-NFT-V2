<script>
import { defineComponent } from 'vue'

import axios from "axios";

export default defineComponent({
  name: "nft-whitelist",

  props: {
    refName: {
      type: String,
      default() {
        return ""
      }
    }
  },

  data() {
    return {
      isLoadingTaproot: false,
      taprootAddress: "",
      satBalance: 0
    }
  },

  methods: {
    async taprootInputChange() {
      if (this.isLoadingTaproot) {
        return
      }

      this.isLoadingTaproot = true

      await axios.get(`https://blockchain.info/q/addressbalance/${ this.taprootAddress }`)
        .then(res => {
          this.satBalance = res.data
          this.taprootAddress = this.btcBalance + " BTC"

          console.log('test')
        })
        .catch(err => {
          console.log("Getting Taproot Wallet Balance Error:", err)
        })

      this.isLoadingTaproot = false
    }
  },

  computed: {
    isTaprootInputDisabled() {
      return this.isLoadingTaproot
    },

    btcBalance() {
      if (this.satBalance === 0) {
        return 0
      }

      return this.satBalance / 100000000
    }
  }
})
</script>

<template>
  <div class="nft-whitelist">
    <main>
      <div class="form-el">
        <a href="" class="link"><h2>Follow Twitter</h2></a>

        <input type="text" class="input" placeholder="@yourusername">
      </div>

      <div class="form-el">
        <a href="" class="link"><h2>Retwit post</h2></a>

        <input type="text" class="input" placeholder="http://twitter....">
      </div>

      <div class="form-el">
        <a href="" class="link"><h2>Take WL roll in Discord</h2></a>

        <input type="text" class="input" placeholder="@yourusername">
      </div>

      <input
        type="text"
        class="wallet-input"
        placeholder="Write Taproof wallet with at least 0.025 BTC"
        :disabled="isTaprootInputDisabled"
        v-model="taprootAddress"
        @change="taprootInputChange"
      >

      <div class="button">
        <h2>JOIN</h2>
      </div>
    </main>
  </div>
</template>

<style scoped lang="sass">
.nft-whitelist
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  z-index: 10

  @media (min-width: $bigScreenStart)
    margin-top: 160px
    max-width: calc(1290px + 60px * 2)
    gap: 40px
    padding-left: 60px
    padding-right: 60px

  @media (max-width: $smallScreenEnd)
    margin-top: 88px
    gap: 30px
    padding-left: 20px
    padding-right: 20px

  main
    display: flex
    flex-direction: column
    gap: 40px
    align-items: center
    background-color: $lotBackground
    +border-radius(20px)
    width: 100%
    max-width: 730px

    @media (min-width: $bigScreenStart)
      padding: 50px

    @media (max-width: $smallScreenEnd)
      padding: 20px

    .form-el
      display: flex
      gap: 20px
      width: 100%

      @media (min-width: $bigScreenStart)
        align-items: center
        justify-content: center

      @media (max-width: $smallScreenEnd)
        flex-direction: column

      .link
        background-color: $lotButtonBackground
        padding: 12px 30px 14px
        text-align: center
        width: 100%
        +border-radius(41px)
        font-size: 17px

        @media (min-width: $bigScreenStart)
          max-width: 260px

        @media (max-width: $smallScreenEnd)

        &:hover
          background-color: #063830

        &:active
          padding: 13px 30px 13px

      .input
        border: 1px solid $lotBackgroundHover
        background-color: transparent
        +border-radius(41px)
        font-family: Raleway, sans-serif
        font-weight: 600
        font-size: 17px
        text-align: center
        padding: 12px 30px 14px
        width: 100%

        @media (min-width: $bigScreenStart)
          flex: 1

        @media (max-width: $smallScreenEnd)

        &:focus
          outline: none

        &::placeholder
          color: rgba(255, 255, 255, 0.2)

    .wallet-input
      border: 1px solid $lotBackgroundHover
      background-color: transparent
      +border-radius(41px)
      font-family: Raleway, sans-serif
      font-weight: 600
      font-size: 17px
      text-align: center
      padding: 12px 30px 14px
      width: 100%
      max-width: 450px
      font-variant-numeric: lining-nums

      &::placeholder
        color: rgba(255, 255, 255, 0.2)

      &:focus
        outline: none

      &:disabled
        color: rgba(255, 255, 255, 0.2)

    > .button
      background-color: $green
      width: 100%
      max-width: 450px
      +border-radius(41px)
      text-align: center
      padding: 12px 30px 14px
      color: $darkgreen
      cursor: pointer
      +user-select(none)
      font-size: 20px

      &:hover
        background-color: #19d58e

      &:active
        padding: 13px 30px 13px
</style>