const debug = window.location.href.match(/^https?:\/\/127\.0\.0\.1:\d{4}/) !== null;
let debugLuck = "",
    currLuck = 1,
    mine = [], //[y, x]
    curX = 1000000000, //large for a reason
    curY = 0,
    currentDisplay = "",
    totalMined = 0,
    blocksRevealedThisReset = 0,
    mineCapacity = 40000, // in case this ever needs to be raised
    canMine = false,
    lastDirection = "";

let pickaxes = {
    0: true,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false
};
const pickaxeDescriptions = {
    0: "how are you even reading this",
    1: "Mines a few blocks in every cardinal direction.<br>Has an ability proc rate of 1/30.<br>Has 1.2x luck.",
    2: "Mines a small square around the player.<br>Has an ability proc rate of 1/35.<br>Has 1.35x luck.",
    3: "Mines blocks in an X shape around the player.<br>Has an ability proc rate of 1/30.<br>Has 1.8x luck.",
    4: "Mines a square randomly around the player.<br>Has an ability proc rate of 1/25.<br>Has 2x luck.",
    5: "Mines a circle randomly around the player.<br>Has an ability proc rate of 1/17.<br>Has 5x luck.",
    6: "Has 2 abilities.<br>Ability 1 mines a triangle around the player.<br>Ability 2 mines a heart around the player.<br>Ability 1 has a 1/60 proc rate.<br>Ability 2 has a 1/40 proc rate.<br>Both abilities have 10x luck.",
    7: "Mines a few blocks in every direction. However, each line has a chance to re-activate the ability from the end of said line with a 75% chance and up to 4 times.<br>Has an ability proc rate of 1/50.<br>Has 3x luck.",
    8: "Mines blocks in an X shape around the player, with each end having a chance to re-activate the ability at that position with a 75% chance and up to 4 times.<br>Has an ability proc rate of 1/50.<br>Has 4x luck.",
    9: "Mines the shape of a clover around the player.<br>Has an ability proc rate of 1/30.<br>Has 20x luck.",
    10: "Has a 50% chance to mine a 7x7 square in a 49x49 area around the player, with an average of 24 7x7 squares being mined each activation.<br>Has an ability proc rate of 1/50.<br>Has 17.5x luck."
};
let gears = {
    "ore-tracker": false,
    "real-candilium": false,
    "real-vitriol": false,
    "infinity-collector": false,
    "layer-materializer": false,
    "fortune-3-book": false,
    "haste-2-beacon": false,
    "energy-siphoner": false,
    "sugar-rush": false,
    "silly-tp": false
};
const gearDescriptions = {
    "ore-tracker": "Tracks the location of new ore spawns.",
    "real-candilium": "Boosts ability luck by 1.1x.",
    "real-vitriol": "Sets mining speed delay to 15ms from 25ms.",
    "infinity-collector": "Increases ability proc rates by 20%.",
    "layer-materializer": "For every block mined, gives you an additional layer block from the current layer.<br>Can duplicate layer blocks.",
    "fortune-3-book": "Increases ability luck by 1.6x. Stacks with Real Candilium.",
    "haste-2-beacon": "Sets mining speed delay to 10ms from 25ms.<br>Takes priority over Real Vitriol.",
    "energy-siphoner": "Boosts mining speed slightly upon mining any exotic+ ore (1/750k+).",
    "sugar-rush": "Mines all rare ores in the mine upon mine reset.",
    "silly-tp": ":3<br>Instantly teleports you to the silly layer."
};
let gearNames = Object.keys(gears);
let gearNamesNormalized = {
    "ore-tracker": "Ore Tracker",
    "real-candilium": "Real Candilium",
    "real-vitriol": "Real Vitriol",
    "infinity-collector": "Infinity Collector",
    "layer-materializer": "Layer Materializer",
    "fortune-3-book": "Fortune III Book",
    "haste-2-beacon": "Haste II Beacon",
    "energy-siphoner": "Energy Siphoner",
    "sugar-rush": "Sugar Rush",
    "silly-tp": "Silly TP"
};
let currentPickaxe = 0;

