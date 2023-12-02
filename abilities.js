async function rollAbilities() {
    let boost = 1;
    if (pickaxes[currentPickaxe][0] == pickaxes[1][0]) {
        if (Math.round(Math.random() * 30) == 15) {
            canMine = await(pickaxeAbility3(curX, curY, boost));
            updateActiveRecipe();
        }
    } else if (pickaxes[currentPickaxe][0] == pickaxes[2][0]) {
        if (Math.round(Math.random() * 35) == 17) {
            canMine = await(pickaxeAbility1(curX, curY, 3, 1.2, boost));
            updateActiveRecipe();
        }
    } else if (pickaxes[currentPickaxe][0] == pickaxes[3][0]) {
    if (Math.round(Math.random() * 30) == 20) {
        canMine = await(pickaxeAbility2(curX, curY, boost));
        updateActiveRecipe();
    }
    } else if (pickaxes[currentPickaxe][0] == pickaxes[4][0]) {
    if (Math.round(Math.random() *40) == 20) {
        canMine = await(pickaxeAbility4(curX, curY, boost));
        updateActiveRecipe();
    }
    } else if (pickaxes[currentPickaxe][0] == pickaxes[5][0]) {
        if (Math.round(Math.random() * 70) == 40) {
            canMine = await(pickaxeAbility5(curX, curY, 0, boost));
            updateActiveRecipe();
        }
    } else if (pickaxes[currentPickaxe][0] == pickaxes[6][0]) {
        if (Math.round(Math.random() * 50) == 25) {
            canMine = await(pickaxeAbility6(curX, curY, 0, boost));
            updateActiveRecipe();
        }
    }else if (pickaxes[currentPickaxe][0] == pickaxes[7][0]) {   
        if (Math.round(Math.random() * 17) == 7) {
            canMine = await(pickaxeAbility7(curX, curY, boost));
            updateActiveRecipe();
        }
    }
}
//let temp1 = blocksRevealedThisReset;
//let temp2 = totalMined;
//console.log(blocksRevealedThisReset - temp1);
//console.log(totalMined - temp2);






function pickaxeAbility1(x, y, size, customLuck, boost) {
    return new Promise((resolve) => {
    let thisLuck = customLuck * boost;
    canMine = false;
    let constraints = getParams(size, size);
    for (let r = y - constraints[1]; r <= y + size; r++) {
        for (let c = x - constraints[0]; c <= x + size; c++) {
            if (mine[r][c] == "⬜") {
                mine[r][c] = generateBlock(thisLuck, [r, c]);
            }
            if (mine[r][c] != "⛏️") {
                mineBlock(c, r, "ability", thisLuck);
            }
        }
    }
    displayArea();
            setTimeout(() => {
              resolve(true);
            }, 5);
          });
}
function pickaxeAbility2(x, y, boost) {
    return new Promise((resolve) => {
        let thisLuck = 2 * boost;
        let constraints = getParams(6, 6);
        canMine = false;
        let origin = [y, x];
    for (let i = 0; i < constraints[0]; i++) {
        x--;
        mineBlock(x, y, "ability", thisLuck);
        y++;
        mineBlock(x, y, "ability", thisLuck);
    }
    x = origin[1]
    y = origin[0]
    for (let i = 0; i < constraints[0]; i++) {
        x++;
        mineBlock(x, y, "ability", thisLuck);
        y++;
        mineBlock(x, y, "ability", thisLuck);
    }
    x = origin[1]
    y = origin[0]
    for (let i = 0; i < constraints[1]; i++) {
        x++;
        mineBlock(x, y, "ability", thisLuck);
        y--;
        mineBlock(x, y, "ability", thisLuck);
    }
    x = origin[1]
    y = origin[0]
    if (constraints[1] < constraints[0]) {
        constraints[0] = constraints[1];
    }
    for (let i = 0; i < constraints[0]; i++) {
        x--;
        mineBlock(x, y, "ability", thisLuck);
        y--;
        mineBlock(x, y, "ability", thisLuck);
    }
    displayArea();
    setTimeout(() => {
        resolve(true);
    }, 5);
        });
}
function pickaxeAbility3(x, y, boost) {
    return new Promise((resolve) => {
        let thisLuck = 1.2 * boost;
        let constraints = getParams(6, 6, x, y);
        canMine = false;
        let origin = [y, x];
        for (let i = 0; i < 6; i++) {
            x++;
            mineBlock(x, y, "ability", thisLuck);
        }
        x = origin[1];
        for (let i = 0; i < constraints[0]; i++) {
            x--;
            mineBlock(x, y, "ability", thisLuck);
        }
        x = origin[1];
        for (let i = 0; i < 6; i++) {
            y++;
            mineBlock(x, y, "ability", thisLuck);
        }
        y = origin[0];
        for (let i = 0; i < constraints[1]; i++) {
            y--;
            mineBlock(x, y, "ability", thisLuck);
        }
    setTimeout(() => {
        resolve(true);
    }, 5);
        });
}
function pickaxeAbility4(x, y, boost) {
    return new Promise((resolve) => {
        let thisLuck = 1.75 * boost;
        let constraints = getParams(7, 7);
        let area1 = Math.round((Math.random() * (-(constraints[0]) - 7)) + 7);
        let area2 = Math.round((Math.random() * (-(constraints[1]) - 7)) + 7);
        pickaxeAbility1((x + area1), (y + area2), 3, thisLuck, 1);
        displayArea();
    setTimeout(() => {
        resolve(true);
    }, 5);
        });
}
function pickaxeAbility5(x, y, reps, boost) {
    return new Promise((resolve) => {
        canMine = false;
        if (reps < 4) {
            let procs = [
                [],
                [],
                [],
                []
            ];
        
        let thisLuck = 2 * boost;
        let constraints = getParams(6, 6, x, y);
        let origin = [y, x];
        for (let i = 0; i < 6; i++) {
            x++;
            mineBlock(x, y, "ability", thisLuck);
        }
        if (Math.random() <= 0.8) {
            procs[0] = [x, y, true]
        }
        x = origin[1];
        for (let i = 0; i < constraints[0]; i++) {
            x--;
            mineBlock(x, y, "ability", thisLuck);
        }
        if (Math.random() <= 0.8) {
            procs[1] = [x, y, true]
        }
        x = origin[1];
        for (let i = 0; i < 6; i++) {
            y++;
            mineBlock(x, y, "ability", thisLuck);
        }
        if (Math.random() <= 0.8) {
            procs[2] = [x, y, true]
        }
        y = origin[0];
        for (let i = 0; i < constraints[1]; i++) {
            y--;
            mineBlock(x, y, "ability", thisLuck);
        }
        if (Math.random() <= 0.8) {
            procs[3] = [x, y, true]
        }
        reps++;
        for (let i = 0; i < procs.length; i++) {
            if (procs[i][1]) {
                pickaxeAbility5(procs[i][0], procs[i][1], reps);
            }
        }
        resolve(true);
        } else {
            displayArea();
            resolve(true);
        }
    setTimeout(() => {
        resolve(true);
    }, 5);
        });
}

