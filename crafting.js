let allRecipes = [
    [
        ["🟫", 7500],
        ["🟧", 500],
        ["🟥", 300],
        ["🟪", 200], 
        ["⚫", 50]
    ],
    [
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
        [ "🟫", 150000],
        ["🟢", 12500],
        ["🔵", 9000],
        ["🟡", 6000], 
        ["🟠", 3500],
        ["❤️", 5],
        ["🤍", 3],
        ["⚙️", 1]
    ]
]


let recipeElements = [];
function displayRecipe1() {
    let parent = document.getElementById("displayRecipe")
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    for (let i = 0; i < recipeElements.length; i++) {
        recipeElements[i].style.display = "none";
    }
    parent.appendChild(recipeElements[0]);
    recipeElements[0].style.display = "block";
    updateActiveRecipe();
}


function displayRecipe2() {
    let parent = document.getElementById("displayRecipe")
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    for (let i = 0; i < recipeElements.length; i++) {
        recipeElements[i].style.display = "none";
    }
    parent.appendChild(recipeElements[1]);
    recipeElements[1].style.display = "block";
    updateActiveRecipe();
}

function displayRecipe3() {
    let parent = document.getElementById("displayRecipe")
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    for (let i = 0; i < recipeElements.length; i++) {
        recipeElements[i].style.display = "none";
    }
    parent.appendChild(recipeElements[2]);
    recipeElements[2].style.display = "block";
    updateActiveRecipe();
}

function displayRecipe4() {
    let parent = document.getElementById("displayRecipe")
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    for (let i = 0; i < recipeElements.length; i++) {
        recipeElements[i].style.display = "none";
    }
    parent.appendChild(recipeElements[3]);
    recipeElements[3].style.display = "block";
    updateActiveRecipe();
}


function createRecipes() {
    //RECIPE 1
    let tempElement = document.createElement('div');
    tempElement.id = "recipe1";
    tempElement.style.display = "none";
    tempElement.classList = "craftingAmountsDisplay";
    for (let i = 0; i < allRecipes[0].length; i++) {
        let element = document.createElement('p');
        element.id = (allRecipes[0][i][0] + ("recipe1display"));
        element.innerHTML = allRecipes[0][i][0] + " " + probabilityTable[allRecipes[0][i][0]][1][0] + "/" + allRecipes[0][i][1];
        if (probabilityTable[allRecipes[0][i][0]][1][0] >= allRecipes[0][i][1]) {
            element.style.color = "green";
        } else {
            element.style.color = "red";
        }
    tempElement.appendChild(element);
    }
    let tempButton = document.createElement('button');
    tempButton.id="craftPickaxe1";
    tempButton.setAttribute("onclick", "craftPickaxe(1)");
    if (pickaxes[1][1]) {
        tempButton.innerHTML = "Equip!";
    } else {
        tempButton.innerHTML = "Craft!";
    }
    tempElement.appendChild(tempButton);
    recipeElements.push(tempElement);


    //RECIPE 2
    tempElement = document.createElement('div');
    tempElement.id = "recipe2";
    tempElement.style.display = "none";
    tempElement.classList = "craftingAmountsDisplay";
    for (let i = 0; i < allRecipes[1].length; i++) {
        let element = document.createElement('p');
        element.id = (allRecipes[1][i][0] + ("recipe2display"));
        element.innerHTML = allRecipes[1][i][0] + " " + probabilityTable[allRecipes[1][i][0]][1][0] + "/" + allRecipes[1][i][1];
        if (probabilityTable[allRecipes[1][i][0]][1][0] >= allRecipes[1][i][1]) {
            element.style.color = "green";
        } else {
            element.style.color = "red";
        }
    tempElement.appendChild(element);
    }
    tempButton = document.createElement('button');
    tempButton.id="craftPickaxe2";
    tempButton.setAttribute("onclick", "craftPickaxe(2)");
    if (pickaxes[2][1]) {
        tempButton.innerHTML = "Equip!";
    } else {
        tempButton.innerHTML = "Craft!";
    }
    tempElement.appendChild(tempButton);
    recipeElements.push(tempElement);


    //RECIPE 3
    tempElement = document.createElement('div');
    tempElement.id = "recipe3";
    tempElement.style.display = "none";
    tempElement.classList = "craftingAmountsDisplay";
    for (let i = 0; i < allRecipes[2].length; i++) {
        let element = document.createElement('p');
        element.id = (allRecipes[2][i][0] + ("recipe3display"));
        element.innerHTML = allRecipes[2][i][0] + " " + probabilityTable[allRecipes[2][i][0]][1][0] + "/" + allRecipes[2][i][1];
        if (probabilityTable[allRecipes[2][i][0]][1][0] >= allRecipes[2][i][1]) {
            element.style.color = "green";
        } else {
            element.style.color = "red";
        }
    tempElement.appendChild(element);
    }
    tempButton = document.createElement('button');
    tempButton.id="craftPickaxe3";
    tempButton.setAttribute("onclick", "craftPickaxe(3)");
    if (pickaxes[3][1]) {
        tempButton.innerHTML = "Equip!";
    } else {
        tempButton.innerHTML = "Craft!";
    }
    tempElement.appendChild(tempButton);
    recipeElements.push(tempElement);


    //RECIPE 4
    tempElement = document.createElement('div');
    tempElement.id = "recipe4";
    tempElement.style.display = "none";
    tempElement.classList = "craftingAmountsDisplay";
    for (let i = 0; i < allRecipes[3].length; i++) {
        let element = document.createElement('p');
        element.id = (allRecipes[3][i][0] + ("recipe3display"));
        element.innerHTML = allRecipes[2][i][0] + " " + probabilityTable[allRecipes[3][i][0]][1][0] + "/" + allRecipes[3][i][1];
        if (probabilityTable[allRecipes[3][i][0]][1][0] >= allRecipes[3][i][1]) {
            element.style.color = "green";
        } else {
            element.style.color = "red";
        }
    tempElement.appendChild(element);
    }
    tempButton = document.createElement('button');
    tempButton.id="craftPickaxe4";
    tempButton.setAttribute("onclick", "craftPickaxe(4)");
    if (pickaxes[3][1]) {
        tempButton.innerHTML = "Equip!";
    } else {
        tempButton.innerHTML = "Craft!";
    }
    tempElement.appendChild(tempButton);
    recipeElements.push(tempElement);
}


