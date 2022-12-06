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
const userAge = prompt("Quanti anni hai", 35);

//Calcolo il prezzo base
let price = Kms * 0.21;

//Verifico eventuali sconti
if (userAge >= 65) {
  price = price * 0.6;
} else if (userAge < 18) {
  price = price * 0.8;
}
totalElement.innerText = priceMessage + price.toFixed(2) + "€";
