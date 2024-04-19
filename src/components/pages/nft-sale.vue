<script>
import { defineComponent } from 'vue'
import nftLazyLoadImage from "../ui-kit/lazy-load-image/nft-lazy-load-image.vue";

export default defineComponent({
  name: "nft-sale",
  components: {nftLazyLoadImage},

  data() {
    return {
      address: null,

      whitelist: [],

      isButtonDisabled: true,

      isShowWarning: false,

      isLoading: false,
      
      firstPage: true,

      secondPage: false,

      orderCost: 0.025,

      transactionHash: "",

      isCheckingHash: false,

      isShowHashError: false,

      thirdPage: false,

      imagesRows: [
        [
          "Martin_Luther_King",
          "Johann_Sebastian_Bach",
          "Benjamin_Franklin",
          "Leonardo_da_Vinci",
          "Abraham_Lincoln",
          "Henry_Ford",
          "Omar_Khayyam",
          "Ernesto_Cardenal",
          "Oscar_Wilde"
        ],

        [
          "George_Orwell",
          "Adeline_Virginia_Woolf",
          "William_Shakespeare",
          "Nikola_Tesla",
          "Steve_Jobs",
          "Albert_Einstein",
          "Luis_Paster",
          "Marilyn_Monroe",
          "Tupac_Shakur"
        ],

        [
          "Joseph_Stalin",
          "Charles_Dickens",
          "Pele",
          "Mohammad_Reza_Pahlavi",
          "Marie_Curie",
          "Lev_Tolstoy",
          "Bob_Marley",
          "Winston_Churchill",
          "Napoleon_Bonaparte"
        ],

        [
          "Karl_Marx",
          "Muhammad_Ali",
          "Michael_Faraday",
          "Genghis_Khan",
          "Mahatma_Gandhi",
          "Mark_Twain",
          "John_Kennedy",
          "Jules_Verne",
          "Julius_Caesar"
        ],

        [
          "Colonel_Sanders",
          "Edgar_Allan_Poe",
          "Che_Guevara",
          "Plato",
          "Isaac_Newton",
          "Nelson_Mandela",
          "Janna_Dark",
          "Fedor_Dostoevsky",
          "Michelangelo"
        ]
      ],
    }
  },

  watch: {
    address: {
      handler() {
        this.isButtonDisabled = true
        this.isShowWarning = false
      }
    },

    transactionHash: {
      handler() {
        this.isShowHashError = false
      }
    },
  },

  mounted() {
    this.whitelist = import.meta.env.VITE_WHITELIST.trim().split("\n")
  },

  computed: {
    isContinueButtonAllow() {
      return this.transactionHash.length > 0
    }
  },

  methods: {
    handleCheckWalletButtonClick() {
      if (this.isLoading) {
        return
      }

      this.isButtonDisabled = true
      this.isShowWarning = false

      this.isLoading = true

      setTimeout(() => {
        this.isButtonDisabled = !(
          this.whitelist.includes(this.address) ||
          this.whitelist.includes(this.address.toLowerCase()) ||
          this.whitelist.includes(this.address.toLowerCase().trim())
        )

        this.isShowWarning = this.isButtonDisabled

        this.isLoading = false
      }, 3000)
    },

    fallbackCopyTextToClipboard(text) {
      let textArea = document.createElement("textarea")
      textArea.value = text

      textArea.style.top = "0"
      textArea.style.left = "0"
      textArea.style.position = "fixed"

      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()

      try {
        document.execCommand('copy')
      } catch (err) {
        console.error('Fallback: Oops, unable to copy', err)
      }

      document.body.removeChild(textArea)
    },

    copyTextToClipboard(e) {
      const text = this.removeBTCFromString(e.target.previousElementSibling.value)

      if (!navigator.clipboard) {
        this.fallbackCopyTextToClipboard(text)
      } else {
        navigator.clipboard.writeText(text).catch(e => console.log(e))
      }

      e.target.previousElementSibling.previousElementSibling.style.display = "flex"

      setTimeout(() => {
        e.target.previousElementSibling.previousElementSibling.style.display = "none"
      }, 1000)
    },

    removeBTCFromString(text) {
      return text.split(" ")[0]
    },

    async handleContinueButtonClick() {
      this.isCheckingHash = true

      setTimeout(() => {
        this.checkTransactionHash()
      }, 3000)
    },

    async checkTransactionHash() {
      await fetch(`https://blockchain.info/rawtx/${ this.transactionHash }`).then(async (response) => {
        const result = await response.json()

        console.log("Fetching Transaction Result (success)", result)
        //
        // if (!result.error) {
        //   this.firstPage = false
        //   this.secondPage = false
        //   this.thirdPage = true
        // } else {
        //   this.isShowHashError = true
        // }
      }).catch((error) => {
        console.error("Fetching Transaction Error", error)
      })

      this.isCheckingHash = false

      this.firstPage = false
      this.secondPage = false
      this.thirdPage = true
    }
  }
})
</script>

