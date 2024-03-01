// HELPERS
function visible(element) {
    element.classList.remove("invisible");
}
function invisible(element) {
    element.classList.add("invisible");
}
function togglevisible(element) {
    element.classList.toggle("invisible");
}
function isVisible(element) {
    return !element.classList.contains("invisible");
}

// THEMES AND SETTINGS

function showSettings(setting) {
    const elements = document.getElementsByClassName("settingsItem");
    for (let i = 0; i < elements.length; i++) {
        invisible(elements[i]);
    }
    visible(document.getElementById(setting));
}

function setStyleVariable(prop,val) {
    return document.getElementsByTagName("body")[0].style.setProperty("--"+prop,val);
}

function updateColorPickers() {
    const colorPickers = document.getElementsByClassName("colorPicker");
    
    for (let i = 0; i < colorPickers.length; i++) {
        const picker = colorPickers[i].getElementsByTagName("input")[0];
        const prop = picker.id;
        picker.value = getComputedStyle(document.body).getPropertyValue("--"+prop).trim();
    }
}
function checkColorPickers() {
    const colorPickers = document.getElementsByClassName("colorPicker");
    for (let i = 0; i < colorPickers.length; i++) {
        const picker = colorPickers[i].getElementsByTagName("input")[0];
        picker.onchange = () => {
            setStyleVariable(picker.id, picker.value);
            saveTheme();
            updateColorPickers()
        }
    }
}

function saveTheme() {
    const colorPickers = document.getElementsByClassName("colorPicker");
    for (let i = 0; i < colorPickers.length; i++) {
        const picker = colorPickers[i].getElementsByTagName("input")[0];
        localStorage.setItem(picker.id, picker.value);
    }
}
function loadTheme() {
    const colorPickers = document.getElementsByClassName("colorPicker");
    for (let i = 0; i < colorPickers.length; i++) {
        const picker = colorPickers[i].getElementsByTagName("input")[0];
        const prop = picker.id;
        const val = localStorage.getItem(prop);
        if (val) {
            setStyleVariable(prop, val);
        }
    }
}

let themes = {
    "default": {
        "bgprimary": "#020617",
        "border": "#1e293b",
        "bgsecondary": "#0f172a",
        "accent": "#22c55e",
        "error": "#ef4444",
        "text":"#ffffff"
    },
    "light": {
        "bgprimary": "#f3f4f6",
        "border": "#d1d5db",
        "bgsecondary": "#e5e7eb",
        "accent": "#22c55e",
        "error": "#ef4444",
        "text":"#000000"
    },
    "catppuccin": {
        "bgprimary":"#1e1e2e",
        "border": "#45475a", 
        "bgsecondary": "#313244",
        "accent": "#a6e3a1",
        "error":"#f38ba8",
        "text":"#ffffff"
    },
    "rose": {
        "bgprimary":"#4c0519",
        "border": "#9d174d",
        "bgsecondary":"#881337",
        "accent":"#f43f5e",
        "error":"#9f1239",
        "text":"#ffffff"
    }
}

function selectTheme(theme) {
    for (let prop in themes[theme]) {
        setStyleVariable(prop, themes[theme][prop]);
    }
    updateColorPickers();
    saveTheme();
}

document.getElementById("themeSelect").onchange = function() {
    selectTheme(this.value);
}

loadTheme();
updateColorPickers();
checkColorPickers();