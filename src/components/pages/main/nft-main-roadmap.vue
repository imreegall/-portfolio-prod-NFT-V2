<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "nft-main-roadmap",

  data() {
    return {
      text: {
        1: "Every day, all 366 days this year, " +
            "we will be working on the Legendary " +
            "Bitcoin Historical Collection",

        2: "",

        3: "We will promote the collection, " +
            "create content, participate in " +
            "exhibitions, do collaborations, " +
            "hold an AMA, use webtech, and " +
            "whatever comes to mind :)",

        4: "We're not exactly sure where this " +
            "will lead us. But let's embrace " +
            "the journey and see where it takes us"
      }
    }
  }
})
</script>

<template>
  <div class="nft-main-roadmap" id="roadmap">
    <div class="roadmap-title">
      <h2>Roadmap</h2>
    </div>

    <div class="roadmap">
      <div class="roadmap-line">
        <h2>2024</h2>

        <div class="hr-cont">
          <hr>
        </div>
      </div>

      <div class="roadmap-paddings">
        <div class="roadmap-cont">
          <div
              class="quarter-cont"
              v-for="paragraphKey in Object.keys(text)"
          >
            <div class="quarter">
              <div class="quarter-text">
                <h3>{{ text[paragraphKey] }}</h3>
              </div>

              <div class="quarter-round">
                <h1>Q{{ paragraphKey }}</h1>

                <div class="round-line" v-if="text[paragraphKey]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
  .nft-main-roadmap
    display: flex
    flex-direction: column
    align-items: center
    width: 100%

    @media (min-width: $bigScreenStart)
      max-width: 1430px
      padding-left: 70px
      padding-right: 70px
      gap: 50px

    @media (max-width: $smallScreenEnd)
      padding-left: 12px
      padding-right: 12px
      max-width: 700px
      gap: 40px

    .roadmap-title
      line-height: 110%

      @media (min-width: $bigScreenStart)
        font-size: 50px

      @media (max-width: $smallScreenEnd)
        font-size: 30px

    .roadmap
      position: relative
      display: flex
      width: 100%

      @media (min-width: $bigScreenStart)
        align-items: center

      @media (max-width: $smallScreenEnd)
        width: 100%
        overflow: hidden
        flex-direction: column

      .roadmap-line
        line-height: 110%

        @media (min-width: $bigScreenStart)
          position: absolute
          width: 100%
          font-size: 36px

        @media (max-width: $smallScreenEnd)
          font-size: 24px
          width: 56px
          display: flex
          flex-direction: column
          align-items: center
          gap: 10px

        > *:first-child
          @media (min-width: $bigScreenStart)
            position: absolute
            bottom: 10px

          @media (max-width: $smallScreenEnd)

        .hr-cont
          hr
            background-color: $white

            @media (min-width: $bigScreenStart)
              height: 2px
              width: 100%

            @media (max-width: $smallScreenEnd)
              position: absolute
              width: 2px
              height: 90%

      .roadmap-paddings
        @media (min-width: $bigScreenStart)
          width: 100%
          height: 600px
          position: relative
          padding-left: 105px
          padding-right: 65px

        @media (max-width: $smallScreenEnd)

        .roadmap-cont
          display: flex

          @media (min-width: $bigScreenStart)
            position: relative
            height: 600px
            width: 100%
            justify-content: space-around

          @media (max-width: $smallScreenEnd)
            flex-direction: column
            gap: 40px

          .quarter-cont
            display: flex

            @media (min-width: $bigScreenStart)
              align-items: center
              position: relative

              &:nth-child(2n)
                .quarter
                  flex-direction: column-reverse

                  .quarter-text
                    top: 150px

                  .quarter-round
                    .round-line
                      bottom: -60px

              &:nth-child(2n + 1)
                .quarter
                  .quarter-text
                    bottom: 150px

                  .quarter-round
                    .round-line
                      top: -60px

            @media (max-width: $smallScreenEnd)

            .quarter
              display: flex
              align-items: center

              @media (min-width: $bigScreenStart)
                font-size: 24px
                text-align: center
                line-height: 130%
                flex-direction: column
                justify-content: center
                gap: 70px
                position: relative

              @media (max-width: $smallScreenEnd)
                font-size: 16px
                flex-direction: row-reverse
                gap: 24px

              .quarter-text
                @media (min-width: $bigScreenStart)
                  width: 380px
                  position: absolute

                @media (max-width: $smallScreenEnd)

              .quarter-round
                background: linear-gradient(135deg, #1CC287 0%, #088658 100%)
                display: flex
                align-items: center
                justify-content: center
                +border-radius(999px)
                color: $darkgreen
                position: relative

                @media (min-width: $bigScreenStart)
                  width: 80px
                  height: 80px

                @media (max-width: $smallScreenEnd)
                  width: 56px
                  height: 56px
                  flex-shrink: 0

                .round-line
                  background-color: $roadmapRoundLine

                  @media (min-width: $bigScreenStart)
                    width: 2px
                    height: 60px
                    position: absolute
                    +opacity(50)

                  @media (max-width: $smallScreenEnd)
                    display: none
</style>
