/* Copyright (C) Amber Blessing - All Rights Reserved
 
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential
Written by Amber Blessing <ambwuwu@gmail.com>, January 2024
*/

//MINE CREATION
const debug = (document.location.href.includes("testing")) || (document.location.href.includes('http://127.0.0.1:5500/'));
function createMine() {
    for (let r = curY - 101; r < curY + 101; r++) {
        if (r > -1)
            mine[r] = [];
    }
    mine[curY][1000000000] = "⛏️"; //trusty pickaxe
    currentLayerNum = -1;
    setLayer(curY);
    checkAllAround(curX, curY, 1);
    displayArea();
}

function checkAllAround(x, y, luck) {
    let generated;
    mine[y] ??= [];
    if (x - 1 >= 0) {
        if (mine[y][x - 1] === undefined) {
            generated = generateBlock({"Y" : y, "X" : x-1});
            mine[y][x - 1] = generated[0];
            if (generated[1])
                verifiedOres.verifyLog(y, x-1);
        }
    }
    if (mine[y][x + 1] === undefined) {
        generated = generateBlock({"Y" : y, "X" : x+1});
        mine[y][x + 1] = generated[0];
        if (generated[1])
            verifiedOres.verifyLog(y, x+1);
    }
    mine[y + 1] ??= [];
    if (mine[y + 1][x] === undefined) {
        generated = generateBlock({"Y" : y+1, "X" : x});
        mine[y + 1][x] = generated[0];
        if (generated[1])
            verifiedOres.verifyLog(y+1, x);
    }
        
    if (y - 1 >= 0) {
        mine[y - 1] ??= [];
        if (mine[y - 1][x] === undefined) {
            generated = generateBlock({"Y" : y-1, "X" : x});
            mine[y - 1][x] = generated[0];
            if (generated[1])
                verifiedOres.verifyLog(y-1, x);
        }
        
    }
    if (blocksRevealedThisReset >= mineCapacity) {
        canMine = false;
        //gearAbility3();
        clearInterval(loopTimer);
        blocksRevealedThisReset = 0;
        setTimeout(() => {
            if (ability1Active) {
                clearTimeout(ability1Timeout);
                ability1Active = false;
            }
            mineReset();
        }, 250);
    }
}
//MINING

function mineBlock(x, y, cause) {
    let ore = mine[y][x];
    if (ore === "🟩") ore = "🟫";
    if (ore === "⚪") return;
    if (oreList[ore]["isBreakable"]) {
        if (checkFromCave([y, x])) {
            let adjMulti = getCaveMultiFromOre(mine[y][x]);
            giveBlock(mine[y][x], x, y, false, true, adjMulti);
            mine[y][x] = "⚪";
            checkAllAround(x, y, 1);
            totalMined++;
        } else {
        if (cause === "reset") {
            giveBlock(mine[y][x], x, y, true);
            mine[y][x] = "⚪";
        } else {
            giveBlock(mine[y][x], x, y);
            mine[y][x] = "⚪";
            checkAllAround(x, y);
            totalMined++;
            if (cause !== "ability") {
                rollAbilities();
            }
        }
        }
    }
}

//ORE GENERATION AND OBTAINING

let multis = [1, 50, 250, 500];
let inv;
function giveBlock(type, x, y, fromReset, fromCave) {
    if (type !== "⛏️") {
        if (type === "⚪") return;
        //CREATE VARIABLES
        let oreRarity = Math.round(oreList[type]["numRarity"]);
        let inv = 1;
        //SELECT VARIANT
        if (Math.floor(Math.random() * 50) === 25)
            inv = 2;
        else if (Math.floor(Math.random() * 250) === 125)
            inv = 3;
        else if (Math.floor(Math.random() * 500) === 250)
            inv = 4;
        if (!fromCave) {
            if (currentWorld === 1 && gears[4]) {
                oreList[currentLayer.slice(-1)][variantInvNames[inv - 1]]++;
                updateInventory(currentLayer.slice(-1), 1);
            }
            if (gears[15]) {
                 if (oreRarity === 1 && (Math.random() < 0.5))
                    oreList[type]["normalAmt"] += 2;
            }
            if (gears[13]) {
                if (oreRarity < 750000 && oreRarity > 1)
                    if (Math.random < 0.75)
                        oreList[type]["normalAmt"]++;
            }
            if (oreList[type]["hasLog"])
                verifiedOres.verifyFind(mine[y][x], y, x, names[inv - 1]);
            if (oreRarity > minRarity) {
                if (currentWorld === 1 && gears[7])
                    gearAbility1();
            logFind(type, x, y, namesemojis[inv - 1], totalMined, fromReset);     
        }
        } else {
                if (oreList[type]["hasLog"]) {
                    verifiedOres.verifyFind(mine[y][x], y, x, names[inv - 1]);
                }
                if (oreRarity > minRarity) {
                    logFind(type, x, y, namesemojis[inv - 1], totalMined, fromReset);
                }
                if (currentWorld === 1 && gears[7] && oreRarity >= 750000)
                    gearAbility1();
        }
        oreList[type][variantInvNames[inv - 1]]++;
        updateInventory(type, inv);
    }
}
let minRarity = 750000;
let cat = 1;
let generationProbabilities;
function generateBlock(location) {
    blocksRevealedThisReset++;
    let probabilityTable = currentLayer;
    if (location["Y"] === 1 && currentWorld === 1) {
        probabilityTable = layerList[specialLayers[2]];
    }
    if (currentWorld === 2) {
        if (location["Y"] === 10000 && currentWorld === 2)
            probabilityTable = layerList[specialLayers[3]];
    }
    if ((location["Y"] === 0 && currentWorld === 1) || (location["Y"] === 2000 && currentWorld === 2))
        return ["🟩", false];

    let blockToGive = "";
    let chosenValue = Math.random();
    let summedProbability = 0;
    for (let i = 0; i < probabilityTable.length; i++) {
        summedProbability += oreList[probabilityTable[i]]["decimalRarity"];
        if (chosenValue < summedProbability) {
            blockToGive = probabilityTable[i];
            break;
        }
    }
    let oreRarity = oreList[blockToGive]["numRarity"];
    let hasLog = false;
    if (oreRarity >= minRarity) {
        hasLog = oreList[blockToGive]["hasLog"];
        if (hasLog) {
            verifiedOres.createLog(location["Y"],location["X"],blockToGive, new Error(), verifiedOres.getCurrentLuck());
        }
        spawnMessage(blockToGive, location);
        playSound(oreList[blockToGive]["oreTier"]);
    }
    return [blockToGive, hasLog];
}
/*
let totalSpeeds = 0;
for (let i = 0; i < 30000; i++) {
    generateBlock(1, [curY + 1, curX]);
}
*/
//TELEPORTING

