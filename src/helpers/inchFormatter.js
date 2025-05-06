import { bestSellingTv } from "../constants/inventory.js"

function showInchesAndCms() {
    //returns in the following format: [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc.
       let tvInchSizeFormatter = ''
    for (let i = 0; i < bestSellingTv.availableSizes.length; i++) {
        let tvInchToCM = bestSellingTv.availableSizes[i] * 2.54
        tvInchSizeFormatter = tvInchSizeFormatter + bestSellingTv.availableSizes[i] +  ' inch ' + '(' + Math.round(tvInchToCM) + 'cm' + ')' + ' | ' 
    }
    return tvInchSizeFormatter
}

//onderstaande kan met een zelf te bedenken variable aangeroepen worden in app.jsx (waar het nu showMeTheResult heet)
let  showMeTheResult = showInchesAndCms().slice(0, -3)

export default showInchesAndCms