function delay(ms, callback) {
    setTimeout(callback, ms);
}

function validarEntrada(texto, valoresPermitidos) {
    while (!valoresPermitidos.includes(texto)) {
        texto = prompt(`Valor inválido. Ingresa uno de los siguientes: ${valoresPermitidos.join(", ")}`);
    }
    return texto;
}