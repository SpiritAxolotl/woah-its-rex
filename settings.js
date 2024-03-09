/* Copyright (C) Amber Blessing - All Rights Reserved
 
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential
Written by Amber Blessing <ambwuwu@gmail.com>, January 2024
*/
let invToIndex = true;
let craftingToIndex = true;
let usePathBlocks = true;

function openFrame(frameId) {
    document.querySelectorAll('.frame').forEach(frame => {
      frame.style.display = 'none';
    });
    
    const selectedFrame = document.getElementById(frameId + "-frame");
    if (selectedFrame) {
      selectedFrame.style.display = 'block';
    }
}


let canDisplay = true;
function changeCanDisplay(button) {
    if (canDisplay) {
        button.style.backgroundColor = "red";
        document.getElementById("blockDisplay").innerHTML = "❌";
        canDisplay = false;
    } else {
        button.style.backgroundColor = "green";
        canDisplay = true;
        displayArea();
    }
}
let useNumbers = false;
let allPickaxeNames = ["Mulch Mallet", 
"Mud Sickle", 
"Dirt Ravager", 
"Void Crusher", 
"Geode Staff", 
"Earth Soiler", 
"Crypt Smasher", 
"Labyrinthian Tide", 
"77 Leaf Destroyer", 
"Planet Buster", 
"Whirlpool of Fate", 
"Wings of Glory",
"The Key",
"Extreme Echolocator",
"Corundum Caver",
"Starborne Slasher",
"Nyabomb",
"Lunar Lightsabre",
"Gemstone Engraver",
"Gambler's Fallacy",
"Swirly Subjugator",
"Singularity Slammer",
"Staff of Binding",
];
function changeUseNumbers(button) {
    if (!useNumbers) {
        let elements = document.getElementById("pickaxeCrafts").children;
        for (let i = 1; i < elements.length; i++) {
            elements[i].innerHTML = "Pickaxe " + i;
        }
        if (button != undefined) {
            button.style.backgroundColor = "green";
        }
        useNumbers = true;
    } else {
        let elements = document.getElementById("pickaxeCrafts").children;
        for (let i = 1; i < elements.length; i++) {
            elements[i].innerHTML = allPickaxeNames[i - 1];
        }
        if (button != undefined) {
            button.style.backgroundColor = "red";
        }
        useNumbers = false;
    }
}
let stopRareValues = ["Chill+", "Ringing+", "Blur+", "Unfath+", "Otherworldly+", "Metaversal+", "Zenith+", "Ethereal+"];
let stopRareNum = 0;
function changeMinRarity(button) {
    stopRareNum++;
    if (stopRareNum > 7) {
        stopRareNum = 0;
    }
    button.innerHTML = stopRareValues[stopRareNum];
}
function changeStopOnRare(button) {
    if (stopOnRare) {
        stopOnRare = false;
        button.style.backgroundColor = "red";
    } else {
        stopOnRare = true;
        button.style.backgroundColor = "green";
    }
        
}

//TY TETRA FOR THE BACKGROUND CHANGING FUNCTION!!
function changeBackgroundColor() {
    // Get the input value
    let element = document.getElementById("colorInput");
    let hexColor = element.value;
  
    // Validate if the input is a valid hex color
    if (/^#[0-9A-F]{6}$/i.test(hexColor)) {
      // Set the background color
      document.getElementById("mainContent").style.backgroundColor = hexColor;
      flashGreen(element);
    } else {
        flashRed(element);
    }
}
function changeLatestColors(num) {
    let toChange = document.getElementsByClassName("latestDisplay");
    let element = document.getElementById("latestColor");
    let value = element.value;
    if (/^#[0-9A-F]{6}$/i.test(value)) {
        if (num === 0) {
            toChange[0].style.color = value;
            toChange[1].style.color = value;
        } else if (num === 1) {
            toChange[0].style.borderColor = value;
            toChange[1].style.borderColor = value;
        } else if (num === 2) {
            toChange[0].style.backgroundColor = value;
            toChange[1].style.backgroundColor = value;
        }
    flashGreen(element);
    } else {
        flashRed(element);
    }
    
}
function getLatestColors() {
    let colors = [];
    let element = document.getElementsByClassName("latestDisplay")[0];
    colors.push(element.style.color);
    colors.push(element.style.borderColor);
    colors.push(element.style.backgroundColor);
    return colors;
}
function changeInventoryColors(num) {
    let toChange = document.getElementById("inventoryDisplay");
    let element = document.getElementById("inventoryColors");
    let value = element.value;
    if (/^#[0-9A-F]{6}$/i.test(value)) {
        if (num === 0) {
            toChange.style.borderColor = value;
        } else if (num === 1) {
            toChange.style.backgroundColor = value;
        }
    flashGreen(element);
    } else {
        flashRed(element);
    }
}
function getInventoryColors() {
        let colors = [];
        let element = document.getElementById("inventoryDisplay");
        colors.push(element.style.borderColor);
        colors.push(element.style.backgroundColor);
        return colors;
}
function changeCraftingColors(num) {
    let toChange = document.getElementsByClassName("col-2")[0];
    let element = document.getElementById("craftingColors");
    let value = element.value;
    if (/^#[0-9A-F]{6}$/i.test(value)) {
        if (num === 0) {
            toChange.style.borderColor = value;
        } else if (num === 1) {
            toChange.style.backgroundColor = value;
        }
    flashGreen(element);
    } else {
        flashRed(element);
    }
}
function getCraftingColors() {
    let colors = [];
    let element = document.getElementsByClassName("col-2")[0];
    colors.push(element.style.borderColor);
    colors.push(element.style.backgroundColor);
    return colors;
}
function flashRed(element) {
    element.style.animation = "flashRed 1s linear 1";
    setTimeout(() => {
        element.style.animation = "";
        element.value = "";
    }, 1000);
}
function flashGreen(element) {
    element.style.animation = "flashGreen 1s linear 1";
    setTimeout(() => {
        element.style.animation = "";
        element.value = "";
    }, 1000);
}
//latestDisplay
//inventoryDisplay
//col-2

function showSettings() {
    canMine = false;
    document.getElementById("mainContent").style.display = "none";
    document.getElementById("settingsContainer").style.display = "block";
    switchLayerIndex(0, 0)
}

function hideSettings() {
    canMine = true;
    document.getElementById("settingsContainer").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
}
/*
let chill;
let ringing;
let visionblur;
let unfath;
let ow;
let magnificent;
let zenith;
let keepRunningAudio;
*/
function changeSpawnVolume(percent, num) {
    percent = Number(percent);
    if (!(isNaN(percent))) {
    if (percent > 100)
        percent = 100;

    allAudios[num].volume = (percent / 100);
    }
}

let minMiningSpeed = 0;

function changeMinMiningSpeed(element) {
    elementValue = element.value;
    let num = elementValue === "" ? "none" : elementValue;
    num = Number(num);
    if (!isNaN(num)) {
        if (num > 25)
            num = 25;
        if (num < 0)
            num = 0;
        minMiningSpeed = num;
        flashGreen(element);
    } else {
        flashRed(element);
    }
}

function updateCapacity(element) {
    elementValue = element.value;
    let value = elementValue === "" ? "none" : elementValue;
    value = Number(value);
    if (!(isNaN(value)) && value > 0) {
        baseMineCapacity = value;
        mineCapacity = value;
        flashGreen(element);
    } else {
        flashRed(element);
    }        
}
let layerNum = 0;
function switchLayerIndex(num, overrideNum, world) {
    while (document.getElementById("oreCardHolder").firstChild) {
        document.getElementById("oreCardHolder").removeChild(document.getElementById("oreCardHolder").firstChild);
    }
    if (world === undefined) {
        world = currentWorld;
    }
    layerNum += num;
    let add = world === 1 ? 8 : 5;
    if (layerNum > (add + 3)) {
        layerNum = 0;
    }
    if (layerNum < 0)
        layerNum = (add + 3);
    let layerToIndex;
    layerNum = overrideNum === undefined ? layerNum : overrideNum;
    if (layerNum > (add - 1)) {
        let caveNum = 11 - layerNum;
        layerToIndex = allCaves[caveNum];
    } else {
        if (world === 1) {
            layerToIndex = worldOneLayers[layerNum];
        } else {
            layerToIndex = worldTwoLayers[layerNum];
        }
    }
    
    layerToIndex = layerNum === 101 ? worldOneCommons : layerToIndex;
    layerToIndex = layerNum === 102 ? worldTwoCommons : layerToIndex;
    let layerMaterial = (Object.keys(layerToIndex));
    layerMaterial = layerMaterial[layerMaterial.length - 1];
    document.getElementById("indexSwitchButton").innerHTML = layerMaterial;
    let oreIndexCards = [];
    for (let propertyName in layerToIndex) {
        if (layerToIndex[propertyName] < 1/1) {
            if (ignoreList.indexOf(propertyName) === -1) {
                oreIndexCards.push(createIndexCards(layerToIndex, propertyName))
            }
        }
    }
    for (let i = oreIndexCards.length - 1; i >= 0; i--) {
        document.getElementById("oreCardHolder").appendChild(oreIndexCards[i]);
    }
}
let ignoreList = "🌳🏰🚿🐋🏔️⚠️💗🐪💵☘️🪽🔫🗝️💰⚖️🌙🍀🍃🚽🎓👾🪝🪡🍓🏯🦚👽🪤🤖🦴🎩";
function createIndexCards(layer, property) {
        let parentObject = document.createElement("div");
        parentObject.classList = "oreCard";
        if (oreList[property][1][3]) {
            parentObject.style.backgroundImage = "linear-gradient(to bottom right, #c91800, #ff722b, #383838)";
        } else if (oreList[property][1][2]) {
            parentObject.style.backgroundImage = "linear-gradient(to bottom right, #062404, #c9fc3a, #062404)";
        } else if (oreList[property][1][1]) {
            parentObject.style.backgroundImage = "linear-gradient(to bottom right, #f7f368, #ffc629, #e365fc)";
        } else if (oreList[property][1][0]) {
            parentObject.style.backgroundColor = "green";
        } else {
            parentObject.style.backgroundColor = "red";
        }
        //ADD NAME TO CARD
        let oreName = document.createElement("p");
        oreName.style.fontSize = "2vw";
        oreName.innerHTML = property;
        parentObject.appendChild(oreName);
        //ADD BASE RARITY TO CARD
        let oreRarity = document.createElement("p");
        oreRarity.style.fontSize = "1.25vw";
        oreRarity.style.fontWeight = "bold";
        oreRarity.innerHTML = "1/" + (Math.round(1/layer[property])).toLocaleString() + " base rarity.";
        parentObject.appendChild(oreRarity);
        //ADD RARITY WITH LUCK TO CARD
        let oreRarityLuck;
        oreRarityLuck = document.createElement("p");
        oreRarityLuck.style.fontSize = "1.25vw";
        oreRarityLuck.style.fontWeight = "bold";
        if (allCaves.includes(layer)) {
            let rarity = layer[property];
            rarity /= getCaveMultiFromOre(property);
            oreRarityLuck.innerHTML = "1/" + Math.round(1/rarity).toLocaleString() + " adjusted.";
        } else {
            oreRarityLuck.innerHTML = "1/" + (Math.round(1/(layer[property] * verifiedOres.getCurrentLuck()))).toLocaleString() + " with luck.";
        }
        parentObject.appendChild(oreRarityLuck);
    
        return parentObject;
}

