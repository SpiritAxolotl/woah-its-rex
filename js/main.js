const debug = window.location.href.match(/^https?:\/\/127\.0\.0\.1:\d{4}/)[0] !== null;
let debugLuck = "";
let currLuck = 1;
let mine = []; //[y, x]
let curX = 1000000000; //large for a reason
let curY = 0;
let currentDisplay = "";
let totalMined = 0;
let blocksRevealedThisReset = 0;
let mineCapacity = 40000; // in case this ever needs to be raised
let canMine = false;
let lastDirection = "";
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
let gearNames = Object.keys(gears);
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
    const roman = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    var str = "";
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
    let playedBefore = localStorage.getItem("playedBefore");
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

let chill;
let ringing;
let visionblur;
let unfath;
let ow;
let magnificent;
let zenith;
let keepRunningAudio;
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

function sortObj(obj) {
    let sortedkeys = [];
    let sortedvals = [];
    for (let thing in obj) {
        const index = searchObj(sortedvals, obj[thing], 0, sortedvals.length-1);
        sortedvals.splice(index, 0, obj[thing]);
        sortedkeys.splice(index, 0, thing);
    }
    return sortedkeys;
}

document.addEventListener("keydown", (event) => {
    let name = event.key;
    let validInput = false;
    name = name.toLowerCase();
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

let loopTimer = null;
let currDirection = "";
let miningSpeed = 25;
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
    if (button.innerHTML.includes("Disable")) {
        button.innerHTML = "Enable Display";
        canDisplay = false;
    } else {
        button.innerHTML = "Disable Display";
        canDisplay = true;
        displayArea();
    }
}
function displayArea() {
    if (canDisplay) {
        let output = "";
        let constraints = getParams(9, 9);
        for (let r = curY - constraints[1]; r <= curY + 9 + (9-constraints[1]); r++) {
            for (let c = curX - constraints[0]; c <= curX + 9 + (9-constraints[0]); c++)
                output += mine[r][c];
            output += "<br>";
        }
        document.getElementById("blockDisplay").innerHTML = output;
    } else document.getElementById("blockDisplay").innerHTML = "DISABLED";
    document.getElementById("mineResetProgress").innerHTML = blocksRevealedThisReset + "/" + mineCapacity + " Blocks Revealed This Reset";
    document.getElementById("blocksMined").innerHTML = totalMined.toLocaleString() + " Blocks Mined";
    document.getElementById("location").innerHTML = "X: " + (curX - 1000000000) + " | Y: " + (-curY);
}

//HTML EDITING

let currVariant = 1;
const variantNames = ["Normal", "Electrified", "Radioactive", "Explosive"];
const variantNamesEmojis = ["", "⚡️", "☢️", "💥"];
function switchInventory() {
    invisible(document.getElementById("inventory" + variantNames[currVariant-1]));
    currVariant = currVariant >= 4 ? 1 : ++currVariant;
    visible(document.getElementById("inventory" + variantNames[currVariant-1]));
    document.getElementById("switchInventory").innerHTML = variantNames[currVariant-1] + " Inventory";
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
            if (variant !== "Normal") invisible(element);
            element.innerHTML = "<span class='emoji'>" + ore + "</span> | 1/" + (oreList[ore]["prob"].toLocaleString() * variantMultis[variant.toLowerCase()]).toLocaleString() + " | x" + oreList[ore]["inv"][variant.toLowerCase()];
            document.getElementById("inventory"+variant).appendChild(element);
        }
    }
}

