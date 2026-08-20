

//IMPORTAR MODULO 
import readline from 'node:readline';

//CREAR INTERFAZ 

const rl = readline.createInterface({ //Crea una interfaz para el usuario como canal de entrada y salida
    input: process.stdin, //input: process.stdin indica que la entrada será desde la consola
    output: process.stdout //outpot; indica que la salida será desde la consola 
}); 


rl.question("Cual es tu nombre?", function(nombre){
    rl.question("Cual es tu edad?", function(edad){
        console.log(`Hola ${nombre}, tienes ${edad} años de edad`);
        rl.close();
    });
});



