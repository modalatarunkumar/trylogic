class Test{
    int a,b;
    Test(int a,int b){
        this.a=a;this.b=b; 
    }
    void meth(Test ob){
        ob.a*=2;ob.b/=2;
    }
}
class ArgumentPassing{
    public static void main(String args[]){
        Test t=new Test(15,20);
        System.out.println("Before call "+t.a+"  "+t.b);
        t.meth(t);
        System.out.println("After call "+t.a+"  "+t.b);
        
    }
}