const oreList = {
    "🐱": { prob: Number.MAX_SAFE_INTEGER },
    "🧌": { prob: 696969696969 },
    "♾️": { prob: 75000000000 },
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
    "🌇": { prob: 4300000000 }, //ADDED
    "💐": { prob: 3750000000 }, //ADDED
    "🪅": { prob: 3250000000 }, //ADDED
    "🎆": { prob: 3000000000 }, //ADDED
    "🌈": { prob: 2750000000 },
    "🏵️": { prob: 2600000000 },
    "💫": { prob: 2000000000 }, //ADDED
    "👁️": { prob: 1920000000 }, //ADDED
    "🪩": { prob: 999999999 }, //ADDED
    "👀": { prob: 955200890 }, //ADDED
    "🥗": { prob: 800000000 }, //ADDED
    "💸": { prob: 754000000 }, //ADDED
    "👿": { prob: 750000000 }, //ADDED
    "⌛": { prob: 750000000 }, //ADDED
    "🪐": { prob: 709000750 }, //ADDED
    "🧀": { prob: 618000001 }, //ADDED
    "🌀": { prob: 618000000 }, //ADDED
    "🧊": { prob: 583000000 }, //ADDED
    "🌌": { prob: 550000000 }, //ADDED
    "🥀": { prob: 538000000 }, //ADDED
    "🥉": { prob: 444444444 }, //ADDED
    "🪞": { prob: 426800050 }, //ADDED
    "🔩": { prob: 420836000 }, //ADDED
    "❄️": { prob: 386500000 }, //ADDED
    "💥": { prob: 375000000 }, //ADDED
    "🏝️": { prob: 275320000 },
    "🌟": { prob: 257280000 }, //ADDED
    "🌪️": { prob: 247010000 }, //ADDED
    "✨": { prob: 240800000 },
    "🌏": { prob: 213200000 }, //ADDED
    "🧵": { prob: 201061929 }, //ADDED
    "📝": { prob: 200000000 }, //ADDED
    "⛄": { prob: 183640000 }, //ADDED
    "💎": { prob: 170000000 }, //ADDED
    "🔥": { prob: 160000000 }, //ADDED
    "🔆": { prob: 75000000 }, //
    "☄️": { prob: 72500000 }, //
    "🌲": { prob: 71000000 }, //
    "⭐": { prob: 70600600 }, //
    "🔱": { prob: 70000000 }, //
    "🎃": { prob: 69000000 }, //
    "🎇": { prob: 67500000 }, //
    "👑": { prob: 65000000 }, //
    "🕯️": { prob: 62500000 }, //
    "🔮": { prob: 60000000 }, //
    "🕋": { prob: 55000000 }, //
    "⌚": { prob: 52000000 }, //
    "🔳": { prob: 46000000 }, //
    "🎨": { prob: 44000000 }, //
    "🧲": { prob: 43500000 }, //
    "🗜️": { prob: 42000000 }, //
    "🏆": { prob: 38000000 }, //
    "🪬": { prob: 37000000 }, //
    "🔋": { prob: 36000000 }, //
    "🎍": { prob: 35000000 }, //
    "🧨": { prob: 31500000 }, //
    "🎀": { prob: 31000000 }, //
    "⏹️": { prob: 29000000 }, //
    "🐟": { prob: 26000000 }, //
    "🔗": { prob: 25000000 }, //
    "💍": { prob: 15000000 }, //
    "🪙": { prob: 15000000 }, //
    "🧩": { prob: 14500000 }, //
    "🎴": { prob: 13450000 }, //
    "🗡️": { prob: 13000000 }, //
    "🎄": { prob: 12500000 }, //
    "🥽": { prob: 12350000 }, //
    "🔔": { prob: 12250000 }, //
    "🗿": { prob: 12000000 }, //
    "🪵": { prob: 10000000 }, //
    "⚗️": { prob: 9750000 }, //
    "🪚": { prob: 9600000 }, //
    "🌻": { prob: 9500000 }, //
    "🪄": { prob: 9460000 }, //
    "🍁": { prob: 8900000 }, //
    "📟": { prob: 8750000 }, //
    "🫧": { prob: 8750000 }, //
    "🤿": { prob: 8670000 }, //
    "🎣": { prob: 8230000 }, //:
    "🥏": { prob: 8000000 }, //
    "🪜": { prob: 7950000 }, //
    "⛵": { prob: 7895000 }, //
    "🎲": { prob: 7777777 }, //
    "🎭": { prob: 7650000 }, //
    "🧪": { prob: 7500000 }, //
    "⚱️": { prob: 7467000 }, //
    "✂️": { prob: 7000000 }, //
    "🖍️": { prob: 6800000 }, //
    "⚜️": { prob: 6250000 }, //
    "💠": { prob: 6000000 }, //
    "🃏": { prob: 5500000 }, //
    "⚙️": { prob: 5000000 }, //
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
    "🪈": { prob: 1 }
}

