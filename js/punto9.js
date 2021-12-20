const dias = prompt("Ingrese una cantidad de dias", "");
const dias1 = Number(dias);
const horas = dias1 * 24;
const minutos = dias1 * 1440;
const segundos = dias1 * 86400;
alert(
  `En ${dias1} dias hay: ${horas} horas, ${minutos} minutos,${segundos} segundos `
);
