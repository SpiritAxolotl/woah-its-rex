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
        "⚫": 50000000,
        "🟤": 35000000
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

let recipeElements = {"pickaxes": {}, "gears": {}};
function displayRecipe(n, button) {
    if (button.classList.contains("darkButton")) {
        button.classList.remove("darkButton");
        if (isVisible(document.getElementById("pickaxeCrafts")))
            invisible(recipeElements["pickaxes"][n]);
        else
            invisible(recipeElements["gears"][n]);
        invisible(document.getElementById("displayedRecipe"));
        invisible(document.getElementById("itemDescription"));
        return;
    }
    visible(document.getElementById("displayRecipe"));
    visible(document.getElementById("displayedRecipe"));
    visible(document.getElementById("itemDescription"));
    for (let element of document.getElementById("pickaxeCrafts").children)
        element.classList.remove("darkButton");
    for (let element of document.getElementById("gearCrafts").children)
        element.classList.remove("darkButton");
    button.classList.add("darkButton");
    if (isVisible(document.getElementById("pickaxeCrafts"))) {
        const pick = n;
        let itemDescription = document.getElementById("itemDescription");
        itemDescription.innerHTML = pickaxeDescriptions[pick];
        let recipes = document.getElementById("displayRecipe");
        while (recipes.firstChild)
            recipes.removeChild(recipes.firstChild);
        for (let pick in recipeElements["pickaxes"])
            invisible(recipeElements["pickaxes"][pick]);
        recipes.appendChild(recipeElements["pickaxes"][pick]);
        visible(recipeElements["pickaxes"][pick]);
        let button = recipes.firstElementChild.lastElementChild;
        if (currentPickaxe === pick)
            button.innerHTML = "Equipped!";
        else if (pickaxes[pick])
            button.innerHTML = "Equip!";
        let displayedRecipe = document.createElement("p");
        displayedRecipe.id = "displayedRecipe";
        displayedRecipe.innerHTML = `${pickaxeNamesNormalized[pick]}:`;
        displayedRecipe.title = pickaxeSillyDescriptions[pick];
        recipes.insertBefore(displayedRecipe, recipes.children[0]);
        updateActiveRecipe();
    } else {
        const gear = n;
        let itemDescription = document.getElementById("itemDescription");
        itemDescription.innerHTML = gearDescriptions[gear];
        let recipes = document.getElementById("displayRecipe");
        while (recipes.firstChild)
            recipes.removeChild(recipes.firstChild);
        for (let gear in recipeElements["gears"])
            invisible(recipeElements["gears"][gear]);
        recipes.appendChild(recipeElements["gears"][gear]);
        visible(recipeElements["gears"][gear]);
        let displayedRecipe = document.createElement("p");
        displayedRecipe.id = "displayedRecipe";
        displayedRecipe.innerHTML = `${gearNamesNormalized[gear]}:`;
        recipes.insertBefore(displayedRecipe, recipes.children[0]);
        updateActiveRecipe();
    }
}

//TODO: combine these methods
function createPickaxeRecipes() {
    let pickaxeCrafts = document.getElementById("pickaxeCrafts");
    for (let pick in pickaxeRecipes) {
        let pickaxeDisplay = document.createElement("div");
        pickaxeDisplay.id = `pickaxeRecipe${snakeToCamel(pick, true)}`;
        invisible(pickaxeDisplay);
        pickaxeDisplay.classList.add("craftingAmountsDisplay");
        for (let ingredient in pickaxeRecipes[pick]) {
            let ingredientDisplay = document.createElement("p");
            ingredientDisplay.id = (`${ingredient}pickaxeRecipe${pick}Display`);
            ingredientDisplay.innerHTML = `${ingredient} ${inventory[ingredient]["normal"]}/${pickaxeRecipes[pick][ingredient]}`;
            if (inventory[ingredient]["normal"] >= pickaxeRecipes[pick][ingredient]) {
                ingredientDisplay.classList.add("recipeGreen");
                ingredientDisplay.classList.remove("recipeRed");
            } else {
                ingredientDisplay.classList.add("recipeRed");
                ingredientDisplay.classList.remove("recipeGreen");
            }
            pickaxeDisplay.appendChild(ingredientDisplay);
        }
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
        craftPickaxeButton.innerHTML = pickaxeNamesNormalized[pick];
        pickaxeCrafts.appendChild(craftPickaxeButton);
    }
}

