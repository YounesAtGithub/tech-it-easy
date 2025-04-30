import calculateAmountBought from "./totalBoughtTVs.js";
import calculateAmountSold from "./calculateSoldTVs.js";

function calculateAmountToSell(stock, sold) {
    return stock - sold
}


export default calculateAmountToSell