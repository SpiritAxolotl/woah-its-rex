let mine = [];
let curX = 1000000000;
let curY = 0;
let furthestLeft = 1000000000
let furthestRight = 1000000000;
let currentDisplay = ""
let facing = "down";
let totalMined = 0;
let blocksRevealedThisReset = 0;
let canMine = true;

function init () {
    createInventory();
    createMine();
    let playedBefore3 = localStorage.getItem("playedBefore3");
    if (!playedBefore3) {
        localStorage.clear();
        localStorage.setItem("playedBefore3", true);
    }
    let playedBefore = localStorage.getItem("playedBefore");
    if (playedBefore) {
        loadData();
    }
    localStorage.setItem("playedBefore", true);
}
function createMine() {
    mine.push([]);
    mine[0][1000000000] = "⛏️";
    displayArea();
    checkAllAround();
    displayArea();
}

function movePlayer(dir) {
    if (canMine) {
        switch (dir) {
            case "s":
                    mine[curY][curX] = "⚪"
                    curY ++;
                    checkAllAround(); 
                    if (mine[curY][curX] != "⚪") {
                        totalMined++;
                        giveBlock(mine[curY][curX]);
                    }
                    mine[curY][curX] = "⛏️";
                break;
            case "w":
                if (curY > 0) {
                    mine[curY][curX] = "⚪"
                    curY --;
                    checkAllAround(); 
                    if (mine[curY][curX] != "⚪") {
                        totalMined++;
                        giveBlock(mine[curY][curX]);
                    }
                    mine[curY][curX] = "⛏️";
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
                    mine[curY][curX] = "⛏️"; 
                    if (curX < furthestLeft) {
                        furthestLeft = curX;
                    }
                }  
                break;
            case "d":
                    mine[curY][curX] = "⚪"
                    curX++;
                    checkAllAround(); 
                    if (mine[curY][curX] != "⚪") {
                        totalMined++;
                        giveBlock(mine[curY][curX]);
                    }
                    mine[curY][curX] = "⛏️";
                    if (curX > furthestRight) {
                        furthestRight = curX;
                    }
                break;
            default:
                console.log("wrong key!!");
        }
        document.getElementById("location").innerHTML = "X: " + (curX - 1000000000) + " | Y: -" + curY;
        displayArea();
    }
    
}
document.addEventListener('keydown', (event) => {
    var name = event.key;
    movePlayer(name);
  }, false);


  function displayArea() {
    let output ="";
    let constraints = getParams(5, 5);
    for (let r = curY - constraints[1]; r <= curY + 5 + (5-constraints[1]); r++) {
        if (mine[r] == undefined) {
            mine.push([]);
        }
        for (let c = curX - constraints[0]; c <= curX + 5 + (5-constraints[0]); c++) {
            if (mine[r][c] == undefined) {
                if (r == 0) {
                    mine[r][c] = "🟩";
                } else {
                    mine[r][c] = "⬜";
                }
                
            }
      }
    }
    
    for (let r = curY - constraints[1]; r <= curY + 5 + (5-constraints[1]); r++) {
        for (let c = curX - constraints[0]; c <= curX + 5 + (5-constraints[0]); c++) {
            output += mine[r][c];
        }
        output += "<br>";
    }
    document.getElementById("blockDisplay").innerHTML = output;
    document.getElementById("mineResetProgress").innerHTML = blocksRevealedThisReset + "/100,000 Blocks Revealed This Reset";
    document.getElementById("blocksMined").innerHTML = totalMined + " Blocks Mined";
  }
  function getParams(distanceX, distanceY) {
    let displayLeft = 0;
    let displayUp = 0;
    if (curX > distanceX) {
        displayLeft = distanceX;
    } else {
        displayLeft = curX;
    }
    if (curY > distanceY) {
        displayUp = distanceY;
    } else {
        displayUp = curY;
    }
    return [displayLeft, displayUp];
  }


  function checkAllAround() {
    if (curX - 1 >= 0) {
        if (mine[curY][curX - 1] == "⬜") {
            mine[curY][curX - 1] = generateBlock();
            blocksRevealedThisReset++;
        }
    }
    if (mine[curY][curX + 1] == "⬜") {
            mine[curY][curX + 1] = generateBlock();
            blocksRevealedThisReset++;
        }
    if (mine[curY + 1][curX] == "⬜") {
            mine[curY + 1][curX] = generateBlock();
            blocksRevealedThisReset++;
        }
    
    if (curY - 1 >= 0) {
        if (mine[curY - 1][curX] == "⬜") {
            mine[curY - 1][curX] = generateBlock();
            blocksRevealedThisReset++;
        }
    }
    if (blocksRevealedThisReset > 100000) {
        canMine = false;
        mineReset();
    }
  }

