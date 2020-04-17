
export const Kiln = (potteryPiece, heat) => {
    if (heat > 2200) {
        potteryPiece.cracked = true
    } else {
        potteryPiece.cracked = false
    }
}