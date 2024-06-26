const corruptionAlert = "Your save data wasn't read properly. Contact @spaxolotl in the Discord to report a potential bug!";
const saveSuffix = dev ? "Dev" : beta ? "Beta" : "";
function saveAllData(fileQuestionMark) {
    //localStorage.setItem("game2DataChanges", true);
    let dataStorage = {
        "ores": {},
        "pickaxes": {},
        "stats": {},
        "settings": {},
        "gears": {}
    };
    
    //update this whenever the format of the data storage changes (then add if(data["version"]===num) to stuff)
    dataStorage["version"] = 4;
    for (const ore in oreList)
        dataStorage["ores"][ore] = inventory[ore];
    dataStorage["pickaxes"]["inv"] = pickaxes;
    dataStorage["pickaxes"]["curr"] = currentPickaxe;
    dataStorage["stats"]["totalMined"] = totalMined;
    dataStorage["stats"]["totalResets"] = totalResets;
    dataStorage["stats"]["totalTimePlayed"] = totalTimePlayed;
    dataStorage["settings"]["mutedSounds"] = canPlay;
    dataStorage["settings"]["toggleCaves"] = caveToggle;
    dataStorage["settings"]["canDisplay"] = canDisplay;
    dataStorage["settings"]["musicVolume"] = Number(document.getElementById("musicVolume").value);
    dataStorage["settings"]["spawnVolume"] = Number(document.getElementById("spawnVolume").value);
    dataStorage["settings"]["sellUpToVariant"] = sellUpToVariant;
    //dataStorage["settings"]["musicButton"] = Number(document.getElementById("musicButton").innerHTML);
    dataStorage["settings"]["stopOnRare"] = stopOnRare;
    dataStorage["settings"]["baseMineCapacity"] = baseMineCapacity;
    dataStorage["settings"]["warnBeforeClosing"] = warnClose;
    dataStorage["settings"]["autoSave"] = autoSave;
    dataStorage["gears"]["inv"] = gears;
    dataStorage["gears"]["curr"] = currentGears;
    if (fileQuestionMark)
        return JSON.stringify(dataStorage);
    localStorage.setItem(`playerData${saveSuffix}`, JSON.stringify(dataStorage));
}

function loadAllData() {
    localStorage.setItem(`dataBackup${saveSuffix}`, localStorage.getItem(`playerData${saveSuffix}`));
    try {
        const data = JSON.parse(localStorage.getItem(`playerData${saveSuffix}`));
        if (typeof data?.["version"] !== "number")
            return loadAllDataOld();
        
        for (const ore in data["ores"])
            if (typeof oreList[ore] === "object")
                for (const variant of variantNames)
                    inventory[ore][variant.toLowerCase()] = data["ores"][ore]?.[variant.toLowerCase()] ?? 0;
        
        if (typeof data["pickaxes"]["inv"] === "object") {
            if (data["version"] >= 4) {
                for (const pick in data["pickaxes"]["inv"])
                    pickaxes[pick] = data["pickaxes"]["inv"][pick];
                currentPickaxe = data["pickaxes"]["curr"] ?? "ol-faithful";
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
                for (const pick in data["pickaxes"]["inv"])
                    pickaxes[pickNumToStringConversion[pick]] = data["pickaxes"]["inv"][pick];
                currentPickaxe = pickNumToStringConversion[data["pickaxes"]["curr"]] ?? "ol-faithful";
            }
        }
        totalMined = data["stats"]["totalMined"] ?? 0;
        document.getElementById("blocksMined").innerHTML = `${totalMined.toLocaleString()} Blocks Mined`;
        for (const ore in oreList)
            if (document.getElementById(`${ore}Normal`) !== null)
                for (const variant in inventory[ore]) {
                    updateInventory(ore, capitalize(variant));
                    if (inventory[ore][variant] >= 1)
                        visible(document.getElementById(ore + capitalize(variant)));
                }
        
        if (typeof data["settings"]["mutedSounds"] === "number")
            for (const sound in data["settings"]["mutedSounds"])
                if (!data["settings"]["mutedSounds"][sound])
                    document.getElementById(`mute${capitalize(sound)}`).click();
        
        document.getElementById("musicVolume").value = data["settings"]["musicVolume"] ?? 50;
        changeMusicVolume(document.getElementById("musicVolume").value);
        
        document.getElementById("spawnVolume").value = data["settings"]["spawnVolume"] ?? 50;
        changeAllVolume(document.getElementById("spawnVolume").value);
        
        if (data["settings"]["musicButton"] === "Unmute Music") {
            setTimeout(() => {
                document.getElementById("musicButton").click();
            }, 100);
        }
        
        caveToggle = data["settings"]["toggleCaves"] ?? false;
        //toggleCaves(caveToggle);
        
        canDisplay = data["settings"]["canDisplay"] ?? true;
        changeCanDisplay(canDisplay);
        
        warnClose = data["settings"]["warnBeforeClosing"] ?? true;
        warnBeforeClosingToggle(warnClose);
        
        stopOnRare = data["settings"]["stopOnRare"] ?? false;
        stopOnRareToggle(stopOnRare);
        
        sellUpToVariant = data["settings"]["sellUpToVariant"] ?? "Normal";
        switchSellUpToVariant(sellUpToVariant);
        totalResets = data["stats"]["totalResets"] ?? 0;
        totalTimePlayed = data["stats"]["totalTimePlayed"] ?? 0;
        if (typeof data["gears"] === "object")
            if (typeof data["gears"]["inv"] === "object")
                for (const gear in data["gears"]["inv"])
                    gears[gear] = data["gears"]["inv"][gear] ?? false;
            else if (data["version"] === 2)
                for (const gear in data["gears"])
                    gears[gear] = data["gears"][gear] ?? false;
        if (data["version"] >= 3)
            currentGears = data["gears"]["curr"] ?? [];
        else
            for (const gear in data["gears"])
                if (data["gears"][gear])
                    currentGears.push(gear);
        if (typeof data["settings"]["autoSave"] === "boolean")
            autoSave = data["settings"]["autoSave"];
        localStorage.removeItem(`dataBackup${saveSuffix}`);
        localStorage.setItem(`playedBefore${saveSuffix}`, true);
        warnBeforeClosing();
        return true;
    } catch (error) {
        console.error(error);
        localStorage.setItem(`playerData${saveSuffix}`, localStorage.getItem(`dataBackup${saveSuffix}`));
        window.alert(corruptionAlert);
        return false;
    }
}

