<script>
import { defineComponent } from 'vue'

import nftAuctionLotsCompleted from "./lots/nft-auction-lots-completed.vue";
import nftAuctionLotsActive from "./lots/nft-auction-lots-active.vue";
import nftAuctionLotsUpcoming from "./lots/nft-auction-lots-upcoming.vue";

export default defineComponent({
  name: "nft-auction-lots",

  components: {
    nftAuctionLotsCompleted,
    nftAuctionLotsActive,
    nftAuctionLotsUpcoming
  },

  props: {
    lots: {
      type: Array,
      default() {
        return []
      }
    },

    address: {
      type: String,
      default() {
        return null
      }
    }
  }
})
</script>

<template>
  <div class="nft-auction-lots">
    <template v-for="lot in lots">
      <nft-auction-lots-completed
          v-if="lot.status === 'Completed'"
          :lot="lot"
          :wallet-address="address"
      />

      <nft-auction-lots-active
          v-else-if="lot.status === 'Active'"
          :lot="lot"
      />

      <nft-auction-lots-upcoming
          v-else-if="lot.status === 'Upcoming'"
          :lot="lot"
      />
    </template>
  </div>
</template>

<style scoped lang="sass">
.nft-auction-lots
  display: flex
  flex-direction: column
  width: 100%

  @media (min-width: $bigScreenStart)
    gap: 30px

  @media (max-width: $smallScreenEnd)
    gap: 16px
</style>