import nfts from "../nfts/nfts.js";

export default [
    // {
    //     id: "25ca24bb-2e10-4630-b6ba-6480392b258b",
    //     nft: nfts.MartinLutherKing,
    //     status: "Completed",
    //     cost: 1600000,
    //     address: "0x6DE4C1Eb559EDf6A18FDAdf9d756585C1dF3074b"
    // },

    // {
    //     id: "22a57078-95da-477d-af6e-08cf5b231925",
    //     nft: nfts.MarkTwain,
    //     status: "Active",
    //     date: new Date("2024-02-13T15:00:00Z")
    // },

    {
        id: "22a57078-95da-477d-af6e-08cf5b231925",
        nft: nfts.MarkTwain,
        status: "Completed",
        isShowStatus: false,
        cost: 20000000
    },

    {
        id: "25ca24bb-2e10-4630-b6ba-6480392b258с",
        nft: nfts.Tolkien,
        status: "Upcoming",
        date: new Date("2024-02-13T15:00:00Z")
    }
]