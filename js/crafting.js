const pickaxeRecipes = {
    1: {
        "🟫": 10000,
        "🟧": 333,
        "🟥": 290,
        "🟪": 250,
        "⚫": 100
    },
    2: {
        "🟫": 50000,
        "🟢": 1111,
        "🔵": 1000,
        "🟡": 900,
        "🟠": 830,
        "🔴": 700,
        "🟣": 625,
        "🟤": 555
    },
    3: {
        "🟫": 100000,
        "🟢": 2222,
        "🔵": 2000,
        "🟡": 1820,
        "🟠": 1670,
        "💚": 1,
        "💙": 1
    },
    4: {
        "📰": 250000,
        "🟢": 5555,
        "🔵": 5000,
        "🟡": 4550,
        "🟠": 4170,
        "❤️": 2,
        "🤍": 1,
        "⚙️": 1
    },
    5: {
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
    6: {
        "🟫": 650000,
        "🟧": 75000,
        "🟪": 60000,
        "❤️": 5,
        "🤍": 3,
        "🍁": 1,
        "🎄": 1,
        "🎍": 1
    },
    7: {
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
    8: {
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
    9: {
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
    10: {
        "🟫": 125000000,
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
        "🔳": 5,
        "⏹️": 3,
        "⚗️": 20,
        "🧪": 15
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
    for (let element of document.getElementById("pickaxeCrafts").children)
        element.classList.remove("darkButton")
    for (let element of document.getElementById("gearCrafts").children)
        element.classList.remove("darkButton")
    button.classList.add("darkButton");
    if (isVisible(document.getElementById("pickaxeCrafts"))) {
        if (typeof n !== "number") {
            console.error("displayRecipe takes in a string for pickaxe recipes");
            return;
        }
        let itemDescription = document.getElementById("itemDescription");
        itemDescription.innerHTML = pickaxeDescriptions[n];
        let recipes = document.getElementById("displayRecipe");
        while (recipes.firstChild)
            recipes.removeChild(recipes.firstChild);
        for (let pick in recipeElements["pickaxes"])
            invisible(recipeElements["pickaxes"][pick]);
        recipes.appendChild(recipeElements["pickaxes"][n]);
        visible(recipeElements["pickaxes"][n]);
        let button = recipes.firstElementChild.lastElementChild;
        if (currentPickaxe === n)
            button.innerHTML = "Equipped!";
        else if (pickaxes[n])
            button.innerHTML = "Equip!";
        let displayedRecipe = document.createElement("p");
        displayedRecipe.id = "displayedRecipe";
        displayedRecipe.innerHTML = `Pickaxe ${n}:`;
        recipes.insertBefore(displayedRecipe, recipes.children[0]);
        updateActiveRecipe();
    } else {
        if (typeof n !== "string") {
            console.error("displayRecipe takes in a string for gear recipes");
            return;
        }
        let itemDescription = document.getElementById("itemDescription");
        itemDescription.innerHTML = gearDescriptions[n];
        let recipes = document.getElementById("displayRecipe");
        while (recipes.firstChild)
            recipes.removeChild(recipes.firstChild);
        for (let gear in recipeElements["gears"])
            invisible(recipeElements["gears"][gear]);
        recipes.appendChild(recipeElements["gears"][n]);
        visible(recipeElements["gears"][n]);
        let displayedRecipe = document.createElement("p");
        displayedRecipe.id = "displayedRecipe";
        displayedRecipe.innerHTML = `${gearNamesNormalized[n]}:`;
        recipes.insertBefore(displayedRecipe, recipes.children[0]);
        updateActiveRecipe();
    }
}

//TODO: combine these methods
function createPickaxeRecipes() {
    let pickaxeCrafts = document.getElementById("pickaxeCrafts");
    for (let pick in pickaxeRecipes) {
        let pickaxeDisplay = document.createElement("div");
        pickaxeDisplay.id = `pickaxeRecipe${pick}`;
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
        button.id = `craftPickaxe${pick}`;
        button.classList.add("actualCraftButton");
        button.setAttribute("onclick", `craftPickaxe(${pick}, this)`);
        if (pickaxes[pick])
            button.innerHTML = "Equip!";
        else
            button.innerHTML = "Craft!";
        pickaxeDisplay.appendChild(button);
        recipeElements["pickaxes"][pick] = pickaxeDisplay;
        
        let craftPickaxeButton = document.createElement("button");
        craftPickaxeButton.setAttribute("onclick", `displayRecipe(${pick}, this)`);
        craftPickaxeButton.classList.add("craftPickaxeButton");
        craftPickaxeButton.innerHTML = `Pickaxe ${pick}`;
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
        if (gears[gear])
            button.innerHTML = "Owned!";
        else
            button.innerHTML = "Craft!";
        gearDisplay.appendChild(button);
        recipeElements["gears"][gear] = gearDisplay;
        
        let craftGearButton = document.createElement("button");
        //TODO: make a better unlock system
        if (!gears["silly-tp"] && inventory["🎂"]["normal"] === 0 && gear === "silly-tp")
            invisible(craftGearButton);
        craftGearButton.setAttribute("onclick", `displayRecipe('${gear}', this)`);
        craftGearButton.classList.add("craftGearButton");
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
                        pickaxeDisplay.innerHTML = `<span class="emoji">${ore}</span> ${inventory[ore]["normal"]}/${pickaxeRecipes[pick][ore]}`;
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
                        pickaxeDisplay.innerHTML = `<span class="emoji">${ingredient}</span> ${inventory[ingredient]["normal"]}/${pickaxeRecipes[pick][ingredient]}`;
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
                        gearDisplay.innerHTML = `<span class="emoji">${ore}</span> ${inventory[ore]["normal"]}/${gearRecipes[gear][ore]}`;
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
                        gearDisplay.innerHTML = `<span class="emoji">${ingredient}</span> ${inventory[ingredient]["normal"]}/${gearRecipes[gear][ingredient]}`;
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
            let pickaxeDisplay = document.getElementById(`pickaxeRecipe${pick}`);
            pickaxeDisplay.lastElementChild.innerHTML = "Equipped!";
            updateActiveRecipe();
        }
    } else {
        let pickaxeDisplay = document.getElementById(`pickaxeRecipe${pick}`);
        pickaxeDisplay.lastElementChild.innerHTML = "Equipped!";
        currentPickaxe = pick;
    }
}
function craftGear(gear) {
    canCraft = true;
    if (!gears[gear]) {
        for (let ingredient in gearRecipes[gear]) {
            if (inventory[ingredient]["normal"] < gearRecipes[gear][ingredient]) {
                canCraft = false;
                break;
            }
        }
        if (canCraft) {
            gears[gear] = true;
            for (let ingredient in gearRecipes[gear]) {
                inventory[ingredient]["normal"] -= gearRecipes[gear][ingredient];
                updateInventory(ingredient, "normal");
            }
            let gearDisplay = document.getElementById(`gearRecipe${snakeToCamel(gear, true)}`);
            gearDisplay.lastElementChild.innerHTML = "Owned!";
            updateActiveRecipe();
        }
    }
    if (gear === "silly-tp") gearAbility2();
}

function showPickaxes() {
    visible(document.getElementById("pickaxeCrafts"));
    document.getElementById("showPickaxes").classList.add("darkButton");
    invisible(document.getElementById("gearCrafts"));
    document.getElementById("showGears").classList.remove("darkButton");
}
function showGears() {
    invisible(document.getElementById("pickaxeCrafts"));
    document.getElementById("showPickaxes").classList.remove("darkButton");
    visible(document.getElementById("gearCrafts"));
    document.getElementById("showGears").classList.add("darkButton");
}
