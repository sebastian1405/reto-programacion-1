const num1 = prompt("Ingrese un numero", "");
const num2 = prompt("Ingrese un numero", "");
const num3 = prompt("Ingrese un numero", "");

const problema = parseFloat(num1) + parseFloat(num2);
const multiplicado = parseFloat(num3);
alert(`${(problema * multiplicado).toFixed(2)}`);
