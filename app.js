// Esta es mi función que suma dos números
//const sum = (a,b) => {
  //  return a + b
//}

// Solo un registro en consola para nosotros
//console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
//module.exports = { sum };

// one euro is:
let oneEuroIs = {
    "JPY": 156.5, // Japan yen
    "USD": 1.07, // US dollar
    "GBP": 0.87, // British pound
};

// Convierte una de dólares a yenes
function fromDollarToYen(dollars) {
    if (typeof dollars !== "number" || dollars < 0) return 0;
    const euros = dollars / oneEuroIs["USD"];
    const yen = euros * oneEuroIs["JPY"];
    return parseFloat(yen.toFixed(3));
}

//Convierte de euros a dólares.
function fromEuroToDollar(euros) {
    if (typeof euros !== "number" || euros < 0) return 0;
    const dollars = euros * oneEuroIs["USD"];
    return parseFloat(dollars.toFixed(3));
}

//Convierte de yenes a libras esterlinas.
function fromYenToPound(yen) {
    if (typeof yen !== "number" || yen < 0) return 0;
    const euros = yen / oneEuroIs["JPY"];
    const pounds = euros * oneEuroIs["GBP"];
    return parseFloat(pounds.toFixed(3));
}


module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };