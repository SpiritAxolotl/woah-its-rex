const pickaxeRecipes = {
    "ol-faithful": {},
    "mulch-mallet": {
        "🟫": 10000,
        "🟧": 333,
        "🟥": 290,
        "🟪": 250,
        "⚫": 100
    },
    "mud-sickle": {
        "🟫": 50000,
        "🟢": 1111,
        "🔵": 1000,
        "🟡": 900,
        "🟠": 830,
        "🔴": 700,
        "🟣": 625,
        "🟤": 555
    },
    "dirt-ravager": {
        "🟫": 100000,
        "🟢": 2222,
        "🔵": 2000,
        "🟡": 1820,
        "🟠": 1670,
        "💚": 1,
        "💙": 1
    },
    "void-crusher": {
        "📰": 250000,
        "🟢": 5555,
        "🔵": 5000,
        "🟡": 4550,
        "🟠": 4170,
        "❤️": 2,
        "🤍": 1,
        "⚙️": 1
    },
    "geode-staff": {
        "🪨": 500000,
        "🟢": 11000,
        "🔵": 10000,
        "🟡": 9000,
        "🟠": 8500,
        "❤️": 5,
        "🤍": 3,
        "💠": 1,
        "🥏": 1
    },
    "earth-soiler": {
        "🟫": 650000,
        "🟧": 75000,
        "🟪": 60000,
        "❤️": 5,
        "🤍": 3,
        "🍁": 1,
        "🎄": 1,
        "🎍": 1
    },
    "crypt-smasher": {
        "🌵": 500000,
        "🌊": 300000,
        "🟢": 150000,
        "⚫": 75000,
        "💛": 7,
        "🖍️": 3,
        "⚱️": 3,
        "🤿": 2,
        "🫧": 2,
        "🐟": 2,
        "🎀": 2
    },
    "labrynthian-tide": {
        "🧱": 5000000,
        "🌊": 5000000,
        "☢️": 5000000,
        "🟢": 500000,
        "🔱": 2,
        "🧲": 3,
        "🪬": 3,
        "👑": 3,
        "🎇": 2,
        "🎣": 10,
        "⛵": 10,
        "🧩": 7,
        "🔔": 7,
        "🪙": 5,
        "🗿": 5
    },
    "77-leaf-destroyer": {
        "📰": 15000000,
        "🧱": 15000000,
        "📝": 1,
        "🌟": 1,
        "🔗": 15,
        "🧨": 15,
        "🏆": 10,
        "🪚": 50,
        "🪜": 50,
        "🎲": 50,
        "✂️": 50
    },
    "planet-buster": {
        "🟫": 75000000,
        "🥗": 2,
        "🌪️": 5,
        "🌏": 10,
        "🌲": 40,
        "🎃": 45,
        "🎍": 50,
        "🎄": 100,
        "🪵": 100,
        "🌻": 100,
        "🍁": 100
    },
    "whirlpool-of-fate": {
        "🌊": 200000000,
        "💫": 1,
        "🪩": 5,
        "👿": 10,
        "🌀": 10,
        "🔱": 100,
        "👑": 100,
        "🐟": 250,
        "🫧": 500,
        "🤿": 500,
        "🎣": 500,
        "⛵": 500
    },
    "wings-of-glory": {
        "🧱": 150000000,
        "🪨": 150000000,
        "🌫️": 150000000,
        "🌇": 1,
        "🌈": 2,
        "👁️": 3,
        "💸": 15,
        "🧊": 30,
        "🥉": 30,
        "❄️": 40,
        "🧵": 50,
        "🤍": 750,
        "💚": 1500,
        "⚫": 30000000,
        "🟤": 40000000
    }
},
gearRecipes = {
    "ore-tracker": {
        "🪨": 300000,
        "🟧": 25000,
        "🟥": 25000,
        "🟪": 25000,
        "🔋": 1
    },
    "real-candilium": {
        "🌫️": 1000000,
        "🧡": 10,
        "💜": 5,
        "🎭": 1,
        "🪄": 2,
        "🕯️": 1
    },
    "real-vitriol": {
        "🌵": 1750000,
        "🖤": 1,
        "🤍": 7,
        "🖍️": 2,
        "⚱️": 2,
        "🎀": 1,
        "⭐": 1
    },
    "infinity-collector": {
        "🪨": 15000000,
        "💠": 25,
        "⚜️": 25,
        "🔋": 10,
        "🔮": 7,
        "☄️": 5,
        "💎": 1
    },
    "layer-materializer": {
        "🟫": 2500000,
        "🧱": 2500000,
        "🌫️": 2500000,
        "🌊": 2500000,
        "🪨": 2500000,
        "☢️": 2500000,
        "🌵": 2500000,
        "📰": 2500000,
        "📟": 15,
        "⌚": 2,
        "🔥": 1
    },
    "fortune-3-book": {
        "🌫️": 50000000,
        "🌊": 50000000,
        "🪄": 50,
        "🎨": 25,
        "🕋": 20,
        "🕯️": 15,
        "🌀": 1,
        "⌛": 1,
    },
    "haste-2-beacon": {
        "🌵": 75000000,
        "⚱️": 75,
        "🗡️": 50,
        "🎀": 20,
        "🔆": 10,
        "⭐": 15,
        "💥": 2,
        "🪐": 1
    },
    "energy-siphoner": {
        "🌫️": 3000000,
        "🕋": 1,
        "🎨": 2,
        "🎴": 5,
        "🎭": 10
    },
    "sugar-rush": {
        "☢️": 4000000,
        "🔳": 3,
        "⏹️": 5,
        "⚗️": 15,
        "🧪": 20
    },
    "silly-tp": {
        "🎂": 1,
        "🔮": 1,
        "🪄": 1
    }
};
const gearList = Object.keys(gearRecipes);

