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
        [
            [
        
            ]
        ]
    ];

    for (var propertyName in probabilityTable) {
        dataStorage[0].push([propertyName, [probabilityTable[propertyName][1]]]);
    }
    dataStorage[1].push([pickaxes, currentPickaxe]);
    dataStorage[2].push(totalMined)
    localStorage.setItem("playerData", JSON.stringify(dataStorage));
}

function loadAllData() {
    let data = JSON.parse(localStorage.getItem("playerData"));
    for (let i = 0; i < data[0].length; i++) {
        probabilityTable[data[0][i][0]][1] = data[0][i][1][0];
    }
    for (let i = 0; i < data[1][0].length; i++) {
        pickaxes[i][1] = data[1][0][0][i][1];
    }
    currentPickaxe = data[1][0][1];

    totalMined = data[2]
    document.getElementById("blocksMined").innerHTML = totalMined + " Blocks Mined";
    
    for (var propertyName in probabilityTable) {
            if (document.getElementById(propertyName + "1") != null) {
                for (let i = 1; i < 5; i++) {
                    updateInventory(propertyName, i)
                    if (probabilityTable[propertyName][1][i - 1] > 0) {
                        document.getElementById(propertyName + i).style.display = "block";
                    }
                }
            } 
        
    }
}

let dataTimer = null;
let dataLooping = false;
function repeatDataSave() {
        dataTimer = setInterval(saveAllData, 2000);
}