<script>
import { defineComponent } from 'vue'

import nftWalletConnector from "./wallet/nft-wallet-connector.vue";

import Web3 from 'web3'

import abiToken from './abiToken.js';
import abiAuction from './abiAuction.js';

import axios from "axios";

import Web3Modal from "web3modal/dist";

import WalletConnectProvider from "@walletconnect/web3-provider";

export default defineComponent({
  name: "nft-main-auction",

  components: {
    nftWalletConnector,
  },

  data() {
    return {
      Web3,

      abiToken,
      abiAuction,

      axios,

      Web3Modal,

      WalletConnectProvider,

      address: null,
      highestBid: 0,

      balance: 0,
      loading: false,
      bet: 0,
      tried: false,
      errorMessages: ['Errors:'],
      contractTrudAuction: null,
      contractTrudToken: null,
      account: null,

      web3: null,
    }
  },

  async mounted() {
    await this.initializeWeb3();

    console.log('event ...')

    console.log('test:', this.contractTrudToken)

    // this.contractTrudToken.events.NewBid({}, (error, event) => {
    //   if (error) {
    //     console.error('Error:', error);
    //   } else {
    //     this.currentBid = event.returnValues.bidAmount;
    //   }
    // });

    console.log('done')
  },

  methods: {
    updateData(address, balance = undefined) {
      this.address = address
      this.balance = balance || 0
    },

    async connectWallet() {
      await this.$refs.connector.openModal()
    },

    async initializeWeb3() {
      if (typeof window.ethereum === 'undefine') {
        this.web3 = new this.Web3(window.ethereum)
        window.ethereum.enable()
      } else {
        // const providerUrl = 'https://eth-mainnet.g.alchemy.com/v2/L1Fze_ibozWFW93ZTWmam3A8pwrayRQ0'
        // this.web3 = new this.Web3(new this.Web3.providers.HttpProvider(providerUrl))

        // const web3Modal = new this.Web3Modal({
        //   network: "mainnet",
        //   cacheProvider: true,
        // })
        // const provider = await web3Modal.connect()
        // this.web3 = new this.Web3(provider)

        this.web3 = new this.Web3('https://goerli.infura.io/v3/e37aaab6fa0f45b0ae95157c4caa4c39');
      }

      try {
        await this.updateBalance();

        const contractAddress = "0x604B803d94fb49D039cED8A18989b5F39D81D281";
        const contractAbi = this.abiToken.data
        this.contractTrudToken = new this.web3.eth.Contract(contractAbi, contractAddress);

        const contractAddressAuc = "0xd0eada520017b2C1E60fb7dCd49d51489c09c8F7";
        const contractAbiAuc = this.abiAuction.data
        this.contractTrudAuction = new this.web3.eth.Contract(contractAbiAuc, contractAddressAuc);

        console.log(this.contractTrudToken);
        console.log(this.contractTrudAuction);
      } catch (error) {
        console.error(error);
      }
    },

    async updateBalance() {
      if (this.account) {
        const res = await this.web3.eth.getBalance(this.account)
        console.log('Get Balance:', res / 100000000000)
      }
    },

    async handleApprove() {
      try {
        const addr1 = "0xd0eada520017b2C1E60fb7dCd49d51489c09c8F7"
        const amount = (10000000 * 1000000000).toString()
        // const receipt = await this.contractTrudToken.methods.approve(addr1, amount).send({ from: this.account })
        const receipt = await this.contractTrudToken.methods.approve(addr1, amount).send({ from: "0x1440c89A203948B638108E0285CCB17A15bAa143" })
        console.log(receipt);
      } catch (error) {
        console.error(error);

        this.errorMessages.push(error)
      }
    },

    async handleStartAuction() {
      try {
        const receipt = await this.contractTrudAuction.methods.startAuction().send({ from: this.account })
        console.log(receipt);
      } catch (error) {
        console.error(error);
      }
    },

    async handleBidAuction() {
      try {
        const provider = new this.Web3.providers.HttpProvider(`https://goerli.infura.io/v3/e37aaab6fa0f45b0ae95157c4caa4c39`)
        const web3 = new this.Web3(provider)

        const contractAddress = "0x604B803d94fb49D039cED8A18989b5F39D81D281"
        const contractAbi = this.abiToken.data
        const contractTrudToken = new this.web3.eth.Contract(contractAbi, contractAddress)

        const addr1 = "0xd0eada520017b2C1E60fb7dCd49d51489c09c8F7"
        const amount = (10000000 * 1000000000).toString()
        const receipt = await contractTrudToken.methods.approve(addr1, amount).send({ from: "0x1440c89A203948B638108E0285CCB17A15bAa143" })

        // const web3Modal = new this.Web3Modal({
        //   network: 'goerli', // Или другая сеть, которую вы хотите использовать
        //   cacheProvider: true, // Кеширование провайдера, чтобы избежать повторного запроса разрешения
        //   providerOptions: {
        //     infura: {
        //       package: this.Web3, // Используйте Web3.js в качестве провайдера
        //       options: {
        //         infuraId: 'e37aaab6fa0f45b0ae95157c4caa4c39', // Замените на свой Infura Project ID
        //       },
        //     },
        //   },
        // })
        //
        // console.log('web3Modal:', web3Modal)
        //
        // const provider = await web3Modal.connect()
        //
        // console.log('provider:', provider)
        //
        // const web3 = new this.Web3(provider)
        //
        // // Теперь у вас есть доступ к кошельку пользователя через web3
        // // Здесь вы можете вызвать функцию "approve" вашего смарт-контракта
        // const contractAddress = "0x604B803d94fb49D039cED8A18989b5F39D81D281";
        // const contractAbi = this.abiToken.data
        //
        // const spender = "0xd0eada520017b2C1E60fb7dCd49d51489c09c8F7"
        // const amount = (10000000 * 1000000000).toString()
        //
        //
        // const contract = new web3.eth.Contract(contractAbi, contractAddress);
        //
        // // Вызовите метод "approve" с указанием параметров
        // await contract.methods.approve(spender, amount).send({
        //   from: (await web3.eth.getAccounts())[0]
        // });

        // const connector = new this.WalletConnectProvider({
        //   infuraId: "e37aaab6fa0f45b0ae95157c4caa4c39", // Замените на свой Infura Project ID
        //   qrcodeModalOptions: {
        //     mobileLinks: [
        //       "metamask",
        //     ],
        //   },
        // });
        //
        // await connector.enable();
        //
        // // Создайте экземпляр Web3 с использованием провайдера WalletConnect
        // const web3 = new this.Web3(connector);
        //
        // // Теперь у вас есть доступ к кошельку пользователя через web3
        // // Здесь вы можете вызвать функцию "approve" вашего смарт-контракта
        // const amount = web3.utils.toWei("1", "ether"); // Замените на нужную сумму
        // const contract = new web3.eth.Contract(contractAbi, contractAddress);
        //
        // // Вызовите метод "approve" с указанием параметров
        // await contract.methods.approve(spender, amount).send({
        //   from: (await web3.eth.getAccounts())[0], // Используйте адрес кошелька пользователя
        // });
      } catch(err) {
        this.errorMessages.push(err)
      }

      // const addr1 = "0xd0eada520017b2C1E60fb7dCd49d51489c09c8F7"
      // const amount = (10000000 * 1000000000).toString()
      //
      // try {
      //   const nonce = await this.web3.eth.getTransactionCount('0x1440c89A203948B638108E0285CCB17A15bAa143'); // Замените на адрес вашего кошелька
      //   const gasPrice = await this.web3.eth.getGasPrice();
      //
      //   const txObject = {
      //     nonce: nonce,
      //     gasPrice: gasPrice,
      //     gasLimit: 21608,
      //     to: "0x604B803d94fb49D039cED8A18989b5F39D81D281",
      //     value: '0x00', // Если это операция "approve", значение value должно быть нулевым
      //     data: this.contractTrudToken.methods.approve(addr1, amount).encodeABI(),
      //   };
      //
      //   const signedTx = await this.web3.eth.accounts.signTransaction(txObject, "e06e66607b26566985c891185d3cb2221d89dd2913cee5854f2d25633a397ad3");
      //
      //   const txReceipt = await this.web3.eth.sendSignedTransaction(signedTx.rawTransaction);
      //   console.log('Transaction receipt:', txReceipt);
      // } catch (error) {
      //   console.error('Error:', error);
      //
      //   this.errorMessages.push(error)
      // }

      // await this.axios.post("https://eth-goerli.g.alchemy.com/v2/L1Fze_ibozWFW93ZTWmam3A8pwrayRQ0", {
      //   "id": 1,
      //   "jsonrpc": "2.0",
      //   "method": "alchemy_getTokenAllowance",
      //   "params": [{
      //     "contract": "0x604B803d94fb49D039cED8A18989b5F39D81D281",
      //     "owner": "0x1440c89A203948B638108E0285CCB17A15bAa143",
      //     "spender": "0x6DE4C1Eb559EDf6A18FDAdf9d756585C1dF3074b",
      //   }]
      // }).then(res => {
      //   console.log('axios res:', res)
      // }).catch(err => {
      //   console.log('axios err:', err)
      // })

      // this.tried = true
      // this.loading = true
      //
      // await this.handleApprove()
      //
      // try {
      //   console.log('bet:', this.bet)
      //   const receipt = await this.contractTrudAuction.methods.bid(this.bet * 1000000000).send({ from: this.account })
      //   console.log(receipt);
      // } catch (error) {
      //   console.error(error);
      //
      //   this.errorMessages.push(error)
      // }
      //
      // this.loading = false
    },

    async handleEndAuction() {
      try {
        const receipt = await this.contractTrudAuction.methods.endAuction().send({ from: this.account })
        console.log(receipt);
      } catch (error) {
        console.error(error);
      }
    },
  },
})
</script>