<template>
  <div class="nft-sale">
    <div class="welcome" v-if="firstPage && !secondPage">
      <div class="nft-example">
        <div class="nft-line">
          <nft-lazy-load-image
            class="nft-item"
            v-for="image in [ ...imagesRows[2], ...imagesRows[1], ...imagesRows[3], ...imagesRows[0], ...imagesRows[4]]"
            image-file-format="jpg"
            :image-filename="image"
            path-to-image="/assets/images/nfts"
            :resolution-collection="{
              128: 512,
              256: 1024,
              512: 4096,
              1024: 8192,
            }"
            :alt="image.replaceAll('_', ' ')"
            :differentFolders="true"
          />
        </div>
      </div>

      <h2 class="title">Put your WL wallet address:</h2>

      <input
        type="text"
        placeholder="bc1p..."
        v-model="address"
      >

      <button
        class="button"
        :disabled="isLoading"
        @click="handleCheckWalletButtonClick"
      >
        <h2>Check wallet</h2>

        <img class="round" src="/assets/images/svg/loadingRound.svg" alt="">
      </button>

      <h2 class="warning" v-if="isShowWarning">The entered address was not found in the Whitelist</h2>

      <h2 class="success" v-if="!isButtonDisabled">Your address is included in the sale</h2>

      <button
        class="button"
        v-if="!isButtonDisabled"
        @click="secondPage = true"
      >
        <h2>Buy NFT</h2>
      </button>
    </div>

    <div class="payment" v-if="secondPage">
      <div class="payment-main">
        <div class="payment-main-info">
          <h1 class="m">Complete your transaction</h1>

          <h4 class="l">Send the amount of bitcoins in one transaction and then click continue.</h4>
        </div>

        <div class="payment-details">
          <h2 class="l">You can send bitcoin from any wallet and exchange</h2>

          <div class="payment-details-info">
            <div class="payment-sum">
              <h5 class="l">Send this amount</h5>

              <div class="payment-details-input">
                <h4 class="l green copied">Copied!</h4>

                <input
                  type="text"
                  class="payment-details-input ordinals-input-text"
                  readonly
                  :value="this.orderCost === 0 ? 'no data' : this.orderCost + ' BTC'"
                >

                <button class="payment-details-copy" @click="copyTextToClipboard"></button>
              </div>
            </div>

            <div class="payment-address">
              <h5 class="l">To this address</h5>

              <div class="payment-details-input">
                <h4 class="l green copied">Copied!</h4>

                <input
                  type="text"
                  class="payment-details-input ordinals-input-text"
                  readonly
                  value="bc1qz4rwyn0gt3g792cws0zavgu29u32r8jvykzlcx"
                >

                <button class="payment-details-copy" @click="copyTextToClipboard"></button>
              </div>
            </div>

            <div class="payment-address">
              <h5 class="l">And after that write the transaction hash in the field</h5>

              <div class="payment-details-input">
                <input
                  type="text"
                  class="payment-details-input ordinals-input-text"
                  v-model="transactionHash"
                >
              </div>

              <h5 v-if="isShowHashError">Error: Invalid transaction hash</h5>
            </div>
          </div>
        </div>
      </div>

      <div class="payment-finish">
        <div class="payment-finish-info">
          <h6 class="l">After receiving the payment,
            we will send the ordinal to
            your wallet. The transaction may take some time.</h6>
        </div>

        <button
          @click="handleContinueButtonClick"
          class="ordinals-button-type1"
          :class="{
            'loading': isCheckingHash,
          }"
          :disabled="!isContinueButtonAllow || isCheckingHash"
        >
          Continue

          <img class="round" src="/assets/images/svg/loadingRound.svg" alt="">
        </button>
      </div>
    </div>

    <div class="final" v-if="thirdPage">
      <h2 class="title">Congratulations!</h2>

      <h2 class="title">Expect transaction verification and Ordinal will transfer to your wallet.</h2>
    </div>
  </div>
</template>

<style scoped lang="sass">
@keyframes removing2
  0%
    +opacity(100)

  80%
    +opacity(80)

  100%
    +opacity(0)

@keyframes slideNFT
  @for $i from 0 to 45
    #{100 / 45 * $i}%
      left: -100% * $i

.ordinals-button-type1
  font-family: 'Raleway', sans-serif
  font-weight: 600
  font-size: 18px
  line-height: 21px
  background-color: #1CC287
  color: #003600
  padding: 12px 40px 14px
  +border-radius(999px)
  +user-select(none)
  cursor: pointer
  display: flex
  gap: 10px
  align-items: center

  *
    cursor: pointer

  &:hover
    background-color: #26de9d

  &:active
    background-color: #11ad76

  &:disabled
    background-color: #5A6863
    color: #303D38

  &.loading

    > .round
      display: block

  @keyframes rounding
    0%
      transform: rotate(0)
    100%
      transform: rotate(360deg)

  > .round
    +border-radius(50%)
    aspect-ratio: 1
    animation: infinite linear rounding 1s
    display: none

    @media (min-width: $bigScreenStart)
      width: 16px

    @media (max-width: $smallScreenEnd)
      width: 12px

