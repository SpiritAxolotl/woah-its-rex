//MINE CREATION

function createMine() {
    for (let y = curY; y < curY + 51; y++) {
        mine.push([]);
        for (let c = curX - 51; c < curX + 51; c++)
            mine[y][c] = y === 0 ? "🟩" : "⬜";
    }
    mine[0][1000000000] = "⛏️"; //trusty pickaxe
    setLayer(0);
    checkAllAround(curX, curY, 1);
    displayArea();
}

function prepareArea(facing) {
    const constraints = getParams(50, 50);
    switch(facing) {
        case "a":
            for (let y = curY - constraints["up"]; y < curY + 50; y++) {
                if (mine[y] === undefined)
                    mine[y] = [];
                if (mine[y][curX - constraints["left"]] === undefined)
                    mine[y][curX - constraints["left"]] = y === 0 ? "🟩" : "⬜";
            }
            break;
        case "s":
            if (mine[curY + 50] === undefined)
                mine[curY + 50] = [];
            for (let x = curX - constraints["left"]; x < curX + 50; x++) {
                if (mine[curY + 50][x] === undefined)
                    mine[curY + 50][x] = "⬜";
            }
            break;
        case "d":
            for (let y = curY - constraints["up"]; y < curY + 50; y++) {
                if (mine[y] === undefined)
                    mine[y] = [];
                if (mine[y][curX + 50] === undefined)
                    mine[y][curX + 50] = y === 0 ? "🟩" : "⬜";
            }
            break;
        case "w":
            if (mine[curY - constraints["up"]] === undefined)
                mine[curY - constraints["up"]] = [];
            for (let x = curX - constraints["left"]; x < curX + 50; x++) {
                if (mine[curY - constraints["up"]][x] === undefined)
                    mine[curY - constraints["up"]][x] = curY - constraints["up"] === 0 ? "🟩" : "⬜";
            }
            break;
    }
}

function checkAllAround(x, y, luck) {
    let generated;
    if (x - 1 >= 0 && mine[y][x - 1] === "⬜") {
        generated = generateBlock(luck, {y: y, x: x-1});
        mine[y][x - 1] = generated["ore"];
        if (generated["hasLog"])
            verifiedOres.verifyLog(y, x-1);
        blocksRevealedThisReset++;
    }
    if (mine[y][x + 1] === "⬜") {
        generated = generateBlock(luck, {y: y, x: x+1});
        mine[y][x + 1] = generated["ore"];
        if (generated["hasLog"])
            verifiedOres.verifyLog(y, x+1);
        blocksRevealedThisReset++;
    }
    if (mine[y + 1][x] === "⬜") {
        generated = generateBlock(luck, {y: y+1, x: x});
        mine[y + 1][x] = generated["ore"];
        if (generated["hasLog"])
            verifiedOres.verifyLog(y+1, x);
        blocksRevealedThisReset++;
    }
    if (y - 1 >= 0 && mine[y - 1][x] === "⬜") {
        generated = generateBlock(luck, {y: y-1, x: x});
        mine[y - 1][x] = generated["ore"];
        if (generated["hasLog"])
            verifiedOres.verifyLog(y-1, x);
        blocksRevealedThisReset++;
    }
    if (blocksRevealedThisReset >= mineCapacity) {
        clearInterval(loopTimer);
        blocksRevealedThisReset = 0;
        canMine = false;
        gearAbilityInfinityCollector();
        setTimeout(() => {
            if (realVitriolActive) {
                clearTimeout(realVitriolTimeout);
                realVitriolActive = false;
            }
            mineReset();
        }, 250);
    }
}

//MINING

function mineBlock(x, y, cause, luck) {
    if (mine[y][x] === "⬜") {
        generated = generateBlock(luck, {y: y, x: x});
        mine[y][x] = generated["ore"];
        if (generated["hasLog"])
            verifiedOres.verifyLog(r, c);
    }
    if (mine[y][x] !== "⚪" && mine[y][x] !== "⛏️") {
        if (checkFromCave(y, x)) {
            const adjMulti = getCaveMultiFromOre(mine[y][x]);
            giveBlock(mine[y][x], x, y, false, true, adjMulti);
            mine[y][x] = "⚪";
            checkAllAround(x, y, 1);
            totalMined++;
        } else {
            let ore = mine[y][x];
            if (ore === "🟩") ore = "🟫";
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
                    updateActiveRecipe(ore);
                }
            }
        }
    }
    if (debug && debugVerbose) displayArea();
}

//ORE GENERATION AND OBTAINING

const variantMultis = {
    "normal": 1,
    "electrified": 50,
    "radioactive": 250,
    "explosive": 500
};

