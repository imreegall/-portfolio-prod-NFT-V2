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

        2: "We will promote the collection, " +
            "create content, participate in " +
            "exhibitions, do collaborations, " +
            "hold an AMA, use webtech, and " +
            "whatever comes to mind :)",

        3: "We're not exactly sure where this " +
            "will lead us. But let's embrace " +
            "the journey and see where it takes us",

        4: {
          mobile: "<?xml version=\"1.0\" encoding=\"utf-8\"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\n" +
            "<svg width=\"60px\" height=\"60px\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
            "<path d=\"M12 7V20M12 7H8.46429C7.94332 7 7.4437 6.78929 7.07533 6.41421C6.70695 6.03914 6.5 5.53043 6.5 5C6.5 4.46957 6.70695 3.96086 7.07533 3.58579C7.4437 3.21071 7.94332 3 8.46429 3C11.2143 3 12 7 12 7ZM12 7H15.5357C16.0567 7 16.5563 6.78929 16.9247 6.41421C17.293 6.03914 17.5 5.53043 17.5 5C17.5 4.46957 17.293 3.96086 16.9247 3.58579C16.5563 3.21071 16.0567 3 15.5357 3C12.7857 3 12 7 12 7ZM5 12H19V17.8C19 18.9201 19 19.4802 18.782 19.908C18.5903 20.2843 18.2843 20.5903 17.908 20.782C17.4802 21 16.9201 21 15.8 21H8.2C7.07989 21 6.51984 21 6.09202 20.782C5.71569 20.5903 5.40973 20.2843 5.21799 19.908C5 19.4802 5 18.9201 5 17.8V12ZM4.6 12H19.4C19.9601 12 20.2401 12 20.454 11.891C20.6422 11.7951 20.7951 11.6422 20.891 11.454C21 11.2401 21 10.9601 21 10.4V8.6C21 8.03995 21 7.75992 20.891 7.54601C20.7951 7.35785 20.6422 7.20487 20.454 7.10899C20.2401 7 19.9601 7 19.4 7H4.6C4.03995 7 3.75992 7 3.54601 7.10899C3.35785 7.20487 3.20487 7.35785 3.10899 7.54601C3 7.75992 3 8.03995 3 8.6V10.4C3 10.9601 3 11.2401 3.10899 11.454C3.20487 11.6422 3.35785 11.7951 3.54601 11.891C3.75992 12 4.03995 12 4.6 12Z\" stroke=\"#1CC287\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
            "</svg>",

          desktop: "<?xml version=\"1.0\" encoding=\"utf-8\"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\n" +
            "<svg width=\"125px\" height=\"125px\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
            "<path d=\"M12 7V20M12 7H8.46429C7.94332 7 7.4437 6.78929 7.07533 6.41421C6.70695 6.03914 6.5 5.53043 6.5 5C6.5 4.46957 6.70695 3.96086 7.07533 3.58579C7.4437 3.21071 7.94332 3 8.46429 3C11.2143 3 12 7 12 7ZM12 7H15.5357C16.0567 7 16.5563 6.78929 16.9247 6.41421C17.293 6.03914 17.5 5.53043 17.5 5C17.5 4.46957 17.293 3.96086 16.9247 3.58579C16.5563 3.21071 16.0567 3 15.5357 3C12.7857 3 12 7 12 7ZM5 12H19V17.8C19 18.9201 19 19.4802 18.782 19.908C18.5903 20.2843 18.2843 20.5903 17.908 20.782C17.4802 21 16.9201 21 15.8 21H8.2C7.07989 21 6.51984 21 6.09202 20.782C5.71569 20.5903 5.40973 20.2843 5.21799 19.908C5 19.4802 5 18.9201 5 17.8V12ZM4.6 12H19.4C19.9601 12 20.2401 12 20.454 11.891C20.6422 11.7951 20.7951 11.6422 20.891 11.454C21 11.2401 21 10.9601 21 10.4V8.6C21 8.03995 21 7.75992 20.891 7.54601C20.7951 7.35785 20.6422 7.20487 20.454 7.10899C20.2401 7 19.9601 7 19.4 7H4.6C4.03995 7 3.75992 7 3.54601 7.10899C3.35785 7.20487 3.20487 7.35785 3.10899 7.54601C3 7.75992 3 8.03995 3 8.6V10.4C3 10.9601 3 11.2401 3.10899 11.454C3.20487 11.6422 3.35785 11.7951 3.54601 11.891C3.75992 12 4.03995 12 4.6 12Z\" stroke=\"#1CC287\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
            "</svg>",
        },
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
                <template
                  v-if="text[paragraphKey].mobile || text[paragraphKey].desktop"
                >
                  <h3
                    class="only-mb"
                    v-html="text[paragraphKey].mobile"
                  />

                  <h3
                    class="only-ds"
                    v-html="text[paragraphKey].desktop"
                  />
                </template>

                <h3
                  v-else
                  v-html="text[paragraphKey]"
                />
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
