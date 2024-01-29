<template>
  <div class="nft-main-social-network">
    <div class="social-launch-networks">
      <div class="launch-networks-content">
        <div class="launch-networks-text">
          <h3>We've launched channels on all popular social networks where we share intriguing historical facts about the legendary individuals featured in the collection, offering a wealth of content, each with a mention of the Bitcoin Historical Collection. In this way, we pay tribute to our history. </h3>

<!--          <h3>The Historical Collection is not just-->
<!--            the first NFT collection with portraits-->
<!--            of legendary historical people. This is-->
<!--            a brand. And we will promote this name in-->
<!--            many different areas.</h3><br>-->

<!--          <h3>The historical collection has a truly-->
<!--            unlimited future. People change, one-->
<!--            generation replaces another, and each-->
<!--            generation has its own people that can be-->
<!--            added to the historical collection.</h3><br>-->

<!--          <h3>After the completion of sale of 1000 NFTs,-->
<!--            the historical collection does not stop or-->
<!--            die. It continues to live in a decentralized-->
<!--            way. Every Sunday, 1 NFT is added to the-->
<!--            historical collection by a general vote of-->
<!--            collectors. After voting, this NFT is put up-->
<!--            for open auction. Collectors with 10 or more-->
<!--            NFTs may offer personalities to add to the-->
<!--            historical collection. Everyone participates-->
<!--            in the voting, 1 NFT = 1 vote.</h3><br>-->

<!--          <h3>This is a memorial hall of fame in the-->
<!--            digital world of bitcoin. Only non-living-->
<!--            people can get into the Historical Collection.</h3><br>-->

<!--          <h3>Our mission is to make this collection-->
<!--            popular and pass it down to our descendants.-->
<!--            People should be the most popular-->
<!--            in the nft world.</h3><br>-->

<!--          <h3>With the help of bitcoin, we can do this,-->
<!--            because there are no smart contracts and-->
<!--            their owners. This is a truly decentralized-->
<!--            world that suits the historical-->
<!--            collection the best.</h3><br>-->

<!--          <h3>The more popular will be collection, the more-->
<!--            privileges will be open to collectors.</h3>-->
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

<!--      <div class="social-media-icons">-->
<!--        <a-->
<!--            class="social-media-icon nft-social-link"-->
<!--            v-for="social in socials"-->
<!--            v-bind:href="social.link"-->
<!--            v-bind:title="social.title"-->
<!--            target="_blank"-->
<!--            rel="nofollow"-->
<!--        >-->
<!--          <div-->
<!--              class="social-icon"-->
<!--              v-bind:style="'background-image: url(assets/images/socialIcons/' + social.imagePath + ');'"-->
<!--          ></div>-->
<!--        </a>-->
<!--      </div>-->
    </div>

<!--    <div class="social-airdrop" id="trud-token">-->
<!--      <div class="airdrop-title">-->
<!--        <h2>NFT collectors will receive-->
<!--          an Airdrop of the project-->
<!--          token after the sale-->
<!--          of the historical collection.</h2>-->
<!--      </div>-->

<!--      <div class="airdrop-text">-->
<!--        <h3>TRUD token is used to reward-->
<!--          people for specific actions. All-->
<!--          operating revenue of the project-->
<!--          in full goes into the liquidity-->
<!--          of the token.  When the price-->
<!--          of token is at its minimum, participants-->
<!--          receive more token for their-->
<!--          work. As soon as the products-->
<!--          created by them start to make-->
<!--          a profit, it is completely spent-->
<!--          on buying back the TRUD token - its-->
<!--          value is growing. Therefore, getting-->
<!--          the previous number of coins-->
<!--          for the same action-->
<!--          becoming not possible.</h3>-->
<!--      </div>-->
<!--    </div>-->

<!--    <div class="social-diagram">-->
<!--      <ul class="diagram-coords">-->
<!--        <li class="Y-coord">-->
<!--          <h5>1,000,000,000</h5>-->
<!--          <hr>-->
<!--        </li>-->

<!--        <li class="Y-coord">-->
<!--          <h5>800,000,000</h5>-->
<!--          <hr>-->
<!--        </li>-->

<!--        <li class="Y-coord">-->
<!--          <h5>600,000,000</h5>-->
<!--          <hr>-->
<!--        </li>-->

<!--        <li class="Y-coord">-->
<!--          <h5>400,000,000</h5>-->
<!--          <hr>-->
<!--        </li>-->

<!--        <li class="Y-coord">-->
<!--          <h5>200,000,000</h5>-->
<!--          <hr>-->
<!--        </li>-->

<!--        <li class="X-coords">-->
<!--          <h5>0</h5>-->

<!--          <h5>12 mo</h5>-->

<!--          <h5>24 mo</h5>-->

<!--          <h5>36 mo</h5>-->

<!--          <h5>48 mo</h5>-->

<!--          <h5>60 mo</h5>-->
<!--        </li>-->
<!--      </ul>-->

<!--      <div class="diagram-image-cont">-->
<!--        <div class="diagram-image"></div>-->
<!--      </div>-->
<!--    </div>-->

<!--    <div class="social-trud-token">-->
<!--      <h3>By 200.000.000 tokens are-->
<!--        released into circulation-->
<!--        every year in the first 5 years.</h3><br>-->

<!--      <h3>Total amount: 1.000.000.000</h3><br>-->

<!--      <h3>Collectors will have the opportunity-->
<!--        to stake TRUD token.</h3><br>-->

