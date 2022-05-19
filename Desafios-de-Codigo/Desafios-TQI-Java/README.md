# Desafios de Código - Desafios TQI - Java

## Proibido a entrada de menores!

### Desafio 1

O objetivo deste desafio é resolvê-lo utilizando o seu conhecimento sobre Arrays, uma estrutura de dados que armazena uma coleção de dados em um bloco de memória.

Você está desenvolvendo um sistema para um local de eventos, neste local, é necessário que a entrada seja permitida apenas para pessoas acima de 18 anos. Faça um programa para ler um número N, a idade de N pessoas. Depois disso, coloque a idade mínima permitida  para se entrar no local, conforme exemplo.


Retorne às idades de quem não puder entrar.

### Entrada

4
18
22
15
50

### Saída

Não poderão entrar as idades: 

4
15


```java
import java.util.*;
 
    public class DIO{

	//complete o código para que ele funcione corretamente
 
        public static void main(String[] args) {
           
	    //a classe Scanner auxilia na leitura dos dados de entrada
            Scanner scan = new Scanner(System.in);
 
            int N= scan.nextInt();
            String string = scan.nextLine();
	    
	    
	    //quebra string em várias substrings a partir de um caracter
            String[] s = string.split(" ");
 
            double[] idade = new double[N];
 
            for (int i = 0; i < N; i++)
            {
                idade[i] =          ;
            }
 
 
            System.out.println("Nao poderao entrar as idades: ");
            for (int i = 0; i < N; i++)
            {
                if (           )
                {
                    System.out.println(         );
                }
 
            }
                   
        }
    }
```

## Quem pagará a conta

### Desafio 2

Em uma lanchonete, Ale e Juliana estão brigando por quem vai pagar a conta. Para dar um fim à discussão, a garçonete propõe um desafio e, quem tivesse mais acertos, não pagaria a conta. Ela lançou o seguinte desafio: dado a seguinte somatória abaixo, informe o resultado, com uma quantidade de termos no mesmo:

S = 1 - 1 + 1 - 1 + 1 - 1 + 1 - 1 ...

Agora é com você! Desenvolva um programa que, dada uma quantidade de termos, informe o resultado da somatória acima.

### Entrada

Um número inteiro C será informado, que será a quantidade de casos de teste. Cada caso de teste inicia com um número inteiro N (1 ≤ N ≤ 1000), indicando a quantidade de termos da soma.

### Saída

Para cada caso de teste imprima um número S, que é o resultado da soma dos N termos da expressão.

```java
import java.io.IOException;
import java.util.*;
 

public class DIO{
 
    //complete o código para que ele funcione corretamente

    public static void main(String[] args) throws IOException {
 
	//a classe Scanner auxilia na leitura dos dados de entrada
        Scanner input = new Scanner(System.in);
        
        while(input.hasNext()){
            int entrada = input.nextInt();

            if (           ) {
            System.out.println();
        } else {
            System.out.println();
            }
        }
    }
}

```


## Distância Entre Dois Pontos

### Desafio 3

Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, mostrando 4 casas decimais após a vírgula, conforme a fórmula:

Distancia =

### Entrada

O arquivo de entrada contém duas linhas de dados. A primeira linha contém dois valores de ponto flutuante: x1 y1 e a segunda linha contém dois valores de ponto flutuante x2 y2.

### Saída

Calcule e imprima o valor da distância segundo a fórmula fornecida, com 4 casas após o ponto decimal.

```java
// implemente sua solução aqui

```

## De Quem é a Vez?

### Desafio 4

O jogo PAR ou ÍMPAR vem decidindo o destino de pessoas ao longo de décadas. As regras são simples: dois jogadores informam um número e se a soma desses números for par o jogador que escolheu PAR ganha e vice-versa. Em um jogo que as crianças do bairro estão jogando, eles não conseguem decidir quem será o próximo a escolher as regras da brincadeira. Para solucionar esse problema, você foi chamado.

