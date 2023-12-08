let mine = [];
let curX = 1000000000;
let curY = 0;
let furthestLeft = 1000000000
let furthestRight = 1000000000;
let currentDisplay = ""
let facing = "down";
let totalMined = 0;
let blocksRevealedThisReset = 0;
const mineCapacity = 40000; // in case this ever needs to be raised
let canMine = false;
let lastDirection = "";
let pickaxes = [
    ["Basic Pickaxe", true],
    ["Advanced Pickaxe", false],
    ["DynAxe", false],
    ["X-Axe", false],
    ["RandAxe", false],
    ["Name5", false],
    ["Name6", false],
    ["Name7", false],
    ["Name8", false]
];
let gears = [false];
let currentPickaxe = 0;
let oreList = {
    "✈️" : [1/9110000000, [0,0,0,0]],
    "🫃" : [1/6600000000, [0,0,0,0]],
    "👁️" : [1/1920000000, [0,0,0,0]], //ADDED
    "🪩" : [1/999999999, [0,0,0,0]], //ADDED
    "👀" : [1/955200890, [0,0,0,0]], //ADDED
    "🥗" : [1/800000000, [0,0,0,0]], //ADDED
    "💸" : [1/754000000, [0,0,0,0]], //ADDED
    "👿" : [1/750000000, [0,0,0,0]], //ADDED
    "⌛" : [1/750000000, [0,0,0,0]], //ADDED
    "🪐" : [1/709000750, [0,0,0,0]], //ADDED
    "🧀" : [1/618000001, [0,0,0,0]], //ADDED
    "🌀" : [1/618000000, [0,0,0,0]], //ADDED
    "🧊" : [1/583000000, [0,0,0,0]], //ADDED
    "🌌" : [1/550000000, [0,0,0,0]], //ADDED
    "🥀" : [1/538000000, [0,0,0,0]], //ADDED
    "🥉" : [1/444444444, [0,0,0,0]], //ADDED
    "🪞" : [1/426800050, [0,0,0,0]], //ADDED
    "🔩" : [1/420836000, [0,0,0,0]], //ADDED
    "❄️" : [1/386500000, [0,0,0,0]], //ADDED
    "💥" : [1/375000000, [0,0,0,0]], //ADDED
    "🌟" : [1/257280000, [0,0,0,0]], //ADDED
    "🌪️" : [1/247010000, [0,0,0,0]], //ADDED
    "🌏" : [1/213200000, [0,0,0,0]], //ADDED
    "📝" : [1/200000000, [0,0,0,0]], //ADDED
    "💎" : [1/170000000, [0,0,0,0]], //ADDED
    "🔥" : [1/160000000, [0,0,0,0]], //ADDED
    "🔆" : [1/75000000, [0,0,0,0]], //
    "☄️" : [1/72500000, [0,0,0,0]], //
    "🌲" : [1/71000000, [0,0,0,0]], //
    "⭐" : [1/70600600, [0,0,0,0]], //
    "🔱" : [1/70000000, [0,0,0,0]], //
    "🎃" : [1/69000000, [0,0,0,0]], //
    "🎇" : [1/67500000, [0,0,0,0]], //
    "👑" : [1/65000000, [0,0,0,0]], //
    "🕯️" : [1/62500000, [0,0,0,0]], //
    "🔮" : [1/60000000, [0,0,0,0]], //
    "🕋" : [1/55000000, [0,0,0,0]], //
    "⌚" : [1/52000000, [0,0,0,0]], //
    "🔳" : [1/46000000, [0,0,0,0]], //
    "🎨" : [1/44000000, [0,0,0,0]], //
    "🧲" : [1/43500000, [0,0,0,0]], //
    "🗜️" : [1/42000000, [0,0,0,0]], //
    "🏆" : [1/38000000, [0,0,0,0]], //
    "🪬" : [1/37000000, [0,0,0,0]], //
    "🔋" : [1/36000000, [0,0,0,0]], //
    "🎍" : [1/35000000, [0,0,0,0]], //
    "🧨" : [1/31500000, [0,0,0,0]], //
    "🎀" : [1/31000000, [0,0,0,0]], //
    "⏹️" : [1/29000000, [0,0,0,0]], //
    "🐟" : [1/26000000, [0,0,0,0]], //
    "🔗" : [1/25000000, [0,0,0,0]], //
    "💍" : [1/15000000,[0,0,0,0]], //
    "🪙" : [1/15000000, [0,0,0,0]], //
    "🧩" : [1/14500000, [0,0,0,0]], //
    "🎴" : [1/13450000, [0,0,0,0]], //
    "🗡️" : [1/13000000, [0,0,0,0]], //
    "🎄" : [1/12500000,[0,0,0,0]], //
    "🥽" : [1/12350000, [0,0,0,0]], //
    "🔔" : [1/12250000, [0,0,0,0]], //
    "🗿" : [1/12000000, [0,0,0,0]], //
    "🪵" : [1/10000000,[0,0,0,0]], //
    "⚗️" : [1/9750000, [0,0,0,0]], //
    "🪚" : [1/9600000, [0,0,0,0]], //
    "🌻" : [1/9500000,[0,0,0,0]], //
    "🪄" : [1/9460000, [0,0,0,0]], //
    "🍁" : [1/8900000,[0,0,0,0]], //
    "📟" : [1/8750000, [0,0,0,0]], //
    "🫧" : [1/8750000,[0,0,0,0]], //
    "🤿" : [1/8670000, [0,0,0,0]], //
    "🎣" : [1/8230000, [0,0,0,0]], //
    "🥏" : [1/8000000,[0,0,0,0]], //
    "🪜" : [1/7950000, [0,0,0,0]], //
    "⛵" : [1/7895000, [0,0,0,0]], //
    "🎲" : [1/7777777,[0,0,0,0]], //
    "🎭" : [1/7650000, [0,0,0,0]], //
    "🧪" : [1/7500000, [0,0,0,0]], //
    "⚱️" : [1/7467000, [0,0,0,0]], //
    "✂️" : [1/7000000,[0,0,0,0]], //
    "🖍️" : [1/6800000, [0,0,0,0]], //
    "⚜️" : [1/6250000,[0,0,0,0]], //
    "💠" : [1/6000000,[0,0,0,0]], //
    "🃏" : [1/5500000,[0,0,0,0]], //
    "⚙️" : [1/5000000,[0,0,0,0]], //
    "🤍": [1/2000000, [0,0,0,0]],
    "🖤": [1/1750000, [0,0,0,0]],
    "🤎": [1/1500000, [0,0,0,0]],
    "💜": [1/1250000, [0,0,0,0]],
    "❤️": [1/1000000, [0,0,0,0]],
    "🧡": [1/950000, [0,0,0,0]],
    "💛": [1/900000, [0,0,0,0]],
    "💙": [1/800000, [0,0,0,0]],
    "💚": [1/750000, [0,0,0,0]],
    "⚫": [1/100, [0,0,0,0]],
    "🟤": [1/90, [0,0,0,0]],
    "🟣": [1/80, [0,0,0,0]],
    "🔴": [1/70, [0,0,0,0]],
    "🟠": [1/60, [0,0,0,0]],
    "🟡": [1/55, [0,0,0,0]],
    "🔵": [1/50, [0,0,0,0]],
    "🟢": [1/45, [0,0,0,0]],
    "🟪": [1/40, [0,0,0,0]],
    "🟥": [1/35, [0,0,0,0]],
    "🟧": [1/30, [0,0,0,0]],
    "🟫" : [1/1, [0,0,0,0]],
    "🧱" : [1/1, [0,0,0,0]],
    "🌫️" : [1/1, [0,0,0,0]],
    "🌊" : [1/1, [0,0,0,0]],
    "🪨" : [1/1, [0,0,0,0]],
    "☢️" : [1/1, [0,0,0,0]],
    "🌵" : [1/1, [0,0,0,0]],
    "📰" : [1/1, [0,0,0,0]],
    "🎂" : [1/1, [0,0,0,0]]
}
//ALL LAYERS
let dirtLayer = {
    "🥗" : 1/800000000,
    "🌪️" : 1/247010000,
    "🌏" : 1/213200000,
    "🌲" : 1/71000000,
    "🎃" : 1/69000000,
    "🎍" : 1/35000000,
    "🎄" : 1/12500000,
    "🪵" : 1/10000000,
    "🌻" : 1/9500000,
    "🍁" : 1/8900000,
    "🤍": 1/2000000, 
    "🖤": 1/1750000, 
    "🤎": 1/1500000, 
    "💜": 1/1250000, 
    "❤️": 1/1000000, 
    "🧡": 1/950000, 
    "💛": 1/900000, 
    "💙": 1/800000, 
    "💚": 1/750000, 
    "⚫": 1/100, 
    "🟤": 1/90, 
    "🟣": 1/80, 
    "🔴": 1/70, 
    "🟠": 1/60, 
    "🟡": 1/55, 
    "🔵": 1/50, 
    "🟢": 1/45, 
    "🟪": 1/40, 
    "🟥": 1/35, 
    "🟧": 1/30, 
    "🟫" : 1/1
}

