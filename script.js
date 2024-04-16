
let numerosDaSorte = [37, 14, 26, 5, 94, 87];

function avaliarNumerosDaSorte(numeros) {
    for (let i = 0; i < numeros.length; i++) {
        let numero = numeros[i]; // Pegar o número atual
        if (numero % 2 === 0 && numero < 50) {
            console.log(numero + ' é par e menor que 50');
        } else if (numero < 50) {
            console.log(numero + ' é menor que 50');
        } else {
            console.log(numero + ' é maior que 50');
        }
    }
}
avaliarNumerosDaSorte(numerosDaSorte);
