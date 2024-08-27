let binaryText = document.getElementById("binary");
let decimalText = document.getElementById("decimal");

let zeroButton = document.getElementById("zero");
let oneButton = document.getElementById("one");
let clearButton = document.getElementById("clear");

clearButton.addEventListener("click", () => {
    binaryText.textContent = "";
    decimalText.textContent = "";
});

zeroButton.addEventListener("click", () => {
    binaryText.textContent += "0";
    decimalText.textContent = binaryToDecimal(binaryText.textContent);
});

oneButton.addEventListener("click", () => {
    binaryText.textContent += "1";
    decimalText.textContent = binaryToDecimal(binaryText.textContent);
});