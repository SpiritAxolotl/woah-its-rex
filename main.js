let mine = [];
let curX = 1000000000;
let curY = 0;
let currentDisplay = ""
let totalMined = 0;
let blocksRevealedThisReset = 0;
let mineCapacity = 40000; // in case this ever needs to be raised
let canMine = false;
let lastDirection = "";
let pickaxes = [
    ["is anyone gonna read these lol", true],
    ["hi!!! hii!!", false],
    ["wait no get out of here", false],
    ["stop it get out", false],
    ["leave!!!!!!!!", false],
    ["i have your ip", false],
    ["grrrrr leave!!", false],
    [":pouting-cat:", false],
    [">:C", false],
    ["IM HERE NOW TOO", false],
    ["mrrp meow meow!", false]
];
let gears = [
    false, //ORE TRACKER 0
    false, //REAL CANDILIUM 1
    false, //REAL VITRIOL 2
    false, //INFINITY COLLECTOR 3
    false, //LAYER MATERIALIZER 4
    false, //FORTUNE III BOOK 5
    false, //HASTE II BEACON 6
    false, //ENERGY SIPHONER 7
    false, //SUGAR RUSH 8
    false, //SILLY TP
];
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
        $("#dataText")[0].value = "";
    }
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
    keepRunningAudio = new Audio("ambiencebyx2corp.mp3")
    keepRunningAudio.load();
    keepRunning();
    chill = new Audio("spinechill.mp3");
    ringing = new Audio("Transcendent.mp3");
    visionblur = new Audio("visionblur.mp3");
    unfath = new Audio("Unfathsound.mp3");
    ow = new Audio("Otherworldly.mp3");
    zenith = new Audio("Zenithsound.mp3");
    magnificent = new Audio("magnificent.mp3")
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
    invisible($("#pressPlay")[0]);
    visible($("#mainContent")[0]);
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

function reciprocal(num) {
    return Math.round(1/num);
}

function random() {
    return Math.random();
}
function random(upper) {
    return Math.floor(Math.random()*upper);
}
function random(lower, upper) {
    return Math.floor(Math.random()*(upper-lower+1))+lower;
}

document.addEventListener('keydown', (event) => {
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
        curDirection = "";
        movePlayer(name);
        if (ability1Active) {
            clearTimeout(ability1Timeout);
            ability1Active = false;
        }
    }
}, false);

let loopTimer = null;
let curDirection = "";
let miningSpeed = 25;
function goDirection(direction, speed) {
    if (curDirection === direction) {
        clearInterval(loopTimer);
        curDirection = "";
        if (ability1Active) {
            clearTimeout(ability1Timeout);
            ability1Active = false;
        }
    } else {
        clearInterval(loopTimer);
        if (speed === undefined) {
            if (gears[2])
                miningSpeed = 15;
            if (gears[6])
                miningSpeed = 10;
        } else {
            miningSpeed = speed;
        }
        loopTimer = setInterval(movePlayer, miningSpeed, direction);
        curDirection = direction;
    }
}

function moveOne(dir, button) {
    button.disabled = true;
    clearInterval(loopTimer);
    setTimeout(() => {
        movePlayer(dir);
    }, 15);
    curDirection = "";
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
        $("#blockDisplay").html(output);
    } else
        $("#blockDisplay").html("DISABLED");
    $("#mineResetProgress")[0].innerHTML = blocksRevealedThisReset + "/" + mineCapacity + " Blocks Revealed This Reset";
    $("#blocksMined")[0].innerHTML = totalMined.toLocaleString() + " Blocks Mined";
    $("#location")[0].innerHTML = "X: " + (curX - 1000000000) + " | Y: " + (-curY);
}

//HTML EDITING

const names = ["Normal", "Electrified", "Radioactive", "Explosive"];
const namesemojis = ["", "⚡️", "☢️", "💥"];
function switchInventory() {
    invisible($("#inventory" + variant)[0]);
    variant = variant === 4 ? 1 : ++variant;
    visible($("inventory" + variant)[0]);
    $("#switchInventory")[0].innerHTML = names[variant - 1] + " Inventory";
    invisible($("#indexDisplay")[0]);
    $("#showIndex")[0].innerHTML = "Show Index";
    showing = false;
}

function createInventory() {
    for (let propertyName in oreList) {
        for (let i = 1; i < 5; i++) {
            let $element = $("<p>", {
                id: propertyName+i,
                class: "oreDisplay",
                style: "display:none;"
            });
            $element.innerHTML = "<span class='emoji'>" + propertyName + "</span> | 1/" + (reciprocal(oreList[propertyName][0]).toLocaleString() * multis[i - 1]).toLocaleString() + " | x" + oreList[propertyName][1][i - 1];
            $("#inventory"+i).append($element);
        }
    }
}

