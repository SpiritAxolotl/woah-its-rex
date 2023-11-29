let mine = [];
let curX = 1000000000;
let curY = 0;
let furthestLeft = 1000000000
let furthestRight = 1000000000;
let currentDisplay = ""
let facing = "down";
let totalMined = 0;
let blocksRevealedThisReset = 0;
let canMine = false;
let pickaxes = [
    ["Basic", true],
    ["Name1", false],
    ["Name2", false],
    ["Name3", false]
]
let currentPickaxe = "Basic";

function init () {
    createInventory();
    createMine();
    let game2PlayedBefore1 = localStorage.getItem("game2PlayedBefore1");
    if (!game2PlayedBefore1) {
        localStorage.setItem("pickaxeData", JSON.stringify([currentPickaxe, pickaxes]));
        localStorage.setItem("game2PlayedBefore1", true);
    }
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
    createRecipes();
}
function createMine() {
    for (let r = curY; r < curY + 50; r++) {
        mine.push([]);
        for (let c = curX - 50; c < curX + 50; c++) {
            if (r == 0) {
                mine[r][c] = "🟩";
            } else {
                mine[r][c] = "⬜";
            }
            
        }
    }
    mine[0][1000000000] = "⛏️";
    displayArea();
    checkAllAround(curX, curY, 1);
    displayArea();
}

function movePlayer(dir) {
    if (canMine) {
        switch (dir) {
            case "s":
                    mineBlock(curX, curY + 1, "mining", 1);
                    mine[curY][curX] = "⚪"
                    prepareArea("s");
                    curY++; 
                    mine[curY][curX] = "⛏️";
                    break;
            case "w":
                if (curY > 0) {
                    mineBlock(curX, curY - 1, "mining", 1);
                    mine[curY][curX] = "⚪"
                    prepareArea("w");
                    curY--; 
                    mine[curY][curX] = "⛏️";
                }  
                break;
            case "a":
                if (curX > 0) {
                    mineBlock(curX - 1, curY, "mining", 1);
                    mine[curY][curX] = "⚪"
                    prepareArea("a");
                    curX--; 
                    mine[curY][curX] = "⛏️";
                    if (curX < furthestLeft) {
                        furthestLeft = curX;
                    }
                }  
                break;
            case "d":
                mineBlock(curX + 1, curY, "mining", 1);
                mine[curY][curX] = "⚪"
                prepareArea("d");
                curX++; 
                mine[curY][curX] = "⛏️";
                    if (curX > furthestRight) {
                        furthestRight = curX;
                    }
                break;
            default:
                console.log("wrong key!!");
        }
        document.getElementById("location").innerHTML = "X: " + (curX - 1000000000) + " | Y: -" + curY;
        prepareArea();
        displayArea();
    }
    
}

function mineBlock(x, y, cause, luck) {
    if (mine[y][x] != "⚪") {
        giveBlock(mine[y][x]);
        mine[y][x] = "⚪"
        checkAllAround(x, y, luck);
        totalMined++;
        if (cause != "ability") {
            rollAbilities();
        }
        updateActiveRecipe();
    }
    
}
document.addEventListener('keydown', (event) => {
    var name = event.key;
    clearInterval(loopTimer);
    curDirection = "";
    movePlayer(name);
  }, false);

