//The purpose of this module is to represent one piece of pottery with HTML

import { deleteGoodPottery } from "./potteryProvider.js"

const eventHub = document.querySelector("#container")

export const Pottery = (potteryObject) => {

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === `sellButton--${potteryObject.id}`) {
            deleteGoodPottery(potteryObject.id)
            alert(`You sold a ${potteryObject.shape} for $${potteryObject.price}`)
        }
    })
    
    return `
    <h1>Pottery piece #${potteryObject.id}</h1>
    <div>Shape: ${potteryObject.shape}</div>
    <div>Weight: ${potteryObject.weight}</div>
    <div>Height: ${potteryObject.height}</div>
    <div>Price: ${potteryObject.price}</div>
    <button id="sellButton--${potteryObject.id}">Sell</button>
    `
}

