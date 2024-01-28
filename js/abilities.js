async function rollAbilities() {
    let boost = 1;
    let proc = 1;
    let activated = false;
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
        case "ol-faithful":
            break;
        case "mulch-mallet":
            if (Math.random() < 1/30 * proc) {
                canMine = await(pickaxeAbility1(curX, curY, boost));
                activated = true;
            }
            break;
        case "mud-sickle":
            if (Math.random() <= 1/35 * proc) {
                canMine = await(pickaxeAbility2(curX, curY, 3, 1.35, boost));
                activated = true;
            }
            break;
        case "dirt-ravager":
            if (Math.random() <= 1/30 * proc) {
                canMine = await(pickaxeAbility3(curX, curY, boost));
                activated = true;
            }
            break;
        case "void-crusher":
            if (Math.random() <= 1/25 * proc) {
                canMine = await(pickaxeAbility4(curX, curY, boost));
                activated = true;
            }
            break;
        case "geode-staff":
            if (Math.random() <= 1/17 * proc) {
                canMine = await(pickaxeAbility5(curX, curY, boost));
                activated = true;
            }
            break;
        case "earth-soiler":
            if (Math.random() <= 1/60 * proc) {
                canMine = await(pickaxeAbility6A(curX, curY, boost));
                activated = true;
            } else if (Math.random() <= 1/40 * proc) {
                canMine = await(pickaxeAbility6B(curX, curY, boost));
                activated = true;
            }
            break;
        case "crypt-smasher":
            if (Math.random() <= 1/50 * proc) {
                canMine = await(pickaxeAbility7(curX, curY, 0, boost));
                activated = true;
            }
            break;
        case "labrynthian-tide":
            if (Math.random() <= 1/50 * proc) {
                canMine = await(pickaxeAbility8(curX, curY, 0, boost));
                activated = true;
            }
            break;
        case "77-leaf-destroyer":
            if (Math.random() <= 1/30 * proc) {
                canMine = await(pickaxeAbility9(curX, curY, boost));
                activated = true;
            }
            break;
        case "planet-buster":
            if (Math.random() <= 1/50 * proc) {
                canMine = await(pickaxeAbility10(curX, curY, boost));
                activated = true;
            }
            break;
        case "whirlpool-of-fate":
            if (Math.random() <= 1/100 * proc) {
                canMineMaybe = await(pickaxeAbility11(curX, curY, boost));
                if (!resetting)
                    canMine = canMineMaybe;
                activated = true;
            }
            break;
        case "wings-of-glory":
            if (Math.random() <= 1/150 * proc) {
                canMine = await(pickaxeAbility12(curX, curY, boost));
                activated = true;
            }
            break;
    }
    if (activated) {
        displayArea();
        updateActiveRecipe();
    }
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

function gearAbilityInfinityCollector() {
    if (gears["infinity-collector"] && currentGears["infinity-collector"] && loggedFinds.length > 0)
        for (let find of loggedFinds)
            if (typeof mine[find["y"]] === "object" && typeof mine[find["y"]][find["x"]] === "string") {
                mineBlock(find["x"], find["y"], "ability", 1);
                loggedFinds.splice(loggedFinds.indexOf(find), 1);
            }
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

function pickaxeAbility2(x, y, size, customLuck, boost) {
    return new Promise((resolve) => {
    const thisLuck = customLuck * boost;
    canMine = false;
    const constraints = getParams(size, size);
    for (let r = y - constraints["up"]; r <= y + size; r++)
        for (let c = x - constraints["left"]; c <= x + size; c++)
            mineBlock(c, r, "ability", thisLuck);
    setTimeout(() => {
        resolve(true);
    }, 5);
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
    pickaxeAbility2(x+area1, y+area2, 4, thisLuck, 1);
    setTimeout(() => {
        resolve(true);
    }, 5);
    });
}

function pickaxeAbility5(x, y, boost) {
    return new Promise((resolve) => {
    const thisLuck = 5 * boost;
    const constraints = getParams(40, 40);
    const area1 = Math.round(Math.random() * (-constraints["left"] - 40) + 40);
    const area2 = Math.round(Math.random() * (-constraints["up"] - 20) + 40);
    let r = y + area2;
    let c = x + area1 + 1;
    for (let i = c; i < c + 5; i++)
        mineBlock(i, r, "ability", thisLuck);
    r++;
    for (let i = 0; i < 5; i++) {
        for (let j = c - 1; j < c+6; j++)
            mineBlock(j, r, "ability", thisLuck);
        r++;
    }
    for (let i = c; i < c + 5; i++)
        mineBlock(i, r, "ability", thisLuck);
    
    setTimeout(() => {
        resolve(true);
    }, 5);
    });
}

function pickaxeAbility6A(x, y, boost) {
    return new Promise((resolve) => {
    const thisLuck = 10 * boost;
    const constraints = getParams(9, 9);
    let dist = 9;
    for (let r = y + 6; r >= y - constraints["up"]; r--) {
        for (let c = x - dist; c <= x + dist; c++)
            if (c >= x - constraints["left"])
                mineBlock(c, r, "ability", thisLuck);
        dist--;
    }
    setTimeout(() => {
        resolve(true);
    }, 5);
    });
}

function pickaxeAbility6B(x, y, boost) {
    return new Promise((resolve) => {
    const thisLuck = 10 * boost;
    const constraints = getParams(4, 3);
    let reps = 1;
    for (let r = y - constraints["up"]; r < y; r++) {
        for (let c = x - constraints["left"]; c < x + 5; c++) {
            if (reps !== 4 && reps !== 6)
                mineBlock(c, r, "ability", thisLuck);
            reps++;
        }
    }
    reps = 1;
    let dist = 3;
    for (let r = y; r < y+4; r++) {
        for (let c = x - dist; c <= x + dist; c++)
            if (c >= x - constraints["left"])
                mineBlock(c, r, "ability", thisLuck);
        dist--;
    }
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
    } else resolve(true);
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
            if (typeof mine[r] === "object" && typeof mine[r][c] === "string")
                if (!skips[reps].includes(i))
                    mineBlock(c, r, "ability", thisLuck);
            i++;
        }
        i = 0;
        reps++;
    }
    i = 0;
    reps = 0;
    for (let r = y - 4; r < y + 5; r++) {
        for (let c = x - 8; c < x + 9; c++) {
            if (typeof mine[r] === "object" && typeof mine[r][c] === "string")
                if (!skips[reps].includes(i))
                    mineBlock(c, r, "ability", thisLuck);
            i++;
        }
        i = 0;
        reps++;
    }
    setTimeout(() => {
        resolve(true);
    }, 5);
    });
}

