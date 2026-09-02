//Ejercicio 2: Una empresa desea evaluar la producción diaria de uno de sus
//empleados, Elabore un programa que solicite:
//• Nombre del empleado.
//• Cantidad de productos elaborados.
//• Cantidad de horas trabajadas.
//Calcule el promedio de productos elaborados por hora:
//rendimiento = productos elaborados / horas trabajadas
//Si el rendimiento es mayor a 8 productos por hora, muestre "Rendimiento alto".
//De lo contrario, muestre "Rendimiento regular".
//Muestre el nombre del empleado en mayúsculas, su rendimiento con una cifra
//decimal y el tipo de rendimiento (alto o regular).


import readline from "node:readline";

const ejer2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

ejer2.question("Ingrese su nombre: ", function (nombre) {
    ejer2.question("Ingrese la cantidad de productos elaborados: ", function (cantidadElaborados) {
        ejer2.question("Ingrese la cantidad de horas trabajadas: ", function (horasTrabajadas) {

            nombre = nombre.toUpperCase();
            cantidadElaborados = parseFloat(cantidadElaborados);
            horasTrabajadas = parseInt(horasTrabajadas);

            let rendimiento = cantidadElaborados / horasTrabajadas;
            rendimiento = rendimiento.toFixed(1);

            console.log("Nombre del empleado: " + nombre);
            console.log("Rendimiento: " + rendimiento + " productos por hora");

            if (rendimiento > 8) {
                console.log("Rendimiento alto");
            } else {
                console.log("Rendimiento regular");
            }

            ejer2.close();
        }
        );
    }
    );
});