function createIndex() {
    let num = 0;
    let output = "";
    for (let i = 0; i < allLayers.length - 2; i++) {
        for (let propertyName in allLayers[i]) {
            num = reciprocal(oreList[propertyName][0]);
            if (num > 2000000 && num < 5000000000)
                output += "<span class='emoji'>" + propertyName + "</span> | 1/" + reciprocal((oreList[propertyName][0])).toLocaleString() + " | " + (i * 2000) + "-" + ((i+1) * 2000) + "m<br>";
        }
        output += "--------------<br>";
    }
    for (let propertyName in oreList) {
        if (reciprocal(oreList[propertyName][0]) <= 2000000 && reciprocal(oreList[propertyName][0]) > 1)
            output += "<span class='emoji'>" + propertyName + "</span> | 1/" + reciprocal((oreList[propertyName][0])).toLocaleString() + " | Everywhere<br>";
    }
    $("#indexDisplay")[0].innerHTML = output;
}

let showing = false;
function showIndex() {
    if (showing) {
        invisible($("#indexDisplay")[0]);
        $("#showIndex").html("Show Index");
        visible($("inventory" + variant)[0]);
        showing = false;
    } else {
        visible($("#indexDisplay")[0]);
        $("#showIndex").html("Show Inventory");
        invisible($("inventory" + variant)[0]);
        showing = true;
    }
}

let variant = 1;
function updateInventory(type, inv) {
    $("#" + type + inv).html(
        "<span class='emoji'>" + type + "</span> | 1/" + (reciprocal(oreList[type][0]) * multis[inv - 1]).toLocaleString() + " | x" + oreList[type][1][inv - 1]
    );
    if (oreList[type][1][inv - 1] > 0)
        visible($("#" + type + inv)[0]);
    else
        invisible($("#" + type + inv)[0]);
}

//SPAWNS AND FINDS

let spawnOre;
let loggedFinds = [];
let latestSpawns = [];
function spawnMessage(block, location) {
    if (!(gears[3]) && blocksRevealedThisReset > mineCapacity - 10000 && mineCapacity < 120000)
        mineCapacity += 10000;
    let output = "";
    let addToLatest = true;
    if (currentPickaxe === 5)
        latestSpawns.push([block, location[1], location[0]]);
    else if (currentPickaxe < 7) {
        if (gears[0])
            latestSpawns.push([block, location[1], location[0]]);
        else
            latestSpawns.push([block, undefined, undefined]);
    } else if (reciprocal(oreList[block][0]) > 2000000) {
        if (gears[0])
            latestSpawns.push([block, location[1], location[0]]);
        else
            latestSpawns.push([block, undefined, undefined]);
        }
    else
        addToLatest = false;
    if (gears[3])
        loggedFinds.push([location[0], location[1]]);
    if (latestSpawns.length > 10)
        latestSpawns.splice(0, 1);
    if (addToLatest) {
        for (let i = latestSpawns.length - 1; i >= 0; i--) {
            output += "<span class='emoji'>" + latestSpawns[i][0] + "</span> 1/" + (reciprocal(oreList[latestSpawns[i][0]][0])).toLocaleString();
            if (latestSpawns[i][1] !== undefined)
                output += " | X: " + (latestSpawns[i][1] - 1000000000) + ", Y: " + -(latestSpawns[i][2]) + "<br>";
            else
                output += "<br>";
        }
        $("#latestSpawns").html(output);
        if (currentPickaxe === 5 || gears[0])
            $("#spawnMessage").html("<span class='emoji'>" + block + "</span> Has Spawned!<br>" + "1/" + (reciprocal(oreList[block][0])).toLocaleString() + "<br>X: " + (location[1] - 1000000000) + "<br>Y: " + (-location[0]));
    }
    clearTimeout(spawnOre);
    spawnOre = setTimeout(() => {
        $("#spawnMessage").html("Spawn Messages Appear Here!");
    }, 20000);
}

let latestFinds = [];
function logFind(type, x, y, variant, atMined, fromReset) {
    let output = "";
    latestFinds.push([type, x, y, variant, atMined, fromReset]);
    if (latestFinds.length > 10)
        latestFinds.splice(0, 1);
    for (let i = latestFinds.length - 1; i >= 0; i--) {
        output += latestFinds[i][3] + latestFinds[i][0] + " | X: " + (latestFinds[i][1] - 1000000000) + ", Y: " + -(latestFinds[i][2])
        if (latestFinds[i][5])
            output += " | FROM RESET<br>"
        else
            output += " | At " + latestFinds[i][4].toLocaleString() +  " Mined.<br>";
    }
    $("#latestFinds").html(output);
}
