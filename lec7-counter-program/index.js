let count = 0;
const counterLabel = document.getElementById("counterLabel");

document.getElementById("deBtn").onclick = function() {
    count -= 1;
    counterLabel.textContent = count;
}

document.getElementById("rsBtn").onclick = function() {
    count = 0;
    counterLabel.textContent = count;
}

document.getElementById("inBtn").onclick = function() {
    count += 1;
    counterLabel.textContent = count;
}