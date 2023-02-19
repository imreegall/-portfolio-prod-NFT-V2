<template>
  <div class="nft-main-team" id="team">
    <div class="team-title">
      <h2>Team</h2>
    </div>

    <div class="team-cont">
      <div
          class="teammate"
          v-for="teammate in teamList"
      >
        <div
            class="teammate-photo"
            v-bind:style="'background-image: url(assets/images/team/png/' + teammate.imagePath + '.png);'"
        ></div>

        <div class="teammate-info">
          <div class="teammate-name">
            <h2>{{teammate.name}}</h2>
          </div>

          <div class="teammate-post">
            <h3>{{teammate.post}}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {teamList} from "./team/index.js";

export default {
  name: "nft-main-team",
  data() {
    return {
      teamList
    }
  }
}
</script>

<style lang="sass">
  .nft-main-team
    display: flex
    flex-direction: column
    align-items: center

    @media (min-width: $bigScreenStart)
      //max-width: 1290px
      max-width: 1430px
      width: 100%
      gap: 66px
      padding-left: 70px
      padding-right: 70px

    @media (max-width: $smallScreenEnd), (any-pointer: coarse)
      max-width: 334px
      width: 100%
      gap: 40px
      padding-left: 12px
      padding-right: 12px

    .team-title
      line-height: 110%

      @media (min-width: $bigScreenStart)
        font-size: 50px

      @media (max-width: $smallScreenEnd), (any-pointer: coarse)
        font-size: 30px

    .team-cont
      display: flex
      flex-wrap: wrap
      justify-content: center

      @media (min-width: $bigScreenStart)
        gap: 40px 30px

      @media (max-width: $smallScreenEnd), (any-pointer: coarse)
        gap: 20px

      .teammate
        display: flex
        flex-direction: column
        align-items: center

        @media (min-width: $bigScreenStart)
          gap: 20px

        @media (max-width: $smallScreenEnd), (any-pointer: coarse)
          gap: 13px

        .teammate-photo
          +background-image-settings()
          pointer-events: none

          @media (min-width: $bigScreenStart)
            width: 300px
            height: 300px
            +border-radius(30px)

          @media (max-width: $smallScreenEnd), (any-pointer: coarse)
            width: 145px
            height: 145px
            +border-radius(12px)

        .teammate-info
          display: flex
          flex-direction: column
          align-items: center
          gap: 8px

          .teammate-name
            color: $teamGreenName

            @media (min-width: $bigScreenStart)
              line-height: 28px
              font-size: 24px

            @media (max-width: $smallScreenEnd), (any-pointer: coarse)
              line-height: 19px
              font-size: 16px

          .teammate-post
            @media (min-width: $bigScreenStart)
              line-height: 23px
              font-size: 20px

            @media (max-width: $smallScreenEnd), (any-pointer: coarse)
              line-height: 16px
              font-size: 14px
  </style>