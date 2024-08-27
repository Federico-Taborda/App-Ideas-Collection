// El siguiente codigo convierte un Binario en base 2 a un Decimal base 10 por el metodo de duplicacion

/**
 * Representa un numero Binario en base 2
 * @type {String}
 */
let binary = "1101010011101";

/**
 * La funcion recibe un String numerico y lo convertira en un Number devolviendo
 * un array donde cada elemento es el numero de cada caracter del string
 * @param {String} str 
 * @returns {Array|Number} 
 */
function stringToNumber(str) {
    let arr = str.split("");

    return arr.map(element => Number.parseInt(element));
};

/**
 * La funcion recibe un binario en formato string y devolvera un numero decimal
 * @param {String} binary 
 * @returns {Number}
 */
function binaryToDecimal(binary) {
    let arr = stringToNumber(binary);
    
    return arr.reduce((acumulador, siguiente) => {
        return acumulador = acumulador * 2 + siguiente
    });
};