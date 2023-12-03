let pickaxeRecipes = [
    [
        //PICKAXE 1
        ["🟫", 7500],
        ["🟧", 500],
        ["🟥", 300],
        ["🟪", 200], 
        ["⚫", 50]
    ],
    [
        //PICKAXE 2
        ["🟫", 30000],
        ["🟢", 2000],
        ["🔵", 1750],
        ["🟡", 1500], 
        ["🟠", 1250],
        ["🔴", 1000],
        ["🟣", 750],
        ["🟤", 500]
    ], 
    [
        //PICKAXE 3
        ["🟫", 75000],
        ["🟢", 7500],
        ["🔵", 5000],
        ["🟡", 3000], 
        ["🟠", 2500],
        ["💚", 3],
        ["🤎", 2],
        ["🤍", 1]
    ],
    [   
        //PICKAXE 4
        [ "🟫", 150000],
        ["🟢", 12500],
        ["🔵", 9000],
        ["🟡", 6000], 
        ["🟠", 3500],
        ["❤️", 5],
        ["🤍", 3],
        ["⚙️", 1]
    ],
    [
        //PICKAXE 5
        ["🟫", 750000],
        ["🟢", 25000],
        ["🔵", 17500],
        ["🟡", 15000], 
        ["🟠", 10000],
        ["💜", 5],
        ["🤍", 5],
        ["✂️", 1],
        ["🎲", 1],
        ["🎄", 1],
        ["💍", 1],
        ["🔋", 1]
    ],
    [
        //PICKAXE 6
        ["🟫", 2500000],
        ["🟧", 100000],
        ["🟪", 90000],
        ["❤️", 15], 
        ["🤍", 10],
        ["💠", 3],
        ["⚜️", 3],
        ["🍁", 3],
        ["🐟", 1],
        ["🎀", 1],
        ["🏆", 1]
    ],
    [
        ["🟫", 3500000],
        ["🟢", 150000],
        ["⚫", 100000],
        ["💛", 15], 
        ["⚙️", 5],
        ["🥏", 5],
        ["🪵", 4],
        ["🌻", 2],
        ["🔗", 1],
        ["🎃", 1],
        ["🌲", 1],
        ["🔆", 1]
    ]
]
let gearRecipes = [
    //ORE TRACKER
    [
        ["🟫", 300000],
        ["🟧", 25000],
        ["🟥", 25000],
        ["🟪", 25000],
        ["🔋", 1] 
    ],
]


let recipeElements = [[], []];
function displayRecipe(num) {
    if (document.getElementById("pickaxeCrafts").style.display == "block") {
        let parent = document.getElementById("displayRecipe")
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
        for (let i = 0; i < recipeElements[0].length; i++) {
            recipeElements[0][i].style.display = "none";
        }
        parent.appendChild(recipeElements[0][num]);
        recipeElements[0][num].style.display = "block";
        updateActiveRecipe();
    } else {
        let parent = document.getElementById("displayRecipe")
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
        for (let i = 0; i < recipeElements[1].length; i++) {
            recipeElements[1][i].style.display = "none";
        }
        parent.appendChild(recipeElements[1][num]);
        recipeElements[1][num].style.display = "block";
        updateActiveRecipe();
    }

    
}

