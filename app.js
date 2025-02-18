// Declaración de variables

const inputAmigo    = document.getElementById("amigo");
const listaAmigos   = [];                                       // Inicializo variable que es un arreglo, esta contendrá los nombres que se vayan digitando
const ulListaAmigos = document.getElementById("listaAmigos");   // Variables que hace referencia a la lista que se desplegará
const ulResultado   = document.getElementById("resultado");      // Variables que hace referencia al texto que despliega el resultado en pantalla con el nombre secreto

// Función para validar el nombre
function validarNombre(nombre) {
    const patron = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;          // Para definir solo letras y espacios
    return patron.test(nombre);
}

function agregarAmigo() {
    const nombre = inputAmigo.value.trim();                     // Elimino espacios antes y después
    if (nombre === "") {
        alert("Debes ingresar un nombre válido.");
    } else if (!validarNombre(nombre)) {
        alert("El nombre solo puede contener letras y espacios.");
    } else {
        listaAmigos.push(nombre);                               // Agrego el nombre al arreglo listaAmigos
        ulListaAmigos.innerHTML += `<li>${nombre}</li>`;        // Despliego lista 
        inputAmigo.value = "";                                  // Limpio el campo después de agregar
    }
}


/* Utilización de:
Random() da un numero aleatorio que al multiplicarlo por X numero (ejemplo si X=5) nos dará un rango de X veces, si tengo 5 me entrgea números del 0 hasta el 5
Floor() con esto obtenemos la parte entera
length es la propiedad que da la cantidad de elementos que tiene la lista y es con este número que podre jugar para determinar el sorteo */

function sortearAmigo() {
    if (listaAmigos.length <3){
        alert("Debes ingresar al menos 3 nombres de amigos para poder jugar");
    } else {
        const random = Math.floor(Math.random() * listaAmigos.length );  // esta variable contendrá el número aleatorio de mi lista de integrantes
        const amigoSecreto = listaAmigos[random];
        ulResultado.innerHTML =  `<h2><li>El amigo secreto es: ${amigoSecreto}</li></h2>`;
    }
}

