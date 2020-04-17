/**
 * The purpose of this module is to define a function
 * which will determine whether a piece 
 * of pottery is fired successfully or cracked
 * */

export const Kiln = (potteryPiece, heat) => {
    if (heat > 2200) {
        potteryPiece.cracked = true
    } else {
        potteryPiece.cracked = false
    }
}