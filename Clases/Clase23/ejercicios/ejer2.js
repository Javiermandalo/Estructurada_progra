import readline from 'node:readline';

const empleados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const pago_hora = (hora, pago) => {
    return hora * pago;
}

empleados.question('Ingrese las horas trabajadas: ', (valorHora) => {
    const hora = parseFloat(valorHora);

    
    empleados.question('Ingrese el pago por hora: ', (valorPago) => {
        const pago = parseFloat(valorPago);

        
        const totalSueldo = pago_hora(hora, pago);
        console.log(`El salario correspondiente es: $${totalSueldo.toFixed(2)}`);

        empleados.close();
    });
});