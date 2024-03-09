/* Copyright (C) Amber Blessing - All Rights Reserved
 
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential
Written by Amber Blessing <ambwuwu@gmail.com>, January 2024
*/
function saveAllData() {
    localStorage.setItem("game2DataChanges", true);
    let dataStorage = [
        //ORES, 0
        [],
        //PICKAXES, 1
        [],
        //STATS, 2
        [],
        //SETTINGS, 3
        [],
        //GEARS, 4
        []
    ];
    
    for (let propertyName in oreList)
        dataStorage[0].push([propertyName, [oreList[propertyName][1]]]);
    dataStorage[1].push([pickaxes, currentPickaxe]);
    dataStorage[2].push(totalMined);
    dataStorage[3].push(
        canPlay, 
        getAllSpawnVolumes(), //
        keepRunningAudio.paused, //
        Number(document.getElementById("musicVolume").value), //
        baseMineCapacity, //
        minMiningSpeed, //
        stopOnRare, //
        stopRareNum, //
        canDisplay, //
        useNumbers, //
        invToIndex, //
        craftingToIndex, //
        document.getElementById("mainContent").style.backgroundColor, //
        getLatestColors(), //
        getInventoryColors(),
        getCraftingColors(),
        usePathBlocks,
        );
    dataStorage[4].push(gears);
    localStorage.setItem("playerData", JSON.stringify(dataStorage));
}
function getAllSpawnVolumes() {
    let volumes = document.getElementsByClassName("spawnVolume");
    let values = []
    for (let i = 0; i < volumes.length; i++) {
        values.push(Number(volumes[i].value));
    }
    return values;
}

function loadAllData() {
    localStorage.setItem("dataBackup", localStorage.getItem("playerData"));
    try {
        const data = JSON.parse(localStorage.getItem("playerData"));
        for (let i = 0; i < data[0].length; i++) {
            if (oreList[data[0][i][0]] !== undefined)
                oreList[data[0][i][0]][1] = data[0][i][1][0];
        }
        for (let i = 0; i < data[1][0][0].length; i++)
            if(pickaxes[i] != undefined)
                pickaxes[i][1] = data[1][0][0][i][1];
        currentPickaxe = data[1][0][1];
        totalMined = data[2];
        document.getElementById("blocksMined").innerHTML = totalMined.toLocaleString() + " Blocks Mined";
        for (let propertyName in oreList) {
            if (document.getElementById(propertyName + "1") !== null) {
                for (let i = 1; i < 5; i++) {
                    updateInventory(propertyName, i);
                    if (oreList[propertyName][1][i - 1] > 0)
                        document.getElementById(propertyName + i).style.display = "block";
                }
            }
        }
        if (data[3].length > 14) {
            if (data[3][0] != undefined) {
                let elements = document.getElementsByClassName("muteButton");
                for (let i = 0; i < data[3][0].length; i++) {
                    if (!data[3][0][i])
                        elements[i].click();
                }
            }
            if (data[3][1] != undefined) {
                let elements = document.getElementsByClassName("spawnVolume");
                for (let i = 0; i < elements.length; i++) {
                    elements[i].value = data[3][1][i];
                    changeSpawnVolume(data[3][1][i], i)
                }
                   
                    
            }
            if (data[3][2] != undefined) {
                if (data[3][2])
                    document.getElementById("musicButton").click()
            }
            if (data[3][3] != undefined) {
                document.getElementById("musicVolume").value = data[3][3];
                changeMusicVolume(data[3][3]);
            }
            if (data[3][4] != undefined) {
                baseMineCapacity = data[3][4];
                mineCapacity = data[3][4];
                document.getElementById("mineResetProgress").innerHTML = blocksRevealedThisReset.toLocaleString() + "/" + mineCapacity.toLocaleString() + " Blocks Revealed This Reset";
            }
            if (data[3][5] != undefined) {
                minMiningSpeed = data[3][5];
            }
            if (data[3][6] != undefined) {
                stopOnRare = data[3][6];
                if (stopOnRare)
                    document.getElementById("stopOnRare").style.backgroundColor = "green";
            }
            if (data[3][7] != undefined) {
                stopRareNum = data[3][7];
                document.getElementById("stopOnRareDisplay").innerHTML = stopRareValues[stopRareNum];
            }
            if (data[3][8] != undefined) {
                canDisplay = data[3][8];
                if (!canDisplay) {
                    document.getElementById("blockUpdates").style.backgroundColor = "red";
                    document.getElementById("blockDisplay").innerHTML = "❌"
                }
            }
            if (data[3][9] != undefined) {
                if (data[3][9]) {
                    changeUseNumbers();
                    useNumbers = data[3][9]; 
                    document.getElementById("useNumbers").style.backgroundColor = "green";
                }
            }
            if (data[3][10] != undefined) {
                invToIndex = data[3][10];
                if (!invToIndex)
                    document.getElementById("invIndex").style.backgroundColor = "red";
            }
            if (data[3][11] != undefined) {
                craftingToIndex = data[3][11];
                if (!craftingToIndex)
                    document.getElementById("craftIndex").style.backgroundColor = "red";
            }
            if (data[3][12] != undefined) {
                if (data[3][12] != "")
                    document.getElementById("mainContent").style.backgroundColor = data[3][12];
            } 
            if (data[3][13] != undefined) {
                let toChange = document.getElementsByClassName("latestDisplay");
                if (data[3][13][0] != "") {
                    toChange[0].style.color = data[3][13][0];
                    toChange[1].style.color = data[3][13][0];
                }
                if (data[3][13][1] != "") {
                    toChange[0].style.borderColor = data[3][13][1];
                    toChange[1].style.borderColor = data[3][13][1];
                }
                if (data[3][13][2] != "") {
                    toChange[0].style.backgroundColor = data[3][13][2];
                    toChange[1].style.backgroundColor = data[3][13][2];
                }
            }
            if (data[3][14] != undefined) {
                let element = document.getElementById("inventoryDisplay");
                if (data[3][14][0] != "")
                    element.style.borderColor = data[3][14][0];
                if (data[3][14][1] != "")
                    element.style.backgroundColor = data[3][14][1];
            }
            if (data[3][15] != undefined) {
                let element = document.getElementsByClassName("col-2")[0];
                if (data[3][15][0] != "")
                    element.style.borderColor = data[3][15][0];
                if (data[3][15][1] != "")
                    element.style.backgroundColor = data[3][15][1];
            }
            if (data[3][16] != undefined) {
                usePathBlocks = data[3][16];
                if (!usePathBlocks)
                    document.getElementById("pathBlocks").style.backgroundColor = "green"
            }
        }
            if (data[4] !== undefined || data[4] !== null) {
                for (let i = 0; i < data[4][0].length; i++)
                    gears[i] = data[4][0][i];
            }
        if (oreList["🎂"][1][0] > 0 || gears[9])
            document.getElementById("sillyRecipe").style.display = "block";
        localStorage.removeItem("dataBackup");
        return true;
    } catch(error) {
        console.log(error);
        localStorage.setItem("playerData", localStorage.getItem("dataBackup"));
        window.alert("DATA CORRUPTION DETECTED, EXPORT YOUR SAVE FILE AND CONTACT A MODERATOR IN THE DISCORD");
        return false;
    }
}