let multis = [1, 50, 150, 500];
let inv = 0;
function giveBlock(type) {
inv = 1;
if (Math.floor(Math.random() * 50) == 25) {
        inv = 2;
    } else if (Math.floor(Math.random() * 150) == 75) {
        inv = 3;
    }   else if (Math.floor(Math.random() * 500) == 250) {
        inv = 4;
    }
    if (type == "🟩") {
        type = "🟫";
    }
    probabilityTable[type][1][inv - 1]++;
        updateInventory(type, inv);
        saveData(type);
}
let probabilityTable = {
"👁️" : [1/192000000, [0,0,0,0]],
"🪩" : [1/99999999, [0,0,0,0]], 
"👀" : [1/95520089, [0,0,0,0]],
"🥗" : [1/80000000, [0,0,0,0]],
"💸" : [1/75400000, [0,0,0,0]],
"⌛" : [1/75000000, [0,0,0,0]], 
"🪐" : [1/70900075, [0,0,0,0]], 
"🧀" : [1/61800001, [0,0,0,0]],
"🌀" : [1/61800000, [0,0,0,0]], 
"🧊" : [1/58300000, [0,0,0,0]],
"🌌" : [1/55000000, [0,0,0,0]],
"🥀" : [1/53800000, [0,0,0,0]], 
"🥉" : [1/44444444, [0,0,0,0]], 
"🪞" : [1/42680005, [0,0,0,0]],
"🔩" : [1/42083600, [0,0,0,0]],
"❄️" : [1/38650000, [0,0,0,0]],
"💥" : [1/37500000, [0,0,0,0]], 
"🌟" : [1/25728000, [0,0,0,0]],
"🌪️" : [1/24701000, [0,0,0,0]],
"🌏" : [1/21320000, [0,0,0,0]],
"📝" : [1/20000000, [0,0,0,0]], 
"💎" : [1/17000000, [0,0,0,0]], 
"🔥" : [1/16000000, [0,0,0,0]],
"🔆" : [1/9600000, [0,0,0,0]],
"☄️" : [1/9500000, [0,0,0,0]],
"🌲" : [1/9490000, [0,0,0,0]],
"⭐" : [1/9430000, [0,0,0,0]],
"🔱" : [1/9030000, [0,0,0,0]],
"🎃" : [1/8864200, [0,0,0,0]],
"🎇" : [1/8700000, [0,0,0,0]],
"👑" : [1/8520000, [0,0,0,0]],
"🕯️" : [1/8200000, [0,0,0,0]],
"🔮" : [1/8100000, [0,0,0,0]],
"🕋" : [1/7700000, [0,0,0,0]],
"⌚" : [1/7500000, [0,0,0,0]],
"🔳" : [1/7400000, [0,0,0,0]],
"🧲" : [1/7190007, [0,0,0,0]],
"🗜️" : [1/6660000, [0,0,0,0]],
"🏆" : [1/6500000, [0,0,0,0]],
"🔋" : [1/6480000, [0,0,0,0]],
"🎍" : [1/6300000, [0,0,0,0]],
"🎀" : [1/5900000, [0,0,0,0]],
"⏹️" : [1/5730000, [0,0,0,0]],
"🐟" : [1/5555555, [0,0,0,0]],
"🔗" : [1/5300000, [0,0,0,0]],
"💍" : [1/3999999,[0,0,0,0]],
"🎄" : [1/3500000,[0,0,0,0]],
"🪵" : [1/3333333,[0,0,0,0]],
"🌻" : [1/3250000,[0,0,0,0]],
"🍁" : [1/3100000,[0,0,0,0]],
"🫧" : [1/3003000,[0,0,0,0]],
"🥏" : [1/3000000,[0,0,0,0]],
"🎲" : [1/2910000,[0,0,0,0]],
"✂️" : [1/2800000,[0,0,0,0]],
"🔱" : [1/2750000,[0,0,0,0]],
"⚜️" : [1/2500000,[0,0,0,0]],
"💠" : [1/2475000,[0,0,0,0]],
"🃏" : [1/2222222,[0,0,0,0]],
"⚙️" : [1/2050000,[0,0,0,0]],
"🤍": [1/499999, [0,0,0,0]],
"🖤": [1/400000, [0,0,0,0]],
"🤎": [1/350000, [0,0,0,0]],
"💜": [1/300000, [0,0,0,0]],
"❤️": [1/250000, [0,0,0,0]],
"🧡": [1/225000, [0,0,0,0]],
"💛": [1/200000, [0,0,0,0]],
"💙": [1/175000, [0,0,0,0]],
"💚": [1/100000, [0,0,0,0]],
"⚫": [1/100, [0,0,0,0]],
"🟤": [1/90, [0,0,0,0]],
"🟣": [1/80, [0,0,0,0]],
"🔴": [1/70, [0,0,0,0]],
"🟠": [1/60, [0,0,0,0]],
"🟡": [1/55, [0,0,0,0]],
"🔵": [1/50, [0,0,0,0]],
"🟢": [1/45, [0,0,0,0]],
"🟪": [1/40, [0,0,0,0]],
"🟥": [1/35, [0,0,0,0]],
"🟧": [1/30, [0,0,0,0]],
"🟫" : [1/1, [0,0,0,0]]
  }
  function generateBlock() {
      let blockToGive = "";
      let summedProbability = 0;
      let chosenValue = Math.random();
      chosenValue /= 1;
      for (var propertyName in probabilityTable) {
        summedProbability += probabilityTable[propertyName][0];
        if (chosenValue < summedProbability) {
          blockToGive = propertyName;
          break;
        }
        }
        if (Math.round(1 / (probabilityTable[blockToGive][0])) > 75000000) {
            spawnMessage(blockToGive);
            playSound("otherworldly");
        } else if (Math.round(1 / (probabilityTable[blockToGive][0])) >= 16000000){
            spawnMessage(blockToGive);
            playSound("unfathomable");
        } else if (Math.round(1 / (probabilityTable[blockToGive][0])) >= 5000000) {
            spawnMessage(blockToGive);
            playSound("enigmatic");
        } else if (Math.round(1 / (probabilityTable[blockToGive][0])) >= 2000000) {
            spawnMessage(blockToGive);
            playSound("transcendent");
        } else if (Math.round(1 / (probabilityTable[blockToGive][0])) >= 100000) {
            spawnMessage(blockToGive);
            playSound("exotic");
        }
        return blockToGive;
}
let variant = 1;
function updateInventory(type, inv) {
    document.getElementById(type + inv).innerHTML = type + " | 1/" + (Math.round( 1 / probabilityTable[type][0])) * multis[inv - 1] + " | x" + probabilityTable[type][1][inv - 1];
    if (probabilityTable[type][1][inv - 1] > 0) {
        document.getElementById(type + inv).style.display = "block";
    }
}