function prepareArea(direction) {
    let constraints = getParams(50, 50)
    if (mine[curY + 50] == undefined) {
        mine.push([]);
    }
    if (mine[curY + 50][curX] == undefined) {
        for (let c = curX - constraints[0]; c < curX + 50; c++) {
            if (mine[curY][c] == undefined) {
                mine[curY][c] = "⬜"
            }
            
        }
    }
    for (let c = curX - constraints[0]; c < curX + 50; c++) {
        if (mine[curY - constraints[1]][c] == undefined) {
            if (curY - constraints[1] == 0) {
                mine[curY - constraints[1]][c] = "🟩"
            } else {
                mine[curY - constraints[1]][c] = "⬜"
            }
            
        }
        if (mine[curY + 50][c] == undefined) {
            mine[curY + 50][c] = "⬜";
        }
    }
    for (let r = curY - constraints[1]; r < curY + 50; r++) {
        if (mine[r][curX - constraints[0]] == undefined) {
            if (r == 0) {
                mine[r][curX - constraints[0]] = "🟩"
            } else {
                mine[r][curX - constraints[0]] = "⬜"
            }
            
        }
        if (mine[r][curX + 50] == undefined) {
            if (r == 0) {
                mine[r][curX + 50] = "🟩"
            } else {
                mine[r][curX + 50] = "⬜"
            }
            
        }
    
    }
        
}
function displayArea() {
    let output ="";
    let constraints = getParams(7, 7); 
    for (let r = curY - constraints[1]; r <= curY + 7 + (7-constraints[1]); r++) {
        for (let c = curX - constraints[0]; c <= curX + 7 + (7-constraints[0]); c++) {
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


  function checkAllAround(x, y, luck) {
        if (x - 1 >= 0) {
            if (mine[y][x - 1] == "⬜") {
                mine[y][x - 1] = generateBlock(luck);
                blocksRevealedThisReset++;
            }
        }
        if (mine[y][x + 1] == "⬜") {
                mine[y][x + 1] = generateBlock(luck);
                blocksRevealedThisReset++;
            }
        if (mine[y + 1][x] == "⬜") {
                mine[y + 1][x] = generateBlock(luck);
                blocksRevealedThisReset++;
            }
        
        if (y - 1 >= 0) {
            if (mine[y - 1][x] == "⬜") {
                mine[y - 1][x] = generateBlock(luck);
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
function giveBlock(type, inv) {
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
"👁️" : [1/1920000000, [0,0,0,0]],
"🪩" : [1/999999999, [0,0,0,0]], 
"👀" : [1/955200890, [0,0,0,0]],
"🥗" : [1/800000000, [0,0,0,0]],
"💸" : [1/754000000, [0,0,0,0]],
"⌛" : [1/750000000, [0,0,0,0]], 
"🪐" : [1/709000750, [0,0,0,0]], 
"🧀" : [1/618000001, [0,0,0,0]],
"🌀" : [1/618000000, [0,0,0,0]], 
"🧊" : [1/583000000, [0,0,0,0]],
"🌌" : [1/550000000, [0,0,0,0]],
"🥀" : [1/538000000, [0,0,0,0]], 
"🥉" : [1/444444444, [0,0,0,0]], 
"🪞" : [1/426800050, [0,0,0,0]],
"🔩" : [1/420836000, [0,0,0,0]],
"❄️" : [1/386500000, [0,0,0,0]],
"💥" : [1/375000000, [0,0,0,0]], 
"🌟" : [1/257280000, [0,0,0,0]],
"🌪️" : [1/247010000, [0,0,0,0]],
"🌏" : [1/213200000, [0,0,0,0]],
"📝" : [1/200000000, [0,0,0,0]], 
"💎" : [1/170000000, [0,0,0,0]], 
"🔥" : [1/160000000, [0,0,0,0]],
"🔆" : [1/75000000, [0,0,0,0]],
"☄️" : [1/72500000, [0,0,0,0]],
"🌲" : [1/71000000, [0,0,0,0]],
"⭐" : [1/70600600, [0,0,0,0]],
"🔱" : [1/70000000, [0,0,0,0]],
"🎃" : [1/69000000, [0,0,0,0]],
"🎇" : [1/67500000, [0,0,0,0]],
"👑" : [1/65000000, [0,0,0,0]],
"🕯️" : [1/62500000, [0,0,0,0]],
"🔮" : [1/60000000, [0,0,0,0]],
"🕋" : [1/55000000, [0,0,0,0]],
"⌚" : [1/52000000, [0,0,0,0]],
"🔳" : [1/46000000, [0,0,0,0]],
"🧲" : [1/43500000, [0,0,0,0]],
"🗜️" : [1/42000000, [0,0,0,0]],
"🏆" : [1/38000000, [0,0,0,0]],
"🔋" : [1/36000000, [0,0,0,0]],
"🎍" : [1/35000000, [0,0,0,0]],
"🎀" : [1/31000000, [0,0,0,0]],
"⏹️" : [1/29000000, [0,0,0,0]],
"🐟" : [1/26000000, [0,0,0,0]],
"🔗" : [1/25000000, [0,0,0,0]],
"💍" : [1/15000000,[0,0,0,0]],
"🎄" : [1/12500000,[0,0,0,0]],
"🪵" : [1/10000000,[0,0,0,0]],
"🌻" : [1/9500000,[0,0,0,0]],
"🍁" : [1/8900000,[0,0,0,0]],
"🫧" : [1/8750000,[0,0,0,0]],
"🥏" : [1/8000000,[0,0,0,0]],
"🎲" : [1/7777777,[0,0,0,0]],
"✂️" : [1/7000000,[0,0,0,0]],
"🔱" : [1/6333333,[0,0,0,0]],
"⚜️" : [1/6250000,[0,0,0,0]],
"💠" : [1/6000000,[0,0,0,0]],
"🃏" : [1/5500000,[0,0,0,0]],
"⚙️" : [1/5000000,[0,0,0,0]],
"🤍": [1/4000000, [0,0,0,0]],
"🖤": [1/3500000, [0,0,0,0]],
"🤎": [1/3000000, [0,0,0,0]],
"💜": [1/2000000, [0,0,0,0]],
"❤️": [1/1000000, [0,0,0,0]],
"🧡": [1/950000, [0,0,0,0]],
"💛": [1/900000, [0,0,0,0]],
"💙": [1/800000, [0,0,0,0]],
"💚": [1/750000, [0,0,0,0]],
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
  function generateBlock(luck) {
      let blockToGive = "";
      let summedProbability = 0;
      let chosenValue = Math.random();
      chosenValue /= luck;
      for (var propertyName in probabilityTable) {
        summedProbability += probabilityTable[propertyName][0];
        if (chosenValue < summedProbability) {
          blockToGive = propertyName;
          break;
        }
        }
        if (Math.round(1 / (probabilityTable[blockToGive][0])) > 750000000) {
            spawnMessage(blockToGive);
            playSound("otherworldly");
        } else if (Math.round(1 / (probabilityTable[blockToGive][0])) >= 160000000){
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
    let data = [currentPickaxe, pickaxes];
    localStorage.setItem("pickaxeData", JSON.stringify(data));
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
    let data = JSON.parse(localStorage.getItem("pickaxeData"));
    console.log(data);
    currentPickaxe = data[0];
    pickaxes = data[1];
    document.getElementById("blocksMined").innerHTML = totalMined + " Blocks Mined";
}

function playSound(type) {
    let audio;
    switch (type) {
        case "exotic":
            chill.volume = 0.2;
            if (chill.currentTime == 0) {
                chill.play();
            } else {
                chill.currentTime = 0;
            }
            break;
        case "transcendent":
            ringing.volume = 0.2;
            if (ringing.currentTime == 0) {
                ringing.play();
            } else {
                ringing.currentTime = 0;
            }
            break;
        case "enigmatic":
            visionblur.volume = 0.2;
            if (visionblur.currentTime == 0) {
                visionblur.play();
            } else {
                visionblur.currentTime = 0;
            }
            break;
        case "unfathomable":
            unfath.volume = 0.2;
            if (unfath.currentTime == 0) {
                unfath.play();
            } else {
                unfath.currentTime = 0;
            }
            break;
        case "otherworldly":
            ow.volume = 0.2;
            if (ow.currentTime == 0) {
                ow.play();
            } else {
                ow.currentTime = 0;
            }
            break;
        }
  }
  let visionblur;
  let unfath;
  let ow;
  let ringing;
  let chill;
function loadContent() {
    allAudios = [];
    chill = new Audio("Achillgoesdownyourspine.mp3");
    ringing = new Audio("Transcendent.mp3");
    visionblur = new Audio("Yourvisionbeginstoblur.mp3");
    unfath = new Audio("Unfathsound.mp3");
    ow = new Audio("Otherworldly.mp3");
    allAudios.push(chill);
    allAudios.push(ringing);
    allAudios.push(visionblur);
    allAudios.push(unfath);
    allAudios.push(ow);
    
    for (let i = 0; i < allAudios.length; i++) {
        allAudios[i].load();
    }

    document.getElementById("pressPlay").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
    canMine = true;
}


  let loopTimer = null;
  let curDirection = "";
  function goDirection(direction) {
    if (curDirection == direction) {
        clearInterval(loopTimer);
        curDirection = ""
    } else {
        clearInterval(loopTimer);
        loopTimer = setInterval(movePlayer, 25, direction);
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
let spawnOre;
function spawnMessage(block) {
    document.getElementById("spawnMessage").innerHTML = block + " Has Spawned!<br>" + "1/" + Math.round(1 / (probabilityTable[block][0]));
    clearTimeout(spawnOre);
    spawnOre = setTimeout(() => {
        document.getElementById("spawnMessage").innerHTML = "Spawn Messages Appear Here"
      }, 20000);
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