let brickLayer = {
    "🥉" : 1/444444444, 
    "🪞" : 1/426800050,
    "🔩" : 1/420836000,
    "🧲" : 1/43500000,
    "🪬" : 1/37000000,
    "🧨" : 1/31500000,
    "🔗" : 1/25000000,
    "🪙" : 1/15000000,
    "🗿" : 1/12000000,
    "🪚" : 1/9600000,
    "🪜" : 1/7950000,
    "🤍": 1/2000000, 
    "🖤": 1/1750000, 
    "🤎": 1/1500000, 
    "💜": 1/1250000, 
    "❤️": 1/1000000, 
    "🧡": 1/950000, 
    "💛": 1/900000, 
    "💙": 1/800000, 
    "💚": 1/750000, 
    "⚫": 1/100, 
    "🟤": 1/90, 
    "🟣": 1/80, 
    "🔴": 1/70, 
    "🟠": 1/60, 
    "🟡": 1/55, 
    "🔵": 1/50, 
    "🟢": 1/45, 
    "🟪": 1/40, 
    "🟥": 1/35, 
    "🟧": 1/30, 
    "🧱" : 1/1
}

let foggyLayer = {
    "👁️" : 1/1920000000,
    "💸" : 1/754000000,
    "⌛" : 1/750000000,
    "🕯️" : 1/62500000,
    "🕋" : 1/55000000,
    "🎨" : 1/44000000,
    "🎴" : 1/13450000,
    "🥽" : 1/12350000,
    "🪄" : 1/9460000,
    "🎭" : 1/7650000,
    "🤍": 1/2000000, 
    "🖤": 1/1750000, 
    "🤎": 1/1500000, 
    "💜": 1/1250000, 
    "❤️": 1/1000000, 
    "🧡": 1/950000, 
    "💛": 1/900000, 
    "💙": 1/800000, 
    "💚": 1/750000, 
    "⚫": 1/100, 
    "🟤": 1/90, 
    "🟣": 1/80, 
    "🔴": 1/70, 
    "🟠": 1/60, 
    "🟡": 1/55, 
    "🔵": 1/50, 
    "🟢": 1/45, 
    "🟪": 1/40, 
    "🟥": 1/35, 
    "🟧": 1/30, 
    "🌫️" : 1/1
}

