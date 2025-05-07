import './App.css';
import './constants/inventory.js'
import calculateAmountSold from './helpers/calculateSoldTVs.js'
import calculateAmountBought from './helpers/totalBoughtTVs.js';
import calculateAmountToSell from './helpers/calculateAmountToSell.js';

import formatBrandTypeName from './helpers/brandTypeNameFormatter.js';
import showInchesAndCms from './helpers/inchFormatter.js';
import priceToFormat from './helpers/priceFormatter.js';
import { bestSellingTv } from './constants/inventory.js';


function App() {
  
  function meestVerkocht() {
    console.log('Meest verkocht eerst')
  }

  function goedkoopsteEerst() {
    console.log('Goedkoopste eerst')
  }

  function meestGeschikt() {
    console.log('Meest geschikte voor...')
  }



  return (
    <>
      <h1>ALLE TV's</h1>

      <button type="button" onClick={ meestVerkocht }>Meest verkochte eerst</button>       
      <button type="button" onClick={ goedkoopsteEerst }>Goedkoopste eerst</button>      
      <button type="button" onClick={ meestGeschikt }>Meest geschikt voor eerst</button>
    
      
        <h2>AMOUNT SOLD: { calculateAmountSold() }</h2>
        <h2>AMOUNT BOUGHT: { calculateAmountBought()}</h2>
        <h2>AMOUNT TO SELL: { calculateAmountToSell(calculateAmountBought(), calculateAmountSold()) }</h2>
          
          <h3>{ formatBrandTypeName() }</h3>
          <h3>{priceToFormat(bestSellingTv.price)}</h3>
          
            <h4>{showInchesAndCms().slice(0, -3)}</h4>
      
      







    </>
  )
  
}

export default App
