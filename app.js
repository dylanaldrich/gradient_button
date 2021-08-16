function changeColor() {
    const hexNums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

    let hexCodes = [];
    let hexCode = "";

    for(let i = 0; i < 12; i++) {
        let randomIndex = Math.floor(Math.random() * hexNums.length);
        hexCode += hexNums[randomIndex];
        if (hexCode.length === 6) {
            hexCodes.push(hexCode);
            hexCode = "";
        }
    }
    document.body.style.background = "linear-gradient(to right, #" + hexCodes[0] + ", #" + hexCodes[1] + ")";
    document.getElementById("hex-code").innerHTML = "#" + hexCodes[0] + " and #" + hexCodes[1];
}