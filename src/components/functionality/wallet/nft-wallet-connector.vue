<script>
import { defineComponent, watch } from 'vue'

import {
  createWeb3Modal,
  defaultWagmiConfig,
  useWeb3Modal,
  useWeb3ModalEvents,
} from '@web3modal/wagmi/vue'

import {
  getAccount,
  readContract,
  getWalletClient,
  writeContract
} from "@wagmi/core";

import { mainnet, arbitrum } from 'viem/chains'

export default defineComponent({
  name: "nft-wallet-connector",

  setup(props, { emit }) {
    const chains = [mainnet, arbitrum]

    const projectId = import.meta.env.VITE_WALLET_CONNECTOR_PROJECT_ID

    const metadata = {
      name: 'TRUD',
      description: 'TRUD family.',
      url: 'https://trud.family',
      icons: ['https://trud.family/img/trud.d0eb6c11.png']
    }

    const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

    createWeb3Modal({
      wagmiConfig,
      projectId,
      chains,
      featuredWalletIds: [
        'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96',
        '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0',
        'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa',
      ],
      tokens: {
        1: {
          address: '0x2e7729f4e4aa8e68d13830d372f975046d4a498f',
        },
        2: {
          address: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
        },
      },
    })

    const modal = useWeb3Modal()
    const events = useWeb3ModalEvents()

    watch(events, async () => {
      const account = await getAccount()

      await emit('updateData', account.address)
    }, {
      deep: true,
    })

    async function openModal() {
      await modal.open()
    }

    const tokenContractAddress = import.meta.env.VITE_TOKEN_CONTRACT_ADDRESS
    const tokenContractAbi = JSON.parse(import.meta.env.VITE_TOKEN_CONTRACT_ABI)

    const auctionContractAddress = import.meta.env.VITE_AUCTION_CONTRACT_ADDRESS
    const auctionContractAbi = JSON.parse(import.meta.env.VITE_AUCTION_CONTRACT_ABI)

    async function checkApprove() {
      try {
        const { account } = await getWalletClient()

        return await readContract({
          address: tokenContractAddress,
          abi: tokenContractAbi,
          functionName: 'allowance',
          args: [account.address, auctionContractAddress],
          chainId: 1,
        })
      } catch(e) {
        console.log('Checking Approve Error:', e)

        return e?.cause?.reason
      }
    }

    async function removeApprove() {
      try {
        const amount = "0"

        return await writeContract({
          address: tokenContractAddress,
          abi: tokenContractAbi,
          functionName: 'approve',
          args: [auctionContractAddress, amount],
          chainId: 1,
        })
      } catch(e) {
        console.log('Removing Approve Error:', e)

        return e?.cause?.reason
      }
    }

    async function doApprove() {
      try {
        const amount = (BigInt(1000000000) * BigInt(1000000000)).toString()

        return await writeContract({
          address: tokenContractAddress,
          abi: tokenContractAbi,
          functionName: 'approve',
          args: [auctionContractAddress, amount],
          chainId: 1,
        })
      } catch(e) {
        console.log('Doing Approve Error:', e)

        return e?.cause?.reason
      }
    }

    async function doBid(betValue) {
      try {
        let account

        try {
          const walletClient = await getWalletClient()
          account = walletClient.account

          if (!account) {
            await openModal()

            return
          }
        } catch(e) {
          await openModal()

          return
        }

        if (betValue < 1000000) {
          alert("The minimum bet is 1,000,000 TRUD tokens")
        }

        const allowanceAmount = BigInt(await checkApprove())
        const highestBid = BigInt(await getHighestBid())
        const bet = BigInt(betValue * 10 ** 9)

        if (bet <= highestBid) {
          return
        }

        if (bet > allowanceAmount) {
          await doApprove()

          return
        }

        return await writeContract({
          address: auctionContractAddress,
          abi: auctionContractAbi,
          functionName: 'bid',
          args: [bet.toString()],
          account
        })
      } catch(e) {
        console.log('Doing Bid Error:', e)

        return e?.cause?.reason
      }
    }

    async function start() {
      try {
        return await writeContract({
          address: auctionContractAddress,
          abi: auctionContractAbi,
          functionName: 'startAuction',
          args: []
        })
      } catch(e) {
        console.log('Starting Error:', e)

        return e?.cause?.reason
      }
    }

    async function stop() {
      try {
        return await writeContract({
          address: auctionContractAddress,
          abi: auctionContractAbi,
          functionName: 'endAuction',
          args: []
        })
      } catch(e) {
        console.log('Stopping Error:', e)

        return e?.cause?.reason
      }
    }

    async function isActive() {
      try {
        return await readContract({
          address: auctionContractAddress,
          abi: auctionContractAbi,
          functionName: 'auctionActive',
        })
      } catch(e) {
        console.log('Checking For Active Error:', e)

        return e?.cause?.reason
      }
    }

    async function getHighestBid() {
      try {
        return await readContract({
          address: auctionContractAddress,
          abi: auctionContractAbi,
          functionName: 'highestBid',
          chainId: 1,
        })
      } catch(e) {
        console.log('Getting Highest Bid Error:', e)

        return e?.cause?.reason
      }
    }

    return {
      openModal,
      checkApprove,
      doApprove,
      removeApprove,
      doBid,
      start,
      stop,
      isActive,
      getHighestBid
    }
  }
})
</script>