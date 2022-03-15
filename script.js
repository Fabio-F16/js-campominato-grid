// console.log('js okk')

/* creare una griglia di gioco quadrata, 
in cui ogni cella contiene un numero tra quelli compresi in un range compreso tra 1 e 100
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.*/





const square = document.getElementById('square');

const columns = 10;
const row = 10;

const totalCells = columns * row;


for(let i = 1; i < totalCells + 1; i++){

const cell = createCell();
const number = i
cell.innerText = number;
square.appendChild(cell);

cell.addEventListener('click', function() {

    cell.classList.toggle('bg-color-aqua');

})
}




// funzioni

// genero un numero random
function generateNumber(min, max){
    const range = (max - min) + 1;
    const numeroRandom = Math.floor(Math.random()*range + min);
    return numeroRandom;
}
// fine genero un numero random

// creo una cella nel DOM
function createCell(){
    const cell = document.createElement('div');
    cell.classList.add('cell');
    return cell;
}
// fine creo una cella nel DOM