function calcTotalIngredients(ore) {
    let total = 0;
    for (const variant in inventory[ore])
        if (variantNames.indexOf(capitalize(variant)) <= variantNames.indexOf(sellUpToVariant))
            total += inventory[ore][variant];
    return total;
}

let recipeElements = {"pickaxes": {}, "gears": {}};
let currentRecipe = "";
function displayRecipe(item, button) {
    if (button.classList.contains("darkButton")) {
        button.classList.remove("darkButton");
        invisible(document.getElementById("displaySellUpToVariants"));
        if (isVisible(document.getElementById("pickaxeCrafts")))
            invisible(recipeElements["pickaxes"][item]);
        else
            invisible(recipeElements["gears"][item]);
        invisible(document.getElementById("recipeTitle"));
        invisible(document.getElementById("itemDescription"));
        currentRecipe = "";
        return;
    }
    
    visible(document.getElementById("displaySellUpToVariants"));
    visible(document.getElementById("displayRecipe"));
    visible(document.getElementById("recipeTitle"));
    visible(document.getElementById("itemDescription"));
    for (const element of document.querySelectorAll("#pickaxeCrafts > button, #gearCrafts > button"))
        element.classList.remove("darkButton");
    button.classList.add("darkButton");
    
    const allItemNames = {...pickaxeNames, ...gearNamesNormalized};
    currentRecipe = item;
    const type = `${pickOrGear(item)}s`;
    let itemDescription = document.getElementById("itemDescription");
    itemDescription.innerHTML = pickaxeDescriptions[item] ?? gearDescriptions[item];
    let recipes = document.getElementById("displayRecipe");
    recipes.innerHTML = "";
    for (const i in recipeElements[type])
        invisible(recipeElements[type][i]);
    recipes.appendChild(recipeElements[type][item]);
    visible(recipeElements[type][item]);
    let craftButton = document.querySelector(".actualCraftButton");
    if (currentPickaxe === item || currentGears.includes(item))
        craftButton.innerHTML = "Equipped!";
    else if (pickaxes[item] || gears[item])
        craftButton.innerHTML = "Equip!";
    //reimplement hidden recipes and non-ownable gears later
    //actually I can probably add a separate "abilities" thing soon
    let recipeTitle = document.createElement("p");
    recipeTitle.id = "recipeTitle";
    recipeTitle.innerHTML = `${allItemNames[item]}:`;
    if (type === "pickaxes")
        recipeTitle.title = pickaxeSillyDescriptions[item];
    recipes.insertBefore(recipeTitle, recipes.children[0]);
    
    const allRecipes = {...pickaxeRecipes, ...gearRecipes};
    document.querySelector("#displayRecipe > div").removeChild(craftButton);
    for (const ingredient in allRecipes[item]) {
        const totalIngredients = calcTotalIngredients(ingredient);
        let ingredientDisplay = document.createElement("p");
        ingredientDisplay.id = (`ingredientDisplay${ingredient}`);
        ingredientDisplay.classList.add("recipeIngredient");
        ingredientDisplay.innerHTML = `${ingredient} ${totalIngredients.toLocaleString()}/${allRecipes[item][ingredient].toLocaleString()}`;
        if (totalIngredients >= allRecipes[item][ingredient]) {
            ingredientDisplay.classList.add("recipeGreen");
            ingredientDisplay.classList.remove("recipeRed");
        } else {
            ingredientDisplay.classList.add("recipeRed");
            ingredientDisplay.classList.remove("recipeGreen");
        }
        document.querySelector("#displayRecipe > div").appendChild(ingredientDisplay);
    }
    document.querySelector("#displayRecipe > div").appendChild(craftButton);
    
    updateActiveRecipe();
}

