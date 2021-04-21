import * as App from '/Apps/app.js'
import * as Health from '/Apps/healthbar.js'


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
        // pokemon will be an object with level, gender, Pokemon name, image, type
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
        // console.log(item)
        // console.log(opponent.type)
        // console.log(item == opponent.type)
        
        if (item == opponent.type){
            superAccumulator++
            // return console.log("doubleDamage is " + doubleDamage)
        }
        // console.log("accumulator: " + superAccumulator)
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
    // console.log(doubleDamage)
    // console.log(halfDamage)
    // console.log(noDamage)
    if (dmgMultiplier == 0){
        console.log(`It had no effect!`)
        return 0
    } else if (dmgMultiplier > 0 && dmgMultiplier < 0.5){
        console.log(`It was not very effective.`)
        return 0.25
    } else if (dmgMultiplier < 1){
        console.log(`It was not very effective!`)
        return 0.5
    } else if (dmgMultiplier == 1){
        return 1
    } else if (dmgMultiplier > 1 && dmgMultiplier < 4){
        console.log(`It was super effective!`)
        return 2
    } else {
        console.log(`It was super effective!`)
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
    console.log(attacker.name + " did " + Math.floor(damage) + ' points of damage!')
    return damage
}

// Attack function
export const attack = (attacker, move, defender) => {
    let randomNumber = randomize()
    let currentMoveAccuracy = move[3] * 100
    let currentMoveName = move[0]
    let damage = 0

    // Display this in the message box
    console.log(attacker.name + " used " + currentMoveName + " against " + defender.name + "...")
    if (currentMoveAccuracy >= randomNumber){
        damage = checkDamage(attacker, move, defender)
        // toggleAttackFlash()
        // toggleOpacity()
        // animateHealthBar()
        Health.updateHealthRight()
        Health.updateHealthLeft()
        // checkKO()
            // if checkKO == true, use faint() function
        // endTurn()
        newGame = false
        return damage
    } else{
        console.log("But it missed!")
        // endTurn()
        newGame = false
        return 0
    }
}


// Test
// var pokemon1 = new Blastoise('Bubbles', 100, 'Male')
// var pokemon2 = new Charizard( 'Blaze', 100, 'Female')
// var pokemon3 = new Venasaur( 'Ivy', 100, 'Female')

// typeCheck(pokemon2, pokemon2.moves[0], pokemon3)
// attack(pokemon1, pokemon1.moves[0], pokemon3)
