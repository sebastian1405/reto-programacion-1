const num1 = prompt("Ingrese una cantidad de millas", "");
const num2 = Number(num1);
const problema = num2 * 1.609344;
alert(
  `la cantidad de kilometros en ${num2} millas son: ${problema.toFixed(
    2
  )} kilometros`
);
