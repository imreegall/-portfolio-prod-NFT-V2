<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "nft-burger-menu",

  props: {
    shortAddress: {
      type: String,
      default() {
        return null
      },
    },
  },

  methods: {
    handleConnectButtonClick() {
      this.$emit('handleConnectButtonClick')
      this.closeBurgerMenu()
    },

    handleCloseButtonClick() {
      this.closeBurgerMenu()
    },

    closeBurgerMenu() {
      this.$emit('handleCloseButtonClick')
    },

    handleNavClick(pathName) {
      this.$router.push({ name: pathName })
      this.closeBurgerMenu()
    },

    handleLinkClick(url) {
      window.open(url, "_blank")
      this.closeBurgerMenu()
    },

    handleSoonButtonClick(event) {
      if (this.soon) {
        return
      }

      this.soon = true

      const element = event.currentTarget
      const title = element.innerHTML
      element.innerHTML = "Soon"

      setTimeout(() => {
        element.innerHTML = title
        this.soon = false
      }, 1000)
    },
  },
})
</script>

<template>
  <div class="nft-burger-menu">
    <svg class="close-button" @click="handleCloseButtonClick" xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
      <path d="M5.33866 25.7734L25.774 5.33804C26.2523 4.85982 26.5246 4.21495 26.5313 3.54528C26.5379 2.87561 26.2782 2.23599 25.8094 1.76715C25.3406 1.29831 24.7009 1.03865 24.0313 1.04528C23.3616 1.05191 22.7167 1.32429 22.2385 1.80251L1.80312 22.2379C1.3249 22.7161 1.05252 23.361 1.04589 24.0307C1.03926 24.7003 1.29893 25.3399 1.76777 25.8088C2.23661 26.2776 2.87622 26.5373 3.54589 26.5307C4.21556 26.524 4.86044 26.2516 5.33866 25.7734Z" fill="#31E7A7"/>
      <path d="M2.26759 5.37967L22.703 25.8151C23.1812 26.2933 23.8261 26.5657 24.4957 26.5723C25.1654 26.5789 25.805 26.3193 26.2739 25.8504C26.7427 25.3816 27.0024 24.742 26.9957 24.0723C26.9891 23.4026 26.7167 22.7577 26.2385 22.2795L5.80312 1.84414C5.3249 1.36592 4.68003 1.09354 4.01036 1.0869C3.34068 1.08027 2.70107 1.33994 2.23223 1.80878C1.76339 2.27762 1.50372 2.91723 1.51035 3.58691C1.51699 4.25658 1.78937 4.90145 2.26759 5.37967Z" fill="#31E7A7"/>
    </svg>

    <nav>
      <h2 @click="handleNavClick('lots')">Auction house</h2>

      <h2 @click="handleLinkClick('https://trud.family/')">TRUD Token</h2>

      <h2 @click="handleSoonButtonClick">Collection</h2>
    </nav>

    <div class="buttons-wrapper">
      <div class="button-connect" @click="handleConnectButtonClick">
        <h2
            v-if="shortAddress"
            v-html="shortAddress"
        />

        <template v-else>
          <h2>Connect</h2>

          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
            <g clip-path="url(#clip0_795_28326)">
              <path d="M19.0906 10.5839V7.77292C19.0906 6.81975 18.3513 6.04458 17.4172 5.96941L14.8067 1.40983C14.5648 0.988128 14.1742 0.686727 13.7068 0.561573C13.2415 0.437271 12.7551 0.502554 12.3387 0.744894L3.38986 5.95475H1.81817C0.815441 5.95475 0 6.77015 0 7.77292V18.6818C0 19.6846 0.815399 20.5 1.81817 20.5H17.2725C18.2752 20.5 19.0906 19.6846 19.0906 18.6818V15.8709C19.6186 15.6826 19.9997 15.1828 19.9997 14.591V11.8638C19.9997 11.272 19.6186 10.7721 19.0906 10.5839ZM16.3609 5.95475H12.3991L15.3704 4.22484L16.3609 5.95475ZM14.9188 3.43594L10.5923 5.95475H8.79778L14.4701 2.65225L14.9188 3.43594ZM12.7963 1.53055C13.0018 1.41025 13.242 1.37829 13.4715 1.43957C13.7036 1.5017 13.8972 1.65174 14.0175 1.86169L14.0184 1.86336L6.99112 5.95475H5.19665L12.7963 1.53055ZM18.1815 18.6818C18.1815 19.183 17.7736 19.5909 17.2725 19.5909H1.81817C1.31704 19.5909 0.909104 19.183 0.909104 18.6818V7.77292C0.909104 7.27179 1.31704 6.86386 1.81817 6.86386H17.2725C17.7736 6.86386 18.1815 7.27179 18.1815 7.77292V10.5001H15.4543C13.9504 10.5001 12.7271 11.7235 12.7271 13.2274C12.7271 14.7313 13.9504 15.9546 15.4543 15.9546H18.1815V18.6818ZM19.0906 14.591C19.0906 14.8418 18.8869 15.0455 18.6361 15.0455H15.4543C14.4516 15.0455 13.6361 14.2301 13.6361 13.2274C13.6361 12.2246 14.4515 11.4092 15.4543 11.4092H18.6361C18.8869 11.4092 19.0906 11.6129 19.0906 11.8638V14.591Z" fill="black"/>
              <path d="M15.454 12.3184C14.9529 12.3184 14.5449 12.7263 14.5449 13.2274C14.5449 13.7285 14.9529 14.1365 15.454 14.1365C15.9551 14.1365 16.363 13.7285 16.363 13.2274C16.3631 12.7263 15.9552 12.3184 15.454 12.3184Z" fill="black"/>
            </g>
            <defs>
              <clipPath id="clip0_795_28326">
                <rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
              </clipPath>
            </defs>
          </svg>
        </template>
      </div>

      <h2 class="button-club" @click="handleSoonButtonClick">
        Club
      </h2>
    </div>
  </div>
</template>

<style scoped lang="sass">
.nft-burger-menu
  position: fixed
  width: 100%
  height: 100%
  background-color: #101520F2
  z-index: 999
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  gap: 80px

  .close-button
    position: absolute
    top: 27px
    right: 26px
    +user-select(none)
    
    &:hover
      cursor: pointer

  nav
    display: flex
    flex-direction: column
    align-items: center
    gap: 40px

    > *
      font-size: 20px
      color: #F0FBF7
      
      &:hover
        cursor: pointer

  .buttons-wrapper
    display: flex
    flex-direction: column
    gap: 30px
    align-items: center

    .button-connect
      display: flex
      gap: 16px
      align-items: center
      padding: 12px 40px 14px
      background-color: #1CC287
      +border-radius(999px)
      color: #003600
      font-size: 20px

      &:hover
        cursor: pointer

    .button-club
      padding: 12px 40px 14px
      border: 2px solid #1CC287
      +border-radius(999px)
      color: #1CC287
      font-size: 20px

      &:hover
        cursor: pointer
</style>