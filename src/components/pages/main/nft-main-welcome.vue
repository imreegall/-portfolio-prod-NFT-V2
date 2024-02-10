<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "nft-main-welcome",
})
</script>

<template>
  <div class="nft-main-welcome">
    <div class="welcome-logo-container">
      <div class="lighthouse"></div>
      <div class="welcome-logo"></div>
    </div>

    <div class="welcome-content">
      <div class="content-info">
        <div class="info-title">
          <h2>Bitcoin Historical Collection</h2>
        </div>

        <div class="info-text">
          <h3>The Legendary Collection of 1,000 digital artifacts
            (Ordinals) on the Bitcoin blockchain! Dedicated to legendary
            personalities in the history of humanity, countries, cultures,
            and nations!</h3>
        </div>

        <div class="info-text desc">
          <h3>* A decentralized charity NFT project for people.</h3>
        </div>
      </div>

      <div class="welcome-buttons">
        <h2><a
            class="nft-button content-button"
            href="https://www.okx.com/web3/marketplace/nft/collection/btc/historical-collection-1"
            target="_blank"
        >OKX marketplace</a></h2>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
  .nft-main-welcome
    display: flex

    @media (min-width: $bigScreenStart)
      justify-content: space-between
      align-items: flex-end
      flex-direction: row-reverse
      //max-width: 1290px
      max-width: 1430px
      padding-left: 70px
      padding-right: 70px
      width: 100%

    @media (max-width: $smallScreenEnd)
      align-items: center
      flex-direction: column
      width: 100%
      gap: 20px
      padding-left: 12px
      padding-right: 12px

    .welcome-content
      display: flex
      flex-direction: column

      @media (min-width: $bigScreenStart)
        max-width: 669px
        //flex-shrink: 2
        gap: 60px
        align-items: flex-start

      @media (max-width: $smallScreenEnd)
        align-items: center
        text-align: center
        gap: 30px

      .content-info
        display: flex
        flex-direction: column

        @media (min-width: $bigScreenStart)
          gap: 40px

        @media (max-width: $smallScreenEnd)
          gap: 20px
          max-width: 700px

        .info-title
          line-height: 110%

          @media (min-width: $bigScreenStart)
            font-size: 70px

          @media (max-width: $smallScreenEnd)
            font-size: 32px

        .info-text
          line-height: 130%

          @media (min-width: $bigScreenStart)
            font-size: 24px

          @media (max-width: $smallScreenEnd)
            font-size: 16px

          &.desc
            color: rgba(255, 255, 255, 0.60)

      .welcome-buttons
        display: flex
        flex-direction: column
        gap: 20px

        .content-button
          display: block
          background-color: $green
          +border-radius(41px)
          color: $darkgreen
          cursor: pointer
          text-align: center

          @media (min-width: $bigScreenStart)
            padding: 16px 50px 18px
            font-size: 24px
            line-height: 28px

          @media (max-width: $smallScreenEnd)
            padding: 16px 40px 18px
            font-size: 18px
            line-height: 21px

    .welcome-logo-container
      align-self: center
      display: flex
      justify-content: center
      align-items: center
      position: relative

      @media (min-width: $bigScreenStart)
        width: 425px
        //flex-shrink: 1
        margin-left: 100px

      @media (max-width: $smallScreenEnd)
        max-width: 500px
        width: 100%
        padding: 15px

      .welcome-logo
        background-image: url("/assets/images/svg/logo.svg")
        +background-image-settings()
        width: 100%
        padding-top: 103%
</style>
