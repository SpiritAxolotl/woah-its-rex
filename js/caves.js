function generateCave(x, y, rate, reps, type) {
    type ??= getCaveType();
    let lower = Math.max(0, 3-Math.floor(reps*0.5));
    let upper = Math.max(Math.max(0, lower-Math.floor(reps*0.5)), 12-reps);
    let distX = random(lower, upper);
    let distY = random(lower, upper);
    let newOrigins = [];
    for (let r = y; r < y + distY; r++) {
        for (let c = x; c < x + distX; c++) {
            if (Math.random() < 0.1 - rate) {
                newOrigins.push({x: c + random(-4, 1), y: r + random(-2, 3)});
                if (typeof mine[r] === "object" && typeof mine[r][c] === "string") {
                    if (r > 0 && mine[r][c] === "⬛️") {
                        const generated = generateCaveBlock(r, c, type);
                        mine[r][c] = generated["ore"];
                        if (generated["hasLog"])
                            verifiedOres.verifyLog(r, c);
                    }
                    mineCaveBlock(c, r, type);
                }
            }
        }
    }
    rate += random(9) / 450;
    reps++;
    for (const origin of newOrigins)
        generateCave(origin["x"], origin["y"], rate, reps, type);
}

function mineCaveBlock(x, y, type) {
    const block = mine[y][x];
    if (typeof block === "string") {
        if (block !== "⬜" && block !== "⬛️" && block !== "⛏️") {
            const variant = mineBlockData[y]?.[x]?.["variant"] ?? decideVariant();
            giveBlock(block, x, y, false, true, variant, getCaveMultiFromOre(block));
            mine[y][x] = "⬜";
        }
        for (let i = 0; i < caveOreLocations.length; i++) {
            if (y === caveOreLocations[i]["y"] && x === caveOreLocations[i]["x"]) {
                caveOreLocations.splice(i, 1);
                break;
            }
        }
    }
    //CHECK BELOW THE BLOCK
    let generated;
    mine[y + 1] ??= [];
    mine[y + 1][x] ??= "⬛️";
    if (mine[y + 1][x] === "⬛️") {
        generated = generateCaveBlock(y + 1, x, type);
        mine[y + 1][x] = generated["ore"];
        if (generated["hasLog"])
            verifiedOres.verifyLog(y + 1, x);
        blocksRevealedThisReset++;
    }
    //CHECK TO THE RIGHT OF THE BLOCK
    mine[y][x + 1] ??= "⬛️";
    if (mine[y][x + 1] === "⬛️") {
        generated = generateCaveBlock(y, x + 1, type);
        mine[y][x + 1] = generated["ore"];
        if (generated["hasLog"])
            verifiedOres.verifyLog(y, x + 1);
        blocksRevealedThisReset++;
    }
    //CHECK TO THE LEFT OF THE BLOCK
    mine[y][x - 1] ??= "⬛️";
    if (mine[y][x - 1] === "⬛️") {
        generated = generateCaveBlock(y, x - 1, type);
        mine[y][x - 1] = generated["ore"];
        if (generated["hasLog"])
            verifiedOres.verifyLog(y, x - 1);
        blocksRevealedThisReset++;
    }
    //CHECK ABOVE THE BLOCK
    //mine[y - 1] ??= [];
    mine[y - 1] ??= "⬛️";
    if (y - 1 > 0 && mine[y - 1][x] === "⬛️") {
        generated = generateCaveBlock(y - 1, x, type);
        mine[y - 1][x] = generated["ore"];
        if (generated["hasLog"])
            verifiedOres.verifyLog(y - 1, x);
        blocksRevealedThisReset++;
    }
    if (debug && debugVerbose) displayArea();
}

let caveLuck = 1;
//I think this causes problems when rare ores spawn. disabling caves until fixed
function generateCaveBlock(y, x, type) {
    let hasLog = false;
    const layer = type.concat(spawnsEverywhere);
    let summedProbability = 0;
    const baseLuck = Math.random()*addUpLayerProbs(layer);
    const modifiedLuck = baseLuck/caveLuck;
    for (const ore of sortOres(layer)) {
        summedProbability += 1/oreList[ore]["prob"];
        const chosenLuck = !unaffectedByLuck.includes(ore) ? modifiedLuck : baseLuck;
        if (chosenLuck < summedProbability) {
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
            spawnMessage(blockToGive, {y: y, x: x}, {fromCave: true, rarity: adjRarity});
            hasLog = true;
            attemptToPlaySound(adjRarity);
        }
    }
    if (oreList[blockToGive]["prob"] > 1)
        caveOreLocations.push({y: y, x: x, rarity: adjRarity});
    
    return {ore: blockToGive, hasLog: hasLog, adjRarity: adjRarity};
}

function getCaveMulti(cave) {
    return allCaveMultis[allCaves.indexOf(cave)];
}

const caveProbsSum = addUpLayerProbs(allCaveMultis);
function getCaveType() {
    let luck = 1;
    if (hasPickaxe("wings-of-glory"))
        luck = 2;
    let caveType = undefined;
    let summedProbability = 0;
    const chosenValue = Math.random()*caveProbsSum;
    for (const cave of allCaveMultis) {
        summedProbability += 1/cave;
        if (chosenValue < summedProbability) {
            caveType = allCaves[allCaveMultis.indexOf(cave)];
            break;
        }
    }
    return caveType ?? currentLayer;
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
    for (const cave of allCaves) {
        if (cave.includes(ore))
            return allCaveMultis[allCaves.indexOf(cave)];
    }
    return 1;
}

function getCaveTypeFromOre(ore) {
    for (const cave of allCaves) {
        if (cave.includes(ore)) {
            return cave;
        }
    }
    return currentLayer;
}
//generateCave(curX, curY, 0, 0);