let dataTimer = null;
let dataLooping = false;
function repeatDataSave() {
    dataTimer = setInterval(saveAllData, 3000);
}

function toBinary(string) {
    const codeUnits = new Uint16Array(string.length);
    for (let i = 0; i < codeUnits.length; i++)
        codeUnits[i] = string.charCodeAt(i);
    return btoa(String.fromCharCode(...new Uint8Array(codeUnits.buffer)));
}

function fromBinary(encoded) {
    const binary = atob(encoded);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < bytes.length; i++)
        bytes[i] = binary.charCodeAt(i);
    return String.fromCharCode(...new Uint16Array(bytes.buffer));
}

function exportData() {
    const data = toBinary(JSON.stringify(JSON.parse(localStorage.getItem("playerData"))));
    let textField = document.getElementById("dataText");
    textField.value = data;
    if (confirm("Download save data as file?"))
        exportDataAsFile(data, "data.txt", "text/plain");
    else {
        textField.select();
        textField.setSelectionRange(0, 99999);
        alert("The textbox has been selected for you; make sure to copy your data to your clipboard so you don't lose it!");
    }
}

function importData(data) {
    if (data === "") {
        if (confirm("You are importing nothing, this will perform a hard reset on your save file. Are you sure you want to do this?")) {
            if (confirm("YOUR SAVE FILE WILL BE ERASED. PLEASE BE SURE THIS IS WHAT YOU WANT.")) {
                localStorage.clear();
                location.reload();
            }
        }
    } else {
        if (confirm("Are you sure you want to do this? Any mistakes in imported data will corrupt your savefile.")) {
            localStorage.setItem("dataBackup", localStorage.getItem("playerData"));
            clearInterval(dataTimer);
            try {
                data = fromBinary(data);
                localStorage.setItem("playerData", data);
                setTimeout(() => {
                    location.reload();
                }, 1000);
            } catch(error) {
                console.log(error);
                localStorage.setItem("playerData", localStorage.getItem("dataBackup"));
                window.alert("DATA CORRUPTION DETECTED, CONTACT A MODERATOR IN THE DISCORD");
            }
        }
    }
}

function exportDataAsFile(textToWrite, fileNameToSaveAs, fileType) {
    const textFileAsBlob = new Blob([textToWrite], { type: fileType });
    let downloadLink = document.createElement('a');
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = 'Download File';
    if (window.webkitURL !== null)
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    else {
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.style.display = 'none';
        document.body.appendChild(downloadLink);
    }
    downloadLink.click();
}


