let productos = [
    { nombre: "Pan", precio: 1.5, cantidad: 3 },
    { nombre: "Leche", precio: 2, cantidad: 2 },
    { nombre: "Huevos", precio: 0.5, cantidad: 12 }
];
function sumarproductosconiva(listaProductos) {
    let totalConIVA = 0;
    for (const producto of listaProductos) {
        totalConIVA += producto.precio * producto.cantidad * 1.21; // 21% IVA
    }
    return totalConIVA;
}

function sumarprecioproductos(listaproductos){
    let total=0;
    for (const producto of listaproductos){
        total+=producto.precio*producto.cantidad;
    }
    return total;
}
function calcularTotal(listaProductos) {
    const subtotal = sumarprecioproductos(listaProductos);
    const totalConIVA = sumarproductosconiva(listaProductos);
    console.log("Subtotal:", subtotal.toFixed(2), "€");
    console.log("Total con IVA:", totalConIVA.toFixed(2), "€");
}

const productostotal=sumarprecioproductos(productos);
console.log(productostotal);
const productostotal_iva=sumarproductosconiva(productos);
console.log(productostotal_iva.toFixed(2))