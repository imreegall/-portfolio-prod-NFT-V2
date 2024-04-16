<script>
import { defineComponent } from 'vue'

import axios from "axios";

import getDayMonthYearFromDate from "../../../functions/getDayMonthYearFromDate.js";
import getHoursMinutesFromDate from "../../../functions/getHoursMinutesFromDate.js";

export default defineComponent({
  name: "nft-ref-admin-table",

  data() {
    return {
      referralsList: []
    }
  },

  mounted() {
    this.getAllReferrals()
  },

  methods: {
    async getAllReferrals() {
      await axios.get(`https://api.roskainc.com/api/store/v1/users/proxyhistoricalref/refsAll`).then(res => {
        const referrals = res.data.task

        this.referralsList = referrals

        console.log('res', referrals.map(el => {
          return [el.wallet, el.wallet_address]
        }))
      }).catch(err => {
        console.log("Getting All Referrals Error:", err)
      })
    }
  },

  computed: {
    numberOfReferrals() {
      return this.referralsListFormatted.length
    },

    numberOfReferralLinkOwners() {
      return this.referralsListFormatted.filter(referral => referral['owner_ref']).length
    },

    top3Referrals() {
      const referralsArray = this.referralsListFormatted.map(referral => {
        return this.referralsListFormatted.find(ref => ref.id === referral.ref)?.owner_ref || null
      }).filter(el => el)

      const counts = {}

      referralsArray.forEach(el => {
        counts[el] = (counts[el] || 0) + 1
      })

      const keys = Object.keys(counts)

      keys.sort((a, b) => counts[b] - counts[a])

      const topThreeKeys = keys.slice(0, 3)

      const topThree = {}

      topThreeKeys.forEach(key => {
        topThree[key] = counts[key];
      })

      const finishString = `${ topThreeKeys[0] } - ${ counts[topThreeKeys[0]] }, ${ topThreeKeys[1] } - ${ counts[topThreeKeys[1]] }, ${ topThreeKeys[2] } - ${ counts[topThreeKeys[2]] }`

      console.log('test', finishString)

      return finishString
    },

    referralListSorted() {
      return this.correctReferralsList.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      })
    },

    referralsListFormatted() {
      return this.referralListSorted.map(referral => {
        referral.data = getDayMonthYearFromDate(new Date(referral.createdAt))
        referral.time = getHoursMinutesFromDate(new Date(referral.createdAt))

        return referral
      })
    },

    correctReferralsList() {
      return this.referralsList.map(referral => {
        referral.correctWallet = referral.wallet || referral.wallet_address

        return referral
      })
    }
  },

  watch: {
    referralsListFormatted: {
      handler(val) {
        console.log('changed:', val)
      }
    },
  }
})
</script>

<template>
  <div class="nft-ref-admin-table">
    <header>
      <div class="number-of-referrals">
        <h4 class="title">Number of all members:</h4>

        <h2>{{ numberOfReferrals }}</h2>
      </div>

      <div class="number-of-referrals">
        <h4 class="title">Number of referral link owners:</h4>

        <h2>{{ numberOfReferralLinkOwners }}</h2>
      </div>

      <div class="number-of-referrals">
        <h4 class="title">Top 3 referrals:</h4>

        <h2>{{ top3Referrals }}</h2>
      </div>
    </header>

    <div class="table" v-if="numberOfReferrals > 0">
      <div class="table-header">
        <h2>№</h2>

        <h2>Twitter nickname</h2>

        <h2>Link to the retweet</h2>

        <h2>Discord nickname</h2>

        <h2>Created ref</h2>

        <h2>Used ref</h2>

        <h2>Crypto wallet address</h2>

        <h2>Date of addition</h2>
      </div>

      <template
        v-for="(referral, index) in referralsListFormatted"
      >
        <hr>

        <div class="table-row">
          <div class="number">
            <span class="context">№ </span>

            <span class="content">{{ numberOfReferrals - index }}</span>
          </div>

          <div class="twitter-name">
            <span class="context">Twitter nickname </span>

            <span class="content">{{ referral.twitter_username || '—' }}</span>
          </div>

          <div
            class="retweet-link"
          >
            <span class="context">Link to the retweet </span>

            <span class="content">
              <a
                v-if="referral['retweet_link']"
                :href="referral['retweet_link']"
                target="_blank"
              >{{ referral['retweet_link'] }}</a>

              <span
                v-else
              >—</span>
            </span>
          </div>

          <div class="discord-name">
            <span class="context">Discord nickname </span>

            <span class="content">{{ referral.discord_username || '—' }}</span>
          </div>

          <div class="discord-name">
            <span class="context">Created ref </span>

            <span class="content">{{ referral['owner_ref'] || '—' }}</span>
          </div>

          <div class="discord-name">
            <span class="context">Used ref </span>

            <span class="content">{{ referralsListFormatted.find(eachReferral => eachReferral.id === referral.ref)?.['owner_ref'] || '—' }}</span>
          </div>

          <div class="wallet">
            <span class="context">Crypto wallet address </span>

            <span class="content">{{ referral.correctWallet || '—' }}</span>
          </div>

          <div class="date-wrapper">
            <span class="context">Date of addition: </span>

            <span class="date content">
              <span class="data">{{ referral.data }}</span>

              <span class="time">{{ referral.time }}</span>
            </span>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped lang="sass">
