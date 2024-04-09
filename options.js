//show the text that we saved
function setItem() {
    document.getElementById("SavedMessage").style.removeProperty("display");
}

//log it
function onError(error) {
    console.log(error);
}

//set all the values to their saved settings
document.addEventListener("DOMContentLoaded", async function () {
    let options = await browser.storage.sync.get("pwExtOptions");
    options = options.pwExtOptions;

    if (options === null || typeof options === "undefined")
        return;

    document.getElementById("DefaultTankCount").value = options.defaultTankCount;
    document.getElementById("UseMunitions").checked = options.useMunitionsByDefault;
    document.getElementById("DefaultWarReason").value = options.defaultWarReason;
    document.getElementById("DefaultWarType").value = options.defaultWarType;

});


//when they click the save, actually save this
document.getElementById("SaveSettings").addEventListener("click", async function () {
    document.getElementById("SavedMessage").style.display = "none";
    // define 2 objects
    let pwExtOptions = {
        defaultTankCount: document.getElementById("DefaultTankCount").value,
        useMunitionsByDefault: document.getElementById("UseMunitions").checked,
        defaultWarReason: document.getElementById("DefaultWarReason").value,
        defaultWarType: document.getElementById("DefaultWarType").value,
    };

    // store the objects
    browser.storage.sync.set({ pwExtOptions }).then(setItem, onError);

});