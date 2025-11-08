/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ['Anna', 'Luca', 'Marco', 'Adele', 'Laura', 'Alessandra'];

const startingLetter = 'A';
const filteredNames = filterByInitial(names, startingLetter);

// Dichiara la funzione qui.
function filterByInitial(words, letter) {
  return words.filter((word) => word.toLowerCase().startsWith(letter.toLowerCase()));
}

// Invoca la funzione qui e stampa il risultato in console

console.log(filteredNames);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

//Stampa il risultato in pagina
const resultElement = document.getElementById('result');
resultElement.textContent = `Nomi filtrati per la lettera '${startingLetter}': ${filteredNames.join(', ')}`;
