let mes = "abril";
// Mostrar si pertenece a primavera, verano, otoño o invierno (usa switch)
switch(mes){
    case "marzo":
    case "abril":
    case "mayo":
        console.log('el mes :', mes, ',pertenece a la estacion primavera');
        break;
    case "junio":
    case "julio":
    case "agosto":
        console.log('el mes:', mes, 'pertenece a la estacion verano');
        break;
    case "septiembre" :
    case "octubre":
    case "noviembre":

        console.log('el mes:', mes, 'pertenece a la estacion otoño');
        break;
    case "diciembre" : 
    case "enero":
    case "febrero":
    console.log('el mes:', mes, 'pertenece a la estacion invierno');
    break;   
}