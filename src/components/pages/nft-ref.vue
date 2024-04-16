<script>
import { defineComponent } from 'vue'

import axios from "axios";

import NftRefNeedConnect from "./ref/nft-ref-need-connect.vue";
import nftRefSelectNickname from "./ref/nft-ref-select-nickname.vue";
import nftRefTable from "./ref/nft-ref-table.vue";
import nftRefAdminTable from "./ref/nft-ref-admin-table.vue";

export default defineComponent({
  name: "nft-ref",

  components: {
    NftRefNeedConnect,
    nftRefSelectNickname,
    nftRefTable,
    nftRefAdminTable
  },

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

      isLoading: false,
    }
  },

  computed: {
    isNeedToConnectWallet() {
      return !this.address
    },

    isNeedToSelectNickname() {
      return !!this.address && !this.nickname
    },

    userIsAdmin() {
      return JSON.parse(import.meta.env.VITE_REF_ADMIN_WALLET_ADDRESSES_LIST).includes(this.address)
    }
  },

  methods: {
    connectWallet() {
      this.$emit('connectWallet')
    },

    updateNickname(newNickname) {
      this.nickname = newNickname
    },

    async checkWalletForNickname() {
      await axios.put(`https://api.roskainc.com/api/store/v1/users/proxyhistoricalref/checkuniquewallet`, {
        wallet: this.address
      }).then(res => {
        const isNotReferral = res.data.task['owner_ref'] === undefined

        if (isNotReferral) {
          return
        }

        this.nickname = res.data.task['owner_ref']
      }).catch(err => {
        console.log("Checking Wallet For Nickname Error:", err)
      })
    }
  },

  watch: {
    address: {
      immediate: true,
      async handler(newVal) {
        if (this.userIsAdmin) {
          return
        }

        if (!newVal) {
          this.nickname = ""

          return
        }

        this.isLoading = true

        await this.checkWalletForNickname()

        this.isLoading = false
      }
    }
  }
})
</script>

<template>
  <div class="nft-ref">
    <img
      src="/assets/images/svg/imageLoadingRound.svg" alt=""
      v-show="isLoading"
    >

    <div
      class="wrapper"
      :class="{
        'is-loading': isLoading
      }"
      v-if="!isLoading"
    >
      <nft-ref-admin-table
        v-if="userIsAdmin"
      />

      <nft-ref-need-connect
        v-else-if="isNeedToConnectWallet"
        @connect-wallet="connectWallet"
      />

      <nft-ref-select-nickname
        v-else-if="isNeedToSelectNickname"
        :address="address"
        @update-nickname="updateNickname"
      />

      <nft-ref-table
        v-else
        :nickname="nickname"
      />
    </div>
  </div>
</template>

<style scoped lang="sass">
@keyframes imageLoadingRound
  0%
    transform: rotate(0)
  100%
    transform: rotate(360deg)

.nft-ref
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  width: 100%
  z-index: 10
  height: 100%

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

  img
    max-width: 10%
    max-height: 10%
    position: absolute
    animation: imageLoadingRound 2s infinite linear
    z-index: 10
    +user-select(none)
    pointer-events: none

  .wrapper
    width: 100%
    display: flex
    flex-direction: column
    align-items: center
    height: 100%

    &.is-loading
      filter: blur(1px)
      pointer-events: none
      cursor: default
      +user-select(none)
</style>