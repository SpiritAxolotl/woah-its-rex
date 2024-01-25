const oreList = {
    "🐱": { prob: Number.MAX_SAFE_INTEGER },
    "🧌": { prob: 696969696969 },
    "♾️": { prob: 75000000000 },
    "⚕️": { prob: 50000000000 },
    "💅": { prob: 11201200200 },
    "🌳": { prob: 9250000000 },
    "✈️": { prob: 9110000000 },
    "💵": { prob: 8900000000 },
    "🏰": { prob: 8888888888 },
    "🪢": { prob: 8181818181 },
    "🐋": { prob: 8000000000 },
    "🐪": { prob: 7800000000 },
    "⚠️": { prob: 6666666666 },
    "🫃": { prob: 6600000000 },
    "🚿": { prob: 6000000000 },
    "🏔️": { prob: 5500000000 },
    "😻": { prob: 5000000005 },
    "🌇": { prob: 4300000000 },
    "🧫": { prob: 4000000000 },
    "💐": { prob: 3750000000 },
    "🪅": { prob: 3250000000 },
    "🎆": { prob: 3000000000 },
    "🌡️": { prob: 3000000000 },
    "🌈": { prob: 2750000000 },
    "🏵️": { prob: 2600000000 },
    "🎷": { prob: 2500000000 },
    "🥬": { prob: 2000000000 },
    "💫": { prob: 2000000000 },
    "🪔" : { prob: 2000000000 },
    "👁️": { prob: 1920000000 },
    "🛸": { prob: 1000000000 },
    "🪩": { prob: 999999999 },
    "👀": { prob: 955200890 },
    "🥗": { prob: 800000000 },
    "🩺": { prob: 800000000 },
    "💊": { prob: 800000000 },
    "💸": { prob: 754000000 },
    "👿": { prob: 750000000 },
    "⌛": { prob: 750000000 },
    "🪐": { prob: 709000750 },
    "🧀": { prob: 618000001 },
    "🌀": { prob: 618000000 },
    "🧊": { prob: 583000000 },
    "🌌": { prob: 550000000 },
    "🥀": { prob: 538000000 },
    "🪘": { prob: 500000000 },
    "🥉": { prob: 444444444 },
    "🪞": { prob: 426800050 },
    "🔩": { prob: 420836000 },
    "❄️": { prob: 386500000 },
    "💥": { prob: 375000000 },
    "🏝️": { prob: 275320000 },
    "🌟": { prob: 257280000 },
    "🍄": { prob: 250000000 },
    "🌪️": { prob: 247010000 },
    "✨": { prob: 240800000 },
    "🌏": { prob: 213200000 },
    "🧵": { prob: 201061929 },
    "📝": { prob: 200000000 },
    "⛄": { prob: 183640000 },
    "💱": { prob: 180000000 },
    "💎": { prob: 170000000 },
    "🔥": { prob: 160000000 },
    "🥁": { prob: 100000000 },
    "🔆": { prob: 75000000 },
    "☄️": { prob: 72500000 },
    "🌲": { prob: 71000000 },
    "⭐": { prob: 70600600 },
    "🔱": { prob: 70000000 },
    "🧬": { prob: 70000000 },
    "🎃": { prob: 69000000 },
    "🎇": { prob: 67500000 },
    "👑": { prob: 65000000 },
    "🕯️": { prob: 62500000 },
    "🔮": { prob: 60000000 },
    "🕋": { prob: 55000000 },
    "⌚": { prob: 52000000 },
    "🔳": { prob: 46000000 },
    "🎨": { prob: 44000000 },
    "🧲": { prob: 43500000 },
    "🗜️": { prob: 42000000 },
    "🕸️": { prob: 40000000 },
    "🏆": { prob: 38000000 },
    "🪬": { prob: 37000000 },
    "🔋": { prob: 36000000 },
    "🎍": { prob: 35000000 },
    "🧨": { prob: 31500000 },
    "🎀": { prob: 31000000 },
    "⏹️": { prob: 29000000 },
    "🍥": { prob: 27500000 },
    "🐟": { prob: 26000000 },
    "🔗": { prob: 25000000 },
    "🪇": { prob: 20000000 },
    "💉": { prob: 17500000 },
    "💍": { prob: 15000000 },
    "🪙": { prob: 15000000 },
    "🔭": { prob: 15000000 },
    "🧩": { prob: 14500000 },
    "🎴": { prob: 13450000 },
    "🗡️": { prob: 13000000 },
    "🎄": { prob: 12500000 },
    "🥽": { prob: 12350000 },
    "🔔": { prob: 12250000 },
    "🗿": { prob: 12000000 },
    "🪵": { prob: 10000000 },
    "🎹": { prob: 10000000 },
    "⚗️": { prob: 9750000 },
    "🪚": { prob: 9600000 },
    "🌻": { prob: 9500000 },
    "🪄": { prob: 9460000 },
    "🍁": { prob: 8900000 },
    "📟": { prob: 8750000 },
    "🫧": { prob: 8750000 },
    "🤿": { prob: 8670000 },
    "🎣": { prob: 8230000 },
    "🥏": { prob: 8000000 },
    "📡": { prob: 8000000 },
    "🪜": { prob: 7950000 },
    "⛵": { prob: 7895000 },
    "🎲": { prob: 7777777 },
    "🎭": { prob: 7650000 },
    "🧪": { prob: 7500000 },
    "⚱️": { prob: 7467000 },
    "✂️": { prob: 7000000 },
    "🖍️": { prob: 6800000 },
    "⚜️": { prob: 6250000 },
    "💠": { prob: 6000000 },
    "🃏": { prob: 5500000 },
    "⚙️": { prob: 5000000 },
    "🤍": { prob: 2000000 },
    "🖤": { prob: 1750000 },
    "🤎": { prob: 1500000 },
    "💜": { prob: 1250000 },
    "❤️": { prob: 1000000 },
    "🧡": { prob: 950000 },
    "💛": { prob: 900000 },
    "💙": { prob: 800000 },
    "💚": { prob: 750000 },
    "⚫": { prob: 100 },
    "🟤": { prob: 90 },
    "🟣": { prob: 80 },
    "🔴": { prob: 70 },
    "🟠": { prob: 60 },
    "🟡": { prob: 55 },
    "🔵": { prob: 50 },
    "🟢": { prob: 45 },
    "🟪": { prob: 40 },
    "🟥": { prob: 35 },
    "🟧": { prob: 30 },
    "🟫": { prob: 1 },
    "🧱": { prob: 1 },
    "🌫️": { prob: 1 },
    "🌊": { prob: 1 },
    "🪨": { prob: 1 },
    "☢️": { prob: 1 },
    "🌵": { prob: 1 },
    "📰": { prob: 1 },
    "🎂": { prob: 1 },
    "🪈": { prob: 1 },
    "❓": { prob: 1 },
    "🎵": { prob: 1 },
    "☣️": { prob: 1 },
    "🦠": { prob: 1 }
}

