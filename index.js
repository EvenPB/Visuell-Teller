let count = 0;
document.getElementById('DecreaseButton').onclick = function () {
    count -= 1;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById('ResetButton').onclick = function () {
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById('IncreaseButton').onclick = function () {
    count += 1;
    document.getElementById('countLabel').innerHTML = count;
}
