// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar


let lines = gets().split("\n");

var numberOfMatches = parseInt(lines.shift);

let n = parseInt(lines.shift());
let totalMatches = 0;

while (n > 1) {
    if (n % 2 == 0) { // Se numero atual de equipes for par
        numberOfMatches = n / 2; // Total de n/2 partidas são jogadas
        n = n / 2; // n/2 equipes avançam 

    } else { // Caso numero atual da equipe seja ímpar
        numberOfMatches = (n - 1) / 2; // Total de (n-1)/2 partidas são jogadas
        n = (n - 1) / 2 + 1; // Equipes que avançam para a próxima rodada

    }
    totalMatches = totalMatches + numberOfMatches; // Número de partidas jogadas até que o vencedor foi decicido
}
print(totalMatches);
