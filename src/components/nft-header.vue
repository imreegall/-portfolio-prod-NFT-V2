<template>
  <div class="nft-header">
    <input class="header-checkbox" type="checkbox" id="input-checkbox-burger">
    <div class="header-burger">
      <label for="input-checkbox-burger"/>
      <div class="burger-line1"></div>
      <div class="burger-line2"></div>
      <div class="burger-line3"></div>
    </div>

    <div class="header-menu">
      <div class="header-cross">
        <label for="input-checkbox-burger"></label>
        <div class="cross-line1"></div>
        <div class="cross-line2"></div>
      </div>

      <ul class="header-nav">
        <li
            class="nav-el"
            v-for="burgerMenuItem in BurgerMenuItems"
        >
          <h3>
            <router-link
                v-bind:to="burgerMenuItem.anchor"
                @click="CloseBurgerMenu"
            >{{burgerMenuItem.name}}</router-link>
          </h3>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "nft-header",
  data() {
    const BurgerMenuItems = [
      {
        "name": "COLLECTION",
        "anchor": "#collection"
      },

      {
        "name": "TRUD TOKEN",
        "anchor": "#trud-token"
      },

      {
        "name": "SOCIAL SUPPORT",
        "anchor": "#social-support"
      },

      {
        "name": "ROADMAP",
        "anchor": "#roadmap"
      },

      {
        "name": "TEAM",
        "anchor": "#team"
      }
    ]

    return {
      BurgerMenuItems
    }
  },
  methods: {
    CloseBurgerMenu() {
      document.getElementById("input-checkbox-burger").checked = false
    }
  }
}
</script>

<style lang="sass">
  .nft-header
    @media (min-width: $bigScreenStart)
      $padding: 60px
      padding: 40px $padding 150px

    @media (max-width: $smallScreenEnd), (any-pointer: coarse)
      align-self: flex-end
      $padding: 20px
      padding: 30px $padding 0

    .header-checkbox
      display: none

      &:checked ~ .header-menu
        display: flex

    .header-burger
      @media (min-width: $bigScreenStart)
        display: none

      @media (max-width: $smallScreenEnd), (any-pointer: coarse)
        width: 40px
        height: 24px
        display: flex
        flex-direction: column
        justify-content: space-between
        position: relative

        > div
          width: 100%
          height: 2px
          background-color: $white

        > label
          width: 100%
          height: 100%
          position: absolute
          cursor: pointer

    .header-menu
      @media (min-width: $bigScreenStart)

      @media (max-width: $smallScreenEnd), (any-pointer: coarse)
        background-color: $burgerMenuBackground
        display: none
        flex-direction: column
        align-items: flex-end
        position: fixed
        width: 100%
        height: 100vh
        left: 0
        top: 0
        right: 0
        margin: 0
        padding: 0 20px
        z-index: 5

      .header-cross
        @media (min-width: $bigScreenStart)
          display: none

        @media (max-width: $smallScreenEnd), (any-pointer: coarse)
          display: flex
          align-items: center
          justify-content: center
          width: 28px
          height: 28px
          margin-top: 28px
          margin-bottom: 28px
          position: relative

          > label
            width: 100%
            height: 100%
            z-index: 999
            cursor: pointer

          > div
            width: 37px
            height: 3px
            background-color: $white
            +border-radius(999px)
            position: absolute

            &.cross-line1
              transform: rotate(45deg)

            &.cross-line2
              transform: rotate(-45deg)

      .header-nav
        display: flex

        @media (min-width: $bigScreenStart)
          gap: 40px

        @media (max-width: $smallScreenEnd), (any-pointer: coarse)
          flex-direction: column
          align-items: flex-end
          gap: 20px

        .nav-el
          line-height: 130%

          @media (min-width: $bigScreenStart)
            font-size: 24px

          @media (max-width: $smallScreenEnd), (any-pointer: coarse)
            font-size: 20px

</style>