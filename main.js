let mine = [];
let curX = 5;
let curY = 0;
let currentDisplay = ""
let facing = "down";
let totalMined = 0;
let blocksRevealed = 0;
/* MINE
       0 1 2 3 4
    0 [_ _ _ _ _]
    1 [|        ]
    2 [|        ]
    3 [|        ]
    4 [|        ]
*/
function init () {
    var playedBefore = JSON.parse(localStorage.getItem("playedBefore"));
    if (playedBefore) {
        loadData();
    } else {
        localStorage.setItem("inventory", JSON.stringify(inventory));
        localStorage.setItem("amountMined", JSON.stringify(totalMined));
        localStorage.setItem("playedBefore", true);
    }
    createMine();
}
function createMine() {
    for (let i = 0; i < 1000; i++) {
        mine.push([]);
        mine[0][i] = "🟩";
    }
    for (let i = 1; i < mine.length; i++) {
        mine[i][999] = "⬜";
        mine[i].fill("⬜");
    }
    mine[0][5] = "⬛";
    mine[1][5] = "🟫"
    displayArea();
    updateInventory();
}
document.addEventListener('keydown', (event) => {
    var name = event.key;
    switch (name) {
        case "s":
            if (curY < 999) {
                mine[curY][curX] = "⚪"
                curY ++;
                checkAllAround(); 
                if (mine[curY][curX] != "⚪") {
                    giveBlock(mine[curY][curX]);
                    totalMined++;
                }
                mine[curY][curX] = "⬛";
            }  
            break;
        case "w":
            if (curY > 0) {
                mine[curY][curX] = "⚪"
                curY --;
                checkAllAround(); 
                if (mine[curY][curX] != "⚪") {
                    giveBlock(mine[curY][curX]);
                    totalMined++;
                }
                mine[curY][curX] = "⬛";
            }  
            break;
        case "a":
            if (curX > 0) {
                mine[curY][curX] = "⚪"
                curX --;
                checkAllAround(); 
                if (mine[curY][curX] != "⚪") {
                    giveBlock(mine[curY][curX]);
                    totalMined++;
                }
                mine[curY][curX] = "⬛"; 
            }  
            break;
        case "d":
            if (curX < 999) {
                mine[curY][curX] = "⚪"
                curX++;
                checkAllAround(); 
                if (mine[curY][curX] != "⚪") {
                    giveBlock(mine[curY][curX]);
                    totalMined++;
                }
                mine[curY][curX] = "⬛";
            }  
            break;
        default:
            console.log("wrong key!!");
    }
    displayArea();
    saveData();
  }, false);


  function displayArea() {
    let output ="";
    let constraints = getDisplays();
    for (let r = curY - constraints[2]; r <= curY + constraints[3]; r++) {
        for (let c = curX - constraints[0]; c <= curX + constraints[1]; c++) {
            output += mine[r][c];
        }
        output += "<br>";
    }
    document.getElementById("blockDisplay").innerHTML = output;

    document.getElementById("mineResetProgress").innerHTML = blocksRevealed + "/1,000,000 Blocks Revealed";
    document.getElementById("blocksMined").innerHTML = totalMined + " Blocks Mined";
  }
  function getDisplays() {
    let displayLeft = 0;
    let displayRight = 0;
    let displayUp = 0;
    let displayDown = 0;
    if (curX > 5) {
        displayLeft = 5;
    } else {
        displayLeft = curX;
    }
    if (curX < 994) {
        displayRight = 5;
    } else {
        displayRight = 999 - curX;
    }
    if (curY > 5) {
        displayUp = 5;
    } else {
        displayUp = curY;
    }
    if (curY < 994) {
        displayDown = 5;
    } else {
        displayDown = 999 - curY;
    }
    return [displayLeft, displayRight, displayUp, displayDown];
  }


  function checkAllAround() {
    if (curX - 1 >= 0) {
        if (mine[curY][curX - 1] == "⬜") {
            mine[curY][curX - 1] = generateBlock();
            blocksRevealed++;
        }
    }
    if (curX + 1 < 999) {
        if (mine[curY][curX + 1] == "⬜") {
            mine[curY][curX + 1] = generateBlock();
            blocksRevealed++;
        }
    }
    if (curY + 1 < 999) {
        if (mine[curY + 1][curX] == "⬜") {
            mine[curY + 1][curX] = generateBlock();
            blocksRevealed++;
        }
    }
    if (curY - 1 >= 0) {
        if (mine[curY - 1][curX] == "⬜") {
            mine[curY - 1][curX] = generateBlock();
            blocksRevealed++;
        }
    }
  }

