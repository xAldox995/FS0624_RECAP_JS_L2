/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n1 = 7;
let n2 = 1;
if (n1 > n2) {
  console.log(n1 + " è il numero maggiore")
} else if (n1 === n2) {
  console.log("i due numeri sono uguali")
} else {
  console.log(n1 + " è il numero minore")
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (n1 !== 5) {
  console.log("not equal");
} else {
  console.log("numero valido")
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (n1 % 5 === 0) {
  console.log("divisibile per 5")
} else {
  console.log("non divisibile per 5")
}



/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (n1 === 8 || n2 === 8) {
  console.log("uno dei due numeri e' 8")
} else if (n1 + n2 === 8) {
  console.log("la somma  dei due numeri e' 8")
}
else if (n1 - n2 === 8 || n2 - n1 === 8) {
  console.log("la differenza dei due numeri e' 8")
}
else {
  console.log("nessuno dei due numeri e' 8 o si può  averlo come risultato")
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 100;
let spedizione = 10;
if (totalShoppingCart >= 50) {
  console.log("Il tuo carrello è di: " + totalShoppingCart + " spedizione gratuita")
} else {
  console.log("Il tuo carrello è di: " + totalShoppingCart + " + spedizione = " + (totalShoppingCart + spedizione))
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let sconto = (totalShoppingCart * 20) / 100;
let blackFridayCart = totalShoppingCart - sconto;

if (blackFridayCart >= 50) {
  console.log("Il tuo carrello è di: " + blackFridayCart + " spedizione gratuita")
} else {
  console.log("Il tuo carrello è di: " + blackFridayCart + " + spedizione = " + (blackFridayCart + spedizione))
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 3;
let y = 1;
let z = 2;
if (x > y && x > z) {
  if (y > z) {
    console.log(x, y, z)
  } else {
    console.log(x, z, y)
  }
} else if (y > x && y > z) {
  if (x > z) {
    console.log(y, x, z)
  } else {
    console.log(y, z, x)
  }
} else if (z > x && z > y) {
  if (x > y) {
    console.log(z, x, y)
  } else {
    console.log(z, y, x)
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let variabile = 5
console.log(typeof variabile)
if (typeof variabile === "number") {
  console.log("la variabile e' un numero")
} else {
  console.log("la variabile non e' un numero")
}
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num = 5;
if (num % 2 === 0) {
  console.log("il numero e' pari")
} else {
  console.log("il numero e' dispari")
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7
if (val < 10 && val >= 5) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}



/* SCRIVI QUI LA TUA RISPOSTA */
me.city="Toronto"
console.log(me)
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName
console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop()
console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
let array = [];
array.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(array)
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let newArray = array.slice(0,9, -1)
newArray.push(100)
console.log(newArray)
