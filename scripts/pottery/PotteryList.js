import { useGoodPottery } from "./potteryProvider.js"
import { Pottery } from "./Pottery.js"

const contentTarget = document.querySelector("#potteryListContainer")

export const PotteryList = () => {

    const render = () => {
        
        const allTheGoodPottery = useGoodPottery()
    
        contentTarget.innerHTML = allTheGoodPottery.map( potteryObject => {
            
            return Pottery(potteryObject)

        })
        .join(`<br>`)
    }
    render()
}