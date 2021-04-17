/* Types*/
var Normal = {
    "name" : "Normal",
    "notEffective" : ['Ghost'],
    "superEffective":  [false],
    "notVeryEffective": ['Rock', 'Steel']
}
var Fire = {
    "name" : "Fire",
    "notEffective" : [false],
    "superEffective":  ['Bug', 'Grass', 'Ice', 'Steel'],
    "notVeryEffective": ['Dragon', 'Fire', 'Rock', 'Water']
}
var Fighting = {
    "name" : "Fighting",
    "notEffective" : ['Ghost'],
    "superEffective":  ['Dark', 'Ice', 'Normal', 'Rock', 'Steel'],
    "notVeryEffective": ['Bug', 'Fairy', 'Flying', 'Poison', 'Psychic']
}
var Water = {
    "name" : "Water",
    "notEffective" : [false],
    "superEffective": ['Fire', 'Ground', 'Rock'],
    "notVeryEffective": ["Water", "Grass", "Dragon"]
}
var Flying = {
    "name" : "Flying",
    "notEffective" : [false],
    "superEffective":  ['Bug', 'Grass', 'fighting'],
    "notVeryEffective": ['Electric', 'Rock', 'Steel']
}
var Grass = {
    "name" : "Grass",
    "notEffective" : [false],
    "superEffective": ['Water', 'Rock', 'Ground'],
    "notVeryEffective": ['Fire', 'Grass', 'Poison', 'Flying', 'Bug', 'Dragon', 'Steel']
}
var Poison = {
    "name" : "Poison",
    "notEffective" : ['Steel'],
    "notVeryEffective": ['Poison', 'Ground', 'Rock', 'Ghost'],
    "superEffective":  ['Fairy', 'Grass'],
}
var Electric = {
    "name" : "Electric",
    "notEffective" : ['Ground'],
    "superEffective":  ['Flying', 'Water'],
    "notVeryEffective": ['Dragon', 'Electric', 'Grass']
}
var Ground = {
    "name" : "Ground",
    "notEffective" : ['Flying'],
    "superEffective":  ['Electric', 'Fire', 'Poison', 'Rock', 'Steel'],
    "notVeryEffective": ['Bug', 'Grass']
}
var Psychic = {
    "name" : "Psychic",
    "notEffective" : ['Dark'],
    "superEffective":  ['fighting', 'Poison'],
    "notVeryEffective": ['Psychic', 'Steel']
}
var Rock = {
    "name" : "Rock",
    "notEffective" : [false],
    "notVeryEffective": ['Fighting', 'Ground', 'Steel'],
    "superEffective":  ['Bug', 'Fire', 'Flying', 'Ice'],
}
var Ice = {
    "name" : "Ice",
    "notEffective" : [false],
    "superEffective":  ['Dragon', 'Flying', 'Grass', 'ground'],
    "notVeryEffective": ['Fire', 'Ice', 'Steel', 'Water']
}
var Bug = {
    "name" : "Bug",
    "notEffective" : [false],
    "superEffective":  ['Grass', 'Psychic', 'Dark'],
    "notVeryEffective": ['Fire', 'Fighting', 'Poison', 'Flying', 'Ghost', 'Steel', 'Fairy']
}
var Dragon = {
    "name" : "Dragon",
    "notEffective" : ['Fairy'],
    "superEffective":  ['Dragon'],
    "notVeryEffective": ['Steel']
}
var Ghost = {
    "name" : "Ghost",
    "notEffective" : ['Normal'],
    "superEffective":  ['Ghost', 'Psychic'],
    "notVeryEffective": ['Dark']
}
var Dark = {
    "name" : "Dark",
    "notEffective" : [false],
    "superEffective":  ['Ghost', 'Psychic'],
    "notVeryEffective": ['Dark', 'Fairy', 'fighting']
}
var Steel = {
    "name" : "Steel",
    "notEffective" : [false],
    "superEffective":  ['Fairy', 'Ice', 'Rock'],
    "notVeryEffective": ['Electric', 'Fire', 'Steel', 'Water']
}
var Fairy = {
    "name" : "Fairy",
    "notEffective" : [false],
    "superEffective":  ['Dark', 'Dragon', 'fighting'],
    "notVeryEffective": ['Fire', 'Poison', 'Steel']

}

// Classes
class Pokemon{
    constructor(nickname, level){
        this.nickname = nickname
        this.level = level
    }
}

class Blastoise extends Pokemon{
    constructor(nickname, level, gender){
        super(nickname, level)
        // pokemon will be an object with level, gender, Pokemon name, image, type
        this.gender = gender
        this.name = 'Blastoise'
        this.type = "Water"
        this.stats = {
            "hp" : 79,
            "attack": 83,
            "defense": 100,
            "spAttack": 85,
            "spDefense": 105,
            "speed": 78
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
class Charizard extends Pokemon{
    constructor(nickname, level, gender){
        super(nickname, level)
        // pokemon will be an object with level, gender, Pokemon name, image, type
        this.level = level
        this.gender = gender
        this.name = 'Charizard'
        this.type = "Fire"
        this.stats = {
            "hp" : 78,
            "attack": 84,
            "defense": 78,
            "spAttack": 109,
            "spDefense": 85,
            "speed": 100
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
class Venasaur extends Pokemon{
    constructor(nickname, level, gender){
        super(nickname, level)
        // pokemon will be an object with level, gender, Pokemon name, image, type
        this.level = level
        this.gender = gender
        this.name = 'Venasaur'
        this.type = 'Grass'
        this.stats = {
            "hp" : 80,
            "attack": 82,
            "defense": 83,
            "spAttack": 100,
            "spDefense": 100,
            "speed": 85
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
const randomize = () =>{
    return Math.floor(Math.random() * 100)
}

const typeCheck = (attacker, move, opponent) => {
    var moveType = move[1]
    console.log(attacker.name + " used " + move[0] + " against " + opponent.name + "...\n")

    superAccumulator = 0
    notVeryAccumulator = 0
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
        console.log(`It was not very effective.`)
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
const checkDamage = (attacker, move, defender) => {
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
    let type = typeCheck(attacker, move, defender)
    let modifier = random() * stab * type
    let damage = ((level * power * (a / d) / 50) + 2) * modifier
    console.log(attacker.name + " did " + damage + ' points of damage!')
    return damage
}

// Attack function
const attack = (attacker, move, defender) => {
    let randomNumber = randomize()
    let currentMoveAccuracy = attacker.moves[move][3] * 100
    let currentMoveName = attacker.moves[move][0]
    let damage

    console.log(attacker.name + " used " + currentMoveName + "!")
    if (currentMoveAccuracy >= randomNumber){
        damage = checkDamage(attacker, move, defender)
        return damage
    } else{
        console.log("But it missed!")
    }
}


// Test
var pokemon1 = new Blastoise('Bubbles', 100, 'Male')
var pokemon2 = new Charizard( 'Blaze', 100, 'Female')
var pokemon3 = new Venasaur( 'Ivy', 100, 'Female')

typeCheck(pokemon2, pokemon2.moves[0], pokemon3)
attack(pokemon2, pokemon2.moves[0], pokemon3)
