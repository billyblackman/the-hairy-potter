//The purpose of this module is to provide access to pieces of pottery in the database and to add more pieces to the database

let pottery = []

export const usePottery = () => pottery.slice()

export const getPottery = () => fetch("http://localhost:8088/pottery")
    .then(response => response.json())
    .then(data => pottery = data)
    
//Function to save piece of pottery to database

export const savePottery = (pottery) => {
    return fetch("http://localhost:8088/pottery", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(pottery)
    })
        .then(getPottery)
        // .then(dispatchStateChangeEvent)
}