function createPickaxeRecipes() {
    for (let i = 0; i < pickaxeRecipes.length; i++) {
        let tempElement = document.createElement('div');
        tempElement.id = "pickaxeRecipe" + (i+1);
        tempElement.style.display = "none";
        tempElement.classList = "craftingAmountsDisplay";
        for (let j = 0; j < pickaxeRecipes[i].length; j++) {
            let element = document.createElement('p');
            element.id = (pickaxeRecipes[i][j][0] + ("pickaxeRecipe" + (i+1) + "Display"));
            element.innerHTML = pickaxeRecipes[i][j][0] + " " + oreList[pickaxeRecipes[i][j][0]][1][0] + "/" + pickaxeRecipes[i][j][1];
            if (oreList[pickaxeRecipes[i][i][0]][1][0] >= pickaxeRecipes[i][j][1]) {
                element.style.color = "green";
            } else {
                element.style.color = "red";
            }
        tempElement.appendChild(element);
        }
        let tempButton = document.createElement('button');
        tempButton.id="craftPickaxe" + (i+1);
        tempButton.setAttribute("onclick", "craftPickaxe(" + (i+1) + ")");
        if (pickaxes[i + 1][1]) {
            tempButton.innerHTML = "Equip!";
        } else {
            tempButton.innerHTML = "Craft!";
        }
        tempElement.appendChild(tempButton);
        recipeElements[0].push(tempElement);
    }
    
}
function createGearRecipes() {
    for (let i = 0; i < gearRecipes.length; i++) {
        let tempElement = document.createElement('div');
        tempElement.id = "gearRecipe" + (i+1);
        tempElement.style.display = "none";
        tempElement.classList = "craftingAmountsDisplay";
        for (let j = 0; j < gearRecipes[i].length; j++) {
            let element = document.createElement('p');
            element.id = (gearRecipes[i][j][0] + ("gearRecipe" + (i+1) + "Display"));
            element.innerHTML = gearRecipes[i][j][0] + " " + oreList[gearRecipes[i][j][0]][1][0] + "/" + gearRecipes[i][j][1];
            if (oreList[gearRecipes[i][i][0]][1][0] >= gearRecipes[i][j][1]) {
                element.style.color = "green";
            } else {
                element.style.color = "red";
            }
        tempElement.appendChild(element);
        }
        let tempButton = document.createElement('button');
        tempButton.id="craftGear" + (i+1);
        tempButton.setAttribute("onclick", "craftGear(" + (i+1) + ")");
        if (gears[i]) {
            tempButton.innerHTML = "Owned!";
        } else {
            tempButton.innerHTML = "Craft!";
        }
        tempElement.appendChild(tempButton);
        recipeElements[1].push(tempElement);
    }
    
}


function updateActiveRecipe() {
    if (document.getElementById("pickaxeCrafts").style.display == "block") {
        for (let i = 0; i < recipeElements[0].length; i++) {
            if (recipeElements[0][i].style.display == "block") {
                let parent = recipeElements[0][i];
                let elements = parent.children;
                for (let j = 0; j < elements.length - 1; j++) {
                    elements[j].innerHTML = pickaxeRecipes[i][j][0] + " " + oreList[pickaxeRecipes[i][j][0]][1][0] + "/" + pickaxeRecipes[i][j][1];
                    if (oreList[pickaxeRecipes[i][j][0]][1][0] >= pickaxeRecipes[i][j][1]) {
                        elements[j].style.color = "green";
                    } else {
                        elements[j].style.color = "red";
                    }
                }
            }
            
        }
    } else {
        for (let i = 0; i < recipeElements[1].length; i++) {
            if (recipeElements[1][i].style.display == "block") {
                let parent = recipeElements[1][i];
                let elements = parent.children;
                for (let j = 0; j < elements.length - 1; j++) {
                    elements[j].innerHTML = gearRecipes[i][j][0] + " " + oreList[gearRecipes[i][j][0]][1][0] + "/" + gearRecipes[i][j][1];
                    if (oreList[gearRecipes[i][j][0]][1][0] >= gearRecipes[i][j][1]) {
                        elements[j].style.color = "green";
                    } else {
                        elements[j].style.color = "red";
                    }
                }
            }
            
        }
    }
    
}

function craftPickaxe(num) {
    canCraft = true;
    if (!(pickaxes[num][1])) {
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
        temp[temp.length - 1].innerHTML = "Equip!";
        updateActiveRecipe();
        pickaxes[num][1] = true;
        currentPickaxe = num;
        }
    } else {
        currentPickaxe = num;
    }
    
}
function craftGear(num) {
    canCraft = true;
    if (!(gears[num - 1])) {
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
        let temp = document.getElementById("gearRecipe" + num).children;
        temp[temp.length - 1].innerHTML = "Owned!";
        console.log(temp);
        updateActiveRecipe();
        gears[num - 1] = true; 
        }
    }
}

function showPickaxes() {
    document.getElementById("pickaxeCrafts").style.display = "block";
    document.getElementById("gearCrafts").style.display = "none";
}
function showGears() {
    document.getElementById("pickaxeCrafts").style.display = "none";
    document.getElementById("gearCrafts").style.display = "block";
}