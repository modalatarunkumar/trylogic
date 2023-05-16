import java.util.Scanner;
class Table{
public static void main(String []args){
int a;
Scanner s=new Scanner(System.in);
a=s.nextInt();
System.out.println("Entered number:"+a);
for(int i=0;i<a;i++)
System.out.println(s.nextInt());
}
}