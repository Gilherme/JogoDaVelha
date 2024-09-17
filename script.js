function toggleTheme() {
    let body = document.getElementsByTagName('body')[0];
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme')
    } else {
        body.classList.add('dark-theme')
    }
}

let movesX = [];
let movesO = [];
let selectedElements = [];
let winnerFound = false;
let currentPlayer = 'O'
let numberOfMovies = 0;
let winCombinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

const restartGame = () => {
    movesO = [];
    movesX = [];
    numberOfMovies = 0;
    selectedElements = [];
    winnerFound = false;
    for (let e of box) {
        e.classList.remove('el-champion')
        e.textContent = ''
    }
}
const theEndOld = () => {
    restartGame();
};

function championsShow(moves, player) {
    moves.forEach(element => {
        let el = document.getElementsByClassName(`box-${element}`)[0]
        el.classList.add("el-champion")
    });
    setTimeout(() => restartGame(), 3000)
}

function checkForChampion(moves, player) {

    if (!(moves.length >= 3)) return;
    for (let el of winCombinations) {
        const isAchampion = el.every(element => moves.includes(element));
        if (isAchampion) {
            const winningMoves = moves.filter(move => el.includes(move));
            winnerFound = true;
            championsShow(winningMoves, player)
            break;
        }
    }
}

function addClassPlayerActive(p) {
    const x = document.getElementsByClassName('X')[0];
    const o = document.getElementsByClassName('O')[0];

    if(p === "O"){
        o.classList.remove('btn-player-active')
        x.classList.add('btn-player-active')
    }else if (p === "X") {
        x.classList.remove('btn-player-active')
        o.classList.add('btn-player-active')
    }
}

function pushXorO(e) {
    let move = parseInt(e.getAttribute('index'));


    if (numberOfMovies > 9 || winnerFound) { console.log('entrei 1'); return; }
    if (selectedElements.includes(move)) { console.log('entrei 2'); return; }
    else { selectedElements.push(move); numberOfMovies++; }

    if (currentPlayer == "O") {
        addClassPlayerActive("X")
        e.textContent = 'X'; currentPlayer = "X";
        movesX.push(move);
        checkForChampion(movesX, "X");
    }
    else if (currentPlayer == "X") {
        addClassPlayerActive("O")
        e.textContent = "O"; currentPlayer = "O";
        movesO.push(move);
        checkForChampion(movesO, "O");
    }
    if (numberOfMovies == 9) {
        setTimeout(theEndOld, 400);
    }
}

const box = document.getElementsByClassName('box')
for (let e of box) {
    e.addEventListener('click', () => pushXorO(e))
}

const btnPlayer = document.getElementsByClassName('btn-player');
for (let e of btnPlayer) {
    e.addEventListener('click', () => selectPlayer(e))
}

function selectPlayer(e){
    
    if (numberOfMovies === 0){
        const player = e.textContent;
        currentPlayer = player === "O" ? "X" : "O"
        
        const btnPlayer = [...document.getElementsByClassName('btn-player')]
        btnPlayer.forEach(e => e.classList.remove('btn-player-active'))

        e.classList.add('btn-player-active')
    }
}
