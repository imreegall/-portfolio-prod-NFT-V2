<script>
import { defineComponent } from 'vue'

import parallaxFrame1 from "./frames/parallax-frame1.vue";
import parallaxFrame2 from "./frames/parallax-frame2.vue";
import parallaxFrame3 from "./frames/parallax-frame3.vue";
import parallaxFrame4 from "./frames/parallax-frame4.vue";
import parallaxFrame5 from "./frames/parallax-frame5.vue";

export default defineComponent({
  name: "nft-main-parallax",

  components: {
    parallaxFrame1,
    parallaxFrame2,
    parallaxFrame3,
    parallaxFrame4,
    parallaxFrame5,
  },

  data() {
    return {
      percent: 0,
      vh: 0,
    }
  },

  mounted() {
    window.addEventListener('scroll', this.calculateScrollPercent)
    window.addEventListener('resize', this.calculateScrollPercent)
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.calculateScrollPercent)
    window.removeEventListener('resize', this.calculateScrollPercent)
  },

  methods: {
    calculateScrollPercent() {
      this.percent = window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100
      this.vh = (window.scrollY - (window.pageYOffset + this.$refs.parallax.getBoundingClientRect().top)) / document.documentElement.clientHeight * 100
    },
  },

  computed: {
    frame1Offset() {
      if (this.percent < 10) {
        return 0
      }

      if (this.percent > 16) {
        return -100
      }

      return (this.percent - 10) / 6 * -100
    },

    frame2Offset() {
      if (this.percent < 10) {
        return 100
      }

      if (this.percent > 16) {
        return 0
      }

      return 100 - (this.percent - 10) / 6 * 100
    },

    frame2Opacity() {
      if (this.percent < (480 / 11)) {
        return 1
      } else {
        return 0
      }

      // if (this.percent < 44) {
      //   return 1
      // }
      //
      // if (this.percent > 47) {
      //   return 0
      // }
      //
      // return 1 - (this.percent - 44) / 3
    },

    frame3Opacity() {
      if (this.percent < (420 / 11)) {
        return 0
      } else {
        return 1
      }

      // if (this.percent < 41) {
      //   return 0
      // }
      //
      // if (this.percent > 44) {
      //   return 1
      // }
      //
      // return (this.percent - 41) / 3
    },

    frame3Offset() {
      if (this.percent < 79) {
        return 0
      }

      if (this.percent > 85) {
        return -100
      }

      return (this.percent - 79) / 6 * -100
    },

    frame4Offset() {
      if (this.percent < 79) {
        return 100
      }

      if (this.percent > 85 && this.percent < 94) {
        return 0
      }

      if (this.percent > 100) {
        return -100
      }

      if (this.percent <= 85) {
        return 100 - (this.percent - 79) / 6 * 100
      } else {
        return (this.percent - 94) / 6 * -100
      }
    },

    frame5Offset() {
      if (this.percent < 94) {
        return 100
      }

      return 100 - (this.percent - 94) / 6 * 100
    },
  },
})
</script>

<template>
  <div class="nft-main-parallax" ref="parallax">
    <div class="wrapper">
      <parallax-frame1
          :percent="percent"
          :vh="vh"
      />

      <main>
        <parallax-frame2
            v-show="frame2Opacity > 0"
            :percent="percent"
            :vh="vh"
            :style="{
                // transform: `translateY(${ frame3Offset }%)`,
                filter: `opacity(${ frame2Opacity })`,
            }"
        />

        <parallax-frame3
            :percent="percent"
            :vh="vh"
            :style="{
                filter: `opacity(${ frame3Opacity })`,
            }"
        />

        <div class="other">
          <parallax-frame4
              :percent="percent"
              :vh="vh"
          />

          <div class="last">
            <parallax-frame5
                :percent="percent"
                :vh="vh"
            />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped lang="sass">
.nft-main-parallax
  width: 100%
  min-height: 1200vh
  background-color: #141A28

  .wrapper
    width: 100%
    display: flex
    flex-direction: column
    position: sticky
    top: 0
    height: 1100vh

    main
      width: 100%
      display: flex
      flex-direction: column
      position: sticky
      top: 0
      height: 500vh

      .other
        width: 100%
        display: flex
        flex-direction: column
        position: sticky
        top: 0
        height: 300vh

        .last
          width: 100%
          display: flex
          flex-direction: column
          position: sticky
          top: 0
          height: 100vh
</style>