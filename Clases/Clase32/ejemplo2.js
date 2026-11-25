let = produccion = 40;
let dia = 0;

while (produccion < 250){

    dia++;
    produccion +=35;

    console.log(`Dia ${dia}: ${produccion} unidades acumuladas`);

}

console.log(`Meta alcanzada en ${dia} dias \nProduccion total: ${produccion} unidades`);