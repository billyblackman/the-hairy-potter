//The purpose of this module is to represent one piece of pottery with HTML

const eventHub = document.querySelector("#container")

export const Pottery = (potteryObject) => {

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === `sellButton--${potteryObject.id}`) {
            alert(`You sold a ${potteryObject.shape} piece of pottery for ${potteryObject.price} dollars!`)
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
