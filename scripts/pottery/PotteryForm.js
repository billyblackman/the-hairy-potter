/**
 * The purpose of this module is to represent the pottery creation form
 * and to handle the event listeners involved with pottery creation
 */
import { savePottery } from "./potteryProvider.js"

 


const contentTarget = document.querySelector("#potteryFormContainer")

export const PotteryForm = () => {
    contentTarget.innerHTML = `
    <h1>New Pottery Piece</h1>
    <form class="form" action="">
        <fieldset>
            <label for="potteryShape">Shape</label>
            <input type="text" name="potteryShape" id="potteryShape">
        </fieldset>
    </form>
    <form class="form" action="">
        <fieldset>
            <label for="potteryWeight">Weight</label>
            <input type="number" name="potteryWeight" id="potteryWeight">
        </fieldset>
    </form>
    <form class="form" action="">
        <fieldset>
            <label for="potteryHeight">Height</label>
            <input type="number" name="potteryHeight" id="potteryHeight">
        </fieldset>
    </form>
    <button type="submit" id="potterySaveButton">Save piece</button>
    `
}

//Click event to save pottery entered into form

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "potterySaveButton") {

        const shape = document.querySelector("#potteryShape").value
        const weight = document.querySelector("#potteryWeight").value
        const height = document.querySelector("#potteryHeight").value

//Creating object with form inputs

        const potteryObject = {
            shape: shape,
            weight: weight,
            height: height
        }

//If statement to make sure all fields are complete

        if (shape !== "" && weight !== "" && height !== "") {
            savePottery(potteryObject)
        } else alert("Please complete all fields")
    }
})