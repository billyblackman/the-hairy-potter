//The purpose of this module is to provide access to pieces of pottery in the database and to add more pieces to the database

let goodPottery = []

export const useGoodPottery = () => goodPottery.slice()

export const getGoodPottery = () => fetch("http://localhost:8088/goodPottery")
    .then(response => response.json())
    .then(data => goodPottery = data)
      

let crackedPottery = []

export const useCrackedPottery = () => crackedPottery.slice()
    
export const getCrackedPottery = () => fetch("http://localhost:8088/crackedPottery")
    .then(response => response.json())
    .then(data => crackedPottery = data)

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
}