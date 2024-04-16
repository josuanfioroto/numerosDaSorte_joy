// Array de números da sorte
let numerosDaSorte = [37, 14, 26, 5, 94, 87];

// Função para avaliar e imprimir frases com base nos números
function avaliarNumerosDaSorte(numeros) {
    // Loop através de cada número no array
    for (let i = 0; i < numeros.length; i++) {
        let numero = numeros[i]; // Pegar o número atual
        
        // Verificar as condições e imprimir a frase apropriada
        if (numero % 2 === 0 && numero < 50) {
            console.log(numero + ' é par e menor que 50');
        } else if (numero < 50) {
            console.log(numero + ' é menor que 50');
        } else {
            console.log(numero + ' é maior que 50');
        }
    }
}

// Chamar a função com o array numerosDaSorte
avaliarNumerosDaSorte(numerosDaSorte);