function createGearRecipes() {
    let gearCrafts = document.getElementById("gearCrafts");
    for (let gear in gearRecipes) {
        let gearDisplay = document.createElement("div");
        gearDisplay.id = `gearRecipe${snakeToCamel(gear, true)}`;
        invisible(gearDisplay);
        gearDisplay.classList.add("craftingAmountsDisplay");
        for (let ingredient in gearRecipes[gear]) {
            let ingredientDisplay = document.createElement("p");
            ingredientDisplay.id = (`${ingredient}gearRecipe${snakeToCamel(gear, true)}Display`);
            ingredientDisplay.innerHTML = `${ingredient} ${inventory[ingredient]["normal"]}/${gearRecipes[gear][ingredient]}`;
            if (inventory[ingredient]["normal"] >= gearRecipes[gear][ingredient]) {
                ingredientDisplay.classList.add("recipeGreen");
                ingredientDisplay.classList.remove("recipeRed");
            } else {
                ingredientDisplay.classList.add("recipeRed");
                ingredientDisplay.classList.remove("recipeGreen");
            }
            gearDisplay.appendChild(ingredientDisplay);
        }
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
        if (!gears["silly-tp"] && inventory["🎂"]["normal"] === 0 && gear === "silly-tp")
            invisible(craftGearButton);
        craftGearButton.setAttribute("onclick", `displayRecipe('${gear}', this)`);
        craftGearButton.classList.add("craftGearButton", "craftButton");
        craftGearButton.innerHTML = gearNamesNormalized[gear];
        gearCrafts.appendChild(craftGearButton);
    }
}

function updateActiveRecipe(ore) {
    if (isVisible(document.getElementById("pickaxeCrafts"))) {
        for (let pick in recipeElements["pickaxes"]) {
            if (isVisible(recipeElements["pickaxes"][pick])) {
                if (typeof ore === "string") {
                    let pickaxeDisplay = document.getElementById(`${ore}pickaxeRecipe${pick}Display`);
                    if (pickaxeDisplay === null) break;
                        pickaxeDisplay.innerHTML = `<span class="emoji" title="1/${oreList[ore]["prob"].toLocaleString()}">${ore}</span> ${inventory[ore]["normal"].toLocaleString()}/${pickaxeRecipes[pick][ore].toLocaleString()}`;
                    if (inventory[ore]["normal"] >= pickaxeRecipes[pick][ore]) {
                        pickaxeDisplay.classList.add("recipeGreen");
                        pickaxeDisplay.classList.remove("recipeRed");
                    } else {
                        pickaxeDisplay.classList.add("recipeRed");
                        pickaxeDisplay.classList.remove("recipeGreen");
                    }
                } else {
                    for (let ingredient in pickaxeRecipes[pick]) {
                        let pickaxeDisplay = document.getElementById(`${ingredient}pickaxeRecipe${pick}Display`);
                        if (pickaxeDisplay === null) break;
                        pickaxeDisplay.innerHTML = `<span class="emoji" title="1/${oreList[ingredient]["prob"].toLocaleString()}">${ingredient}</span> ${inventory[ingredient]["normal"].toLocaleString()}/${pickaxeRecipes[pick][ingredient].toLocaleString()}`;
                        if (inventory[ingredient]["normal"] >= pickaxeRecipes[pick][ingredient]) {
                            pickaxeDisplay.classList.add("recipeGreen");
                            pickaxeDisplay.classList.remove("recipeRed");
                        } else {
                            pickaxeDisplay.classList.add("recipeRed");
                            pickaxeDisplay.classList.remove("recipeGreen");
                        }
                    }
                }
            }
        }
    } else {
        for (let gear in recipeElements["gears"]) {
            if (isVisible(recipeElements["gears"][gear])) {
                if (typeof ore === "string") {
                    let gearDisplay = document.getElementById(`${ore}gearRecipe${snakeToCamel(gear, true)}Display`);
                    if (gearDisplay === null) break;
                    gearDisplay.innerHTML = `<span class="emoji" title="1/${oreList[ore]["prob"].toLocaleString()}">${ore}</span> ${inventory[ore]["normal"].toLocaleString()}/${gearRecipes[gear][ore].toLocaleString()}`;
                    if (inventory[ore]["normal"] >= gearRecipes[gear][ore]) {
                        gearDisplay.classList.add("recipeGreen");
                        gearDisplay.classList.remove("recipeRed");
                    } else {
                        gearDisplay.classList.add("recipeRed");
                        gearDisplay.classList.remove("recipeGreen");
                    }
                } else {
                    for (let ingredient in gearRecipes[gear]) {
                        let gearDisplay = document.getElementById(`${ingredient}gearRecipe${snakeToCamel(gear, true)}Display`);
                        gearDisplay.innerHTML = `<span class="emoji" title="1/${oreList[ingredient]["prob"].toLocaleString()}">${ingredient}</span> ${inventory[ingredient]["normal"].toLocaleString()}/${gearRecipes[gear][ingredient].toLocaleString()}`;
                        if (inventory[ingredient]["normal"] >= gearRecipes[gear][ingredient]) {
                            gearDisplay.classList.add("recipeGreen");
                            gearDisplay.classList.remove("recipeRed");
                        } else {
                            gearDisplay.classList.add("recipeRed");
                            gearDisplay.classList.remove("recipeGreen");
                        }
                    }
                }
            }
        }
    }
}

