<template>
  <div class="nft-footer">
    <div class="footer-info">
      <div class="info-logo"></div>

      <div class="info-social">
        <a
            class="social-item-cont nft-social-link-mobile"
            v-for="social in socials"
            v-bind:href="social.link"
            v-bind:title="social.title"
            target="_blank"
            rel="nofollow"
        >
          <div
              class="social-item"
              v-bind:style="'background-image: url(/assets/images/socialIcons/' + social.imagePath + ');'"
          ></div>
        </a>
      </div>

      <h2><a
          class="info-button nft-button"
          href="mailto:historicalcollectionart@gmail.com"
          rel="nofollow"
      >Contacts</a></h2>
    </div>

    <hr>

    <div class="footer-patent">
      <h4>© 2024 Historical Collection</h4>
    </div>
  </div>
</template>

<script>
import {socials} from "./footer/social-list/index.js";

export default {
  name: "nft-footer",
  data() {
    return {
      socials
    }
  }
}
</script>

<style lang="sass">
  .nft-footer
    margin-top: auto
    display: flex
    flex-direction: column
    align-items: center
    width: 100%

    @media (min-width: $bigScreenStart)
      padding: 140px 60px 100px
      max-width: calc(1290px + 60px * 2)
      gap: 20px

    @media (max-width: $smallScreenEnd), (any-pointer: coarse)
      padding: 35px 0 30px
      max-width: 1290px
      gap: 32px

    .footer-info
      display: flex
      align-items: center
      width: 100%

      @media (min-width: $bigScreenStart)
        justify-content: space-between

      @media (max-width: $smallScreenEnd), (any-pointer: coarse)
        $padding: 32px
        padding-left: $padding
        padding-right: $padding
        flex-direction: column
        gap: 35px

      .info-logo
        background-image: url("/assets/images/svg/logo.svg")
        +background-image-settings()

        @media (min-width: $bigScreenStart)
          width: 80px
          height: 80px

        @media (max-width: $smallScreenEnd), (any-pointer: coarse)
          width: 100px
          height: 100px

      .info-social
        display: flex
        justify-content: center
        flex-wrap: wrap

        @media (min-width: $bigScreenStart)
          gap: 20px

        @media (max-width: $smallScreenEnd), (any-pointer: coarse)
          gap: 24px
          max-width: calc(40px * 4 + 24px * 3)

        .social-item-cont
          width: 40px
          height: 40px

          @media (min-width: $bigScreenStart)

          @media (max-width: $smallScreenEnd), (any-pointer: coarse)
            background-color: $socialMediaBackground
            +border-radius(12px)
            padding: calc(40px / 6)

          .social-item
            +background-image-settings()
            width: 100%
            padding-top: 100%

      .info-button
        color: $darkgreen
        background-color: $green
        +border-radius(41px)
        display: block

        @media (min-width: $bigScreenStart)
          font-size: 20px
          line-height: 23px
          padding: 12px 50px 14px

        @media (max-width: $smallScreenEnd), (any-pointer: coarse)
          font-size: 18px
          line-height: 21px
          padding: 12px 45px 14px

    hr
      width: 100%

      @media (min-width: $bigScreenStart)
        background-color: $footerHrDesktop
        height: 2px
        font-size: 20px
        line-height: 23px

      @media (max-width: $smallScreenEnd), (any-pointer: coarse)
        background-color: $footerHrMobile
        height: 1px
        font-size: 18px
        line-height: 21px
</style>