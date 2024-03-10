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

function debugGiveAllOres(type) {
    if (debug) {
        if (typeof pickaxeRecipes[type] === "object") {
            const pick = type;
            for (let ingredient in pickaxeRecipes[pick])
                inventory[ingredient]["normal"] += pickaxeRecipes[pick][ingredient];
        } else if (typeof gearRecipes[type] === "object") {
            const gear = type;
            for (let ingredient in gearRecipes[gear])
                inventory[ingredient]["normal"] += gearRecipes[gear][ingredient];
        }
        updateActiveRecipe();
    }
}

function snakeToCamel(str, startUpper) {
    const snake = str.toLowerCase();
    let camel = "";
    let shouldCapitalize = startUpper ?? false;
    for (const char of snake) {
        if (["-","_"].includes(char)) shouldCapitalize = true;
        else {
            camel += shouldCapitalize ? char.toUpperCase() : char.toLowerCase();
            shouldCapitalize = false;
        }
    }
    return camel;
}

function capitalize(str) {
    return str.replace(/(?:^|\s)\S/g, function (match) {
        return match.toUpperCase();
    });
}

function normalize(str, cap) {
    const space = str.replace(/[-_]/g, " ").replace(/\d+/, function(match) {
        return romanize(match);
    });
    return cap ? capitalize(space) : space;
}

function romanize(num) {
    if (num >= 4000) return;
    if (num % 1) num = Math.round(num);
    const roman = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    let str = "";
    for (let i of Object.keys(roman)) {
        const q = Math.floor(num / roman[i]);
        num -= q * roman[i];
        str += i.repeat(q);
    }
    return str;
}

function clamp(num, min, max) {
    return num <= min
      ? min
      : num >= max
        ? max
        : num
}

function addUpLayerProbs(arr) {
    let total = 0;
    for (let num of arr) {
        if (typeof num === "number") total += 1/num;
        else if (typeof num === "string") total += 1/oreList[num]["prob"];
    }
  return total;
}

function lastItemIn(arr) {
    return arr[arr.length-1];
}

function random(lower, upper) {
    if (typeof lower !== "number" && typeof upper !== "number") {
        //[0-1)
        return Math.random()
    } else if (typeof lower === "number" && typeof upper !== "number") {
        upper = lower;
        //[0-upper]
        return Math.floor(Math.random()*(upper+1));
    } else if (typeof lower === "number" && typeof upper === "number") {
        //[lower-upper]
        return Math.floor(Math.random()*(upper-lower+1)+lower);
    }
}

function bSearch(arr, x, start, end) {
    start ??= 0;
    end ??= arr.length-1;
    const mid = Math.floor((start + end) * 0.5);
    if (start > end || arr[mid] === x)
        return mid + 1;
    else if (arr[mid] > x)
        return bSearch(arr, x, start, mid - 1);
    else
        return bSearch(arr, x, mid + 1, end);
}

function sortOres(layer) {
    const sortedores = [];
    const sortedprobs = [];
    for (const ore of layer) {
        const index = bSearch(sortedprobs, oreList[ore]["prob"]);
        sortedprobs.splice(index, 0, oreList[ore]["prob"]);
        sortedores.splice(index, 0, ore);
    }
    return sortedores.reverse();
}

function hasAny(ore) {
    for (const variant of variantNames)
        if (inventory[ore][variant.toLowerCase()] >= 1) return true;
    return false;
}

function hasGear(gear) {
    return gears[gear] && currentGears.includes(gear);
}

function sortArray(arr) {
    const sorted = [];
    for (const num of arr)
        sorted.splice(bSearch(sorted, num), 0, num);
    return sorted;
}

function sortAlongsideArray(arr, arr2) {
    const sorted = [];
    const sorted2 = [];
    //prerequisite: both arrays are the same length
    for (let i=0; i<arr.length; i++) {
        const num = arr[i];
        const index = bSearch(sorted, num) + 1;
        sorted.splice(index, 0, num);
        sorted2.splice(index, 0, arr2[i]);
    }
    return [sorted, sorted2];
}