function craftPickaxe(pick) {
    canCraft = true;
    if (!pickaxes[pick]) {
        for (let ingredient in pickaxeRecipes[pick]) {
            if (inventory[ingredient]["normal"] < pickaxeRecipes[pick][ingredient]) {
                canCraft = false;
                break;
            }
        }
        if (canCraft) {
            pickaxes[pick] = true;
            currentPickaxe = pick;
            for (let ingredient in pickaxeRecipes[pick]) {
                inventory[ingredient]["normal"] -= pickaxeRecipes[pick][ingredient];
                updateInventory(ingredient, "normal");
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
        for (let ingredient in gearRecipes[gear]) {
            if (inventory[ingredient]["normal"] < gearRecipes[gear][ingredient]) {
                canCraft = false;
                break;
            }
        }
        if (canCraft) {
            gears[gear] = true;
            currentGears.push(gear);
            for (let ingredient in gearRecipes[gear]) {
                inventory[ingredient]["normal"] -= gearRecipes[gear][ingredient];
                updateInventory(ingredient, "normal");
            }
            if (gear !== "silly-tp")
                button.innerHTML = "Equipped!";
            else
                button.innerHTML = "Teleport!";
            updateActiveRecipe();
            createIndex();
        } else button.innerHTML = "Craft!";
    } else if (!currentGears.includes(gear)) {
        button.innerHTML = "Equipped!";
        currentGears.push(gear);
    } else {
        button.innerHTML = "Equip!";
        currentGears.splice(currentGears.indexOf(gear), 1);
    }
    if (gear === "silly-tp" && gears["silly-tp"]) gearAbilitySillyTp();
}

function showPickaxes() {
    if (document.getElementById("showPickaxes").classList.contains("darkButton")) {
        document.getElementById("showPickaxes").classList.remove("darkButton");
        invisible(document.getElementById("pickaxeCrafts"));
        invisible(document.getElementById("displayRecipe"));
        invisible(document.getElementById("displayedRecipe"));
        invisible(document.getElementById("itemDescription"));
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
        invisible(document.getElementById("displayedRecipe"));
        invisible(document.getElementById("itemDescription"));
    } else {
        invisible(document.getElementById("pickaxeCrafts"));
        document.getElementById("showPickaxes").classList.remove("darkButton");
        visible(document.getElementById("gearCrafts"));
        document.getElementById("showGears").classList.add("darkButton");
    }
}
