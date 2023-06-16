function display(value) {
    document.getElementById("result").textContent += value;
}

function clearScreen() {
    document.getElementById("result").textContent = "";
}

function calculate() {
    var q = eval(document.getElementById("result").textContent);
    document.getElementById("result").textContent = q;
}