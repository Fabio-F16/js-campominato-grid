console.log('js okk')

/* creare una griglia di gioco quadrata, 
in cui ogni cella contiene un numero tra quelli compresi in un range compreso tra 1 e 100.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
Tre difficoltà:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49 
*/

// preparazione all'esecuzione del programma
const totalCells = 100; 

// recupero la griglia con l'id
const square = document.getElementById('square');

// creo totalCells div all'interno della griglia
for(let i = 0; i < totalCells; i++){

    // creo l'elemento
    const cell = document.createElement('div');

    // aggiungo eventuali classi css per dargli uno stile
    cell.className('cell');

    // associamo il numero alla cella
    cell.innertext = i + 1;

    // aggiungo l'elemento creato alla griglia
    square.appendChild(cell);

    // aggiungo un listener all'elemento 
    cell.addEventListener('click', () => cell.classList.toggle('bg-color-aqua'));



}