.nft-ref-admin-table
  width: 100%
  display: flex
  flex-direction: column
  align-items: center
  font-variant-numeric: lining-nums

  @media (min-width: $bigScreenStart)
    gap: 40px

  @media (max-width: $smallScreenEnd)
    gap: 30px

  header
    display: flex
    width: 100%

    @media (min-width: $bigScreenStart)
      gap: 30px
      align-items: baseline

    @media (max-width: $smallScreenEnd)
      gap: 12px
      flex-direction: column
      align-items: center

    .nickname
      display: flex
      align-items: baseline

      @media (min-width: $bigScreenStart)
        gap: 8px

      @media (max-width: $smallScreenEnd)
        gap: 4px

      > .title
        color: #F0FBF780

    .number-of-referrals
      display: flex
      align-items: baseline

      @media (min-width: $bigScreenStart)
        gap: 8px

      @media (max-width: $smallScreenEnd)
        gap: 4px

      > .title
        color: #F0FBF780

    .referral-link
      display: flex
      align-items: baseline

      @media (min-width: $bigScreenStart)
        gap: 8px

      @media (max-width: $smallScreenEnd)
        gap: 4px
        flex-direction: column
        align-items: center
        word-break: break-all
        text-align: center

      > .title
        color: #F0FBF780

  .table
    width: 100%
    background-color: #1D2332
    +border-radius(20px)
    display: flex
    flex-direction: column

    @media (min-width: $bigScreenStart)
      padding: 40px 50px
      gap: 20px

    @media (max-width: $smallScreenEnd)
      padding: 24px 20px
      gap: 24px

    .table-header
      @media (min-width: $bigScreenStart)
        width: 100%
        display: flex
        justify-content: space-between
        align-items: center
        padding: 0 20px
        font-size: 20px
        text-align: center

        > *:first-child
          width: 25px

        > *:not(:first-of-type)
          width: 140px

      @media (max-width: $smallScreenEnd)
        display: none

    hr
      width: 100%
      background-color: #69857B
      height: 1px

      @media (min-width: $bigScreenStart)

      @media (max-width: $smallScreenEnd)
        &:first-of-type
          display: none

    .table-row
      width: 100%
      display: flex
      font-family: Raleway, sans-serif

      @media (min-width: $bigScreenStart)
        align-items: center
        justify-content: space-between
        font-size: 17px
        padding: 0 20px

        .context
          display: none

        > *
          word-break: break-word
          text-align: center

          &:first-child
            width: 25px

          &:not(:first-child)
            width: 140px

      @media (max-width: $smallScreenEnd)
        flex-direction: column
        align-items: flex-start
        gap: 16px
        font-size: 15px

        .context
          font-weight: 400

        .content
          font-weight: 600

        > *
          white-space: normal
          word-break: break-all

          > *:first-child
            color: #F0FBF780

      a
        &:hover
          text-decoration: underline 1px solid #F0FBF7

      .date
        @media (min-width: $bigScreenStart)
          gap: 4px
          flex-direction: column
          align-items: center
          display: flex

        @media (max-width: $smallScreenEnd)
          gap: 8px
          display: inline-flex

        .time
          color: #F0FBF780
</style>