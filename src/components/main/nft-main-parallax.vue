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
      screenHeight: 0,
      parallaxOffset: 0,
      scrollTop: 0,
    }
  },

  mounted() {
    this.parallaxOffset = this.$refs.parallax.getBoundingClientRect().top

    window.addEventListener('scroll', this.calculateScreenHeight)
    window.addEventListener('resize', this.calculateScreenHeight)
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.calculateScreenHeight)
    window.removeEventListener('resize', this.calculateScreenHeight)
    window.removeEventListener('resize', this.calculateScrollTop)
    window.removeEventListener('resize', this.calculateScrollTop)
  },

  methods: {
    calculateScreenHeight() {
      if (this.scrollTop < document.documentElement.scrollTop) {
        if (this.screenHeight === Math.max(window.innerHeight, this.screenHeight)) {
          window.removeEventListener('scroll', this.calculateScreenHeight)
          window.removeEventListener('resize', this.calculateScreenHeight)

          window.addEventListener('scroll', this.calculateScrollTop)
          window.addEventListener('resize', this.calculateScrollTop)

          return
        }
      }

      this.screenHeight = Math.max(window.innerHeight, this.screenHeight)
      this.scrollTop = document.documentElement.scrollTop
    },

    calculateScrollTop() {
      this.scrollTop = document.documentElement.scrollTop
    },
  },

  computed: {
    vh() {
      return (this.scrollTop - this.parallaxOffset) / this.screenHeight * 100
    },
  },
})
</script>

<template>
  <div class="nft-main-parallax" ref="parallax">
    <div class="wrapper-1">
      <parallax-frame1
          :vh="vh"
      />

      <div class="wrapper-2">
        <parallax-frame2
            v-show="vh < 400"
            :vh="vh"
        />

        <parallax-frame3
            :vh="vh"
        />

        <div class="wrapper-3">
          <parallax-frame4
              :vh="vh"
          />

          <parallax-frame5
              :vh="vh"
              class="sticky"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.sticky
  position: sticky
  top: 0

.nft-main-parallax
  width: 100%
  height: 1100lvh
  background-color: #141A28

  .wrapper-1
    width: 100%
    display: flex
    flex-direction: column
    position: sticky
    top: 0
    height: 1000lvh

    .wrapper-2
      width: 100%
      display: flex
      flex-direction: column
      position: sticky
      top: 0
      height: 500lvh

      .wrapper-3
        width: 100%
        display: flex
        flex-direction: column
        position: sticky
        top: 0
        height: 300lvh
</style>