let inventory = [
    [
        ["🤍", 0],
        ["🖤", 0],
        ["🤎", 0],
        ["💜", 0],
        ["❤️", 0],
        ["🧡", 0],
        ["💛", 0],
        ["💙", 0],
        ["💚", 0],
        ["⚫", 0],
        ["🟤", 0],
        ["🟣", 0],
        ["🔴", 0],
        ["🟠", 0],
        ["🟡", 0],
        ["🔵", 0],
        ["🟢", 0],
        ["🟪", 0],
        ["🟥", 0],
        ["🟧", 0],
        ["🟨", 0],
        ["🟦", 0],
        ["🟫", 0]
    ],
    [
        ["🤍", 0],
        ["🖤", 0],
        ["🤎", 0],
        ["💜", 0],
        ["❤️", 0],
        ["🧡", 0],
        ["💛", 0],
        ["💙", 0],
        ["💚", 0],
        ["⚫", 0],
        ["🟤", 0],
        ["🟣", 0],
        ["🔴", 0],
        ["🟠", 0],
        ["🟡", 0],
        ["🔵", 0],
        ["🟢", 0],
        ["🟪", 0],
        ["🟥", 0],
        ["🟧", 0],
        ["🟨", 0],
        ["🟦", 0],
        ["🟫", 0]
    ],
    [
        ["🤍", 0],
        ["🖤", 0],
        ["🤎", 0],
        ["💜", 0],
        ["❤️", 0],
        ["🧡", 0],
        ["💛", 0],
        ["💙", 0],
        ["💚", 0],
        ["⚫", 0],
        ["🟤", 0],
        ["🟣", 0],
        ["🔴", 0],
        ["🟠", 0],
        ["🟡", 0],
        ["🔵", 0],
        ["🟢", 0],
        ["🟪", 0],
        ["🟥", 0],
        ["🟧", 0],
        ["🟨", 0],
        ["🟦", 0],
        ["🟫", 0]
    ],
    [
        ["🤍", 0],
        ["🖤", 0],
        ["🤎", 0],
        ["💜", 0],
        ["❤️", 0],
        ["🧡", 0],
        ["💛", 0],
        ["💙", 0],
        ["💚", 0],
        ["⚫", 0],
        ["🟤", 0],
        ["🟣", 0],
        ["🔴", 0],
        ["🟠", 0],
        ["🟡", 0],
        ["🔵", 0],
        ["🟢", 0],
        ["🟪", 0],
        ["🟥", 0],
        ["🟧", 0],
        ["🟨", 0],
        ["🟦", 0],
        ["🟫", 0]
    ]
];
let inv = 0;
function giveBlock(type) {
inv = 0;
if (Math.floor(Math.random() * 50) == 25) {
                inv = 1;
    } else if (Math.floor(Math.random() * 150) == 75) {
                inv = 2;
        }   else if (Math.floor(Math.random() * 500) == 250) {
                inv = 3;
                    }
    switch(type) {
        case "🟫" :
            inventory[inv][22][1]++;
            break;
        case "🟦":
            inventory[inv][21][1]++;
            break;
        case "🟨":
            inventory[inv][20][1]++;
            break;
        case "🟧":
            inventory[inv][19][1]++;
            break;
        case "🟥":
            inventory[inv][18][1]++;
            break;
        case "🟪":
            inventory[inv][17][1]++;
            break;
        case "🟢":
            inventory[inv][16][1]++;
            break;
        case "🔵":
            inventory[inv][15][1]++;
            break;
        case "🟡":
            inventory[inv][14][1]++;
            break;
        case "🟠":
            inventory[inv][13][1]++;
            break;
        case "🔴":
            inventory[inv][12][1]++;
            break;
        case "🟣":
            inventory[inv][11][1]++;
            break;
        case "🟤":
            inventory[inv][10][1]++;
            break;
        case "⚫":
            inventory[inv][9][1]++;
            break;
        case "💚":
            inventory[inv][8][1]++;
            break;
        case "💙":
            inventory[inv][7][1]++;
            break;
        case "💛":
            inventory[inv][6][1]++;
            break;
        case "🧡":
            inventory[inv][5][1]++;
            break;
        case "❤️":
            inventory[inv][4][1]++;
            break;
        case "💜":
            inventory[inv][3][1]++;
            break;
        case "🤎":
            inventory[inv][2][1]++;
            break;
        case "🖤":
            inventory[inv][1][1]++;
            break;
        case "🤍":
            inventory[inv][0][1]++;
            break;
    }
    updateInventory();
  }