//TODO: combine these methods
function createPickaxeRecipes() {
    let pickaxeCrafts = document.getElementById("pickaxeCrafts");
    for (const pick in pickaxeRecipes) {
        let pickaxeDisplay = document.createElement("div");
        pickaxeDisplay.id = `pickaxeRecipe${snakeToCamel(pick, true)}`;
        invisible(pickaxeDisplay);
        pickaxeDisplay.classList.add("craftingAmountsDisplay");
        let button = document.createElement("button");
        button.id = `craftPickaxe${snakeToCamel(pick, true)}`;
        button.classList.add("actualCraftButton");
        button.setAttribute("onclick", `craftPickaxe('${pick}', this)`);
        if (pickaxes[pick])
            button.innerHTML = "Equip!";
        else
            button.innerHTML = "Craft!";
        pickaxeDisplay.appendChild(button);
        recipeElements["pickaxes"][pick] = pickaxeDisplay;
        
        let craftPickaxeButton = document.createElement("button");
        craftPickaxeButton.setAttribute("onclick", `displayRecipe('${pick}', this)`);
        craftPickaxeButton.classList.add("craftPickaxeButton", "craftButton");
        craftPickaxeButton.innerHTML = pickaxeNames[pick];
        pickaxeCrafts.appendChild(craftPickaxeButton);
    }
}

function createGearRecipes() {
    let gearCrafts = document.getElementById("gearCrafts");
    for (const gear in gearRecipes) {
        let gearDisplay = document.createElement("div");
        gearDisplay.id = `gearRecipe${snakeToCamel(gear, true)}`;
        invisible(gearDisplay);
        gearDisplay.classList.add("craftingAmountsDisplay");
        let button = document.createElement("button");
        button.id = `craftGear${snakeToCamel(gear, true)}`;
        button.classList.add("actualCraftButton");
        button.setAttribute("onclick", `craftGear('${gear}', this)`);
        if (gears[gear]) {
            if (gear !== "silly-tp") {
                if (currentGears.includes(gear))
                    button.innerHTML = "Equipped!";
                else
                    button.innerHTML = "Equip!";
            } else button.innerHTML = "Teleport!";
        } else button.innerHTML = "Craft!";
        gearDisplay.appendChild(button);
        recipeElements["gears"][gear] = gearDisplay;
        
        let craftGearButton = document.createElement("button");
        //TODO: make a better unlock system
        if (!gears["silly-tp"] && calcTotalIngredients("🎂") === 0 && gear === "silly-tp")
            invisible(craftGearButton);
        craftGearButton.setAttribute("onclick", `displayRecipe('${gear}', this)`);
        craftGearButton.classList.add("craftGearButton", "craftButton");
        craftGearButton.innerHTML = gearNamesNormalized[gear];
        gearCrafts.appendChild(craftGearButton);
    }
}

function updateActiveRecipe(ore) {
    const allRecipes = {...pickaxeRecipes, ...gearRecipes};
    let ingredientDisplay = document.getElementById(`ingredientDisplay${ore}`);
    if (ingredientDisplay === null) {
        for (const ingredient in allRecipes[currentRecipe]) {
            const totalOres = calcTotalIngredients(ingredient);
            const row = document.getElementById(`ingredientDisplay${ingredient}`);
            row.innerHTML = `${ingredient} ${totalOres.toLocaleString()}/${allRecipes[currentRecipe][ingredient].toLocaleString()}`;
            if (totalOres >= allRecipes[currentRecipe][ingredient]) {
                row.classList.add("recipeGreen");
                row.classList.remove("recipeRed");
            } else {
                row.classList.add("recipeRed");
                row.classList.remove("recipeGreen");
            }
        }
    } else {
        const totalOres = calcTotalIngredients(ore);
        ingredientDisplay.innerHTML = `${ore} ${totalOres.toLocaleString()}/${allRecipes[currentRecipe][ore].toLocaleString()}`;
        if (totalOres >= allRecipes[currentRecipe][ore]) {
            ingredientDisplay.classList.add("recipeGreen");
            ingredientDisplay.classList.remove("recipeRed");
        } else {
            ingredientDisplay.classList.add("recipeRed");
            ingredientDisplay.classList.remove("recipeGreen");
        }
    }
}