function updateActiveRecipe() {
    for (let i = 0; i < recipeElements.length; i++) {
        if (recipeElements[i].style.display == "block") {
            let parent = recipeElements[i];
            let elements = parent.children;
            for (let j = 0; j < elements.length - 1; j++) {
                elements[j].innerHTML = allRecipes[i][j][0] + " " + probabilityTable[allRecipes[i][j][0]][1][0] + "/" + allRecipes[i][j][1];
                if (probabilityTable[allRecipes[i][j][0]][1][0] >= allRecipes[i][j][1]) {
                    elements[j].style.color = "green";
                } else {
                    elements[j].style.color = "red";
                }
            }
        }
        
    }
}

function craftPickaxe(num) {
    canCraft = true;
    if (!(pickaxes[num][1])) {
        for (let i = 0; i < allRecipes[num - 1][0].length; i++) {
            if (!(probabilityTable[allRecipes[num-1][i][0]][1][0] >= allRecipes[num - 1][i][1])) {
                canCraft = false;
                break;
            } 
        }
        if (canCraft) {
            for (let i = 0; i < allRecipes[num - 1][0].length; i++) {
                probabilityTable[allRecipes[num-1][i][0]][1][0] -= allRecipes[num - 1][i][1];
                saveData(allRecipes[num - 1][i][0]);
                updateInventory(allRecipes[num - 1][i][0], 1);
            }
        let temp = document.getElementById("recipe" + num).children;
        temp[temp.length - 1].innerHTML = "Equip!";
        updateActiveRecipe();
        pickaxes[num][1] = true;
        currentPickaxe = pickaxes[num][0];
        saveData("🟫", 1);
        }
    } else {
        currentPickaxe = pickaxes[num][0];
        saveData("🟫", 1);
    }
    
}