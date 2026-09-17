import readline from 'node:readline';

const ejer1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

ejer1.question('Ingrese el número de lados (3, 4, 5, 6): ', function(lados){
    let n = parseInt(lados);
    let figura = "";

    switch (n) {
        case 3:
            figura = "Triángulo";
            break;
        case 4:
            figura = "Cuadrilátero";
            break;
        case 5:
            figura = "Pentágono";
            break;
        case 6:
            figura = "Hexágono";
            break;
        default:
            figura = "Figura no reconocida";
            break;
    }

    console.log(figura);
    ejer1.close();
});