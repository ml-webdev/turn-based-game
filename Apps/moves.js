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



/* Types*/
export var Normal = {
    "name" : "Normal",
    "notEffective" : ['Ghost'],
    "superEffective":  [false],
    "notVeryEffective": ['Rock', 'Steel']
}
export var Fire = {
    "name" : "Fire",
    "notEffective" : [false],
    "superEffective":  ['Bug', 'Grass', 'Ice', 'Steel'],
    "notVeryEffective": ['Dragon', 'Fire', 'Rock', 'Water']
}
export var Fighting = {
    "name" : "Fighting",
    "notEffective" : ['Ghost'],
    "superEffective":  ['Dark', 'Ice', 'Normal', 'Rock', 'Steel'],
    "notVeryEffective": ['Bug', 'Fairy', 'Flying', 'Poison', 'Psychic']
}
export var Water = {
    "name" : "Water",
    "notEffective" : [false],
    "superEffective": ['Fire', 'Ground', 'Rock'],
    "notVeryEffective": ["Water", "Grass", "Dragon"]
}
export var Flying = {
    "name" : "Flying",
    "notEffective" : [false],
    "superEffective":  ['Bug', 'Grass', 'fighting'],
    "notVeryEffective": ['Electric', 'Rock', 'Steel']
}
export var Grass = {
    "name" : "Grass",
    "notEffective" : [false],
    "superEffective": ['Water', 'Rock', 'Ground'],
    "notVeryEffective": ['Fire', 'Grass', 'Poison', 'Flying', 'Bug', 'Dragon', 'Steel']
}
export var Poison = {
    "name" : "Poison",
    "notEffective" : ['Steel'],
    "notVeryEffective": ['Poison', 'Ground', 'Rock', 'Ghost'],
    "superEffective":  ['Fairy', 'Grass'],
}
export var Electric = {
    "name" : "Electric",
    "notEffective" : ['Ground'],
    "superEffective":  ['Flying', 'Water'],
    "notVeryEffective": ['Dragon', 'Electric', 'Grass']
}
export var Ground = {
    "name" : "Ground",
    "notEffective" : ['Flying'],
    "superEffective":  ['Electric', 'Fire', 'Poison', 'Rock', 'Steel'],
    "notVeryEffective": ['Bug', 'Grass']
}
export var Psychic = {
    "name" : "Psychic",
    "notEffective" : ['Dark'],
    "superEffective":  ['fighting', 'Poison'],
    "notVeryEffective": ['Psychic', 'Steel']
}
export var Rock = {
    "name" : "Rock",
    "notEffective" : [false],
    "notVeryEffective": ['Fighting', 'Ground', 'Steel'],
    "superEffective":  ['Bug', 'Fire', 'Flying', 'Ice'],
}
export var Ice = {
    "name" : "Ice",
    "notEffective" : [false],
    "superEffective":  ['Dragon', 'Flying', 'Grass', 'ground'],
    "notVeryEffective": ['Fire', 'Ice', 'Steel', 'Water']
}
export var Bug = {
    "name" : "Bug",
    "notEffective" : [false],
    "superEffective":  ['Grass', 'Psychic', 'Dark'],
    "notVeryEffective": ['Fire', 'Fighting', 'Poison', 'Flying', 'Ghost', 'Steel', 'Fairy']
}
export var Dragon = {
    "name" : "Dragon",
    "notEffective" : ['Fairy'],
    "superEffective":  ['Dragon'],
    "notVeryEffective": ['Steel']
}
export var Ghost = {
    "name" : "Ghost",
    "notEffective" : ['Normal'],
    "superEffective":  ['Ghost', 'Psychic'],
    "notVeryEffective": ['Dark']
}
export var Dark = {
    "name" : "Dark",
    "notEffective" : [false],
    "superEffective":  ['Ghost', 'Psychic'],
    "notVeryEffective": ['Dark', 'Fairy', 'fighting']
}
export var Steel = {
    "name" : "Steel",
    "notEffective" : [false],
    "superEffective":  ['Fairy', 'Ice', 'Rock'],
    "notVeryEffective": ['Electric', 'Fire', 'Steel', 'Water']
}
export var Fairy = {
    "name" : "Fairy",
    "notEffective" : [false],
    "superEffective":  ['Dark', 'Dragon', 'fighting'],
    "notVeryEffective": ['Fire', 'Poison', 'Steel']

}

