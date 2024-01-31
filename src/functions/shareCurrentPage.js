export default function shareCurrentPage() {
    navigator.clipboard.writeText(window.location.href)

    if (navigator.share) {
        navigator.share({
            title: 'Historical Collection',
            text: 'Historical Collection NFT',
            url: window.location.href
        })
    }
}