let names = ["Normal", "Electrified", "Radioactive", "Explosive"]
function switchInventory(){ 
    document.getElementById(("inventory") + variant).style.display = "none";
  if (variant == 4) {
    variant = 1;
  } else {
    variant++;
  }
  document.getElementById(("inventory") + variant).style.display = "block";
  document.getElementById("switchInventory").innerHTML = names[variant - 1] + " Inventory"
}

function resetMine() {
    clearInterval(loopTimer);
    curDirection = "";
    mine = [[]];
    curX = 1000000000;
    curY = 0;
    blocksRevealedThisReset = 0;
    createMine();
    document.getElementById("mineResetProgress").innerHTML = blocksRevealedThisReset + "/100,000 Blocks Revealed This Reset";
}

function saveData(block) {
    localStorage.setItem("" + block, JSON.stringify(probabilityTable[block][1]));
    localStorage.setItem("amountMined", JSON.stringify(totalMined));
}

function loadData() {
    for (var propertyName in probabilityTable) {
        if (localStorage.getItem(propertyName) != null) {
            if (document.getElementById(propertyName + 1) != null) {
                probabilityTable[propertyName][1] = JSON.parse(localStorage.getItem(propertyName));
                for (let i = 1; i < 5; i++) {
                    updateInventory(propertyName, i)
                    if (probabilityTable[propertyName][1][i - 1] > 0) {
                        document.getElementById(propertyName + i).style.display = "block";
                    }
                }
            } 
        }
    }
    totalMined = JSON.parse(localStorage.getItem("amountMined"));
    document.getElementById("blocksMined").innerHTML = totalMined + " Blocks Mined";
}