function visible(element) {
    element.classList.remove("invisible");
}
function invisible(element) {
    element.classList.add("invisible");
}
function togglevisible(element) {
    element.classList.toggle("invisible");
}
function isVisible(element) {
    return !element.classList.contains("invisible");
}

function snakeToCamel(str, startUpper) {
    const snake = str.toLowerCase();
    let camel = "";
    let detect = startUpper !== null ? startUpper : false;
    for (let i = 0; i < snake.length; i++) {
        let letter = snake.substring(i,i+1);
        if (letter === "-" || letter === "_") detect = true;
        else if (detect) {
            if (letter !== "-" && letter !== "_") {
                detect = false;
                camel += letter.toUpperCase();
            }
        } else camel += letter.toLowerCase();
    }
    return camel;
}
function capitalize(str) {
    return str.replace(/(?:^|\s)\S/g, function (match) {
        return match.toUpperCase();
    });
}
function normalize(str, cap) {
    const space = str.replace(/[-_]/g, " ").replace(/\d+/, function(match) {
        return romanize(match);
    });
    return cap ? capitalize(space) : space;
}
function romanize(num) {
    if (num >= 4000) return;
    if (num % 1 !== 0) num = Math.round(num);
    const roman = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    let str = "";
    for (let i of Object.keys(roman)) {
        const q = Math.floor(num / roman[i]);
        num -= q * roman[i];
        str += i.repeat(q);
    }
    return str;
}

//IMPORTANT

function init() {
    let canContinue = false;
    createInventory();
    createIndex();
    createMine();
    const playedBefore = localStorage.getItem("playedBefore");
    canContinue = playedBefore ? loadAllData() : true;
    if (canContinue) {
        repeatDataSave();
        localStorage.setItem("playedBefore", true);
        localStorage.setItem("game2DataChanges", true);
        createPickaxeRecipes();
        createGearRecipes();
        document.getElementById("dataText").value = "";
    }
    for (let element of document.getElementsByClassName("itemDescription"))
        invisible(element)
}

document.addEventListener('DOMContentLoaded', () => {
    visible(document.getElementById("playButton"));
});

let chill,
    ringing,
    visionblur,
    unfath,
    ow,
    magnificent,
    zenith,
    keepRunningAudio;
function loadContent() {
    let allAudios = [];
    keepRunningAudio = new Audio("sounds/ambience.mp3")
    keepRunningAudio.load();
    keepRunning();
    chill = new Audio("sounds/spinechill.mp3");
    ringing = new Audio("sounds/transcendent.mp3");
    visionblur = new Audio("sounds/visionblur.mp3");
    unfath = new Audio("sounds/unfathomable.mp3");
    ow = new Audio("sounds/otherworldly.mp3");
    zenith = new Audio("sounds/zenith.mp3");
    magnificent = new Audio("sounds/magnificent.mp3")
    allAudios.push(chill);
    allAudios.push(ringing);
    allAudios.push(visionblur);
    allAudios.push(unfath);
    allAudios.push(ow);
    allAudios.push(magnificent);
    allAudios.push(zenith);
    chill.volume = 1;
    ringing.volume = 0.4;
    visionblur.volume = 0.6;
    unfath.volume = 0.6;
    ow.volume = 0.6;
    magnificent.volume = 1;
    zenith.volume = 0.6;
    
    for (let i = 0; i < allAudios.length; i++)
        allAudios[i].load();
    invisible(document.getElementById("pressPlay"));
    visible(document.getElementById("mainContent"));
    canMine = true;
    init();
}

//MOVEMENT

