// Objeto con los productos y sus precios
const productos = {
    "cafe": 2500,
    "croissant": 3500,
    "chocolatada": 2500,
    "tostado": 4000,
};

// Función principal que simula la compra
function comprarEnCafeteria() {
    let total = 0;
    const carrito = {};

    alert("Bienvenido a la cafeteria!");

    while (true) {

        const producto = prompt("Ingrese el producto que desea comprar (cafe,croissant,chocolatada,tostado), o escriba 'fin' para terminar:");

        if (producto === "fin") {
            break;
        }

        if (!(producto in productos)) {
            alert("Producto no válido. Por favor, ingrese uno de los productos disponibles.");
            continue;
        }

        let cantidad = parseInt(prompt(`Ingrese la cantidad de ${producto} que desea:`));

        if (isNaN(cantidad) || cantidad <= 0) {
            console.log("Cantidad no válida. Por favor, ingrese un número válido mayor a cero.");
            continue;
        }

        const precioUnitario = productos[producto];
        const costoProducto = precioUnitario * cantidad;

        carrito[producto] = cantidad;
        total += costoProducto;

        alert(`Agregado al carrito: ${cantidad} ${producto}(s) por $${precioUnitario.toFixed(2)} c/u`);
    }

document.write("Resumen de la compra:");
    for (const producto in carrito) {
        const cantidad = carrito[producto];
        console.log(`${cantidad} ${producto}(s) - Total: $${(cantidad * productos[producto]).toFixed(2)}`);
    }

    alert(`Total a pagar: $${total.toFixed(2)}`);
    alert("¡Gracias por su compra!");
}

// Ejecutar la función principal
comprarEnCafeteria();