let inventory = {};

//sets the inventory to 0
for (let ore in oreList)
    inventory[ore] = {"normal": 0, "electrified": 0, "radioactive": 0, "explosive": 0};

class LayerManager {

    static spawnsEverywhere = [/*"😻",*//*"⛄",*/"🤍","🖤","🤎","💜","❤️","🧡","💛","💙","💚","⚫","🟤","🟣","🔴","🟠","🟡","🔵","🟢","🟪","🟥","🟧"];
    static unaffectedByLuck = ["⚫","🟤","🟣","🔴","🟠","🟡","🔵","🟢","🟪","🟥","🟧","🟫","🧱","🌫️","🌊","🪨","☢️","🌵","📰","🎂","🪈","❓","🎵","☣️","🦠"];

    static layers = {
        "DIRT": {
            name:"Dirt",
            layer:["🌳","💐","🥗","🌪️","🌏","🌲","🎃","🎍","🎄","🪵","🌻","🍁","🟫"],
            type:"normal",
        },
        "BRICK": {
            name:"Brick",
            layer:["🏰","🌇","🥉","🪞","🔩","🧲","🪬","🧨","🔗","🪙","🗿","🪚","🪜","🧱"],
            type:"normal",
        },
        "FOGGY": {
            name:"Foggy",
            layer:["🚿","👁️","💸","⌛","🧵","🕯️","🕋","🎨","🎴","🥽","🪄","🎭","🌫️"],
            type:"normal",
        },
        "WATER": {
            name:"Water",
            layer:["🐋","💫","🪩","👿","🌀","🔱","👑","🐟","🫧","🤿","🎣","⛵","🌊"],
            type:"normal",
        },
        "ROCK": {
            name:"Rock",
            layer:["🏔️","🌈","🧊","❄️","🏝️","✨","⛄","💎","☄️","🔮","🔋","💍","🥏","⚜️","💠","🪨"],
            type:"normal",
        },
        "RADIOACTIVE": {
            name:"Radioactive",
            layer:["⚠️","🎆","🧀","🌌","🥀","🎇","🔳","⏹️","🧩","🔔","⚗️","🧪","☢️"],
            type:"normal",
        },
        "CACTUS": {
            name:"Cactus",
            layer:["🐪","🏵️","🪐","💥","🔥","🔆","⭐","🎀","🗡️","📟","⚱️","🖍️","🌵"],
            type:"normal",
        },
        "PAPER": {
            name:"Paper",
            layer:["💵","🪅","👀","🌟","📝","⌚","🗜️","🏆","🎲","✂️","🃏","⚙️","📰"],
            type:"normal",
        },
        "SILLY": {
            name:"Silly",
            layer:["🧌","♾️","💅","✈️","🪢","🫃","🎂"],
            type:"silly",
        },
        "FLUTE": {
            name:"Flute",
            layer:["🪈"],
            type:"silly",
        }, 
        "CAVECONFUSING": {
            name:"Confusing",
            layer:["🪔","🩺","💱","🔭","📡","❓"],
            type:"cave"
        },
        "CAVEMUSIC": {
            name:"Music",
            layer:["🎷","🪘","🥁","🪇","🎹","🎵"],
            type:"cave"
        },
        "CAVEBIOHAZARD": {
            name:"Biohazard",
            layer:["🧫","🛸","🍄","🕸️","💉","☣️"],
            type:"cave"
        },
        "CAVEGERM": {
            name:"Germ",
            layer:["⚕️","🌡️","💊","🧬","🍥","🦠"],
            type:"cave"
        }
    }

