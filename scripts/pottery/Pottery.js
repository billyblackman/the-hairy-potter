//The purpose of this module is to represent one piece of pottery with HTML

const eventHub = document.querySelector("#container")

export const Pottery = (potteryObject) => {
    return `
        <h1>Pottery piece #${potteryObject.id}</h1>
        <div>Shape: ${potteryObject.shape}</div>
        <div>Weight: ${potteryObject.weight}</div>
        <div>Height: ${potteryObject.height}</div>
        <button id="sellButton--${potteryObject.id}">Sell</button>
    `
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith === "sellButton--") {
        window.alert(`You sold a ${potteryObject.shape} for ${potteryObject.price} dollars!`)
    }
})