let waterLayer = {
    "🪩" : 1/999999999,
    "👿" : 1/750000000,
    "🌀" : 1/618000000,
    "🔱" : 1/70000000,
    "👑" : 1/65000000,
    "🐟" : 1/26000000,
    "🫧" : 1/8750000,
    "🤿" : 1/8670000,
    "🎣" : 1/8230000,
    "⛵" : 1/7895000,
    "🤍": 1/2000000, 
    "🖤": 1/1750000, 
    "🤎": 1/1500000, 
    "💜": 1/1250000, 
    "❤️": 1/1000000, 
    "🧡": 1/950000, 
    "💛": 1/900000, 
    "💙": 1/800000, 
    "💚": 1/750000, 
    "⚫": 1/100, 
    "🟤": 1/90, 
    "🟣": 1/80, 
    "🔴": 1/70, 
    "🟠": 1/60, 
    "🟡": 1/55, 
    "🔵": 1/50, 
    "🟢": 1/45, 
    "🟪": 1/40, 
    "🟥": 1/35, 
    "🟧": 1/30, 
    "🌊" : 1/1
}

let rockLayer = {
    "🧊" : 1/583000000,
    "❄️" : 1/386500000,
    "💎" : 1/170000000,
    "☄️" : 1/72500000,
    "🔮" : 1/60000000,
    "🔋" : 1/36000000,
    "💍" : 1/15000000,
    "🥏" : 1/8000000,
    "⚜️" : 1/6250000,
    "💠" : 1/6000000,
    "🤍": 1/2000000, 
    "🖤": 1/1750000, 
    "🤎": 1/1500000, 
    "💜": 1/1250000, 
    "❤️": 1/1000000, 
    "🧡": 1/950000, 
    "💛": 1/900000, 
    "💙": 1/800000, 
    "💚": 1/750000, 
    "⚫": 1/100, 
    "🟤": 1/90, 
    "🟣": 1/80, 
    "🔴": 1/70, 
    "🟠": 1/60, 
    "🟡": 1/55, 
    "🔵": 1/50, 
    "🟢": 1/45, 
    "🟪": 1/40, 
    "🟥": 1/35, 
    "🟧": 1/30, 
    "🪨" : 1/1
}

let radioactiveLayer = {
    "🧀" : 1/618000001,
    "🌌" : 1/550000000,
    "🥀" : 1/538000000,
    "🎇" : 1/67500000,
    "🔳" : 1/46000000,
    "⏹️" : 1/29000000,
    "🧩" : 1/14500000,
    "🔔" : 1/12250000,
    "⚗️" : 1/9750000,
    "🧪" : 1/7500000,
    "🤍": 1/2000000, 
    "🖤": 1/1750000, 
    "🤎": 1/1500000, 
    "💜": 1/1250000, 
    "❤️": 1/1000000, 
    "🧡": 1/950000, 
    "💛": 1/900000, 
    "💙": 1/800000, 
    "💚": 1/750000, 
    "⚫": 1/100, 
    "🟤": 1/90, 
    "🟣": 1/80, 
    "🔴": 1/70, 
    "🟠": 1/60, 
    "🟡": 1/55, 
    "🔵": 1/50, 
    "🟢": 1/45, 
    "🟪": 1/40, 
    "🟥": 1/35, 
    "🟧": 1/30, 
    "☢️" : 1/1
}

