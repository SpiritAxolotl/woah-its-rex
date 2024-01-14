function keepRunning() {
    keepRunningAudio.loop = true;
    keepRunningAudio.volume = 0.05;
    keepRunningAudio.play();
}

function changeMusicVolume(percent) {
    keepRunningAudio.volume = 0.05 * (percent / 100);
}

function changeAllVolume(percent) {
    vol = (percent / 100);
    chill.volume = 1*vol;
    ringing.volume = 0.4*vol;
    visionblur.volume = 0.6*vol;
    unfath.volume = 0.6*vol;
    ow.volume = 0.6*vol;
    magnificent.volume = 1*vol;
    zenith.volume = 0.6*vol;
}

function toggleMusic() {
    if (keepRunningAudio.paused) {
        keepRunningAudio.play();
        document.getElementById("musicButton").innerHTML = "Mute Music";
    } else {
        keepRunningAudio.pause();
        document.getElementById("musicButton").innerHTML = "Unmute Music";
    }
}

let canPlay = {
    "chills": true,
    "ringings": true,
    "blurs": true,
    "unfaths": true,
    "otherworldies": true,
    "metaversals": true,
    "zeniths": true
};

function changeCanPlay(str, button) {
    let text = button.innerHTML;
    text = text.substring(text.indexOf(" "));
    if (canPlay[str]) button.innerHTML = "Unmute" + text;
    else button.innerHTML = "Mute" + text;
    canPlay[str] = !canPlay[str];
}

//SOUND PLAYING

function playSound(type) {
    if (typeof type === "string") {
        switch (type) {
            case "exotic":
                if (canPlay["chills"]) {
                    chill.currentTime = 0;
                    chill.play();
                }
                break;
            case "transcendent":
                if (canPlay["ringings"]) {
                    ringing.currentTime = 0;
                    ringing.play();
                }
                break;
            case "enigmatic":
                if (canPlay["blurs"]) {
                    visionblur.currentTime = 0;
                    visionblur.play();
                }
                break;
            case "unfathomable":
                if (canPlay["unfaths"]) {
                    unfath.currentTime = 0;
                    unfath.play();
                }
                break;
            case "otherworldly":
                if (canPlay["otherworldies"]) {
                    ow.currentTime = 0;
                    ow.play();
                }
                break;
            case "magnificent":
                if (canPlay["metaversals"]) {
                    magnificent.currentTime = 0;
                    magnificent.play();
                }
                break;
            case "zenith":
                if (canPlay["zeniths"]) {
                    zenith.currentTime = 0;
                    zenith.play();
                }
                break;
        }
    } else if (typeof type === "number") {
        let prob = type;
        if (prob > 5000000000) playSound("zenith");
        else if (prob > 1500000000) playSound("magnificent");
        else if (prob > 750000000) playSound("otherworldly");
        else if (prob >= 160000000) playSound("unfathomable");
        else if (prob >= 25000000) playSound("enigmatic");
        else if (prob >= 5000000) {
            if (currentPickaxe < 8 && !(gears["infinity-collector"]))
                playSound("transcendent");
        } else if (prob >= 750000) {
            if (currentPickaxe < 7)
                playSound("exotic");
        }
    }
}
