class secureLogs {
    #spawnLogs;
    #verifiedLogs;
    #logsTimer;
    #maxLuck = [1, 1.2, 1.35, 1.8, 2, 5, 10, 3, 4, 20, 17.5, 30];
    constructor() {
        this.#spawnLogs = [];
        this.#verifiedLogs = [];
        this.#logsTimer = null;
    }
    createLog(y, x, intended, obj, luck) {
        let luckModifier = 1;
        if (gears["real-candilium"])
            luckModifier *= 1.1;
        if (gears["fortune-3-book"])
            luckModifier *= 1.6;
        const maxLuck = (this.#maxLuck[currentPickaxe] * luckModifier) + 1;
        if ((obj.stack.includes("mine.js") || obj.stack.includes("caves.js")) && luck <= maxLuck) {
            if (mine[y][x] === "⬜")
                this.#spawnLogs.push({y: y, x: x, intended: intended, luck: luck});
        }
    }
    verifyLog(y, x) {
        for (let i = 0; i < this.#spawnLogs.length; i++) {
            const log = this.#spawnLogs[i];
            if (log["y"] === y && log["x"] === x) {
                if (mine[y][x] === log["intended"]) {
                    this.#spawnLogs.splice(i, 1);
                    this.#verifiedLogs.push({ore: mine[y][x], y: y, x: x, date: new Date(), something: false, variant: "Normal", luck: log["luck"]});
                    break;
                } else {
                    console.log("failed to verify", r, c);
                }
            }
        }
    }
    verifyFind(block, y, x, variant) {
        let verified = false;
        for (let i = 0; i < this.#verifiedLogs.length; i++) {
            const log = this.#verifiedLogs[i];
            if (log["y"] === y && log["x"] === x) {
                if (block === log["ore"]) {
                    log["something"] = true;
                    log["variant"] = variant;
                    verified = true;
                    break;
                }
            }
        }
        console.log(verified);
    }
    showLogs() {
        if (isVisible(document.getElementById("dataExport"))) {
                clearInterval(this.#logsTimer);
                this.#logsTimer = null;
                let element = document.createElement("p");
                if (document.getElementById("generatedLogs") !== null)
                    document.getElementById("generatedLogs").remove();
                element.id = "generatedLogs";
                document.getElementById("logHolder").appendChild(element);
                let output = "";
                for (let i = 0; i < this.#verifiedLogs.length; i++) {
                    const log = this.#verifiedLogs[i];
                    const multi = variantMultis[variantNames.indexOf(log["variant"])];
                    output += `${log["ore"]}, ${log["date"]}, ${log["something"]}, ${log["variant"]}, `;
                    output += `${log["y"]}, `;
                    output +=`${Math.floor(1/oreList[log["ore"]]["prob"] * multi / log["luck"])}, ${Math.log10(log["luck"] * log["y"])}<br>`;
                }
                this.#logsTimer = setInterval(this.#reloadLogs, 50, output !== "" ? output : "none");
        } else {
            clearInterval(this.#logsTimer);
            this.#logsTimer = null;
            if (document.getElementById("generatedLogs") !== null)
                document.getElementById("generatedLogs").remove();
        }
    }
    #reloadLogs(output) {
        document.getElementById("generatedLogs").innerHTML = output;
    }
    getLuckBoosts() {
        return this.#maxLuck;
    }
}
let verifiedOres = new secureLogs();
