import { bestSellingTv } from "../constants/inventory.js"

function optionsRetriever() {
 let tvOptions = ''
    for (let i = 0; i < bestSellingTv.options.length; i++) {
        tvOptions = tvOptions + '[' + bestSellingTv.options[i].applicable + ']' + ' ' +  bestSellingTv.options[i].name + ' '
   }
     return tvOptions

    }

const showMeTheResult = optionsRetriever()

console.log(showMeTheResult)

export default optionsRetriever