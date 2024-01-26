async function rollAbilities() {
    let boost = 1;
    let proc = 1;
    if (hasGear("real-candilium"))
        boost *= 1.1;
    if (hasGear("fortune-3-book"))
        boost *= 1.6;
    if (hasGear("sugar-rush"))
        proc = 1.2;
    if (!resetting) {
        if (caveToggle && Math.random() < 1/750) {
            generateCave(curX, curY, 0, 0);
            displayArea();
        }
    }
    if (turnOffAbilities || !currentPickaxe) return;
    switch (currentPickaxe) {
        case 1:
            if (Math.random() < (1/30 * proc)) {
                canMine = await(pickaxeAbility1(curX, curY, boost));
            }
            break;
        case 2:
            if (Math.random() <= (1/35 * proc)) {
                canMine = await(pickaxeAbility2(curX, curY, 3, 1.35, boost));
            }
            break;
        case 3:
            if (Math.random() <= (1/30 * proc)) {
                canMine = await(pickaxeAbility3(curX, curY, boost));
            }
            break;
        case 4:
            if (Math.random() <= (1/25 * proc)) {
                canMine = await(pickaxeAbility4(curX, curY, boost));
            }
            break;
        case 5:
            if (Math.random() <= (1/17 * proc)) {
                canMine = await(pickaxeAbility5(curX, curY, boost));
            }
            break;
        case 6:
            if (Math.random() <= (1/60 * proc)) {
                canMine = await(pickaxeAbility6A(curX, curY, boost));
            } else if (Math.random() <= (1/40 * proc)) {
                canMine = await(pickaxeAbility6B(curX, curY, boost));
            }
            break;
        case 7:
            if (Math.random() <= (1/50 * proc)) {
                canMine = await(pickaxeAbility7(curX, curY, 0, boost));
            }
            break;
        case 8:
            if (Math.random() <= (1/50 * proc)) {
                canMine = await(pickaxeAbility8(curX, curY, 0, boost));
            }
            break;
        case 9:
            if (Math.random() <= (1/30 * proc)) {
                canMine = await(pickaxeAbility9(curX, curY, boost));
            }
            break;
        case 10:
            if (Math.random() <= (1/50 * proc)) {
                canMine = await(pickaxeAbility10(curX, curY, boost));
            }
            break;
        case 11:
            if (Math.random() <= (1/100 * proc)) {
                canMineMaybe = await(pickaxeAbility11(curX, curY, boost));
                if (!resetting)
                    canMine = canMineMaybe;
            }
            break;
    }
    updateActiveRecipe();
}

//investigate this in future. seems like you need real vitriol for faster mining speed even with other items
let realVitriolActive = false,
    realVitriolTimeout,
    energySiphonerSpeed,
    energySiphonerDirection;
function gearAbilityProc() {
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
        if (!Object.values(layersChanged).includes("Silly")) {
            overrideLayer = sillyLayer;
            const randomY = Math.floor(Math.random()*6)*2000+1000;
            teleport(Math.max(Math.floor(curY/2000)*2000, 16000)+randomY);
        } else
            teleport(Number(Object.keys(layersChanged)[Object.values(layersChanged).indexOf("Silly")])*2000+1000);
        setLayer(curY);
    }
}

