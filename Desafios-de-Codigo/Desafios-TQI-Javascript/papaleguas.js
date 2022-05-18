// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let input = gets();

let qtdEntradas = parseInt(input);
let melhor = 999;

for (let i = 0; i < qtdEntradas; i++) {

    input = gets();
    let tempo = parseFloat(input);

    if (tempo < melhor) { // Se tempo é menor que o atual melhor
        melhor = tempo; // Melhor tempo passa a ser o atual
    }

}
print(melhor);