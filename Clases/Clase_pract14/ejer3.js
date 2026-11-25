const inventario = [
    { nombre: "Camiseta", precio: 15, stock: 10 },
    { nombre: "Pantalon", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 2 },
];

function venderProducto(inventario, nombre, cantidad) {
    if (!Number.isInteger(cantidad) || cantidad <= 0) {
        return "Cantidad no válida";
    }

    for (const producto of inventario) {
        if (producto.nombre.toLowerCase() === nombre.toLowerCase()) {
            if (producto.stock >= cantidad) {
                producto.stock -= cantidad;
                return "Venta exitosa";
            }
            return "Stock insuficiente";
        }
    }
    return "Producto no encontrado";
}

function aumentarPrecios(inventario) {
    const incremento = 0.1;
    for (const producto of inventario) {
        producto.precio = Number((producto.precio * (1 + incremento)).toFixed(2));
    }
}

console.log(venderProducto(inventario, "Camiseta", 4));
console.log(venderProducto(inventario, "Zapatos", 5));

aumentarPrecios(inventario);

console.log("\nInventario actualizado:");
for (const producto of inventario) {
    console.log(
        `${producto.nombre} | Precio: $${producto.precio.toFixed(2)} | Stock: ${producto.stock}`
    );
}
