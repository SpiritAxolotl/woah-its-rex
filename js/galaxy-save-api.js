/* originally written by @wrab on discord. https://discord.com/channels/733427849184411740/1003103753672601661/1196923892112048339 */

const website_name = "https://galaxy.click";
const localstorage_last_time = 0;
const last_save_time = +localStorage.getItem(localstorage_last_time) || -1;

class galaxyclass {
    constructor() {
        this.min_save_interval = 10000;
        this.dosave = true; //toggles cloud saving if every other condition is met
        this.last_save_time = 0;
        this.galaxy = undefined;
        this.logged_in = false;
        this.cloud_save = {storage: {}, time: 0};
    }
    
    setItem(name, string) {
        localStorage.setItem(name, string);
        this.cloud_save.storage[name] = string;
        
        setTimeout(() => {
            const current_time = Date.now();
            localStorage.setItem(localstorage_last_time, current_time);
            if (this.galaxy &&
                this.logged_in &&
                this.dosave &&
                current_time - this.last_save_time > this.min_save_interval
            ) {
                this.last_save_time = current_time;
                window.top.postMessage({
                    action: "save",
                    slot: 0,
                    label: "Autosave",
                    data: JSON.stringify({storage: this.cloud_save.storage, time: current_time}),
                }, website_name);
            }
        }, 100);
    }
    
    removeItem(name) {
        localStorage.removeItem(name);
        delete this.cloud_save.storage[name];
    }
    
    getItem(name) {
        return localStorage.getItem(name);
    }
    
    clear() {
        localStorage.clear();
    }
    
    load_cloud_save() {
        //replace all local storage entries with ones from cloud
        let confirm_message = "Do you want to load a cloud save?";
        confirm_message += `\nLast cloud save: ${this.convertToDate(this.cloud_save.time)}`;
        if (last_save_time > 1)
            confirm_message += `\nLast local save: ${this.convertToDate(last_save_time)}`;
        if (confirm(confirm_message)) {
            for (const i of Object.keys(this.cloud_save.storage))
                localStorage.setItem(i, this.cloud_save.storage[i]);
            localStorage.setItem(localstorage_last_time, this.cloud_save.time);
            location.reload();
        }
    }
    
    convertToDate(savetime) {
        const time = new Date(savetime);
        let dd = time.getDate();
        if (dd < 10) dd = `0${dd}`;
        let mm = time.getMonth()+1;
        if (mm < 10) mm = `0${mm}`;
        let yyyy = time.getFullYear().toString();
        let h = time.getHours();
        if (h < 10) h = `0${h}`;
        let m = time.getMinutes();
        if (m < 10) m = `0${m}`;
        return `${yyyy}-${mm}-${dd} ${h}:${m}`;
    }
}

const galaxysite = new galaxyclass();

window.addEventListener("message", e => {
    if (e.origin === website_name) {
        if (e.data.type === "info") {
            galaxysite.galaxy = e.data.galaxy;
            if (e.data.logged_in) {
                galaxysite.logged_in = true;
                window.top.postMessage({
                    action: "load",
                    slot: 0,
                }, website_name);
            }
        }
        else if (e.data.type === "save_content") {
            if (!e.data.error) {
                const data = JSON.parse(e.data.content);
                if (typeof data === "object") {
                    galaxysite.cloud_save.storage = data.storage;
                    galaxysite.cloud_save.time = +data.time || -1;
                }
            }
            else if (e.data.message === "empty_slot")
                galaxysite.cloud_save.time = -1;
            else {
                galaxysite.cloud_save.time = -1;
                galaxysite.dosave = false;
            }
            if (galaxysite.cloud_save.time > last_save_time)
                galaxysite.load_cloud_save();
        }
    }// else it may be an impostor ඞ! Probably best to ignore it.
});