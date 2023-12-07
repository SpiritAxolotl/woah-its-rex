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
    document.getElementById("blocksMined").innerHTML = totalMined + " Blocks Mined";
    
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
            console.log(data[4]);
            gears[i] = data[4][0][i];
        }
    }
}


let dataTimer = null;
let dataLooping = false;
function repeatDataSave() {
        dataTimer = setInterval(saveAllData, 2000);
}

function exportData() {
    let data = JSON.parse(localStorage.getItem("playerData"));
    document.getElementById("dataText").value = JSON.stringify(data);
    if (confirm("Download as file?")) {
        exportDataAsFile(JSON.stringify(data), "data.txt", "text/plain");
    }
}
function importData(data) {
    if (confirm("Are you sure you want to do this? Any mistakes in imported data will corrupt your savefile.")) {
        clearInterval(dataTimer);
        localStorage.setItem("playerData", data);
        setTimeout(() => {
        location.reload();
        }, 100);
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