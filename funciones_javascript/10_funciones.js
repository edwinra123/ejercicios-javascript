let texto = "javascript";
// Crea una función que reciba una palabra
// y dentro tenga otra función que devuelva esa palabra en mayúsculas
// Muestra el resultado final en consola
function recibepalabra(){
     texto="javascript";
    function convertirAMayusculas() {
    return texto.toUpperCase();
}
    let resultado=convertirAMayusculas();
    console.log(resultado);
}

recibepalabra();