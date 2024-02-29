// this is actually really smart but im psure you can just access debug by fucking up with the functions and shit
const debug = window.location.href.match(/^(?:https?:\/\/(?:127\.0\.0\.1|localhost)):\d{4,}/) !== null;

//let debug = false;
let isPlaying = false;
let debugLuck = "";
let debugActuallyPlaying = false;
let currLuck = 1;
let mine = []; //[y][x]
let curX = 1000000000; //large for a reason
let curY = 0;
let currentDisplay = "";
let totalMined = 0;
let totalResets = 0;
let blocksRevealedThisReset = 0;
let mineCapacity = 40000; // in case this ever needs to be raised
let baseMineCapacity = 40000;
let canMine = false;
let lastDirection = "";
let resetsThisSession = 0;
let warnClose = true;
let autoSave = true;
let caveToggle = true;
let turnOffAbilities = false;
let debugVerbose = debug;
let stopOnRare = false;
let totalTimePlayed = 0;


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
    "infinity-collector": "Attempts to mine all rare ores in the mine upon mine reset.<br>75% chance per ore.",
    "layer-materializer": "For every block mined, gives you an additional layer block from the current layer.<br>Can duplicate layer blocks.",
    "fortune-3-book": "Increases ability luck by 1.6x. Stacks with Real Candilium.",
    "haste-2-beacon": "Sets mining speed delay to 10ms from 25ms.<br>Takes priority over Real Vitriol.",
    "energy-siphoner": "Boosts mining speed slightly upon mining any exotic+ ore (1/750k+).",
    "sugar-rush": "Increases ability proc rates by 20%.",
    "silly-tp": ":3<br>Instantly teleports you to the silly layer."
};
const gearNames = Object.keys(gears);
const gearNamesNormalized = {
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
let currentPickaxe = "ol-faithful";
let currentGears = [];

/*
Object.defineProperty(Array.prototype, 'contains', {
    value: function(any) {
        return this.indexOf(any) !== -1;
    }
});
*/

function debugGiveAllOres(type) {
    if (debug) {
        if (typeof pickaxeRecipes[type] === "object") {
            const pick = type;
            for (let ingredient in pickaxeRecipes[pick]) {
                inventory[ingredient]["normal"] += pickaxeRecipes[pick][ingredient];
            }
        } else if (typeof gearRecipes[type] === "object") {
            const gear = type;
            for (let ingredient in gearRecipes[gear]) {
                inventory[ingredient]["normal"] += gearRecipes[gear][ingredient];
            }
        }
        updateActiveRecipe();
    }
}

function snakeToCamel(str, startUpper) {
    const snake = str.toLowerCase();
    let camel = "";
    let detect = startUpper ?? false;
    for (let i = 0; i < snake.length; i++) {
        let letter = snake.substring(i,i+1);
        if (letter === "-" || letter === "_") detect = true;
        else if (detect)
            if (letter !== "-" && letter !== "_") {
                detect = false;
                camel += letter.toUpperCase();
            }
        else camel += letter.toLowerCase();
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
    if (num % 1) num = Math.round(num);
    const roman = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    let str = "";
    for (let i of Object.keys(roman)) {
        const q = Math.floor(num / roman[i]);
        num -= q * roman[i];
        str += i.repeat(q);
    }
    return str;
}
function clamp(num, min, max) {
    return num <= min
      ? min
      : num >= max
        ? max
        : num
}

function addUpLayerProbs(arr) {
    let total = 0;
    for (let num of arr) {
        if (typeof num === "number") total += 1/num;
        else if (typeof num === "string") total += 1/oreList[num]["prob"];
    }
    return total;
}

function lastItemIn(arr) {
    return arr[arr.length-1];
}

//IMPORTANT

function init() {
    let canContinue = false;
    createInventory();
    createIndex();
    createMine();
    const playedBefore = localStorage.getItem("playedBefore");
    if (!playedBefore) localStorage.setItem("newSaveFormat", true);
    canContinue = playedBefore ? loadAllData() : true;
    if (canContinue) {
        repeatDataSave();
        localStorage.setItem("playedBefore", true);
        createPickaxeRecipes();
        createGearRecipes();
        //document.getElementById("dataText").value = "";
        createIndex();
    }
    for (let element of document.getElementsByClassName("itemDescription"))
        invisible(element)
    //for (let ore in oreList) updateIndex(ore);
}

document.addEventListener("DOMContentLoaded", () => {
    visible(document.getElementById("playButton"));
    document.getElementById("dataFile").addEventListener("change", importData);
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
    isPlaying = true;
    setInterval(incrementTimePlayed, 5000);
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
                mine[curY][curX] = "⬜";
                prepareArea("s");
                curY++;
                mine[curY][curX] = "⛏️";
                setLayer(curY);
                lastDirection = "s";
                break;
            case "w":
                if (curY > 0) {
                    mineBlock(curX, curY - 1, "mining", 1);
                    mine[curY][curX] = "⬜";
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
                    mine[curY][curX] = "⬜";
                    prepareArea("a");
                    curX--;
                    mine[curY][curX] = "⛏️";
                    lastDirection = "a";
                }
                break;
            case "d":
                mineBlock(curX + 1, curY, "mining", 1);
                mine[curY][curX] = "⬜";
                prepareArea("d");
                curX++;
                mine[curY][curX] = "⛏️";
                lastDirection = "s";
                break;
            /*default:
                console.log("wrong key!!");*/
        }
        //gearAbilityInfinityCollector();
        displayArea();
    }
}

function random(lower, upper) {
    if (typeof lower !== "number" && typeof upper !== "number") {
        //[0-1)
        return Math.random()
    } else if (typeof lower === "number" && typeof upper !== "number") {
        upper = lower;
        //[0-upper]
        return Math.floor(Math.random()*(upper+1));
    } else if (typeof lower === "number" && typeof upper === "number") {
        //[lower-upper]
        return Math.floor(Math.random()*(upper-lower+1)+lower);
    }
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

function hasAny(ore) {
    for (let variant of variantNames)
        if (inventory[ore][variant.toLowerCase()] >= 1) return true;
    return false;
}

function hasGear(gear) {
    return gears[gear] && currentGears.includes(gear);
}

let settingsToggle = false;
document.addEventListener("keydown", (event) => {
    let name = event.key.toLowerCase();
    let validInput = false;
    switch(name) {
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
        case "escape":
            event.preventDefault();
            settingsToggle = !settingsToggle;
            hideData();
            if (settingsToggle)
                showData();
        /*default:
            console.log("wrong key!");
            break;*/
    }
    if (validInput) {
        clearInterval(loopTimer);
        currDirection = "";
        energySiphonerDirection = "";
        if (!event.metaKey && !event.altKey) {
            if (event.shiftKey)
                goDirection(name);
            else
                movePlayer(name);
        }
        if (realVitriolActive) {
            clearTimeout(realVitriolTimeout);
            realVitriolActive = false;
        }
    }
}, false);

let loopTimer = null,
    currDirection = "",
    miningSpeed = 25;
function goDirection(direction, speed) {
    if (currDirection === direction || speed === 0) {
        clearInterval(loopTimer);
        currDirection = "";
        if (realVitriolActive) {
            clearTimeout(realVitriolTimeout);
            realVitriolActive = false;
        }
    } else {
        clearInterval(loopTimer);
        if (hasGear("real-vitriol")) miningSpeed = 15;
        if (hasGear("haste-2-beacon")) miningSpeed = 10;
        miningSpeed = speed ?? miningSpeed;
        loopTimer = setInterval(movePlayer, miningSpeed, direction);
        currDirection = direction;
        energySiphonerDirection = direction;
    }
}

function moveOne(dir, button) {
    button.disabled = true;
    clearInterval(loopTimer);
    setTimeout(() => {
        movePlayer(dir);
    }, 15);
    currDirection = "";
    energySiphonerDirection = "";
    setTimeout(() => {
        button.disabled = false;
    }, 100);
}

//DISPLAY

let canDisplay = true;
function changeCanDisplay(toggle) {
    let button = document.getElementById("disableDisplay");
    let blockDisplay = document.getElementById("blockDisplay");
    if (typeof toggle === "boolean") {
        canDisplay = toggle;
        if (toggle) {
            button.innerHTML = "Disable Display";
            canDisplay = true;
            blockDisplay.classList.remove("disabledDisplay");
            displayArea();
        } else {
            button.innerHTML = "Enable Display";
            blockDisplay.innerHTML = "DISABLED";
            blockDisplay.classList.add("disabledDisplay");
        }
    } else changeCanDisplay(button.innerHTML.includes("Enable"));
}
function displayArea() {
    if (canDisplay) {
        let output = "";
        const constraints = getParams(12, 9);
        for (let y = curY - constraints["up"]; y <= curY + 9 + (9-constraints["up"]); y++) {
            for (let x = curX - constraints["left"]; x <= curX + 12 + (12-constraints["left"]); x++) {
                /*if (mine[r][c] === "⬜") {
                    output += "<span style='opacity:0;'>" + mine[r][c] + "</span>"
                } else {
                    output += mine[r][c];
                }*/
                output += mine[y][x];
            }
            output += "<br>";
        }
        document.getElementById("blockDisplay").innerHTML = output;
    }
    document.getElementById("mineResetProgress").innerHTML = `Reset Progress: ${(blocksRevealedThisReset/mineCapacity*100).toFixed(2)}%`;
    document.getElementById("resetsThisSession").innerHTML = `(Reset #${resetsThisSession.toLocaleString()})`;
    document.getElementById("blocksMined").innerHTML = `${totalMined.toLocaleString()} Blocks Mined`;
    document.getElementById("location").innerHTML = `X: ${curX - 1000000000}<br>Y: ${-curY}`;
}

//HTML EDITING

//TODO: Refactor this too
let currVariant = 0;
function switchInventory() {
    invisible(document.getElementById(`inventory${variantNames[currVariant]}`));
    currVariant = (currVariant+1) % variantNames.length;
    visible(document.getElementById(`inventory${variantNames[currVariant]}`));
    document.getElementById("switchInventory").innerHTML = `${variantNames[currVariant]} Inventory`;
    invisible(document.getElementById("indexDisplay"));
    document.getElementById("showIndex").innerHTML = "Show Index";
    showing = false;
}

function createOreDisplay(ore, variant, luck) {
    if (typeof variant !== "string")
        variant = "Normal";
    //variant = variant.toLowerCase();
    if (typeof luck !== "number")
        luck = 1;
    luck = variantMultis[variantNames.indexOf(variant)] / luck;
    let oreTotal = inventory[ore][variant.toLowerCase()];
    let oreProb = oreList[ore]["prob"];
    if (!unaffectedByLuck.includes(ore))
        oreProb = Math.round(oreList[ore]["prob"]) * luck;
    return `
    <p class="emoji">${ore}</p>
    <div class="totalAndProbContainer">
        <p class="oreTotal">x${Math.round(oreTotal).toLocaleString()}</p>
        <p class="oreProb">1/${Math.round(oreProb).toLocaleString()}</p>
    </div>
    `;
}

function createInventory() {
    for (let ore in oreList) {
        for (let variant of variantNames) {
            let element = document.createElement("div");
            element.id = ore + variant;
            element.classList.add("oreDisplay");
            /*if (variant !== "Normal")*/
            invisible(element);
            element.innerHTML = `<span class="emoji">${ore}</span> | 1/${(oreList[ore]["prob"]*variantMultis[variantNames.indexOf(variant)]).toLocaleString()} | x${inventory[ore][variant.toLowerCase()].toLocaleString()}`;
            element.innerHTML = createOreDisplay(ore, variant);
            document.getElementById(`inventory${variant}`).appendChild(element);
        }
    }
}

function createIndex() {
    document.getElementById("indexDisplay").innerHTML = "";
    let output = "";
    let luckBoost = verifiedOres.getLuckBoosts()[currentPickaxe];
    if (hasGear("real-candilium")) luckBoost *= 1.1;
    if (hasGear("fortune-3-book")) luckBoost *= 1.6;
    for (let i = 0; i < allLayers.length; i++) {
        output += `<div class="layerDisplay" id="layerDisplay${allLayersNames[i]}">`;
        output += `<p class="oreTitle" id="${allLayersNames[i]}Title">`;
        if (!allCaves.includes(allLayers[i]))
            output += `${allLayersNames[i]} Layer`;
        else
            output += `${allCavesNames[allCaves.indexOf(allLayers[i])]} Cave (1/${allCaveMultis[allCaves.indexOf(allLayers[i])]})`;
        
        if (normalLayers.includes(allLayers[i]))
            output += ` (${normalLayersDepths[i]}-${normalLayersDepths[i]+2000}m)`;
        output += "</p>";
        for (let ore of allLayers[i]) {
            //if (prob > 2000000 && prob < 5000000000)
            output += `<div class="oreDisplay" id=${ore}Index>`;
            output += createOreDisplay(ore, undefined, luckBoost);
            output += "</div>";
        }
        output += "</div>";
    }
    output += `<div class="layerDisplay" id="layerDisplayEverywhere">`;
    output += `<p class="oreTitle" id="EverywhereTitle">Everywhere</p>`;
    for (let ore of spawnsEverywhere) {
        output += `<div class="oreDisplay" id=${ore}Index>`;
        output += createOreDisplay(ore, undefined, luckBoost);
        output += "</div>";
    }
    document.getElementById("indexDisplay").innerHTML = output;
    updateIndex();
}

let showing = false;
function showIndex() {
    if (showing) {
        invisible(document.getElementById("indexDisplay"));
        document.getElementById("showIndex").innerHTML = "Show Index";
        visible(document.getElementById("inventory" + variantNames[currVariant]));
        showing = false;
    } else {
        visible(document.getElementById("indexDisplay"));
        document.getElementById("showIndex").innerHTML = "Show Inventory";
        invisible(document.getElementById("inventory" + variantNames[currVariant]));
        showing = true;
    }
}

function updateIndex(type) {
    let ores = [type];
    if (typeof type !== "string")
        ores = Object.keys(oreList);
    for (let ore of ores) {
        const hasAnyOre = hasAny(ore);
        if (document.getElementById(`${ore}Index`) !== null && hasAnyOre)
            document.getElementById(`${ore}Index`).classList.add("hasOne");
        const index = allLayers.indexOf(getLayerFromOre(ore));
        const name = index !== -1 ? allLayersNames[index] : spawnsEverywhere.includes(ore) ? "Everywhere" : undefined;
        const display = document.getElementById(`layerDisplay${name}`);
        if (display !== null && hasAnyOre) {
            if (!isVisible(display))
                visible(display);
            let isCompleted = true;
            for (let child of display.children) {
                if (!child.classList.contains("oreTitle") && !child.classList.contains("hasOne")) {
                    isCompleted = false;
                    break;
                }
            }
            if (isCompleted) display.getElementsByClassName("oreTitle")[0].classList.add("hasOne");
        }
    }
}

function updateInventory(ore, variant) {
    document.getElementById(ore + variant).innerHTML = createOreDisplay(ore, variant);
    if (inventory[ore][variant.toLowerCase()] > 0)
        visible(document.getElementById(ore + variant));
    else
        invisible(document.getElementById(ore + variant));
}

//SPAWNS AND FINDS

let spawnOre;
let latestSpawns = []; //{ore, variant, y, x, resetNum, fromCave, rarity, id, found, html}
function spawnMessage(ore, variant, location, caveInfo) {
    //ADD TO MINE CAPACITY IF NEAR RESET
    if (!hasGear("real-vitriol") && blocksRevealedThisReset > mineCapacity - 10000 && mineCapacity < 120000)
        mineCapacity += 10000;
    let latestDisplay = document.getElementById("latestDisplay");
    let addToLatest = true;
    let id = -1;
    //only clear an id if it's no longer displaying and its state isn't null
    {
        let idList = [];
        for (const spawn of latestSpawns)
            idList.push(spawn["id"]);
        for (let i=0; i<=latestSpawns.length; i++)
            if (!idList.includes(i)) {
                id = i;
                break;
            }
    }
    //maybe make this a function
    mineBlockData[location["y"]] ??= [];
    mineBlockData[location["y"]][location["x"]] ??= {};
    mineBlockData[location["y"]][location["x"]]["id"] = id;
    const fromCave = typeof caveInfo === "object" && caveInfo["fromCave"];
    if (Object.keys(pickaxes).indexOf(currentPickaxe) < 6 || oreList[ore]["prob"] > 2000000)
        if (currentPickaxe === "geode-staff" || hasGear("ore-tracker"))
            latestSpawns.unshift({
                ore: ore,
                variant: variant,
                y: location["y"],
                x: location["x"],
                resetNum: resetsThisSession,
                fromCave: fromCave,
                rarity: fromCave ? caveInfo["rarity"] : undefined,
                id: id,
                state: null,
                html: null
            });
        else
            latestSpawns.unshift({
                ore: ore,
                variant: variant,
                resetNum: resetsThisSession,
                id: id,
                state: null,
                html: null
            });
    else addToLatest = false;
    /*if (hasGear("real-vitriol") || hasGear("infinity-collector"))
        if (Object.keys(pickaxes).indexOf(currentPickaxe) < 10 || oreList[ore]["prob"] > 2000000)
            latestSpawns.unshift({y: location["y"], x: location["x"]});
    */
    //if (latestSpawns.length > 10) latestSpawns.pop();
    
    if (addToLatest) {
        let removeSpawns = [];
        latestDisplay.innerHTML = "";
        for (let i=0; i<latestSpawns.length; i++) {
            const spawn = latestSpawns[i];
            if (spawn["html"] === null) {
                spawn["html"] = document.createElement("p");
                spawn["html"].id = `latestSpawns${id}`;
                spawn["html"].innerHTML = `<span class="emoji">${variantEmojis[spawn["variant"]]}${spawn["ore"]}</span> 1/${Math.round(oreList[spawn["ore"]]["prob"]*variantMultis[variant]).toLocaleString()}`;
                if (typeof spawn["y"] === "number" && typeof spawn["x"] === "number")
                    spawn["html"].innerHTML += ` | X: ${(spawn["x"] - 1000000000).toLocaleString()}, Y: ${(-spawn["y"]).toLocaleString()}, R: ${spawn["resetNum"]}`;
            }
            if (i > 10) {
                if (spawn["state"] !== null)
                    removeSpawns.push(i);
                continue;
            }
            latestDisplay.appendChild(spawn["html"]);
        }
        
        for (const i of removeSpawns)
            latestSpawns.splice(i, 1);
        
        const spawnMessage = document.getElementById("spawnMessage");
        spawnMessage.innerHTML = `<span class="emoji">${variantEmojis[variant]}${ore}</span> Has Spawned!<br>`;
        if (typeof caveInfo === "object" && caveInfo["rarity"])
            spawnMessage += `1/${caveInfo["rarity"].toLocaleString()}`;
        else
            spawnMessage.innerHTML += `1/${Math.round(oreList[ore]["prob"]*variantMultis[variant]).toLocaleString()}`;
        
        spawnMessage.innerHTML += `<br>X: ${(location["x"] - 1000000000).toLocaleString()}<br>Y: ${(-location["y"]).toLocaleString()}`;
        clearTimeout(spawnOre);
        spawnOre = setTimeout(() => {
            spawnMessage.innerHTML = "Spawn Messages Appear Here!";
        }, 20000);
    }
}

function logFind(x, y, atMined, fromReset) {
    //let output = "";
    const id = mineBlockData[y][x]["id"];
    const find = document.getElementById(`latestSpawns${id}`);
    if (find === null) return;
    find.classList.add("oreFound");
    let spawn;
    for (const spwn of latestSpawns)
        if (spwn["id"] === id) {
            spawn = spwn;
            break;
        }
    spawn["state"] = true;
    if (fromReset)
        spawn["html"].innerHTML += " | FROM RESET<br>";
    else
        spawn["html"].innerHTML += ` | ${atMined.toLocaleString()} blocks<br>`;
}

let moveOnce = false;
const movementModes = {
    "a": {
        "two": `<i class="fas fa-angles-left"></i>`,
        "one": `<i class="fas fa-angle-left"></i>`
    },
    "d": {
        "two": `<i class="fas fa-angles-right"></i>`,
        "one": `<i class="fas fa-angle-right"></i>`
    },
    "w": {
        "two": `<i class="fas fa-angles-up"></i>`,
        "one": `<i class="fas fa-angle-up"></i>`
    },
    "s": {
        "two": `<i class="fas fa-angles-down"></i>`,
        "one": `<i class="fas fa-angle-down"></i>`
    }
}


function switchMovementMode () {
    moveOnce = !moveOnce;
    refreshButtons();
}

function refreshButtons() {
    let elements = document.getElementsByClassName("movementButton");
    Array.from(elements).forEach((element) => {
        if (moveOnce === true) {
            element.innerHTML = movementModes[element.id]["one"];
            element.onclick = () => {moveOne(element.id, element)};
            //element.title = "Hold shift to automine";
        } else {
            element.innerHTML = movementModes[element.id]["two"];
            element.onclick = () => {goDirection(element.id)};
            //element.title = "Hold shift to move once";
        }
    })
}

refreshButtons();