function playSound(type) {
    let audio;
    switch (type) {
        case "exotic":
            audio = new Audio("https://static.wikia.nocookie.net/rex-3/images/e/e0/Achillgoesdownyourspine.mp3");
            break;
        case "transcendent":
            audio = new Audio("https://static.wikia.nocookie.net/rex-3/images/8/89/Transcendent.mp3");
            break;
        case "enigmatic":
            audio = new Audio("https://static.wikia.nocookie.net/rex-3/images/a/a2/Yourvisionbeginstoblur.mp3");
            break;
        case "unfathomable":
            audio = new Audio("https://static.wikia.nocookie.net/rex-3/images/c/c7/Unfathsound.mp3");
            break;
        case "otherworldly":
            audio = new Audio("https://static.wikia.nocookie.net/rex-3/images/4/49/Otherworld.mp3");
            break;
        }
        audio.volume=0.2;
        audio.play();
  }


  let loopTimer = null;
  let curDirection = "";
  function goDirection(direction) {
    if (curDirection == direction) {
        clearInterval(loopTimer);
        curDirection = ""
    } else {
        clearInterval(loopTimer);
        loopTimer = setInterval(movePlayer, 5, direction);
        curDirection = direction;
    }
    
    
  }

function createInventory() {
    for (var propertyName in probabilityTable) {
        for (let i = 1; i < 5; i++) {
            let tempElement = document.createElement('p');
            tempElement.id = (propertyName + i);
            tempElement.classList = "oreDisplay";
            tempElement.style.display = "none";
            tempElement.innerHTML = propertyName + " | 1/" + (Math.round( 1 / probabilityTable[propertyName][0])) * multis[i - 1] + " | x" + probabilityTable[propertyName][1][i - 1];
            document.getElementById(("inventory") + i).appendChild(tempElement);
        }
    }
}
function spawnMessage(block) {
    document.getElementById("spawnMessage").innerHTML = block + " Has Spawned!<br>" + "1/" + Math.round(1 / (probabilityTable[block][0]));
    setTimeout(() => {
        document.getElementById("spawnMessage").innerHTML = "Spawn Messages Appear Here"
      }, 10000);
}
function moveOne(dir) {
    clearInterval(loopTimer);
    movePlayer(dir);
    curDirection = "";
}

function deleteExcessIndices() {
    if (curY > 1000) {
        mine[curY - 1000] = [];
    }
}

function mineReset() {
    let constraints = getParams(0, 1000);
    if (furthestLeft < curX - 1000) {
        for (let r = constraints[1]; r < curY + 1000; r++) {
            if (mine[r] != undefined) {
                mine[r].fill(undefined, furthestLeft, curX-1000);
            }
        }
    }
    furthestLeft = curX - 1;
    furthestRight = curX + 1;
    canMine = true;
    blocksRevealedThisReset = 0;
}



