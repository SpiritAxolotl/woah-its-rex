/*
function adminGiveOres(block, amt) {
    if (amt === undefined)
        amt = 100;
    if (block === undefined) {
        for (let propertyName in oreList) {
            oreList[propertyName][1][0] += amt;
            updateInventory(propertyName, 1);
            
        }
    } else {
        oreList[block][1][0] += amt;
        updateInventory(block, 1);
    }
}
function adminGivePickaxe(num) {
    if (num === undefined) {
        for (let i = 0; i < pickaxes.length; i++) {
            pickaxes[i][1] = true;
        }
    } else {
        pickaxes[num][1] = true;
    }
}
function adminGiveGear(num) {
    if (num === undefined) {
        for (let i = 0; i < gears.length; i++) {
            gears[i] = true;
        }
    } else {
        gears[num] = true;
    }
}
function adminRemovePickaxe(num) {
    if (num === undefined) {
        for (let i = 0; i < pickaxes.length; i++) {
            pickaxes[i][1] = false;
        }
    } else {
        pickaxes[num][1] = false;
    }
}
function adminRemoveGear(num) {
    if (num === undefined) {
        for (let i = 0; i < gears.length; i++) {
            gears[i] = false;
        }
    } else {
        gears[num] = false;
    }
}
let allGearNames = [
    "Ore Tracker",
    "Real Candilium",
    "Real Vitriol",
    "Infinity Collector",
    "Layer Materializer",
    "Fortune III Book",
    "Haste II Beacon",
    "Energy Siphoner",
    "Sugar Rush",
    "Silly TP",
    "Logical Randomiser",
    "Storm Sneakers",
    "Artifice Annihilator",
    "Repurposed Replicator",
    "Cavern Capacitator",
    "High Powered Vacuum",
    "Unlocked Speedcap",
    "Infinity Collector II",
    "Clover's Undoing",
    "Fantastical Feather",
    "NYI",
]
function adminListNums() {
    let output = "";
    for (let i = 0; i < allPickaxeNames.length; i++) {
        output += allPickaxeNames[i] + " " + (i+1) + "\n";
    }
    output += "\n";
    for (let i = 0; i < allGearNames.length; i++) {
        output += allGearNames[i] + " " + i + "\n";
    }
    console.log(output);
}
function adminGetHelp() {
    console.log("adminGiveOres(block, amt) - Block is the block you want, enter undefined without quotes for all blocks, else put block in quotes. Amt is the amount, leave blank for 100.");
    console.log("adminGivePickaxe(num) - Num is the pickaxe you want to receive, leave blank for all.");
    console.log("adminRemovePickaxe(num) - Num is the pickaxe you want to delete, leave blank for all.");
    console.log("adminGiveGear(num) - Num is the gear you want to receive, leave blank for all.");
    console.log("adminRemoveGear(num) - Num is the gear you want to delete, leave blank for all.");
    console.log("adminListNums() - Lists all the numbers for specific pickaxes and gears.")
}
*/