import readline from "node:readline";

const produnto = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

produnto.question("Ingrese el nombre del producto", function(ProducName){
    produnto.question("Ingrese el prcio unitario del producto", function(UnitPrice){
        produnto.question("Ingrese la cantidad", function(CantProduct){


            ProducName = ProducName.toLocaleUpperCase();
            let extraName = ProducName.slice(0,4);
            let totalPay = CantProduct * UnitPrice;

            console.log(`Total a pagar por ${ProducName} es ${totalPay.toFixed(2)}`);
            console.log(`${extraName}`);
        });
    });
});