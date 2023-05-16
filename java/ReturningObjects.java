class Test{
    int a;
    Test(int a){
        this.a=a;
    }
    Test incrByTen(){
        Test temp=new Test(a+10);
        return temp;
    }
    }
class ReturningObjects{
    public static void main(String []args){
    Test test=new Test(20);
    System.out.println("Before Test "+test.a);
    Test ob;
    ob=test.incrByTen();
    System.out.println("After Test "+ob.a);
    ob=ob.incrByTen();
    System.out.println("One More Increment "+ob.a);
    }
}