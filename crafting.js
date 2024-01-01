let pickaxeRecipes = [
    [
        //PICKAXE 1
        ["🟫", 10000],
        ["🟧", 333],
        ["🟥", 290],
        ["🟪", 250], 
        ["⚫", 100]
    ],
    [
        //PICKAXE 2
        ["🟫", 50000],
        ["🟢", 1111],
        ["🔵", 1000],
        ["🟡", 900], 
        ["🟠", 830],
        ["🔴", 700],
        ["🟣", 625],
        ["🟤", 555]
    ], 
    [
        //PICKAXE 3
        ["🟫", 100000],
        ["🟢", 2222],
        ["🔵", 2000],
        ["🟡", 1820], 
        ["🟠", 1670],
        ["💚", 1],
        ["💙", 1]
    ],
    [   
        //PICKAXE 4
        [ "📰", 250000],
        ["🟢", 5555],
        ["🔵", 5000],
        ["🟡", 4550], 
        ["🟠", 4170],
        ["❤️", 2],
        ["🤍", 1],
        ["⚙️", 1]
    ],
    [
        //PICKAXE 5
        ["🪨", 500000],
        ["🟢", 11000],
        ["🔵", 10000],
        ["🟡", 9000], 
        ["🟠", 8500],
        ["❤️", 5],
        ["🤍", 3],
        ["💠", 1],
        ["🥏", 1]
    ],
    [
        //PICKAXE 6  
        ["🟫", 650000],
        ["🟧", 75000],
        ["🟪", 60000],
        ["❤️", 5], 
        ["🤍", 3],
        ["🍁", 1],
        ["🎄", 1],
        ["🎍", 1]
        
    ],
    [
        //PICKAXE 7
        ["🌵", 500000],
        ["🌊", 300000],
        ["🟢", 150000],
        ["⚫", 75000],
        ["💛", 7], 
        ["🖍️", 3],
        ["⚱️", 3],
        ["🤿", 2],
        ["🫧", 2],
        ["🐟", 2],
        ["🎀", 2]
    ],
    [
        //PICKAXE 8
        ["🧱", 5000000],
        ["🌊", 5000000],
        ["☢️", 5000000],
        ["🟢", 500000],
        ["🔱", 2],
        ["🧲", 3],
        ["🪬", 3],
        ["👑", 3],
        ["🎇", 2],
        ["🎣", 10],
        ["⛵", 10],
        ["🧩", 7],
        ["🔔", 7],
        ["🪙", 5],
        ["🗿", 5]
    ],
    [
        //PICKAXE 9
        ["📰", 15000000],
        ["🧱", 15000000],
        ["📝", 1],
        ["🌟", 1],
        ["🔗", 15],
        ["🧨", 15],
        ["🏆", 10],
        ["🪚", 50],
        ["🪜", 50],
        ["🎲", 50],
        ["✂️", 50]
    ],
    [
        //PICKAXE 10
        ["🟫", 125000000],
        ["🥗", 2],
        ["🌪️", 5],
        ["🌏", 10],
        ["🌲", 40],
        ["🎃", 45],
        ["🎍", 50],
        ["🎄", 100],
        ["🪵", 100],
        ["🌻", 100],
        ["🍁", 100]
    ]

]
let gearRecipes = [
    //ORE TRACKER
    [
        ["🪨", 300000],
        ["🟧", 25000],
        ["🟥", 25000],
        ["🟪", 25000],
        ["🔋", 1] 
    ],
    //THE REAL CANDILLIUM CANDLE
    [
        ["🌫️", 1000000],
        ["🧡", 10],
        ["💜", 5],
        ["🎭", 1],
        ["🪄", 2],
        ["🕯️", 1]
    ],
    //THE REAL VITRIOL VIGOR
    [
        ["🌵", 1750000],
        ["🖤", 1],
        ["🤍", 7],
        ["🖍️", 2],
        ["⚱️", 2],
        ["🎀", 1],
        ["⭐", 1]
    ],
    //INFINITE ORE COLLECTOR
    [
        ["🪨", 15000000],
        ["💠", 25],
        ["⚜️", 25],
        ["🔋", 10],
        ["🔮", 7],
        ["☄️", 5],
        ["💎", 1]
    ],
    //LAYER MATERIALIZER
    [
        ["🟫", 2500000],
        ["🧱", 2500000],
        ["🌫️", 2500000],
        ["🌊", 2500000],
        ["🪨", 2500000],
        ["☢️", 2500000],
        ["🌵", 2500000],
        ["📰", 2500000],
        ["📟", 15],
        ["⌚", 2],
        ["🔥", 1]
    ],
    //CANDILIUM V2 IDK WHAT TO NAME IT
    [
        ["🌫️", 50000000],
        ["🌊", 50000000],
        ["🪄", 50],
        ["🎨", 25],
        ["🕋", 20],
        ["🕯️", 15],
        ["🌀", 1],
        ["⌛", 1],
    ],
    //VITRIOL V2 IDK WHAT TO NAME IT
    [
        ["🌵", 75000000],
        ["⚱️", 75],
        ["🗡️", 50],
        ["🎀", 20],
        ["🔆", 10],
        ["⭐", 15],
        ["💥", 2],
        ["🪐", 1]
    ]
    
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
        let temp = parent.children;
        temp = temp[0].children;
        temp = temp[temp.length - 1];
        if (currentPickaxe == num + 1) {
            temp.innerHTML = "Equipped!";
        } else if (pickaxes[num + 1][1]) {
            temp.innerHTML = "Equip!";
        }
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
        temp[temp.length - 1].innerHTML = "Equipped!";
        updateActiveRecipe();
        pickaxes[num][1] = true;
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