// Importar la función sum del archivo app.js
// const { sum } = require('./app.js');

// Comienza tu primera prueba
// test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
   //  let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
   //  expect(total).toBe(23);
// });

// Importo la funcion desde app.js
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Test: Euros a Dólares
test("One euro should be 1.07 dollars", () => {
    const euros = 3.5;
    const expected = parseFloat((euros * 1.07).toFixed(3));
    const dollars = fromEuroToDollar(euros);
    expect(dollars).toBe(expected);
});

// Test: Dólares a Yenes
test("Five dollars should be equivalent in yenes", () => {
    const dollars = 5;
    const euros = dollars / 1.07;
    const expected = parseFloat((euros * 156.5).toFixed(3));
    const yen = fromDollarToYen(dollars);
    expect(yen).toBe(expected);
});

// Test: Yenes a Libras Esterlinas
test("1000 yenes should be equivalent in pounds", () => {
    const yen = 1000;
    const euros = yen / 156.5;
    const expected = parseFloat((euros * 0.87).toFixed(3));
    const pounds = fromYenToPound(yen);
    expect(pounds).toBe(expected);
});