function pickaxeAbility10(x, y, boost) {
    const thisLuck = 17.5 * boost;
    return new Promise((resolve) => {
    //TODO: FIX THIS FORMATTING OH MY GOD
    for (let i = -3; i < 4; i++)
        for (let j = -3; j < 4; j++)
            if (i !== 0 || j !== 0 && Math.random() <= 0.5)
                if (typeof mine[y + 7 * i] === "object")
                    for (let r = 7 * j; r < (7 * j + 7); r++)
                        for (let c = 7 * i; c < (7 * i + 7); c++)
                            if (typeof mine[y + r] === "object")
                                mineBlock(x + c, y + r, "ability", thisLuck);
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
    let dirs = ["down", "left", "up", "right"];
    //change direction of spiral for fun (four possible orientations)
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
                for (let r = y; r <= y + num; r++)
                    if (typeof mine[r] === "object" && typeof mine[r][x] === "string")
                        mineBlock(x, r, "ability", thisLuck);
                y += num;
                break;
            case "left":
                for (let c = x; c >= x - num; c--)
                    if (typeof mine[y] === "object" && typeof mine[y][c] === "string")
                        mineBlock(c, y, "ability", thisLuck);
                x -= num;
                break;
            case "up":
                for (let r = y; r >= y - num; r--)
                    if (typeof mine[r] === "object" && typeof mine[r][x] === "string")
                        mineBlock(x, r, "ability", thisLuck);
                y -= num;
                break;
            case "right":
                for (let c = x; c <= x + num; c++)
                    if (typeof mine[y] === "object" && typeof mine[y][c] === "string")
                        mineBlock(c, y, "ability", thisLuck);
                x += num;
                break;
        }
        dirNum++;
        dirNum %= 4;
    }
    setTimeout(() => {
        resolve(true);
    }, 1);
    });
}

function pickaxeAbility12(x, y, boost) {
    return new Promise((resolve) => {
    let thisLuck = 75 * boost;
    let startNums = [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 4, 5, 6, 6];
    let endNums = [37, 36, 35, 34, 29, 31, 30, 29, 28, 27, 26, 24, 29, 28, 32, 31, 25, 24, 23, 16, 24, 23, 22, 24, 26, 28, 19, 31, 30, 24, 13, 20, 21];
    let numSkips = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [28], [27], [], [], [], [], [19, 20], [21, 22], [], [], [], [], [], [24], [12, 25], [13], [], [15], [16]];
    let i = 0;
    for (let r = y - 16; r < y + 17; r++) {
        if (typeof mine[r] === "object")
            for (let c = x + startNums[i]; c <= x + endNums[i]; c++)
                if (!numSkips[i].includes(c-x))
                    mineBlock(c, r, "ability", thisLuck);
        i++;
    }
    i = 0;
    for (let r = y - 16; r < y + 17; r++) {
        if (typeof mine[r] === "object")
            for (let c = x - startNums[i]; c >= x - endNums[i]; c--)
                if (!numSkips[i].includes(c-x))
                    mineBlock(c, r, "ability", thisLuck);
        i++;
    }
    setTimeout(() => {
        resolve(true);
    }, 1);
    });
}
