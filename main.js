let mine = [];
let curX = 1000000000;
let curY = 0;
let currentDisplay = ""
let totalMined = 0;
let blocksRevealedThisReset = 0;
let baseMineCapacity = 40000;
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
    ["mrrp meow meow!", false],
    ["cataxe", false]
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
    false, //SILLY TP 9
];
let currentPickaxe = 0;

//IMPORTANT

function init() {
    let canContinue = false;
    createInventory();
    createMine();
    let playedBefore = localStorage.getItem("playedBefore");
    if (playedBefore)
        canContinue = loadAllData();
    else
        canContinue = true;
    if (canContinue) {
        repeatDataSave();
        localStorage.setItem("playedBefore", true);
        localStorage.setItem("game2DataChanges", true);
        createPickaxeRecipes();
        createGearRecipes();
        document.getElementById('dataText').value = "";
        createIndex();
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
    document.getElementById("pressPlay").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
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
                default:
                    console.log("wrong key!!");
            }
            displayArea();
            gearAbility3();
        }
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
        default:
            console.log("wrong key!");
            break;
    }
    if (validInput) {
        clearInterval(loopTimer);
        curDirection = "";
        movePlayer(name);
        energySiphonerDirection = "";
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
        energySiphonerDirection = direction;
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
    energySiphonerDirection = "";
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
        let output ="";
        let constraints = getParams(9, 9);
        for (let r = curY - constraints[1]; r <= curY + 9 + (9-constraints[1]); r++) {
            for (let c = curX - constraints[0]; c <= curX + 9 + (9-constraints[0]); c++) {
                /*if (mine[r][c] === "⚪") {
                    output += "<span style='opacity:0;'>" + mine[r][c] + "</span>"
                } else {
                    output += mine[r][c];
                }*/
                output += mine[r][c];
            }  
            output += "<br>";
        }
        document.getElementById("blockDisplay").innerHTML = output;
    } else {
        document.getElementById("blockDisplay").innerHTML = "D I S A B L E D";
    }
    document.getElementById("mineResetProgress").innerHTML = blocksRevealedThisReset.toLocaleString() + "/" + mineCapacity.toLocaleString() + " Blocks Revealed This Reset";
    document.getElementById("blocksMined").innerHTML = totalMined.toLocaleString() + " Blocks Mined";
    document.getElementById("location").innerHTML = "X: " + (curX - 1000000000).toLocaleString() + " | Y: " + (-curY).toLocaleString();
}

//HTML EDITING

const names = ["Normal", "Electrified", "Radioactive", "Explosive"];
const namesemojis = ["", "⚡️", "☢️", "💥"]
function switchInventory() {
    document.getElementById(("inventory") + variant).style.display = "none";
    if (variant === 4)
        variant = 1;
    else
        variant++;
    document.getElementById("inventory" + variant).style.display = "block";
    document.getElementById("switchInventory").innerHTML = names[variant - 1] + " Inventory"
    document.getElementById("indexDisplay").style.display = "none";
    document.getElementById("showIndex").innerHTML = "Show Index";
    showing = false;
}

function createInventory() {
    for (let propertyName in oreList) {
        for (let i = 1; i < 5; i++) {
            let oreNum = oreList[propertyName][1][i - 1];
            let tempElement = document.createElement('p');
            tempElement.id = (propertyName + i);
            tempElement.classList = "oreDisplay";
            tempElement.style.display = "none";
            tempElement.innerHTML = propertyName + " | 1/" + ((Math.round( 1 / oreList[propertyName][0])).toLocaleString() * multis[i - 1]).toLocaleString() + " | x" + oreNum.toLocaleString();
            document.getElementById(("inventory") + i).appendChild(tempElement);
        }
    }
}