function pickaxeAbility6(x, y, reps, boost) {
    return new Promise((resolve) => {
        canMine = false;
        if (reps < 4) {
            let procs = [
                [],
                [],
                [],
                []
            ];
        let thisLuck = 2.75 * boost;
        let constraints = getParams(4, 4, x, y);
        let origin = [y, x];
    for (let i = 0; i < constraints[0]; i++) {
        x--;
        mineBlock(x, y, "ability", thisLuck);
        y++;
        mineBlock(x, y, "ability", thisLuck);
    }
    if (Math.random() <= 0.8) {
        procs[0] = [x, y, true]
    }
    x = origin[1]
    y = origin[0]
    for (let i = 0; i < constraints[0]; i++) {
        x++;
        mineBlock(x, y, "ability", thisLuck);
        y++;
        mineBlock(x, y, "ability", thisLuck);
    }
    if (Math.random() <= 0.8) {
        procs[1] = [x, y, true]
    }
    x = origin[1]
    y = origin[0]
    for (let i = 0; i < constraints[1]; i++) {
        x++;
        mineBlock(x, y, "ability", thisLuck);
        y--;
        mineBlock(x, y, "ability", thisLuck);
    }
    if (Math.random() <= 0.8) {
        procs[2] = [x, y, true]
    }
    x = origin[1]
    y = origin[0]
    if (constraints[1] < constraints[0]) {
        constraints[0] = constraints[1];
    }
    for (let i = 0; i < constraints[0]; i++) {
        x--;
        mineBlock(x, y, "ability", thisLuck);
        y--;
        mineBlock(x, y, "ability", thisLuck);
    }
    if (Math.random() <= 0.8) {
        procs[3] = [x, y, true]
    }
    reps++;
        for (let i = 0; i < procs.length; i++) {
            if (procs[i][1]) {
                pickaxeAbility6(procs[i][0], procs[i][1], reps);
            }
        }
        resolve(true);
    } else {
        displayArea();
        resolve(true);
    }
    setTimeout(() => {
        resolve(true);
    }, 5);
        });
}
function pickaxeAbility7(x, y, boost) {
    return new Promise((resolve) => {
        let thisLuck = 7.5 * boost;
        let constraints = getParams(20, 20);
        let area1 = Math.round((Math.random() * (-(constraints[0]) - 20)) + 20);
        let area2 = Math.round((Math.random() * (-(constraints[1]) - 20)) + 20);
        let r = y + area2;
        let c = x + area1 + 1;
        for (let i = c; i < c + 4; i++) {
            if (mine[r][i] == "⬜") {
                mine[r][i] = generateBlock(thisLuck, [r, i]);
            }
            if (mine[r][i] != "⛏️") {
                mineBlock(i, r, "ability", thisLuck);
            }
        }
        r++;
        for (let i = 0; i < 4; i++) {
            for (let j = c - 1; j < c+5; j++) {
                if (mine[r][j] == "⬜") {
                    mine[r][j] = generateBlock(thisLuck, [r, j]);
                }
                if (mine[r][j] != "⛏️") {
                    mineBlock(j, r, "ability", thisLuck);
                }
            }
            r++;
        }
        for (let i = c; i < c + 4; i++) {
            if (mine[r][i] == "⬜") {
                mine[r][i] = generateBlock(thisLuck, i, r);
            }
            if (mine[r][i] != "⛏️") {
                mineBlock(i, r, "ability", thisLuck);
            }
        }
        displayArea();
    setTimeout(() => {
        resolve(true);
    }, 5);
        });
}