function pickaxeAbility2(x, y, size, customLuck, boost) {
    return new Promise((resolve) => {
    let generated;
    const thisLuck = customLuck * boost;
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

function pickaxeAbility3(x, y, boost) {
    return new Promise((resolve) => {
    const thisLuck = 1.8 * boost;
    const constraints = getParams(6, 6);
    canMine = false;
    const origin = {y: y, x: x};
    for (let i = 0; i < constraints["left"]; i++) {
        x--;
        mineBlock(x, y, "ability", thisLuck);
        y++;
        mineBlock(x, y, "ability", thisLuck);
    }
    x = origin["x"];
    y = origin["y"];
    for (let i = 0; i < constraints["left"]; i++) {
        x++;
        mineBlock(x, y, "ability", thisLuck);
        y++;
        mineBlock(x, y, "ability", thisLuck);
    }
    x = origin["x"];
    y = origin["y"];
    for (let i = 0; i < constraints["up"]; i++) {
        x++;
        mineBlock(x, y, "ability", thisLuck);
        y--;
        mineBlock(x, y, "ability", thisLuck);
    }
    x = origin["x"];
    y = origin["y"];
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

function pickaxeAbility1(x, y, boost) {
    return new Promise((resolve) => {
    const thisLuck = 1.2 * boost;
    const constraints = getParams(6, 6, x, y);
    canMine = false;
    const origin = {y: y, x: x};
    for (let i = 0; i < 6; i++) {
        x++;
        mineBlock(x, y, "ability", thisLuck);
    }
    x = origin["x"];
    for (let i = 0; i < constraints["left"]; i++) {
        x--;
        mineBlock(x, y, "ability", thisLuck);
    }
    x = origin["x"];
    for (let i = 0; i < 6; i++) {
        y++;
        mineBlock(x, y, "ability", thisLuck);
    }
    y = origin["y"];
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
    const thisLuck = 2 * boost;
    const constraints = getParams(7, 7);
    const area1 = Math.round(Math.random() * (-constraints["left"] - 7) + 7);
    const area2 = Math.round(Math.random() * (-constraints["up"] - 7) + 7);
    pickaxeAbility2((x + area1), (y + area2), 4, thisLuck, 1);
    displayArea();
    setTimeout(() => {
        resolve(true);
    }, 5);
    });
}

function pickaxeAbility5(x, y, boost) {
    return new Promise((resolve) => {
    let generated;
    const thisLuck = 5 * boost;
    const constraints = getParams(40, 40);
    const area1 = Math.round(Math.random() * (-constraints["left"] - 40) + 40);
    const area2 = Math.round(Math.random() * (-constraints["up"] - 20) + 40);
    let r = y + area2;
    let c = x + area1 + 1;
    for (let i = c; i < c + 5; i++) {
        if (mine[r][i] === "⬜") {
            generated = generateBlock(thisLuck, {y: r, x: i});
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
                generated = generateBlock(thisLuck, {y: r, x: j});
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
            generated = generateBlock(thisLuck, {y: r, x: i});
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

function pickaxeAbility6A(x, y, boost) {
    return new Promise((resolve) => {
    let generated;
    const thisLuck = 10 * boost;
    const constraints = getParams(9, 9);
    let dist = 9;
    for (let r = y + 6; r >= y - constraints["up"]; r--) {
        for (let c = x - dist; c <= x + dist; c++) {
            if (c >= x - constraints["left"]) {
                if (mine[r][c] === "⬜") {
                    generated = generateBlock(thisLuck, {y: r, x: c});
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

function pickaxeAbility6B(x, y, boost) {
    return new Promise((resolve) => {
    let generated;
    const thisLuck = 10 * boost;
    const constraints = getParams(4, 3);
    let reps = 1;
    for (let r = y - constraints["up"]; r < y; r++) {
        for (let c = x - constraints["left"]; c < x + 5; c++) {
            if (reps !== 4 && reps !== 6) {
                if (mine[r][c] === "⬜") {
                    generated = generateBlock(thisLuck, {y: r, x: c});
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
                    generated = generateBlock(thisLuck, {y: r, x: c});
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

function pickaxeAbility7(x, y, reps, boost) {
    return new Promise((resolve) => {
    canMine = false;
    if (reps < 4) {
        let procs = [];
        const thisLuck = 3 * boost;
        const constraints = getParams(8, 8, x, y);
        const origin = {y: y, x: x};
        for (let i = 0; i < 8; i++) {
            x++;
            mineBlock(x, y, "ability", thisLuck);
        }
        if (Math.random() <= 0.75)
            procs.push({x: x, y: y, something: true});
        x = origin["x"];
        for (let i = 0; i < constraints["left"]; i++) {
            x--;
            mineBlock(x, y, "ability", thisLuck);
        }
        if (Math.random() <= 0.75)
            procs.push({x: x, y: y, something: true});
        x = origin["x"];
        for (let i = 0; i < 8; i++) {
            y++;
            mineBlock(x, y, "ability", thisLuck);
        }
        if (Math.random() <= 0.75) {
            procs.push({x: x, y: y, something: true});
        }
        y = origin["y"];
        for (let i = 0; i < constraints["up"]; i++) {
            y--;
            mineBlock(x, y, "ability", thisLuck);
        }
        if (Math.random() <= 0.75)
            procs.push({x: x, y: y, something: true});
        reps++;
        for (let proc of procs)
            if (proc["x"])
                pickaxeAbility7(proc["x"], proc["y"], reps, boost);
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

function pickaxeAbility8(x, y, reps, boost) {
    return new Promise((resolve) => {
    canMine = false;
    if (reps < 4) {
        let procs = [];
        const thisLuck = 4 * boost;
        const constraints = getParams(6, 6, x, y);
        const origin = {y: y, x: x};
        for (let i = 0; i < constraints["left"]; i++) {
            x--;
            mineBlock(x, y, "ability", thisLuck);
            y++;
            mineBlock(x, y, "ability", thisLuck);
        }
        if (Math.random() <= 0.75)
            procs.push({x: x, y: y, something: true});
        x = origin["x"];
        y = origin["y"];
        for (let i = 0; i < constraints["left"]; i++) {
            x++;
            mineBlock(x, y, "ability", thisLuck);
            y++;
            mineBlock(x, y, "ability", thisLuck);
        }
        if (Math.random() <= 0.75)
            procs.push({x: x, y: y, something: true});
        x = origin["x"];
        y = origin["y"];
        for (let i = 0; i < constraints["up"]; i++) {
            x++;
            mineBlock(x, y, "ability", thisLuck);
            y--;
            mineBlock(x, y, "ability", thisLuck);
        }
        if (Math.random() <= 0.75)
            procs.push({x: x, y: y, something: true});
        x = origin["x"];
        y = origin["y"];
        if (constraints["up"] < constraints["left"])
            constraints["left"] = constraints["up"];
        for (let i = 0; i < constraints["left"]; i++) {
            x--;
            mineBlock(x, y, "ability", thisLuck);
            y--;
            mineBlock(x, y, "ability", thisLuck);
        }
        if (Math.random() <= 0.75)
            procs.push({x: x, y: y, something: true});
        reps++;
        for (let proc of procs)
            if (proc["y"])
                pickaxeAbility8(proc["x"], proc["y"], reps, boost);
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

function pickaxeAbility9(x, y, boost) {
    return new Promise((resolve) => {
    const thisLuck = 20 * boost;
    let generated;
    const skips = [
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
            if (typeof mine[r] === "object" && typeof mine[r][c] === "string") {
                if (!skips[reps].includes(i)) {
                    if (mine[r][c] === "⬜") {
                        generated = generateBlock(thisLuck, {y: r, x: c});
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
            if (typeof mine[r] === "object" && typeof mine[r][c] === "string") {
                if (!skips[reps].includes(i)) {
                    if (mine[r][c] === "⬜") {
                        generated = generateBlock(thisLuck, {y: r, x: c});
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

function pickaxeAbility10(x, y, boost) {
    const thisLuck = 17.5 * boost;
    return new Promise((resolve) => {
    //TODO: FIX THIS FORMATTING OH MY GOD
    for (let i = -3; i < 4; i++) {
        for (let j = -3; j < 4; j++) {
            if (!(i === 0 && j === 0) && Math.random() <= 0.5) {
                if (typeof mine[y + 7 * i] === "object") {
                    for (let r = 7 * j; r < (7 * j + 7); r++) {
                        for (let c = 7 * i; c < (7 * i + 7); c++) {
                            if (typeof mine[y + r] === "object") {
                                if (mine[y + r][x + c] === "⬜") {
                                    generated = generateBlock(thisLuck, {y: y + r, x: x + c});
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


function pickaxeAbility11(x, y, boost) {
    return new Promise((resolve) => {
    let direction;
    let dirNum = 0;
    const thisLuck = 30 * boost;
    const nums = [];
    {
    let num = 3;
    for (let i = 0; i < random(34,39); i++) {
        nums.push(num);
        if (i % 2 === 0)
            // Skip multiples of 4
            num += 2;
        else
            // Increment by 1
            num++;
    }
    }
    let dirs = ["down", "left", "up", "right"];
    //change direction of spiral for fun
    if (Math.random() < 0.5) {
        tempDir = dirs[0];
        dirs[0] = dirs[2];
        dirs[2] = tempDir;
    }
    if (Math.random() < 0.5) {
        tempDir = dirs[1];
        dirs[1] = dirs[3];
        dirs[3] = tempDir;
    }
    //if I can figure out how to make the luck at the end of the spiral very high that would be funny
    for (let num of nums) {
        direction = dirs[dirNum];
        switch(direction) {
            case "down":
                for (let r = y; r <= y + num; r++) {
                    if (typeof mine[r] === "object") {
                        if (mine[r][x] === "⬜") {
                            generated = generateBlock(thisLuck, {y: r, x: x});
                            mine[r][x] = generated["ore"];
                            if (generated["hasLog"])
                                verifiedOres.verifyLog(r, x);
                        }
                        if (typeof mine[r][x] === "string") {
                            mineBlock(x, r, "ability", thisLuck);
                    }
                    }
            }
            y += num;
            break;
            case "left":
                for (let c = x; c >= x - num; c--) {
                    if (typeof mine[y] === "object" && typeof mine[y][c] === "string") {
                        if (mine[y][c] === "⬜") {
                            generated = generateBlock(thisLuck, {y: y, x: c});
                            mine[y][c] = generated["ore"];
                            if (generated["hasLog"])
                                verifiedOres.verifyLog(y, c);
                        }
                        mineBlock(c, y, "ability", thisLuck);
                    }
                }
                x -= num;
                break;
            case "up":
                for (let r = y; r >= y - num; r--) {
                    if (typeof mine[r] === "object") {
                        if (mine[r][x] === "⬜") {
                            generated = generateBlock(thisLuck, [r, x]);
                            mine[r][x] = generated["ore"];
                            if (generated["hasLog"])
                                verifiedOres.verifyLog(r, x);
                        }
                        if (typeof mine[r][x] === "string") {
                            mineBlock(x, r, "ability", thisLuck);
                        }
                    }
                }
                y -= num;
                break;
            case "right":
                for (let c = x; c <= x + num; c++) {
                    if (typeof mine[y] === "object" && typeof mine[y][c] === "string") {
                        if (mine[y][c] === "⬜") {
                            generated = generateBlock(thisLuck, {y: y, x: c});
                            mine[y][c] = generated["ore"];
                            if (generated["hasLog"])
                                verifiedOres.verifyLog(y, c);
                        }
                        mineBlock(c, y, "ability", thisLuck); 
                    }
                }
                x += num;
                break;
        }
        dirNum++;
        dirNum %= 4;
    }
    displayArea();
    setTimeout(() => {
        resolve(true);
    }, 1);
    });
}
