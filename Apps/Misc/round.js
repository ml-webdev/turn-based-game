// We are trying to establish who goes first in each round: whoGoesFirst()
const whoGoesFirst(){
    // If the round is over (faint == true), display win state
    var faint = () => {
        console.log(rightCurrentHealth)
        if (rightCurrentHealth == 0 || leftCurrentHealth == 0) {
            return true
        } else {
            return false
        }
    }
    // Win is determined by pokemon fainting
    // if faint is true
    if (faint() == true) {
        // display win state
        winState()
        // win state has three CSS changes: blackout for the loser, music for the winner, congratulations screen for the winner
        // Fade to white, which is the homescreen
        returnHome()
        // Pokemon game, click to play (click pokeball)
        // Choose a pokemon: Blastoise, Charizard, Venasaur

    }
    // If the round is not over,
    else {
        // firstPkmMove is determined by speedCheck()
        var moveQueue = speedCheck(){
            // compares pkmLeft.stats.speed and pkmRight.stats.speed
            if (pkmLeft.stats.speed > pkmRight.stats.speed){
            // returns queue of first pokemon move, second pokemon move
            return [leftMove, pkmLeft, rightMove, pkmRight]
        }
                    else if (pkmLeft.stats.speed < pkmRight.stats.speed) {
            // returns queue of first pokemon move, second pokemon move
            return [rightMove, pkmRight, leftMove, pkmLeft]
        }
        // firstPkm attacks
        checkAccuracy(moveQueue[0])
        // firstPokemonMove = arr[0], secondPokemonMove = arr[2]
        if (moveQueue[1] == pkmLeft) {
            updateHealthRight(checkDamage(moveQueue[1], moveQueue[0], moveQueue[3]))
        } else if (moveQueue[1] == pkmRight) {
            updateHealthLeft(checkDamage(moveQueue[1], moveQueue[0], moveQueue[3]))
        }
    }
    // secondPkm attacks
    checkAccuracy(moveQueue[2])
    // firstPokemonMove = arr[0], secondPokemonMove = arr[2]
    if (moveQueue[1] == pkmLeft) {
        updateHealthRight(checkDamage(moveQueue[1], moveQueue[0], moveQueue[3]))
    } else if (moveQueue[1] == pkmRight) {
        updateHealthLeft(checkDamage(moveQueue[1], moveQueue[0], moveQueue[3]))
    }
    // recurse
    whoGoesFirst()
}

}
// Side note, need to edit the message system
    // "Choose a move", on :hover display the info for the move, choosing a move