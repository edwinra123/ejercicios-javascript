
function calcularIva(monto){
    const iva=(monto*21)/100;
    const montobase=monto+iva;
    return montobase;
}
function calcularDescuento(tipocliente,montobase){
    const subtotal=calcularIva(montobase);
    let preciofinal;
    if( tipocliente==="normal"){
        preciofinal=subtotal*0.10;
    }
    else if(tipocliente==="premium"){
        preciofinal=subtotal*0.20;
    }
    return preciofinal
}   
let montoinicial=250;
let tipoclient="premium"
const resultado=calcularDescuento(tipoclient,montoinicial );
console.log('El cliente',tipoclient , 'paga un total de',resultado);