<template>
  <div class="nft-main-auction">
    <nft-wallet-connector
        ref="connector"
        @update-data="updateData"
    />

    <div class="button" @click="connectWallet">
      <h1 v-if="address">View profile</h1>
      <h1 v-else>Connect wallet</h1>
    </div>

    <template v-if="address">
      <div class="address">
        <h1>Address: {{ address }}</h1>
      </div>

      <div class="input">
        <input type="number" name="" id="" v-model="bet">
      </div>

      <div class="button" @click="handleBidAuction">
        <h1>Place Bid</h1>
      </div>

      <h1 v-if="loading">Loading ...</h1>
      <h1 v-if="tried">Trying ...</h1>
    </template>

    <div class="test-button" @click="handleBidAuction">
      <h1>Test Button</h1>
    </div>

    <h1>{{ contractTrudAuction?._address }}</h1>

    <h1>{{ Object.keys(this.abiToken.data || {}).length }}</h1>
    <h1>{{ Object.keys(this.abiAuction.data || {}).length }}</h1>

    <h1>{{ Object.keys(contractTrudAuction || {}).length }}</h1>
    <h1>{{ Object.keys(contractTrudToken || {}).length }}</h1>

    <h1 v-for="message in errorMessages">{{ message }}</h1>
  </div>
</template>

<style scoped lang="sass">
.nft-main-auction
  width: 400px
  display: flex
  flex-direction: column
  gap: 30px
  align-items: center
  text-align: center

  .button, .test-button
    background-color: #1CC287
    padding: 15px 30px
    +border-radius(999px)
    color: #101A33

    &:hover
      background-color: #2ee3a0
      cursor: pointer

  .input
    input
      background-color: transparent
      +border-radius(10px)
      color: white
      font-family: Raleway, sans-serif
      font-style: normal
      font-weight: 800
      line-height: 130%
      border: #1CC287 1px solid
      padding: 15px 30px
</style>