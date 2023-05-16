class DefConsDemo{
    public int myInt;
    public float myFloat;
    public double myDouble;
    public DefConsDemo(){
        System.out.println("I am initializing with my own choice.");
        myInt = 10;
        myFloat = 0.123456f;
        myDouble = 9.8765432;
    }
}
class DefaultConstructorCaseStudy{
    public static void main(String []args){
        System.out.println("Demonstration-2. Comparison between user-defiend and Java-provided default constructors");
        DefConsDemo obDef=new DefConsDemo();
        System.out.println("myInt= "+obDef.myInt);
        System.out.println("myFloat= "+obDef.myFloat);
        System.out.println("myDouble= "+obDef.myDouble);
        
    }
}