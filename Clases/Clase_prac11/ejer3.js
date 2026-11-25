const productos = [
    { nombre: "Laptop", precio: 800 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Monitor", precio: 250 },
    { nombre: "Teclado", precio: 100 },
    { nombre: "Audífonos", precio: 120 },
    { nombre: "Cable USB", precio: 8 },
];

console.log("Todos los productos:");
productos.forEach((producto) => {
    console.log(`- ${producto.nombre}: $${producto.precio.toFixed(2)}`);
});

const caros = productos.filter((producto) => producto.precio >= 100);

console.log("Productos que cuestan al menos $100:");
caros.forEach((producto) => {
    console.log(`- ${producto.nombre}: $${producto.precio.toFixed(2)}`);
});