let cactusLayer = {
    "🪐" : 1/709000750,
    "💥" : 1/375000000,
    "🔥" : 1/160000000,
    "🔆" : 1/75000000,
    "⭐" : 1/70600600,
    "🎀" : 1/31000000,
    "🗡️" : 1/13000000,
    "📟" : 1/8750000,
    "⚱️" : 1/7467000,
    "🖍️" : 1/6800000,
    "🤍": 1/2000000, 
    "🖤": 1/1750000, 
    "🤎": 1/1500000, 
    "💜": 1/1250000, 
    "❤️": 1/1000000, 
    "🧡": 1/950000, 
    "💛": 1/900000, 
    "💙": 1/800000, 
    "💚": 1/750000, 
    "⚫": 1/100, 
    "🟤": 1/90, 
    "🟣": 1/80, 
    "🔴": 1/70, 
    "🟠": 1/60, 
    "🟡": 1/55, 
    "🔵": 1/50, 
    "🟢": 1/45, 
    "🟪": 1/40, 
    "🟥": 1/35, 
    "🟧": 1/30, 
    "🌵" : 1/1
}

let paperLayer = {
    "👀" : 1/955200890,
    "🌟" : 1/257280000,
    "📝" : 1/200000000,
    "⌚" : 1/52000000,
    "🗜️" : 1/42000000,
    "🏆" : 1/38000000,
    "🎲" : 1/7777777,
    "✂️" : 1/7000000,
    "🃏" : 1/5500000,
    "⚙️" : 1/5000000,
    "🤍": 1/2000000, 
    "🖤": 1/1750000, 
    "🤎": 1/1500000, 
    "💜": 1/1250000, 
    "❤️": 1/1000000, 
    "🧡": 1/950000, 
    "💛": 1/900000, 
    "💙": 1/800000, 
    "💚": 1/750000, 
    "⚫": 1/100, 
    "🟤": 1/90, 
    "🟣": 1/80, 
    "🔴": 1/70, 
    "🟠": 1/60, 
    "🟡": 1/55, 
    "🔵": 1/50, 
    "🟢": 1/45, 
    "🟪": 1/40, 
    "🟥": 1/35, 
    "🟧": 1/30, 
    "📰" : 1/1
}

let sillyLayer = {
    "✈️" : 1/9110000000,
    "🫃" : 1/6600000000,
    "🎂" : 1/1
}
let allLayers = [dirtLayer, brickLayer, foggyLayer, waterLayer, rockLayer, radioactiveLayer, cactusLayer, paperLayer, sillyLayer];
function init () {
    createInventory();
    createIndex();
    createMine();
    let playedBefore = localStorage.getItem("playedBefore");
    if (playedBefore) {
        loadData();
    }
    repeatDataSave();
    localStorage.setItem("playedBefore", true);
    localStorage.setItem("game2DataChanges", true);
    createPickaxeRecipes();
    createGearRecipes();
    document.getElementById('dataText').value = "";
    keepRunning();
}
function createMine() {
    for (let r = curY; r < curY + 51; r++) {
        mine.push([]);
        for (let c = curX - 51; c < curX + 51; c++) {
            if (r == 0) {
                mine[r][c] = "🟩";
            } else {
                mine[r][c] = "⬜";
            }
            
        }
    }
    mine[0][1000000000] = "⛏️";
    displayArea();
    checkAllAround(curX, curY, 1);
    displayArea();
}

function movePlayer(dir) {
    if (canMine) {
        switch (dir) {
            case "s":
                    mineBlock(curX, curY + 1, "mining", 1);
                    mine[curY][curX] = "⚪"
                    prepareArea("s");
                    curY++; 
                    mine[curY][curX] = "⛏️";
                    setLayer(curY);
                    lastDirection = "s";
                    break;
            case "w":
                if (curY > 0) {
                    mineBlock(curX, curY - 1, "mining", 1);
                    mine[curY][curX] = "⚪"
                    prepareArea("w");
                    curY--; 
                    mine[curY][curX] = "⛏️";
                    lastDirection = "w";
                    setLayer(curY);
                }  
                break;
            case "a":
                if (curX > 0) {
                    mineBlock(curX - 1, curY, "mining", 1);
                    mine[curY][curX] = "⚪"
                    prepareArea("a");
                    curX--; 
                    mine[curY][curX] = "⛏️";
                    if (curX < furthestLeft) {
                        furthestLeft = curX;
                    }
                    lastDirection = "a";
                }  
                break;
            case "d":
                mineBlock(curX + 1, curY, "mining", 1);
                mine[curY][curX] = "⚪"
                prepareArea("d");
                curX++; 
                mine[curY][curX] = "⛏️";
                    if (curX > furthestRight) {
                        furthestRight = curX;
                    }
                lastDirection = "s";
                break;
            default:
                console.log("wrong key!!");
        }
        displayArea();
    }
    
}