let probabilityTable = {
    "🤍": 1/50000000,
    "🖤": 1/10000000,
    "🤎": 1/5000000,
    "💜": 1/1000000,
    "❤️": 1/500000,
    "🧡": 1/100000,
    "💛": 1/50000,
    "💙": 1/10000,
    "💚": 1/2500,
    "⚫": 1/1000,
    "🟤": 1/750,
    "🟣": 1/400,
    "🔴": 1/250,
    "🟠": 1/200,
    "🟡": 1/125,
    "🔵": 1/100,
    "🟢": 1/90,
    "🟪": 1/80,
    "🟥": 1/70,
    "🟧": 1/60,
    "🟨": 1/50,
    "🟦": 1/40,
    "🟫": 1
  }
  function generateBlock() {
    /*probabilityTable = {
        "🤍": 1/50000000,
        "🖤": 1/10000000,
        "🤎": 1/5000000,
        "💜": 1/1000000,
        "❤️": 1/500000,
        "🧡": 1/100000,
        "💛": 1/50000,
        "💙": 1/10000,
        "💚": 1/2500,
        "⚫": 1/1000,
        "🟤": 1/750,
        "🟣": 1/400,
        "🔴": 1/250,
        "🟠": 1/200,
        "🟡": 1/125,
        "🔵": 1/100,
        "🟢": 1/90,
        "🟪": 1/80,
        "🟥": 1/70,
        "🟧": 1/60,
        "🟨": 1/50,
        "🟦": 1/40,
        "🟫": 1
      }*/
      let blockToGive = "";
      let summedProbability = 0;
      let chosenValue = Math.random();
      //chosenValue /= luckBoost;
      for (var propertyName in probabilityTable) {
        summedProbability += probabilityTable[propertyName];
        if (chosenValue < summedProbability) {
          blockToGive = propertyName;
          break;
        }
        }
        return blockToGive;
}
let variant = 0;
function updateInventory() {
    let output = "";
    let i = 0;
    if (variant == 0) {
        for (var propertyName in probabilityTable) {
            output += propertyName + "| x" + inventory[variant][i][1] + " | 1/" + Math.round(1 / (probabilityTable[propertyName])) + "<br>";
            i++;
        }
        document.getElementById("switchInventory").innerHTML = "Normal Inventory";
    } else if (variant == 1) {
        for (var propertyName in probabilityTable) {
            output += propertyName + "| x" + inventory[variant][i][1] + " | 1/" + Math.round(1 / (probabilityTable[propertyName]) * 50) + "<br>";
            i++;
        }
        document.getElementById("switchInventory").innerHTML = "Electrified Inventory";
    } else if (variant == 2) {
        for (var propertyName in probabilityTable) {
            output += propertyName + "| x" + inventory[variant][i][1] + " | 1/" + Math.round(1 / (probabilityTable[propertyName]) * 150) + "<br>";
            i++;
        }
        document.getElementById("switchInventory").innerHTML = "Radioactive Inventory";
    } else {
        for (var propertyName in probabilityTable) {
            output += propertyName + "| x" + inventory[variant][i][1] + " | 1/" + Math.round(1 / (probabilityTable[propertyName]) * 500) + "<br>";
            i++;
        }
        document.getElementById("switchInventory").innerHTML = "Explosive Inventory";
    }
    
    document.getElementById("inventory").innerHTML = output;
}


function switchInventory(){ 
    console.log("clicked");
  if (variant == 3) {
    variant = 0;
  } else {
    variant++;
  }
  updateInventory();
}

function resetMine() {
    mine = [];
    curX = 5;
    curY = 0;
    blocksRevealed = 0;
    createMine();
    document.getElementById("mineResetProgress").innerHTML = blocksRevealed + "/1,000,000 Blocks Revealed";
}

function saveData() {
    localStorage.setItem("inventory", JSON.stringify(inventory));
    localStorage.setItem("amountMined", JSON.stringify(totalMined));
}

function loadData() {
    inventory = JSON.parse(localStorage.getItem("inventory"));
    totalMined = JSON.parse(localStorage.getItem("amountMined"));
}



  