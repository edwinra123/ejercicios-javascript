// Crear una función constructora Persona que tenga // nombre y edad, y un método saludar // que muestre // "Hola, soy <nombre> y tengo <edad> años"
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function() {
        console.log("Hola, soy " + this.nombre + " y tengo " + this.edad + " años");
    };
}

let persona1 = new Persona("Edwin", 25);
persona1.saludar();
