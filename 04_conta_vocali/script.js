/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.
function contaVocali(string) {
  // [aeiou] -> cerca i caratteri a, e, i, o, u
  // g -> ricerca globale (non si ferma alla prima occorrenza)
  // i -> case-insensitive (non distingue tra maiuscole e minuscole)
  return string.match(/[aeiou]/gi).length;
}

// Invoca la funzione qui e stampa il risultato in console
const vocaliContate = contaVocali(word);
console.log(vocaliContate);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)

//Stampa il risultato in pagina
const resultElement = document.getElementById('result');
resultElement.innerText = `Nella parola "${word}" ci sono ${vocaliContate} vocali.`;
