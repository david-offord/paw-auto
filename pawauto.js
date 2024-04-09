document.addEventListener("DOMContentLoaded", async function () {
    let options = await browser.storage.sync.get("pwExtOptions");
    options = options.pwExtOptions;

    if (nullUndefinedOrEmpty(options))
        return;

    //do the war reason
    let modInput = document.getElementsByName("reason")
    if (modInput.length > 0 && nullUndefinedOrEmpty(options.defaultWarReason) === false) {
        modInput[0].value = options.defaultWarReason;
    }

    //war type
    modInput = document.getElementsByName("war_type")
    if (modInput.length > 0 && options.defaultWarType !== "none") {
        modInput[0].value = options.defaultWarType;
    }

    //number of tanks to use in the attack
    modInput = document.getElementById("attTanks")
    if (modInput !== null && nullUndefinedOrEmpty(options.defaultTankCount) === false) {
        modInput.value = options.defaultTankCount;
    }

    //soldiers using munitions
    modInput = document.getElementById("soldiersUseMunitions")
    if (modInput !== null) {
        modInput.checked = options.useMunitionsByDefault;
    }
});

function nullUndefinedOrEmpty(o) {
    if (o === null)
        return true;
    if (typeof o === "undefined")
        return true;
    if (o === "")
        return true;
    return false;
}