// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let input = gets();

let qtdEntradas = parseInt(input);
let nivelEnergia;

for (let i = 0; i < qtdEntradas; i++) {
    input = gets();
    nivelEnergia = parseInt(input);

    if (nivelEnergia <= 8000) {
        print("Inseto!");
    } else {
        print("Mais de 8000!");
    }
}
