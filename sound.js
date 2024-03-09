/* Copyright (C) Amber Blessing - All Rights Reserved
 
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential
Written by Amber Blessing <ambwuwu@gmail.com>, January 2024
*/
function keepRunning() {
    keepRunningAudio.loop = true;
    keepRunningAudio.volume = 0.05;
    keepRunningAudio.play();
}

function changeMusicVolume(percent) {
    percent = Number(percent);
    if (!(isNaN(percent))) {
        if (percent > 100)
            percent = 100;
        keepRunningAudio.volume = 0.05 * (percent / 100);
    }
    
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

let canPlay = [true, true, true, true, true, true, true, true];
function changeCanPlay(num, button) {
    let text = button.innerHTML;
    text = text.substring(text.indexOf(" "));
    if (canPlay[num]) {
        button.innerHTML = "Unmute" + text;
    } else {
        button.innerHTML = "Mute" + text;
    }
    canPlay[num] = !(canPlay[num]);
}

//SOUND PLAYING

function playSound(type) {
    switch (type) {
        case "exotic":
            if (canPlay[0]) {
                chill.currentTime = 0;
                chill.play();
            }
            if (stopOnRare && stopRareNum < 1)
                stopMining();
            break;
        case "transcendent":
            if (canPlay[1]) {
            ringing.currentTime = 0;
            ringing.play();
            }
            if (stopOnRare && stopRareNum < 2)
                stopMining();
            break;
        case "enigmatic":
            if (canPlay[2]) {
            visionblur.currentTime = 0;
            visionblur.play();
            }
            if (stopOnRare && stopRareNum < 3)
                stopMining();
            break;
        case "unfathomable":
            if (canPlay[3]) {
            unfath.currentTime = 0;
            unfath.play();
            }
            if (stopOnRare && stopRareNum < 4)
                stopMining();
            break;
        case "otherworldly":
            if (canPlay[4]) {
                ow.currentTime = 0;
                ow.play();
            }
            if (stopOnRare && stopRareNum < 5)
                stopMining();
            break;
        case "zenith":
            if (canPlay[6]) {
            zenith.currentTime = 0;
            zenith.play();
            }
            if (stopOnRare && stopRareNum < 7)
                stopMining();
            break;
        case "magnificent":
            if (canPlay[5]) {
                magnificent.currentTime = 0;
                magnificent.play();
            }
            if (stopOnRare && stopRareNum < 6)
                stopMining();
            break;
        case "ethereal":
            if (canPlay[7]) {
                ethereal.currentTime = 0;
                ethereal.play();
            }
            if (stopOnRare && stopRareNum < 8)
                stopMining();
            break;
    }
}