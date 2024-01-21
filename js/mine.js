//MINE CREATION

function createMine() {
    for (let y = curY; y < curY + 51; y++) {
        mine.push([]);
        for (let c = curX - 51; c < curX + 51; c++)
            mine[y][c] = y === 0 ? "🟩" : "⬜";
    }
    mine[0][1000000000] = "⛏️"; //trusty pickaxe
    displayArea();
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
                updateActiveRecipe(ore);
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
        const block = currentLayer[currentLayer.length-1];
        inventory[block]["normal"]++;
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
            if (gears["energy-siphoner"]) gearAbilityRealVitriol();
            if (currentPickaxe < 6 || oreList[ore]["prob"] > 2000000)
                logFind(ore, x, y, variantNamesEmojis[variant-1], totalMined, fromReset);
        }
        inventory[ore][variantNames[variant-1].toLowerCase()]++;
        updateInventory(ore, variantNames[variant-1]);
    }
}

function generateBlock(luck, location) {
    if (debug && typeof debugLuck === "number") luck = debugLuck;
    let hasLog = false;
    const layer = currentLayer.concat(spawnsEverywhere);
    if (location["y"] === 1)
        layer.push("🥬");
    let blockToGive = "";
    let summedProbability = 0;
    const baseLuck = Math.random();
    const modifiedLuck = baseLuck/luck;
    if (location["y"] === 0)
        return {ore: "🟩", hasLog: false};
    for (let ore of sortOres(layer)) {
        summedProbability += 1/oreList[ore]["prob"];
        if ((unaffectedByLuck.indexOf(ore) === -1 && modifiedLuck < summedProbability) || (unaffectedByLuck.indexOf(ore) !== -1 && baseLuck < summedProbability)) {
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
        attemptToPlaySound(probability);
    }
    return {ore: blockToGive, hasLog: hasLog};
}

//TELEPORTING

let distanceMulti = 1;
let teleportY = 1000;
function switchDistance() {
    if (teleportY < 14000) {
        teleportY = 2000 * distanceMulti + 1000;
        distanceMulti++;
    } else if (teleportY > 14000) {
        teleportY = 1000;
        distanceMulti = 1;
    } else {
        teleportY = 1000;
        distanceMulti = 1;
    }
    document.getElementById("meterDisplay").innerHTML = `${teleportY}m`;
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
    let y = goToY;
    if (typeof goToY !== "number") {
        y = document.getElementById("meterDisplay").innerHTML;
        y = Number(y.substring(0, y.length - 1));
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
    value = Number(value);
    if (!isNaN(value) && value > 0) {
        baseMineCapacity = value;
        mineCapacity = value;
    }
}