Basicamente a brincadeira só poderá ser jogada de dois em dois jogadores e para escolher o próximo jogador uma das  crianças pediu sua ajuda para desenvolver um programa que, dado o nome dos jogadores, suas respectivas escolhas PAR ou IMPAR e os números, informe quem foi o vencedor.

### Entrada

A primeira linha de entrada contém um número inteiro QT (1 ≤ QT ≤ 100), indicando a quantidade de casos de teste que vem a seguir. Cada caso de teste contém duas linhas. Na primeira linha será informado o nome do jogador 1 seguido de sua escolha, “PAR” ou “IMPAR” e logo após, o nome do jogador 2 seguido de sua escolha, “PAR” ou “IMPAR”. Na segunda linha de entrada, contém 2 números inteiros N (1 ≤ N ≤ 10⁹) e M (1 ≤ M ≤ 10⁹), representando respectivamente os números escolhidos pelo jogador 1 e pelo jogador 2. É garantido que a escolha (PAR ou IMPAR) do jogador 1 será diferente da escolha (PAR ou IMPAR) do jogador 2 e que o nome dos jogares são formados somente por letras e não ultrapassarão 100 caracteres.

### Saída

Para cada caso de teste, imprima uma única linha contendo o nome do jogador vencedor.

```java
// TODO: complete os espaços em branco com sua solução para o problema
// Abaixo segue um exemplo de código que você pode ou não utilizar
import java.util.*;

public class DIO{
	 
    public static void main(String[] args) {

		//a classe Scanner auxilia na leitura dos dados de entrada
		Scanner leitor = new Scanner(System.in);

		int QT = Integer.parseInt(leitor.nextLine());

		String linha1[], linha2[], nome1, escolha1, nome2, escolha2;
		int N, M;
		
		for (int i = 0; i < QT; i++) {

			//quebra string em várias substrings a partir de um caracter
			linha1 = leitor.nextLine().split(" ");
			linha2 = leitor.nextLine().split(" ");
			

			N = Integer.parseInt(linha2[0]);
			M = Integer.parseInt(         );
		
			nome1 = linha1[0];
			escolha1 = linha1[1];

			nome2 = linha1[ ];
			escolha2 = linha1[ ];
			
			 
			if (((N + M) %       && escolha1.equalsIgnoreCase("PAR")) ||
			    ((N + M) %       &&                                 )) System.out.println(    );
			else System.out.println(nome2);
		}
    }
	
}
```

## Duas Notas

### Desafio 5

Gilberto é um famoso vendedor de esfirras na região. Porém, apesar de todos gostarem de suas esfirras, ele só sabe dar o troco com duas notas, ou seja, nem sempre é possível receber o troco certo. Para facilitar a vida de Gil, escreva um programa para ele que determine se é possível ou não devolver o troco exato utilizando duas notas.

As notas disponíveis são: 2, 5, 10, 20, 50 e 100.


### Entrada

A entrada deve conter o valor inteiro N da compra realizada pelo cliente e, em seguida, o valor inteiro M pago pelo cliente (N < M ≤ 104). A entrada termina com N = M = 0.

### Saída

Seu programa deverá imprimir "possible" se for possível devolver o troco exato ou "impossible" se não for possível.

```java
import java.io.IOException;
import java.util.Scanner;

public class DIO {

    //complete o código para que ele funcione corretamente

    public static void main(String[] args) throws IOException {
	//a classe Scanner auxilia na leitura dos dados de entrada
    	Scanner leitor = new Scanner(System.in);

    	while (true) {
        	int N = leitor.nextInt();
        	int M = 
        	int troco = M - N;
        	int[] notas = {2, 5, 10, 20, 50, 100};
        	boolean possivel = false;
        	
        	if (N == 0 && M == 0) break;
        	
    		for (int i = 0; i < 6; i++) {
    			for (int j = 0; j < 6; j++) {
    				if (                )              ;
    			}
    		}
    		
    		if (        ) System.out.println("possible");
    		else                 ("impossible");
    	}
    }
	
}

```