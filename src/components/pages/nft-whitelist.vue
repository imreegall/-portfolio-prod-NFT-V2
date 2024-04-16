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
      taprootAddress: "",

      walletAddress: "",

      twitterUsername: "",
      discordUsername: "",

      joinLoading: false,

      isTwitterError: false,
      isDiscordError: false,
      isWalletError: false,

      isSuccessJoin: false
    }
  },

  mounted() {
    const refFromLS = localStorage.getItem('ref')

    if (this.refName) {
      return
    }

    this.$emit('updateRef', refFromLS)
  },

  methods: {
    async handleJoinButtonClick() {
      if (!this.isJoinButtonAllow) {
        return
      }

      if (this.joinLoading) {
        return
      }

      this.isWalletError = false
      this.isSuccessJoin = false

      this.joinLoading = true

      await axios.put(`https://api.roskainc.com/api/store/v1/users/proxyhistoricalref`, {
        "twitter_username": this.twitterUsername,
        "discord_username": this.discordUsername,
        "wallet_address": this.walletAddress,
        "ref": this.refName
      })
        .then(res => {
          const result = res.data.message

          if (result.includes("twitter_username")) {
            this.isTwitterError = true
            return
          }

          if (result.includes("discord_username")) {
            this.isDiscordError = true
            return
          }

          if (result.includes("wallet_address")) {
            this.isWalletError = true
            return
          }

          this.isSuccessJoin = true
        })
        .catch(err => {
          console.log("Join Error:", err)
        })

      this.joinLoading = false
    }
  },

  computed: {
    twitterUsernameIsValid() {
      const regexp = RegExp("^@?(\\w){1,50}$")

      return regexp.test(this.twitterUsername)
    },

    discordUsernameIsValid() {
      const regexp = RegExp("^(\\w){2,32}$")

      return regexp.test(this.discordUsername)
    },

    allInputsIsValid() {
      return this.twitterUsernameIsValid &&
        this.discordUsernameIsValid
    },

    isWalletAddressValid() {
      const regexp = RegExp("^(\\w){1,100}$")

      return regexp.test(this.walletAddress)
    },

    isJoinButtonAllow() {
      return !this.joinLoading && this.isWalletAddressValid && this.allInputsIsValid
    }
  },

  watch: {
    twitterUsername: {
      immediate: true,
      handler() {
        this.isSuccessJoin = false
      }
    },

    discordUsername: {
      immediate: true,
      handler() {
        this.isDiscordError = false
        this.isSuccessJoin = false
      }
    },

    walletAddress: {
      immediate: true,
      handler() {
        this.isWalletError = false
        this.isSuccessJoin = false
      }
    }
  }
})
</script>

<template>
  <div class="nft-whitelist">
    <main>
      <div class="form-el">
        <a
          href="https://x.com/ordinalslegends"
          class="link"
          target="_blank"
        >
          <h2>Follow Twitter</h2>
        </a>

        <input
          type="text"
          class="input"
          :class="{
            error: isTwitterError
          }"
          placeholder="@yourusername"
          v-model="twitterUsername"
        >
      </div>

      <div class="form-el">
        <a
          href="https://discord.gg/historicalcollection"
          class="link"
          target="_blank"
        >
          <h2>Take WL roll in Discord</h2>
        </a>

        <input
          type="text"
          class="input"
          :class="{
            error: isDiscordError
          }"
          placeholder="yourusername"
          v-model="discordUsername"
        >
      </div>

      <input
        type="text"
        class="wallet-input"
        placeholder="Write Taproot wallet address"
        v-model="walletAddress"
      >

      <div
        class="button"
        :class="{
          disabled: !isJoinButtonAllow
        }"
        @click="handleJoinButtonClick"
      >
        <h2>JOIN</h2>
      </div>

      <h4 v-if="isSuccessJoin">Success</h4>
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

        &.error
          border-color: rgba(171, 40, 40, 0.53)

    > .link
      max-width: 450px
      background-color: $lotButtonBackground
      padding: 12px 30px 14px
      text-align: center
      width: 100%
      +border-radius(41px)
      font-size: 17px

      &:hover
        background-color: #063830

      &:active
        padding: 13px 30px 13px

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

      &.error
        border-color: rgba(171, 40, 40, 0.53)

    > .button
      background-color: #BAEA56
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
        color: #026702

      &:active
        padding: 13px 30px 13px

      &.disabled
        background-color: rgba(56, 68, 94, 0.1)
        color: rgb(255, 255, 255)
        cursor: unset

    .success-message
      color: $green
      margin-top: -20px
</style>