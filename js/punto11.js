const num1 = prompt("Ingrese un numero mayor a 1000", "");
const num2 = prompt("Ingrese un numero menor a 100", "");
const num3 = Number(num1);
const num4 = Number(num2);
const problema = num3 / num4;
if (num3 <= 1000 || num4 >= 100) {
  alert(
    `el numero ingresado debe cumplir con los requisitos antes solicitados`
  );
} else {
  alert(
    `el numero ${num4} cabe en ${num3} una cantidad igual a: ${problema} veces`
  );
}
