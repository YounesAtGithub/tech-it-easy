import { inventory } from "../constants/inventory.js"

//Opdracht 1c: Hoeveel tv's heeft Tech It Easy in totaal ingekocht? Schrijf een helperfunctie die dit berekent. Log de uitkomst in de console.

function calculateAmountBought() {
    let amountBought = 0
    for (let i = 0; i < inventory.length; i++) {
        amountBought = amountBought + inventory[i].originalStock
   }
     return amountBought

    }

    export default calculateAmountBought