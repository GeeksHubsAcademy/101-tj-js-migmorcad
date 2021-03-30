function clasificaElementos(enteros) {
    let positivos = [];
    let negativos = [];
    let ceros = [];

    enteros.forEach(number => {
        if (number > 0) {
            positivos.push(number)
        } else if (number < 0) {
            negativos.push(number);
        } else {
            ceros.push(number);
        }
    })

    let resultado = [(positivos.length / enteros.length).toFixed(4), (negativos.length / enteros.length).toFixed(4), (ceros.length / enteros.length).toFixed(4)];
    return resultado;
}
module.exports = clasificaElementos;