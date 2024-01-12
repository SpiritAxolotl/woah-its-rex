//MINE CREATION

function createMine() {
    for (let r = curY; r < curY + 51; r++) {
        mine.push([]);
        for (let c = curX - 51; c < curX + 51; c++)
            mine[r][c] = r === 0 ? "🟩" : "⬜";
    }
    mine[0][1000000000] = "⛏️"; //trusty pickaxe
    displayArea();
    checkAllAround(curX, curY, 1);
    displayArea();
}

function prepareArea(facing) {
    const constraints = getParams(50, 50);
    switch(facing) {
        case "a":
            for (let r = curY - constraints[1]; r < curY + 50; r++) {
                if (mine[r] === undefined) {
                    mine[r] = [];
                }
                if (mine[r][curX - constraints[0]] === undefined) {
                    if (r === 0) {
                        mine[r][curX - constraints[0]] = "🟩";
                    } else {
                        mine[r][curX - constraints[0]] = "⬜";
                    }
                }
            }
            break;
        case "s":
            if (mine[curY + 50] === undefined)
                mine[curY + 50] = [];
            for (let c = curX - constraints[0]; c < curX + 50; c++) {
                if (mine[curY + 50][c] === undefined) {
                    mine[curY + 50][c] = "⬜"
                }
            }
            break;
        case "d":
            for (let r = curY - constraints[1]; r < curY + 50; r++) {
                if (mine[r] === undefined) {
                    mine[r] = [];
                }
                if (mine[r][curX + 50] === undefined) {
                    if (r === 0) {
                        mine[r][curX + 50] = "🟩";
                    } else {
                        mine[r][curX + 50] = "⬜";
                    }
                }
            }
            break;
        case "w":
            if (mine[curY - constraints[1]] === undefined)
                mine[curY - constraints[1]] = [];
            for (let c = curX - constraints[0]; c < curX + 50; c++) {
                if (mine[curY - constraints[1]][c] === undefined)
                    mine[curY - constraints[1]][c] = curY - constraints[1] === 0 ? "🟩" : "⬜";
            }
            break;
    }
}