function createIndex() {
    let prob = 0;
    let output = "";
    for (let i = 0; i < allLayers.length - 2; i++) {
        for (let ore in {...allLayers[i], ...spawnsEverywhere}) {
            prob = oreList[ore]["prob"];
            if (prob > 2000000 && prob < 5000000000)
                output += "<span class='emoji'>" + ore + "</span> | 1/" + prob.toLocaleString() + " | " + (i * 2000) + "-" + ((i+1) * 2000) + "m<br>";
        }
        output += "--------------<br>";
    }
    for (let ore in oreList) {
        if (oreList[ore]["prob"] <= 2000000 && oreList[ore]["prob"] > 1)
            output += "<span class='emoji'>" + ore + "</span> | 1/" + oreList[ore]["prob"].toLocaleString() + " | Everywhere<br>";
    }
    document.getElementById("indexDisplay").innerHTML = output;
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
    document.getElementById(ore + capitalize(variant)).innerHTML = "<span class='emoji'>" + ore + "</span> | 1/" + (oreList[ore]["prob"] * variantMultis[variant.toLowerCase()]).toLocaleString() + " | x" + oreList[ore]["inv"][variant.toLowerCase()];
    if (oreList[ore]["inv"][variant.toLowerCase()] > 0)
        visible(document.getElementById(ore + capitalize(variant)));
    else
        invisible(document.getElementById(ore + capitalize(variant)));
}

//SPAWNS AND FINDS

let spawnOre;
let loggedFinds = [];
let latestSpawns = [];
function spawnMessage(block, location) {
    if (!gears["real-vitriol"] && blocksRevealedThisReset > mineCapacity - 10000 && mineCapacity < 120000)
        mineCapacity += 10000;
    let output = "";
    let addToLatest = true;
    if (currentPickaxe === 5) latestSpawns.push({"block": block, "y": location["y"], "x": location["x"]});
    else if (currentPickaxe < 6) {
        if (gears["ore-tracker"]) latestSpawns.push({"block": block, "y": location["y"], "x": location["x"]});
        else latestSpawns.push({"block": block, "y": undefined, "x": undefined});
    } else if (oreList[block]["prob"] > 2000000) {
        if (gears["ore-tracker"]) latestSpawns.push({"block": block, "y": location["y"], "x": location["x"]});
        else latestSpawns.push({"block": block, "y": undefined, "x": undefined});
    } else addToLatest = false;
    if (gears["real-vitriol"]) loggedFinds.push({"y": location["y"], "x": location["x"]});
    if (latestSpawns.length > 10) latestSpawns.splice(0, 1);
    if (addToLatest) {
        for (let i = latestSpawns.length - 1; i >= 0; i--) {
            output += "<span class='emoji'>" + latestSpawns[i]["block"] + "</span> 1/" + oreList[latestSpawns[i]["block"]]["prob"].toLocaleString();
            if (latestSpawns[i]["y"] !== undefined && latestSpawns[i]["x"] !== undefined)
                output += " | X: " + (latestSpawns[i]["x"] - 1000000000) + ", Y: " + (-latestSpawns[i]["y"]) + "<br>";
            else output += "<br>";
        }
        document.getElementById("latestSpawns").innerHTML = output;
        if (currentPickaxe === 5 || gears["ore-tracker"])
            document.getElementById("spawnMessage").innerHTML = "<span class='emoji'>" + block + "</span> Has Spawned!<br>" + "1/" + oreList[block]["prob"].toLocaleString() + "<br>X: " + (location["x"] - 1000000000) + "<br>Y: " + (-location["y"]);
    }
    clearTimeout(spawnOre);
    spawnOre = setTimeout(() => {
        document.getElementById("spawnMessage").innerHTML = "Spawn Messages Appear Here!";
    }, 20000);
}

let latestFinds = [];
function logFind(type, x, y, variant, atMined, fromReset) {
    let output = "";
    latestFinds.push({
        "type": type,
        "x": x,
        "y": y,
        "variant": variant,
        "atMined": atMined,
        "fromReset": fromReset
    });
    if (latestFinds.length > 10) latestFinds.shift();
    for (let i = latestFinds.length - 1; i >= 0; i--) {
        output += latestFinds[i]["variant"] + latestFinds[i]["type"] + " | X: " + (latestFinds[i]["x"] - 1000000000) + ", Y: " + -(latestFinds[i]["y"]) + " | ";
        if (latestFinds[i]["fromReset"]) output += "FROM RESET<br>";
        else output += "At " + latestFinds[i]["atMined"].toLocaleString() +  " Mined.<br>";
    }
    document.getElementById("latestFinds").innerHTML = output;
}
