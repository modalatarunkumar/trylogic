class MatrixImpl{
    int i,j,n,sum=0,a[][],b[][],c[][];
    MatrixImpl(int n){
        this.n=n;
    }
    void init(){
        a=new int[n][n];
        b=new int[n][n];
        c=new int[n][n];
    }
    void assign(){
        assignind(a);assignind(b);
    }
    void assignind(int a[][]){
        for(i=0;i<n;i++)
        for(j=0;j<n;j++)
        a[i][j]=++sum;
    }
    void add(){
        for(i=0;i<n;i++)
        for(j=0;j<n;j++)
        c[i][j]=a[i][j]+b[i][j];
    }
    void prnt(){
        System.out.println("Values of a:");
        prntind(a);
        System.out.println("Values of b:");
        prntind(b);
        System.out.println("Values of c:");
        prntind(c);
        
    }
    void prntind(int a[][]){
        for(i=0;i<n;i++){
            for(j=0;j<n;j++)
            System.out.print(a[i][j]+" ");
            System.out.println();
        }
    }
}
class MatrixAdd1{
    public static void main(String []args){
        MatrixImpl m=new MatrixImpl(5);
        m.init();
        m.assign();
        m.add();
        m.prnt();
    }
}