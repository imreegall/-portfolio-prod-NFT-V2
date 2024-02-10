export default async function shareCurrentPage() {
    await navigator.clipboard.writeText(window.location.href)

    if (navigator.share) {
        await navigator.share({
            title: 'Historical Collection',
            text: 'Historical Collection NFT',
            url: window.location.href
        })
    }
}