function movePlayer(dir) {
    if (canMine) {
        switch (dir) {
            case "s":
                mineBlock(curX, curY + 1, "mining", 1);
                mine[curY][curX] = "⚪";
                prepareArea("s");
                curY++;
                mine[curY][curX] = "⛏️";
                setLayer(curY);
                lastDirection = "s";
                break;
            case "w":
                if (curY > 0) {
                    mineBlock(curX, curY - 1, "mining", 1);
                    mine[curY][curX] = "⚪";
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
                    mine[curY][curX] = "⚪";
                    prepareArea("a");
                    curX--;
                    mine[curY][curX] = "⛏️";
                    lastDirection = "a";
                }
                break;
            case "d":
                mineBlock(curX + 1, curY, "mining", 1);
                mine[curY][curX] = "⚪";
                prepareArea("d");
                curX++;
                mine[curY][curX] = "⛏️";
                lastDirection = "s";
                break;
            /*default:
                console.log("wrong key!!");*/
        }
        displayArea();
    }
}

function random() {
    return Math.random();
}
function random(upper) {
    return Math.floor(Math.random()*(upper+1));
}
function random(lower, upper) {
    return Math.floor(Math.random()*(upper-lower+1)+lower);
}

function searchObj(arr, x, start, end) {
    let mid = Math.floor((start + end) * 0.5);
    if (start > end || arr[mid] === x)
        return mid + 1;
    else if (arr[mid] > x)
        return searchObj(arr, x, start, mid - 1);
    else
        return searchObj(arr, x, mid + 1, end);
}

function sortOres(layer) {
    let sortedores = [];
    let sortedprobs = [];
    for (let ore of layer) {
        const index = searchObj(sortedprobs, oreList[ore]["prob"], 0, sortedprobs.length-1);
        sortedprobs.splice(index, 0, oreList[ore]["prob"]);
        sortedores.splice(index, 0, ore);
    }
    return sortedores.reverse();
}

let holdingShift = true;
document.addEventListener("keydown", (event) => {
    const name = event.key.toLowerCase();
    let validInput = false;
    switch(name) {
        case "shift":
            holdingShift = true;
            break;
        case "w":
            validInput = true;
            break;
        case "a":
            validInput = true;
            break;
        case "s":
            validInput = true;
            break;
        case "d":
            validInput = true;
            break;
        case "arrowup":
            event.preventDefault();
            validInput = true;
            name = "w";
            break;
        case "arrowleft":
            event.preventDefault();
            validInput = true;
            name = "a";
            break;
        case "arrowdown":
            event.preventDefault();
            validInput = true;
            name = "s";
            break;
        case "arrowright":
            event.preventDefault();
            validInput = true;
            name = "d";
            break;
        /*default:
            console.log("wrong key!");
            break;*/
    }
    if (validInput) {
        clearInterval(loopTimer);
        currDirection = "";
        movePlayer(name);
        if (ability1Active) {
            clearTimeout(ability1Timeout);
            ability1Active = false;
        }
    }
}, false);
document.addEventListener("keyup", (event) => {
    const name = event.key.toLowerCase();
    console.log(name);
    switch(name) {
        case "shift":
            holdingShift = false;
            break;
    }
}, false);

let loopTimer = null,
    currDirection = "",
    miningSpeed = 25;
function goDirection(direction, speed) {
    if (currDirection === direction) {
        clearInterval(loopTimer);
        currDirection = "";
        if (ability1Active) {
            clearTimeout(ability1Timeout);
            ability1Active = false;
        }
    } else {
        clearInterval(loopTimer);
        if (speed === undefined) {
            if (gears["real-vitriol"]) miningSpeed = 15;
            if (gears["haste-2-beacon"]) miningSpeed = 10;
        } else miningSpeed = speed;
        loopTimer = setInterval(movePlayer, miningSpeed, direction);
        currDirection = direction;
    }
}

function moveOne(dir, button) {
    button.disabled = true;
    clearInterval(loopTimer);
    setTimeout(() => {
        movePlayer(dir);
    }, 15);
    currDirection = "";
    setTimeout(() => {
        button.disabled = false;
    }, 100);
}

//DISPLAY