let inventory = {};

//sets the inventory to 0
for (let ore in oreList)
    inventory[ore] = {"normal": 0, "electrified": 0, "radioactive": 0, "explosive": 0};

//SPAWNS ON ALL LAYERS
const spawnsEverywhere = [/*"😻",*//*"⛄",*/"🤍","🖤","🤎","💜","❤️","🧡","💛","💙","💚","⚫","🟤","🟣","🔴","🟠","🟡","🔵","🟢","🟪","🟥","🟧"],

//ALL LAYERS
dirtLayer = ["🌳","💐","🥗","🌪️","🌏","🌲","🎃","🎍","🎄","🪵","🌻","🍁","🟫"],
brickLayer = ["🏰","🌇","🥉","🪞","🔩","🧲","🪬","🧨","🔗","🪙","🗿","🪚","🪜","🧱"],
foggyLayer = ["🚿","👁️","💸","⌛","🧵","🕯️","🕋","🎨","🎴","🥽","🪄","🎭","🌫️"],
waterLayer = ["🐋","💫","🪩","👿","🌀","🔱","👑","🐟","🫧","🤿","🎣","⛵","🌊"],
rockLayer = ["🏔️","🌈","🧊","❄️","🏝️","✨","⛄","💎","☄️","🔮","🔋","💍","🥏","⚜️","💠","🪨"],
radioactiveLayer = ["⚠️","🎆","🧀","🌌","🥀","🎇","🔳","⏹️","🧩","🔔","⚗️","🧪","☢️"],
cactusLayer = ["🐪","🏵️","🪐","💥","🔥","🔆","⭐","🎀","🗡️","📟","⚱️","🖍️","🌵"],
paperLayer = ["💵","🪅","👀","🌟","📝","⌚","🗜️","🏆","🎲","✂️","🃏","⚙️","📰"],
sillyLayer = ["🧌","♾️","💅","✈️","🪢","🫃","🎂"],
fluteLayer = ["🪈"],

allLayers = [
    dirtLayer,
    brickLayer,
    foggyLayer,
    waterLayer,
    rockLayer,
    radioactiveLayer,
    cactusLayer,
    paperLayer,
    sillyLayer,
    fluteLayer
],

allLayersNames = [
    "Dirt",
    "Brick",
    "Foggy",
    "Water",
    "Rock",
    "Radioactive",
    "Cactus",
    "Paper",
    "Silly",
    "Flute"
];

//SETTING LAYERS

let lastLayerChange = 6000;
let currentLayer = dirtLayer;
function setLayer(y) {
    let regY = y;
    if (regY < 16000) {
        regY = Math.floor(regY / 2000);
        currentLayer = allLayers[regY];
    } else if (y > (lastLayerChange + 10000)) {
        lastLayerChange += 10000;
        if (Math.round(Math.random() * 77) === 33)
            currentLayer = sillyLayer;
        else if (Math.round(Math.random() * 40) === 20)
            currentLayer = fluteLayer;
        else
            currentLayer = allLayers[Math.floor(Math.random() * 8)];
    }
}
