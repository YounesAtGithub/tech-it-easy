import { inventory } from "../constants/inventory.js";

let amountSold = 0

    for (let i = 0; i < inventory.length; i++) {
        amountSold = amountSold + inventory[i].sold
        console.log(amountSold);
     }
