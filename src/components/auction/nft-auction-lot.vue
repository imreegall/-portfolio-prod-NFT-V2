<script>
import { defineComponent } from 'vue'

import lots from "../lots/lots.js";
import nft404 from "../404/nft-404.vue";

export default defineComponent({
  name: "nft-auction-lot",

  components: {
    nft404,
  },

  props: {
    tryToCheckWalletApproveResult: {
      type: String,
      default() {
        return null
      },
    },

    tryToRemoveApprovalResult: {
      type: String,
      default() {
        return null
      },
    },

    tryToApproveResult: {
      type: String,
      default() {
        return null
      },
    },

    tryToBidResult: {
      type: String,
      default() {
        return null
      },
    },

    auctionActiveInfo: {
      type: Boolean,
      default() {
        return null
      },
    },

    highestBid: {
      type: String,
      default() {
        return null
      },
    },

    tryToStartAuctionResult: {
      type: String,
      default() {
        return null
      },
    },

    tryToEndAuctionResult: {
      type: String,
      default() {
        return null
      },
    },
  },

  data() {
    return {
      account: "Ox1234512345123451234512345123451234512345",

      lots,

      isCopying: false,
    }
  },

  methods: {
    handleCheckWalletApproveButtonClick() {
      this.$emit('handleCheckWalletApproveButtonClick')
    },

    handleRemoveApprovalButtonClick() {
      this.$emit('handleRemoveApprovalButtonClick')
    },

    handleApproveButtonClick() {
      this.$emit('handleApproveButtonClick')
    },

    handleCheckAuctionIsActiveButtonClick() {
      this.$emit('handleCheckAuctionIsActiveButtonClick')
    },

    handleGetHighestBidButtonClick() {
      this.$emit('handleGetHighestBidButtonClick')
    },

    handleStartAuctionButtonClick() {
      this.$emit('handleStartAuctionButtonClick')
    },

    handleEndAuctionButtonClick() {
      this.$emit('handleEndAuctionButtonClick')
    },

    handleBidButtonClick() {
      this.$emit('handleBidButtonClick')
    },

    openLink(url) {
      window.open(url, "_blank")
    },

    share() {
      if (this.isCopying) {
        return
      }

      this.isCopying = true

      setTimeout(() => {
        this.isCopying = false
      }, 1000)

      navigator.clipboard.writeText(window.location.href)

      if (navigator.share) {
        navigator.share({
          title: 'Historical Collection',
          text: 'Historical Collection NFT',
          url: 'https://historicalcollection.art/',
        })
      }
    },
  },

  computed: {
    nftId() {
      return this.$route.params.id
    },

    nftObject() {
      return this.lots.find(nft => nft.id === this.nftId)
    },

    error404() {
      return this.nftObject === undefined
    },
  },
})
</script>

