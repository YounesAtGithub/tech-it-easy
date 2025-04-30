import './App.css';
import './constants/inventory.js'
import calculateAmountSold from './helpers/calculateSoldTVs.js'
import calculateAmountBought from './helpers/totalBoughtTVs.js';
import calculateAmountToSell from './helpers/calculateAmountToSell.js';

function App() {



  return (
    <>
    
    <h1>AMOUNT SOLD: { calculateAmountSold() }</h1>
    <h1>AMOUNT BOUGHT: { calculateAmountBought()}</h1>
    <h1>AMOUNT TO SELL: { calculateAmountToSell(calculateAmountBought(), calculateAmountSold())}</h1>






    </>
  )
  
}

export default App
