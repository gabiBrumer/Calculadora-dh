const subtrair = require ('./subtrair');

const somar = require ('./somar');

const multiplicar = require ('./multiplicar');

const dividir = require ('./dividir');

let testeSubtrair = (10,5)
console.log (testeSubtrair);

let testeSomar = (10,5)
console.log (testeSomar);

let testeMultiplicar = (5,5)
console.log (testeMultiplicar);

let testeDividir = (9,3)
console.log (testeDividir);

const calculadora = (x, y, callback) => callback (x,y)

console.log (calculadora (10,5, somar))