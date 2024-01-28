function saveAllData() {
    localStorage.setItem("game2DataChanges", true);
    let dataStorage = {
        "ores": {},
        "pickaxes": {},
        "stats": {},
        "settings": {},
        "gears": {}
    };
    
    //update this whenever the format of the data storage changes (then add if(data["version"]===num) to stuff)
    dataStorage["version"] = 4;
    for (let ore in oreList)
        dataStorage["ores"][ore] = inventory[ore];
    dataStorage["pickaxes"]["inv"] = pickaxes;
    dataStorage["pickaxes"]["curr"] = currentPickaxe;
    dataStorage["stats"]["totalMined"] = totalMined;
    dataStorage["stats"]["totalResets"] = totalResets;
    dataStorage["settings"]["mutedSounds"] = canPlay;
    dataStorage["settings"]["toggleCaves"] = caveToggle;
    dataStorage["settings"]["canDisplay"] = canDisplay;
    dataStorage["settings"]["musicVolume"] = Number(document.getElementById("musicVolume").value);
    dataStorage["settings"]["spawnVolume"] = Number(document.getElementById("spawnVolume").value);
    dataStorage["settings"]["musicButton"] = Number(document.getElementById("musicButton").innerHTML);
    dataStorage["settings"]["stopOnRare"] = stopOnRare;
    dataStorage["settings"]["baseMineCapacity"] = baseMineCapacity;
    dataStorage["settings"]["warnBeforeClosing"] = warnClose;
    dataStorage["settings"]["autoSave"] = autoSave;
    dataStorage["gears"]["inv"] = gears;
    dataStorage["gears"]["curr"] = currentGears;
    localStorage.setItem("playerData", JSON.stringify(dataStorage));
}

function loadAllData() {
    localStorage.setItem("dataBackup", localStorage.getItem("playerData"));
    try {
        const data = JSON.parse(localStorage.getItem("playerData"));
        if (typeof data["version"] !== "number")
            return loadAllDataOld();
        for (let ore in data["ores"])
            if (typeof oreList[ore] === "object")
                for (let variant of variantNames)
                    inventory[ore][variant.toLowerCase()] = data["ores"][ore][variant.toLowerCase()];
        if (typeof data["pickaxes"]["inv"] === "object"){
            if (data["version"] >= 4) {
                for (let pick in data["pickaxes"]["inv"])
                    pickaxes[pick] = data["pickaxes"]["inv"][pick];
                    currentPickaxe = data["pickaxes"]["curr"] || "ol-faithful";
            } else {
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
                for (let pick in data["pickaxes"]["inv"])
                    pickaxes[pickNumToStringConversion[pick]] = data["pickaxes"]["inv"][pick];
                currentPickaxe = pickNumToStringConversion[data["pickaxes"]["curr"]] || "ol-faithful";
            }
        }
        totalMined = data["stats"]["totalMined"] || 0;
        document.getElementById("blocksMined").innerHTML = `${totalMined.toLocaleString()} Blocks Mined`;
        for (let ore in oreList)
            if (document.getElementById(`${ore}Normal`) !== null)
                for (let variant in inventory[ore]) {
                    updateInventory(ore, variant);
                    if (inventory[ore][variant] >= 1)
                        visible(document.getElementById(ore + capitalize(variant)));
                }
        if (typeof data["settings"]["mutedSounds"] === "number")
            for (let sound in data["settings"]["mutedSounds"])
                if (!data["settings"]["mutedSounds"][sound])
                    document.getElementById(`mute${capitalize(sound)}`).click();
        if (typeof data["settings"]["musicVolume"] === "number") {
            document.getElementById("musicVolume").value = data["settings"]["musicVolume"];
            changeMusicVolume(data["settings"]["musicVolume"]);
        }
        if (typeof data["settings"]["spawnVolume"] === "number") {
            document.getElementById("spawnVolume").value = data["settings"]["spawnVolume"];
            changeAllVolume(data["settings"]["spawnVolume"]);
        }
        //let canContinue = false;
        if (data["settings"]["musicButton"] === "Unmute Music") {
            setTimeout(() => {
                document.getElementById("musicButton").click();
            }, 100);
        }
        if (typeof data["settings"]["toggleCaves"] === "boolean") {
            caveToggle = data["settings"]["toggleCaves"];
            toggleCaves(caveToggle);
        }
        if (typeof data["settings"]["canDisplay"] === "boolean") {
            canDisplay = data["settings"]["canDisplay"];
            changeCanDisplay(canDisplay);
        }
        if (typeof data["settings"]["warnBeforeClosing"] === "boolean") {
            warnClose = data["settings"]["warnBeforeClosing"];
            warnBeforeClosingToggle(warnClose);
        }
        if (typeof data["settings"]["stopOnRare"] === "boolean") {
            stopOnRare = data["settings"]["stopOnRare"];
            stopOnRareToggle(stopOnRare);
        }
        totalResets = data["stats"]["totalResets"] || 0;
        if (typeof data["gears"] === "object")
            if (typeof data["gears"]["inv"] === "object")
                for (let gear in data["gears"]["inv"])
                    gears[gear] = data["gears"]["inv"][gear];
            else if (data["version"] === 2)
                for (let gear in data["gears"])
                    gears[gear] = data["gears"][gear];
        if (data["version"] >= 3)
            currentGears = data["gears"]["curr"];
        else
            for (let gear in data["gears"])
                if (data["gears"][gear])
                    currentGears.push(gear);
        if (typeof data["settings"]["autoSave"] === "boolean")
            autoSave = data["settings"]["autoSave"];
        localStorage.removeItem("dataBackup");
        warnBeforeClosing();
        return true;
    } catch (error) {
        console.error(error);
        localStorage.setItem("playerData", localStorage.getItem("dataBackup"));
        window.alert("DATA CORRUPTION DETECTED, EXPORT YOUR SAVE FILE AND CONTACT A MODERATOR IN THE DISCORD");
        return false;
    }
}

