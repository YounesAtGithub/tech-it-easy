import { inventory } from "../constants/inventory.js";

//Opdracht 1a: Hoeveel tv's zijn er al verkocht? Schrijf een helperfunctie die dit berekent. Log de uitkomst in de console.


function calculateAmountSold() {
    let amountSold = 0

    for (let i = 0; i < inventory.length; i++) {
        amountSold = amountSold + inventory[i].sold
    }
     return amountSold

    }


    export default calculateAmountSold