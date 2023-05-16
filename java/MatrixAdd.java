class MatrixAdd{
    public static void main(String []args){
        int a[][]=new int[3][3],b[][]=new int[3][3],c[][]=new int[3][3];
        int i,j,res=0;
        for(i=0;i<3;i++){
            for(j=0;j<3;j++){
                a[i][j]=++res;
            }
        }
        for(i=0;i<3;i++){
            for(j=0;j<3;j++){
                b[i][j]=++res;
            }
        }
        System.out.println("The matrix a is");
        for(i=0;i<3;i++){
        for(j=0;j<3;j++)
            System.out.print(a[i][j]+" ");
        System.out.println();
        }
        System.out.println("The matrix b is");
        for(i=0;i<3;i++){
        for(j=0;j<3;j++)
            System.out.print(b[i][j]+" ");
        System.out.println();
        }
        for(i=0;i<3;i++)
        for(j=0;j<3;j++)
        c[i][j]=a[i][j]+b[i][j];
        System.out.println("The matrix c is");
        for(i=0;i<3;i++){
        for(j=0;j<3;j++)
            System.out.print(c[i][j]+" ");
        System.out.println();
        }
        
    }
}