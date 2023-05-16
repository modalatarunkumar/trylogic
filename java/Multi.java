import java.lang.*;
import java.util.*;
class A extends Thread{
    public void run(){
        for(int i=1;i<11;i++)
        System.out.println("Call from A"+i);
    }
}
class B extends Thread{
    public void run(){
        for(int i=1;i<11;i++)
        System.out.println("Call from B"+i);
    }
}
class Multi{
    public static void main(String []args){
        A a=new A();
        B b=new B();
        a.start();b.start();
    }

}