const PI = 3.14;

function add(x, y) {
  return x + y;
}

function substract(x, y) {
  return x - y;
}

function division(x, y) {
  if(y ==  0) {
    showMessage('You cannot divide by 0');
  } else {
    return x / y;
  }
}

function multiply(x, y) {
  return x * y;
}

function showMessage(message) {
  console.log(message);
}

exports.add = add;
exports.substract = substract;
exports.division = division;
exports.multiply = multiply;

/*
//Lo mismo de otra forma
const Math = {};
Math.add = add;
Math.substract = substract;
Math.division = division;
Math.multiply = multiply;
module.exports = Math;
*/

/*
//Otra posibilidad (pero creo que solo puede haber un module.exports en cada fichero)
function hello(name){
  console.log('Hola ' + name)
}
module.exports = hello;
*/
