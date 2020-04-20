import { useGoodPottery } from "./potteryProvider.js"
import { Pottery } from "./Pottery.js"

const contentTarget = document.querySelector("#potteryListContainer")
const eventHub = document.querySelector("#container")


const render = () => {
    
    const allTheGoodPottery = useGoodPottery()
    
    contentTarget.innerHTML = allTheGoodPottery.map( potteryObject => {
        
        return Pottery(potteryObject)
        
    })
    .join(`<br>`)
}

export const PotteryList = () => {
    render()
}

eventHub.addEventListener("databaseStateChanged", event => {
    PotteryList()
})