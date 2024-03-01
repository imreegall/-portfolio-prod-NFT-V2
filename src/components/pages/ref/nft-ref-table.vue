<script>
import { defineComponent } from 'vue'

import axios from "axios";

import getDayMonthYearFromDate from "../../../functions/getDayMonthYearFromDate.js";
import getHoursMinutesFromDate from "../../../functions/getHoursMinutesFromDate.js";

export default defineComponent({
  name: "nft-ref-table",

  props: {
    nickname: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      referralsList: []
    }
  },

  computed: {
    numberOfReferrals() {
      return this.referralsList.length
    },

    referralListSorted() {
      return this.referralsList.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      })
    },

    referralsListFormatted() {
      return this.referralListSorted.map(referral => {
        referral.data = getDayMonthYearFromDate(new Date(referral.createdAt))
        referral.time = getHoursMinutesFromDate(new Date(referral.createdAt))

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

    nickname: {
      immediate: true,
      async handler(newVal) {
        if (!newVal) {
          return
        }

        await axios.put(`https://api.roskainc.com/api/store/v1/users/proxyhistoricalref/refs`, {
          ref: this.nickname
        }).then(res => {
          console.log(res)

          this.referralsList = res.data.task
        }).catch(err => {
          console.log("Getting Referrals List Error:", err)
        })
      }
    }
  }
})
</script>

<template>
  <div class="nft-ref-table">
    <header>
      <div class="nickname">
        <h4 class="title">Nickname:</h4>

        <h2>{{ nickname }}</h2>
      </div>

      <div class="number-of-referrals">
        <h4 class="title">Number of referrals:</h4>

        <h2>{{ numberOfReferrals }}</h2>
      </div>

      <div class="referral-link">
        <h4 class="title">Your referral link:</h4>

        <h2>https://historicalcollection.art/whitelist/{{ nickname }}</h2>
      </div>
    </header>

    <div class="table" v-if="numberOfReferrals > 0">
      <div class="table-header">
        <h2>№</h2>

        <h2>Twitter nickname</h2>

        <h2>Link to the retweet</h2>

        <h2>Discord nickname</h2>

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

            <span class="content">{{ referral.twitter_username }}</span>
          </div>

          <div class="retweet-link">
            <span class="context">Link to the retweet </span>

            <span class="content">
              <a
                :href="referral.retweet_link"
                target="_blank"
              >{{ referral.retweet_link }}</a>
            </span>
          </div>

          <div class="discord-name">
            <span class="context">Discord nickname </span>

            <span class="content">{{ referral.discord_username }}</span>
          </div>

          <div class="wallet">
            <span class="context">Crypto wallet address </span>

            <span class="content">{{ referral.wallet_address }}</span>
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
.nft-ref-table
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

        > *
          max-width: 140px

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
            width: 20px

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