let distanceMulti = 1;
let y = 1000;
function switchDistance() {
        if (y < (allLayers.length - 1) * 2000) {
            y = 2000 * distanceMulti + 1000;
            distanceMulti++;
        } else if (y > (allLayers.length - 1) * 2000) {
            if (currentWorld === 1) {
                y = 1000;
                distanceMulti = 1;
            } else {
                y = 3000;
                distanceMulti = 2;
            }
           
        } else {
            y = 1000;
            distanceMulti = 1;
        }
        let layer = layerList[allLayers[Math.floor(y / 2000)]].slice(-1);
        layer = layer[layer.length - 1];   
        let sub = currentWorld === 2 ? 2000 : 0;
        document.getElementById("meterDisplay").innerHTML = layer + " " + (y - sub).toLocaleString() + "m";
}

async function teleport() {
    canMine = false;
    clearInterval(loopTimer);
    curDirection = "";
    pa1 = [];
    pa2 = [];
    pa3 = [];
    pa4 = [];
    pickaxeAbility23Num = 0;
    canMine = await toLocation();
    displayArea();
}

function toLocation() {
    return new Promise((resolve) => {
    let x = curX;
    for (let r = y - 101; r < y + 101; r++) {
        if(mine[r] === undefined)
            mine[r] = [];
    }
    setLayer(y - 50);
    mine[curY][curX] = "⚪";
    curX = x;
    curY = y;
    checkAllAround(curX, curY, 1);
    mine[curY][curX] = "⛏️";
    setTimeout(() => {
        resolve(true);
    }, 5);
    });
}

function getParams(distanceX, distanceY, x, y) {
    if (x === undefined)
        x = curX;
    if (y === undefined)
        y = curY;
    let displayLeft = 0;
    let displayUp = 0;
    if (x > distanceX)
        displayLeft = distanceX;
    else
        displayLeft = x;
    if (currentWorld === 1) { 
    if (y > distanceY)
        displayUp = distanceY;
    else
        displayUp = y;
    } else {
        if (curY < 2001) {
            if (curY < 1991) {
                if (y > distanceY)
                    displayUp = distanceY;
                else
                    displayUp = y;
            } else {
                if (y > distanceY)
                    displayUp = -1 * (y - 2000);
                else
                    displayUp = y;
            }
            return [displayLeft, displayUp];
        }
        if (curY > 2000) {
            if (y < 2009 && y - 2000 > distanceY - 2000)
                displayUp = y - 2000;
            else
                displayUp = distanceY;
        } else {
            if (y > distanceY)
                displayUp = distanceY;
            else
                displayUp = y;
        }
    }
    return [displayLeft, displayUp];
}
function attemptSwitchWorld() {
    if (pickaxes[13][1]) {
        switchWorld();
    }
}
function switchWorld() {
    distanceMulti = 1;
    y = 1000;
    canMine = false;
    stopMining();
    mine = [];
    if (currentWorld === 1) {
        currentWorld = 2;
        allLayers = worldTwoLayers;
        curX = 1000000000;
        curY = 2001; 
        currentLayerNum = -1;
        setLayer(curY);
        createMine();
        mine[curY + 1][curX] = "📺";
    } else {
        currentWorld = 1;
        allLayers = worldOneLayers;
        currentLayer = allLayers[0];
        curX = 1000000000;
        curY = 0; 
        currentLayerNum = -1;
        setLayer(curY);
        createMine();
    }
    switchDistance();
    displayArea();
    switchWorldCraftables();
    utilitySwitchActions();
    canMine = true;
}
function stopMining() {
    curDirection = "";
    clearInterval(loopTimer);
    if (ability1Active) {
        clearTimeout(ability1Timeout);
        ability1Active = false;
    }
}


