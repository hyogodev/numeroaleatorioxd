let numeroSecreto = 6; // Declaramos la variable que contendrá el número secreto
let numeroUsuario = 0;

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Indica un número del 1 al 10 por favor: "); // Solicitamos al usuario que introduzca un número
  if (numeroUsuario == numeroSecreto) { // Si el número secreto es igual al número del usuario
        alert(`¡Felicidades! Has adivinado el número secreto, que es: ${numeroSecreto}`); // Mostramos un mensaje de felicitación
    } else { 
        if (numeroUsuario > numeroSecreto) {
            alert("¡Lo siento! El número secreto es menor");
        } else {
            alert("¡Lo siento! El número secreto es mayor");
        }
        //alert("¡Lo siento! No has adivinado el número secreto");
    }
}