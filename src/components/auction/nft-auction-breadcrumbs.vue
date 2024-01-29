<script>
import { defineComponent } from 'vue'

import lots from "./lots/lots.js";

export default defineComponent({
  name: "nft-auction-breadcrumbs",

  data() {
    return {
      lots,
    }
  },

  methods: {
    handleCrumbClick(pathName) {
      if (!pathName) {
        return
      }

      this.$router.push({ name: pathName })
    },
  },

  computed: {
    nftId() {
      return this.$route.params.id
    },

    nftObject() {
      return this.lots.find(nft => nft.id === this.nftId)
    },

    crumbs() {
      const crumbs = [
        {
          title: "Main",
          path: "main",
        },

        {
          title: "Auction house",
          path: "lots",
        },
      ]

      if (this.nftObject === undefined) {
        return crumbs
      }

      crumbs.push({
        title: this.nftObject.nft.title,
      })

      return crumbs
    },
  },
})
</script>

<template>
  <h2 class="nft-auction-breadcrumbs">
    <template v-for="(crumb, index) in crumbs">
      <span v-if="index > 0" class="slash">/</span>

      <span
          v-if="index < crumbs.length - 1"
          v-html="crumb.title"
          class="clickable"
          @click="handleCrumbClick(crumb.path)"
      />

      <span
          v-else
          v-html="crumb.title"
      />
    </template>
  </h2>
</template>

<style scoped lang="sass">
.nft-auction-breadcrumbs

  > *
    color: $crumbsGray

    &.clickable
      &:hover
        cursor: pointer

    &:last-child
      color: $white

    &.slash
      margin-left: 8px
      margin-right: 8px
</style>