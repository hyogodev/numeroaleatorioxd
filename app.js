
let numeroMaximoPosible = 100; // Declaramos la variable que contendrá el número máximo posible
let numeroMinimoPosible = 1; // Declaramos la variable que contendrá el número mínimo posible
let numeroSecreto = Math.floor (Math.random()*numeroMaximoPosible)+1; // Declaramos la variable que contendrá el número secreto
let numeroUsuario = 0;
let intentos = 1;
// let palabra = "intento";
let maximosIntentos = 3;


while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Indica un número del ${numeroMinimoPosible} al ${numeroMaximoPosible} por favor: `)); // Solicitamos al usuario que introduzca un número
 
    if (numeroUsuario == numeroSecreto) { // Si el número secreto es igual al número del usuario
        alert(`¡Felicidades! Has adivinado el número secreto, que es: ${numeroSecreto} en un total de ${intentos} ${intentos == 1 ? "intento." : "intentos."}`); // Mostramos un mensaje de felicitación
    } else { 
        if (numeroUsuario > numeroSecreto) {
            alert("¡Lo siento! El número secreto es menor");
        } else {
            alert("¡Lo siento! El número secreto es mayor");
        }
        // intentos = intentos + 1;
        intentos++;
        //palabra = "intentos";
        if (intentos > maximosIntentos) {
            alert(`¡Lo siento! Has superado el máximo de ${maximosIntentos} intentos. Haz perdido el juego. El número era: ${numeroSecreto}`);
            break;
        }
    }
}