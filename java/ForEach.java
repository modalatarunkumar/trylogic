class ForEach{
    public static void main(String []args){
        int a[][]=new int[3][3],sum=1;
        for(int i=0;i<3;i++){
            for(int j=0;j<3;j++){
                a[i][j]=sum++;
            }
        }
        for(int i[]:a){
            for(int j:i){
                System.out.println(j);
            }
        }
    }
}