export var newGame = true

// Classes
export class Pokemon{
    constructor(nickname, level){
        this.nickname = nickname
        this.level = level
    }
}

export class Blastoise extends Pokemon{
    constructor(nickname, level, gender){
        super(nickname, level)
        // pokemon will be an object with level, gender, Pokemon name, image, type
        this.gender = gender
        this.name = 'Blastoise'
        this.type = "Water"
        this.stats = {
            "hp" : 362,
            "attack": 291,
            "defense": 328,
            "spAttack": 295,
            "spDefense": 339,
            "speed": 280
        }
        this.image = new URL('https://www.pngitem.com/pimgs/m/436-4362068_pokemon-blastoise-png-download-pokemon-blastoise-transparent-png.png')
        this.moves = [
            ['Hydro Pump', Water, 110, 0.80, 'special'],
            ['Surf', Water, 90, 1.0, 'special'],
            ['Crunch', Dark, 80, 1.0, 'physical'],
            ['Ice Punch', Ice, 75, 1.0, 'physical']
        ]
    }
}
export class Charizard extends Pokemon{
    constructor(nickname, level, gender){
        super(nickname, level)
        // pokemon will be an object with level, gender, Pokemon name, image, type
        this.level = level
        this.gender = gender
        this.name = 'Charizard'
        this.type = "Fire"
        this.stats = {
            "hp" : 360,
            "attack": 293,
            "defense": 280,
            "spAttack": 348,
            "spDefense": 295,
            "speed": 328
        }
        this.image = new URL('https://image.pngaaa.com/278/1622278-middle.png')
        this.moves = [
            ['Fire Blast', Fire, 110, 0.85, 'special'],
            ['Flamethrower', Fire, 90, 1.0, 'special'],
            ['Slash', Normal, 70, 1.0, 'physical'],
            ['Thunder Punch', Electric, 75, 1.0, 'physical']
        ]
    }
}
export class Venasaur extends Pokemon{
    constructor(nickname, level, gender){
        super(nickname, level)
        this.level = level
        this.gender = gender
        this.name = 'Venasaur'
        this.type = 'Grass'
        this.stats = {
            "hp" : 364,
            "attack": 289,
            "defense": 291,
            "spAttack": 328,
            "spDefense": 328,
            "speed": 284
        }
        this.image = new URL('https://static.wikia.nocookie.net/pokemon-Dark-rising/images/4/42/03_Venusaur-0.png/revision/latest?cb=20180921205847')
        this.moves = [
                ['Power Whip', Grass, 120, 0.85, 'physical'],
                ['Giga Drain', Grass, 75, 1.0, 'special'],
                ['Body Slam', Normal, 85, 1.0, 'physical'],
                ['Bulldoze', Ground, 60, 1.0, 'physical']
            ]
        
    }
}

// Functions
export const randomize = () =>{
    return Math.floor(Math.random() * 100)
}


export const typeCheck = (move, opponent) => {
    var moveType = move[1]
    let doubleDamage
    let halfDamage
    let noDamage

    let superAccumulator = 0
    let notVeryAccumulator = 0
    moveType.superEffective.forEach((item)=>{      
        if (item == opponent.type){
            superAccumulator++
        }
        doubleDamage = Math.pow(2, superAccumulator)
        
    })
    moveType.notVeryEffective.forEach((item)=>{
        if (item == opponent.type){
            notVeryAccumulator++
        }
        halfDamage = Math.pow(0.5, notVeryAccumulator)
    })
    moveType.notEffective.forEach((item)=>{
        noDamage = 1.0
        if (item == opponent.type.name){
            noDamage = 0
        }
    })

    let dmgMultiplier = doubleDamage * halfDamage * noDamage

    if (dmgMultiplier == 0){
        document.getElementById('pokemon-message-right').innerText = `It had no effect!`
        document.getElementById('pokemon-message-left').innerText = `It had no effect!`
        return 0
    } else if (dmgMultiplier > 0 && dmgMultiplier < 0.5){
        document.getElementById('pokemon-message-right').innerText = `It was not very effective.`
        document.getElementById('pokemon-message-left').innerText = `It was not very effective.`
        return 0.25
    } else if (dmgMultiplier < 1){
        document.getElementById('pokemon-message-right').innerText = `It was not very effective!`
        document.getElementById('pokemon-message-left').innerText = `It was not very effective!`
        return 0.5
    } else if (dmgMultiplier == 1){
        return 1
    } else if (dmgMultiplier > 1 && dmgMultiplier < 4){
        document.getElementById('pokemon-message-right').innerText = `It was super effective!`
        document.getElementById('pokemon-message-left').innerText = `It was super effective!`
        return 2
    } else {
        document.getElementById('pokemon-message-right').innerText = `It was super effective!`
        document.getElementById('pokemon-message-left').innerText = `It was super effective!`
        return 4
    }
}

