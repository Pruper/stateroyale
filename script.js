/*

Made by Pruper

*/

class Nation {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.states = [];
    }

    addState(id) {
        let previousController = findStateController(id);
        if (typeof previousController != 'undefined') {
            previousController.removeState(id);
        }
        this.states.push(id);
    }

    removeState(id) {
        this.states.splice(this.states.indexOf(id), 1);
    }

    hasState(id) {
        if (this.states.indexOf(id) > -1) {
            return true;
        }
        return false;
    }

    form(formable) {
        this.name = formables[formable].name;
        this.color = formables[formable].color;
        updateMap();
    }
}

let nations = []
for (i in nationStaticData) {
    nations.push(new Nation(nationStaticData[i].name, nationStaticData[i].color));
    nations[nations.length - 1].addState(nationStaticData[i].stateId);
}


let mapmode = "political";
let selectedState = "";

function changeMapMode(mode) {
    mapmode = mode;
    updateMap();
}

function updateMap() {
    for (i in nations) {
        for (j in nations[i].states) {
            if (mapmode == "political") {
                document.getElementById(nations[i].states[j]).style.fill = "#" + nations[i].color;
            }

            if (mapmode == "borders") {
                if (selectedState != "" && states[selectedState].neighbors.indexOf(nations[i].states[j]) > -1) {
                    document.getElementById(nations[i].states[j]).style.fill = "#0000D3";
                } else if (selectedState === nations[i].states[j]) {
                    document.getElementById(nations[i].states[j]).style.fill = "#000069";
                } else {
                    document.getElementById(nations[i].states[j]).style.fill = "#D3D3D3";
                }
            }
        }
    }

    updateInfobox();
}

let infoTitle = document.getElementById("info-title");
let infoSubtitle = document.getElementById("info-subtitle");
let infoText = document.getElementById("info-text");
function updateInfobox() {
    if (selectedState != "") {
        let controller = findStateController(selectedState);
        infoTitle.innerHTML = states[selectedState].name;
        infoSubtitle.innerHTML = `Controlled by <span style="color:#${controller.color};">${controller.name}</span>`;
        let text = `Power: <b>${states[selectedState].power}</b>`;
        infoText.innerHTML = text;
    }
}

function findStateController(state) {
    for (i in nations) {
        if (nations[i].hasState(state)) {
            return nations[i];
        }
    }
}

let testNumber = 3;
function generateOnClickFunctions() {
    let sa = Object.keys(states);
    for (i in sa) {
        let currentStateAbbreviation = sa[i];
        document.getElementById(sa[i]).onclick = function () {
            selectedState = currentStateAbbreviation;
            updateMap();
        }
    }
}

generateOnClickFunctions();
updateMap();

setInterval(function () {
    let statePool = Object.keys(states);
    let randomNumber = Math.floor(Math.random() * statePool.length);
    let randomState = statePool[randomNumber];

    let takeoverStatePool = states[randomState].neighbors;

    if (takeoverStatePool.length > 0) {
        findStateController(randomState).addState(takeoverStatePool[Math.floor(Math.random() * takeoverStatePool.length)]);
        updateMap();
    }
}, 10);