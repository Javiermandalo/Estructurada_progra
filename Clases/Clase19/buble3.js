import readline from "node:readline"

const uno=readline.createInterface({

    input:process.stdin,
    output:process.stdout
})

uno.question("Ingrese la cantidad de horas que duro cada prestamo : ",(veces)=>{
    const ahorroD = Number(veces);
    let dineroTotal=0
    const precioHora=2.25
    
    for(let prestamo=1; prestamo<=4;prestamo++){
        dineroTotal=dineroTotal+(precioHora*veces)
        console.log(`Prestamo: ${prestamo} ahorro: ${dineroTotal.toFixed(2)}`)
    };
    console.log(`Ahorro total : $${dineroTotal.toFixed(2)}`)
    uno.close();

});