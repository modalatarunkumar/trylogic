import java.util.Scanner;
class Sum
{
public static void main(String args[])
{
int a,b;
System.out.print("Enter a number:");
Scanner s=new Scanner(System.in);
a=s.nextInt();
System.out.print("Enter second number");
b=s.nextInt();
System.out.print("Addition: "+(a+b));
}
}