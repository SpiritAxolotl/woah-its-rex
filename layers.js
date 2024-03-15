/* Copyright (C) Amber Blessing - All Rights Reserved
 
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential
Written by Amber Blessing <ambwuwu@gmail.com>, January 2024
*/
let oreList = {
    '🐱': { 'decimalRarity': 1 / Infinity, 'numRarity': Infinity, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '✈️': { 'decimalRarity': 1 / Infinity, 'numRarity': Infinity, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💗': { 'decimalRarity': 1 / 150000000000, 'numRarity': 150000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A distant pulse resonates with your heart, synchronising its beat with yours...', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '❤️‍🔥': { 'decimalRarity': 1 / 50000000000, 'numRarity': 50000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A compassionate warmth envelops your heart in a fiery yet comforting embrace...', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '😻': { 'decimalRarity': 1 / 5000000005, 'numRarity': 5000000005, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'holy shit is this a real cat??', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🏝️': { 'decimalRarity': 1 / 275320000, 'numRarity': 275320000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Huge, beaming crystals emerge from the ground, creating an ephemeral atmosphere...', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '✨': { 'decimalRarity': 1 / 240800000, 'numRarity': 240800000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'From every corner of festive depths, bursts of color erupt like fireworks against the velvet sky...', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⛄': { 'decimalRarity': 1 / 183640000, 'numRarity': 183640000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'In the quiet solitude of a winter landscape, a seed of ice blossoms into a testament to resilience and renewal...', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    


    '🍓': { 'decimalRarity': 1 / 560000000000, 'numRarity': 560000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "A sweet aroma guides you to one of nature's finest delicacies...", 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌳': { 'decimalRarity': 1 / 9250000000, 'numRarity': 9250000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'CAKECORE13...', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💐': { 'decimalRarity': 1 / 3750000000, 'numRarity': 3750000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "From the depths of nature's embrace, a delicate bloom unfurls, casting a fragrant aura upon its surroundings...", 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🥬': { 'decimalRarity': 1 / 2000000000, 'numRarity': 2000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A leafy green surprise decides to join the vegetable party...', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🥗': { 'decimalRarity': 1 / 800000000, 'numRarity': 800000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A state of alignment with the natural rhythms of life, sings a harmony that resonates from the inside out...', 'oreTier': 'Otherworldly', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌪️': { 'decimalRarity': 1 / 247010000, 'numRarity': 247010000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'As the vortex descends from the heavens, the atmosphere trembles with its raw power...', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌏': { 'decimalRarity': 1 / 213200000, 'numRarity': 213200000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Ancient energies resonate in the depths with the essence of primordial earth...', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌲': { 'decimalRarity': 1 / 71000000, 'numRarity': 71000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🌲 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎃': { 'decimalRarity': 1 / 69000000, 'numRarity': 69000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎃 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎍': { 'decimalRarity': 1 / 35000000, 'numRarity': 35000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎍 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎄': { 'decimalRarity': 1 / 12500000, 'numRarity': 12500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎄 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪵': { 'decimalRarity': 1 / 10000000, 'numRarity': 10000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🪵 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌻': { 'decimalRarity': 1 / 9500000, 'numRarity': 9500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🌻 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🍁': { 'decimalRarity': 1 / 8900000, 'numRarity': 8900000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🍁 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    


    "🏯": { 'decimalRarity': 1 / 430000000000, 'numRarity': 430000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Past architecture laughs in the face of the present and its lack of grandeur...', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🏰': { 'decimalRarity': 1 / 8888888888, 'numRarity': 8888888888, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'An essence of royalty graces the air of majestic opulence...', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌇': { 'decimalRarity': 1 / 4300000000, 'numRarity': 4300000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'The city shines bright as the rising sun illuminates it...', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🥉': { 'decimalRarity': 1 / 444444444, 'numRarity': 444444444, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'turn the shower off...', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪞': { 'decimalRarity': 1 / 426800050, 'numRarity': 426800050, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'You embrace the beauty of the grayscale world, where light and shadow dance in a timeless symphony of existence...', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔩': { 'decimalRarity': 1 / 420836000, 'numRarity': 420836000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Your consciousness expands, transcending the limitations of mortal perception...', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🧲': { 'decimalRarity': 1 / 43500000, 'numRarity': 43500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🧲 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪬': { 'decimalRarity': 1 / 37000000, 'numRarity': 37000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🪬 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🧨': { 'decimalRarity': 1 / 31500000, 'numRarity': 31500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🧨 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔗': { 'decimalRarity': 1 / 25000000, 'numRarity': 25000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔗 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪙': { 'decimalRarity': 1 / 15000000, 'numRarity': 15000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🪙 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🗿': { 'decimalRarity': 1 / 12000000, 'numRarity': 12000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🗿 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪚': { 'decimalRarity': 1 / 9600000, 'numRarity': 9600000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🪚 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪜': { 'decimalRarity': 1 / 7950000, 'numRarity': 7950000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🪜 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    


    "🦚": { 'decimalRarity': 1 / 245000000000, 'numRarity': 245000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Through the mist, the brief glint of a hundred eyes freezes you dead in your tracks...', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🚿': { 'decimalRarity': 1 / 6000000000, 'numRarity': 6000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A refreshing cascade rejuvenates the area...', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '👁️': { 'decimalRarity': 1 / 1920000000, 'numRarity': 1920000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A cosmic anomaly of nothingness emerges past the boundaries of an unseen realm...', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💸': { 'decimalRarity': 1 / 754000000, 'numRarity': 754000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Softly descending, celestial radiance brings serenity to the infinite depths...', 'oreTier': 'Otherworldly', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⌛': { 'decimalRarity': 1 / 750000000, 'numRarity': 750000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "Seconds pass, centuries pass, what's the difference? We are all mere specks of life in the concept of eternity...", 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🧵': { 'decimalRarity': 1 / 201061929, 'numRarity': 201061929, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A geometrical marvel adds an element of mathematical elegance...', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🕯️': { 'decimalRarity': 1 / 62500000, 'numRarity': 62500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🕯️ Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🕋': { 'decimalRarity': 1 / 55000000, 'numRarity': 55000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🕋 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎨': { 'decimalRarity': 1 / 44000000, 'numRarity': 44000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎨 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎴': { 'decimalRarity': 1 / 13450000, 'numRarity': 13450000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎴 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🥽': { 'decimalRarity': 1 / 12350000, 'numRarity': 12350000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🥽 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪄': { 'decimalRarity': 1 / 9460000, 'numRarity': 9460000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🪄 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎭': { 'decimalRarity': 1 / 7650000, 'numRarity': 7650000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎭 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    


    "👽": { 'decimalRarity': 1 / 750000000000, 'numRarity': 750000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Once travelling the vast vacuum of outer space, extraterrestrial life made its way to the abyssal hadopelagic zone...', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🐋': { 'decimalRarity': 1 / 8000000000, 'numRarity': 8000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'In the vast expanse of the ocean, where the horizon stretches endlessly and the waters teem with life, a beautiful whale emerges from the depths...', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💫': { 'decimalRarity': 1 / 2000000000, 'numRarity': 2000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Celestial bodies collide illuminating the depths with cosmic enchantment...', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪩': { 'decimalRarity': 1 / 999999999, 'numRarity': 999999999, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Your vision expands as your head spikes with an adrenaline rush...', 'oreTier': 'Otherworldly', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '👿': { 'decimalRarity': 1 / 750000000, 'numRarity': 750000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Cosmic energies radiate from the depths, casting an enigmatic darkness...', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌀': { 'decimalRarity': 1 / 618000000, 'numRarity': 618000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A giant celestial body emerges, releasing cosmic energy that absorbs nearby quasars...', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔱': { 'decimalRarity': 1 / 70000000, 'numRarity': 70000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔱 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '👑': { 'decimalRarity': 1 / 65000000, 'numRarity': 65000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '👑 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🐟': { 'decimalRarity': 1 / 26000000, 'numRarity': 26000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🐟 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🫧': { 'decimalRarity': 1 / 8750000, 'numRarity': 8750000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🫧 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🤿': { 'decimalRarity': 1 / 8670000, 'numRarity': 8670000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🤿 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎣': { 'decimalRarity': 1 / 8230000, 'numRarity': 8230000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎣 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⛵': { 'decimalRarity': 1 / 7895000, 'numRarity': 7895000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⛵ Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    


    "🪤": { 'decimalRarity': 1 / 800000000000, 'numRarity': 800000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'An extermination held through a siege, as success is just one stakeout away...', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🏔️': { 'decimalRarity': 1 / 5500000000, 'numRarity': 5500000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A tear comes to your eye as you gaze upon a beautiful landscape...', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌈': { 'decimalRarity': 1 / 2750000000, 'numRarity': 2750000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A vivid spectrum bursts forth, painting the surroundings with radiant color...', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🧊': { 'decimalRarity': 1 / 583000000, 'numRarity': 583000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A frigid touch brings an icy embrace from the depths...', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '❄️': { 'decimalRarity': 1 / 386500000, 'numRarity': 386500000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'The world around you takes on a surreal quality as if draped in a cloak of frozen silence...', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💎': { 'decimalRarity': 1 / 170000000, 'numRarity': 170000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Unearthed from the abyss, a dazzling gemstone emerges, casting a mesmerizing glow upon you...', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '☄️': { 'decimalRarity': 1 / 72500000, 'numRarity': 72500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '☄️ Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔮': { 'decimalRarity': 1 / 60000000, 'numRarity': 60000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔮 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔋': { 'decimalRarity': 1 / 36000000, 'numRarity': 36000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔋 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💍': { 'decimalRarity': 1 / 15000000, 'numRarity': 15000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '💍 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🥏': { 'decimalRarity': 1 / 8000000, 'numRarity': 8000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🥏 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⚜️': { 'decimalRarity': 1 / 6250000, 'numRarity': 6250000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⚜️ Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💠': { 'decimalRarity': 1 / 6000000, 'numRarity': 6000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '💠 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    


    "🤖": { 'decimalRarity': 1 / 640000000000, 'numRarity': 640000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "Come to think of it, robots and humans aren't so unalike.. their wires for our veins, their electric current for our bloodstream and their CPU for our brains...", 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⚠️': { 'decimalRarity': 1 / 6666666666, 'numRarity': 6666666666, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'EXTREMELY LOUD INCORRECT BUZZER...', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎆': { 'decimalRarity': 1 / 3000000000, 'numRarity': 3000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A sparkling burst appears as dazzling fireworks lights up the scene...', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🧀': { 'decimalRarity': 1 / 618000001, 'numRarity': 618000001, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'As the scent envelops you, your mouth may water in anticipation of the delectable flavors that await...', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌌': { 'decimalRarity': 1 / 550000000, 'numRarity': 550000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'An infinite collection of galaxies converge creating an enchanting radiance...', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🥀': { 'decimalRarity': 1 / 538000000, 'numRarity': 538000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "With bated breath, you stand paralyzed, engulfed by the suffocating grip of fear as the terrible beast's gaze falls upon you...", 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎇': { 'decimalRarity': 1 / 67500000, 'numRarity': 67500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎇 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔳': { 'decimalRarity': 1 / 46000000, 'numRarity': 46000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔳 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⏹️': { 'decimalRarity': 1 / 29000000, 'numRarity': 29000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⏹️ Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🧩': { 'decimalRarity': 1 / 14500000, 'numRarity': 14500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🧩 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔔': { 'decimalRarity': 1 / 12250000, 'numRarity': 12250000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔔 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⚗️': { 'decimalRarity': 1 / 9750000, 'numRarity': 9750000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⚗️ Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🧪': { 'decimalRarity': 1 / 7500000, 'numRarity': 7500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🧪 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    "🦴": { 'decimalRarity': 1 / 175000000000, 'numRarity': 175000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Deep within the arid sands lay fossils of an olden age, one can only wonder what beasts roamed the earth back then...', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🐪': { 'decimalRarity': 1 / 7800000000, 'numRarity': 7800000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A camel walks across the huge Sahara...', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🏵️': { 'decimalRarity': 1 / 2600000000, 'numRarity': 2600000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A flower imparts a fleeting beauty to the terrain...', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪐': { 'decimalRarity': 1 / 709000750, 'numRarity': 709000750, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Like tendrils of gentle embrace, a serene mist glides through the air...', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💥': { 'decimalRarity': 1 / 375000000, 'numRarity': 375000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Chaos reigns supreme as the forces of destruction sweep across the land...', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔥': { 'decimalRarity': 1 / 160000000, 'numRarity': 160000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'oh wow 🔥🔥🔥...', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔆': { 'decimalRarity': 1 / 75000000, 'numRarity': 75000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔆 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⭐': { 'decimalRarity': 1 / 70600600, 'numRarity': 70600600, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⭐ Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎀': { 'decimalRarity': 1 / 31000000, 'numRarity': 31000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎀 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🗡️': { 'decimalRarity': 1 / 13000000, 'numRarity': 13000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🗡️ Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📟': { 'decimalRarity': 1 / 8750000, 'numRarity': 8750000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '📟 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⚱️': { 'decimalRarity': 1 / 7467000, 'numRarity': 7467000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⚱️ Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🖍️': { 'decimalRarity': 1 / 6800000, 'numRarity': 6800000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🖍️ Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    


    "🎩": { 'decimalRarity': 1 / 300500000000, 'numRarity': 300500000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'wanna see a magic trick ^w^...', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💵': { 'decimalRarity': 1 / 8900000000, 'numRarity': 8900000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'MONEY MONEY KACHINGGGG JACKPOT...', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪅': { 'decimalRarity': 1 / 3250000000, 'numRarity': 3250000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Effervescently, festive confetti materializes bringing bursts of celebratory charm to the surroundings...', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '👀': { 'decimalRarity': 1 / 955200890, 'numRarity': 955200890, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'In this tumultuous symphony of the senses, time loses its meaning, and everything becomes a mere illusion...', 'oreTier': 'Otherworldly', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌟': { 'decimalRarity': 1 / 257280000, 'numRarity': 257280000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'In the far reaches of outer space, a gleaming light catches your attention...', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📝': { 'decimalRarity': 1 / 200000000, 'numRarity': 200000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'In this wondrous realm, the lines between fantasy and reality blur...', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⌚': { 'decimalRarity': 1 / 52000000, 'numRarity': 52000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⌚ Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🏆': { 'decimalRarity': 1 / 38000000, 'numRarity': 38000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🏆 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🗜️': { 'decimalRarity': 1 / 42000000, 'numRarity': 42000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🗜️ Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎲': { 'decimalRarity': 1 / 7777777, 'numRarity': 7777777, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎲 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '✂️': { 'decimalRarity': 1 / 7000000, 'numRarity': 7000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '✂️ Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🃏': { 'decimalRarity': 1 / 5500000, 'numRarity': 5500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🃏 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⚙️': { 'decimalRarity': 1 / 5000000, 'numRarity': 5000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⚙️ Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    
    
    '🫶': { 'decimalRarity': 1 / 1000000000000, 'numRarity': 1000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A heartfelt gesture beckons you closer, both physically and mentally...', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎉': { 'decimalRarity': 1 / 1000000000000, 'numRarity': 1000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'YIPPEEEE YIPEYIPEYIPEYIPE YIIIPPPPEEEEEEEEEE!!!...', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🧌': { 'decimalRarity': 1 / 696969696969, 'numRarity': 696969696969, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'WHAT ARE YOU DOING IN MY SWAMP?!!', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '♾️': { 'decimalRarity': 1 / 75000000000, 'numRarity': 75000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'life goes on and on and on and on and on and on and on and on...', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💅': { 'decimalRarity': 1 / 11201200200, 'numRarity': 11201200200, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'GURLLLLLLL NO WAYYYYYYYY OMGGGGGGGGG...', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '😁': { 'decimalRarity': 1 / 9000000000, 'numRarity': 9000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Nothing bad was ever in this layer...', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪢': { 'decimalRarity': 1 / 8181818181, 'numRarity': 8181818181, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Halfheartedly sauntering into existence, a lackluster piece of twine makes a feeble attempt at garnering attention, or not...', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🫃': { 'decimalRarity': 1 / 6600000000, 'numRarity': 6600000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Why did I let someone convince me to add this...', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    
    
    '🪽': { 'decimalRarity': 1 / 260000000000, 'numRarity': 260000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'The wings of glory travelled with you to this world, but are now free to roam the skies...', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🍃': { 'decimalRarity': 1 / 13500000000, 'numRarity': 13500000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Leaves of green elegantly glide through the sky to wherever their aerial current leads...', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪶': { 'decimalRarity': 1 / 2060000000, 'numRarity': 2060000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Dancing on the air, this feather is one of the many as part of something much greater...', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌦️': { 'decimalRarity': 1 / 275000000, 'numRarity': 275000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'As the storm dissipates, a bright light shines upon you...', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌩️': { 'decimalRarity': 1 / 175000000, 'numRarity': 175000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'The sky darkens, yet beautiful streaks of electrical light zap the ground below...', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⛈️': { 'decimalRarity': 1 / 74000000, 'numRarity': 74000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⛈️ Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪁': { 'decimalRarity': 1 / 45500000, 'numRarity': 45500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🪁 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪂': { 'decimalRarity': 1 / 30000000, 'numRarity': 30000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🪂 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌨️': { 'decimalRarity': 1 / 25000000, 'numRarity': 25000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🌨️ Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌥️': { 'decimalRarity': 1 / 14400000, 'numRarity': 14400000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🌥️ Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌤️': { 'decimalRarity': 1 / 7800000, 'numRarity': 7800000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🌤️ Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌧️': { 'decimalRarity': 1 / 7000000, 'numRarity': 7000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🌧️ Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎐': { 'decimalRarity': 1 / 5500000, 'numRarity': 5500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎐 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    
    
    '🔫': { 'decimalRarity': 1 / 615000000000, 'numRarity': 615000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Your nerves spike to an all time high as your body starts to tremble in fear...', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '👾': { 'decimalRarity': 1 / 9000000000, 'numRarity': 9000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A wave of nostalgia sweeps over you as 8-bit sound effects take you back to where it all began...', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🏹': { 'decimalRarity': 1 / 4210000000, 'numRarity': 4210000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "A bow fires an arrow, whistling through the wind as it's poised to pierce its target...", 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💣': { 'decimalRarity': 1 / 771100000, 'numRarity': 771100000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "Fuse lighted, explosive placed, all that's left is to wait for chaos and catastrophe to ensue...", 'oreTier': 'Otherworldly', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔨': { 'decimalRarity': 1 / 540000000, 'numRarity': 540000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Where scents of sawdust mingled with the sharp tang of metal, there lie a beautiful hammer...', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪓': { 'decimalRarity': 1 / 82000000, 'numRarity': 82000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🪓 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪃': { 'decimalRarity': 1 / 12210000, 'numRarity': 12210000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🪃 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🛡️': { 'decimalRarity': 1 / 9980000, 'numRarity': 9980000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🛡️ Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    
    
    '🗝️': { 'decimalRarity': 1 / 420000000000, 'numRarity': 420000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'You thought the key to this world was special? Just you wait until this one finds its designated lock...', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪝': { 'decimalRarity': 1 / 75000000000, 'numRarity': 75000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'As graceful as a key may look, breaking a lock with this is infinitely cooler...', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪡': { 'decimalRarity': 1 / 23000000000, 'numRarity': 23000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "Why did you make a lacklustre key to this world when you could've just lockpicked it? Minimal brain cells I swear...", 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🛎️': { 'decimalRarity': 1 / 4730000000, 'numRarity': 4730000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A timeless ringing severes your hearing...', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🚧': { 'decimalRarity': 1 / 1100000000, 'numRarity': 1100000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A feeling of authorisation stops you in your tracks, giving you the inclination to turn back...', 'oreTier': 'Otherworldly', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⛓️': { 'decimalRarity': 1 / 345000000, 'numRarity': 345000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Silver nuggets conjugate to lock an eternal presence from you...', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔏': { 'decimalRarity': 1 / 243800000, 'numRarity': 243800000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'An unknown mystery is revealed as a key is summoned to you...', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🖇️': { 'decimalRarity': 1 / 31337000, 'numRarity': 31337000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🖇️ Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔑': { 'decimalRarity': 1 / 12700000, 'numRarity': 12700000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔑 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔒': { 'decimalRarity': 1 / 9900000, 'numRarity': 9900000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔒 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    
    
    '💰': { 'decimalRarity': 1 / 857000000000, 'numRarity': 857000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A silky bag showers you with money, scattering riches all around...', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    "💞": { 'decimalRarity': 1 / 96300000000, 'numRarity': 96300000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Though it was thought impossible, an intertwining aura of love blesses two lucky individuals...', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🚽': { 'decimalRarity': 1 / 20240000000, 'numRarity': 20240000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "Don't even THINK about it...", 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📽️': { 'decimalRarity': 1 / 3780000000, 'numRarity': 3780000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "You're alone, and yet you feel the eyes of millions stare upon you through a peculiar lens...", 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🧂': { 'decimalRarity': 1 / 1337000000, 'numRarity': 1337000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "As if on the seaside, the air tastes of salt, yet there's the faint sound of yelling and profanity in the distance...", 'oreTier': 'Otherworldly', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔪': { 'decimalRarity': 1 / 632000000, 'numRarity': 632000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Life is a beautiful thing, and all it takes is a sharp slash of steel to take...', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💔': { 'decimalRarity': 1 / 155000000, 'numRarity': 155000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '💔 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🍆': { 'decimalRarity': 1 / 69696969, 'numRarity': 69696969, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🍆 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🖱️': { 'decimalRarity': 1 / 11101000, 'numRarity': 11101000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🖱️ Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⌨️': { 'decimalRarity': 1 / 10010000, 'numRarity': 10010000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⌨️ Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💻': { 'decimalRarity': 1 / 6320000, 'numRarity': 6320000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '💻 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    
    
    '⚖️': { 'decimalRarity': 1 / 123321000000, 'numRarity': 123321000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'You feel your fate hang in the balance, as every one of your actions are weighed against one another...', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎓': { 'decimalRarity': 1 / 7900000000, 'numRarity': 7900000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'An influx of knowledge passes you by as you reap the reward of years of turmoil...', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📍': { 'decimalRarity': 1 / 4321000000, 'numRarity': 4321000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Mark after mark, record after record, the earth below unfolds its interior on paper before you...', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📌': { 'decimalRarity': 1 / 1230000000, 'numRarity': 1230000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'You briefly see the mine in all its splendor, as if all its intricacies had been mapped to a tee...', 'oreTier': 'Otherworldly', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔎': { 'decimalRarity': 1 / 725000000, 'numRarity': 725000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Through the glass, you gain a feeling of omniscience as your vision achieves clarity...', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🖊️': { 'decimalRarity': 1 / 165000000, 'numRarity': 165000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A mystical object of creativity draws in a reality of imagination...', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📚': { 'decimalRarity': 1 / 48100000, 'numRarity': 48100000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '📚 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📐': { 'decimalRarity': 1 / 34000000, 'numRarity': 34000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '📐 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📖': { 'decimalRarity': 1 / 16000000, 'numRarity': 16000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '📖 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🧠': { 'decimalRarity': 1 / 15500000, 'numRarity': 15500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🧠 Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '✏️': { 'decimalRarity': 1 / 8200000, 'numRarity': 8200000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '✏️ Has Spawned!', 'oreTier': 'Transcendent', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    
    
    '🩸': { 'decimalRarity': 1 / 13000000000000, 'numRarity': 13000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "You.. would t- take my life as a t- trophy..? So be it..! Clover.. I wish y- you all the luck you b- bestowed upon me back. ..You'll n- need it...", 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🚫': { 'decimalRarity': 1 / 666666666666, 'numRarity': 666666666666, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "That's not.. possible.. how? What do you want from me? I.. don't have anything more to offer you...", 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💢': { 'decimalRarity': 1 / 26000000000, 'numRarity': 26000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "Why do you persist? What are you trying to prove?! I don't want to have to use my final gambit.. but I will if I have to...", 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔇': { 'decimalRarity': 1 / 3300000000, 'numRarity': 3300000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Do not speak further, for I know your determination will falter...', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🛑': { 'decimalRarity': 1 / 1000000000, 'numRarity': 1000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A defence breach?! No.. you have not infiltrated me yet...', 'oreTier': 'Otherworldly', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⭕': { 'decimalRarity': 1 / 600000000, 'numRarity': 600000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "You're still here? Very well. Do not say you were never warned...", 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔕': { 'decimalRarity': 1 / 225000000, 'numRarity': 225000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "You shouldn't be here. Turn back while you still can...", 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    
    
    '⚕️': { 'decimalRarity': 1 / 50000000000, 'numRarity': 50000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'Gently materializing, a healing symbol radiates a serene energy, offering tranquility...', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌙': { 'decimalRarity': 1 / 2626262626, 'numRarity': 2626262626, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'Lunar rays of light dance upon your iris, captivating your adoring gaze...', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪔': { 'decimalRarity': 1 / 2000000000, 'numRarity': 2000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'A lamp illuminates everything around you...', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎷': { 'decimalRarity': 1 / 2500000000, 'numRarity': 2500000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'A jazzed melody fills the room with rhythmic notes...', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🧫': { 'decimalRarity': 1 / 4000000000, 'numRarity': 4000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'Under the watchful gaze, the bacteria undergo a myriad of transformations...', 'oreTier': 'Zenith', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🩺': { 'decimalRarity': 1 / 800000000, 'numRarity': 800000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'The heartbeats grow louder...', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌡️': { 'decimalRarity': 1 / 3000000000, 'numRarity': 3000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'As you stand amid an increasingly sweltering atmosphere, the air grows hotter and hotter...', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🛸': { 'decimalRarity': 1 / 1000000000, 'numRarity': 1000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'The sky becomes a canvas of extraterrestrial wonder as aliens fly everywhere...', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪘': { 'decimalRarity': 1 / 500000000, 'numRarity': 500000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'The bass of drums grow increasingly louder and louder...', 'oreTier': 'Metaversal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💱': { 'decimalRarity': 1 / 180000000, 'numRarity': 180000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'Essences of exchange and trade fall through the depths, filling the cosmos with currency...', 'oreTier': 'Otherworldly', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💊': { 'decimalRarity': 1 / 800000000, 'numRarity': 800000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'Taking this will for sure get you dizzy...', 'oreTier': 'Otherworldly', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🍄': { 'decimalRarity': 1 / 250000000, 'numRarity': 250000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'OH MY GOD ITS THE LAST OF US PART 2024 SOMEONE SAVE US...', 'oreTier': 'Otherworldly', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🥁': { 'decimalRarity': 1 / 100000000, 'numRarity': 100000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'The drums of liberation echo closer and closer...', 'oreTier': 'Otherworldly', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🕸️': { 'decimalRarity': 1 / 40000000, 'numRarity': 40000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'As you struggle against the silken embrace of the web, you feel its delicate fibers tightening around you...', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔭': { 'decimalRarity': 1 / 15000000, 'numRarity': 15000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'Unveiling cosmic wonders, an unknown gadget reveals the unseen...', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪇': { 'decimalRarity': 1 / 20000000, 'numRarity': 20000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'Rhythmic and lively beats infuse the air with a festive atmosphere...', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🧬': { 'decimalRarity': 1 / 70000000, 'numRarity': 70000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'Mysteriously emerging, a double-helix subtly unveils the secrets encoded within the fabric of existence...', 'oreTier': 'Unfathomable', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📡': { 'decimalRarity': 1 / 8000000, 'numRarity': 8000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '📡 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎹': { 'decimalRarity': 1 / 10000000, 'numRarity': 10000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '🎹 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💉': { 'decimalRarity': 1 / 17500000, 'numRarity': 17500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '💉 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🍥': { 'decimalRarity': 1 / 27500000, 'numRarity': 27500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '🍥 Has Spawned!', 'oreTier': 'Enigmatic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    
    '🍀': { 'decimalRarity': 1 / 444400000000000, 'numRarity': 444400000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'This is it..? The symbol of luck itself, a simple four-leafed clover..?', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '☘️': { 'decimalRarity': 1 / 33300000000000, 'numRarity': 33300000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A peculiar three-leafed clover.. there must be more to this strange aura it emanates, this feels.. incomplete...', 'oreTier': 'Ethereal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    
    '🤍': { 'decimalRarity': 1 / 2000000, 'numRarity': 2000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🤍 Has Spawned!', 'oreTier': 'Exotic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🖤': { 'decimalRarity': 1 / 1750000, 'numRarity': 1750000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🖤 Has Spawned!', 'oreTier': 'Exotic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🤎': { 'decimalRarity': 1 / 1500000, 'numRarity': 1500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🤎 Has Spawned!', 'oreTier': 'Exotic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💜': { 'decimalRarity': 1 / 1250000, 'numRarity': 1250000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '💜 Has Spawned!', 'oreTier': 'Exotic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '❤️': { 'decimalRarity': 1 / 1000000, 'numRarity': 1000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '❤️ Has Spawned!', 'oreTier': 'Exotic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🧡': { 'decimalRarity': 1 / 950000, 'numRarity': 950000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🧡 Has Spawned!', 'oreTier': 'Exotic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💛': { 'decimalRarity': 1 / 900000, 'numRarity': 900000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '💛 Has Spawned!', 'oreTier': 'Exotic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💙': { 'decimalRarity': 1 / 800000, 'numRarity': 800000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '💙 Has Spawned!', 'oreTier': 'Exotic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '💚': { 'decimalRarity': 1 / 750000, 'numRarity': 750000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '💚 Has Spawned!', 'oreTier': 'Exotic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⚫': { 'decimalRarity': 1 / 100, 'numRarity': 100, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🟤': { 'decimalRarity': 1 / 90, 'numRarity': 90, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🟣': { 'decimalRarity': 1 / 80, 'numRarity': 80, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔴': { 'decimalRarity': 1 / 70, 'numRarity': 70, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🟠': { 'decimalRarity': 1 / 60, 'numRarity': 60, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🟡': { 'decimalRarity': 1 / 55, 'numRarity': 55, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔵': { 'decimalRarity': 1 / 50, 'numRarity': 50, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🟢': { 'decimalRarity': 1 / 45, 'numRarity': 45, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🟪': { 'decimalRarity': 1 / 40, 'numRarity': 40, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🟥': { 'decimalRarity': 1 / 35, 'numRarity': 35, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🟧': { 'decimalRarity': 1 / 30, 'numRarity': 30, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    
    
    '❔' : { 'decimalRarity': 1 / 1111111111, 'numRarity': 1111111111, 'hasLog': true, 'isBreakable': false, 'caveExclusive': false, 'spawnMessage': ':trol:', 'oreTier': 'Otherworldly', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📘': { 'decimalRarity': 1 / 1900000, 'numRarity': 1900000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '📘 Has Spawned!', 'oreTier': 'Exotic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📙': { 'decimalRarity': 1 / 1500500, 'numRarity': 1500500, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '📙 Has Spawned!', 'oreTier': 'Exotic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📕': { 'decimalRarity': 1 / 1230560, 'numRarity': 1230560, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '📕 Has Spawned!', 'oreTier': 'Exotic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📗': { 'decimalRarity': 1 / 854000, 'numRarity': 854000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '📗 Has Spawned!', 'oreTier': 'Exotic', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⏏️': { 'decimalRarity': 1 / 300000, 'numRarity': 300000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Surreal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '▶️': { 'decimalRarity': 1 / 250000, 'numRarity': 250000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Surreal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⏸️': { 'decimalRarity': 1 / 200000, 'numRarity': 200000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Surreal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⏯️': { 'decimalRarity': 1 / 175000, 'numRarity': 175000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Surreal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⏺️': { 'decimalRarity': 1 / 100000, 'numRarity': 100000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Surreal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⏭️': { 'decimalRarity': 1 / 90000, 'numRarity': 90000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Surreal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⏮️': { 'decimalRarity': 1 / 75000, 'numRarity': 75000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Master', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⏩': { 'decimalRarity': 1 / 70000, 'numRarity': 70000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Master', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⏪': { 'decimalRarity': 1 / 60000, 'numRarity': 60000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Master', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⏬': { 'decimalRarity': 1 / 50000, 'numRarity': 50000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Master', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⏫': { 'decimalRarity': 1 / 25000, 'numRarity': 25000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Rare', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '✴️': { 'decimalRarity': 1 / 20000, 'numRarity': 20000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Surreal', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '◀️': { 'decimalRarity': 1 / 20000, 'numRarity': 20000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Rare', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔼': { 'decimalRarity': 1 / 17500, 'numRarity': 17500, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Rare', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔽': { 'decimalRarity': 1 / 15000, 'numRarity': 15000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Rare', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '➡️': { 'decimalRarity': 1 / 10000, 'numRarity': 10000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Rare', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '↖️': { 'decimalRarity': 1 / 9000, 'numRarity': 9000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Uncommon', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '↘️': { 'decimalRarity': 1 / 5000, 'numRarity': 5000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Uncommon', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⬇️': { 'decimalRarity': 1 / 3000, 'numRarity': 3000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Uncommon', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⬆️': { 'decimalRarity': 1 / 2500, 'numRarity': 2500, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Uncommon', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⬅️': { 'decimalRarity': 1 / 1750, 'numRarity': 1750, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Uncommon', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '↪️': { 'decimalRarity': 1 / 1500, 'numRarity': 1500, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Uncommon', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '↩️': { 'decimalRarity': 1 / 1250, 'numRarity': 1250, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Uncommon', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⤴️': { 'decimalRarity': 1 / 1000, 'numRarity': 1000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Uncommon', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '⤵️': { 'decimalRarity': 1 / 750, 'numRarity': 750, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔀': { 'decimalRarity': 1 / 500, 'numRarity': 500, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔁': { 'decimalRarity': 1 / 300, 'numRarity': 300, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔂': { 'decimalRarity': 1 / 250, 'numRarity': 250, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔄': { 'decimalRarity': 1 / 175, 'numRarity': 175, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🔃': { 'decimalRarity': 1 / 100, 'numRarity': 100, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    
    
    
    '🟫': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🧱': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌫️': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌊': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪨': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '☢️': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌵': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📰': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎂': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🪈': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🦠': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '☣️': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🎵': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '❓': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '☁️': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '📺': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🚪': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '🌐': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '♟️': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '✖️': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': false, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    '❌': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },


    "☯️" : { 'decimalRarity': 1 / 987656789, 'numRarity': 987656789, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Through light and darkness, only one may guide you to the truth...', 'oreTier': 'Interdimensional', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    "⛏️": { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': false, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    "⚪": { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 },
    "🟩": { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common', 'normalAmt': 0, 'electrifiedAmt': 0, 'radioactiveAmt': 0, 'explosiveAmt': 0 }
}
let variantInvNames = ["normalAmt", "electrifiedAmt", "radioactiveAmt", "explosiveAmt"];
//ALL LAYERS
const layerList = {
"dirtLayer" : ["🍓", "🌳", "💐", "🥗", "🌪️", "🌏", "🌲", "🎃", "🎍", "🎄", "🪵", "🌻", "🍁", "🟫"],
"dirtLayer2" : ["🍓", "🌳", "💐", "🥬", "🥗", "🌪️", "🌏", "🌲", "🎃", "🎍", "🎄", "🪵", "🌻", "🍁", "🟫"],
"brickLayer" : ["🏯", "🏰", "🌇", "🥉", "🪞", "🔩", "🧲", "🪬", "🧨", "🔗", "🪙", "🗿", "🪚", "🪜", "🧱"],
"foggyLayer" : ["🦚", "🚿", "👁️", "💸", "⌛", "🧵", "🕯️", "🕋", "🎨", "🎴", "🥽", "🪄", "🎭", "🌫️"],
"waterLayer" : ["👽", "🐋", "💫", "🪩", "👿", "🌀", "🔱", "👑", "🐟", "🫧", "🤿", "🎣", "⛵", "🌊"],
"rockLayer" : ["🪤", "🏔️", "🌈", "🧊", "❄️", "💎", "☄️", "🔮", "🔋", "💍", "🥏", "⚜️", "💠", "🪨"],
"radioactiveLayer" : ["🤖", "⚠️", "🎆", "🧀", "🌌", "🥀", "🎇", "🔳", "⏹️", "🧩", "🔔", "⚗️", "🧪", "☢️"],
"cactusLayer" : ["🦴", "🐪", "🏵️", "🪐", "💥", "🔥", "🔆", "⭐", "🎀", "🗡️", "📟", "⚱️", "🖍️", "🌵"],
"paperLayer" : ["🎩", "💵", "🪅", "👀", "🌟", "📝", "⌚", "🗜️", "🏆", "🎲", "✂️", "🃏", "⚙️", "📰"],
"worldOneCommons" : ["🤍", "🖤", "🤎", "💜", "❤️", "🧡", "💛", "💙", "💚", "⚫", "🟤", "🟣", "🔴", "🟠", "🟡", "🔵", "🟢", "🟪", "🟥", "🟧"],
"sillyLayer" : ["🎉", "🧌", "♾️", "💅", "😁", "🪢", "🫃", "🎂"],
"fluteLayer" : ["🫶", "🪈"],
"cloudLayer" : ["🪽", "🍃", "🪶", "🌦️", "🌩️", "⛈️", "🪁", "🪂", "🌨️", "🌥️", "🌤️", "🌧️", "🎐", "☁️"],
"tvLayer" : ["🔫", "👾", "🏹", "💣", "🔨", "🪓", "🪃", "🛡️", "📺"],
"doorLayer" : ["🗝️", "🪝", "🪡", "🛎️", "🚧", "⛓️", "🔏", "🖇️", "🔑", "🔒", "🚪"],
"globeLayer" : ["💰", "💞", "🚽", "📽️", "🧂", "🔪", "💔", "🍆", "🖱️", "⌨️", "💻", "🌐"],
"chessLayer" : ["⚖️", "🎓", "📍", "📌", "🔎", "🖊️", "📚", "📐", "📖", "🧠", "✏️", "♟️"],
"barrierLayer" : ["❔", "✴️", "✖️"],
"borderLayer" : ["🩸", "🚫", "💢", "🔇", "🛑", "⭕", "🔕", "❌"],
"worldTwoCommons" : ["🍀", "☘️", "📘", "📙", "📕", "📗", "⏏️", "▶️", "⏸️", "⏯️", "⏺️", "⏭️", "⏮️", "⏩", "⏪", "⏬", "⏫", "◀️", "🔼", "🔽", "➡️", "↖️", "↘️", "⬇️", "⬆️", "⬅️", "↪️", "↩️", "⤴️", "⤵️", "🔀", "🔁", "🔂", "🔄", "🔃"]
}
let worldOneLayers = ["dirtLayer", "brickLayer", "foggyLayer", "waterLayer", "rockLayer", "radioactiveLayer", "cactusLayer", "paperLayer"];
let worldTwoLayers = ["cloudLayer", "tvLayer", "doorLayer", "globeLayer", "chessLayer"];
let specialLayers = ["sillyLayer", "fluteLayer", "dirtLayer2", "barrierLayer", "borderLayer"];
let allLayers = ["dirtLayer", "brickLayer", "foggyLayer", "waterLayer", "rockLayer", "radioactiveLayer", "cactusLayer", "paperLayer"];

//SETTING LAYERS

let lastLayerChange = 6000;
let currentLayer;
function setLayer(y) {
    if (currentWorld === 1) {
        let tempNum = y;
        if (tempNum < 16000) {
            tempNum = Math.floor(tempNum / 2000);
            if (tempNum !== currentLayerNum) {
                currentLayerNum = tempNum;
                currentLayer = createLayer([layerList[allLayers[tempNum]], layerList["worldOneCommons"]]);
            }
        } else {
            if (tempNum > (lastLayerChange + 10000)) {
                lastLayerChange += 10000;
                if (Math.round(Math.random() * 77) === 33)
                    currentLayer = layerList[specialLayers[0]];
                else if (Math.round(Math.random() * 40) === 20)
                    currentLayer = layerList[specialLayers[1]];
                else {
                    let num = Math.floor(Math.random() * 8)
                    currentLayerNum = num;
                    currentLayer = createLayer([layerList[allLayers[num]], layerList["worldOneCommons"]]);
                }
            }
        }
    } else {
        let tempNum = y;
        if (tempNum < 10000) {
            tempNum = Math.floor(tempNum / 2000);
            if (tempNum !== currentLayerNum) {
                currentLayerNum = tempNum;
                currentLayer = createLayer([layerList[allLayers[tempNum]], layerList["worldTwoCommons"]]);
            }
        } else {
            if (currentLayer != layerList["borderLayer"]) {
                currentLayer = layerList["borderLayer"];
                currentLayerNum = 5;
            }
        }
    }
}

function createLayer(layers) {
    let output = [];
    if (currentPickaxe === 13 && currentWorld === 1) output.push("☯️");
    for (let i = 0; i < layers.length; i++) {
        output = output.concat(layers[i]);
    }
    output = applyLuckToLayer(output, verifiedOres.getCurrentLuck());
    return output;
}
function sortLayerRarities(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (oreList[arr[j]]["decimalRarity"] > oreList[arr[j + 1]]["decimalRarity"]) {
                let lesser = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = lesser;
            }
        }
    }
    return arr;
}
let commons = ["Common","Uncommon","Rare","Master","Surreal"];
function applyLuckToLayer(layer, luck) {
    for (let i = 0; i < layer.length; i++) {
        luck = debug ? cat : luck;
        let newRarity = (oreList[layer[i]]["numRarity"] / luck);
        if (commons.indexOf(oreList[layer[i]]["oreTier"]) < 0)
            oreList[layer[i]]["decimalRarity"] = (1/newRarity);
    }
    if (layer != layerList["dirtLayer2"])
        updateSpecialLayers();
    layer = sortLayerRarities(layer);
    return layer;
}

function changeLayerOres() {
    if (currentPickaxe === 13 && currentWorld === 1) {
        if (currentLayer.indexOf("☯️") < 0) {
            currentLayer.push("☯️");
            applyLuckToLayer(currentLayer, verifiedOres.getCurrentLuck());
        }
    } else {
        if (currentLayer.indexOf("☯️") > -1) {
            currentLayer.splice(currentLayer.indexOf("☯️"), 1);
            applyLuckToLayer(currentLayer, verifiedOres.getCurrentLuck());
        }
    }
    
}

let lettuceLayerProbabilities;
function createSpecialLayers() {
    layerList["dirtLayer2"] = createLayer([layerList["dirtLayer2"], layerList["worldOneCommons"]]);
}
function updateSpecialLayers() {
    applyLuckToLayer(layerList["dirtLayer2"], verifiedOres.getCurrentLuck());
}

const limitedOres = {
    "❤️‍🔥" : {
        "layers" : ["foggyLayer"],
        "timeType" : "month",
        "timeValues" : [1]
    },
    "💗" : {
        "layers" : ["cactusLayer"],
        "timeType" : "month",
        "timeValues" : [1]
    },
    "😻" : {
        "layers" : ["dirtLayer"],
        "timeType" : "minute",
        "timeValues" : [27]
    },
    "🏝️" : {
        "layers" : ["rockLayer"],
        "timeType" : "month",
        "timeValues" : [11]
    } ,
    "✨" : {
        "layers" : ["rockLayer"],
        "timeType" : "month",
        "timeValues" : [11]
    },
    "⛄": {
        "layers" : ["rockLayer"],
        "timeType" : "month",
        "timeValues" : [11]
    }
}

function checkLimitedOres() {
    let time = new Date();
    for (let propertyName in limitedOres) {
        let type = limitedOres[propertyName]["timeType"];
        let timeValue;
        if (type === "month") {
            timeValue = time.getMonth();
        } else if (type === "day") {
            timeValue = time.getDay();
        } else if (type === "minute") {
            timeValue = time.getMinutes()
        }
        if (limitedOres[propertyName]["timeValues"].includes(timeValue))
            makeOreAvailable(propertyName);
        else
            makeOreUnavailable(propertyName);
    }
}

function makeOreAvailable(ore) {
    let layers = limitedOres[ore]["layers"];
    for (let i = 0; i < layers.length; i++) {
        if (!(layerList[layers[i]].includes(ore))) {
            layerList[layers[i]].push(ore);
            applyLuckToLayer(layerList[layers[i]], verifiedOres.getCurrentLuck());
        }
    }
}

function makeOreUnavailable(ore) {
    let layers = limitedOres[ore]["layers"];
    for (let i = 0; i < layers.length; i++) {
        let index = layerList[layers[i]].indexOf(ore);
        if (index > -1) {
            layerList[layers[i]].splice(index, 1);
            applyLuckToLayer(layerList[layers[i]], verifiedOres.getCurrentLuck());
        }
    }
}

/*
for (let propertyName in temp) {
    for (let j = 0; j < 4; j++) {
        oreList[propertyName][1][j] += temp[propertyName][j]
    }
}
*/