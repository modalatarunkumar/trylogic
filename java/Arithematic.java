import java.util.Scanner;
class Arithematic{
public static void main(String []args){
System.out.println("Enter two numbers:");
Scanner s=new Scanner(System.in);
int a=s.nextInt();
int b=s.nextInt();
System.out.println("Addition:"+(a+b));
System.out.println("Subtraction:"+(a-b));
System.out.println("Multiplication:"+(a*b));
System.out.println("division:"+(a/b));
System.out.println("Modulus(Remainder):"+(a%b));
}
}