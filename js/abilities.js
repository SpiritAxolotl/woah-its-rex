async function rollAbilities() {
    let boost = 1;
    let m = 1;
    if (gears["real-candilium"])
        boost *= 1.1;
    if (gears["fortune-3-book"])
        boost *= 1.6;
    if (gears["sugar-rush"])
        m = 1.2;
    switch (currentPickaxe) {
        case 1:
            if (Math.random() < (1/30 * m)) {
                canMine = await(pickaxeAbility3(curX, curY, boost));
                updateActiveRecipe();
            }
            break;
        case 2:
            if (Math.random() <= (1/35 * m)) {
                canMine = await(pickaxeAbility1(curX, curY, 3, 1.35, boost));
                updateActiveRecipe();
            }
            break;
        case 3:
            if (Math.random() <= (1/30 * m)) {
                canMine = await(pickaxeAbility2(curX, curY, boost));
                updateActiveRecipe();
            }
            break;
        case 4:
            if (Math.random() <= (1/25 * m)) {
                canMine = await(pickaxeAbility4(curX, curY, boost));
                updateActiveRecipe();
            }
            break;
        case 5:
            if (Math.random() <= (1/17 * m)) {
                canMine = await(pickaxeAbility5(curX, curY, boost));
                updateActiveRecipe();
            }
            break;
        case 6:
            if (Math.random() <= (1/60 * m)) {
                canMine = await(pickaxeAbility6(curX, curY, boost));
                updateActiveRecipe();
            } else if (Math.random() <= (1/40 * m)) {
                canMine = await(pickaxeAbility7(curX, curY, boost));
                updateActiveRecipe();
            }
            
            break;
        case 7:
            if (Math.random() <= (1/50 * m)) {
                canMine = await(pickaxeAbility8(curX, curY, 0, boost));
                updateActiveRecipe();
            }
            break;
        case 8:
            if (Math.random() <= (1/50 * m)) {
                canMine = await(pickaxeAbility9(curX, curY, 0, boost));
                updateActiveRecipe();
            }
            break;
        case 9:
            if (Math.random() <= (1/30 * m)) {
                canMine = await(pickaxeAbility10(curX, curY, boost));
                updateActiveRecipe();
            }
            break;
        case 10:
            if (Math.random() <= (1/50 * m)) {
                canMine = await(pickaxeAbility11(curX, curY, boost));
                updateActiveRecipe();
            }
            break;
    }
}

//investigate this in future. seems like you need real vitriol for faster mining speed even with other items
let realVitriolActive = false,
    realVitriolTimeout,
    energySiphonerSpeed,
    energySiphonerDirection;
function gearAbilityRealVitriol() {
    if (!realVitriolActive && !resetting) {
        realVitriolActive = true;
        let tempSpeed = miningSpeed;
        let tempDirection = currDirection;
        currDirection = "";
        clearInterval(loopTimer);
        goDirection(tempDirection, tempSpeed - 3);
        realVitriolTimeout = setTimeout(() => {
            miningSpeed = tempSpeed;
            clearInterval(loopTimer);
            currDirection = "";
            goDirection(tempDirection);
            realVitriolActive = false;
        }, 5000);
    }
}

function gearAbilitySillyTp() {
    if (gears["silly-tp"]) {
        if (Object.values(layersChanged).indexOf("Silly") === -1) {
            overrideLayer = sillyLayer;
            const randomY = Math.floor(Math.random()*6)*2000+1000;
            teleport(Math.max(Math.floor(curY/2000)*2000, 16000)+randomY);
        } else {
            teleport(Number(Object.keys(layersChanged)[Object.values(layersChanged).indexOf("Silly")])*2000+1000);
        }
        setLayer(curY);
    }
}

function pickaxeAbility1(x, y, size, customLuck, boost) {
    return new Promise((resolve) => {
    let generated;
    const thisLuck  = customLuck * boost;
    canMine = false;
    const constraints = getParams(size, size);
    for (let r = y - constraints["up"]; r <= y + size; r++) {
        for (let c = x - constraints["left"]; c <= x + size; c++) {
            if (mine[r][c] === "⬜") {
                generated = generateBlock(thisLuck, {y: r, x: c});
                mine[r][c] = generated["ore"];
                if (generated["hasLog"])
                    verifiedOres.verifyLog(r, c);
            }
            if (mine[r][c] !== "⛏️")
                mineBlock(c, r, "ability", thisLuck);
        }
        displayArea();
        setTimeout(() => {
            resolve(true);
        }, 5);
    }
    });
}

