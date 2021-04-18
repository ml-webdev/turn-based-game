// If (pkmA.health == 0), var loser = pkmA, else if (pkmB.health == 0), var loser = pkmB
    // if(loser){
    // battleLost() 
        // change healthbar, sprite, and moves to black
        // change message to "Your pokemon fainted. You lost the battle!"
    // }
    // if(!loser){
        // change message to "You won the battle!"
    // endGame()
// Else playRound()
    // We need to establish which turn it is: first or second
    // We need to wait until both players make a selection
    // We need to check who goes first and who goes second
        // if pkmA.stats.speed > pkmB.stats.speed pkmA goes first
            // else if pkmB.stats.speed > pkmA.stats.speed pkmB goes first
                // else if pkmA.stats.speed == pkmB.stats.speed, randomize number for A and B, choose higher number



import * as Battle from '/Apps/battle.js'

// VARIABLES
var movesLeft = document.getElementById('moves-left')
var movesRight = document.getElementById('moves-right')
var moves = document.querySelector('.move')
var moveLeft1 = document.getElementById('pokemon-left-move1')
var moveLeft2 = document.getElementById('pokemon-left-move2')
var moveLeft3 = document.getElementById('pokemon-left-move3')
var moveLeft4 = document.getElementById('pokemon-left-move4')
var moveRight1 = document.getElementById('pokemon-right-move1')
var moveRight2 = document.getElementById('pokemon-right-move2')
var moveRight3 = document.getElementById('pokemon-right-move3')
var moveRight4 = document.getElementById('pokemon-right-move4')


// FUNCTIONS
const userLeftPkm = () => {
    let pkmLeft
    let leftNumChoice = prompt("Player 1: Choose Blastoise(1), Charizard(2), or Venasaur(3)")
    if(leftNumChoice > 3 || leftNumChoice < 1){
        alert('You must choose either 1, 2, or 3')
        userLeftPkm()
    } else if (leftNumChoice == 1){
        pkmLeft = new Battle.Blastoise('Blastoise', 100, 'Male')
        // console.log(pkmLeft.name)
    } else if (leftNumChoice == 2){
        pkmLeft = new Battle.Charizard('Charizard', 100, 'Male')
        // console.log(pkmLeft.type)
    } else if (leftNumChoice == 3){
        pkmLeft = new Battle.Venasaur('Venasaur', 100, 'Female')
        // console.log(pkmLeft.moves)
    }

}
userLeftPkm()


const userRightPkm = () => prompt("Player 2: Choose Blastoise(1), Charizard(2), or Venasaur(3)")


const populateMovesLeft = (pkmMovelist) =>{
    moveLeft1.innerHTML = pkmMovelist[0][0]
    moveLeft2.innerHTML = pkmMovelist[1][0]
    moveLeft3.innerHTML = pkmMovelist[2][0]
    moveLeft4.innerHTML = pkmMovelist[3][0]
}
const populateMovesRight = (pkmMovelist) =>{
    moveLeft1.innerHTML = pkmMovelist[0][0]
    moveLeft2.innerHTML = pkmMovelist[1][0]
    moveLeft3.innerHTML = pkmMovelist[2][0]
    moveLeft4.innerHTML = pkmMovelist[3][0]
}




// EVENT LISTENERS
moveLeft1.addEventListener('click', ()=>{
    console.log(moveLeft1)
})
moveLeft2.addEventListener('click', ()=>{
    console.log(moveLeft2)
})
moveLeft3.addEventListener('click', ()=>{
    console.log(moveLeft3)
})
moveLeft4.addEventListener('click', ()=>{
    console.log(moveLeft4)
})
moveRight1.addEventListener('click', ()=>{
    console.log(moveRight1)
})
moveRight2.addEventListener('click', ()=>{
    console.log(moveRight2)
})
moveRight3.addEventListener('click', ()=>{
    console.log(moveRight3)
})
moveRight4.addEventListener('click', ()=>{
    console.log(moveRight4)
})


// console.log(moves)
// console.log(movesLeft)
// console.log(movesRight)
