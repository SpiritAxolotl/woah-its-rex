async function rollAbilities() {
    if (currentPickaxe == "Name1") {
        if (Math.round(Math.random() * 30) == 15) {
            canMine = await(pickaxeAbility3(curX, curY));
        }
    } else if (currentPickaxe == "Name2") {
        if (Math.round(Math.random() * 40) == 20) {
            canMine = await(pickaxeAbility1(curX, curY, 3));
        }
    }
    if (currentPickaxe == "Name3") {
    if (Math.round(Math.random() * 40) == 20) {
        canMine = await(pickaxeAbility2(curX, curY));
    }
}
}






function pickaxeAbility1(x, y, size) {
    return new Promise((resolve) => {
    let thisLuck = 1.2;
    canMine = false;
    let constraints = getParams(size, size);
    for (let r = y - constraints[1]; r <= y + size; r++) {
        for (let c = x - constraints[0]; c <= x + size; c++) {
            if (mine[r][c] == "⬜") {
                mine[r][c] = generateBlock(1);
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
function pickaxeAbility2(x, y) {
    return new Promise((resolve) => {
        let thisLuck = 1.5;
        let constraints = getParams(5, 5);
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
function pickaxeAbility3(x, y) {
    return new Promise((resolve) => {
        let thisLuck = 1.1;
        let constraints = getParams(5, 5);
        canMine = false;
        let origin = [y, x];
        for (let i = 0; i < 5; i++) {
            x++;
            mineBlock(x, y, "ability", thisLuck);
        }
        x = origin[1];
        for (let i = 0; i < constraints[0]; i++) {
            x--;
            mineBlock(x, y, "ability", thisLuck);
        }
        x = origin[1];
        for (let i = 0; i < 5; i++) {
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