<template>
  <nft404 v-if="error404" />

  <div v-else class="nft-auction-lot">
    <main>
      <div
          class="image"
          :style="{
              backgroundImage: `url(/assets/images/auction/lots/${ nftObject.nft.img })`
          }"
      ></div>

      <div class="price" v-if="nftObject.status === 'Upcoming' || nftObject.status === 'Active'">
        <div v-if="nftObject.status === 'Upcoming'" class="plan">
          <h2 class="title">Auction start at</h2>

          <h2 v-html="nftObject.date" class="date" />
        </div>

        <template v-if="nftObject.status === 'Active'">
          <div class="bid">
            <h2 class="title only-mb">Hiest Bid</h2>
            <h2 class="title only-ds">Current rate</h2>

            <div class="cost">
              <h2 class="number">2300000</h2>

              <h4 class="text">TRUD</h4>
            </div>
          </div>

          <template v-if="nftObject.id === 'test'">
            <div class="button" @click="handleCheckWalletApproveButtonClick">
              <h2>Check wallet approve</h2>
            </div>

            <h2 class="result">{{ tryToCheckWalletApproveResult }}</h2>

            <div class="button" @click="handleApproveButtonClick">
              <h2>Approve wallet</h2>
            </div>

            <h2 class="result">{{ tryToApproveResult }}</h2>

            <div class="button" @click="handleRemoveApprovalButtonClick">
              <h2>Remove approval</h2>
            </div>

            <h2 class="result">{{ tryToRemoveApprovalResult }}</h2>

            <div class="button" @click="handleBidButtonClick">
              <h2>Place a bet<br>(+100k, but 1kk is min)</h2>
            </div>

            <h2 class="result">{{ tryToBidResult }}</h2>

            <div class="button" @click="handleCheckAuctionIsActiveButtonClick">
              <h2>Check auction is active</h2>
            </div>

            <h2 class="result">{{ auctionActiveInfo }}</h2>

            <div class="button" @click="handleGetHighestBidButtonClick">
              <h2>Get highest bid</h2>
            </div>

            <h2 class="result">{{ highestBid }}</h2>

            <div class="button" @click="handleStartAuctionButtonClick">
              <h2>Start auction</h2>
            </div>

            <h2 class="result">{{ tryToStartAuctionResult }}</h2>

            <div class="button" @click="handleEndAuctionButtonClick">
              <h2>End auction</h2>
            </div>

            <h2 class="result">{{ tryToEndAuctionResult }}</h2>
          </template>

          <div class="button" @click="handleBidButtonClick" v-else>
            <h2>Place a bet</h2>
          </div>
        </template>
      </div>

      <div v-if="nftObject.status === 'Completed' && nftObject.lastAddress === account" class="button">
        <h2>Receive your NFT</h2>
      </div>
    </main>

    <div class="about">
      <div class="info">
        <div class="header">
          <h6 v-html="nftObject.nft.title" class="title" />

          <svg
              class="button"
              :class="{
                  active: isCopying,
              }"
              @click="share"
              xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"
          >
            <path d="M22.0456 9.89972H19.4869C19.2382 9.89972 18.9998 9.99849 18.824 10.1743C18.6481 10.3501 18.5494 10.5886 18.5494 10.8372C18.5494 11.0859 18.6481 11.3243 18.824 11.5001C18.9998 11.676 19.2382 11.7747 19.4869 11.7747H22.0463C22.5631 11.7747 22.9838 12.1953 22.9838 12.7122V24.9722C22.9838 25.4891 22.5631 25.9097 22.0463 25.9097H7.95313C7.43625 25.9097 7.01563 25.4891 7.01563 24.9722V12.7122C7.01563 12.1953 7.43625 11.7747 7.95313 11.7747H10.5125C10.7611 11.7747 10.9996 11.676 11.1754 11.5001C11.3512 11.3243 11.45 11.0859 11.45 10.8372C11.45 10.5886 11.3512 10.3501 11.1754 10.1743C10.9996 9.99849 10.7611 9.89972 10.5125 9.89972H7.95313C7.20746 9.90055 6.49257 10.1971 5.9653 10.7244C5.43803 11.2517 5.14145 11.9666 5.14062 12.7122V24.9722C5.14062 26.5228 6.4025 27.7847 7.95313 27.7847H22.0463C23.5969 27.7847 24.8588 26.5228 24.8588 24.9722V12.7122C24.8578 11.9665 24.561 11.2516 24.0337 10.7244C23.5063 10.1971 22.7914 9.90055 22.0456 9.89972ZM11.5038 8.00722L14.0931 5.41785V17.7603C14.0931 17.8835 14.1174 18.0054 14.1645 18.1191C14.2116 18.2329 14.2807 18.3362 14.3677 18.4233C14.4548 18.5103 14.5581 18.5794 14.6719 18.6265C14.7856 18.6736 14.9075 18.6978 15.0306 18.6978C15.1537 18.6978 15.2756 18.6736 15.3894 18.6265C15.5031 18.5794 15.6065 18.5103 15.6935 18.4233C15.7806 18.3362 15.8496 18.2329 15.8968 18.1191C15.9439 18.0054 15.9681 17.8835 15.9681 17.7603V5.41785L18.5575 8.00722C18.7406 8.19035 18.9806 8.2816 19.2206 8.2816C19.4606 8.2816 19.7006 8.19035 19.8838 8.00722C20.0595 7.83141 20.1582 7.593 20.1582 7.34441C20.1582 7.09582 20.0595 6.8574 19.8838 6.6816L15.6944 2.4916C15.6073 2.40448 15.5039 2.33537 15.3902 2.28822C15.2764 2.24107 15.1544 2.2168 15.0313 2.2168C14.9081 2.2168 14.7861 2.24107 14.6723 2.28822C14.5586 2.33537 14.4552 2.40448 14.3681 2.4916L10.1781 6.6816C10.0886 6.76808 10.0172 6.87153 9.96803 6.9859C9.9189 7.10028 9.89303 7.2233 9.89195 7.34778C9.89087 7.47226 9.91459 7.59571 9.96173 7.71093C10.0089 7.82614 10.0785 7.93082 10.1665 8.01884C10.2545 8.10687 10.3592 8.17648 10.4744 8.22362C10.5896 8.27076 10.7131 8.29448 10.8376 8.29339C10.962 8.29231 11.0851 8.26645 11.1994 8.21732C11.3138 8.16818 11.4173 8.09676 11.5038 8.00722Z" fill="#A0ABA7"/>
          </svg>
        </div>

        <div class="text">
          <h3 class="description" v-html="nftObject.nft.description" />

          <h4 class="button">Show more</h4>
        </div>
      </div>

      <div class="other" v-if="nftObject.status === 'Completed'">
        <div class="winner">
          <h4 class="title">Winner</h4>

          <h2 class="address" v-html="nftObject.lastAddress" />
        </div>

        <aside>
          <div class="burned">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M23.5825 39.5312C25.5715 36.5898 25.7548 33.413 24.1324 30.0005C23.6812 31.8313 22.8559 32.9423 21.6563 33.334C22.7702 30.1528 21.8395 26.7159 18.8639 23.0234C18.7997 26.8371 17.8832 29.6152 16.1144 31.3578C13.6777 33.756 13.7063 36.4626 16.2003 39.4774C5.84735 33.9679 4.38673 26.5785 11.8183 17.3095C12.2792 19.5487 13.3962 20.9235 15.1693 21.4338C13.2366 13.2322 15.2701 6.24383 21.2698 0.46875C21.3066 13.2849 25.2367 14.4241 30.2057 20.1449C35.5707 27.0102 32.4179 34.933 23.5825 39.5312Z" fill="url(#paint0_linear_729_25286)"/>
              <defs>
                <linearGradient id="paint0_linear_729_25286" x1="31.9906" y1="11.1897" x2="9.13501" y2="34.0454" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#1CC287"/>
                  <stop offset="1" stop-color="#23665A"/>
                </linearGradient>
              </defs>
            </svg>

            <h2 class="title">Burned:</h2>

            <h2 class="number">2300000</h2>

            <h4 class="value">TRUD</h4>
          </div>

          <div class="socials">
            <svg @click="openLink" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <g clip-path="url(#clip0_729_32339)">
                <path d="M21.8792 0H8.12073C3.64288 0 0 3.64288 0 8.12073V21.8794C0 26.3571 3.64288 29.9999 8.12073 29.9999H21.8794C26.3571 29.9999 29.9999 26.3571 29.9999 21.8794V8.12073C29.9999 3.64288 26.3571 0 21.8792 0ZM28.2412 21.8794C28.2412 25.3873 25.3873 28.2412 21.8792 28.2412H8.12073C4.61267 28.2412 1.75875 25.3873 1.75875 21.8794V8.12073C1.75875 4.61267 4.61267 1.75875 8.12073 1.75875H21.8794C25.3873 1.75875 28.2412 4.61267 28.2412 8.12073V21.8794Z" fill="#1CC287"/>
                <path d="M14.9998 6.79799C10.4766 6.79799 6.79688 10.4777 6.79688 15.0009C6.79688 19.5241 10.4766 23.2038 14.9998 23.2038C19.523 23.2038 23.2027 19.5241 23.2027 15.0009C23.2027 10.4777 19.523 6.79799 14.9998 6.79799ZM14.9998 21.445C11.4466 21.445 8.55563 18.5543 8.55563 15.0009C8.55563 11.4478 11.4466 8.55674 14.9998 8.55674C18.5532 8.55674 21.4439 11.4478 21.4439 15.0009C21.4439 18.5543 18.5532 21.445 14.9998 21.445ZM23.3988 3.88477C22.0621 3.88477 20.975 4.97221 20.975 6.30861C20.975 7.64531 22.0621 8.73269 23.3988 8.73269C24.7355 8.73269 25.8229 7.64531 25.8229 6.30867C25.8229 4.97203 24.7355 3.88477 23.3988 3.88477ZM23.3988 6.97377C23.0321 6.97377 22.7337 6.67529 22.7337 6.30861C22.7337 5.94176 23.0321 5.64352 23.3988 5.64352C23.7657 5.64352 24.0642 5.94176 24.0642 6.30861C24.0642 6.67529 23.7657 6.97377 23.3988 6.97377Z" fill="#1CC287"/>
              </g>
              <defs>
                <clipPath id="clip0_729_32339">
                  <rect width="30" height="30" fill="white"/>
                </clipPath>
              </defs>
            </svg>

            <svg @click="openLink" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path d="M27.2383 6.58986C24.0893 6.58986 21.5274 4.02791 21.5274 0.878906C21.5274 0.393516 21.1339 0 20.6485 0H15.9414C15.4561 0 15.0625 0.393516 15.0625 0.878906V20.1778C15.0625 22.029 13.5564 23.5351 11.7051 23.5351C9.85379 23.5351 8.3477 22.029 8.3477 20.1778C8.3477 18.3264 9.85379 16.8203 11.7051 16.8203C12.1905 16.8203 12.584 16.4268 12.584 15.9414V11.2343C12.584 10.7489 12.1905 10.3554 11.7051 10.3554C6.28906 10.3554 1.88281 14.7617 1.88281 20.1778C1.88287 25.5938 6.28906 30 11.7051 30C17.1212 30 21.5275 25.5938 21.5275 20.1778V11.6354C23.2769 12.5679 25.2232 13.0547 27.2383 13.0547C27.7237 13.0547 28.1172 12.6612 28.1172 12.1758V7.46877C28.1172 6.98338 27.7237 6.58986 27.2383 6.58986ZM26.3594 11.2605C24.483 11.1045 22.7013 10.449 21.1618 9.34154C21.0305 9.24711 20.8757 9.19073 20.7144 9.17862C20.5531 9.1665 20.3916 9.19912 20.2477 9.27288C20.1038 9.34664 19.983 9.45868 19.8986 9.59667C19.8143 9.73466 19.7696 9.89325 19.7696 10.055V20.1778C19.7696 24.6245 16.1519 28.2422 11.7051 28.2422C7.25832 28.2422 3.64063 24.6245 3.64063 20.1778C3.64063 16.0279 6.79127 12.6001 10.8262 12.1608V15.138C8.42281 15.5558 6.58988 17.6568 6.58988 20.1778C6.58988 22.9983 8.88453 25.2929 11.7051 25.2929C14.5256 25.2929 16.8204 22.9983 16.8204 20.1778V1.75781H19.821C20.2234 5.175 22.9422 7.89381 26.3593 8.29623V11.2605H26.3594Z" fill="#1CC287"/>
            </svg>

            <svg @click="openLink" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path d="M23.3786 2.5H6.62143C2.96786 2.5 0 5.46786 0 9.12143V19.7286C0 23.3821 2.96786 26.35 6.62143 26.35H23.3786C27.0321 26.35 30 23.3821 30 19.7286V9.12143C30 5.46786 27.0321 2.5 23.3786 2.5ZM27.8571 19.7286C27.8571 22.1929 25.8429 24.2071 23.3786 24.2071H6.62143C4.15714 24.2071 2.14286 22.1929 2.14286 19.7286V9.12143C2.14286 6.65714 4.15714 4.64286 6.62143 4.64286H23.3786C25.8429 4.64286 27.8571 6.65714 27.8571 9.12143V19.7286ZM19.1357 12.6036L12.9643 9.03572C12.3 8.65 11.5179 8.65 10.8536 9.03572C10.1893 9.42143 9.80357 10.0964 9.80357 10.8571V17.9821C9.80357 18.7429 10.2 19.4286 10.8536 19.8036C11.1857 19.9964 11.55 20.0929 11.9036 20.0929C12.2571 20.0929 12.6321 19.9964 12.9536 19.8036L19.125 16.2357C19.7893 15.85 20.1857 15.175 20.1857 14.4143C20.1857 13.6536 19.8 12.9786 19.1357 12.6036ZM11.9464 17.9929L11.8929 10.8893L18.0107 14.425L11.9464 17.9929Z" fill="#1CC287"/>
            </svg>

            <svg @click="openLink" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path d="M0.592003 24.4937C3.38859 26.2616 6.63101 27.196 9.9395 27.1875C14.827 27.1875 19.3058 25.31 22.552 21.9012C25.6583 18.6387 27.367 14.255 27.282 9.80624C28.4595 8.79874 29.8445 6.87499 29.8445 4.99999C29.8446 4.83477 29.801 4.67246 29.7182 4.5295C29.6354 4.38654 29.5162 4.26801 29.3728 4.18592C29.2295 4.10382 29.0669 4.06108 28.9017 4.06201C28.7365 4.06294 28.5745 4.10753 28.432 4.19124C27.3258 4.84124 26.317 5.01124 25.2795 4.71999C23.1608 2.65499 20.007 2.21999 17.3495 3.65249C15.027 4.90249 13.7358 7.18999 13.852 9.68999C9.91363 9.20954 6.30838 7.24032 3.77575 4.18624C3.67958 4.06988 3.55673 3.97846 3.41765 3.91976C3.27857 3.86106 3.12737 3.83682 2.97691 3.84909C2.82644 3.86136 2.68117 3.90979 2.55344 3.99025C2.42571 4.07071 2.3193 4.18083 2.24325 4.31124C1.02575 6.39624 1.03825 8.81249 2.097 10.7637C1.86767 10.8019 1.65951 10.9207 1.51007 11.0988C1.36063 11.2769 1.27975 11.5025 1.282 11.735C1.28519 12.6839 1.49259 13.6211 1.8901 14.4827C2.28761 15.3444 2.86592 16.1104 3.58575 16.7287C3.45799 16.8514 3.36763 17.0077 3.32514 17.1796C3.28266 17.3515 3.28981 17.532 3.34575 17.7C3.65179 18.6129 4.15017 19.4496 4.80723 20.1534C5.46429 20.8573 6.26473 21.412 7.1545 21.78C5.30527 22.6623 3.24505 23.0062 1.2095 22.7725C0.229503 22.64 -0.254247 23.9575 0.592003 24.4937ZM10.1958 22.1012C10.897 21.5625 10.5245 20.44 9.6445 20.4212C8.89406 20.4053 8.15736 20.2169 7.49146 19.8705C6.82555 19.5241 6.24833 19.0291 5.8045 18.4237C6.23686 18.3975 6.66558 18.3288 7.0845 18.2187C8.03575 17.9612 7.99075 16.5887 7.0245 16.395C6.1791 16.2258 5.39467 15.8325 4.75324 15.2564C4.11181 14.6803 3.63693 13.9424 3.37825 13.12C3.8495 13.2362 4.3295 13.3012 4.80825 13.31C5.757 13.315 6.11575 12.0987 5.342 11.59C3.59825 10.4412 2.8545 8.41249 3.347 6.50499C6.41494 9.60766 10.5351 11.4467 14.8933 11.6587C15.0379 11.666 15.1823 11.6395 15.315 11.5815C15.4477 11.5235 15.5651 11.4354 15.658 11.3243C15.751 11.2132 15.8168 11.0821 15.8505 10.9412C15.8842 10.8004 15.8847 10.6536 15.852 10.5125C15.2583 7.93874 16.6958 6.13499 18.2395 5.30374C19.767 4.47874 22.2195 4.22124 24.0995 6.19374C24.6583 6.78249 26.5433 6.80499 27.502 6.58124C27.072 7.39124 26.4108 8.15999 25.792 8.59249C25.6622 8.68337 25.5575 8.80568 25.4878 8.94798C25.418 9.09029 25.3855 9.24795 25.3933 9.40624C25.5945 13.5125 24.0645 17.595 21.1958 20.6062C18.3058 23.64 14.3095 25.3112 9.94075 25.3112C8.20325 25.3112 6.4995 25.0287 4.8895 24.4837C6.8145 24.1112 8.64325 23.2962 10.1958 22.1012Z" fill="#1CC287"/>
            </svg>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.nft-auction-lot
  display: flex
  width: 100%

  @media (min-width: $bigScreenStart)
    gap: 60px
    align-items: flex-start

  @media (max-width: $smallScreenEnd), (any-pointer: coarse)
    gap: 30px
    flex-direction: column
    align-items: center
    background-color: #1D2332
    padding: 20px
    +border-radius(10px)

  main
    display: flex
    flex-direction: column
    align-items: center

    @media (min-width: $bigScreenStart)
      gap: 50px

    @media (max-width: $smallScreenEnd), (any-pointer: coarse)
      gap: 30px
      width: 100%

    .image
      aspect-ratio: 1
      +background-image-settings()
      pointer-events: none

      @media (min-width: $bigScreenStart)
        width: 410px
        +border-radius(20px)

      @media (max-width: $smallScreenEnd), (any-pointer: coarse)
        width: 100%
        +border-radius(6px)

    .price
      width: 100%
      flex-direction: column
      align-items: center
      display: flex

      @media (min-width: $bigScreenStart)
        background-color: #1D2332
        +border-radius(20px)
        padding: 30px
        gap: 30px

      @media (max-width: $smallScreenEnd), (any-pointer: coarse)
        background-color: #293043
        +border-radius(10px)
        padding: 16px
        gap: 20px

      .plan
        display: flex
        flex-direction: column
        align-items: center

        @media (min-width: $bigScreenStart)
          gap: 16px

        @media (max-width: $smallScreenEnd), (any-pointer: coarse)
          gap: 24px

        > .title
          font-size: 17px
          line-height: 12px
          color: #A0ABA7

        > .date
          font-variant-numeric: lining-nums proportional-nums
          color: #F0FBF7

          @media (min-width: $bigScreenStart)
            font-size: 24px
            line-height: 17px

          @media (max-width: $smallScreenEnd), (any-pointer: coarse)
            font-size: 20px
            line-height: 14px

      .bid
        display: flex
        flex-direction: column
        gap: 12px
        align-items: center

        > .title
          font-size: 17px
          color: #A0ABA7

        .cost
          display: flex
          gap: 6px
          align-items: baseline

          .number
            font-variant-numeric: lining-nums proportional-nums
            color: #F0FBF7

            @media (min-width: $bigScreenStart)
              font-size: 24px
              line-height: 17px

            @media (max-width: $smallScreenEnd), (any-pointer: coarse)
              font-size: 20px
              line-height: 14px

          .text
            color: #F0FBF7

            @media (min-width: $bigScreenStart)
              font-size: 20px
              line-height: 17px

            @media (max-width: $smallScreenEnd), (any-pointer: coarse)
              font-size: 17px
              line-height: 14px

      .button
        padding: 12px 40px 14px
        background-color: #1CC287
        color: #003600
        font-size: 20px
        +border-radius(999px)
        text-align: center

        @media (min-width: $bigScreenStart)

        @media (max-width: $smallScreenEnd), (any-pointer: coarse)
          width: 100%
        
        &:hover
          cursor: pointer
          +user-select(none)

      .result
        padding: 10px 20px
        font-size: 24px
        border: 1px solid bisque
        +border-radius(999px)
        width: 100%
        text-align: center

    > .button
      padding: 12px 40px 14px
      background-color: #1CC287
      color: #003600
      font-size: 20px
      +border-radius(999px)
      text-align: center

      @media (min-width: $bigScreenStart)

      @media (max-width: $smallScreenEnd), (any-pointer: coarse)
        width: 100%

      &:hover
        cursor: pointer
        +user-select(none)

  .about
    display: flex
    flex-direction: column
    gap: 30px
    align-items: flex-start
    width: 100%
    flex: 1

    @media (min-width: $bigScreenStart)
      background-color: #1D2332
      padding: 32px 50px 50px
      +border-radius(20px)

    @media (max-width: $smallScreenEnd), (any-pointer: coarse)

    .info
      display: flex
      flex-direction: column
      align-items: flex-start
      width: 100%

      @media (min-width: $bigScreenStart)
        gap: 30px

      @media (max-width: $smallScreenEnd), (any-pointer: coarse)
        gap: 24px

      .header
        display: flex
        justify-content: space-between
        align-items: flex-start
        width: 100%

        > .title
          font-size: 24px
          color: #F0FBF7
          
        .button
          +user-select(none)

          &:hover
            cursor: pointer

          @keyframes share
            0%
              fill: #1CC287
            100%
              fill: #A0ABA7

          path
            fill: #A0ABA7

          &.active
            path
              animation: share 1s ease-in-out

      .text
        display: flex
        flex-direction: column
        align-items: flex-start

        @media (min-width: $bigScreenStart)
          gap: 20px

        @media (max-width: $smallScreenEnd), (any-pointer: coarse)
          gap: 24px

        .description
          color: #F0FBF7
          font-size: 16px

        .button
          color: #768D85
          +user-select(none)

          @media (min-width: $bigScreenStart)
            font-size: 17px
            line-height: 12px

          @media (max-width: $smallScreenEnd), (any-pointer: coarse)
            font-size: 16px
            line-height: 11px
            
          &:hover
            cursor: pointer

    .other
      display: flex
      flex-direction: column
      width: 100%

      @media (min-width: $bigScreenStart)
        gap: 30px
        align-items: flex-start

      @media (max-width: $smallScreenEnd), (any-pointer: coarse)
        gap: 24px
        align-items: center

      .winner
        background-color: #05382F
        +border-radius(10px)
        display: flex
        gap: 12px
        padding: 12px 16px
        align-items: center
        text-align: center

        @media (min-width: $bigScreenStart)

        @media (max-width: $smallScreenEnd), (any-pointer: coarse)
          flex-direction: column

        > .title
          color: #F0FBF7
          font-size: 16px
          line-height: 11px

        .address
          font-variant-numeric: lining-nums proportional-nums
          white-space: break-spaces
          word-break: break-all

          @media (min-width: $bigScreenStart)
            font-size: 20px

          @media (max-width: $smallScreenEnd), (any-pointer: coarse)
            font-size: 17px

      aside
        display: flex
        align-items: center

        @media (min-width: $bigScreenStart)
          gap: 70px

        @media (max-width: $smallScreenEnd), (any-pointer: coarse)
          flex-direction: column
          gap: 30px

        .burned
          display: flex
          gap: 4px
          align-items: center

          > .title
            color: #A0ABA7

            @media (min-width: $bigScreenStart)
              font-size: 20px

            @media (max-width: $smallScreenEnd), (any-pointer: coarse)
              font-size: 17px

          .number
            color: #F0FBF7
            font-variant-numeric: lining-nums proportional-nums

            @media (min-width: $bigScreenStart)
              font-size: 24px

            @media (max-width: $smallScreenEnd), (any-pointer: coarse)
              font-size: 17px

          .value
            color: #F0FBF7

            @media (min-width: $bigScreenStart)
              font-size: 20px

            @media (max-width: $smallScreenEnd), (any-pointer: coarse)
              font-size: 16px

        .socials
          display: flex
          align-items: center

          @media (min-width: $bigScreenStart)
            gap: 20px

          @media (max-width: $smallScreenEnd), (any-pointer: coarse)
            gap: 36px

          > *
            +user-select(none)

            &:hover
              cursor: pointer
</style>