/*
"👁️" : [1/360000000, [0,0,0,0]],
"🪩" : [1/99999999, [0,0,0,0]], 
"👀" : [1/95520089, [0,0,0,0]],
"🥗" : [1/80000000, [0,0,0,0]],
"💸" : [1/75400000, [0,0,0,0]],
"⌛" : [1/75000000, [0,0,0,0]], 
"🪐" : [1/70900075, [0,0,0,0]], 
"🧀" : [1/61800001, [0,0,0,0]],
"🌀" : [1/61800000, [0,0,0,0]], 
"🧊" : [1/58300000, [0,0,0,0]],
"🌌" : [1/55000000, [0,0,0,0]],
"🥀" : [1/53800000, [0,0,0,0]], 
"🥉" : [1/44444444, [0,0,0,0]], 
"🪞" : [1/42680005, [0,0,0,0]],
"🔩" : [1/42083600, [0,0,0,0]],
"❄️" : [1/38650000, [0,0,0,0]],
"💥" : [1/37500000, [0,0,0,0]], 
"🌟" : [1/25728000, [0,0,0,0]],
"🌪️" : [1/24701000, [0,0,0,0]],
"🌏" : [1/21320000, [0,0,0,0]],
"📝" : [1/20000000, [0,0,0,0]], 
"💎" : [1/17000000, [0,0,0,0]], 
"🔥" : [1/16000000, [0,0,0,0]],
ENIAMS
"🔆" : [1/9600000, [0,0,0,0]],
"☄️" : [1/9500000, [0,0,0,0]],
"🌲" : [1/9490000, [0,0,0,0]],
"⭐" : [1/9430000, [0,0,0,0]],
"🔱" : [1/9030000, [0,0,0,0]],
"🎃" : [1/8864200, [0,0,0,0]],
"🎇" : [1/8700000, [0,0,0,0]],
"👑" : [1/8520000, [0,0,0,0]],
"🕯️" : [1/8200000, [0,0,0,0]],
"🔮" : [1/8100000, [0,0,0,0]],
"🕋" : [1/7700000, [0,0,0,0]],
"🖤" : [1/7610010, [0,0,0,0]],
"⌚" : [1/7500000, [0,0,0,0]],
"🔳" : [1/7400000, [0,0,0,0]],
"🧲" : [1/7190007, [0,0,0,0]],
"🗜️" : [1/6660000, [0,0,0,0]],
"🏆" : [1/6500000, [0,0,0,0]],
"🔋" : [1/6480000, [0,0,0,0]],
"🎍" : [1/6300000, [0,0,0,0]],
"🎀" : [1/5900000, [0,0,0,0]],
"⏹️" : [1/5730000, [0,0,0,0]],
"🐟" : [1/5555555, [0,0,0,0]],
"🔗" : [1/5300000, [0,0,0,0]],
TRANSCENDENTS
"💍" : [1/3999999,[0,0,0,0]],
"🎄" : [1/3500000,[0,0,0,0]],
"🪵" : [1/3333333,[0,0,0,0]],
"🌻" : [1/3250000,[0,0,0,0]],
"🍁" : [1/3100000,[0,0,0,0]],
"🫧" : [1/3003000,[0,0,0,0]],
"🥏" : [1/3000000,[0,0,0,0]],
"🎲" : [1/2910000,[0,0,0,0]],
"✂️" : [1/2800000,[0,0,0,0]],
"🔱" : [1/2750000,[0,0,0,0]],
"⚜️" : [1/2500000,[0,0,0,0]],
"💠" : [1/2475000,[0,0,0,0]],
"🃏" : [1/2222222,[0,0,0,0]],
"⚙️" : [1/2050000,[0,0,0,0]],
---------------------
    EXOTICS 
    "🤍": [1/499999, [0,0,0,0]],
    "🖤": [1/400000, [0,0,0,0]],
    "🤎": [1/350000, [0,0,0,0]],
    "💜": [1/300000, [0,0,0,0]],
    "❤️": [1/250000, [0,0,0,0]],
    "🧡": [1/225000, [0,0,0,0]],
    "💛": [1/200000, [0,0,0,0]],
    "💙": [1/175000, [0,0,0,0]],
    "💚": [1/100000, [0,0,0,0]],
    COMMONS
    "⚫": [1/100, [0,0,0,0]],
    "🟤": [1/90, [0,0,0,0]],
    "🟣": [1/80, [0,0,0,0]],
    "🔴": [1/70, [0,0,0,0]],
    "🟠": [1/60, [0,0,0,0]],
    "🟡": [1/55, [0,0,0,0]],
    "🔵": [1/50, [0,0,0,0]],
    "🟢": [1/45, [0,0,0,0]],
    "🟪": [1/40, [0,0,0,0]],
    "🟥": [1/35, [0,0,0,0]],
    "🟧": [1/30, [0,0,0,0]],
*/