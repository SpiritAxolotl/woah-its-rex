function resetMine() {
    clearInterval(loopTimer);
    currDirection = "";
    mine = [[]];
    curX = 1000000000;
    curY = 0;
    blocksRevealedThisReset = 0;
    currentLayer = allLayers[0];
    createMine();
    mineCapacity = 40000;
    document.getElementById("mineResetProgress").innerHTML = blocksRevealedThisReset + "/" + mineCapacity + " Blocks Revealed This Reset";
}

let resetting = false;
async function mineReset() {
    resetting = true;
    mineCapacity = 40000;
    const temp = currDirection;
    currDirection = "";
    //const temp2 = await collectOres(temp);
    loggedFinds = [];
    canMine = await mineResetAid();
    checkAllAround(curX, curY, 1);
    mine[curY][curX] = "⛏️";
    displayArea();
    goDirection(temp);
    resetting = false;
}

function collectOres(temp) {
    return new Promise((resolve) => {
    if (gears["infinity-collector"]) {
        for (let i = 0; i < loggedFinds.length; i++) {
            if (mine[loggedFinds[i][0]] !== undefined &&
              mine[loggedFinds[i][0]][loggedFinds[i][1]] !== undefined)
                mineBlock(loggedFinds[i][1], loggedFinds[i][0], "reset", 1);
        }
    } else {
        let direction = "";
        if (temp !== "") direction = temp;
        else if (lastDirection !== "") direction = lastDirection;
        if (direction === "s") {
            let constraints = getParams(30, 500);
            for (let r = curY - constraints[1]; r < curY + 30; r++) {
                for (let c = curX - constraints[0]; c < curX + 30; c++) {
                    //TODO: make this into a function
                    if (mine[r] !== undefined &&
                      oreList[mine[r][c]] !== undefined &&
                      oreList[mine[r][c]]["prob"] >= 750000)
                        mineBlock(c, r, "reset", 1);
                }
            }
        } else if (direction === "w") {
            let constraints = getParams(30, 30);
            for (let r = curY - constraints[1]; r < curY + 500; r++) {
                for (let c = curX - constraints[0]; c < curX + 30; c++) {
                    if (mine[r] !== undefined &&
                      oreList[mine[r][c]] !== undefined &&
                      oreList[mine[r][c]]["prob"] >= 750000)
                        mineBlock(c, r, "reset", 1);
                }
            }
        } else if (direction === "a") {
            let constraints = getParams(30, 30);
            for (let r = curY - constraints[1]; r < curY + 30; r++) {
                for (let c = curX - constraints[0]; c < curX + 500; c++) {
                    if (mine[r] !== undefined &&
                      oreList[mine[r][c]] !== undefined &&
                      oreList[mine[r][c]]["prob"] >= 750000)
                        mineBlock(c, r, "reset", 1);
                }
            }
        } else if (direction === "d") {
            let constraints = getParams(500, 30);
            for (let r = curY - constraints[1]; r < curY + 30; r++) {
                for (let c = curX - constraints[0]; c < curX + 30; c++) {
                    if (mine[r] !== undefined &&
                      oreList[mine[r][c]] !== undefined &&
                      oreList[mine[r][c]]["prob"] >= 750000)
                        mineBlock(c, r, "reset", 1);
                }
            }
        }
    }
    setTimeout(() => {
        resolve(true);
    }, 200);
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
            if (mine[r] === undefined) mine[r] = [];
            for (let c = x - 50; c < x + 50; c++) mine[r][c] = "⬜";
        }
        checkAllAround(curX, curY, 1);
    }, 125);
    setTimeout(() => {
        resolve(true);
    }, 250);
    });
}