function craftPickaxe(pick) {
    canCraft = true;
    if (!pickaxes[pick]) {
        for (const ingredient in pickaxeRecipes[pick]) {
            if (calcTotalIngredients(ingredient) < pickaxeRecipes[pick][ingredient]) {
                canCraft = false;
                break;
            }
        }
        if (canCraft) {
            pickaxes[pick] = true;
            currentPickaxe = pick;
            for (const ingredient in pickaxeRecipes[pick]) {
                let remainder = pickaxeRecipes[gear][ingredient];
                for (const v of variantNames) {
                    const variant = v.toLowerCase();
                    if (inventory[ingredient][variant] < remainder) {
                        remainder -= inventory[ingredient][variant];
                        inventory[ingredient][variant] = 0;
                    } else {
                        inventory[ingredient][variant] -= remainder;
                        break;
                    }
                }
                updateInventory(ingredient);
            }
            let pickaxeDisplay = document.getElementById(`pickaxeRecipe${snakeToCamel(pick, true)}`);
            pickaxeDisplay.lastElementChild.innerHTML = "Equipped!";
            updateActiveRecipe();
            createIndex();
            currentPickaxe = pick;
        }
    } else {
        let pickaxeDisplay = document.getElementById(`pickaxeRecipe${snakeToCamel(pick, true)}`);
        pickaxeDisplay.lastElementChild.innerHTML = "Equipped!";
        currentPickaxe = pick;
    }
}
function craftGear(gear, button) {
    canCraft = true;
    let gearDisplay = document.getElementById(`gearRecipe${snakeToCamel(gear, true)}`);
    button = button || gearDisplay.lastElementChild.innerHTML;
    if (!gears[gear]) {
        for (const ingredient in gearRecipes[gear]) {
            if (calcTotalIngredients(ingredient) < gearRecipes[gear][ingredient]) {
                canCraft = false;
                break;
            }
        }
        if (canCraft) {
            gears[gear] = true;
            currentGears.push(gear);
            for (const ingredient in gearRecipes[gear]) {
                let remainder = gearRecipes[gear][ingredient];
                for (const v of variantNames) {
                    const variant = v.toLowerCase();
                    if (inventory[ingredient][variant] < remainder) {
                        remainder -= inventory[ingredient][variant];
                        inventory[ingredient][variant] = 0;
                    } else {
                        inventory[ingredient][variant] -= remainder;
                        break;
                    }
                }
                updateInventory(ingredient);
            }
            button.innerHTML = gear !== "silly-tp" ? "Equipped!" : "Teleport!";
            updateActiveRecipe();
            createIndex();
        } else button.innerHTML = "Craft!";
    } else if (!currentGears.includes(gear)) {
        button.innerHTML = gear !== "silly-tp" ? "Equipped!" : "Teleport!";
        currentGears.push(gear);
    } else {
        button.innerHTML = gear !== "silly-tp" ? "Equip!" : "Teleport!";
        currentGears.splice(currentGears.indexOf(gear), 1);
    }
    if (gear === "silly-tp" && gears["silly-tp"]) gearAbilitySillyTp();
}

//gotta combine these at some point
function showPickaxes() {
    if (document.getElementById("showPickaxes").classList.contains("darkButton")) {
        document.getElementById("showPickaxes").classList.remove("darkButton");
        invisible(document.getElementById("pickaxeCrafts"));
        invisible(document.getElementById("displayRecipe"));
        invisible(document.getElementById("recipeTitle"));
        invisible(document.getElementById("itemDescription"));
        invisible(document.getElementById("displaySellUpToVariants"));
    } else {
        visible(document.getElementById("pickaxeCrafts"));
        document.getElementById("showPickaxes").classList.add("darkButton");
        invisible(document.getElementById("gearCrafts"));
        document.getElementById("showGears").classList.remove("darkButton");
    }
}
function showGears() {
    if (document.getElementById("showGears").classList.contains("darkButton")) {
        document.getElementById("showGears").classList.remove("darkButton");
        invisible(document.getElementById("gearCrafts"));
        invisible(document.getElementById("displayRecipe"));
        invisible(document.getElementById("recipeTitle"));
        invisible(document.getElementById("itemDescription"));
        invisible(document.getElementById("displaySellUpToVariants"));
    } else {
        invisible(document.getElementById("pickaxeCrafts"));
        document.getElementById("showPickaxes").classList.remove("darkButton");
        visible(document.getElementById("gearCrafts"));
        document.getElementById("showGears").classList.add("darkButton");
    }
}
