
// Crea una función llamada "sumar" que sume dos números
// y otra llamada "mostrarResultado" que reciba una función y muestre su resultado
// Llama a mostrarResultado(sumar)
function sumar(num1,num2){
    num1=8;
    num2=3;
    return num1+num2;
}
function mostrarResultado(sumar){
    const a=8;
    const b=3;
    const resultadototal=sumar(a,b);
    console.log (resultadototal);
}
mostrarResultado(sumar);