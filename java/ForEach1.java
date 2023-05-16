class ForEach1{
    public static void main(String []args){
        int a[][]=new int[10][10],sum=0;
        for(int i=0;i<a.length;i++){
            for(int j=0;j<a[i].length;j++){
                a[i][j]=++sum;
            }
        }
        for(int i[]:a){
            for(int j:i){
                System.out.print(j+" ");
            }
            System.out.println();
        }
    }
}