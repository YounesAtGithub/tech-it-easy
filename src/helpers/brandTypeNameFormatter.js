import { bestSellingTv } from "../constants/inventory.js";

function formatBrandTypeName() {
    //retouneert in dit formaat: [merk] [type] - [naam]
     return bestSellingTv.brand + ' ' + bestSellingTv.type + ' - ' +bestSellingTv.name
}

export default formatBrandTypeName