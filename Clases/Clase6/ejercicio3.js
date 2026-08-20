
import readline from 'node:readline';

const convertMetros = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

convertMetros.question("Ingrese el valor que quiere expresar de metros a centimetros", function(metros){

    const centimetros = 100;

    metros = parseInt(metros);
    centimetros = parseInt(centimetros);

    const MetrosCentimetros = metros*centimetros; 

    console.log(`Sus metros han sido convertidos a centimetros ${MetrosCentimetros} cm`);
    convertMetros.close();
});
