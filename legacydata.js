function saveData(block) {
    if(!(localStorage.getItem("game2DataChanges"))) {
        localStorage.setItem("" + block, JSON.stringify(probabilityTable[block][1]));
        localStorage.setItem("amountMined", JSON.stringify(totalMined));
        let data = [currentPickaxe, pickaxes];
        localStorage.setItem("pickaxeData", JSON.stringify(data));
    } else {
        localStorage.clear();
        saveAllData();
        repeatDataSave();
        localStorage.setItem("game2DataChanges", true)
    }
}

function loadData() {
    let dataChanges = localStorage.getItem("game2DataChanges");
    if (dataChanges == null || dataChanges == undefined || dataChanges == false) {
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
        currentPickaxe = data[0];
        for (let i = 0; i < data[1].length; i++) {
            pickaxes[i][1] = data[1][i][1];
        }
        document.getElementById("blocksMined").innerHTML = totalMined + " Blocks Mined";
        localStorage.clear();
        localStorage.setItem("game2DataChanges", true);
        repeatDataSave();
    } else {
        loadAllData();
    }
}