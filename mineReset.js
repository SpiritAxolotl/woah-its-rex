function resetMine() {
    clearInterval(loopTimer);
    curDirection = "";
    mine = [[]];
    curX = 1000000000;
    curY = 0;
    blocksRevealedThisReset = 0;
    currentLayer = allLayers[0];
    createMine();
    mineCapacity = baseMineCapacity;
    document.getElementById("mineResetProgress").innerHTML = blocksRevealedThisReset + "/" + mineCapacity + " Blocks Revealed This Reset";
}
let resetting = false;
async function mineReset() {
    if (!resetting) {
        resetting = true;
        mineCapacity = baseMineCapacity;
        const temp = curDirection;
        curDirection = "";
        const temp2 = await collectOres(temp);
        canMine = await mineResetAid();
        checkAllAround(curX, curY, 1);
        mine[curY][curX] = "⛏️";
        loggedFinds = [];
        displayArea();
        goDirection(temp);
        resetting = false;
    }
}

function collectOres(temp) {
    return new Promise((resolve) => {
    /*if (gears[3]) {
        for (let i = 0; i < loggedFinds.length; i++) {
            if (mine[loggedFinds[i][0]] !== undefined && mine[loggedFinds[i][0]][loggedFinds[i][1]] !== undefined)
                mineBlock(loggedFinds[i][1], loggedFinds[i][0], "reset", 1);
        }
    }*/
        let direction = "";
        if (temp !== "")
            direction = temp;
        else if (lastDirection !== "")
            direction = lastDirection;
        if (direction === "s") {
            let constraints = getParams(30, 500);
            for (let r = curY - constraints[1]; r < curY + 30; r++) {
                for (let c = curX - constraints[0]; c < curX + 30; c++) {
                    if (mine[r] !== undefined) {
                        if (oreList[mine[r][c]] !== undefined) {
                            if (Math.round(1 / (oreList[mine[r][c]][0])) >= 750000)
                                mineBlock(c, r, "reset", 1);
                        }
                    }
                }
            }
        } else if (direction === "w") {
            let constraints = getParams(30, 30);
            for (let r = curY - constraints[1]; r < curY + 500; r++) {
                for (let c = curX - constraints[0]; c < curX + 30; c++) {
                    if (mine[r] !== undefined) {
                        if (oreList[mine[r][c]] !== undefined) {
                            if (Math.round(1 / (oreList[mine[r][c]][0])) >= 750000)
                                mineBlock(c, r, "reset", 1);
                        }
                    }
                }
            }
        } else if (direction === "a") {
            let constraints = getParams(30, 30);
            for (let r = curY - constraints[1]; r < curY + 30; r++) {
                for (let c = curX - constraints[0]; c < curX + 500; c++) {
                    if (mine[r] !== undefined) {
                        if (oreList[mine[r][c]] !== undefined) {
                            if (Math.round(1 / (oreList[mine[r][c]][0])) >= 750000)
                                mineBlock(c, r, "reset", 1);
                        }
                    }
                }
            }
        } else if (direction === "d") {
            let constraints = getParams(500, 30);
            for (let r = curY - constraints[1]; r < curY + 30; r++) {
                for (let c = curX - constraints[0]; c < curX + 30; c++) {
                    if (mine[r] !== undefined) {
                        if (oreList[mine[r][c]] !== undefined) {
                            if (Math.round(1 / (oreList[mine[r][c]][0])) >= 750000)
                                mineBlock(c, r, "reset", 1);
                        }
                    }
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
            if(r > -1 && mine[r] === undefined) {
                mine[r] = [];
            }
            for (let c = x - 50; c < x + 50; c++) {
                if (mine[r] != undefined)
                    mine[r][c] = "⬜";
            }
        }
        checkAllAround(curX, curY, 1);
    }, 125);
    setTimeout(() => {
        resolve(true);
    }, 250);
    });
}