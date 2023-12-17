function saveAllData() {
    localStorage.setItem("game2DataChanges", true);
    let dataStorage = [
        //ORES, 0
        [],
        //PICKAXES, 1
        [],
        //STATS, 2
        [],
        //UPDATES, 3
        [],
        //GEARS, 4
        []

    ];

    for (var propertyName in oreList) {
        dataStorage[0].push([propertyName, [oreList[propertyName][1]]]);
    }
    dataStorage[1].push([pickaxes, currentPickaxe]);
    dataStorage[2].push(totalMined)
    dataStorage[4].push(gears);
    localStorage.setItem("playerData", JSON.stringify(dataStorage));
}

function loadAllData() {
    localStorage.setItem("dataBackup", localStorage.getItem("playerData"));
    try {
        let data = JSON.parse(localStorage.getItem("playerData"));
        for (let i = 0; i < data[0].length; i++) {
            if (oreList[data[0][i][0]] != undefined) {
                oreList[data[0][i][0]][1] = data[0][i][1][0];
            }
        }
        for (let i = 0; i < data[1][0][0].length; i++) {
            
            pickaxes[i][1] = data[1][0][0][i][1];
        }
        currentPickaxe = data[1][0][1];
    
        totalMined = data[2]
        document.getElementById("blocksMined").innerHTML = totalMined.toLocaleString() + " Blocks Mined";
        
        for (var propertyName in oreList) {
                if (document.getElementById(propertyName + "1") != null) {
                    for (let i = 1; i < 5; i++) {
                        updateInventory(propertyName, i)
                        if (oreList[propertyName][1][i - 1] > 0) {
                            document.getElementById(propertyName + i).style.display = "block";
                        }
                    }
                } 
        }
        if (data[4] != undefined || data[4] != null) {
            for (let i = 0; i < data[4][0].length; i++) {
                gears[i] = data[4][0][i];
            }
        }
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
dataTimer = setInterval(saveAllData, 2000);
}

function toBinary(string) {
    const codeUnits = new Uint16Array(string.length);
    for (let i = 0; i < codeUnits.length; i++) {
        codeUnits[i] = string.charCodeAt(i);
    }
    return btoa(String.fromCharCode(...new Uint8Array(codeUnits.buffer)));
}

function fromBinary(encoded) {
    const binary = atob(encoded);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < bytes.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }
    return String.fromCharCode(...new Uint16Array(bytes.buffer));
}

function exportData() {
    let data = toBinary(JSON.stringify(JSON.parse(localStorage.getItem("playerData"))));
    let textField = document.getElementById("dataText");
    textField.value = data;
    if (confirm("Download save data as file?")) {
        exportDataAsFile(data, "data.txt", "text/plain");
    } else {
        textField.select();
        textField.setSelectionRange(0, 99999);
        alert("The textbox has been selected for you; make sure to copy your data to your clipboard so you don't lose it!");
    }
}
function importData(data) {
    if (data == "") {
        if (confirm("You are importing nothing, this will perform a hard reset on your save file. Are you sure you want to do this?")) {
            localStorage.clear();
            location.reload();
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
    let textFileAsBlob = new Blob([textToWrite], { type: fileType });
    let downloadLink = document.createElement('a');
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = 'Download File';

    if (window.webkitURL != null) {
        downloadLink.href = window.webkitURL.createObjectURL(
            textFileAsBlob
        );
    } else {
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.style.display = 'none';
        document.body.appendChild(downloadLink);
    }

    downloadLink.click();
}
function showData() {
    canMine = false;
    document.getElementById("mainContent").style.display = "none";
    document.getElementById("dataExport").style.display = "block";
}

function hideData() {
    canMine = true;
    document.getElementById("dataExport").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
}