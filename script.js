let numero = 95;
let nombre = prompt("Bienvenido al juego Adivina el número ¿Cuál es tu nombre?")

function ingresarNumero() {
    let ingresar = false;

    for (let i = 5; i > 0; i--) {
        let adivinaElNumero = parseInt(prompt(nombre + "," + " Adivine el numero. \n1 PISTA 1: El numero está entre el 1 y el 100, tienes " + (i + 1) + " intentos."));
        if (adivinaElNumero === numero) {
            alert("Correcto!! Haz adivinado el numero, felicidades.");
            ingresar = true;
            break;
        } else if (i === 4) {
            alert("PISTA 2: El número está más cerca del 100 que del 1.");
        }else if (i === 2){
            alert("PISTA FINAL: Edad de Mirtha Legrand.")
        } else {
            alert("Error te quedan " + i + " intentos.");
        } 
    }

    return ingresar;
}

ingresarNumero()