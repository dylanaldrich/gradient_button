function changeColor() {
    const hexNums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

    let hexCode = "";

    for(let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * hexNums.length);
        hexCode += hexNums[randomIndex];
    }

    document.body.style.backgroundColor = "#" + hexCode;
    document.getElementById("hex-code").innerHTML = hexCode;
}