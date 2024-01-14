const pickaxeRecipes = [
    {
        //PICKAXE 1
        "🟫": 10000,
        "🟧": 333,
        "🟥": 290,
        "🟪": 250,
        "⚫": 100
    },
    {
        //PICKAXE 2
        "🟫": 50000,
        "🟢": 1111,
        "🔵": 1000,
        "🟡": 900,
        "🟠": 830,
        "🔴": 700,
        "🟣": 625,
        "🟤": 555
    },
    {
        //PICKAXE 3
        "🟫": 100000,
        "🟢": 2222,
        "🔵": 2000,
        "🟡": 1820,
        "🟠": 1670,
        "💚": 1,
        "💙": 1
    },
    {
        //PICKAXE 4
        "📰": 250000,
        "🟢": 5555,
        "🔵": 5000,
        "🟡": 4550,
        "🟠": 4170,
        "❤️": 2,
        "🤍": 1,
        "⚙️": 1
    },
    {
        //PICKAXE 5
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
    {
        //PICKAXE 6
        "🟫": 650000,
        "🟧": 75000,
        "🟪": 60000,
        "❤️": 5,
        "🤍": 3,
        "🍁": 1,
        "🎄": 1,
        "🎍": 1
    },
    {
        //PICKAXE 7
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
    {
        //PICKAXE 8
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
    {
        //PICKAXE 9
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
    {
        //PICKAXE 10
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
],
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
    "infinity-collecter": {
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

let recipeElements = [[], []];
function displayRecipe(n) {
    let craftableChildren = document.getElementById("craftableDescriptions").children;
    for (let i = 0; i < craftableChildren.length; i++)
        invisible(craftableChildren[i]);
    if (isVisible(document.getElementById("pickaxeCrafts"))) {
        let parent = document.getElementById("displayRecipe")
        while (parent.firstChild)
            parent.removeChild(parent.firstChild);
        for (let i = 0; i < recipeElements[0].length; i++)
            invisible(recipeElements[0][i]);
        parent.appendChild(recipeElements[0][n]);
        visible(recipeElements[0][n]);
        let temp = parent.children;
        temp = temp[0].children;
        temp = temp[temp.length - 1];
        if (currentPickaxe === n + 1)
            temp.innerHTML = "Equipped!";
        else if (pickaxes[n])
            temp.innerHTML = "Equip!";
        updateActiveRecipe();
        visible(document.getElementById("pickaxe" + n + "Description"));
    } else {
        let parent = document.getElementById("displayRecipe")
        while (parent.firstChild)
            parent.removeChild(parent.firstChild);
        for (let i = 0; i < recipeElements[1].length; i++)
            invisible(recipeElements[1][i]);
        parent.appendChild(recipeElements[1][n]);
        visible(recipeElements[1][n]);
        updateActiveRecipe();
        visible(document.getElementById("gear" + n + "Description"));
    }
}

//TODO: combine these methods
function createPickaxeRecipes() {
    for (let i = 0; i < pickaxeRecipes.length; i++) {
        const pick = Object.keys(pickaxeRecipes)[i];
        let tempElement = document.createElement("div");
        tempElement.id = "pickaxeRecipe" + (i+1);
        invisible(tempElement);
        tempElement.classList.add("craftingAmountsDisplay");
        for (let j = 0; j < pickaxeRecipes[i].length; j++) {
            const ingredient = Object.keys(pick)[j];
            let element = document.createElement("p");
            element.id = (ingredient + ("pickaxeRecipe" + (i+1) + "Display"));
            element.innerHTML = ingredient + " " + oreList[ingredient]["inv"]["normal"] + "/" + pick[ingredient];
            if (oreList[pickaxeRecipes[i][j][0]][1][0] >= pickaxeRecipes[i][j][1])
                element.style.color = "green";
            else
                element.style.color = "red";
            tempElement.appendChild(element);
        }
        let tempButton = document.createElement("button");
        tempButton.id = "craftPickaxe" + (i+1);
        tempButton.setAttribute("onclick", "craftPickaxe(" + (i+1) + ")");
        if (pickaxes[i + 1][1])
            tempButton.innerHTML = "Equip!";
        else
            tempButton.innerHTML = "Craft!";
        tempElement.appendChild(tempButton);
        recipeElements[0].push(tempElement);
    }
}

function createGearRecipes() {
    for (let i = 0; i < gearRecipes.length; i++) {
        let tempElement = document.createElement("div");
        tempElement.id = "gearRecipe" + snakeToCamel(gearNames[i+1], true);
        invisible(tempElement);
        tempElement.classList = "craftingAmountsDisplay";
        for (let j = 0; j < gearRecipes[i].length; j++) {
            let element = document.createElement("p");
            element.id = (gearRecipes[i][j][0] + ("gearRecipe" + snakeToCamel(gearNames[i+1], true) + "Display"));
            element.innerHTML = gearRecipes[i][j][0] + " " + oreList[gearRecipes[i][j][0]][1][0] + "/" + gearRecipes[i][j][1];
            if (oreList[gearRecipes[i][j][0]][1][0] >= gearRecipes[i][j][1])
                element.style.color = "green";
            else
                element.style.color = "red";
            tempElement.appendChild(element);
        }
        let tempButton = document.createElement("button");
        tempButton.id = "craftGear" + (i+1);
        tempButton.setAttribute("onclick", "craftGear(" + (i+1) + ")");
        if (gears[gearNames[i]])
            tempButton.innerHTML = "Owned!";
        else
            tempButton.innerHTML = "Craft!";
        tempElement.appendChild(tempButton);
        recipeElements[1].push(tempElement);
    }
}

function updateActiveRecipe() {
    if (isVisible(document.getElementById("pickaxeCrafts"))) {
        for (let i = 0; i < recipeElements[0].length; i++) {
            if (isVisible(recipeElements[0][i])) {
                let parent = recipeElements[0][i];
                let elements = parent.children;
                for (let j = 0; j < elements.length - 1; j++) {
                    elements[j].innerHTML = pickaxeRecipes[i][j][0] + " " + oreList[pickaxeRecipes[i][j][0]][1][0] + "/" + pickaxeRecipes[i][j][1];
                    if (oreList[pickaxeRecipes[i][j][0]][1][0] >= pickaxeRecipes[i][j][1])
                        elements[j].style.color = "green";
                    else
                        elements[j].style.color = "red";
                }
            }
        }
    } else {
        for (let i = 0; i < recipeElements[1].length; i++) {
            if (isVisible(recipeElements[1][i])) {
                let parent = recipeElements[1][i];
                let elements = parent.children;
                for (let j = 0; j < elements.length - 1; j++) {
                    elements[j].innerHTML = gearRecipes[i][j][0] + " " + oreList[gearRecipes[i][j][0]][1][0] + "/" + gearRecipes[i][j][1];
                    if (oreList[gearRecipes[i][j][0]][1][0] >= gearRecipes[i][j][1])
                        elements[j].style.color = "green";
                    else
                        elements[j].style.color = "red";
                }
            }
        }
    }
}

function craftPickaxe(num) {
    canCraft = true;
    if (!(pickaxes[num])) {
        for (let i = 0; i < pickaxeRecipes[num - 1].length; i++) {
            if (!(oreList[pickaxeRecipes[num-1][i][0]][1][0] >= pickaxeRecipes[num - 1][i][1])) {
                canCraft = false;
                break;
            }
        }
        if (canCraft) {
            for (let i = 0; i < pickaxeRecipes[num - 1].length; i++) {
                oreList[pickaxeRecipes[num-1][i][0]][1][0] -= pickaxeRecipes[num - 1][i][1];
                updateInventory(pickaxeRecipes[num - 1][i][0], 1);
            }
            let temp = document.getElementById("pickaxeRecipe" + num).children;
            temp[temp.length - 1].innerHTML = "Equipped!";
            updateActiveRecipe();
            pickaxes[num] = true;
            currentPickaxe = num;
        }
    } else {
        let temp = document.getElementById("pickaxeRecipe" + num).children;
        temp[temp.length - 1].innerHTML = "Equipped!";
        currentPickaxe = num;
    }
}
function craftGear(num) {
    canCraft = true;
    if (!(gears[num-1])) {
        for (let i = 0; i < gearRecipes[num - 1].length; i++) {
            if (!(oreList[gearRecipes[num-1][i][0]][1][0] >= gearRecipes[num - 1][i][1])) {
                canCraft = false;
                break;
            }
        }
        if (canCraft) {
            for (let i = 0; i < gearRecipes[num - 1].length; i++) {
                oreList[gearRecipes[num-1][i][0]][1][0] -= gearRecipes[num - 1][i][1];
                updateInventory(gearRecipes[num - 1][i][0], 1);
            }
            let temp = document.getElementById("gearRecipe" + snakeToCamel(gearNames[num], true)).children;
            temp[temp.length - 1].innerHTML = "Owned!";
            updateActiveRecipe();
            gears[gearNames[num-1]] = true;
        }
    }
    if (gearnames[num-1] === "silly-tp")
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
