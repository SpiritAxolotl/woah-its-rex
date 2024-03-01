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
    "🪔": { prob: 2000000000 },
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

class VariantManager {
    
    static variants = {
        "NORMAL": {
            name: "Normal",
            emoji: "",
            prob: 1,
            order: 0
        },
        "ELECTRIFIED": {
            name: "Electrified",
            emoji: "⚡️",
            prob: 50,
            order: 1
        },
        "RADIOACTIVE": {
            name: "Radioactive",
            emoji: "☢️",
            prob: 250,
            order: 2
        },
        "EXPLOSIVE": {
            name: "Explosive",
            emoji: "💥",
            prob: 500,
            order: 3
        },
        "BLOODY": {
            name: "Bloody",
            emoji: "🩸",
            prob: 1000,
            order: 4
        }
    }
    
    getVariantAttributeFromNum(num, type) {
        for (const variant in VariantManager.variants)
            if (VariantManager.variants[variant].order === num)
                return VariantManager.variants[variant][type];
        return undefined;
    }
    
    getVariantAttributeFromName(name, type) {
        for (const variant in VariantManager.variants)
            if (VariantManager.variants[variant].name.toLowerCase() === name.toLowerCase())
                return VariantManager.variants[variant][type];
        return undefined;
    }
    
    getVariantNames() {
        const names = [];
        for (const variant in VariantManager.variants)
            names.push(VariantManager.variants[variant].name);
        return names;
    }
    
    getVariantMultis() {
        const multis = [];
        for (const variant in VariantManager.variants)
            multis.push(VariantManager.variants[variant].prob);
        return sortArray(multis);
    }
    
    getVariantEmojis() {
        const emojis = [];
        for (const variant in VariantManager.variants)
            emojis.push(VariantManager.variants[variant].emoji);
        return emojis;
    }
}

class LayerManager {
    
    static spawnsEverywhere = [/*"😻",*//*"⛄",*/"🤍","🖤","🤎","💜","❤️","🧡","💛","💙","💚","⚫","🟤","🟣","🔴","🟠","🟡","🔵","🟢","🟪","🟥","🟧"];
    static unaffectedByLuck = ["⚫","🟤","🟣","🔴","🟠","🟡","🔵","🟢","🟪","🟥","🟧","🟫","🧱","🌫️","🌊","🪨","☢️","🌵","📰","🎂","🪈","❓","🎵","☣️","🦠"];
    
    static layers = {
        "DIRT": {
            name: "Dirt",
            ores: ["🌳","💐","🥗","🌪️","🌏","🌲","🎃","🎍","🎄","🪵","🌻","🍁","🟫"],
            type: "normal",
            depth: 0
        },
        "BRICK": {
            name: "Brick",
            ores: ["🏰","🌇","🥉","🪞","🔩","🧲","🪬","🧨","🔗","🪙","🗿","🪚","🪜","🧱"],
            type: "normal",
            depth: 2000
        },
        "FOGGY": {
            name: "Foggy",
            ores: ["🚿","👁️","💸","⌛","🧵","🕯️","🕋","🎨","🎴","🥽","🪄","🎭","🌫️"],
            type: "normal",
            depth: 4000
        },
        "WATER": {
            name: "Water",
            ores: ["🐋","💫","🪩","👿","🌀","🔱","👑","🐟","🫧","🤿","🎣","⛵","🌊"],
            type: "normal",
            depth: 6000
        },
        "ROCK": {
            name: "Rock",
            ores: ["🏔️","🌈","🧊","❄️","🏝️","✨","⛄","💎","☄️","🔮","🔋","💍","🥏","⚜️","💠","🪨"],
            type: "normal",
            depth: 8000
        },
        "RADIOACTIVE": {
            name: "Radioactive",
            ores: ["⚠️","🎆","🧀","🌌","🥀","🎇","🔳","⏹️","🧩","🔔","⚗️","🧪","☢️"],
            type: "normal",
            depth: 10000
        },
        "CACTUS": {
            name: "Cactus",
            ores: ["🐪","🏵️","🪐","💥","🔥","🔆","⭐","🎀","🗡️","📟","⚱️","🖍️","🌵"],
            type: "normal",
            depth: 12000
        },
        "PAPER": {
            name: "Paper",
            ores: ["💵","🪅","👀","🌟","📝","⌚","🗜️","🏆","🎲","✂️","🃏","⚙️","📰"],
            type: "normal",
            depth: 14000
        },
        "SILLY": {
            name: "Silly",
            ores: ["🧌","♾️","💅","✈️","🪢","🫃","🎂"],
            type: "silly"
        },
        "FLUTE": {
            name: "Flute",
            ores: ["🪈"],
            type: "flute"
        },
        "CAVECONFUSING": {
            name: "Confusing",
            ores: ["🪔","🩺","💱","🔭","📡","❓"],
            type: "cave",
            multi: 50
        },
        "CAVEMUSIC": {
            name: "Music",
            ores: ["🎷","🪘","🥁","🪇","🎹","🎵"],
            type: "cave",
            multi: 35
        },
        "CAVEBIOHAZARD": {
            name: "Biohazard",
            ores: ["🧫","🛸","🍄","🕸️","💉","☣️"],
            type: "cave",
            multi: 20
        },
        "CAVEGERM": {
            name: "Germ",
            ores: ["⚕️","🌡️","💊","🧬","🍥","🦠"],
            type: "cave",
            multi: 10
        }
    }
    
