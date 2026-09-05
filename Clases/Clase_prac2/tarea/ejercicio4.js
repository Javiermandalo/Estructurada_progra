const now = new Date();

let dia = now.getDate();
let mes = now.getMonth() + 1;
let year = now.getFullYear();

let horas = now.getHours();
let minutos = now.getMinutes();
let segundos = now.getSeconds();

console.log(`Hoy es ${dia}/${mes}/${year} y son las ${horas}:${minutos}:${segundos}`);