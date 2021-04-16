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
            "special attack": 85,
            "special defense": 105,
            "speed": 78
        }
        this.image = new URL('https://www.pngitem.com/pimgs/m/436-4362068_pokemon-blastoise-png-download-pokemon-blastoise-transparent-png.png')
        this.moves = [
            ['Hydro Pump', Water, 110, 0.80],
            ['Surf', Water, 90, 1.0],
            ['Crunch', Dark, 80, 1.0],
            ['Avalanche', Ice, 60, 1.0]
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
            "special attack": 109,
            "special defense": 85,
            "speed": 100
        }
        this.image = new URL('https://image.pngaaa.com/278/1622278-middle.png')
        this.moves = [
            ['Fire Blast', Fire, 110, 0.85],
            ['Flamethrower', Fire, 90, 1.0],
            ['Slash', Normal, 70, 1.0],
            ['Thunder Punch', Electric, 75, 1.0]
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
        this.type = Grass
        this.stats = {
            "hp" : 80,
            "attack": 82,
            "defense": 83,
            "special attack": 100,
            "special defense": 100,
            "speed": 85
        }
        this.image = new URL('https://static.wikia.nocookie.net/pokemon-Dark-rising/images/4/42/03_Venusaur-0.png/revision/latest?cb=20180921205847')
        this.moves = [
                ['Power Whip', Grass, 120, 0.85],
                ['Giga Drain', Grass, 75, 1.0],
                ['Body Slam', Normal, 85, 1.0],
                ['Bulldoze', Ground, 60, 1.0]
            ]
        
    }
}

// Functions
const randomize = () =>{
    return Math.floor(Math.random() * 100)
}
const checkAccuracy = (pkm, moveIndex) => {
    let randomNumber = randomize()
    let currentMoveAccuracy = pkm.moves[moveIndex][3] * 100
    let currentMoveName = pkm.moves[moveIndex][0]

    if (currentMoveAccuracy >= randomNumber){
        console.log(pkm.name + " used " + currentMoveName + "!\nMove accuracy: " + currentMoveAccuracy)
        console.log("Randomized number: " + randomNumber + ". Attack landed!")
    } else{
        console.log(pkm.name + " used " + currentMoveName + "\nMove accuracy: " + currentMoveAccuracy)
        console.log("Randomized number: " + randomNumber + ". Attack missed!")
    }
}
const typeCheck = (attacker, move, opponent) => {
    var moveType = move[1]
    console.log(attacker.name + " used " + move[0] + "...\n")
    
    moveType.superEffective.forEach((item)=>{
        doubleDamage = 1.0
        if (item == opponent.type){
            doubleDamage = 2.0
        }
    })
    moveType.notVeryEffective.forEach((item)=>{
        halfDamage = 1
        if (item == opponent.type){
            halfDamage = 0.5
        }
    })
    moveType.notEffective.forEach((item)=>{
        noDamage = 1
        if (item == opponent.type){
            noDamage = 0
        }
    })
    let dmgMultiplier = doubleDamage * halfDamage * noDamage
    if (dmgMultiplier == 0){
        return console.log(`It had no effect!`)
    } else if (dmgMultiplier < 1){
        return console.log(`It was not very effective`)
    } else if (dmgMultiplier > 1){
        return console.log(`It was super effective`)
    }
}

// Test
var pokemon1 = new Blastoise('Bubbles', 100, 'Male')
var pokemon2 = new Charizard( 'Blaze', 100, 'Female')
var pokemon3 = new Venasaur( 'Ivy', 100, 'Female')

typeCheck(pokemon2, pokemon2.moves[3], pokemon1)
