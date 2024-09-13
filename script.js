function toggleTheme(){
    let body = document.getElementsByTagName('body')[0];
    if(body.classList.contains('dark-theme')){
        body.classList.remove('dark-theme')
    }else{
        body.classList.add('dark-theme')
    }
}

let movesX = [];
let movesO = [];
let currentPlayer = 'X'
let numberOfMovies = 0;
let winCombinations = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];

const restartGame = () => { movesO = []; movesX = []; numberOfMovies = 0;  for( let e of box) { e.textContent = ''}}
const theEndOld = () =>{ alert('fim do jogo'); restartGame(); };

function championsShow(moves, player){
    moves.forEach(element => {
        let el = document.getElementsByClassName(`box-${element}`)[0]
        el.classList.add("el-champion")
    });
}

function checkForChampion(m, player) {
    let moves = m.map(Number);
   
    if (!(moves.length >= 3)) return;
    for(let el of winCombinations){
        const isAchampion = moves.every(element => el.includes(element));
        if(isAchampion){
            championsShow(moves, player)
            break;
        }
    }
}

const box = document.getElementsByClassName('box')
for (let e of box) {
    e.addEventListener('click', () => pushXorO(e))
}

function pushXorO(e){
    numberOfMovies++;
    if(numberOfMovies > 9 ){return}
    let move = e.getAttribute('index');

    if(currentPlayer == "X"){
        e.textContent = "O"; currentPlayer = "O";
        movesO.push(move);
        checkForChampion(movesO, "O");
    } 
    else{
        e.textContent = 'X'; currentPlayer = "X";
        movesX.push(move);
        checkForChampion(movesX, "X");
    }
    if(numberOfMovies == 9){
        setTimeout( theEndOld, 400 );
    }
}

// Impedir que continue adicionado jogadas depois de ganhar, resolver bug que se ganhar no ultimo elemento n vale 