<!--      <h3>1 NFT opens access to token staking-->
<!--        at 10% per year, each subsequent-->
<!--        NFT increases APY by 1%.</h3>-->
<!--    </div>-->
  </div>
</template>

<script>
import { socials } from "../social-list/index.js";

export default {
  name: "nft-main-social-network",
  data() {
    return {
      socials,
    }
  },
}
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

    @media (max-width: $smallScreenEnd), (any-pointer: coarse)
      padding: 0 8px

    .social-launch-networks
      display: flex
      flex-direction: column
      align-items: center
      gap: 110px
      //max-width: 1290px
      max-width: 1430px
      width: 100%

      @media (min-width: $bigScreenStart)
        padding-left: 70px
        padding-right: 70px

      @media (max-width: $smallScreenEnd), (any-pointer: coarse)
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

      .social-media-icons
        display: flex

        @media (min-width: $bigScreenStart)
          gap: 30px

        @media (max-width: $smallScreenEnd)
          gap: 24px
          flex-wrap: wrap
          justify-content: center
          padding-left: 12px
          padding-right: 12px

        .social-media-icon
          background-color: $socialMediaBackground

          @media (min-width: $bigScreenStart)
            width: 60px
            height: 60px
            padding: 10px
            +border-radius(16px)

          @media (max-width: $smallScreenEnd)
            width: 40px
            height: 40px
            padding: calc(40px / 6)
            +border-radius(12px)

          .social-icon
            width: 100%
            height: 100%
            +background-image-settings()

    .social-airdrop
      background: linear-gradient(94.15deg, #141E36 1.01%, #101A33 100%)
      max-width: 1430px
      border: 1px solid $white
      display: flex
      flex-direction: column

      @media (min-width: $bigScreenStart)
        padding: 60px 70px
        +border-radius(30px)
        gap: 30px

      @media (max-width: $smallScreenEnd), (any-pointer: coarse)
        padding: 30px 20px
        text-align: center
        +border-radius(20px)
        gap: 20px
        max-width: 700px

      .airdrop-title
        line-height: 130%

        @media (min-width: $bigScreenStart)
          font-size: 30px

        @media (max-width: $smallScreenEnd)
          font-size: 20px

      .airdrop-text
        line-height: 130%

        @media (min-width: $bigScreenStart)
          font-size: 24px

        @media (max-width: $smallScreenEnd)
          font-size: 16px

    .social-diagram
      //max-width: 1290px
      max-width: 1430px
      width: 100%
      position: relative
      color: $diagramText

      @media (min-width: $bigScreenStart)
        padding-left: 70px
        padding-right: 70px

      @media (max-width: $smallScreenEnd), (any-pointer: coarse)
        padding-left: 12px
        padding-right: 12px
        max-width: 700px

      .diagram-coords
        display: flex
        flex-direction: column
        gap: 77px

        .Y-coord
          display: flex
          align-items: center
          gap: 22px
          +opacity(50)

          > *:first-child
            min-width: 122px

            @media (min-width: $bigScreenStart)
              min-width: 122px
              text-align: end

            @media (max-width: $smallScreenEnd), (any-pointer: coarse)
              min-width: 93px
              text-align: start

          hr
            width: 100%
            +opacity(10)
            background-color: $white
            height: 1px

        .X-coords
          align-self: flex-end
          display: flex
          justify-content: space-between
          max-width: calc(1290px - 110px)
          width: 100%
          +opacity(50)

          @media (min-width: $bigScreenStart)

          @media (max-width: $smallScreenEnd) and (min-width: $smallScreenStart)
            max-width: calc(1290px - 110px + 24px)

            //> *
            //  display: none
            //
            //> *:nth-child(2n), *:nth-child(1)
            //  display: block

          @media (max-width: $superSmallScreenEnd), (any-pointer: coarse)
            max-width: calc(1290px - 110px + 24px)

            //> *
            //  display: none
            //
            //> *:nth-child(4n + 2), *:nth-child(1)
            //  display: block

      .diagram-image-cont
        height: calc(100% - 31px)
        //max-width: calc(1290px - 110px)
        max-width: calc(1430px - 110px)
        width: 100%
        position: absolute
        top: 0
        right: 0

        @media (min-width: $bigScreenStart)
          padding-top: 11px
          padding-left: 70px
          padding-right: 70px

        @media (max-width: $smallScreenEnd), (any-pointer: coarse)
          right: 0
          padding-top: 7px
          max-width: calc(1290px - 110px + 24px)
          padding-left: 12px
          padding-right: 12px

        .diagram-image
          +background-image-settings(100% 100%)
          width: 100%
          height: 100%
          pointer-events: none

          @media (min-width: $smallScreenStart)
            background-image: url("/assets/images/png/diagramDesktop.png")

          @media (max-width: $superSmallScreenEnd)
            background-image: url("/assets/images/png/diagramMobile.png")
            max-width: calc(1290px - 110px + 24px)
            padding-left: 12px
            padding-right: 12px

    .social-trud-token
      //max-width: 1290px
      max-width: 1430px
      width: 100%
      line-height: 130%

      @media (min-width: $bigScreenStart)
        font-size: 24px
        padding-left: 70px
        padding-right: 70px

      @media (max-width: $smallScreenEnd)
        font-size: 16px
        padding-left: 12px
        padding-right: 12px
        max-width: 700px
</style>
