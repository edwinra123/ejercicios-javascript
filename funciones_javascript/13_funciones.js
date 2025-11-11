// crear una funcion llamada calculardescuento que reciba el total de la compra
//si el total es >=100 aplica desceunto del 15%
//si el total es menor a 100,aplica un descuento del 5%
// muestra el precio final en consola formato}
//"el total con descuento es x ".
function calculardescuento(subtotal){
    if(subtotal>=100){
        return 15;
    
    }
    else{
        return 5;
    }
}   
function calculardescuentofinal(subtotal){
    const porcentajeDescuento = calculardescuento(subtotal);
  const descuento = subtotal * (porcentajeDescuento / 100);
  const precioFinal = subtotal - descuento;
  return precioFinal;

   
}
let resultado=calculardescuentofinal(100);
console.log('el total con descuento es:',resultado);
