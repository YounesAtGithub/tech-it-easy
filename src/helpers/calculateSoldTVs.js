import { inventory } from "../constants/inventory.js";

//Opdracht 1a: Hoeveel tv's zijn er al verkocht? Schrijf een helperfunctie die dit berekent. Log de uitkomst in de console.


function calculateAmountSold() {
    //deze variable moet bestaan binnen de functie. Als de loop namelijk opnieuw begint, dan begint de teller weer bij 0. Als de variable buiten de functie staat, dan houdt die de waarde, ook als de loop klaar is. Als de loop dan weer opnieuw draait, dan begint 'ie niet bij 0.
    let amountSold = 0

    for (let i = 0; i < inventory.length; i++) {
        amountSold = amountSold + inventory[i].sold
    //Zodra een return wordt uitgevoerd, stopt de hele functie direct, dus de loop doet maar één iteratie. Resultaat = 2 
    }
    // nu return je pas als de loop helemaal klaar is met itereren. Resultaat: 33 (zoals 't hoort)
     return amountSold

    }

    //en dit is de functieaanroep die straks nodig is in app.jsx om in de browser te tonen hoeveel tv's er verkocht zijn:

    //dit niet, want is slecht ter verificatie van de bovenstaande code:

    export default calculateAmountSold