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


var movesLeft = document.getElementById('moves-left')
var movesRight = document.getElementById('moves-right')
console.log(movesLeft)
console.log(movesRight)