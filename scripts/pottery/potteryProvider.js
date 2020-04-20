/**
 * The purpose of this module is to: 
 * Provide access to pieces of pottery in the database and to 
 * Add more pieces to the database
 */

//

//Function to get good pottery from database

const eventHub = document.querySelector("#container")

let goodPottery = []

export const useGoodPottery = () => goodPottery.slice()

export const getGoodPottery = () => fetch("http://localhost:8088/goodPottery")
    .then(response => response.json())
    .then(data => goodPottery = data)
      
//Function to get cracked pottery from database

let crackedPottery = []

export const useCrackedPottery = () => crackedPottery.slice()
    
export const getCrackedPottery = () => fetch("http://localhost:8088/crackedPottery")
    .then(response => response.json())
    .then(data => crackedPottery = data)

//Function to get sales from database

let sales = []

export const useSales = () => sales.slice()
    
export const getSales = () => fetch("http://localhost:8088/sales")
    .then(response => response.json())
    .then(data => sales = data)

//Function to save piece of good pottery to database

export const saveGoodPottery = (pottery) => {
    return fetch("http://localhost:8088/goodPottery", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(pottery)
    })
        .then(getGoodPottery)
        .then(dispatchStateChangeEvent)
}

//Function to save piece of cracked pottery to database

export const saveCrackedPottery = (pottery) => {
    return fetch("http://localhost:8088/crackedPottery", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(pottery)
    })
        .then(getCrackedPottery)
        .then(dispatchStateChangeEvent)
}

//Function to delete a piece of pottery from the collection of good pottery

export const deleteGoodPottery = (potteryId) => {
    return fetch(`http://localhost:8088/goodPottery/${potteryId}`, {
        method: "DELETE"
    })
        .then(getGoodPottery)
        .then(dispatchStateChangeEvent)
}

//Function to delete a piece of pottery from the collection of cracked pottery

export const deleteCrackedPottery = (potteryId) => {
    return fetch(`http://localhost:8088/crackedPottery/${potteryId}`, {
        method: "DELETE"
    })
        .then(getCrackedPottery)
        .then(dispatchStateChangeEvent)
}

//Function to add pottery sales to database

export const sellPottery = (pottery) => {
    return fetch(`http://localhost:8088/sales`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(pottery)
    })
        .then(getSales)
        .then(dispatchStateChangeEvent)
}

//Informs interested modules when the database has been updated

const dispatchStateChangeEvent = () => {

    const databaseStateChangedEvent = new CustomEvent("databaseStateChanged")

    eventHub.dispatchEvent(databaseStateChangedEvent)
}