function mineBlock(x, y, cause, luck) {
    if (mine[y][x] != "⚪" && mine[y][x] != "⛏️")  {
        giveBlock(mine[y][x], x, y);
        mine[y][x] = "⚪"
        checkAllAround(x, y, luck);
        totalMined++;
        if (cause != "ability") {
            rollAbilities();
            updateActiveRecipe();
        }
        

    }
    
}
document.addEventListener('keydown', (event) => {
    var name = event.key;
    if (name == "a" || name == "s" || name == "d" || name == "w") {
        clearInterval(loopTimer);
        curDirection = "";
        movePlayer(name);
    }
  }, false);

function prepareArea(facing) {
   let constraints = getParams(50, 50);
   switch(facing) {
    case "a":
        for (let r = curY - constraints[1]; r < curY + 50; r++) {
            if (mine[r][curX - constraints[0]] == undefined) {
                if (r == 0) {
                    mine[r][curX - constraints[0]] = "🟩";
                } else {
                    mine[r][curX - constraints[0]] = "⬜";
                }
            }
        }
        break;
    case "s":
        if (mine[curY + 50] == undefined) {
            mine[curY + 50] = [];
        }
        for (let c = curX - constraints[0]; c < curX + 50; c++) {
            if (mine[curY + 50][c] == undefined) {
                mine[curY + 50][c] = "⬜"
            }
        }
        break;
    case "d":
        for (let r = curY - constraints[1]; r < curY + 50; r++) {
            if (mine[r][curX + 50] == undefined) {
                if (r == 0) {
                    mine[r][curX + 50] = "🟩";
                } else {
                    mine[r][curX + 50] = "⬜";
                }
                
            }
        }
        break;
    case "w":
        if (mine[curY - constraints[1]] == undefined) {
            mine[curY - constraints[1]] = [];
        }
        for (let c = curX - constraints[0]; c < curX + 50; c++) {
            if (mine[curY - constraints[1]][c] == undefined) {
                if (curY - constraints[1] == 0) {
                    mine[curY - constraints[1]][c] = "🟩";
                } else {
                    mine[curY - constraints[1]][c] = "⬜";
                }
            }
        }
        break;
   }
        
}
function displayArea() {
    let output ="";
    let constraints = getParams(7, 7); 
    for (let r = curY - constraints[1]; r <= curY + 7 + (7-constraints[1]); r++) {
        for (let c = curX - constraints[0]; c <= curX + 7 + (7-constraints[0]); c++) {
            output += mine[r][c];
        }
        output += "<br>";
    }
    document.getElementById("blockDisplay").innerHTML = output;
    document.getElementById("mineResetProgress").innerHTML = blocksRevealedThisReset + "/" + mineCapacity + " Blocks Revealed This Reset";
    document.getElementById("blocksMined").innerHTML = totalMined + " Blocks Mined";
    document.getElementById("location").innerHTML = "X: " + (curX - 1000000000) + " | Y: " + (-curY);
  }
  function getParams(distanceX, distanceY, x, y) {
    if (x == undefined) {
        x = curX;
    }
    if (y == undefined) {
        y = curY;
    }
    let displayLeft = 0;
    let displayUp = 0;
    if (x > distanceX) {
        displayLeft = distanceX;
    } else {
        displayLeft = x;
    }
    if (y > distanceY) {
        displayUp = distanceY;
    } else {
        displayUp = y;
    }
    return [displayLeft, displayUp];
  }


  function checkAllAround(x, y, luck) {
        if (x - 1 >= 0) {
            if (mine[y][x - 1] == "⬜") {
                mine[y][x - 1] = generateBlock(luck, [y, x-1]);
                blocksRevealedThisReset++;
            }
        }
        if (mine[y][x + 1] == "⬜") {
                mine[y][x + 1] = generateBlock(luck, [y, x+1]);
                blocksRevealedThisReset++;
            }
        if (mine[y + 1][x] == "⬜") {
                mine[y + 1][x] = generateBlock(luck, [y+1, x]);
                blocksRevealedThisReset++;
            }
        
        if (y - 1 >= 0) {
            if (mine[y - 1][x] == "⬜") {
                mine[y - 1][x] = generateBlock(luck, [y-1, x]);
                blocksRevealedThisReset++;
            }
        }

    if (blocksRevealedThisReset >= 40000) {
        clearInterval(loopTimer);
        blocksRevealedThisReset = 0;
        canMine = false;
        mineReset();
    }
  }

