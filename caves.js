function generateCave(x, y, rate, reps, type) {
    let caveType;
    if (type === undefined) {
        type = getCaveType();
        if (type === undefined) {
            type = currentLayer;
        }
    }
    caveType = type;
        let distX = Math.round(Math.random() * 10) + 3;
        let distY = Math.round(Math.random() * 10) + 3;
        let newOrigins = [];
            if ((mine[y] != undefined && mine[y + distY] != undefined) && !(mine[y][x] === "⚪" && mine[y + distY][x + distX] === "⚪")) {
            for (let r = y; r < y + distY; r++) {
                for (let c = x; c < x + distX; c++) {
                    if (Math.random() < (0.1 - rate))
                        newOrigins.push([c + (Math.round(Math.random() * 4)) - (5 + reps), r + (Math.round(Math.random() * 4)) - (5 + reps)]);
                    
                        if (r > 0) {
                            if (mine[r][c] === "⬜") {
                                let generated = generateCaveBlock(r, c, caveType);
                                mine[r][c] = generated[0];
                                if (generated[1])
                                    verifiedOres.verifyLog(r, c);
                            }
                            
                        }
                        mineCaveBlock(c, r, caveType);
                }
            }
            let newRate = Math.round(Math.random() * 10) / 450;
            rate += newRate;
            reps++;
        }
        for (let i = 0; i < newOrigins.length; i++) {
            generateCave(newOrigins[i][0], newOrigins[i][1], rate, reps, caveType);
        }
        displayArea();
}

