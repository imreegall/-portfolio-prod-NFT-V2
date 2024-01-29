<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "nft-main-auction",

  data() {
    return {
      text: [
          "First (1/3) 286 NFT будут проданы на аукционе от 1.000.000 TRUD<br><br>",
          "Second (1/3) 286 NFT от 500.000 TRUD<br><br>",
          "Third (1/3) 286 NFT от 250.000 TRUD<br><br>",
          "Максимальная ставка, выигравшая аукцион автоматически отправляется на нулевой адрес, таким образом более 50% supply of charity-token TRUD будет созжено от продажи Исторической коллекции.<br><br>",
          "Цена токена будет со временем расти, следовательно и стоимость NFT более ранних коллекционеров.<br><br>",
          "* Не бойтесь делать высокие ставки за TRUD на аукционе, история все помнит!)"
      ],
    }
  },
})
</script>

<template>
  <div class="nft-main-auction">
    <h2 class="title">Auction</h2>

    <main>
      <div class="graph">
        <div class="top">
          <div class="left">
            <h5>1 bln</h5>
            <h5>0,7 bln</h5>
            <h5>0,5 bln</h5>
            <div class="plug"></div>
          </div>

          <div class="right">
            <div class="column"></div>
            <div class="column"></div>
            <div class="column"></div>
          </div>
        </div>

        <div class="bottom">
          <h5>0</h5>
          <h5>300</h5>
          <h5>600</h5>
          <h5>900</h5>
        </div>
      </div>

      <div class="text">
        <h3
            v-for="row in text"
            v-html="row"
        ></h3>
      </div>
    </main>
  </div>
</template>

<style scoped lang="sass">
.nft-main-auction
  display: flex
  flex-direction: column
  align-items: center
  width: 100%

  @media (min-width: $bigScreenStart)
    max-width: 1430px
    padding-left: 70px
    padding-right: 70px
    gap: 50px

  @media (max-width: $smallScreenEnd), (any-pointer: coarse)
    max-width: 700px
    gap: 20px

  > .title
    color: #F0FBF7

    @media (min-width: $bigScreenStart)
      font-size: 50px

    @media (max-width: $smallScreenEnd), (any-pointer: coarse)
      font-size: 30px

  main
    display: flex
    align-items: center

    @media (min-width: $bigScreenStart)
      gap: 50px

    @media (max-width: $smallScreenEnd), (any-pointer: coarse)
      gap: 30px
      flex-direction: column

    .graph
      width: 100%
      display: flex
      flex-direction: column
      align-items: center

      @media (min-width: $bigScreenStart)
        max-width: 575px
        height: 436px

      @media (max-width: $smallScreenEnd), (any-pointer: coarse)
        height: 286px
        padding-right: 25px
        position: relative

      .top
        display: flex
        align-items: center
        gap: 20px
        height: 100%
        flex: 1
        width: 100%
        overflow: hidden

        .left
          display: flex
          flex-direction: column
          justify-content: space-between
          align-items: flex-end
          width: 58px
          height: 100%
          font-size: 15px
          color: #69857B

          > *:not(:last-child)
            position: relative
            display: flex
            align-items: center
            justify-content: center

            &::after
              content: ""
              display: block
              width: 1000px
              background-color: #F0FBF7
              height: 1px
              position: absolute
              right: calc(-1000px - 20px)
              +opacity(4)

        .right
          display: flex
          align-items: flex-end
          justify-content: space-between
          width: 100%
          flex: 1
          height: 100%

          @media (min-width: $bigScreenStart)
            padding: 5px 79px 0 40px

          @media (max-width: $smallScreenEnd), (any-pointer: coarse)
            padding: 10px 51px 0 12px

          .column
            height: 100%
            background: linear-gradient(to bottom, rgba(28, 194, 135, 0.60) 12.22%, rgba(28, 194, 135, 0.00) 100%)

            @media (min-width: $bigScreenStart)
              +border-radius(10px 10px 0 0)
              width: 40px

            @media (max-width: $smallScreenEnd), (any-pointer: coarse)
              +border-radius(6px 6px 0 0)
              width: 16px

            &:nth-child(2)
              @media (min-width: $bigScreenStart)
                height: 122px

              @media (max-width: $smallScreenEnd), (any-pointer: coarse)
                height: 99px

            &:nth-child(3)
              @media (min-width: $bigScreenStart)
                height: 51px

              @media (max-width: $smallScreenEnd), (any-pointer: coarse)
                height: 43px

      .bottom
        font-size: 15px
        color: #69857B
        width: 100%
        display: flex
        align-items: center
        padding-left: 58px
        justify-content: space-between

        @media (min-width: $bigScreenStart)

        @media (max-width: $smallScreenEnd), (any-pointer: coarse)
          position: absolute
          bottom: 0
          left: 0
          z-index: 10
          padding-right: 25px

    .text
      background-color: #101A33
      +border-radius(20px)
      color: #F0FBF7
      flex: 1

      @media (min-width: $bigScreenStart)
        padding: 40px 50px
        font-size: 20px

      @media (max-width: $smallScreenEnd), (any-pointer: coarse)
        padding: 30px 20px
        font-size: 16px
</style>