function checkAllAround(x, y, luck) {
    let generated;
    if (x - 1 >= 0) {
        if (mine[y][x - 1] === "⬜") {
            generated = generateBlock(luck, [y, x-1]);
            mine[y][x - 1] = generated[0];
            if (generated[1])
                verifiedOres.verifyLog(y, x-1);
            blocksRevealedThisReset++;
        }
    }
    if (mine[y][x + 1] === "⬜") {
        generated = generateBlock(luck, [y, x+1]);
            mine[y][x + 1] = generated[0];
            if (generated[1])
                verifiedOres.verifyLog(y, x+1);
            blocksRevealedThisReset++;
        }
    if (mine[y + 1][x] === "⬜") {
        generated = generateBlock(luck, [y+1, x]);
            mine[y + 1][x] = generated[0];
            if (generated[1])
                verifiedOres.verifyLog(y+1, x);
            blocksRevealedThisReset++;
        }
    if (y - 1 >= 0) {
        if (mine[y - 1][x] === "⬜") {
            generated = generateBlock(luck, [y-1, x]);
            mine[y - 1][x] = generated[0];
            if (generated[1])
                verifiedOres.verifyLog(y-1, x);
            blocksRevealedThisReset++;
        }
    }
    if (blocksRevealedThisReset >= mineCapacity) {
        
        clearInterval(loopTimer);
        blocksRevealedThisReset = 0;
        canMine = false;
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

function mineBlock(x, y, cause, luck) {
    if (mine[y][x] !== "⚪" && mine[y][x] !== "⛏️" && mine[y][x] !== "⬜") {
        let ore = mine[y][x];
        if (ore === "🟩")
            ore = "🟫";
        if (cause === "reset") {
            giveBlock(mine[y][x], x, y, true);
            mine[y][x] = "⚪";
        } else {
            giveBlock(mine[y][x], x, y);
            mine[y][x] = "⚪";
            checkAllAround(x, y, luck);
            totalMined++;
            if (cause !== "ability") {
                rollAbilities();
                updateActiveRecipe();
            }
        }
    }
}

//ORE GENERATION AND OBTAINING

let multis = [1, 50, 250, 500];
let inv;
function giveBlock(type, x, y, fromReset) {
    if (gears[4]) {
        let block = Object.keys(currentLayer);
        block = block[block.length - 1];
        oreList[block][1][0]++;
        updateInventory(block, 1);
    }
    
    if (type !== "⛏️") {
        inv = 1;
        if (type === "🟩")
            type = "🟫";
        if (Math.floor(Math.random() * 50) === 25)
            inv = 2;
        else if (Math.floor(Math.random() * 250) === 125)
            inv = 3;
        else if (Math.floor(Math.random() * 500) === 250)
            inv = 4;
        if (Math.round(1 / (oreList[type][0])) >= 160000000)
            verifiedOres.verifyFind(mine[y][x], y, x, names[inv - 1]);
        if (Math.round(1/oreList[type][0]) >= 750000) {
            if (gears[7])
                gearAbility1();
            if (currentPickaxe >= 7) {
                if (Math.round(1/oreList[type][0]) > 2000000)
                    logFind(type, x, y, namesemojis[inv - 1], totalMined, fromReset);
            } else
                logFind(type, x, y, namesemojis[inv - 1], totalMined, fromReset);
        }
        oreList[type][1][inv-1]++;
        updateInventory(type, inv);
    }
}

function generateBlock(luck, location) {
    let hasLog = false;
    let probabilityTable = currentLayer;
    let blockToGive = "";
    let summedProbability = 0;
    let chosenValue = Math.random();
    chosenValue /= luck;
    if (location[0] === 1 && chosenValue < 1/2000000000) {
        blockToGive = "🥬"
        verifiedOres.createLog(location[0],location[1],blockToGive, new Error(), luck);
        hasLog = true;
        spawnMessage(blockToGive, location);
        playSound("magnificent");
    }
    else {
        for (let propertyName in probabilityTable) {
            summedProbability += probabilityTable[propertyName];
            if (chosenValue < summedProbability) {
                blockToGive = propertyName;
                break;
            }
        }
        if (Math.round(1 / (probabilityTable[blockToGive])) >= 750000) {
            if (Math.round(1 / (probabilityTable[blockToGive])) > 5000000000) {
                if (blockToGive === "🧌") {
                    localStorage.setItem("nyehehehehehe", true);
                    blockToGive = "♾️"
                }
                verifiedOres.createLog(location[0],location[1],blockToGive, new Error(), luck);
                hasLog = true;
                spawnMessage(blockToGive, location);
                playSound("zenith");
            } else if (Math.round(1 / (probabilityTable[blockToGive])) > 1500000000) {
                verifiedOres.createLog(location[0],location[1],blockToGive, new Error(), luck);
                hasLog = true;
                spawnMessage(blockToGive, location);
                playSound("magnificent");
            } else if (Math.round(1 / (probabilityTable[blockToGive])) > 750000000) {
                verifiedOres.createLog(location[0],location[1],blockToGive, new Error(), luck);
                hasLog = true;
                spawnMessage(blockToGive, location);
                playSound("otherworldly");
            } else if (Math.round(1 / (probabilityTable[blockToGive])) >= 160000000) {
                verifiedOres.createLog(location[0],location[1],blockToGive, new Error(), luck);
                hasLog = true;
                spawnMessage(blockToGive, location);
                playSound("unfathomable");
            } else if (Math.round(1 / (probabilityTable[blockToGive])) >= 25000000) {
                spawnMessage(blockToGive, location);
                playSound("enigmatic");
            } else if (Math.round(1 / (probabilityTable[blockToGive])) >= 5000000) {
                spawnMessage(blockToGive, location);
                if (currentPickaxe < 8 && !(gears[3]))
                    playSound("transcendent");
            } else if (Math.round(1 / (probabilityTable[blockToGive])) >= 750000) {
                spawnMessage(blockToGive, location);
                if (currentPickaxe < 7)
                    playSound("exotic");
            }
        }
    }
    return [blockToGive, hasLog];
}

//TELEPORTING

let distanceMulti = 1;
function switchDistance() {
    let y = document.getElementById("meterDisplay").innerHTML;
    y = Number(y.substring(0, y.length - 1));
    if (y < 14000) {
        y = 2000 * distanceMulti + 1000;
        distanceMulti++;
    } else {
        y = 1000;
        distanceMulti = 1;
    }
    document.getElementById("meterDisplay").innerHTML = (y) + "m";
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
    for (let r = y - 50; r < y + 50; r++) {
        if(mine[r] === undefined)
            mine[r] = [];
        for (let c = x - 50; c < x + 50; c++) {
            if (mine[r][c] === undefined)
                mine[r][c] = "⬜";
        }
    }
    setLayer(y - 50);
    mine[curY][curX] = "⚪";
    curX = x;
    curY = y;
    checkAllAround(curX, curY, 1);
    mine[curY][curX] = "⛏️";
    
    setTimeout(() => {
        resolve(true);
    }, 1000);
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
    if (y > distanceY)
        displayUp = distanceY;
    else
        displayUp = y;
    return [displayLeft, displayUp];
}