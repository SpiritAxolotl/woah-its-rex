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
function displayRecipe(n) {
    for (let element of document.getElementById("craftableDescriptions").children)
        invisible(element);
    if (isVisible(document.getElementById("pickaxeCrafts"))) {
        if (typeof n !== "number") console.error("displayRecipe takes in a string for pickaxe recipes");
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
        visible(document.getElementById("pickaxe" + n + "Description"));
    } else {
        if (typeof n !== "string") console.error("displayRecipe takes in a string for gear recipes");
        let recipes = document.getElementById("displayRecipe");
        while (recipes.firstChild)
            recipes.removeChild(recipes.firstChild);
        for (let gear in recipeElements["gears"])
            invisible(recipeElements["gears"][gear]);
        recipes.appendChild(recipeElements["gears"][n]);
        visible(recipeElements["gears"][n]);
        let displayedRecipe = document.createElement("p");
        displayedRecipe.id = "displayedRecipe";
        displayedRecipe.innerHTML = normalize(n, true) + ":";
        recipes.insertBefore(displayedRecipe, recipes.children[0]);
        updateActiveRecipe();
        visible(document.getElementById("gear" + snakeToCamel(n, true) + "Description"));
    }
}

//TODO: combine these methods
function createPickaxeRecipes() {
    for (let pick in pickaxeRecipes) {
        let pickaxeDisplay = document.createElement("div");
        pickaxeDisplay.id = "pickaxeRecipe" + pick;
        invisible(pickaxeDisplay);
        pickaxeDisplay.classList.add("craftingAmountsDisplay");
        for (let ingredient in pickaxeRecipes[pick]) {
            let ingredientDisplay = document.createElement("p");
            ingredientDisplay.id = (ingredient + "pickaxeRecipe" + pick + "Display");
            ingredientDisplay.innerHTML = ingredient + " " + oreList[ingredient]["inv"]["normal"] + "/" + pickaxeRecipes[pick][ingredient];
            if (oreList[ingredient]["inv"]["normal"] >= pickaxeRecipes[pick][ingredient])
                ingredientDisplay.style.color = "green";
            else
                ingredientDisplay.style.color = "red";
            pickaxeDisplay.appendChild(ingredientDisplay);
        }
        let button = document.createElement("button");
        button.id = "craftPickaxe" + pick;
        button.setAttribute("onclick", "craftPickaxe(" + pick + ")");
        if (pickaxes[pick])
            button.innerHTML = "Equip!";
        else
            button.innerHTML = "Craft!";
        pickaxeDisplay.appendChild(button);
        recipeElements["pickaxes"][pick] = pickaxeDisplay;
    }
}

function createGearRecipes() {
    for (let gear in gearRecipes) {
        let gearDisplay = document.createElement("div");
        gearDisplay.id = "gearRecipe" + snakeToCamel(gear, true);
        invisible(gearDisplay);
        gearDisplay.classList.add("craftingAmountsDisplay");
        for (let ingredient in gearRecipes[gear]) {
            let ingredientDisplay = document.createElement("p");
            ingredientDisplay.id = (ingredient + "gearRecipe" + snakeToCamel(gear, true) + "Display");
            ingredientDisplay.innerHTML = ingredient + " " + oreList[ingredient]["inv"]["normal"] + "/" + gearRecipes[gear][ingredient];
            if (oreList[ingredient]["inv"]["normal"] >= gearRecipes[gear][ingredient])
                ingredientDisplay.style.color = "green";
            else
                ingredientDisplay.style.color = "red";
            gearDisplay.appendChild(ingredientDisplay);
        }
        let button = document.createElement("button");
        button.id = "craftGear" + gear;
        button.setAttribute("onclick", "craftGear(" + gear + ")");
        if (gears[gear])
            button.innerHTML = "Owned!";
        else
            button.innerHTML = "Craft!";
        gearDisplay.appendChild(button);
        recipeElements["gears"][gear] = gearDisplay;
    }
}

function updateActiveRecipe() {
    if (isVisible(document.getElementById("pickaxeCrafts"))) {
        for (let pick in recipeElements["pickaxes"]) {
            if (isVisible(recipeElements["pickaxes"][pick])) {
                for (let ingredient in pickaxeRecipes[pick]) {
                    let pickaxeDisplay = document.getElementById(ingredient + "pickaxeRecipe" + pick + "Display");
                    pickaxeDisplay.innerHTML = "<span class='emoji'>" + ingredient + "</span> " + oreList[ingredient]["inv"]["normal"] + "/" + pickaxeRecipes[pick][ingredient];
                    if (oreList[ingredient]["inv"]["normal"] >= pickaxeRecipes[pick][ingredient])
                        pickaxeDisplay.style.color = "green";
                    else
                        pickaxeDisplay.style.color = "red";
                }
            }
        }
    } else {
        for (let gear in recipeElements["gears"]) {
            if (isVisible(recipeElements["gears"][gear])) {
                for (let ingredient in gearRecipes[gear]) {
                    let gearDisplay = document.getElementById(ingredient + "gearRecipe" + snakeToCamel(gear, true) + "Display");
                    gearDisplay.innerHTML = "<span class='emoji'>" + ingredient + "</span> " + oreList[ingredient]["inv"]["normal"] + "/" + gearRecipes[gear][ingredient];
                    if (oreList[ingredient]["inv"]["normal"] >= gearRecipes[gear][ingredient])
                        gearDisplay.style.color = "green";
                    else
                        gearDisplay.style.color = "red";
                }
            }
        }
    }
}

function craftPickaxe(pick) {
    canCraft = true;
    if (!pickaxes[pick]) {
        for (let ingredient in pickaxeRecipes[pick]) {
            if (oreList[ingredient]["inv"]["normal"] < pickaxeRecipes[pick][ingredient]) {
                canCraft = false;
                break;
            }
        }
        if (canCraft) {
            pickaxes[pick] = true;
            currentPickaxe = pick;
            for (let ingredient in pickaxeRecipes[pick]) {
                oreList[ingredient]["inv"]["normal"] -= pickaxeRecipes[pick][ingredient];
                updateInventory(ingredient, "normal");
            }
            let pickaxeDisplay = document.getElementById("pickaxeRecipe" + pick);
            pickaxeDisplay.lastElementChild.innerHTML = "Equipped!";
            updateActiveRecipe();
        }
    } else {
        let pickaxeDisplay = document.getElementById("pickaxeRecipe" + pick);
        pickaxeDisplay.lastElementChild.innerHTML = "Equipped!";
        currentPickaxe = pick;
    }
}
function craftGear(gear) {
    canCraft = true;
    if (!gears[gear]) {
        for (let ingredient in gearRecipes[gear]) {
            if (oreList[ingredient]["inv"]["normal"] < gearRecipes[gear][ingredient]) {
                canCraft = false;
                break;
            }
        }
        if (canCraft) {
            gears[gear] = true;
            for (let ingredient in gearRecipes[gear]) {
                oreList[ingredient]["inv"]["normal"] -= gearRecipes[gear][ingredient];
                updateInventory(ingredient, "normal");
            }
            let gearDisplay = document.getElementById("gearRecipe" + snakeToCamel(gear, true));
            gearDisplay.lastElementChild.innerHTML = "Owned!";
            updateActiveRecipe();
        }
    }
    if (gear === "silly-tp")
        gearAbility2();
}

function showPickaxes() {
    visible(document.getElementById("pickaxeCrafts"));
    invisible(document.getElementById("gearCrafts"));
}
function showGears() {
    invisible(document.getElementById("pickaxeCrafts"));
    visible(document.getElementById("gearCrafts"));
}