let multis = [1, 50, 250, 500];
let inv;
function giveBlock(type, x, y, fromReset) {
    if (type != "⛏️") {
        inv = 1;
        if (Math.floor(Math.random() * 50) == 25) {
                inv = 2;
            } else if (Math.floor(Math.random() * 250) == 125) {
                inv = 3;
            }   else if (Math.floor(Math.random() * 500) == 250) {
                inv = 4;
            }
        if (type == "🟩") {
                type = "🟫";
        }   
        if (fromReset == undefined) {
            if (Math.round(1/oreList[type][0]) >= 750000) {
                logFind(type, x, y, names[inv - 1], totalMined);
            }
        }
            oreList[type][1][inv - 1]++;
            updateInventory(type, inv);
    }
}
function generateBlock(luck, location) {
      let probabilityTable = currentLayer;
      let blockToGive = "";
      let summedProbability = 0;
      let chosenValue = Math.random();
      chosenValue /= luck;
      for (var propertyName in probabilityTable) {
        summedProbability += probabilityTable[propertyName];
        if (chosenValue < summedProbability) {
          blockToGive = propertyName;
          break;
        }
        }
        if (Math.round(1 / (probabilityTable[blockToGive])) > 5000000000) {
            spawnMessage(blockToGive, location);
            playSound("zenith");
        } else if (Math.round(1 / (probabilityTable[blockToGive])) > 750000000) {
            spawnMessage(blockToGive, location);
            playSound("otherworldly");
        } else if (Math.round(1 / (probabilityTable[blockToGive])) >= 160000000){
            spawnMessage(blockToGive, location);
            playSound("unfathomable");
        } else if (Math.round(1 / (probabilityTable[blockToGive])) >= 25000000) {
            spawnMessage(blockToGive, location);
            playSound("enigmatic");
        } else if (Math.round(1 / (probabilityTable[blockToGive])) >= 5000000) {
            spawnMessage(blockToGive, location);
            playSound("transcendent");
        } else if (Math.round(1 / (probabilityTable[blockToGive])) >= 750000) {
            spawnMessage(blockToGive, location);
            playSound("exotic");
        }
        return blockToGive;
}
let variant = 1;
function updateInventory(type, inv) {
    document.getElementById(type + inv).innerHTML = type + " | 1/" + ((Math.round( 1 / oreList[type][0])) * multis[inv - 1]).toLocaleString() + " | x" + oreList[type][1][inv - 1];
    if (oreList[type][1][inv - 1] > 0) {
        document.getElementById(type + inv).style.display = "block";
    } else {
        document.getElementById(type + inv).style.display = "none";
    }
}

let names = ["Normal", "Electrified", "Radioactive", "Explosive"];
function switchInventory(){ 
    document.getElementById(("inventory") + variant).style.display = "none";
  if (variant == 4) {
    variant = 1;
  } else {
    variant++;
  }
  document.getElementById(("inventory") + variant).style.display = "block";
  document.getElementById("switchInventory").innerHTML = names[variant - 1] + " Inventory"
  document.getElementById("indexDisplay").style.display = "none";
  document.getElementById("showIndex").innerHTML = "Show Index";
  showing = false;
}

function resetMine() {
    clearInterval(loopTimer);
    curDirection = "";
    mine = [[]];
    curX = 1000000000;
    curY = 0;
    blocksRevealedThisReset = 0;
    currentLayer = allLayers[0];
    createMine();
    document.getElementById("mineResetProgress").innerHTML = blocksRevealedThisReset + "/" + mineCapacity + " Blocks Revealed This Reset";
}

function playSound(type) {
    let audio;
    switch (type) {
        case "exotic":
            chill.volume = 1;
            chill.currentTime = 0;
            chill.play();
            break;
        case "transcendent":
            ringing.volume = 0.6;
            ringing.currentTime = 0;
            ringing.play();
            break;
        case "enigmatic":
            visionblur.volume = 0.6;
            visionblur.currentTime = 0;
            visionblur.play();
            break;
        case "unfathomable":
            unfath.volume = 0.6;
            unfath.currentTime = 0;
            unfath.play();
            break;
        case "otherworldly":
            ow.volume = 0.6;
            ow.currentTime = 0;
            ow.play();
            break;
        case "zenith":
            zenith.volume = 0.6;
            zenith.currentTime = 0;
            zenith.play();
            break;
        }
  }
  let visionblur;
  let unfath;
  let ow;
  let ringing;
  let chill;
  let keepRunningAudio;
function loadContent() {
    allAudios = [];
    keepRunningAudio = new Audio("ambiencebyx2corp.mp3")
    keepRunningAudio.load();
    chill = new Audio("Achillgoesdownyourspine.mp3");
    ringing = new Audio("Transcendent.mp3");
    visionblur = new Audio("Yourvisionbeginstoblur.mp3");
    unfath = new Audio("Unfathsound.mp3");
    ow = new Audio("Otherworldly.mp3");
    zenith = new Audio("Zenithsound.mp3");
    allAudios.push(chill);
    allAudios.push(ringing);
    allAudios.push(visionblur);
    allAudios.push(unfath);
    allAudios.push(ow);
    allAudios.push(zenith);
    
    for (let i = 0; i < allAudios.length; i++) {
        allAudios[i].load();
    }
    document.getElementById("pressPlay").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
    canMine = true;
    init();
}


  let loopTimer = null;
  let curDirection = "";
  function goDirection(direction) {
    if (curDirection == direction) {
        clearInterval(loopTimer);
        curDirection = ""
    } else {
        clearInterval(loopTimer);
        loopTimer = setInterval(movePlayer, 25, direction);
        curDirection = direction;
    }
  }

