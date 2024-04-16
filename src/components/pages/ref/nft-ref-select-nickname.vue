<script>
import { defineComponent } from 'vue'

import axios from "axios";

export default defineComponent({
  name: "nft-ref-select-nickname",

  props: {
    address: {
      type: String,
      default() {
        return null
      }
    }
  },

  data() {
    return {
      nickname: "",
      isNicknameFree: false,
      isLoading: false,
      isCheckingError: false
    }
  },

  computed: {
    isNicknameValid() {
      const regexp = RegExp("^(\\w){1,32}$")

      return regexp.test(this.nickname)
    },

    isCheckButtonAllow() {
      return this.isNicknameValid && !this.isLoading
    },

    isStatusShown() {
      return this.isCheckingError
    },

    isContinueButtonAllow() {
      return this.isCheckButtonAllow && this.isNicknameFree
    }
  },

  methods: {
    async handleCheckNicknameButtonClick() {
      if (!this.isCheckButtonAllow) {
        return
      }

      this.isLoading = true

      await axios.put(`https://api.roskainc.com/api/store/v1/users/proxyhistoricalref/checkunique`, {
        name: this.nickname
      }).then(res => {
        this.isNicknameFree = res.data

        this.isCheckingError = !res.data
      }).catch(err => {
        console.log("Checking Nickname For Available Error:", err)
      })

      this.isLoading = false
    },

    clearCheckingStatuses() {
      this.isCheckingError = false
      this.isNicknameFree = false
    },

    async handleContinueButtonClick() {
      if (!this.isContinueButtonAllow) {
        return
      }

      this.isLoading = true

      await axios.put(`https://api.roskainc.com/api/store/v1/users/proxyhistoricalref/takeref`, {
        wallet: this.address,
        name: this.nickname
      }).then(() => {
        this.$emit('updateNickname', this.nickname)
      }).catch(err => {
        console.log("Getting Nickname Error:", err)
      })
    }
  }
})
</script>

<template>
  <div class="nft-ref-select-nickname">
    <img
      src="/assets/images/svg/imageLoadingRound.svg" alt=""
      v-show="isLoading"
    >

    <div
      class="wrapper"
      :class="{
        'is-loading': isLoading
      }"
    >
      <h2 class="title">Enter your referral nickname</h2>

      <main>
        <div class="check">
          <input
            type="text"
            placeholder="nickname"
            v-model="nickname"
            :class="{
              error: isCheckingError
            }"
            @input="clearCheckingStatuses"
          >

          <h2
            class="status"
            v-if="isStatusShown"
          >
            Nickname is busy
          </h2>

          <button
            v-else
            :disabled="!isCheckButtonAllow"
            :class="{
              active: isCheckButtonAllow
            }"
            @click="handleCheckNicknameButtonClick"
          >CHECK</button>
        </div>

        <button
          :disabled="!isContinueButtonAllow"
          :class="{
            active: isContinueButtonAllow
          }"
          @click="handleContinueButtonClick"
        >CONNECT</button>
      </main>
    </div>
  </div>
</template>

<style scoped lang="sass">
@keyframes imageLoadingRound
  0%
    transform: rotate(0)
  100%
    transform: rotate(360deg)

.nft-ref-select-nickname
  background-color: #1D2332
  +border-radius(20px)
  position: relative
  overflow: hidden
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center

  @media (min-width: $bigScreenStart)
    padding: 50px

  @media (max-width: $smallScreenEnd)
    padding: 40px 20px
    width: 100%

  img
    max-width: 50%
    max-height: 50%
    position: absolute
    animation: imageLoadingRound 2s infinite linear
    z-index: 10
    +user-select(none)
    pointer-events: none

  .wrapper
    display: flex
    flex-direction: column
    align-items: center
    width: 100%

    @media (min-width: $bigScreenStart)
      gap: 40px

    @media (max-width: $smallScreenEnd)
      gap: 30px

    &.is-loading
      filter: blur(1px)
      pointer-events: none
      cursor: default
      +user-select(none)

    main
      display: flex
      flex-direction: column
      gap: 20px
      width: 100%

      .check
        display: flex
        width: 100%
        gap: 20px
        align-items: center

        @media (min-width: $bigScreenStart)

        @media (max-width: $smallScreenEnd)
          flex-direction: column

        input
          background-color: transparent
          color: #F0FBF7
          font-family: Raleway, sans-serif
          font-weight: 600
          font-size: 17px
          padding: 12px 40px 14px
          text-align: center
          border: 1px solid #283041
          +border-radius(41px)
          outline: none

          @media (min-width: $bigScreenStart)

          @media (max-width: $smallScreenEnd)
            width: 100%

          &::placeholder
            color: rgba(255, 255, 255, 0.2)
            font-size: 17px

          &.error
            border: 1px solid #A6270B
            color: #A6270B

            &::placeholder
              color: #A6270B

        .status
          color: #A6270B
          font-size: 17px

          @media (min-width: $bigScreenStart)

          @media (max-width: $smallScreenEnd)
            width: 100%

        button
          background-color: transparent
          border: 1px solid #1CC287
          color: #1CC287
          padding: 12px 40px 14px
          +border-radius(41px)
          font-size: 17px
          cursor: pointer

          @media (min-width: $bigScreenStart)

          @media (max-width: $smallScreenEnd)
            width: 100%

          &.active
            &:hover
              border: 1px solid #12e595
              color: #12e595

            &:active
              padding: 13px 40px 13px

          &:disabled
            border: 1px solid #283041
            color: #283041

      > button
        background-color: transparent
        border: 1px solid #1CC287
        color: #1CC287
        padding: 12px 40px 14px
        +border-radius(41px)
        font-size: 17px
        cursor: pointer

        &.active
          &:hover
            border: 1px solid #12e595
            color: #12e595

          &:active
            padding: 13px 40px 13px

        &:disabled
          border: 1px solid #283041
          color: #283041
</style>