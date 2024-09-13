let winCombinations = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];

let a = [1, 0, 1]
let b = [1, 2, 3]
let c = [5, 1, 8]
let d = [12, 23]
let e = [2,5,8]

const championFound = () => console.log('Gain!!!')

for (let el of winCombinations) {
    const isAchampion = a.every(element => el.includes(element));
    if (isAchampion) {
        championFound();  // Executa função
        break;  // Interrompe o laço
    }
}