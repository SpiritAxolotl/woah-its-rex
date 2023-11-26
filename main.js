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
    //var playedBefore = JSON.parse(localStorage.getItem("playedBefore"));
    //var playedBefore2 = JSON.parse(localStorage.getItem("playedBefore2"));
    /*if (!playedBefore2) {
        localStorage.clear();
        localStorage.setItem("playedBefore2", true);
    }
    if (playedBefore) {
        createInventory();
        loadData();
    } else {
        localStorage.setItem("inventory", JSON.stringify(inventory));
        localStorage.setItem("amountMined", JSON.stringify(totalMined));
        localStorage.setItem("playedBefore", true);
        createInventory();
    }*/
    createInventory();
    createMine();
    if (mobileCheck()) {
        document.getElementById("mobile").style.display = "block";
    }
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

function movePlayer(dir) {
    switch (dir) {
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
}
document.addEventListener('keydown', (event) => {
    var name = event.key;
    movePlayer(name);
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
    [],
    [],
    [],
    []
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
for (var i = inventory[0].length - 1; i >= 0; i--) {
    if (inventory[inv][i][0] == type) {
        inventory[inv][i][1] ++;
        break;
    }
}
    updateInventory();
  }
let probabilityTable = {
    "👁️" : 1/360000000,
"💸" : 1/141752000,
"🌌" : 1/103400000,
"🪩" : 1/99999999, 
"👁️‍🗨️" : 1/95520089,
"🥗" : 1/80000000,
"🔩" : 1/79117168,
"⌛" : 1/75000000, 
"🪐" : 1/70900075, 
"🧀" : 1/61800001,
"🌀" : 1/61800000, 
"🧊" : 1/58300000,
"🥀" : 1/53800000, 
"🥉" : 1/44444444, 
"🪞" : 1/42680005,
"❄️" : 1/38650000,
"💥" : 1/37500000, 
"🌟" : 1/25728000,
"🌪️" : 1/24701000,
"🌏" : 1/21320000,
"📝" : 1/20000000, 
"💎" : 1/17000000, 
"🔥" : 1/16000000,
"🟫" : 1/1
  }
  function generateBlock() {
      let blockToGive = "";
      let summedProbability = 0;
      let chosenValue = Math.random();
      chosenValue /= 2500;
      for (var propertyName in probabilityTable) {
        summedProbability += probabilityTable[propertyName];
        if (chosenValue < summedProbability) {
          blockToGive = propertyName;
          break;
        }
        }
        if (Math.round(1 / (probabilityTable[blockToGive])) >= 75000001) {
            playSound("otherworldly");
        } else if (Math.round(1 / (probabilityTable[blockToGive])) >= 16000000){
            playSound("unfathomable");
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
function createInventory() {
    let i = 0;
    let temp = [];
    for (let j = 0; j < 4; j++) {
        i = 0;
        temp = [];
        for (var propertyName in probabilityTable) {
            temp[0] = propertyName;
            temp[1] = 0;
            inventory[j][i] = temp;
            temp = [];
            i++;
        }
    } 
}
  window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };
  console.log(mobileCheck());

let directionTimer = null;
function goDirection(state) {
    clearInterval(directionTimer);
    directionTimer = setInterval(movePlayer(state), 100)
}
/*
"👁️" : 1/360000000,
"💸" : 1/141752000,
"🌌" : 1/103400000,
"🪩" : 1/99999999, 
"👁️‍🗨️" : 1/95520089,
"🥗" : 1/80000000,
"🔩" : 1/79117168,
"⌛" : 1/75000000, 
"🪐" : 1/70900075, 
"🧀" : 1/61800001,
"🌀" : 1/61800000, 
"🧊" : 1/58300000,
"🥀" : 1/53800000, 
"🥉" : 1/44444444, 
"🪞" : 1/42680005,
"❄️" : 1/38650000,
"💥" : 1/37500000, 
"🌟" : 1/25728000,
"🌪️" : 1/24701000,
"🌏" : 1/21320000,
"📝" : 1/20000000, 
"💎" : 1/17000000, 
"🔥" : 1/16000000
---------------------
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
    "👁": 1/50,
    "📝": 1/40,
    "🟫": 1
*/