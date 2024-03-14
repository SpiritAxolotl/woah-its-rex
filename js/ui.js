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
    Array.from(document.getElementsByClassName("settingsItem")).forEach((el) => invisible(el));
    visible(document.getElementById(setting));
}

function setStyleVariable(prop, val) {
    return document.body.style.setProperty(`--${prop}`, val);
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
            updateColorPickers();
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
        if (val) setStyleVariable(prop, val);
    }
}

const themes = {
    "dark": {
        "bgprimary": "#020617",
        "bgsecondary": "#0f172a",
        "border": "#1e293b",
        "accent": "#22c55e",
        "error": "#ef4444",
        "text": "#ffffff"
    },
    "light": {
        "bgprimary": "#f3f4f6",
        "bgsecondary": "#e5e7eb",
        "border": "#d1d5db",
        "accent": "#22c55e",
        "error": "#ef4444",
        "text": "#000000"
    },
    "catppuccin": {
        "bgprimary":"#1e1e2e",
        "bgsecondary": "#313244",
        "border": "#45475a",
        "accent": "#a6e3a1",
        "error": "#f38ba8",
        "text": "#ffffff"
    },
    "rose": {
        "bgprimary": "#4c0519",
        "bgsecondary": "#881337",
        "border": "#9d174d",
        "accent": "#f43f5e",
        "error": "#9f1239",
        "text": "#ffffff"
    },
    "purple": {
        "bgprimary": "#24273a",
        "bgsecondary": "#181926",
        "border": "#45475a",
        "accent": "#22c55e",
        "error": "#ef4444",
        "text": "#b7bdf8",
        "hoverbg": "#b7bdf8",
        "hoverfg": "#181926"
    }
}

function selectTheme(theme) {
    for (const prop in themes[theme])
        setStyleVariable(prop, themes[theme][prop]);
    updateColorPickers();
    saveTheme();
}

document.getElementById("themeSelect").onchange = function() {
    selectTheme(this.value);
}

loadTheme();
updateColorPickers();
checkColorPickers();