let dataTimer = null;
let dataLooping = false;
function repeatDataSave() {
    dataTimer = autoSave ? setInterval(saveAllData, 2000) : null;
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
    exportDataAsFile(data, `${debug?"debug":""}data.txt`, "text/plain");
    /*let textField = document.getElementById("dataText");
    textField.value = data;
    if (confirm("Download save data as file?"))
        exportDataAsFile(data, "data.txt", "text/plain");
    else {
        textField.select();
        textField.setSelectionRange(0, 99999);
        alert("The textbox has been selected for you; make sure to copy your data to your clipboard so you don't lose it!");
    }*/
}

function importData() {
    const [file] = document.getElementById("dataFile").files;
    const reader = new FileReader();
    reader.addEventListener(
        "load",
        () => {
            try {
                const data = fromBinary(reader.result);
                console.log(data);
                localStorage.setItem("playerData", data);
                setTimeout(() => {
                    location.reload();
                }, 1000);
            } catch (error) {
                console.error(error);
                localStorage.setItem("playerData", localStorage.getItem("dataBackup"));
                window.alert("DATA CORRUPTION DETECTED, CONTACT A MODERATOR IN THE DISCORD");
            }
        },
        false,
    );
    if (!file) {
        if (confirm("You are importing nothing. This will perform a hard reset on your save file. Are you sure you want to do this?")) {
            localStorage.clear();
            location.reload();
        }
    } else {
        if (confirm("Are you sure you want to do this? Any mistakes in imported data will corrupt your savefile.")) {
            localStorage.setItem("dataBackup", localStorage.getItem("playerData"));
            clearInterval(dataTimer);
            reader.readAsText(file);
        }
    }
}

function exportDataAsFile(textToWrite, fileNameToSaveAs, fileType) {
    const textFileAsBlob = new Blob([textToWrite], { type: fileType });
    let downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL !== null) {
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        invisible(downloadLink);
        document.body.appendChild(downloadLink);
    }
    downloadLink.click();
}

function showData() {
    canMine = false;
    visible(document.getElementById("pausedGameContainer"));
    // invisible(document.getElementById("mainContent"));
}

function hideData() {
    canMine = true;
    invisible(document.getElementById("pausedGameContainer"));
    //visible(document.getElementById("mainContent"));
}

function warnBeforeClosingToggle(toggle) {
    if (typeof toggle === "boolean")
        warnClose = toggle;
    else
        warnClose = !warnClose;
    document.getElementById("warnBeforeClosingButton").innerHTML = `Warn Before Closing: ${warnClose ? "on" : "off"}`;
}

function stopOnRareToggle(toggle) {
    if (typeof toggle === "boolean")
        stopOnRare = toggle;
    else
    stopOnRare = !stopOnRare;
    document.getElementById("stopOnRareButton").innerHTML = `Stop on Rare: ${stopOnRare ? "on" : "off"}`;
}

async function warnBeforeClosing() {
    window.onbeforeunload = null;
    if (debug || warnClose) return;
    setTimeout(() => {
        window.onbeforeunload = () => "";
    }, "60000");
}

function toggleCaves(toggle) {
    if (typeof toggle === "boolean")
        caveToggle = toggle;
    else
        caveToggle = !caveToggle;
    document.getElementById("toggleCavesButton").innerHTML = `Toggle Caves: ${caveToggle ? "on" : "off"}`;
}

function resetGame() {
    if (confirm("THIS WILL RESET YOUR ENTIRE GAME. ARE YOU SURE YOU WANT TO DO THIS?")) {
        localStorage.clear();
        location.reload();
    }
}

/*function changeDataUploadType() {
    if (isVisible(document.getElementById("dataText"))) {
        invisible(document.getElementById("dataText"));
        visible(document.getElementById("dataFile"));
    } else {
        invisible(document.getElementById("dataText"));
        visible(document.getElementById("dataFile"));
    }
}*/