function pickaxeAbility2(x, y, boost) {
    return new Promise((resolve) => {
    const thisLuck  = 1.8 * boost;
    const constraints  = getParams(6, 6);
    canMine = false;
    const origin = [y, x];
    for (let i = 0; i < constraints["left"]; i++) {
        x--;
        mineBlock(x, y, "ability", thisLuck);
        y++;
        mineBlock(x, y, "ability", thisLuck);
    }
    x = origin[1];
    y = origin[0];
    for (let i = 0; i < constraints["left"]; i++) {
        x++;
        mineBlock(x, y, "ability", thisLuck);
        y++;
        mineBlock(x, y, "ability", thisLuck);
    }
    x = origin[1];
    y = origin[0];
    for (let i = 0; i < constraints["up"]; i++) {
        x++;
        mineBlock(x, y, "ability", thisLuck);
        y--;
        mineBlock(x, y, "ability", thisLuck);
    }
    x = origin[1];
    y = origin[0];
    if (constraints["up"] < constraints["left"])
        constraints["left"] = constraints["up"];
    for (let i = 0; i < constraints["left"]; i++) {
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
    const thisLuck  = 1.2 * boost;
    const constraints  = getParams(6, 6, x, y);
    canMine = false;
    const origin = [y, x];
    for (let i = 0; i < 6; i++) {
        x++;
        mineBlock(x, y, "ability", thisLuck);
    }
    x = origin[1];
    for (let i = 0; i < constraints["left"]; i++) {
        x--;
        mineBlock(x, y, "ability", thisLuck);
    }
    x = origin[1];
    for (let i = 0; i < 6; i++) {
        y++;
        mineBlock(x, y, "ability", thisLuck);
    }
    y = origin[0];
    for (let i = 0; i < constraints["up"]; i++) {
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
    const thisLuck  = 2 * boost;
    const constraints  = getParams(7, 7);
    const area1 = Math.round((Math.random() * (-(constraints["left"]) - 7)) + 7);
    const area2 = Math.round((Math.random() * (-(constraints["up"]) - 7)) + 7);
    pickaxeAbility1((x + area1), (y + area2), 4, thisLuck, 1);
    displayArea();
    setTimeout(() => {
        resolve(true);
    }, 5);
    });
}

function pickaxeAbility5(x, y, boost) {
    return new Promise((resolve) => {
    let generated;
    const thisLuck  = 5 * boost;
    const constraints  = getParams(40, 40);
    const area1 = Math.round((Math.random() * (-(constraints["left"]) - 40)) + 40);
    const area2 = Math.round((Math.random() * (-(constraints["up"]) - 20)) + 40);
    let r = y + area2;
    let c = x + area1 + 1;
    for (let i = c; i < c + 5; i++) {
        if (mine[r][i] === "⬜") {
            generated = generateBlock(thisLuck, [r, i]);
                    mine[r][i] = generated["ore"];
            if (generated["hasLog"])
                verifiedOres.verifyLog(r, c);
        }
        if (mine[r][i] !== "⛏️")
            mineBlock(i, r, "ability", thisLuck);
    }
    r++;
    for (let i = 0; i < 5; i++) {
        for (let j = c - 1; j < c+6; j++) {
            if (mine[r][j] === "⬜") {
                generated = generateBlock(thisLuck, [r, j]);
                    mine[r][j] = generated["ore"];
                if (generated["hasLog"])
                    verifiedOres.verifyLog(r, j);
            }
            if (mine[r][j] !== "⛏️")
                mineBlock(j, r, "ability", thisLuck);
        }
        r++;
    }
    for (let i = c; i < c + 5; i++) {
        if (mine[r][i] === "⬜") {
            generated = generateBlock(thisLuck, [r, i]);
            mine[r][i] = generated["ore"];
            if (generated["hasLog"])
                verifiedOres.verifyLog(r, i);
        }
        if (mine[r][i] !== "⛏️")
            mineBlock(i, r, "ability", thisLuck);
    }
    displayArea();
    setTimeout(() => {
        resolve(true);
    }, 5);
    });
}

function pickaxeAbility6(x, y, boost) {
    return new Promise((resolve) => {
    let generated;
    const thisLuck  = 10 * boost;
    const constraints  = getParams(9, 9);
    let dist = 9;
    for (let r = y + 6; r >= y - constraints["up"]; r--) {
        for (let c = x - dist; c <= x + dist; c++) {
            if (c >= x - constraints["left"]) {
                if (mine[r][c] === "⬜") {
                    generated = generateBlock(thisLuck, [r, c]);
                    mine[r][c] = generated["ore"];
                    if (generated["hasLog"])
                        verifiedOres.verifyLog(r, c);
                }
                if (mine[r][c] !== "⛏️")
                    mineBlock(c, r, "ability", thisLuck);
            }
        }
        dist--;
    }
    displayArea();
    setTimeout(() => {
        resolve(true);
    }, 5);
    });
}

function pickaxeAbility7(x, y, boost) {
    return new Promise((resolve) => {
    let generated;
    const thisLuck  = 10 * boost;
    const constraints = getParams(4, 3);
    let reps = 1;
    for (let r = y - constraints["up"]; r < y; r++) {
        for (let c = x - constraints["left"]; c < x + 5; c++) {
            if (reps !== 4 && reps !== 6) {
                if (mine[r][c] === "⬜") {
                    generated = generateBlock(thisLuck, [r, c]);
                    mine[r][c] = generated["ore"];
                    if (generated["hasLog"])
                        verifiedOres.verifyLog(r, c);
                }
                if (mine[r][c] !== "⛏️")
                    mineBlock(c, r, "ability", thisLuck);
            }
            reps++; 
        }
    }
    reps = 1;
    let dist = 3;
    for (let r = y; r < y+4; r++) {
        for (let c = x - dist; c <= x + dist; c++) {
            if (c >= x - constraints["left"]) {
                if (mine[r][c] === "⬜") {
                    generated = generateBlock(thisLuck, [r, c]);
                    mine[r][c] = generated["ore"];
                    if (generated["hasLog"])
                        verifiedOres.verifyLog(r, c);
                }
                if (mine[r][c] !== "⛏️")
                    mineBlock(c, r, "ability", thisLuck);
            }
        }
        dist--;
    }
    displayArea();
    setTimeout(() => {
        resolve(true);
    }, 5);
    });
}

function pickaxeAbility8(x, y, reps, boost) {
    return new Promise((resolve) => {
    canMine = false;
    if (reps < 4) {
        let procs = [
            [],
            [],
            [],
            []
        ];
        const thisLuck  = 3 * boost;
        const constraints  = getParams(8, 8, x, y);
        const origin = [y, x];
        for (let i = 0; i < 8; i++) {
            x++;
            mineBlock(x, y, "ability", thisLuck);
        }
        if (Math.random() <= 0.75)
            procs[0] = [x, y, true];
        x = origin[1];
        for (let i = 0; i < constraints["left"]; i++) {
            x--;
            mineBlock(x, y, "ability", thisLuck);
        }
        if (Math.random() <= 0.75)
            procs[1] = [x, y, true];
        x = origin[1];
        for (let i = 0; i < 8; i++) {
            y++;
            mineBlock(x, y, "ability", thisLuck);
        }
        if (Math.random() <= 0.75) {
            procs[2] = [x, y, true]
        }
        y = origin[0];
        for (let i = 0; i < constraints["up"]; i++) {
            y--;
            mineBlock(x, y, "ability", thisLuck);
        }
        if (Math.random() <= 0.75)
            procs[3] = [x, y, true];
        reps++;
        for (let i = 0; i < procs.length; i++) {
            if (procs[i][1])
                pickaxeAbility8(procs[i][0], procs[i][1], reps, boost);
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

function pickaxeAbility9(x, y, reps, boost) {
    return new Promise((resolve) => {
    canMine = false;
    if (reps < 4) {
        let procs = [
            [],
            [],
            [],
            []
        ];
        const thisLuck  = 4 * boost;
        const constraints  = getParams(6, 6, x, y);
        const origin = [y, x];
        for (let i = 0; i < constraints["left"]; i++) {
            x--;
            mineBlock(x, y, "ability", thisLuck);
            y++;
            mineBlock(x, y, "ability", thisLuck);
        }
        if (Math.random() <= 0.75)
            procs[0] = [x, y, true];
        x = origin[1];
        y = origin[0];
        for (let i = 0; i < constraints["left"]; i++) {
            x++;
            mineBlock(x, y, "ability", thisLuck);
            y++;
            mineBlock(x, y, "ability", thisLuck);
        }
        if (Math.random() <= 0.75)
            procs[1] = [x, y, true];
        x = origin[1];
        y = origin[0];
        for (let i = 0; i < constraints["up"]; i++) {
            x++;
            mineBlock(x, y, "ability", thisLuck);
            y--;
            mineBlock(x, y, "ability", thisLuck);
        }
        if (Math.random() <= 0.75)
            procs[2] = [x, y, true];
        x = origin[1];
        y = origin[0];
        if (constraints["up"] < constraints["left"])
            constraints["left"] = constraints["up"];
        for (let i = 0; i < constraints["left"]; i++) {
            x--;
            mineBlock(x, y, "ability", thisLuck);
            y--;
            mineBlock(x, y, "ability", thisLuck);
        }
        if (Math.random() <= 0.75)
            procs[3] = [x, y, true];
        reps++;
        for (let i = 0; i < procs.length; i++) {
            if (procs[i][1])
                pickaxeAbility9(procs[i][0], procs[i][1], reps, boost);
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

function pickaxeAbility10(x, y, boost) {
    return new Promise((resolve) => {
    const thisLuck  = 20 * boost;
    let generated;
    let skips = [
        [0, 4, 12, 16],
        [5, 11],
        [6, 10],
        [0, 16],
        [0, 1, 15, 16],
        [0, 16],
        [6, 10],
        [5, 11],
        [0, 4, 12, 16]
    ];
    let i = 0;
    let reps = 0;
    for (let c = x - 4; c < x + 5; c++) {
        for (let r = y - 8; r < y + 9; r++) {
            if (mine[r] !== undefined && mine[r][c] !== undefined) {
                if (!(skips[reps].includes(i))) {
                    if (mine[r][c] === "⬜") {
                        generated = generateBlock(thisLuck, [r, c]);
                        mine[r][c] = generated["ore"];
                        if (generated["hasLog"])
                            verifiedOres.verifyLog(r, c);
                    }
                    if (mine[r][c] !== "⛏️")
                        mineBlock(c, r, "ability", thisLuck);
                }
            }
            i++;
        }
        i = 0;
        reps++;
    }
    i = 0;
    reps = 0;
    for (let r = y - 4; r < y + 5; r++) {
        for (let c = x - 8; c < x + 9; c++) {
            if (mine[r] !== undefined && mine[r][c] !== undefined) {
                if (!(skips[reps].includes(i))) {
                    if (mine[r][c] === "⬜") {
                        generated = generateBlock(thisLuck, [r, c]);
                        mine[r][c] = generated["ore"];
                        if (generated["hasLog"])
                            verifiedOres.verifyLog(r, c);
                    }
                    if (mine[r][c] !== "⛏️")
                        mineBlock(c, r, "ability", thisLuck);
                }
            }
            i++;
        }
        i = 0;
        reps++;
    }
    displayArea();
    setTimeout(() => {
        resolve(true);
    }, 5);
    });
}

function pickaxeAbility11(x, y, boost) {
    const thisLuck = 17.5 * boost;
    return new Promise((resolve) => {
    for (let i = -3; i < 4; i++) {
        for (let j = -3; j < 4; j++) {
            if (!(i === 0 && j === 0) && Math.random() <= 0.5) {
                if (mine[y + 7 * i] !== undefined) {
                    for (let r = 7 * j; r < (7 * j + 7); r++) {
                        for (let c = 7 * i; c < (7 * i + 7); c++) {
                            if (mine[y + r] !== undefined) {
                                if (mine[y + r][x + c] === "⬜") {
                                    generated = generateBlock(thisLuck, [y + r, x + c]);
                                    mine[y + r][x + c] = generated["ore"];
                                    if (generated["hasLog"])
                                        verifiedOres.verifyLog(r, c);
                                }
                                if (mine[y + r][x + c] !== "⛏️")
                                    mineBlock(x + c, y + r, "ability", thisLuck);
                            }
                        }
                    }
                }
            }
        }
    }
    displayArea();
    setTimeout(() => {
        resolve(true);
    }, 5);
    });
}
