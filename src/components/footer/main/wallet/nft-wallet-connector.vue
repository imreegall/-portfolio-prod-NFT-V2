<script>
import { defineComponent, watch } from 'vue'

import {
  createWeb3Modal,
  defaultWagmiConfig,
  useWeb3Modal,
  useWeb3ModalEvents,
} from '@web3modal/wagmi/vue'

import {getChainId} from "web3modal";

import { getAccount, readContract, getWalletClient, writeContract } from "@wagmi/core";

import { mainnet, arbitrum, goerli } from 'viem/chains'

import abiAuction from './abiAuction.js';
import abiToken from './abiToken.js';

export default defineComponent({
  name: "nft-wallet-connector",

  setup(props, { emit }) {
    // const chains = [mainnet, arbitrum]
    const chains = [mainnet, arbitrum, goerli]

    // const projectId = '94220bbc13162157cb0a4c2b954f3904'
    const projectId = '821914902d6ca5c70b7e0512e316fcbd'

    // const metadata = {
    //   name: 'TRUD',
    //   description: 'TRUD family.',
    //   url: 'https://trud.family',
    //   icons: ['https://trud.family/img/trud.d0eb6c11.png']
    // }
    const metadata = {
      name: 'Web3Modal',
      description: 'Web3Modal Example',
      url: 'https://web3modal.com',
      icons: ['https://avatars.githubusercontent.com/u/37784886']
    }

    // const wagmiConfig = defaultWagmiConfig({
    //   projectId,
    //   chains,
    //   metadata
    // })
    const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

    // createWeb3Modal({
    //   wagmiConfig,
    //   projectId,
    //   chains,
    //   featuredWalletIds: [
    //     'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96',
    //     '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0',
    //     'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa',
    //   ],
    //   tokens: {
    //     1: {
    //       address: '0x2e7729f4e4aa8e68d13830d372f975046d4a498f',
    //     },
    //     2: {
    //       address: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
    //     },
    //   },
    // })
    createWeb3Modal({ wagmiConfig, projectId, chains })

    const modal = useWeb3Modal()
    const events = useWeb3ModalEvents()

    let address = null

    watch(events, async () => {
      const account = await getAccount()

      const newAddress = account.address || null

      if (address === newAddress) {
        return
      }

      address = newAddress

      await emit('updateData', address)
    }, {
      deep: true,
    })

    async function openModal() {
      await modal.open()
    }

    const tokenContractAddress = "0x604B803d94fb49D039cED8A18989b5F39D81D281";
    const tokenContractAbi = abiToken.data

    async function checkApprove() {
      try {
        const { account } = await getWalletClient()

        return await readContract({
          address: tokenContractAddress,
          abi: tokenContractAbi,
          functionName: 'allowance',
          args: [account.address, "0xd0eada520017b2C1E60fb7dCd49d51489c09c8F7"],
          chainId: 0,
        })
      } catch(e) {
        console.log('error:', e?.cause?.reason)

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
          args: ["0xd0eada520017b2C1E60fb7dCd49d51489c09c8F7", amount],
          chainId: 0,
        })
      } catch(e) {
        console.log('error:', e?.cause?.reason)

        return e?.cause?.reason
      }
    }

    async function doApprove() {
      try {
        const amount = (BigInt(10000000) * BigInt(1000000000)).toString()

        return await writeContract({
          address: tokenContractAddress,
          abi: tokenContractAbi,
          functionName: 'approve',
          args: ["0xd0eada520017b2C1E60fb7dCd49d51489c09c8F7", amount],
          chainId: 0,
        })
      } catch(e) {
        console.log('error:', e?.cause?.reason)

        return e?.cause?.reason
      }
    }

    const auctionContractAddress = "0xd0eada520017b2C1E60fb7dCd49d51489c09c8F7";
    const auctionContractAbi = abiAuction.data

    async function doBid() {
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

        const allowanceAmount = BigInt(await checkApprove())

        const bidAmount = BigInt(await getHighestBid()) + BigInt(100000000000000) < BigInt(1000000000000000) ? BigInt(1000000000000000) : BigInt(await getHighestBid()) + BigInt(100000000000000)

        if (bidAmount > allowanceAmount) {
          await doApprove()
        }

        return await writeContract({
          address: auctionContractAddress,
          abi: auctionContractAbi,
          functionName: 'bid',
          args: [BigInt(await getHighestBid()) + BigInt(100000000000000) < BigInt(1000000000000000) ? BigInt(1000000000000000) : BigInt(await getHighestBid()) + BigInt(100000000000000)],
          account
        })
      } catch(e) {
        // console.log('error:', e?.cause?.reason)
        console.log('error:', e)

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
        console.log('error:', e?.cause?.reason)

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
        console.log('error:', e?.cause?.reason)

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
        console.log('error:', e?.cause?.reason)

        return e?.cause?.reason
      }
    }

    async function getHighestBid() {
      try {
        return await readContract({
          address: auctionContractAddress,
          abi: auctionContractAbi,
          functionName: 'highestBid',
        })
      } catch(e) {
        console.log('error:', e?.cause?.reason)

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
  },
})
</script>

<template>
  <div class="nft-wallet-connector" />
</template>