    getLayerNamesFromType(type) {
        let layers = []
        Object.keys(LayerManager.layers).forEach(layer => {
            // actually so fucking dumb but it works??
            if (LayerManager.layers[layer].type == type) {
                layers.push(LayerManager.layers[layer].name)
            }
        });
        return layers;
    }

    getLayersFromType(type) {
        let layers = []
        Object.keys(LayerManager.layers).forEach(layer => {
            // actually so fucking dumb but it works??
            if (LayerManager.layers[layer].type == type) {
                layers.push(LayerManager.layers[layer].layer)
            }
        });
        return layers;
    }

    getAllLayerNames() {
        let names = [];
        Object.keys(LayerManager.layers).forEach(layer => {
            let key = LayerManager.layers[layer];
            names.push(key.name);
        });
        return names;
    }

    getAllLayerOres() {
        let ores = [];
        Object.keys(LayerManager.layers).forEach(layer => {
            let key = LayerManager.layers[layer];
            ores.push(key.layer);
        });
        return ores;
    }
}

//SETTING LAYERS
//let lastLayerChange = 6000;

function getLayerFromOre(ore) {
    Object.keys(LayerManager.layers).forEach(layer => {
        if (layer.indexOf(ore) !== -1) {
            return layer;
        }
    });
    return undefined;
}

// GENERAL STUFF (SAME NAME FOR COMPATIBILITY)

let manager = new LayerManager();
let allLayersNames = manager.getAllLayerNames();
let allLayers = manager.getAllLayerOres();

let allCaves = manager.getLayersFromType('cave');
let allCavesNames = manager.getLayerNamesFromType('cave');

let normalLayers = manager.getLayersFromType('normal');
let sillyLayers = manager.getLayersFromType('silly');
let fluteLayers = manager.getLayersFromType('flute');

let spawnsEverywhere = LayerManager.spawnsEverywhere;
let unaffectedByLuck = LayerManager.unaffectedByLuck;

let layersChanged = {};
let currentLayer = undefined;
let overrideLayer = undefined;
function setLayer(y) {
    regY = Math.floor(y / 2000);
    const lastCurrentLayer = allLayers[allLayersNames.indexOf(layersChanged[`${regY}`])]; //might be undefined
    if (Object.keys(layersChanged).indexOf(`${regY}`) === -1) {
        if (typeof overrideLayer === "object") {
            currentLayer = overrideLayer;
            overrideLayer = undefined;
        } else if (regY < allLayers.length)
            currentLayer = normalLayers[regY];
        else if (random(1,77) === 33)
            currentLayer = sillyLayer;
        else if (random(1,40) === 20)
            currentLayer = fluteLayer;
        else
            currentLayer = normalLayers[random(normalLayers.length-1)];
        layerProbsSum = addUpAllProbs(currentLayer);
        layersChanged[`${regY}`] = allLayersNames[allLayers.indexOf(currentLayer)];
    } else if (currentLayer !== lastCurrentLayer) {
        currentLayer = lastCurrentLayer;
        layerProbsSum = addUpAllProbs(currentLayer);
    }
}
