

let nombre = "Eli";
let edad = 30;

function saludar(nombre) {
    return "hola " + nombre;
}

console.log(saludar("Eli"));

const saludarConEdad = (nombre, edad) => {
    return `hola ${nombre}, tienes ${edad} años`;
};

//Siempre se llama a la funcion con los mismos parametros que se definieron en la funcion
console.log(saludar("Eli", 30));



//La diferencia de funcion y cosnt
//Una funcion puede ser llamada antes de ser declarada 
//Una constante no puede ser llamada antes de ser declarada 
//Una function es igual a una cosnt?
//