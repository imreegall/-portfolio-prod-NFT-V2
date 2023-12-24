import { createRouter, createWebHistory } from "vue-router";

import nftMain from "./components/nft-main.vue";
import nftAuction from "./components/nft-auction.vue";
import nftAuctionLots from "./components/auction/nft-auction-lots.vue";
import nftAuctionLot from "./components/auction/nft-auction-lot.vue";
import nft404 from "./components/404/nft-404.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "main",
            component: nftMain,
            meta: {
                title: "Historical Collection"
            },
        },

        {
            path: "/auction",
            name: "auction",
            component: nftAuction,
            meta: {
                title: "Auction"
            },
            children: [
                {
                    path: "",
                    name: "lots",
                    component: nftAuctionLots,
                    meta: {
                        title: "Auction - Lots"
                    },
                },

                {
                    path: ":id",
                    name: "nft",
                    component: nftAuctionLot,
                    meta: {
                        title: "Auction - Lot"
                    },
                },
            ],
        },

        {
            path: "/:pathMatch(.*)*",
            name: "404",
            component: nft404,
            meta: {
                title: "Historical Collection - 404"
            },
        },
    ],
    scrollBehavior(to) {
        if (to.hash) {
            return { el: to.hash, left: 0}
        } else {
            return { x: 0, y: 0 }
        }
    }
})