function giveBlock(ore, x, y, fromReset, fromCave, rarity) {
    if (hasGear("layer-materializer")) {
        const block = currentLayer[currentLayer.length-1];
        inventory[block]["normal"]++;
        updateInventory(block, "normal");
    }
    
    if (ore !== "⛏️") {
        let variant = 0;
        if (ore === "🟩") ore = "🟫";
        const rand = random(1, 500);
        if (rand % 50 === 0) variant = 1;
        if (rand % 250 === 0) variant = 2;
        if (rand % 500 === 0) variant = 3;
        if (!fromCave) {
            if (hasGear("layer-materializer")) {
                const block = sortOres(currentLayer).reverse()[0];
                inventory[block]["normal"]++;
                updateInventory(block, "normal");
            }
            if (oreList[ore]["prob"] >= 160000000)
                verifiedOres.verifyFind(mine[y][x], y, x, variantNames[variant]);
            if (oreList[ore]["prob"] >= 750000) {
                if (hasGear("energy-siphoner")) gearAbilityProc();
                if (Object.keys(pickaxes).indexOf(currentPickaxe) < 6 || oreList[ore]["prob"] > 2000000)
                    logFind(ore, x, y, variantNamesEmojis[variant], totalMined, fromReset);
            }
            inventory[ore][variantNames[variant].toLowerCase()]++;
            updateInventory(ore, variantNames[variant]);
            updateIndex(ore);
        } else {
            if (getCaveTypeFromOre(ore) === currentLayer) {
                if (oreList[ore]["prob"] * rarity > 160000000) {
                    verifiedOres.verifyFind(mine[y][x], y, x, variantNames[variant]);
                }
                if (oreList[ore]["prob"] >= 750000) {
                    if (hasGear("energy-siphoner"))
                        gearAbilityProc();
                    if (Object.keys(pickaxes).indexOf(currentPickaxe) >= 6) {
                        if (oreList[ore]["prob"] > 2000000)
                            logFind(ore, x, y, variantNamesEmojis[variant], totalMined, fromReset);
                    } else
                        logFind(ore, x, y, variantNamesEmojis[variant], totalMined, fromReset);
                }
            } else {
                if (oreList[ore]["prob"] * rarity >= 250000000) {
                    verifiedOres.verifyFind(mine[y][x], y, x, variantNames[variant]);
                    logFind(ore, x, y, variantNamesEmojis[variant], totalMined, fromReset);
                }
                if (hasGear("energy-siphoner")) gearAbilityProc();
            }
            inventory[ore][variantNames[variant].toLowerCase()]++;
            updateInventory(ore, variantNames[variant]);
            updateIndex(ore);
        }
    }
}

let layerProbsSum;
function generateBlock(luck, location) {
    if (debug && typeof debugLuck === "number") luck = debugLuck;
    let hasLog = false;
    const layer = currentLayer.concat(spawnsEverywhere);
    if (location["y"] === 1)
        layer.push("🥬");
    let blockToGive = "";
    let summedProbability = 0;
    const baseLuck = Math.random()*layerProbsSum;
    const modifiedLuck = baseLuck/luck;
    if (location["y"] === 0)
        return {ore: "🟩", hasLog: false};
    for (let ore of sortOres(layer)) {
        summedProbability += 1/oreList[ore]["prob"];
        const chosenLuck = !unaffectedByLuck.includes(ore) ? modifiedLuck : baseLuck;
        if (chosenLuck < summedProbability) {
            blockToGive = ore;
            break;
        }
    }
    const probability = oreList[blockToGive]["prob"];
    if (probability >= 750000) {
        //TODO: make a better less hardcoded system for replacing blocks
        /*if (blockToGive === "🧌") {
            localStorage.setItem("nyehehehehehe", true);
            blockToGive = "♾️";
        }*/
        if (probability > 160000000) {
            verifiedOres.createLog(location["y"], location["x"], blockToGive, new Error(), luck);
            hasLog = true;
        }
        spawnMessage(blockToGive, location);
        if (stopOnRare) {
            if (Object.keys(pickaxes).indexOf(currentPickaxe) < 6 || probability > 2000000)
                stopMining();
        }
    }
    attemptToPlaySound(probability);
    return {ore: blockToGive, hasLog: hasLog};
}

function stopMining() {
    goDirection(currDirection, 0);
}

//TELEPORTING

let distanceMulti = 1;
let teleportY = 1000;
function switchDistance(direction) {
    const dir = direction === "up" ? 1 : -1;
    if (teleportY >= 1000 && teleportY <= 15000) {
        teleportY += 2000 * dir;
        distanceMulti += dir;
        if (distanceMulti < 1) {
            teleportY = 15000;
            distanceMulti = 8;
        } else if (distanceMulti > 8) {
            teleportY = 1000;
            distanceMulti = 1;
        }
    } else if (teleportY >= 14000) {
        teleportY = 1000;
        distanceMulti = 1;
    } else if (teleportY < 1000) {
        teleportY = 15000;
        distanceMulti = 8;
    } else {
        teleportY = 1000;
        distanceMulti = 1;
    }
    document.getElementById("teleportButton").title = `Teleports you to ${teleportY}m`;
    document.getElementById("teleportButton").innerHTML = `${lastItemIn(allLayers[(teleportY-1000)/2000])}`;
}

async function teleport(goToY) {
    canMine = false;
    clearInterval(loopTimer);
    currDirection = "";
    canMine = await toLocation(goToY);
    displayArea();
}

function toLocation(goToY) {
    return new Promise((resolve) => {
    let x = curX;
    let y = goToY || teleportY;
    if (typeof y !== "number") {
        y = document.getElementById("teleportButton").innerHTML;
        y = Number(y.substring(y.lastIndexOf(">")+1, y.lastIndexOf("m")));
    }
    for (let r = y - 50; r < y + 50; r++) {
        if(mine[r] === undefined) mine[r] = [];
        for (let c = x - 50; c < x + 50; c++)
            if (mine[r][c] === undefined) mine[r][c] = "⬜";
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
    if (x === undefined) x = curX;
    if (y === undefined) y = curY;
    let displayLeft = 0;
    let displayUp = 0;
    if (x > distanceX) displayLeft = distanceX;
    else displayLeft = x;
    if (y > distanceY) displayUp = distanceY;
    else displayUp = y;
    return {left: displayLeft, up: displayUp};
}

function updateCapacity(value) {
    capacity = Number(value);
    if (!isNaN(capacity)) {
        if (capacity > 0) {
            if (window.confirm("Warning: Increasing mine capacity above 40k will most likely slow down your browser. Are you certain you want to do this?")) {
                baseMineCapacity = capacity;
                mineCapacity = capacity;
            }
        } else window.alert(`"${capacity}" should be greater than 0!`);
    } else window.alert(`"${value}" is not a number!`);
}
