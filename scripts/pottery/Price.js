/**
 * The purpose of this module is to define a function
 * which will determine the price of a piece of 
 * pottery based on its weight
 * */

export const Price = (potteryPiece) => {
    if (potteryPiece.weight > 3) {
        potteryPiece.price = 40
    } else potteryPiece.price = 20
}