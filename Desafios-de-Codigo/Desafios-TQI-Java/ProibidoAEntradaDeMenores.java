import java.util.*;
 
public class DIO{

	    public static void main(String[] args) {

	        Scanner scan = new Scanner(System.in);

	        int N= scan.nextInt();
	        
	        String string = scan.nextLine(); 	    
	   
	        //String[] s = string.split(" ");     
	      

	        double[] idade = new double[N];

	        for (int i = 0; i < N; i++)
	        {
	            string = scan.nextLine();	            
	            idade[i] = Integer.parseInt(string);	
	        }

	        System.out.println("Nao poderao entrar as idades: ");

	        for (int i = 0; i < N; i++)
	        {
	            if(idade[i] < 18) {
	            	System.out.println((int) idade[i]);
	            }
	        }
	               
	    }
	}