    getLayerNamesFromType(type) {
        const names = [];
        for (const layer in LayerManager.layers)
            if (LayerManager.layers[layer].type === type)
                names.push(LayerManager.layers[layer].name);
        return names;
    }
    
    getLayersFromType(type) {
        const layers = [];
        for (const layer in LayerManager.layers)
            if (LayerManager.layers[layer].type === type)
                layers.push(LayerManager.layers[layer].ores);
        return layers;
    }
    
    getLayerMultisFromType(type) {
        const multis = [];
        for (const layer in LayerManager.layers)
            if (LayerManager.layers[layer].type === type)
                multis.push(LayerManager.layers[layer].multi);
        return multis;
    }
    
    getLayerDepthsFromType(type) {
        const depths = [];
        for (const layer in LayerManager.layers)
            if (LayerManager.layers[layer].type === type)
                depths.push(LayerManager.layers[layer].depth);
        return depths;
    }
    
    getAllLayerNames() {
        const names = [];
        for (const layer in LayerManager.layers)
            names.push(LayerManager.layers[layer].name);
        return names;
    }
    
    getAllLayerOres() {
        const ores = [];
        for (const layer in LayerManager.layers)
            ores.push(LayerManager.layers[layer].ores);
        return ores;
    }
}

//SETTING LAYERS

function getOreProbability(ore) {
    for (const ores in oreList)
        if (ores.includes(ore))
            return ores[ore];
    return undefined;
}

function getLayerFromOre(ore) {
    for (const layer in LayerManager.layers)
        if (layer.includes(ore))
            return layer;
    return undefined;
}

// GENERAL STUFF (SAME NAME FOR COMPATIBILITY)

const variantManager = new VariantManager();
const layerManager = new LayerManager();

const variantNames = variantManager.getVariantNames();
const variantMultis = variantManager.getVariantMultis();
const variantMultisReverse = variantManager.getVariantMultis().reverse();
const variantEmojis = variantManager.getVariantEmojis();
const variantMultiSum = variantMultis.reduce((sum, multi) => sum + multi, 0);

const allLayersNames = layerManager.getAllLayerNames();
const allLayers = layerManager.getAllLayerOres();

const normalLayers = layerManager.getLayersFromType("normal");
const [sillyLayer] = layerManager.getLayersFromType("silly");
const [fluteLayer] = layerManager.getLayersFromType("flute");
const normalLayersDepths = layerManager.getLayerDepthsFromType("normal");

const allCaves = layerManager.getLayersFromType("cave");
const allCavesNames = layerManager.getLayerNamesFromType("cave");
const allCaveMultis = layerManager.getLayerMultisFromType("cave");

const spawnsEverywhere = LayerManager.spawnsEverywhere;
const unaffectedByLuck = LayerManager.unaffectedByLuck;


const inventory = {};

//sets the inventory to 0
for (const ore in oreList) {
    const inv = {};
    for (const variant of variantNames)
        inv[variant.toLowerCase()] = 0;
    inventory[ore] = inv;
}

const layersChanged = {};
let currentLayer;
let overrideLayer;
function setLayer(y) {
    regY = Math.floor(y / 2000);
    const lastCurrentLayer = allLayers[allLayersNames.indexOf(layersChanged[`${regY}`])]; //might be undefined
    if (!Object.keys(layersChanged).includes(`${regY}`)) {
        if (typeof overrideLayer === "object") {
            currentLayer = overrideLayer;
            overrideLayer = undefined;
        } else if (regY < normalLayers.length)
            currentLayer = normalLayers[regY];
        else if (random(1,77) === 33)
            currentLayer = sillyLayer;
        else if (random(1,40) === 20)
            currentLayer = fluteLayer;
        else
            currentLayer = normalLayers[random(normalLayers.length-1)];
        layerProbsSum = addUpLayerProbs(currentLayer);
        layersChanged[`${regY}`] = allLayersNames[allLayers.indexOf(currentLayer)];
    } else if (currentLayer !== lastCurrentLayer) {
        currentLayer = lastCurrentLayer;
        layerProbsSum = addUpLayerProbs(currentLayer);
    }
}
