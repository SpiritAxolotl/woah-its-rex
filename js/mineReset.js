//for the button on the UI
function resetMine() {
    clearInterval(loopTimer);
    resetsThisSession++;
    totalResets++;
    currDirection = "";
    mine = [[]];
    layersChanged = {};
    curX = 1000000000;
    curY = 0;
    blocksRevealedThisReset = 0;
    currentLayer = allLayers[0];
    createMine();
    mineCapacity = baseMineCapacity;
    document.getElementById("mineResetProgress").innerHTML = `Reset Progress: ${(blocksRevealedThisReset/mineCapacity*100).toFixed(2)}`;
}

//for the automatic reset to reduce memory
let resetting = false;
async function mineReset() {
    if (!resetting) {
        resetting = true;
        mineCapacity = baseMineCapacity;
        layersChanged = {};
        layersChanged[`${Math.floor(curY/2000)}`] = allLayersNames[allLayers.indexOf(currentLayer)];
        const currDirectionBeforeReset = currDirection;
        currDirection = "";
        await collectOres(currDirectionBeforeReset);
        resetsThisSession++;
        totalResets++;
        for (const spawn of latestSpawns) {
            const spawnElement = document.getElementById(`latestSpawns${spawn["id"]}`);
            if (spawn["state"] === null) {
                if (spawnElement !== null && !spawnElement.classList.contains("oreNotFound"))
                    spawnElement.classList.add("oreNotFound");
                spawn["state"] = false;
            }
        }
        canMine = await mineResetAid();
        checkAllAround(curX, curY, 1);
        mine[curY][curX] = "⛏️";
        //loggedFinds = [];
        displayArea();
        goDirection(currDirectionBeforeReset);
        resetting = false;
    }
}

function collectOres(inDirection) {
    return new Promise((resolve) => {
    if (hasGear("infinity-collector")) {
        for (let spawn of latestSpawns) {
            if (typeof mine[spawn["y"]] === "object" &&
              typeof mine[spawn["y"]][spawn["x"]] === "string" &&
              Math.random() < 0.75)
                mineBlock(spawn["x"], spawn["y"], "reset", 1);
        }
    }
    let direction = "";
    if (inDirection !== "") direction = inDirection;
    else if (lastDirection !== "") direction = lastDirection;
    if (direction === "s") {
        let constraints = getParams(30, 500);
        for (let y = curY - constraints["up"]; y < curY + 30; y++) {
            for (let x = curX - constraints["left"]; x < curX + 30; x++) {
                //TODO: make this into a function
                if (typeof mine[y] === "object" &&
                  typeof oreList[mine[y][x]] === "string" &&
                  oreList[mine[y][x]]["prob"] >= 750000)
                    mineBlock(x, y, "reset", 1);
            }
        }
    } else if (direction === "w") {
        let constraints = getParams(30, 30);
        for (let y = curY - constraints["up"]; y < curY + 500; y++) {
            for (let x = curX - constraints["left"]; x < curX + 30; x++) {
                if (typeof mine[y] === "object" &&
                  typeof oreList[mine[y][x]] === "string" &&
                  oreList[mine[y][x]]["prob"] >= 750000)
                    mineBlock(x, y, "reset", 1);
            }
        }
    } else if (direction === "a") {
        let constraints = getParams(30, 30);
        for (let y = curY - constraints["up"]; y < curY + 30; y++) {
            for (let x = curX - constraints["left"]; x < curX + 500; x++) {
                if (typeof mine[y] === "object" &&
                  typeof oreList[mine[y][x]] === "string" &&
                  oreList[mine[y][x]]["prob"] >= 750000)
                    mineBlock(x, y, "reset", 1);
            }
        }
    } else if (direction === "d") {
        let constraints = getParams(500, 30);
        for (let y = curY - constraints["up"]; y < curY + 30; y++) {
            for (let x = curX - constraints["left"]; x < curX + 30; x++) {
                if (typeof mine[y] === "object" &&
                  typeof oreList[mine[y][x]] === "string" &&
                  oreList[mine[y][x]]["prob"] >= 750000)
                    mineBlock(x, y, "reset", 1);
            }
        }
    }
    setTimeout(() => {
        resolve(true);
    }, 1000);
    });
}

function mineResetAid() {
    return new Promise((resolve) => {
    setTimeout(() => {
        mine = [[]];
        curX = 1000000000;
        let x = 1000000000;
        let y = curY;
        for (let r = y - 50; r < y + 50; r++) {
            if (r >= 0) mine[r] ??= [];
            for (let c = x - 50; c < x + 50; c++)
                if (typeof mine[r] === "object")
                    mine[r][c] ??= "⬛️";
        }
        checkAllAround(curX, curY, 1);
    }, 125);
    setTimeout(() => {
        resolve(true);
    }, 250);
    });
}
