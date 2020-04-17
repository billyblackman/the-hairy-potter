//The purpose of this module is to represent one piece of pottery with HTML

export const Pottery = (potteryObject) => {
    return `
        <h1>Pottery piece #${potteryObject.id}</h1>
        <div>Shape: ${potteryObject.shape}</div>
        <div>Weight: ${potteryObject.weight}</div>
        <div>Height: ${potteryObject.height}</div>
    `
}