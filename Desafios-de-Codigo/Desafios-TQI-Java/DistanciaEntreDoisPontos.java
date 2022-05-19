import java.util.Scanner;

public class DistanciaEntreDoisPontos{
	
    public static void main(String[] args){
    	Scanner teclado = new Scanner(System.in);
    	
        double x1 = teclado.nextDouble();
        double y1 = teclado.nextDouble();
        double x2 = teclado.nextDouble();
        double y2 = teclado.nextDouble();
        
        double distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)); // Calcula o valor da distância usando a fórmula
        
        System.out.println(String.format("%.4f", distancia)); // Com 4 casas após o ponto decial
    }
	
}