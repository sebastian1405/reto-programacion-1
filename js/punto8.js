const num1 = prompt("Total a pagar", "");
const num2 = prompt("cuantas personas se dvidirá la cuenta", "");
const num3 = prompt("porcentaje de propina a incluir", "");
const num4 = prompt("porcentaje de impuestos", "");
const porcentajePropina = Number(num1) * Number(num3 / 100);
const porcentajeImpuestos =
  (Number(num1) + porcentajePropina) * Number(num4 / 100);
const problema = Number(num1) + porcentajePropina + porcentajeImpuestos;
const division = problema / num2;
alert(
  `El total a pagar incluyendo propina e impuestos es: ${problema} y el total por cada persona es: ${division} `
);
