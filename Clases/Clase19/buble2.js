import readline from "node:readline"

const uno = readline.createInterface({

    input:process.stdin,
    output:process.stdout
});

uno.question("Ingrese la cantidad de dinero que ahorra cada dia : ",(veces)=>{
    const ahorroD = Number(veces);

    let ahorroTotal=0

    for(let dia=1; dia<=5;dia++){
        ahorroTotal=ahorroTotal+ahorroD
        console.log(`Dia ${dia} ahorro: ${ahorroTotal.toFixed(2)}`)
    };
    console.log(`Ahorro total : $${ahorroTotal.toFixed(2)}`)
    uno.close();

    
});