function mineCaveBlock(c, r, type) {
    let block = mine[r][c];
    let caveMulti = getCaveMulti(type);
    if (block != undefined) {
        if (block != "⚪" && block != "⬜" && block != "⛏️") {
            giveBlock(block, c, r, false, true, caveMulti);
            mine[r][c] = "⚪";
        }
        for (let i = 0; i < caveOreLocations.length; i++) {
            if (r === caveOreLocations[i][0] && c === caveOreLocations[i][1]) {
                caveOreLocations.splice(i, 1);
                break;
            }    
        }
    }
    //CHECK BELOW THE BLOCK
    let generated;
    if (mine[r + 1] === undefined) {
        mine[r + 1] = [];
    }
    if (mine[r + 1][c] === undefined) {
        mine[r + 1][c] = "⬜";
    }
    if (mine[r + 1][c] === "⬜") {
        generated = generateCaveBlock(r + 1, c, type);
        mine[r + 1][c] = generated[0];
        if (generated[1]) 
            verifiedOres.verifyLog(r + 1, c);
        blocksRevealedThisReset++;
    }
    //CHECK TO THE RIGHT OF THE BLOCK
    if (mine[r][c + 1] === undefined) {
        mine[r][c + 1] = "⬜";
    }
    if (mine[r][c + 1] === "⬜") {
        generated = generateCaveBlock(r, c + 1, type);
        mine[r][c + 1] = generated[0];
        if (generated[1]) 
            verifiedOres.verifyLog(r, c + 1);
        blocksRevealedThisReset++;
    }
    //CHECK TO THE LEFT OF THE BLOCK
    if (mine[r][c - 1] === undefined) {
        mine[r][c - 1] = "⬜";
    }
    if (mine[r][c - 1] === "⬜") {
        generated = generateCaveBlock(r, c - 1, type);
        mine[r][c - 1] = generated[0];
        if (generated[1]) 
            verifiedOres.verifyLog(r, c - 1);
        blocksRevealedThisReset++;
    }
    //CHECK ABOVE THE BLOCK 
    if (r - 1 > 0 && mine[r - 1] === undefined) {
        mine[r - 1] = [];
    }
    if (r - 1 > 0 && mine[r - 1][c] === undefined) {
        mine[r - 1][c] = "⬜";
    }
    if (r - 1 > 0 && mine[r - 1][c] === "⬜") {
        generated = generateCaveBlock(r - 1, c, type);
        mine[r - 1][c] = generated[0];
        if (generated[1]) 
            verifiedOres.verifyLog(r - 1, c);
        blocksRevealedThisReset++;
    }
}
//let caveLuck = 1;
function generateCaveBlock(y, x, type) {
    let hasLog;
    let probabilityTable = type;
    let summedProbability = 0;
    let chosenValue = Math.random();
    //chosenValue /= caveLuck;
    for (let propertyName in probabilityTable) {
        summedProbability += probabilityTable[propertyName];
        if (chosenValue < summedProbability) {
            blockToGive = propertyName;
            break;
        }
    }
    //GETS THE CAVE RARITY TO MULTIPLY ORE RARITY BY FOR ADJUSTED RARITY
    let multi = getCaveMulti(type);
    
    //PLAYS SOUNDS AND CREATES LOGS BASED ON CAVE RARITY
    let adjRarity = (1/oreList[blockToGive][0]) * multi;
    if (allCaves.includes(type)) {
        if (adjRarity > 25000000) {
            if (adjRarity > 50000000000) { //50B
                verifiedOres.createLog(y,x,blockToGive, new Error(), 1);
                spawnMessage(blockToGive, [y, x], [true, adjRarity]);
                hasLog = true;
                playSound("zenith")
            } else if (adjRarity > 10000000000) { //10B
                verifiedOres.createLog(y,x,blockToGive, new Error(), 1);
                spawnMessage(blockToGive, [y, x], [true, adjRarity]);
                hasLog = true;
                playSound("magnificent")
            } else if (adjRarity > 1000000000) { //1B
                verifiedOres.createLog(y,x,blockToGive, new Error(), 1);
                spawnMessage(blockToGive, [y, x], [true, adjRarity]);
                hasLog = true;
                playSound("otherworldly")
            } else if (adjRarity > 500000000) { //500M
                verifiedOres.createLog(y,x,blockToGive, new Error(), 1);
                spawnMessage(blockToGive, [y, x], [true, adjRarity]);
                hasLog = true;
                playSound("unfathomable")
            } else if (adjRarity > 250000000) { // 250M
                verifiedOres.createLog(y,x,blockToGive, new Error(), 1);
                spawnMessage(blockToGive, [y, x], [true, adjRarity]);
                hasLog = true;
                playSound("enigmatic");
            }
        }
    } else {
        let location = [y, x];
        if (Math.round(1 / (probabilityTable[blockToGive])) > 5000000000) {
            verifiedOres.createLog(location[0],location[1],blockToGive, new Error(), 1);
            hasLog = true;
            spawnMessage(blockToGive, location);
            playSound("zenith");
        } else if (Math.round(1 / (probabilityTable[blockToGive])) > 1500000000) {
            verifiedOres.createLog(location[0],location[1],blockToGive, new Error(), 1);
            hasLog = true;
            spawnMessage(blockToGive, location);
            playSound("magnificent");
        } else if (Math.round(1 / (probabilityTable[blockToGive])) > 750000000) {
            verifiedOres.createLog(location[0],location[1],blockToGive, new Error(), 1);
            hasLog = true;
            spawnMessage(blockToGive, location);
            playSound("otherworldly");
        } else if (Math.round(1 / (probabilityTable[blockToGive])) >= 160000000) {
            verifiedOres.createLog(location[0],location[1],blockToGive, new Error(), 1);
            hasLog = true;
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
    }
    if (oreList[blockToGive][0] < 1/1) {
        caveOreLocations.push([y, x, adjRarity]);
    }
    
    return [blockToGive, hasLog, adjRarity];
}

function getCaveMulti(type) {
    let multi;
    switch(type) {
        case type1Ores:
            multi = caveMultis[0];
            break;
        case type2Ores:
            multi = caveMultis[1];
            break;
        case type3Ores:
            multi = caveMultis[2];
            break;
        case type4Ores:
            multi = caveMultis[3];
            break;
        default:
            multi = 1;
    }
    return multi;
}

let caveTypes = {
    "1": 1/50,
    "2": 1/35,
    "3": 1/20,
    "4": 1/10
}
let caveMultis = [50, 35, 20, 10];

let type1Ores = {
    "🪔" : 1/2000000000,
    "🩺" : 1/800000000,
    "💱" : 1/180000000,
    "🔭" : 1/15000000,
    "📡" : 1/8000000,
    "❓" : 1/1
}
let type2Ores = {
    "🎷" : 1/2500000000,
    "🪘" : 1/500000000,
    "🥁" : 1/100000000,
    "🪇" : 1/20000000,
    "🎹" : 1/10000000,
    "🎵" : 1/1
}
let type3Ores = {
    "🧫" : 1/4000000000,
    "🛸" : 1/1000000000,
    "🍄" : 1/250000000,
    "🕸️" : 1/40000000,
    "💉" : 1/17500000,
    "☣️" : 1/1
}
let type4Ores = {
    "⚕️" : 1/50000000000,
    "🌡️" : 1/3000000000,
    "💊" : 1/800000000,
    "🧬" : 1/70000000,
    "🍥" : 1/27500000,
    "🦠" : 1/1
}
let allCaves = [type1Ores, type2Ores, type3Ores, type4Ores];
function getCaveType() {
    let caveType = undefined;
    let summedProbability = 0;
    let chosenValue = Math.random();
    for (let propertyName in caveTypes) {
        summedProbability += caveTypes[propertyName];
        if (chosenValue < summedProbability) {
            caveType = allCaves[Number(propertyName) - 1];
            break;
        }
    }
    return caveType;
}

let caveOreLocations = [];
function checkFromCave(location) {
    for (let i = 0; i < caveOreLocations.length; i++) {
        if (location[0] === caveOreLocations[i][0] && location[1] === caveOreLocations[i][1]) {
            caveOreLocations.splice(i, 1);
            return true;
        }    
    }
    return false;
}
function getCaveMultiFromOre(ore) {
    for (let i = 0; i < allCaves.length; i++) {
        if (allCaves[i][ore] != undefined) {
            return getCaveMulti(allCaves[i]);
        } 
    }
    return 1;
}
function getCaveTypeFromOre(ore) {
    for (let i = 0; i < allCaves.length; i++) {
        if (allCaves[i][ore] != undefined) {
            return allCaves[i];
        } 
    }
    return currentLayer;
}
//generateCave(curX, curY, 0, 0);