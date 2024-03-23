document.addEventListener("DOMContentLoaded", function() {
    let startButton = document.getElementById("startButton");
    let guessText = document.getElementById("guess");

    startButton.addEventListener("click", function() {
        let min = 1;
        let max = 100;
        let intentos = 0;

        function adivinar() {
            let numero = Math.floor((min + max) / 2);
            intentos++;
            guessText.textContent = "¿Es " + numero + "?";

            let confirmacion = confirm("¿Es " + numero + " el número en el que estás pensando?");

            if (confirmacion) {
                alert("¡Adiviné tu número! El número en el que estabas pensando es: " + numero + ".\nIntentos: " + intentos);
                location.reload(); // Recargar la página para reiniciar el juego
            } else {
                let respuesta = prompt("¿Es Mayor o Menor que " + numero + "?");

                if (respuesta === "Mayor") {
                    min = numero + 1;
                    adivinar();
                } else if (respuesta === "Menor") {
                    max = numero - 1;
                    adivinar();
                } else {
                    alert("Responder con 'Mayor' o 'Menor'.");
                    adivinar();
                }
            }
        }

        adivinar();
    });
});