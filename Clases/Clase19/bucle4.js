import readline from "node:readline"

const uno=readline.createInterface({

    input:process.stdin,
    output:process.stdout
});

let totalEntradas=0
uno.question("Ingrese la cantidad de entradas vendidas : ",(veces)=>{
    const ahorroD = Number(veces);

    for(let dia=1; dia<=5;dia++){
        totalEntradas=totalEntradas+ahorroD
        console.log(`Dia: ${dia} vendio: ${totalEntradas}`);

    };
    console.log(`Vendio un total de  : ${totalEntradas}`);
    uno.close();

    
});