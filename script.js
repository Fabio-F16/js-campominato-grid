// console.log('js okk')

/* creare una griglia di gioco quadrata, 
in cui ogni cella contiene un numero tra quelli compresi in un range compreso tra 1 e 100.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
Tre difficoltà:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49 
*/

const difficoltàUno = document.querySelector('.difficoltàUno');
const difficoltàDue = document.querySelector('.difficoltàDue');
const difficoltàTre = document.querySelector('.difficoltàTre');

const square = document.getElementById('square');

// difficoltà uno
difficoltàUno.addEventListener('click', function() {

    const columns = 10;
    const row = 10;
    const totalCells = columns * row;

    for(let i = 1; i < totalCells + 1; i++){

        const cell = createCell();
        cell.classList.add('cell-10');
        const number = i
        cell.innerText = number;
        square.appendChild(cell);

        cell.addEventListener('click', function() {
            cell.classList.toggle('bg-color-aqua');
        })
    }
})
// fine difficoltà uno


// difficoltà due
difficoltàDue.addEventListener('click', function() {

    const columns = 9;
    const row = 9;
    const totalCells = columns * row;

    for(let i = 1; i < totalCells + 1; i++){

        const cell = createCell();
        cell.classList.add('cell-9');
        const number = i
        cell.innerText = number;
        square.appendChild(cell);

        cell.addEventListener('click', function() {
            cell.classList.toggle('bg-color-aqua');
        })
    }
})
// fine difficoltà due


// difficoltà tre
difficoltàTre.addEventListener('click', function() {

    const columns = 7;
    const row = 7;
    const totalCells = columns * row;

    for(let i = 1; i < totalCells + 1; i++){

        const cell = createCell();
        cell.classList.add('cell-7');
        const number = i
        cell.innerText = number;
        square.appendChild(cell);

        cell.addEventListener('click', function() {
            cell.classList.toggle('bg-color-aqua');
        })
    }
})
// fine difficoltà tre


// funzioni

// genero un numero random (non utilizzata)
function generateNumber(min, max){
    const range = (max - min) + 1;
    const numeroRandom = Math.floor(Math.random()*range + min);
    return numeroRandom;
}
// fine genero un numero random (non utilizzata)

// creo una cella nel DOM
function createCell(){
    const cell = document.createElement('div');
    cell.classList.add('cell');
    return cell;
}
// fine creo una cella nel DOM


