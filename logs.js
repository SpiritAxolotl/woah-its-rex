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
    createLog(r, c, intended, obj, luck) {
        let luckModifier = 1;
        if (gears[1])
            luckModifier *= 1.1;
        if (gears[5])
            luckModifier *= 1.6;
        const maxLuck = (this.#maxLuck[currentPickaxe] * luckModifier) + 1;
        if ((obj.stack.includes("mine.js") || obj.stack.includes("caves.js")) && luck <= maxLuck) {
            if (mine[r][c] === "⬜")
                this.#spawnLogs.push([r, c, intended, luck]);
        } else {
            console.log("failed to create, ", obj.stack, luck, maxLuck);
        }
    }
    verifyLog(r, c) {
        for (let i = 0; i < this.#spawnLogs.length; i++) {
            if (this.#spawnLogs[i][0] === r && this.#spawnLogs[i][1] === c) {
                if (mine[r][c] === this.#spawnLogs[i][2]) {
                    const num = this.#spawnLogs[i][3];
                    this.#spawnLogs.splice(i, 1);
                    this.#verifiedLogs.push([mine[r][c], [r, c], new Date(), false, "Normal", num]);
                    break;
                } else {
                    console.log('failed to verify', r, c);
                }
            }
        }
    }
    verifyFind(block, r, c, variant) {
        let verified = false;
        for (let i = 0; i < this.#verifiedLogs.length; i++) {
            if (this.#verifiedLogs[i][1][0] === r && this.#verifiedLogs[i][1][1] === c) {
                if (block === this.#verifiedLogs[i][0]) {
                    this.#verifiedLogs[i][3] = true;
                    this.#verifiedLogs[i][4] = variant;
                    verified = true;
                    break;
                } else {
                    console.log("failed to verify find", block, this.#verifiedLogs[i][0]);
                }
            }
        }
        console.log(verified);
    }
    showLogs() {
        if (document.getElementById("dataExport").style.display === "block") {
                clearInterval(this.#logsTimer);
                this.#logsTimer = null;
                let element = document.createElement("p");
                if (document.getElementById("generatedLogs") !== null)
                    document.getElementById("generatedLogs").remove();
                element.id = "generatedLogs";
                document.getElementById("logHolder").appendChild(element);
                let output = "";
                for (let i = 0; i < this.#verifiedLogs.length; i++) {
                    let multi = multis[names.indexOf(this.#verifiedLogs[i][4])];
                    output += this.#verifiedLogs[i][0] + ", " + this.#verifiedLogs[i][2] + ", " + this.#verifiedLogs[i][3] + ", " + this.#verifiedLogs[i][4] + ", ";
                    output += this.#verifiedLogs[i][1][0] + ", ";
                    output += Math.floor(((1 / oreList[this.#verifiedLogs[i][0]][0]) * multi) / this.#verifiedLogs[i][5]) + ", " + Math.log10(this.#verifiedLogs[i][5] * this.#verifiedLogs[i][1][0]) + "<br>";
                }
                this.#logsTimer = setInterval(this.#reloadLogs, 50, output!==""?output:"none");
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