let dataTimer = null;
let dataLooping = false;
function repeatDataSave() {
    if (isPlaying && autoSave && (!debug || debugActuallyPlaying))
        dataTimer ??= setInterval(saveAllData, 5000);
    else
        dataTimer = null; //clearInterval(dataTimer) instead??
}

let repeatDataSaveTimer = setInterval(repeatDataSave, 5000);

function incrementTimePlayed() {
    totalTimePlayed++;
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
    const data = toBinary(saveAllData(true));
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
        "load", () => {
            try {
                const data = fromBinary(reader.result);
                console.log(data);
                localStorage.setItem(`playerData${saveSuffix}`, data);
                setTimeout(() => {
                    location.reload();
                }, 1000);
            } catch (error) {
                console.error(error);
                localStorage.setItem(`playerData${saveSuffix}`, localStorage.getItem(`dataBackup${saveSuffix}`));
                window.alert(corruptionAlert);
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
        if (confirm("Are you sure you want to do this? Any mistakes in the imported data will corrupt your savefile. (Please backup your data first)")) {
            localStorage.setItem(`dataBackup${saveSuffix}`, localStorage.getItem(`playerData${saveSuffix}`));
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
    settingsShown = true;
    canMine = false;
    clearInterval(totalTimePlayedTimer);
    visible(document.getElementById("pausedGameContainer"));
    // invisible(document.getElementById("mainContent"));
}

function hideData() {
    settingsShown = false;
    canMine = true;
    totalTimePlayedTimer = setInterval(incrementTimePlayed, 1000);
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

function switchSellUpToVariant(variant) {
    if (typeof variant === "string" && variantNames.includes(variant))
        sellUpToVariant = variant;
    else
        sellUpToVariant = variantNames[(variantNames.indexOf(sellUpToVariant) + 1) % variantNames.length];
    document.getElementById("sellUpToVariantButton").innerHTML = `Sell Up To: ${capitalize(sellUpToVariant)}`;
    updateActiveRecipe();
    let displaySellUpToVariants = document.getElementById("displaySellUpToVariants");
    let output = "";
    for (const variant of variantNames) {
        if (variantNames.indexOf(variant) > variantNames.indexOf(sellUpToVariant)) break;
        output += variantEmojis[variantNames.indexOf(variant)];
    }
    displaySellUpToVariants.innerHTML = output;
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
