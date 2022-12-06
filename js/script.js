console.log("JS OK");

/*
- 1 chiedere all'utente il numero di chilometri che vuole percorrere
- 2 chiedere l'eta 
- 3 calcolare il prezzo del viaggio
- 4 applica il 20% di sconto se minorenne 1l 40% sugli over 65
*/

// Recupero l'elemento in pagina
const totalElement = document.getElementById("total");
let priceMessage = "Il totale del tuo biglietto e";
let discountMessage = "Hai ricevuto uno sconto del";

//Domanda 1-2
const userKilometers = prompt("Quanti kilometri vuoi percorrere?", 50);
const userAge = prompt("Quanti anni hai?");

//Calcolo il prezzo
let price = Kms * 0.21;

//Verifico eventuali sconti

//applica il 20% di sconto se minorenne 1l 40% sugli over 65
if (userAge < 18) {
  //
} else {
  //
}
