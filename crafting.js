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
    ],
    [
        ["🟫", 750000],
        ["🟢", 25000],
        ["🔵", 17500],
        ["🟡", 15000], 
        ["🟠", 10000],
        ["💜", 5],
        ["🤍", 5],
        ["🃏", 1],
        ["🎲", 1],
        ["🎄", 1],
        ["💍", 1],
        ["🔋", 1]
    ],
    [
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
    ]
]


let recipeElements = [];
function displayRecipe(num) {
    let parent = document.getElementById("displayRecipe")
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    for (let i = 0; i < recipeElements.length; i++) {
        recipeElements[i].style.display = "none";
    }
    parent.appendChild(recipeElements[num]);
    recipeElements[num].style.display = "block";
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
        element.id = (allRecipes[3][i][0] + ("recipe4display"));
        element.innerHTML = allRecipes[3][i][0] + " " + probabilityTable[allRecipes[3][i][0]][1][0] + "/" + allRecipes[3][i][1];
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
    if (pickaxes[4][1]) {
        tempButton.innerHTML = "Equip!";
    } else {
        tempButton.innerHTML = "Craft!";
    }
    tempElement.appendChild(tempButton);
    recipeElements.push(tempElement);


    //RECIPE 5
    tempElement = document.createElement('div');
    tempElement.id = "recipe5";
    tempElement.style.display = "none";
    tempElement.classList = "craftingAmountsDisplay";
    for (let i = 0; i < allRecipes[4].length; i++) {
        let element = document.createElement('p');
        element.id = (allRecipes[4][i][0] + ("recipe5display"));
        element.innerHTML = allRecipes[4][i][0] + " " + probabilityTable[allRecipes[4][i][0]][1][0] + "/" + allRecipes[4][i][1];
        if (probabilityTable[allRecipes[4][i][0]][1][0] >= allRecipes[4][i][1]) {
            element.style.color = "green";
        } else {
            element.style.color = "red";
        }
    tempElement.appendChild(element);
    }
    tempButton = document.createElement('button');
    tempButton.id="craftPickaxe5";
    tempButton.setAttribute("onclick", "craftPickaxe(5)");
    if (pickaxes[5][1]) {
        tempButton.innerHTML = "Equip!";
    } else {
        tempButton.innerHTML = "Craft!";
    }
    tempElement.appendChild(tempButton);
    recipeElements.push(tempElement);


    //RECIPE 6
    tempElement = document.createElement('div');
    tempElement.id = "recipe6";
    tempElement.style.display = "none";
    tempElement.classList = "craftingAmountsDisplay";
    for (let i = 0; i < allRecipes[5].length; i++) {
        let element = document.createElement('p');
        element.id = (allRecipes[5][i][0] + ("recipe5display"));
        element.innerHTML = allRecipes[5][i][0] + " " + probabilityTable[allRecipes[5][i][0]][1][0] + "/" + allRecipes[5][i][1];
        if (probabilityTable[allRecipes[5][i][0]][1][0] >= allRecipes[5][i][1]) {
            element.style.color = "green";
        } else {
            element.style.color = "red";
        }
    tempElement.appendChild(element);
    }
    tempButton = document.createElement('button');
    tempButton.id="craftPickaxe6";
    tempButton.setAttribute("onclick", "craftPickaxe(6)");
    if (pickaxes[6][1]) {
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
        for (let i = 0; i < allRecipes[num - 1].length; i++) {
            if (!(probabilityTable[allRecipes[num-1][i][0]][1][0] >= allRecipes[num - 1][i][1])) {
                canCraft = false;
                break;
            } 
        }
        if (canCraft) {
            for (let i = 0; i < allRecipes[num - 1].length; i++) {
                probabilityTable[allRecipes[num-1][i][0]][1][0] -= allRecipes[num - 1][i][1];
                updateInventory(allRecipes[num - 1][i][0], 1);
            }
        let temp = document.getElementById("recipe" + num).children;
        temp[temp.length - 1].innerHTML = "Equip!";
        updateActiveRecipe();
        pickaxes[num][1] = true;
        currentPickaxe = num;
        }
    } else {
        currentPickaxe = num;
    }
    
}