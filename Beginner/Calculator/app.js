let buttonsContainer = document.getElementById("buttons");
let buttons = Array.from(buttonsContainer.children)

/**
 * Agrega un listener a cada boton y determinara que funcion debera ejecutarse al apretar un boton
 */
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if(e.target.textContent == "Clear") clearDisplay();
        else if(e.target.textContent == "Del") deleteLastInput();
        else if(e.target.textContent == "=") operateInput();
        else document.getElementById("display").textContent += e.target.textContent;
    });
});

/**
 * La funcion evaluara las entradas del display
 */
function operateInput() {
    let display = document.getElementById("display");
    let result = eval(display.textContent)
    
    return display.textContent = result;
};

/**
 * La funcion borrara el contenido del display
 */
function clearDisplay() {
    return document.getElementById("display").textContent = "";
};

/**
 * La funcion borrara la ultima entrada del display
 */
function deleteLastInput() {
    let display = document.getElementById("display");
    let elements = display.textContent.split("");
    elements.pop();

    return display.textContent = elements.join("");
};