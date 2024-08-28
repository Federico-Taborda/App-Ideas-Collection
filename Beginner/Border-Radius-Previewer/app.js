let box = document.getElementById("box");
let input = document.getElementById("inputs");
let cssProperty = document.getElementById("property-style");
let btn = document.getElementById("btn")

cssProperty.value = "0% 0% 0% 0%"

/**
 * La funcion recibe una esquina y un tamaño para cambiar la propiedad border-radius de dicha esquina
 * @param {string} corner 
 * @param {Number} size 
 */
function changeCss(corner, size) {
    if (corner == "top-left") {
        box.style.borderTopLeftRadius = `${size}%`;
    } else if (corner == "top-right") {
        box.style.borderTopRightRadius = `${size}%`;
    } else if (corner == "bottom-left") {
        box.style.borderBottomLeftRadius = `${size}%`;
    } else if (corner == "bottom-right") {
        box.style.borderBottomRightRadius = `${size}%`;
    };
};

/**
 * La funcion muestra la propiedad css en pantalla
 */
function showProperty() {
    return cssProperty.value = `${box.style.borderTopLeftRadius} ${box.style.borderTopRightRadius} ${box.style.borderBottomLeftRadius} ${box.style.borderBottomRightRadius}`
};

/**
 * La funcion copia la propiedad css al portapapeles
 */
function copyToClipboard() {
    navigator.clipboard.writeText(cssProperty.value)

    alert("Copied to the clipboard")
};

/**
 * Array donde sus elementos son los input-range
 * @type {Array}
 */
let inputs = Array.from(input.children).filter(element =>  element.tagName == "INPUT");

inputs.forEach((element) => {
    element.addEventListener("input", () => {
        changeCss(element.id, element.value);
        showProperty();
    });
});

btn.addEventListener("click", copyToClipboard)




