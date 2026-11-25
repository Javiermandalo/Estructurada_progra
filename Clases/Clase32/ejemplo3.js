import readline from "node:readline";

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const calcularAhorro =(meta,datoDiario)=> {

    let total = 0;
    let dia = 0;

    while(total < meta){

        dia++;
        total += datoDiario;

        console.log(`Dia ${dia}: Ahorro : ${total}`);
    
    }

    console.log(`Meta alcanzada: ${dia} dias \nTotal ahorro : $${total}`);
}

rl.question("Ingrese la meta de ahorro: $",(datoMeta)=>{
    rl.question("Ingrese el ahorro diario: $", (datoAhorro)=>{

        let meta = Number (datoMeta);
        let datoDiario = Number(datoAhorro);

        if(meta > 0 && datoDiario > 0){
            calcularAhorro("meta,datoDiario");
        }else{
            console.log(`Ingrese cantidades mayores a cero`);
        }
    });
});