function createInventory() {
    for (var propertyName in oreList) {
        for (let i = 1; i < 5; i++) {
            let tempElement = document.createElement('p');
            tempElement.id = (propertyName + i);
            tempElement.classList = "oreDisplay";
            tempElement.style.display = "none";
            tempElement.innerHTML = propertyName + " | 1/" + ((Math.round( 1 / oreList[propertyName][0])).toLocaleString() * multis[i - 1]).toLocaleString() + " | x" + oreList[propertyName][1][i - 1];
            document.getElementById(("inventory") + i).appendChild(tempElement);
        }
    }
}
function createIndex() {
    let output = "";
    for (let i = 0; i < allLayers.length - 1; i++) {
        for (var propertyName in allLayers[i]) {
            if ((Math.round(1/(oreList[propertyName][0]))) <=1 || (Math.round(1/(oreList[propertyName][0]))) >2000000) {
                output += propertyName + " | 1/" + (Math.round(1/(oreList[propertyName][0]))).toLocaleString() + " | " + (i * 2000) + "-" + ((i+1) * 2000) + "m<br>";
            }
        }
        output += "--------------<br>"
    }
    for (var propertyName in oreList) {
        if (Math.round(1/(oreList[propertyName][0]) <= 2000000 && Math.round(1/(oreList[propertyName][0]) > 1))) {
            output += propertyName + " | 1/" + (Math.round(1/(oreList[propertyName][0]))).toLocaleString() + " | Everywhere<br>";
        }
    }
    document.getElementById("indexDisplay").innerHTML = output;
}
let showing = false;
function showIndex() {
    if (showing) {
        document.getElementById("indexDisplay").style.display = "none";
        document.getElementById("showIndex").innerHTML = "Show Index";
        document.getElementById("inventory" + (variant)).style.display = "block";
        showing = false;
    } else {
        document.getElementById("indexDisplay").style.display = "block";
        document.getElementById("showIndex").innerHTML = "Show Inventory";
        document.getElementById("inventory" + (variant)).style.display = "none";
        showing = true;
    }
}
let spawnOre;
let latestSpawns = [];
function spawnMessage(block, location) {
    let output = "";
    latestSpawns.push([block, location[1], location[0]]);
    if (latestSpawns.length > 10) {
        latestSpawns.splice(0, 1);
    }
    for (let i = latestSpawns.length - 1; i >= 0; i--) {
        output += latestSpawns[i][0] + " 1/" + (Math.round(1 / (oreList[latestSpawns[i][0]][0]))).toLocaleString();
        if (currentPickaxe == 5 || gears[0]) {
            output += " | X: " + (latestSpawns[i][1] - 1000000000) + ", Y: " + -(latestSpawns[i][2]) + "<br>";
        } else {
            output += "<br>";
        }
    }
    document.getElementById("latestSpawns").innerHTML = output;
    if (currentPickaxe == 5 || gears[0]) {
        document.getElementById("spawnMessage").innerHTML = block + " Has Spawned!<br>" + "1/" + (Math.round(1 / (oreList[block][0]))).toLocaleString() + "<br>X: " + (location[1] - 1000000000) + " | Y: " + -(location[0]);
    } else {
        document.getElementById("spawnMessage").innerHTML = block + " Has Spawned!<br>" + "1/" + (Math.round(1 / (oreList[block][0]))).toLocaleString();
    }
    clearTimeout(spawnOre);
    spawnOre = setTimeout(() => {
        document.getElementById("spawnMessage").innerHTML = "Spawn Messages Appear Here!"
      }, 20000);
}
function moveOne(dir) {
    clearInterval(loopTimer);
    movePlayer(dir);
    curDirection = "";
}

