let cronometro;
let segundos = 0;
let minutos = 0;
let horas = 0;
let cronometroFuncionando = false; // Variable boolean cuyo propósito es evitar que las funciones hagan algo dependiendo de su estado.

const cronometroDisplay = document.getElementById('cronometro');

function iniciarCronometro() {
    if (!cronometroFuncionando) {
        cronometro = setInterval(actualizarCronometro, 1000); // Ejecución cada segundo
        cronometroFuncionando = true;
    }
}

function pararCronometro() {
    if (cronometroFuncionando) {
        clearInterval(cronometro);
        cronometroFuncionando = false;
    }
}

function reiniciarCronometro() {
    pararCronometro();
    segundos = 0;
    minutos = 0;
    horas = 0;
    const segundosStr = segundos < 10 ? '0' + segundos : segundos; // Uso del operador ternario para que siempre muestre 2 dígitos.
    const minutosStr = minutos < 10 ? '0' + minutos : minutos; // Uso del operador ternario para que siempre muestre 2 dígitos.
    const horasStr = horas < 10 ? '0' + horas : horas; // Uso del operador ternario para que siempre muestre 2 dígitos.

    cronometroDisplay.textContent = horasStr + ':' + minutosStr + ':' + segundosStr;
}

function actualizarCronometro() {
    segundos++;
    if (segundos === 60) {
        segundos = 0;
        minutos++;
        if (minutos === 60) {
            minutos = 0;
            horas++;
        }
    }

    const segundosStr = segundos < 10 ? '0' + segundos : segundos; // Uso del operador ternario para que siempre muestre 2 dígitos.
    const minutosStr = minutos < 10 ? '0' + minutos : minutos; // Uso del operador ternario para que siempre muestre 2 dígitos.
    const horasStr = horas < 10 ? '0' + horas : horas; // Uso del operador ternario para que siempre muestre 2 dígitos.

    cronometroDisplay.textContent = horasStr + ':' + minutosStr + ':' + segundosStr;
}