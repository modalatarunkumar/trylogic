class InheritanceImpl{
    public static void main(String []args){
        B b=new B();
        b.printa();
    }
}
class A{
    int a=20;
    A(){
        System.out.println("constructor in a");
    }
    
}
class B extends A{
    B(){
        System.out.println("Constructor in b");
    }
    void printa(){
        System.out.println("a value"+a);
    }
}