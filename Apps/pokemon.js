var water = {
    "name" : "Water",
    "notEffective" : ["none"],
    "superEffective":  ["ground", "rock", "fire"],
    "notVeryEffective": ["water", "grass", "dragon"]
}
var fire = {
    "name" : "Fire",
    "notEffective" : ["none"],
    "superEffective":  ["bug", "grass", "ice", "steel"],
    "notVeryEffective": ["dragon", "fire", "rock", "water"]
}
var grass = {
    "name" : "Grass",
    "notEffective" : ["none"],
    "superEffective":  ["water", "ground", "rock"],
    "notVeryEffective": ["fire", "grass", "poison", "flying", "bug", "dragon", "steel"]
}
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
        this.type = water
        this.stats = {
            "hp" : 79,
            "attack": 83,
            "defense": 100,
            "special attack": 85,
            "special defense": 105,
            "speed": 78
        }
        this.image = new URL('https://www.pngitem.com/pimgs/m/436-4362068_pokemon-blastoise-png-download-pokemon-blastoise-transparent-png.png')
    }
}
class Charizard extends Pokemon{
    constructor(nickname, level, gender){
        super(nickname, level)
        // pokemon will be an object with level, gender, Pokemon name, image, type
        this.level = level
        this.gender = gender
        this.name = 'Charizard'
        this.type = fire
        this.stats = {
            "hp" : 78,
            "attack": 84,
            "defense": 78,
            "special attack": 109,
            "special defense": 85,
            "speed": 100
        }
        this.image = new URL('https://image.pngaaa.com/278/1622278-middle.png')
    }
}
class Venasaur extends Pokemon{
    constructor(nickname, level, gender){
        super(nickname, level)
        // pokemon will be an object with level, gender, Pokemon name, image, type
        this.level = level
        this.gender = gender
        this.name = 'Venasaur'
        this.type = grass
        this.stats = {
            "hp" : 80,
            "attack": 82,
            "defense": 83,
            "special attack": 100,
            "special defense": 100,
            "speed": 85
        }
        this.image = new URL('https://static.wikia.nocookie.net/pokemon-dark-rising/images/4/42/03_Venusaur-0.png/revision/latest?cb=20180921205847')
    }
}

var pokemon1 = new Blastoise('Bubbles', 51, 'Male')
var pokemon2 = new Charizard( 'Blaze', 61, 'Female')
var pokemon3 = new Venasaur( 'Ivy', 71, 'Female')
console.log(pokemon1.name)
console.log(pokemon1.nickname)
console.log(pokemon2.name);
console.log(pokemon2.type.superEffective)
console.log(pokemon3.name);
console.log(pokemon3.type.notVeryEffective)