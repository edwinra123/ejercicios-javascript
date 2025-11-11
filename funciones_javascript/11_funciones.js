// Crea una función que reciba un día y muestre si es "laboral" o "fin de semana"
function calculardia(){
    let dia="martes";
    switch (dia){
        case "lunes":
        case "martes":
        case "miercoles":
        case "jueves":
        case "viernes":

        console.log('este dia ',dia,' es laboral');
        break;
        case "sabado":
        case "domingo":
            console.log('este dia ',dia,' no es laboral');
            break;
    }
    
}
calculardia();