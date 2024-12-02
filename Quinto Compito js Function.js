/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

function crazySum(num1, num2) {
  if (num1 === num2) {
      return (num1 + num2) * 3;
  } else {
      return num1 + num2;
  }
}
console.log(crazySum(4, 4)); 
console.log(crazySum(3, 5));
console.log(crazySum(7, 7));
console.log(crazySum(5, 9));


/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

function boundary(n) {
    if ((n >= 20 && n <= 100) || n === 400) {
      return true;
    } else {
      return false;
    }
}
console.log(boundary(35));
console.log(boundary(300));
console.log(boundary(450));
  

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString('EPICODE'));
console.log(reverseString('Buongiorno'));
console.log(reverseString('ComeStaiOggi'))
  

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function upperFirst(str) {
    return str
      .split(" ")
      .map(parolla => parolla.charAt(0).toUpperCase() + parolla.slice(1))
      .join(" ");
}
console.log(upperFirst('oggi è una bellissima giornata'));
console.log(upperFirst('vogliamo passeggiare ?'));
  

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom(n) {
    let randomArray = [];
    for (let i = 0; i < n; i++) {
      randomArray.push(Math.floor(Math.random() * 11));
    }
    return randomArray;
}
console.log(giveMeRandom(5));
console.log(giveMeRandom(10));
  

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
    return l1 * l2;
}
console.log(area(4, 8));
console.log(area(12, 5));
console.log(area(6, 87));
  

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff(num) {
    let diff = Math.abs(num - 19);
    return diff > 19 ? diff * 3 : diff;
}
console.log(crazyDiff(5));
console.log(crazyDiff(34));
console.log(crazyDiff(89));
  

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

function codify(str) {
    if (str.startsWith("code")) {
      return str;
    } else {
      return "code" + str;
    }
}
console.log(codify('nonostante'));
console.log(codify('codependenza'));
console.log(codify('nome'));
console.log(codify('codificare'));
  

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

function check3and7(num) {
    if (num % 3 === 0 || num % 7 === 0) {
      return true;
    } else {
      return false;
    }
}
console.log(check3and7(1));
console.log(check3and7(15));
console.log(check3and7(45));
console.log(check3and7(3));
console.log(check3and7(78));
console.log(check3and7(5));
  

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

function cutString(str) {
    return str.slice(1, -1);
}
console.log(cutString('analizza'));
console.log(cutString('Buongiorno Mondo'));
  
