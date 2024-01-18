//MINE CREATION

function createMine() {
    for (let y = curY; y < curY + 51; y++) {
        mine.push([]);
        for (let c = curX - 51; c < curX + 51; c++)
            mine[y][c] = y === 0 ? "🟩" : "⬜";
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
            if (mine[curY - constraints[1]] === undefined)
                mine[curY - constraints[1]] = [];
            for (let x = curX - constraints[0]; x < curX + 50; x++) {
                if (mine[curY - constraints[1]][x] === undefined)
                    mine[curY - constraints[1]][x] = curY - constraints[1] === 0 ? "🟩" : "⬜";
            }
            break;
    }
}

function checkAllAround(x, y, luck) {
    let generated;
    if (x - 1 >= 0 && mine[y][x - 1] === "⬜") {
        generated = generateBlock(luck, {"y": y, "x": x-1});
        mine[y][x - 1] = generated["ore"];
        if (generated["hasLog"])
            verifiedOres.verifyLog(y, x-1);
        blocksRevealedThisReset++;
    }
    if (mine[y][x + 1] === "⬜") {
        generated = generateBlock(luck, {"y": y, "x": x+1});
        mine[y][x + 1] = generated["ore"];
        if (generated["hasLog"])
            verifiedOres.verifyLog(y, x+1);
        blocksRevealedThisReset++;
    }
    if (mine[y + 1][x] === "⬜") {
        generated = generateBlock(luck, {"y": y+1, "x": x});
        mine[y + 1][x] = generated["ore"];
        if (generated["hasLog"])
            verifiedOres.verifyLog(y+1, x);
        blocksRevealedThisReset++;
    }
    if (y - 1 >= 0 && mine[y - 1][x] === "⬜") {
        generated = generateBlock(luck, {"y": y-1, "x": x});
        mine[y - 1][x] = generated["ore"];
        if (generated["hasLog"])
            verifiedOres.verifyLog(y-1, x);
        blocksRevealedThisReset++;
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
                updateActiveRecipe();
            }
        }
    }
}

//ORE GENERATION AND OBTAINING

const variantMultis = {
    "normal": 1,
    "electrified": 50,
    "radioactive": 250,
    "explosive": 500
};

function giveBlock(ore, x, y, fromReset) {
    if (gears["layer-materializer"]) {
        const blocks = Object.keys(...currentLayer);
        const block = blocks[blocks.length-1];
        oreList[block]["inv"]["normal"]++;
        updateInventory(block, "normal");
    }
    
    if (ore !== "⛏️") {
        let variant = 1;
        if (ore === "🟩") ore = "🟫";
        let rand = random(1, 500);
        if (rand % 50 === 0) variant = 2;
        if (rand % 250 === 0) variant = 3;
        if (rand % 500 === 0) variant = 4;
        if (oreList[ore]["prob"] >= 160000000)
            verifiedOres.verifyFind(mine[y][x], y, x, variantNames[variant-1]);
        if (oreList[ore]["prob"] >= 750000) {
            if (gears["energy-siphoner"]) gearAbility1();
            if (currentPickaxe < 6 || oreList[ore]["prob"] > 2000000)
                logFind(ore, x, y, variantNamesEmojis[variant-1], totalMined, fromReset);
        }
        oreList[ore]["inv"][variantNames[variant-1].toLowerCase()]++;
        updateInventory(ore, variantNames[variant-1]);
    }
}

function generateBlock(luck, location) {
    if (debug && typeof debugLuck === "number") luck = debugLuck;
    let hasLog = false;
    const probabilityTable = {...currentLayer, ...spawnsEverywhere};
    let blockToGive = "";
    let summedProbability = 0;
    const chosenValue = Math.random()/luck;
    const probTable = sortObj(probabilityTable).reverse();
    for (let ore of probTable) {
        summedProbability += 1/probabilityTable[ore];
        if (chosenValue < summedProbability) {
            blockToGive = ore;
            break;
        }
    }
    const probability = probabilityTable[blockToGive];
    if (probability >= 750000) {
        //TODO: make a better less hardcoded system for replacing blocks
        if (blockToGive === "🧌") {
            localStorage.setItem("nyehehehehehe", true);
            blockToGive = "♾️";
        }
        if (probability > 160000000) {
            verifiedOres.createLog(location["y"], location["x"], blockToGive, new Error(), luck);
            hasLog = true;
        }
        spawnMessage(blockToGive, location);
        if (probability > 5000000000) playSound("zenith");
        else if (probability > 1500000000) playSound("magnificent");
        else if (probability > 750000000) playSound("otherworldly");
        else if (probability >= 160000000) playSound("unfathomable");
        else if (probability >= 25000000) playSound("enigmatic");
        else if (probability >= 5000000) {
            if (currentPickaxe < 8 && !gears["infinity-collector"]) playSound("transcendent");
        } else if (currentPickaxe < 6) playSound("exotic");
    }
    return {"ore": blockToGive, "hasLog": hasLog};
}

//TELEPORTING

let distanceMulti = 1;
function switchDistance() {
    let y = document.getElementById("meterDisplay").innerHTML;
    y = Number(y.substring(0, y.length - 1));
    if (y < 14000) y = 2000 * distanceMulti++ + 1000;
    else {
        y = 1000;
        distanceMulti = 1;
    }
    document.getElementById("meterDisplay").innerHTML = y + "m";
}

async function teleport() {
    canMine = false;
    clearInterval(loopTimer);
    currDirection = "";
    canMine = await toLocation();
    displayArea();
}

function toLocation() {
    return new Promise((resolve) => {
    let x = curX;
    let y = document.getElementById("meterDisplay").innerHTML;
    y = Number(y.substring(0, y.length - 1));
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
