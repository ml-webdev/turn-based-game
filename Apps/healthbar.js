import * as Battle from '/Apps/battle.js'
import * as Moves from '/Apps/moves.js'
import * as App from '/Apps/app.js'


// console.log(App.newGame)

export var playerLeftHealth = document.getElementById("healthbar-left-hp").style.width
// console.log(playerLeftHealth)
export var playerRightHealth = document.getElementById("healthbar-right-hp").style.width
// console.log(playerRightHealth)


// Moves.pkmLeft
// Moves.pkmRight
// health starts out at 100%, which is the total hp of the pokemon
    // updateHealthLeft function
    export const updateHealthLeft = () =>{
        // var leftCurrentHealth = 0
        // // if (App.newGame == true){
        // //     // player1 healthbar = pkmLeft.health
        // //     playerLeftHealth = Moves.pkmLeft.health
        // //     console.log(playerLeftHealth)

        // // }
        // // else {
        //     // console.log("Moves.pkmLeft.health: " + Moves.pkmLeft)
        //     leftCurrentHealth = Moves.pkmLeft.health - Battle.damage
        //     playerLeftHealth = leftCurrentHealth / Moves.pkmLeft.health
        // console.log("Left health is updated.")
        }

    // } 
    export const updateHealthRight = () => {
        // var rightCurrentHealth = 0
        // // if (App.newGame == true){
        // //     // player1 healthbar = pkmLeft.health
        // //     playerRightHealth = Moves.pkmRight.health
            
        // // }
        // // else {
        //     // rightCurrentHealth = Moves.pkmRight.health - Battle.damage
        //     // playerRightHealth = rightCurrentHealth / Moves.pkmRight.health
        //     console.log(Battle.damage)
        // console.log("Right health is updated.")

        }
        
    // } 
    // export var updateLeft = updateHealthLeft()
    // export var updateRight = updateHealthRight()
    // updateHealthRight function
        // if (newGame == true)
            // player2 healthbar.value = pkmRight.health
        // else {
            // rightCurrentHealth = pkmRight.health - damage
            // player1 healthbar.value = rightCurrentHealth / pkmRight.health
        // }

//

// if move misses, end turn
    // else if move hits toggle opacity for defending pokemon
// health subtracts number returned from attack function
    // health -= attack()
// keyframe transition for health bar
// if healthbar is > 50%, green
// if healthbar is <= 50% && > 10%, yellow
// if healthbar is <= 10% && > 0%, red
// if health is = 0, pokemon faints