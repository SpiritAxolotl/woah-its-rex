const caves = [50, 35, 20, 10];

function generateCave(x, y, rate, reps, type) {
    if (type === undefined) {
        type = getCaveType();
        if (type === undefined) {
            type = currentLayer;
        }
    }
        let distX = random(3, 12);
        let distY = random(3, 12);
        let newOrigins = [];
        for (let r = y; r < y + distY; r++) {
            for (let c = x; c < x + distX; c++) {
                if (Math.random() < (0.1 - rate))
                    newOrigins.push({x: c + random(-4, 1), y: r + random(-2, 3)});
                    if (r > 0) {
                        if (mine[r][c] === "⬜") {
                            const generated = generateCaveBlock(r, c, type);
                            mine[r][c] = generated["ore"];
                            if (generated["hasLog"])
                                verifiedOres.verifyLog(r, c);
                        }
                        
                    }
                    mineCaveBlock(c, r, type);
            }
        }
        rate += 0.025;
        reps++;
        for (let origin of newOrigins)
            generateCave(origin["x"], origin["y"], rate, reps, type);
        displayArea();
}

function mineCaveBlock(x, y, type) {
    let block = mine[y][x];
    if (block !== undefined) {
        if (block !== "⚪" && block !== "⬜" && block !== "⛏️") {
            giveBlock(block, x, y, false, true, getCaveMultiFromOre(block));
            mine[y][x] = "⚪";
        }
        for (let i = 0; i < caveOreLocations.length; i++) {
            if (y === caveOreLocations[i][0] && x === caveOreLocations[i][1]) {
                caveOreLocations.splice(i, 1);
                break;
            }
        }
    }
    //CHECK BELOW THE BLOCK
    let generated;
    if (mine[y + 1] === undefined) {
        mine[y + 1] = [];
    }
    if (mine[y + 1][x] === undefined) {
        mine[y + 1][x] = "⬜";
    }
    if (mine[y + 1][x] === "⬜") {
        generated = generateCaveBlock(y + 1, x, type);
        mine[y + 1][x] = generated["ore"];
        if (generated["hasLog"])
            verifiedOres.verifyLog(y + 1, x);
        blocksRevealedThisReset++;
    }
    //CHECK TO THE RIGHT OF THE BLOCK
    if (mine[y][x + 1] === undefined) {
        mine[y][x + 1] = "⬜";
    }
    if (mine[y][x + 1] === "⬜") {
        generated = generateCaveBlock(y, x + 1, type);
        mine[y][x + 1] = generated["ore"];
        if (generated["hasLog"])
            verifiedOres.verifyLog(y, x + 1);
        blocksRevealedThisReset++;
    }
    //CHECK TO THE LEFT OF THE BLOCK
    if (mine[y][x - 1] === undefined) {
        mine[y][x - 1] = "⬜";
    }
    if (mine[y][x - 1] === "⬜") {
        generated = generateCaveBlock(y, x - 1, type);
        mine[y][x - 1] = generated["ore"];
        if (generated["hasLog"])
            verifiedOres.verifyLog(y, x - 1);
        blocksRevealedThisReset++;
    }
    //CHECK ABOVE THE BLOCK
    if (y - 1 > 0 && mine[y - 1] === undefined) {
        mine[y - 1] = [];
    }
    if (y - 1 > 0 && mine[y - 1] === undefined) {
        mine[y - 1] = "⬜";
    }
    if (y - 1 > 0 && mine[y - 1][x] === "⬜") {
        generated = generateCaveBlock(y - 1, x, type);
        mine[y - 1][x] = generated["ore"];
        if (generated["hasLog"])
            verifiedOres.verifyLog(y - 1, x);
        blocksRevealedThisReset++;
    }
}

function generateCaveBlock(y, x, type) {
    let hasLog = false,
        layer = type.concat(spawnsEverywhere),
        summedProbability = 0;
    const baseLuck = Math.random();
    //const modifiedLuck = baseLuck/luck;
    for (let ore of sortOres(layer)) {
        summedProbability += 1/oreList[ore]["prob"];
        //const chosenLuck = unaffectedByLuck.indexOf(ore) === -1 ? modifiedLuck : baseLuck;
        if (baseLuck < summedProbability) {
            blockToGive = ore;
            break;
        }
    }
    //GETS THE CAVE RARITY TO MULTIPLY ORE RARITY BY FOR ADJUSTED RARITY
    const multi = getCaveMulti(type);
    
    //PLAYS SOUNDS AND CREATES LOGS BASED ON CAVE RARITY
    const adjRarity = oreList[blockToGive]["prob"] / multi;
    if (allCaves.includes(type)) {
        if (adjRarity > 750000) {
            verifiedOres.createLog(y, x, blockToGive, new Error(), 1);
            spawnMessage(blockToGive, {y: y, x: x}, {isCave: true, rarity: adjRarity});
            hasLog = true;
            attemptToPlaySound(adjRarity);
        }
    }
    if (oreList[blockToGive]["prob"] > 1)
        caveOreLocations.push({y: y, x: x, rarity: adjRarity});
    
    return {ore: blockToGive, hasLog: hasLog, adjRarity: adjRarity};
}

function getCaveMulti(type) {
    let multi;
    switch(type) {
        case caveType1:
            multi = caves[0];
            break;
        case caveType2:
            multi = caves[1];
            break;
        case caveType3:
            multi = caves[2];
            break;
        case caveType4:
            multi = caves[3];
            break;
        default:
            multi = 1;
    }
    return multi;
}

function getCaveType() {
    let caveType = undefined;
    let summedProbability = 0;
    let chosenValue = Math.random();
    for (let cave of caves) {
        summedProbability += 1/cave;
        if (chosenValue < summedProbability) {
            caveType = allCaves[caves.indexOf(cave)];
            break;
        }
    }
    return caveType;
}

let caveOreLocations = [];
function checkFromCave(y, x) {
    for (let i = 0; i < caveOreLocations.length; i++) {
        if (y === caveOreLocations[i]["y"] && x === caveOreLocations[i]["x"]) {
            caveOreLocations.splice(i, 1);
            return true;
        }
    }
    return false;
}
function getCaveMultiFromOre(ore) {
    for (let cave of allCaves) {
        if (cave[ore] !== undefined) {
            return caves[allCaves.indexOf(cave)];
        }
    }
    return 1;
}
function getCaveTypeFromOre(ore) {
    for (let cave of allCaves) {
        if (cave[ore] !== undefined) {
            return cave;
        }
    }
    return currentLayer;
}
//generateCave(curX, curY, 0, 0);