.nft-sale
  width: 100%
  height: 100%

  @media (min-width: $bigScreenStart)
    margin-top: 160px
    max-width: calc(1290px + 60px * 2)
    gap: 20px
    padding-left: 60px
    padding-right: 60px

  @media (max-width: $smallScreenEnd)
    margin-top: 88px
    gap: 30px
    padding-left: 20px
    padding-right: 20px

  .welcome
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    width: 100%
    height: 100%

    @media (min-width: $bigScreenStart)
      gap: 20px

    @media (max-width: $smallScreenEnd)
      gap: 30px

    .nft-example
      +border-radius(20px)
      position: relative
      overflow: hidden

      @media (min-width: $bigScreenStart)
        width: 634px
        height: 634px

      @media (max-width: $smallScreenEnd)
        width: 100%
        padding-top: 100%

      .nft-line
        height: 100%
        width: 100%
        position: absolute
        top: 0
        left: 0
        animation-duration: 13.5s
        animation-name:  slideNFT
        animation-timing-function: step-end
        animation-iteration-count: infinite
        display: flex

        .nft-item
          +background-image-settings()
          min-width: 100%
          width: 100%
          height: 100%
          pointer-events: none
          display: block


    > .title
      font-size: 24px
      text-align: center

    > .warning
      font-size: 24px
      color: orange
      text-align: center

    > .success
      font-size: 24px
      color: #1CC287
      margin-top: 50px
      text-align: center

    input
      border: 1px solid $lotBackgroundHover
      background-color: transparent
      +border-radius(41px)
      font-family: Raleway, sans-serif
      font-weight: 600
      font-size: 20px
      text-align: center
      padding: 12px 30px 14px
      width: 100%

      &:focus
        outline: none

      &::placeholder
        color: rgba(255, 255, 255, 0.2)

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
      display: flex
      align-items: center
      justify-content: center
      position: relative
      gap: 10px

      &:active
        padding: 13px 30px 13px

      &:disabled
        background-color: rgba(56, 68, 94, 0.1)
        color: rgba(255, 255, 255, 0.27)
        cursor: unset

        > .round
          display: block

      @keyframes rounding
        0%
          transform: rotate(0)
        100%
          transform: rotate(360deg)

      > .round
        +border-radius(50%)
        aspect-ratio: 1
        animation: infinite linear rounding 1s
        display: none

        @media (min-width: $bigScreenStart)
          width: 16px

        @media (max-width: $smallScreenEnd)
          width: 12px

  @keyframes removing
    0%
      +opacity(100)

    100%
      +opacity(0)

  .payment
    display: flex
    flex-direction: column
    width: 100%
    align-items: center
    text-align: center

    @media (min-width: $bigScreenStart)
      gap: 50px

    @media (max-width: $smallScreenEnd)
      gap: 30px

    ~ .order-status-cont
      .order-status-title
        > *:nth-child(2)
          color: #1CC287FF

      .status-progress
        width: 50% !important

    .payment-main
      display: flex
      flex-direction: column
      gap: 40px

      .payment-main-info
        display: flex
        flex-direction: column
        gap: 20px

      .payment-details
        display: flex
        flex-direction: column

        @media (min-width: $bigScreenStart)
          gap: 40px

        @media (max-width: $smallScreenEnd)
          gap: 20px

        .payment-details-info
          display: flex
          flex-direction: column
          gap: 20px

          > div
            display: flex
            flex-direction: column
            gap: 12px

            .payment-details-input
              width: 100%
              background-color: #101A33
              border: 1px solid #69857BFF
              +border-radius(10px)
              display: flex
              padding: 7px 15px 8px
              gap: 35px
              position: relative

              .copied
                display: none
                height: 20px
                position: absolute
                top: -40px
                right: 0
                animation: removing 1s linear
                +opacity(0)

              input
                border: none
                padding: 7px 15px 8px
                font-family: Raleway, sans-serif
                flex: 1

              .payment-details-copy
                background-color: unset
                background-image: url("/public/assets/images/svg/copyButton.svg")
                +background-image-settings(unset)
                width: 20px
                height: 20px
                padding: 7px 15px 8px
                box-sizing: content-box
                +border-radius(5px)

                &:hover
                  background-color: rgba(240, 251, 247, 0.05)

                &:active
                  background-color: rgba(240, 251, 247, 0.07)

    .payment-finish
      display: flex
      flex-direction: column
      gap: 30px
      align-items: center

      .payment-finish-info
        background-color: rgba(240, 251, 247, 0.05)
        border: 1px solid #69857BFF

        @media (min-width: $bigScreenStart)
          padding: 33px 10px 35px
          +border-radius(14px)
          flex: 1

        @media (max-width: $smallScreenEnd)
          padding: 21px 20px 23px

  .final
    display: flex
    flex-direction: column
    gap: 50px
    color: $green
    font-size: 40px
    text-align: center
    width: 100%
    height: 100%
    justify-content: center
    padding: 50px
</style>