async function mineReset() {
    let temp = curDirection;
    curDirection = "";
    let temp2 = await collectOres(temp);
    canMine = await mineResetAid();
    checkAllAround(curX, curY, 1);
    mine[curY][curX] = "⛏️"
    displayArea();
    console.log(temp);
    goDirection(temp);
}
function collectOres(temp) {
    return new Promise((resolve) => {
        let direction = "";
        if (temp != "") {
            direction = temp;
        } else if (lastDirection != "") {
            direction = lastDirection;
        }
        if (direction == "s") {
            let constraints = getParams(20, 250);
            for (let r = curY - 20; r < curY + constraints[1]; r++) {
                for (let c = curX - constraints[0]; c < curX + 20; c++) {
                    if (mine[r] != undefined) {
                        if (oreList[mine[r][c]] != undefined) {
                            if (Math.round(1 / (oreList[mine[r][c]][0])) >= 750000) {
                                giveBlock(mine[r][c], 0, 0, true);
                            }
                        }
                    }
                }
            }
        } else if (direction == "w") {
            let constraints = getParams(20, 20);
            for (let r = curY - constraints[1]; r < curY + 250; r++) {
                for (let c = curX - constraints[0]; c < curX + 20; c++) {
                    if (mine[r] != undefined) {
                        if (oreList[mine[r][c]] != undefined) {
                            if (Math.round(1 / (oreList[mine[r][c]][0])) >= 750000) {
                                giveBlock(mine[r][c], 0, 0, true);
                            }
                        }
                    }
                }
            }
        } else if (direction == "a") {
            let constraints = getParams(20, 20);
            for (let r = curY - constraints[1]; r < curY + 20; r++) {
                for (let c = curX - constraints[0]; c < curX + 250; c++) {
                    if (mine[r] != undefined) {
                        if (oreList[mine[r][c]] != undefined) {
                            if (Math.round(1 / (oreList[mine[r][c]][0])) >= 750000) {
                                giveBlock(mine[r][c], 0, 0, true);
                            }
                        }
                    }
                }
            }
        } else if (direction == "d") {
            let constraints = getParams(250, 20);
            for (let r = curY - constraints[1]; r < curY + 20; r++) {
                for (let c = curX - constraints[0]; c < curX + 20; c++) {
                    if (mine[r] != undefined) {
                        if (oreList[mine[r][c]] != undefined) {
                            if (Math.round(1 / (oreList[mine[r][c]][0])) >= 750000) {
                                giveBlock(mine[r][c], 0, 0, true);
                            }
                        }
                    }
                }
            }
        }
        setTimeout(() => {
        resolve(true);
        }, 1000);
        });
}
function mineResetAid() {
    return new Promise((resolve) => {
        setTimeout(() => {
            mine = [[]];
            curX = 1000000000;
            let x = 1000000000;
            let y = curY;
            for (let r = y - 50; r < y + 50; r++) {
                if(mine[r] == undefined) {
                    mine[r] = [];
                }
                for (let c = x - 50; c < x + 50; c++) {
                    mine[r][c] = "⬜";
                }
            }    
            checkAllAround(curX, curY, 1);
        }, 500);
        setTimeout(() => {
        resolve(true);
        }, 1500);
        });
}
let latestFinds = [];
function logFind(type, x, y, variant, atMined) {
    let output = "";
    latestFinds.push([type, x, y, variant, atMined]);
    if (latestFinds.length > 10) {
        latestFinds.splice(0, 1);
    }
    for (let i = latestFinds.length - 1; i >= 0; i--) {
        if (latestFinds[i][3] != "Normal") {
            output += latestFinds[i][3] + " ";
        }
        output += latestFinds[i][0] + " | X: " + (latestFinds[i][1] - 1000000000) + ", Y: " + -(latestFinds[i][2]) + " | At " + latestFinds[i][4].toLocaleString() +  " Mined.<br>";
    }
    document.getElementById("latestFinds").innerHTML = output;
}
let lastLayerChange = 6000;
let currentLayer = dirtLayer;
function setLayer(y) {
    let tempNum = y;
    if (tempNum <= 14000) {
    tempNum = Math.floor(tempNum / 2000);
    currentLayer = allLayers[tempNum];
    } else if (y > (lastLayerChange + 10000)) {
        lastLayerChange += 10000;
        if (Math.round(Math.random() * 77) == 33) {
            currentLayer = sillyLayer;
        } else {
            currentLayer = allLayers[Math.floor(Math.random() * 8)];
        }
    }
}

async function teleport() {
    canMine = false;
    clearInterval(loopTimer);
    curDirection = "";
    canMine = await toLocation();
    displayArea();
}

function toLocation() {
    return new Promise((resolve) => {
    let x = curX;
    let y = document.getElementById("meterDisplay").innerHTML;
    y = Number(y.substring(0, y.length - 1));
    y += 50;
    for (let r = y - 50; r < y + 50; r++) {
        if(mine[r] == undefined) {
            mine[r] = [];
        }
        for (let c = x - 50; c < x + 50; c++) {
            mine[r][c] = "⬜";
        }
    }    
    setLayer(y - 50);
    curX = x;
    curY = y;
    checkAllAround(curX, curY, 1);
    mine[curY][curX] = "⛏️"; 
    
    setTimeout(() => {
    resolve(true);
    }, 1000);
    });
}
let distanceMulti = 2;
function switchDistance() {
    let y = document.getElementById("meterDisplay").innerHTML;
    y = Number(y.substring(0, y.length - 1));
    if (y < 14000) {
        y = 2000 * distanceMulti;
        distanceMulti ++;
    } else {
        y = 2000;
        distanceMulti = 2;
    }
    document.getElementById("meterDisplay").innerHTML = y + "m";
}

function keepRunning() {
    keepRunningAudio.loop = true;
    keepRunningAudio.volume = 0.05;
    keepRunningAudio.play();
}

function changeMusicVolume(percent) {
    keepRunningAudio.volume = 0.05 * (percent / 100);
}

function toggleMusic() {
    if (keepRunningAudio.paused) {
        keepRunningAudio.play();
        document.getElementById("musicButton").innerHTML = "Mute Music";
    } else {
        keepRunningAudio.pause();
        document.getElementById("musicButton").innerHTML = "Unmute Music";
    }
}
