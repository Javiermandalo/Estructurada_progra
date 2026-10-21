import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const registrasNotas = (actual,cantidad) => {

}

rl.question("Cuantas evaluaciones desea hacer?", (dato)=>{
    const cantidad = parseFloat(dato);

    if(Number.isFinite(cantidad) && cantidad > 0){
        registrasNotas();
    }
})






