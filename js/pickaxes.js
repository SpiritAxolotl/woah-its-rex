const mainPickaxes = {
    "ol-faithful": {
        "enabled": true,
        "name": "Ol' Faithful",
        "description": "Humble beginnings :)<br>No special abilities.",
        "sillyDescription": ":33333333"
    },
    "mulch-mallet": {
        "enabled": false,
        "name": "Mulch Mallet",
        "description": "Mines a few blocks in every cardinal direction.<br>Has an ability proc rate of 1/30.<br>Has 1.2x luck.",
        "sillyDescription": "is anyone gonna read these lol"
    },
    "mud-sickle": {
        "enabled": false,
        "name": "Mud Sickle",
        "description": "Mines a small square around the player.<br>Has an ability proc rate of 1/35.<br>Has 1.35x luck.",
        "sillyDescription": "hi!!! hii!!"
    },
    "dirt-ravager": {
        "enabled": false,
        "name": "Dirt Ravager",
        "description": "Mines blocks in an X shape around the player.<br>Has an ability proc rate of 1/30.<br>Has 1.8x luck.",
        "sillyDescription": "wait no get out of here"
    },
    "void-crusher": {
        "enabled": false,
        "name": "Void Crusher",
        "description": "Mines a square randomly around the player.<br>Has an ability proc rate of 1/25.<br>Has 2x luck.",
        "sillyDescription": "stop it get out"
    },
    "geode-staff": {
        "enabled": false,
        "name": "Geode Staff",
        "description": "Mines a circle randomly around the player.<br>Has an ability proc rate of 1/17.<br>Has 5x luck.",
        "sillyDescription": "leave!!!!!!!!"
    },
    "earth-soiler": {
        "enabled": false,
        "name": "Earth Soiler",
        "description": "Has 2 abilities.<br>Ability 1 mines a triangle around the player.<br>Ability 2 mines a heart around the player.<br>Ability 1 has a 1/60 proc rate.<br>Ability 2 has a 1/40 proc rate.<br>Both abilities have 10x luck.",
        "sillyDescription": "i have your ip"
    },
    "crypt-smasher": {
        "enabled": false,
        "name": "Crypt Smasher",
        "description": "Mines a few blocks in every direction. However, each line has a chance to re-activate the ability from the end of said line with a 75% chance and up to 4 times.<br>Has an ability proc rate of 1/50.<br>Has 3x luck.",
        "sillyDescription": "grrrrr leave!!"
    },
    "labrynthian-tide": {
        "enabled": false,
        "name": "Labrynthian Tide",
        "description": "Mines blocks in an X shape around the player, with each end having a chance to re-activate the ability at that position with a 75% chance and up to 4 times.<br>Has an ability proc rate of 1/50.<br>Has 4x luck.",
        "sillyDescription": ":pouting-cat:"
    },
    "77-leaf-destroyer": {
        "enabled": false,
        "name": "77 Leaf Destroyer",
        "description": "Mines the shape of a clover around the player.<br>Has an ability proc rate of 1/30.<br>Has 20x luck.",
        "sillyDescription": ">:C"
    },
    "planet-buster": {
        "enabled": false,
        "name": "Planet Buster",
        "description": "Has a 50% chance to mine a 7x7 square in a 49x49 area around the player, with an average of 24 7x7 squares being mined each activation.<br>Has an ability proc rate of 1/50.<br>Has 17.5x luck.",
        "sillyDescription": "IM HERE NOW TOO"
    },
    "whirlpool-of-fate": {
        "enabled": false,
        "name": "Whirlpool of Fate",
        "description": "Mines an extremely large spiral around the player.<br>Has an ability proc rate of 1/100.<br>Has 30x luck.",
        "sillyDescription": "mrrp meow meow!"
    },
    "wings-of-glory": {
        "enabled": false,
        "name": "Wings of Glory",
        "description": "Mines wings around the player.<br>Mines 2 blocks at once when using automine.<br>Has 2x special cave type luck.<br>Has an ability proc rate of 1/150.<br>Has 75x luck.",
        "sillyDescription": "cataxe"
    }
}

// from https://stackoverflow.com/questions/14810506/
function objectMap(object, mapFn) {
    return Object.keys(object).reduce(function(result, key) {
      result[key] = mapFn(object[key])
      return result
    }, {})
}

let pickaxes = Object.keys(mainPickaxes);
let pickaxeNamesNormalized = objectMap(mainPickaxes, (pick) => {return pick.name})
let pickaxeDescriptions = objectMap(mainPickaxes, (pick) => {return pick.description})
let pickaxeSillyDescriptions = objectMap(mainPickaxes, (pick) => {return pick.sillyDescription});