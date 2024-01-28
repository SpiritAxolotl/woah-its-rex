//ORES, 0
//PICKAXES, 1
//STATS, 2
//SETTINGS, 3
//GEARS, 4
function loadAllDataOld() {
    localStorage.setItem("dataBackupOld", localStorage.getItem("playerData"));
    try {
        const data = JSON.parse(localStorage.getItem("playerData"));
        for (let i = 0; i < data[0].length; i++) {
            if (oreList[data[0][i][0]] !== undefined) {
                for (let j = 0; j < data[0][i][1][0].length; j++)
                    inventory[data[0][i][0]][variantNames[j].toLowerCase()] = data[0][i][1][0][j];
            }
        }
        const pickNumToStringConversion = {
            0: "ol-faithful",
            1: "mulch-mallet",
            2: "mud-sickle",
            3: "dirt-ravager",
            4: "void-crusher",
            5: "geode-staff",
            6: "earth-soiler",
            7: "crypt-smasher",
            8: "labrynthian-tide",
            9: "77-leaf-destroyer",
            10: "planet-buster",
            11: "whirlpool-of-fate",
            12: "wings-of-glory"
        }
        for (let i = 0; i < data[1][0][0].length; i++)
            pickaxes[pickNumToStringConversion[i]] = data[1][0][0][i][1];
        currentPickaxe = pickNumToStringConversion[data[1][0][1]];
        totalMined = data[2];
        document.getElementById("blocksMined").innerHTML = `${totalMined.toLocaleString()} Blocks Mined`;
        for (let ore in oreList) {
            if (document.getElementById(ore + "Normal") !== null) {
                for (let variant in inventory[ore]) {
                    updateInventory(ore, variant);
                    if (inventory[ore][variant] > 0)
                        visible(document.getElementById(ore + capitalize(variant)));
                }
            }
        }
        if (data[3][0] !== undefined) {
            for (let i = 0; i < data[3][0].length; i++) {
                if (data[3][0][i] === false) {
                    document.getElementById(`mute${capitalize(Object.keys(canPlay)[i])}`).click();
                }
            }
        }
        if (data[3][1] !== undefined) {
            document.getElementById("musicVolume").value = data[3][1];
            changeMusicVolume(data[3][1]);
        }
        if (data[3][2] !== undefined) {
            document.getElementById("spawnVolume").value = data[3][2];
            changeAllVolume(data[3][2]);
        }
        //let canContinue = false;
        if (data[3][3] !== undefined) {
            if (data[3][3] === "Unmute Music") {
                setTimeout(() => {
                    document.getElementById("musicButton").click();
                }, 100);
            }
        }
        if (data[3][4] !== undefined && !isNaN(data[3][4] && data[3][4] > 0)) {
            baseMineCapacity = data[3][4];
            mineCapacity = data[3][4];
        }
        if (data[4] !== undefined || data[4] !== null) {
            for (let i = 0; i < data[4][0].length; i++)
                gears[gearNames[i]] = data[4][0][i];
        }
        if (inventory["🎂"]["normal"] > 0 || gears["silly-tp"])
            visible(document.getElementById("layerDisplaySilly"));
        else
            invisible(document.getElementById("layerDisplaySilly"));
        if (inventory["🪈"]["normal"] > 0)
            visible(document.getElementById("layerDisplayFlute"));
        else
            invisible(document.getElementById("layerDisplayFlute"));
        localStorage.removeItem("dataBackupOld");
        return true;
    } catch(error) {
        console.error(error);
        localStorage.setItem("playerData", localStorage.getItem("dataBackupOld"));
        window.alert("DATA CORRUPTION DETECTED, EXPORT YOUR SAVE FILE AND CONTACT A MODERATOR IN THE DISCORD");
        return false;
    }
}