function randomFunction(text, cause) {
    if ((cause === "inv" && invToIndex) || (cause === "crafting" && craftingToIndex)) {
        let num = -1;
        let world = currentWorld;
        let ore = text.substring(0, text.indexOf(" "));
        if (ore === "❤️‍🔥")
            return;
        if (ignoreList.indexOf(ore) === -1) {
            for (let i = 0; i < worldOneLayers.length; i++) {
                if (worldOneLayers[i][ore] != undefined) {
                    num = i;
                    world = 1;
                    break;
                }
            }
            if (num < 0) {
                for (let i = 0; i < worldTwoLayers.length; i++) {
                    if (worldTwoLayers[i][ore] != undefined) {
                        num = i;
                        world = 2;
                        break;
                    }
                }
            }
            if (num < 1) {
                for (let i = allCaves.length - 1; i >= 0; i--) {
                    if (allCaves[i][ore] != undefined) {
                        num = 11 - i;
                        break;
                    }
                }
            }
            if (worldOneCommons[ore] != undefined) {
                num = 101;
            }
            if (worldTwoCommons[ore] != undefined) {
                num = 102;
            }
            
            if (num > -1) {
                showSettings();
                openFrame('index');
                switchLayerIndex(0, num, world);
            }
        }
    }
}
function switchToIndex(button, num) {
    if (num === 0) {
        if (invToIndex) {
            invToIndex = false;
            button.style.backgroundColor = "red";
        } else {
            invToIndex = true;
            button.style.backgroundColor = "green";
        }
    } else if (num === 1) {
        if (craftingToIndex) {
            craftingToIndex = false;
            button.style.backgroundColor = "red";
        } else {
            craftingToIndex = true;
            button.style.backgroundColor = "green";
        }
    }
    
}
function togglePathBlocks() {
    if (usePathBlocks) {
        document.getElementById("pathBlocks").style.backgroundColor = "green";
        usePathBlocks = false;
    } else {
        document.getElementById("pathBlocks").style.backgroundColor = "red";
        usePathBlocks = true;
    }
    displayArea();
}
let testSoundTimeout = null;
function testSound(num) {
    let element = document.getElementsByClassName("testButton")[num];
    let time = (allAudios[num].duration * 1000);
    if (allAudios[num].currentTime === 0) {
        allAudios[num].play();
        element.style.backgroundColor = "green";
        testSoundTimeout = setTimeout(() => {
            element.style.backgroundColor = "red";
            allAudios[num].pause();
            allAudios[num].currentTime = 0;
            clearTimeout(testSoundTimeout);
        }, time);
    } else {
        allAudios[num].pause();
        allAudios[num].currentTime = 0;
        element.style.backgroundColor = "red";
        clearTimeout(testSoundTimeout);
    }
}