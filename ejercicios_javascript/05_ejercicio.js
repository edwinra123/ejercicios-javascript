let lado1 = 5, lado2 = 5, lado3 = 8;
// Determina si es equilátero, isósceles o escaleno
if(lado1=== lado2===lado3){
    console.log('el triangulo es equilatero');
}
else if(lado1===lado2){
    console.log('el triangulo es isosceles');
}
else if(lado1===lado3){
    console.log('el triangulo es isosceles');
}
else if(lado2==lado3){
    console.log('el triangulo es isosceles');
}
else{
    console.log('el triangulo es escaleno');
}