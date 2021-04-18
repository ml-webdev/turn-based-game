import * as Battle from '/Apps/battle.js'

// VARIABLES
export var movesLeft = document.getElementById('moves-left')
export var movesRight = document.getElementById('moves-right')
export var moves = document.querySelector('.move')
export var moveLeft1 = document.getElementById('pokemon-left-move1')
export var moveLeft2 = document.getElementById('pokemon-left-move2')
export var moveLeft3 = document.getElementById('pokemon-left-move3')
export var moveLeft4 = document.getElementById('pokemon-left-move4')
export var moveRight1 = document.getElementById('pokemon-right-move1')
export var moveRight2 = document.getElementById('pokemon-right-move2')
export var moveRight3 = document.getElementById('pokemon-right-move3')
export var moveRight4 = document.getElementById('pokemon-right-move4')


// FUNCTIONS
export const userLeftPkm = () => {
    let leftNumChoice = prompt("Player 1: Choose Blastoise(1), Charizard(2), or Venasaur(3)")
    let gender = prompt("Is your pokemon 'Male' or 'Female'?")
    let name = prompt("What would you like to call your Pokemon?")
    if(leftNumChoice > 3 || leftNumChoice < 1){
        alert('You must choose either 1, 2, or 3')
        userLeftPkm()
    } else if (leftNumChoice == 1){
        pkmLeft = new Battle.Blastoise(`${name}`, 100, `${gender}`)
        // console.log(pkmLeft.nickname)
    } else if (leftNumChoice == 2){
        pkmLeft = new Battle.Charizard(`${name}`, 100, `${gender}`)
        // console.log(pkmLeft.type)
    } else if (leftNumChoice == 3){
        pkmLeft = new Battle.Venasaur(`${name}`, 100, `${gender}`)
        // console.log(pkmLeft.moves)
    }
    return pkmLeft

}
export const userRightPkm = () => {
    let rightNumChoice = prompt("Player 2: Choose Blastoise(1), Charizard(2), or Venasaur(3)")
    let gender = prompt("Is your pokemon 'Male' or 'Female'?")
    let name = prompt("What would you like to call your Pokemon?")
    if(rightNumChoice > 3 || rightNumChoice < 1){
        alert('You must choose either 1, 2, or 3')
        userRightPkm()
    } else if (rightNumChoice == 1){
        pkmRight = new Battle.Blastoise(`${name}`, 100, `${gender}`)
        // console.log(pkmRight.nickname)
    } else if (rightNumChoice == 2){
        pkmRight = new Battle.Charizard(`${name}`, 100, `${gender}`)
        // console.log(pkmRight.type)
    } else if (rightNumChoice == 3){
        pkmRight = new Battle.Venasaur(`${name}`, 100, `${gender}`)
        // console.log(pkmRight.moves)
    }
    return pkmRight

}
export var pkmLeft = userLeftPkm()
export var pkmRight = userRightPkm()
console.log(pkmLeft)
console.log(pkmRight)

export const populateMovesLeft = (pkmMovelist) =>{
    moveLeft1.innerHTML = pkmMovelist[0][0]
    moveLeft2.innerHTML = pkmMovelist[1][0]
    moveLeft3.innerHTML = pkmMovelist[2][0]
    moveLeft4.innerHTML = pkmMovelist[3][0]
}
export const populateMovesRight = (pkmMovelist) =>{
    moveRight1.innerHTML = pkmMovelist[0][0]
    moveRight2.innerHTML = pkmMovelist[1][0]
    moveRight3.innerHTML = pkmMovelist[2][0]
    moveRight4.innerHTML = pkmMovelist[3][0]
}
export var populateMovesLeft(pkmLeft.moves)
export var populateMovesRight(pkmRight.moves)




// EVENT LISTENERS
export var leftMoveOne = moveLeft1.addEventListener('click', ()=>{
    Battle.attack(pkmLeft, pkmLeft.moves[0], pkmRight)
})
export var leftMoveTwo = moveLeft2.addEventListener('click', ()=>{
    Battle.attack(pkmLeft, pkmLeft.moves[1], pkmRight)
})
export var leftMoveThree = moveLeft3.addEventListener('click', ()=>{
    Battle.attack(pkmLeft, pkmLeft.moves[2], pkmRight)
})
export var leftMoveFour = moveLeft4.addEventListener('click', ()=>{
    Battle.attack(pkmLeft, pkmLeft.moves[3], pkmRight)
})


export var rightMoveOne = moveRight1.addEventListener('click', ()=>{
    Battle.attack(pkmRight, pkmRight.moves[0], pkmLeft)
})
export var rightMoveTwo = moveRight2.addEventListener('click', ()=>{
    Battle.attack(pkmRight, pkmRight.moves[1], pkmLeft)
})
export var rightMoveThree = moveRight3.addEventListener('click', ()=>{
    Battle.attack(pkmRight, pkmRight.moves[2], pkmLeft)
})
export var rightMoveFour = moveRight4.addEventListener('click', ()=>{
    Battle.attack(pkmRight, pkmRight.moves[3], pkmLeft)
})


// console.log(moves)
// console.log(movesLeft)
// console.log(movesRight)