// Now to implement the damage functionality 
export const checkDamage = (attacker, move, defender) => {
    // damage = ((((   ( (2 * level) / 50 + 2) ) * power * (a / d)   ) / 50) + 2) * modifier
    let level = ((2 * attacker.level)/ 5) + 2
    let power = move[2]
    let a
    let d 
    // if move is physical
    if (move[4] == 'physical'){
        a = attacker.stats.attack
        d = defender.stats.defense
    }
    // else if move is special
    else if (move[4] == 'special'){
        a = attacker.stats.spAttack
        d = defender.stats.spDefense
    }
    const random = () => Math.random() * (1 - 0.85) + 0.85
    let stab
    if (attack.type == move[1]){
        stab = 1.5
    } else {
        stab = 1
    }
    let type = typeCheck(move, defender)
    let modifier = random() * stab * type
    let damage = ((level * power * (a / d) / 50) + 2) * modifier
    setTimeout(()=> {

        document.getElementById('pokemon-message-left').innerText = attacker.name + " did " + Math.floor(damage) + ' points of damage!'
        document.getElementById('pokemon-message-right').innerText = attacker.name + " did " + Math.floor(damage) + ' points of damage!'
    }, 1500)
    return damage
}
let damage = 0

// Attack function
export const attack = (attacker, move, defender) => {
    let randomNumber = randomize()
    let currentMoveAccuracy = move[3] * 100
    // Display this in the message box
    // document.getElementById('pokemon-message-left').innerText = attacker.name + " used " + currentMoveName + " against " + defender.name + "..."
    // document.getElementById('pokemon-message-right').innerText = attacker.name + " used " + currentMoveName + " against " + defender.name + "..."

    if (currentMoveAccuracy >= randomNumber){
        console.log(currentMoveAccuracy)
        console.log(randomNumber)
        newGame = false
        return
    } else if (currentMoveAccuracy < randomNumber){
        setTimeout(()=>{
            document.getElementById('pokemon-message-left').innerHTML = "But it missed!"
            document.getElementById('pokemon-message-right').innerHTML = "But it missed!"
            newGame = false
            return damage = 0
        }, 2000)
    }
}


