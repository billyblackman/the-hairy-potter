/**
 * The purpose of this module is to represent the pottery creation form
 * and to handle the event listeners involved with pottery creation
 */

import { saveGoodPottery, saveCrackedPottery } from "./potteryProvider.js"
import { Kiln } from "./Kiln.js"
import { Price } from "./Price.js"

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

        let potteryObject = {
            shape: shape,
            weight: weight,
            height: height,
        }
//Putting the piece of pottery in the kiln

const heat = Math.floor(Math.random() * 15) +2190;

        Kiln(potteryObject, heat)

/**
 * If statement to make sure all fields are complete
 * If statement to check if the pottery cracked
 * Priced and saved to good pottery collection if not cracked
 * Saved to cracked pottery collection and user alerted if pottery cracked 
 * */


        if (shape !== "" && weight !== "" && height !== "") {

            if (potteryObject.cracked === false) {

                Price(potteryObject)
                saveGoodPottery(potteryObject)

            } else if (potteryObject.cracked === true) {

                alert(`Your ${shape} cracked in the kiln`)
                saveCrackedPottery(potteryObject)
            }
        } else alert("Please complete all fields")
    }
})