function createIndex() {
    document.getElementById("indexDisplay").innerHTML = "";
    let num = 0;
    let output = "";
    let multi = verifiedOres.getLuckBoosts()[currentPickaxe];
    if (gears[1])
        multi *= 1.1;
    if (gears[5]) 
        multi *= 1.6;
    for (let i = 0; i < allLayers.length - 2; i++) {
        for (let propertyName in allLayers[i]) {
            num = (Math.round(1/(oreList[propertyName][0])));
            if (num > 2000000 && num < 5000000000)
                output += propertyName + " | 1/" + (Math.round(1/(oreList[propertyName][0] * multi))).toLocaleString() + " | " + (i * 2000) + "-" + ((i+1) * 2000) + "m<br>";
        }
        output += "--------------<br>";
    }
    for (let i = 0; i < allCaves.length; i++) {
        let caveOres = Object.keys(allCaves[i]);
        output += caveOres[5] + " Cave, 1/" + caveMultis[i] + "<br>";
        for (let j = 0; j < caveOres.length - 1; j++) {
            num = Math.round(1/allCaves[i][caveOres[j]]);
            output += caveOres[j] + " | 1/" + num.toLocaleString() + " in caves.<br>";
        }
        output += "--------------<br>";
    }
    for (let propertyName in oreList) {
        if (Math.round(1/(oreList[propertyName][0]) <= 2000000 && Math.round(1/(oreList[propertyName][0]) > 1)))
            output += propertyName + " | 1/" + (Math.round(1/(oreList[propertyName][0] * multi))).toLocaleString() + " | Everywhere<br>";
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

let variant = 1;
function updateInventory(type, inv) {
    document.getElementById(type + inv).innerHTML = type + " | 1/" + ((Math.round( 1 / oreList[type][0])) * multis[inv - 1]).toLocaleString() + " | x" + oreList[type][1][inv - 1].toLocaleString();
    if (oreList[type][1][inv - 1] > 0)
        document.getElementById(type + inv).style.display = "block";
    else
        document.getElementById(type + inv).style.display = "none";
}

function appear(element){
    element.classList.remove("hidden")
}
function disappear(element){
    element.classList.add("hidden")
}

//SPAWNS AND FINDS

let spawnOre;
let loggedFinds = [];
let latestSpawns = [];
function spawnMessage(block, location, caveInfo) {
    //ADD TO MINE CAPACITY IF NEAR RESET
    //CAVEINFO[0] = TRUE/FALSE
    //CAVEINFO[1] = ADJUSTED RARITY
    if (!(gears[3]) && blocksRevealedThisReset > mineCapacity - 10000 && mineCapacity < 120000)
        mineCapacity += 10000;
    let output = "";
    let addToLatest = true;
    let fromCave = false;
    if (caveInfo != undefined && caveInfo[0]) {
        fromCave = true
    }
    if (currentPickaxe === 5) {
    //IF PICKAXE IS 5, ADD LOCATION
    if (fromCave)
        //IF FROM CAVE ADD ADJUSTED RARITY
        latestSpawns.push([block, location[1], location[0], true, caveInfo[1]]);
    else
        latestSpawns.push([block, location[1], location[0]]);
    } else if (currentPickaxe < 7) {
        if (gears[0]) {
            //IF PICKAXE IS UNDER 7, BUT ORE TRACKER IS OWNED, ADD LOCATION
            if (fromCave)
                //IF FROM CAVE ADD ADJUSTED RARITY
                latestSpawns.push([block, location[1], location[0], true, caveInfo[1]]);
            else 
                latestSpawns.push([block, location[1], location[0]]);
        } else {
            //IF NO TRACKER AND PICKAXE IS UNDER 5, DO NOT PUSH LOCATION
            if (fromCave)
                latestSpawns.push([block, undefined, undefined, true, caveInfo[1]]);
            else
                latestSpawns.push([block, undefined, undefined]);
        }
        
    } else if (Math.round(1 / (oreList[block][0])) > 2000000) {
        //IF CURRENT PICKAXE IS OVER 7, ONLY ADD ORES OVER 1/2M
        if (gears[0]) {
            //IF ORE TRACKER IS OWNED, ADD LOCATION
            if (fromCave)
                latestSpawns.push([block, location[1], location[0], true, caveInfo[1]]);
            else
                latestSpawns.push([block, location[1], location[0]]);
        } else {
            //IF NO ORE TRACKER, DO NOT ADD LOCATION
            if (fromCave)
            latestSpawns.push([block, undefined, undefined, true, caveInfo[1]]);
            else
            latestSpawns.push([block, undefined, undefined]);
        }
            
        } else
            //IF ORE IS <1/2M WITH A PICKAXE OVER 7, DO NOT ADD TO LATEST
            addToLatest = false;
    if (gears[3]) {
        if (oreList[block][0] < 1/2000000)
        loggedFinds.push([location[0], location[1]]);
    }
    if (latestSpawns.length > 10)
        latestSpawns.splice(0, 1);
    if (addToLatest) {
        for (let i = latestSpawns.length - 1; i >= 0; i--) {
            if (latestSpawns[i][3]) {
                output += latestSpawns[i][0] + " 1/" + (latestSpawns[i][4]).toLocaleString() + " Adjusted.";
            } else {
                output += latestSpawns[i][0] + " 1/" + (Math.round(1 / (oreList[latestSpawns[i][0]][0]))).toLocaleString();
            }
            if (latestSpawns[i][1] !== undefined)
                output += " | X: " + (latestSpawns[i][1] - 1000000000).toLocaleString() + ", Y: " + (-(latestSpawns[i][2])).toLocaleString();
            output += "<br>"
        }
        document.getElementById("latestSpawns").innerHTML = output;
        if (caveInfo != undefined && caveInfo[0])
        document.getElementById("spawnMessage").innerHTML = block + " Has Spawned!<br>" + "1/" + (caveInfo[1]).toLocaleString() + (currentPickaxe === 5 || gears[0]?"<br>X: " + (location[1] - 1000000000).toLocaleString() + "<br>Y: " + (-(location[0])).toLocaleString():"");
        else
        document.getElementById("spawnMessage").innerHTML = block + " Has Spawned!<br>" + "1/" + (Math.round(1 / (oreList[block][0]))).toLocaleString() + (currentPickaxe === 5 || gears[0]?"<br>X: " + (location[1] - 1000000000).toLocaleString() + "<br>Y: " + (-(location[0])).toLocaleString():"");
    }
    clearTimeout(spawnOre);
    spawnOre = setTimeout(() => {
        document.getElementById("spawnMessage").innerHTML = "Spawn Messages Appear Here!"
    }, 20000);
}

let latestFinds = [];
function logFind(type, x, y, variant, atMined, fromReset) {
    let output = "";
    latestFinds.push([type, x, y, variant, atMined, fromReset]);
    if (latestFinds.length > 10)
        latestFinds.splice(0, 1);
    for (let i = latestFinds.length - 1; i >= 0; i--) {
        output += latestFinds[i][3] + " ";
        if (latestFinds[i][5])
            output += latestFinds[i][0] + " | X: " + (latestFinds[i][1] - 1000000000).toLocaleString() + ", Y: " + (-(latestFinds[i][2])).toLocaleString() + " | FROM RESET<br>"
        else
            output += latestFinds[i][0] + " | X: " + (latestFinds[i][1] - 1000000000).toLocaleString() + ", Y: " + (-(latestFinds[i][2])).toLocaleString() + " | At " + latestFinds[i][4].toLocaleString() +  " Mined.<br>";
    }
    document.getElementById("latestFinds").innerHTML = output;
}