let canDisplay = true;
function changeCanDisplay(button) {
    let blockDisplay = document.getElementById("blockDisplay");
    if (button.innerHTML.includes("Disable")) {
        button.innerHTML = "Enable Display";
        canDisplay = false;
        blockDisplay.innerHTML = "DISABLED";
        blockDisplay.style.letterSpacing = 0;
    } else {
        button.innerHTML = "Disable Display";
        canDisplay = true;
        blockDisplay.style.letterSpacing = "";
        displayArea();
    }
}
function displayArea() {
    if (canDisplay) {
        let output = "";
        const constraints = getParams(9, 9);
        for (let y = curY - constraints["up"]; y <= curY + 9 + (9-constraints["up"]); y++) {
            for (let x = curX - constraints["left"]; x <= curX + 9 + (9-constraints["left"]); x++)
                output += mine[y][x];
            output += "<br>";
        }
        document.getElementById("blockDisplay").innerHTML = output;
    }
    document.getElementById("mineResetProgress").innerHTML = `Reset Progress: ${(blocksRevealedThisReset/mineCapacity*100).toFixed(2)}%`;
    document.getElementById("blocksMined").innerHTML = `${totalMined.toLocaleString()} Blocks Mined`;
    document.getElementById("location").innerHTML = `X: ${curX - 1000000000}<br>Y: ${-curY}`;
}

//HTML EDITING

let currVariant = 1;
const variantNames = ["Normal", "Electrified", "Radioactive", "Explosive"];
const variantNamesEmojis = ["", "⚡️", "☢️", "💥"];
function switchInventory() {
    invisible(document.getElementById(`inventory${variantNames[currVariant-1]}`));
    currVariant = currVariant >= 4 ? 1 : ++currVariant;
    visible(document.getElementById(`inventory${variantNames[currVariant-1]}`));
    document.getElementById("switchInventory").innerHTML = `${variantNames[currVariant-1]} Inventory`;
    invisible(document.getElementById("indexDisplay"));
    document.getElementById("showIndex").innerHTML = "Show Index";
    showing = false;
}

function createInventory() {
    for (let ore in oreList) {
        for (let variant of variantNames) {
            let element = document.createElement("p");
            element.id = ore + variant;
            element.classList.add("oreDisplay");
            /*if (variant !== "Normal")*/
            invisible(element);
            element.innerHTML = `<span class="emoji">${ore}</span> | 1/${(oreList[ore]["prob"].toLocaleString() * variantMultis[variant.toLowerCase()]).toLocaleString()} | x${inventory[ore][variant.toLowerCase()].toLocaleString()}`;
            document.getElementById(`inventory${variant}`).appendChild(element);
        }
    }
}

function createIndex() {
    let prob = 0;
    let output = "";
    for (let i = 0; i < allLayers.length; i++) {
        output += `<div class="layerDisplay" id="layerDisplay${allLayersNames[i]}"><p class="oreTitle">${allLayersNames[i]} Layer`;
        if (i < allLayers.length - 2)
            output += ` (${i * 2000}-${(i+1) * 2000}m)`;
        output += "</p>";
        for (let ore of allLayers[i]) {
            prob = oreList[ore]["prob"];
            //if (prob > 2000000 && prob < 5000000000)
            output += `<p class="oreDisplay"><span class="emoji">${ore}</span> | 1/${prob.toLocaleString()}</p>`;
        }
        output += `</div>`;
    }
    output += `<div class="layerDisplay" id="layerDisplayEverywhere"><p class="oreTitle">Everywhere</p>`;
    for (let ore of spawnsEverywhere)
        output += `<p class="oreDisplay"><span class="emoji">${ore}</span> | 1/${oreList[ore]["prob"].toLocaleString()}</p>`;
    document.getElementById("indexDisplay").innerHTML = output;
    //don't hardcode this in future when other hidden layers get added
    if (inventory["🎂"]["normal"] > 0 || gears["silly-tp"])
        visible(document.getElementById("layerDisplaySilly"));
    else
        invisible(document.getElementById("layerDisplaySilly"));
    if (inventory["🪈"]["normal"] > 0)
        visible(document.getElementById("layerDisplayFlute"));
    else
        invisible(document.getElementById("layerDisplayFlute"));
}

