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
      satBalance: 0,
      minimumSatBalance: 2500000,

      twitterIsClicked: false,
      tweetIsClicked: false,
      discordIsClicked: false,
      walletAddress: "",

      twitterUsername: "",
      retweetPostUrl: "",
      discordUsername: "",

      joinLoading: false,

      isTwitterError: false,
      isTweetError: false,
      isDiscordError: false,
      isWalletError: false,

      isSuccessJoin: false
    }
  },

  methods: {
    async taprootInputChange() {
      if (!this.taprootInputIsAllow) {
        return
      }

      if (this.isLoadingTaproot) {
        return
      }

      this.isLoadingTaproot = true

      await axios.get(`https://blockchain.info/q/addressbalance/${ this.taprootAddress }`)
        .then(res => {
          this.satBalance = res.data
          this.walletAddress = this.taprootAddress
          this.taprootAddress = this.btcBalance + " BTC"
        })
        .catch(err => {
          this.satBalance = 0
          this.walletAddress = ""
          console.log("Getting Taproot Wallet Balance Error:", err)
        })

      this.isLoadingTaproot = false
    },

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
        "retweet_link": this.retweetPostUrl,
        "discord_username": this.discordUsername,
        "wallet_address": this.walletAddress,
        "ref": this.refName
      })
        .then(res => {
          console.log(res)

          const result = res.data.message

          if (result.includes("twitter_username")) {
            this.isTwitterError = true
            return
          }

          if (result.includes("retweet_link")) {
            this.isTweetError = true
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
      const regexp = RegExp("^@(\\w){1,50}$")

      return regexp.test(this.twitterUsername)
    },

    retweetPostUrlIsValid() {
      const regexp = RegExp("https://x.com(\\/@?(\\w){1,15})\\/status\\/[0-9]{19}\\?")

      return regexp.test(this.retweetPostUrl)
    },

    discordUsernameIsValid() {
      const regexp = RegExp("^(\\w){2,32}$")

      return regexp.test(this.discordUsername)
    },

    allInputsIsValid() {
      return this.twitterUsernameIsValid &&
        this.retweetPostUrlIsValid &&
        this.discordUsernameIsValid
    },

    allButtonsIsClicked() {
      return this.twitterIsClicked &&
        this.tweetIsClicked &&
        this.discordIsClicked
    },

    taprootInputIsAllow() {
      return this.allInputsIsValid && this.allButtonsIsClicked && !this.isLoadingTaproot
    },

    btcBalance() {
      if (this.satBalance === 0) {
        return 0
      }

      return this.satBalance / 100000000
    },

    isAllowSatBalance() {
      return this.satBalance >= this.minimumSatBalance
    },

    isJoinButtonAllow() {
      return this.taprootInputIsAllow && this.isAllowSatBalance && !this.joinLoading
    }
  },

  watch: {
    twitterUsername: {
      immediate: true,
      handler() {
        this.isTweetError = false
        this.isSuccessJoin = false
      }
    },

    retweetPostUrl: {
      immediate: true,
      handler() {
        this.isTweetError = false
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

    taprootAddress: {
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
          href=""
          class="link"
          target="_blank"
          @click="twitterIsClicked = true"
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
          href=""
          class="link"
          target="_blank"
          @click="tweetIsClicked = true"
        >
          <h2>Retweet post</h2>
        </a>

        <input
          type="text"
          class="input"
          :class="{
            error: isTweetError
          }"
          placeholder="https://x.com/..."
          v-model="retweetPostUrl"
        >
      </div>

      <div class="form-el">
        <a
          href=""
          class="link"
          target="_blank"
          @click="discordIsClicked = true"
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
        :class="{
          error: isWalletError
        }"
        placeholder="Write Taproof wallet with at least 0.025 BTC"
        :disabled="!taprootInputIsAllow"
        v-model="taprootAddress"
        @change="taprootInputChange"
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
        border-color: rgb(56, 68, 94)
        +opacity(10)

      &.error
        border-color: rgba(171, 40, 40, 0.53)

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

      &.disabled
        background-color: #38445E
        +opacity(10)
        color: rgba(255, 255, 255, 0.2)
        cursor: unset

    .success-message
      color: $green
      margin-top: -20px
</style>