// HEALTHBAR ANIMATION FUNCTION
export const updateHealthBarLeft = (width) => {
    document.getElementById("healthbar-left-hp").style.width = `${width * 100}%`
}
export const updateHealthBarRight = (width) => {
    document.getElementById("healthbar-right-hp").style.width = `${width * 100}%`
}
// USER SELECTION FUNCTIONS
export const userLeftPkm = () => {
    let leftNumChoice = prompt("Blue Team: Choose Blastoise(1), Charizard(2), or Venasaur(3)")
    var pkmLeft
    if(leftNumChoice > 3 || leftNumChoice < 1){
        alert('You must choose either 1, 2, or 3')
        return userLeftPkm()
    } else if (leftNumChoice == 1){
        pkmLeft = new Blastoise(`Blastoise`, 100, `Male`)

    } else if (leftNumChoice == 2){
        pkmLeft = new Charizard(`Charizard`, 100, `Male`)
    } else if (leftNumChoice == 3){
        pkmLeft = new Venasaur(`Venasaur`, 100, `Female`)
    }
    
    return pkmLeft

}
export const userRightPkm = () => {
    let rightNumChoice = prompt("Red Team: Choose Blastoise(1), Charizard(2), or Venasaur(3)")
    var pkmRight
    if(rightNumChoice > 3 || rightNumChoice < 1){
        alert('You must choose either 1, 2, or 3')
        return userRightPkm()
    } else if (rightNumChoice == 1){
        pkmRight = new Blastoise(`Blastoise`, 100, `Female`)
    } else if (rightNumChoice == 2){
        pkmRight = new Charizard(`Charizard`, 100, `Female`)
    } else if (rightNumChoice == 3){
        pkmRight = new Venasaur(`Venasaur`, 100, `Male`)

    }
    return pkmRight

}
export var pkmLeft = userLeftPkm()
export var pkmRight = userRightPkm()
var playerLeftHealth
    var leftCurrentHealth = pkmLeft.stats.hp
    export const updateHealthLeft = (attacker, move, defender) =>{
        var damage = checkDamage(attacker, move, defender)
        updateHealthBarLeft(playerLeftHealth)
            if(leftCurrentHealth - damage <= 0){
                // leftCurrentHealth = 0
                // updateHealthBarLeft(playerLeftHealth)
                setTimeout(()=>{
                    alert("Pokemon fainted, Red Team won the battle!")
                    setTimeout(() => {
                        location.reload()
                    }, 1500);
                }, 1250)
            } else{
                leftCurrentHealth -= damage
            }
            playerLeftHealth = leftCurrentHealth / pkmLeft.stats.hp
        damage = 0
    } 
    var rightCurrentHealth = pkmRight.stats.hp
    var playerRightHealth
    export const updateHealthRight = (attacker, move, defender) => {
            if(rightCurrentHealth - damage <= 0){
                rightCurrentHealth = 0
                setTimeout(()=>{

                    alert("Pokemon fainted, Blue Team won the battle!")
                    setTimeout(() => {
                        location.reload()
                    }, 500);
                }, 1250)
            } else{
                rightCurrentHealth -= checkDamage(attacker, move, defender)
            }            
            playerRightHealth = rightCurrentHealth / pkmRight.stats.hp
        console.log("Right health is updated: " + playerRightHealth)
        updateHealthBarRight(playerRightHealth)
        damage = 0

        
    }


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
export var populateLeft = populateMovesLeft(pkmLeft.moves)
export var populateRight = populateMovesRight(pkmRight.moves)

export const populateSpriteLeft = () =>{
    document.getElementById('healthbar-left-name').innerText = `${pkmLeft.name}`
    document.getElementById('pokemon-img-left').src = `/Styles/Images/${pkmLeft.name}.png` 
}
export const populateSpriteRight = () =>{
    document.getElementById('healthbar-right-name').innerText = `${pkmRight.name}`
    document.getElementById('pokemon-img-right').src = `/Styles/Images/${pkmRight.name}.png` 
}
populateSpriteLeft()
populateSpriteRight()




// EVENT LISTENERS
export var leftMoveOne = moveLeft1.addEventListener('click', ()=>{
    attack(pkmLeft, pkmLeft.moves[0], pkmRight)
    updateHealthRight(pkmLeft, pkmLeft.moves[0], pkmRight)
})
export var leftMoveTwo = moveLeft2.addEventListener('click', ()=>{
    attack(pkmLeft, pkmLeft.moves[1], pkmRight)
    updateHealthRight(pkmLeft, pkmLeft.moves[1], pkmRight)

})
export var leftMoveThree = moveLeft3.addEventListener('click', ()=>{
    attack(pkmLeft, pkmLeft.moves[2], pkmRight)
    updateHealthRight(pkmLeft, pkmLeft.moves[2], pkmRight)

})
export var leftMoveFour = moveLeft4.addEventListener('click', ()=>{
    attack(pkmLeft, pkmLeft.moves[3], pkmRight)
    updateHealthRight(pkmLeft, pkmLeft.moves[3], pkmRight)

})


export var rightMoveOne = moveRight1.addEventListener('click', ()=>{
    attack(pkmRight, pkmRight.moves[0], pkmLeft)
    updateHealthLeft(pkmRight, pkmRight.moves[0], pkmLeft)
})
export var rightMoveTwo = moveRight2.addEventListener('click', ()=>{
    attack(pkmRight, pkmRight.moves[1], pkmLeft)
    updateHealthLeft(pkmRight, pkmRight.moves[1], pkmLeft)
})
export var rightMoveThree = moveRight3.addEventListener('click', ()=>{
    attack(pkmRight, pkmRight.moves[2], pkmLeft)
    updateHealthLeft(pkmRight, pkmRight.moves[2], pkmLeft)
})
export var rightMoveFour = moveRight4.addEventListener('click', ()=>{
    attack(pkmRight, pkmRight.moves[3], pkmLeft)
    updateHealthLeft(pkmRight, pkmRight.moves[3], pkmLeft)
})
