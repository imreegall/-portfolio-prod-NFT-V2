<template>
  <div class="nft-main-welcome">
    <input type="checkbox" id="checkbox-for-join">
    <div class="join-menu-cont">
      <div class="join-menu">
        <label class="join-close-button" for="checkbox-for-join">
          <div class="join-close-button-line1"></div>
          <div class="join-close-button-line2"></div>
        </label>
        <div class="join-social-cont">
          <div
              class="join-social-item"
              v-for="social in socials"
          >
            <h2>
              <a
                  v-bind:href="social.link"
                  v-bind:title="social.title"
                  target="_blank"
                  rel="nofollow"
              >
                {{social.name}}
              </a>
            </h2>
          </div>
        </div>
      </div>
    </div>

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
            (NFTs) on the Bitcoin blockchain! Dedicated to legendary 
            personalities in the history of humanity, countries, cultures, 
            and nations!</h3>

          <p class="info-text__under">* A decentralized charity NFT project for people.</p>
        </div>
      </div>

      <div class="welcome-buttons">
        <!-- <h2><label class="content-button nft-button" for="checkbox-for-join">Join community</label></h2> -->

        <h2><a
            class="nft-button content-button"
            href="https://www.okx.com/ru/web3/marketplace/nft/collection/btc/historical-collection-1"
            target="_blank"
        >OKX marketplace</a></h2>
      </div>
    </div>
  </div>
</template>

<script>
import {socials} from "../social-list/index.js";

export default {
  name: "nft-main-welcome",
  data() {
    return {
      socials
    }
  }
}
</script>

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

    @media (max-width: $smallScreenEnd), (any-pointer: coarse)
      align-items: center
      flex-direction: column
      width: 100%
      gap: 20px
      padding-left: 12px
      padding-right: 12px

    input
      display: none

      &:checked ~ .join-menu-cont
        display: flex

    .join-menu-cont
      background-color: rgba(0, 0, 0, 0.89)
      position: fixed
      top: 0
      left: 0
      width: 100%
      height: 100vh
      z-index: 5
      display: none
      align-items: center
      justify-content: center
      padding: 90px 60px

      .join-menu
        background: linear-gradient(94.15deg, #141E36 1.01%, #101A33 100%)
        +border-radius(20px)
        border: 1px solid $white
        display: flex
        flex-direction: column
        align-items: flex-end
        gap: 15px
        padding: 23px 23px 60px
        width: 500px
        max-height: 597px
        height: 100%

        @media (min-width: $bigScreenStart)

        @media (max-width: $smallScreenEnd), (any-pointer: coarse)

        .join-close-button
          display: flex
          align-items: center
          justify-content: center
          cursor: pointer
          width: 24px
          height: 24px
          position: relative

          .join-close-button-line1
            background-color: $white
            width: 34px
            height: 3px
            +border-radius(999px)
            transform: rotate(45deg)
            position: absolute

          .join-close-button-line2
            background-color: $white
            width: 34px
            height: 3px
            +border-radius(999px)
            transform: rotate(-45deg)
            position: absolute

        .join-social-cont
          display: flex
          flex-direction: column
          align-items: center
          justify-content: space-between
          height: 100%
          width: 100%

          .join-social-item
            max-width: 232px
            width: 100%
            background-color: $green
            display: flex
            justify-content: center
            +border-radius(999px)
            color: $darkgreen
            font-size: 18px
            line-height: 21px

            h2
              display: block
              width: 100%
              height: 100%

              a
                display: flex
                justify-content: center
                align-items: center
                width: 100%
                height: 100%
                padding-top: 12px
                padding-bottom: 14px

    .welcome-content
      display: flex
      flex-direction: column

      @media (min-width: $bigScreenStart)
        max-width: 669px
        //flex-shrink: 2
        gap: 60px
        align-items: flex-start

      @media (max-width: $smallScreenEnd), (any-pointer: coarse)
        align-items: center
        text-align: center
        gap: 30px

      .content-info
        display: flex
        flex-direction: column

        @media (min-width: $bigScreenStart)
          gap: 40px

        @media (max-width: $smallScreenEnd), (any-pointer: coarse)
          gap: 20px
          max-width: 700px

        .info-title
          line-height: 110%

          @media (min-width: $bigScreenStart)
            font-size: 70px

          @media (max-width: $smallScreenEnd), (any-pointer: coarse)
            font-size: 32px

        .info-text
          line-height: 130%

          @media (min-width: $bigScreenStart)
            font-size: 24px

          @media (max-width: $smallScreenEnd), (any-pointer: coarse)
            font-size: 16px
          &__under
            margin-top: 70px
            opacity: 0.5

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

          @media (max-width: $smallScreenEnd), (any-pointer: coarse)
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

      @media (max-width: $smallScreenEnd), (any-pointer: coarse)
        max-width: 500px
        width: 100%
        padding: 15px

      .welcome-logo
        background-image: url("/assets/images/svg/logo.svg")
        +background-image-settings()
        width: 100%
        padding-top: 103%
</style>
