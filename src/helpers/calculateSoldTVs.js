import { inventory } from "../constants/inventory.js";


    for (let i = 0; i < inventory.length; i++) {
        const amountSold = inventory[i].sold
        const add = inventory[i].sold + amountSold 
        console.log(add);
     }
