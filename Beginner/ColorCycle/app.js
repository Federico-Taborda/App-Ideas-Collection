let hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

let interval;

let box = document.getElementById("box");
let play = document.getElementById("start-stop");
let start = false;

/**
 * Renderiza que texto debe verse en el boton al ser apretado
 */
function renderStartButton() {
    start = !start;
    play.textContent = !start ? "Start" : "Stop";
};

/**
 * Obtiene los valores de colores ingresados por el usuario
 */
function getHex() {
    return {
        red: document.getElementById("red").value,
        green: document.getElementById("green").value,
        blue: document.getElementById("blue").value
    };
};

/**
 * Obtiene los valores de incremento ingresados por el usuario
 */
function getIncrement() {
    return {
        red: parseInt(document.getElementById("r").value),
        green: parseInt(document.getElementById("g").value),
        blue: parseInt(document.getElementById("b").value)
    };
};

/**
 * Dado un componente (r, g o b) y un numero n la funcion aumentara el componente n tonos
 * @param {String} component 
 * @param {Number} n 
 * @returns 
 */
function incrementComponent(component, n) {
    let arr = component.split("");
    let firstCarcater = hex.indexOf(arr[0]);
    let secondCaracter = hex.indexOf(arr[1]);
    
    if(arr[0] == "F" && arr[1] == "F") {
        return `${hex[0]}${hex[0]}`
    };

    if(arr[1] == "F") {
        return `${hex[firstCarcater + 1]}${hex[0]}`
    };

    if(secondCaracter + n >= hex.length) {
        let rest = (secondCaracter + n) - hex.length;
        return `${hex[firstCarcater + 1]}${hex[rest]}`
    };

    return `${arr[0]}${hex[secondCaracter + n]}`
};

/**
 * Dado un color en formato hexadecimal la funcion cambiara el color de la caja en pantalla
 * @param {String} color 
 */
function changeBackgroundBox(color) {
    return box.style.backgroundColor = color;
};

play.addEventListener("click", () => {
    renderStartButton();
    let hexadecimal = getHex();
    let increment = getIncrement();
    
    if(start) {
        interval = setInterval(() => {
            hexadecimal = {
                red: incrementComponent(hexadecimal.red, increment.red),
                green: incrementComponent(hexadecimal.green, increment.green),
                blue: incrementComponent(hexadecimal.blue, increment.blue)
            };

            let hexadecimalString = `#${hexadecimal.red}${hexadecimal.green}${hexadecimal.blue}`;
            changeBackgroundBox(hexadecimalString);
        }, 25);
    }else{
        clearInterval(interval)
    };
});