let showing = false;
function showIndex() {
    if (showing) {
        invisible(document.getElementById("indexDisplay"));
        document.getElementById("showIndex").innerHTML = "Show Index";
        visible(document.getElementById("inventory" + variantNames[currVariant-1]));
        showing = false;
    } else {
        visible(document.getElementById("indexDisplay"));
        document.getElementById("showIndex").innerHTML = "Show Inventory";
        invisible(document.getElementById("inventory" + variantNames[currVariant-1]));
        showing = true;
    }
}

function updateInventory(ore, variant) {
    document.getElementById(ore + capitalize(variant)).innerHTML = `<span class="emoji">${ore}</span> | 1/${(oreList[ore]["prob"] * variantMultis[variant.toLowerCase()]).toLocaleString()} | x${inventory[ore][variant.toLowerCase()].toLocaleString()}`;
    if (inventory[ore][variant.toLowerCase()] > 0)
        visible(document.getElementById(ore + capitalize(variant)));
    else
        invisible(document.getElementById(ore + capitalize(variant)));
}

//SPAWNS AND FINDS

let spawnOre;
let loggedFinds = [];
let latestSpawns = [];
function spawnMessage(ore, location) {
    if (!gears["real-vitriol"] && blocksRevealedThisReset > mineCapacity - 10000 && mineCapacity < 120000)
        mineCapacity += 10000;
    let output = "";
    let addToLatest = true;
    if (currentPickaxe === 5 || gears["ore-tracker"])
        latestSpawns.push({ore: ore, y: location["y"], x: location["x"]});
    else if (currentPickaxe < 6 || oreList[ore]["prob"] > 2000000)
        latestSpawns.push({ore: ore, y: undefined, x: undefined});
    else addToLatest = false;
    if (gears["real-vitriol"]) loggedFinds.push({y: location["y"], x: location["x"]});
    if (latestSpawns.length > 10) latestSpawns.splice(0, 1);
    if (addToLatest) {
        for (let i in latestSpawns) {
            output += `<span class="emoji">${latestSpawns[i]["ore"]}</span> 1/${oreList[latestSpawns[i]["ore"]]["prob"].toLocaleString()}`;
            if (latestSpawns[i]["y"] !== undefined && latestSpawns[i]["x"] !== undefined)
                output += ` | X: ${latestSpawns[i]["x"] - 1000000000}, Y: ${-latestSpawns[i]["y"]}<br>`;
            else output += "<br>";
        }
        document.getElementById("latestSpawns").innerHTML = output;
        if (currentPickaxe === 5 || gears["ore-tracker"])
            document.getElementById("spawnMessage").innerHTML = `<span class="emoji">${ore}</span> Has Spawned!<br> 1/${oreList[ore]["prob"].toLocaleString()}<br>X: ${location["x"] - 1000000000}<br>Y: ${-location["y"]}`;
    }
    clearTimeout(spawnOre);
    spawnOre = setTimeout(() => {
        document.getElementById("spawnMessage").innerHTML = "Spawn Messages Appear Here!";
    }, 20000);
}

let latestFinds = [];
function logFind(type, x, y, variant, atMined, fromReset) {
    let output = "";
    latestFinds.push({type: type, x: x, y: y, variant: variant, atMined: atMined, fromReset: fromReset});
    if (latestFinds.length > 10) latestFinds.shift();
    for (let i = latestFinds.length - 1; i >= 0; i--) {
        output += `${latestFinds[i]["variant"]}${latestFinds[i]["type"]} | X: ${latestFinds[i]["x"] - 1000000000}, Y: ${-latestFinds[i]["y"]} | `;
        if (latestFinds[i]["fromReset"]) output += "FROM RESET<br>";
        else output += `At ${latestFinds[i]["atMined"].toLocaleString()} Mined<br>`;
    }
    document.getElementById("latestFinds").innerHTML = output;
}
