<template>
  <div class="nft-main-social-network">
    <div class="social-launch-networks">
      <div class="launch-networks-content">
        <div class="launch-networks-text">
          <h3>We've launched channels on all
            popular social networks where we
            share intriguing historical facts
            about the legendary individuals
            featured in the collection,
            offering a wealth of content,
            each with a mention of the Bitcoin
            Historical Collection. In this way,
            we pay tribute to our history.</h3>
        </div>

        <div class="launch-networks-images" id="social-media">
          <div class="launch-networks-image1-cont">
            <div class="launch-networks-image1"></div>
          </div>

          <div class="launch-networks-image2-cont">
            <div class="launch-networks-image2"></div>
          </div>

          <div class="lighthouse-small"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "nft-main-social-network",
})
</script>

<style lang="sass">
  .nft-main-social-network
    display: flex
    flex-direction: column
    align-items: center
    gap: 70px
    max-width: 1430px
    width: 100%

    @media (min-width: $bigScreenStart)
      padding: 0 60px

    @media (max-width: $smallScreenEnd)
      padding: 0 8px

    .social-launch-networks
      display: flex
      flex-direction: column
      align-items: center
      gap: 110px
      max-width: 1430px
      width: 100%

      @media (min-width: $bigScreenStart)
        padding-left: 70px
        padding-right: 70px

      @media (max-width: $smallScreenEnd)
        padding-left: 12px
        padding-right: 12px

      .launch-networks-content
        display: flex
        width: 100%

        @media (min-width: $bigScreenStart)

        @media (max-width: $smallScreenEnd)
          flex-direction: column
          align-items: center
          text-align: center
          gap: 60px

        .launch-networks-text
          line-height: 130%
          width: 100%

          @media (min-width: $bigScreenStart)
            font-size: 24px
            padding-top: 100px
            max-width: 700px
            flex-shrink: 1.4

          @media (max-width: $smallScreenEnd)
            font-size: 16px
            max-width: 700px

        .launch-networks-images
          display: flex
          align-items: center
          justify-content: center
          width: 100%
          position: relative

          @media (min-width: $bigScreenStart)

          @media (max-width: $smallScreenEnd)
            padding-left: 10px
            padding-right: 5px

          .lighthouse
            align-self: center

          .launch-networks-image1-cont
            max-width: 279px
            width: 100%
            flex-shrink: 1
            margin-right: -16px
            z-index: 2

            .launch-networks-image1
              background-image: url("/assets/images/png/phone1.png")
              pointer-events: none
              +background-image-settings()
              width: 100%
              padding-top: 154% // = 428px / (279px / 100) = 154%

          .launch-networks-image2-cont
            max-width: 261px
            width: 100%
            flex-shrink: 1.069 // = 279px / 261px = 1.069

            .launch-networks-image2
              background-image: url("/assets/images/png/phone2.png")
              pointer-events: none
              +background-image-settings()
              width: 100%
              padding-top: 203% // = 528px / (261px / 100) = 203%
</style>
