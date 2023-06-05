import java.util.Scanner;
class LinkedList{
    int data;
    LinkedList next=null;
    
}
class LinkedListImpl{
    LinkedList start,temp;
    void insertAtEnd(){
        
    }
    void insertAtFirst(){
        Scanner s=new Scanner(System.in);
        System.out.print("Enter a value: ");
        LinkedList node = new LinkedList();
        node.data=s.nextInt();
        if(start==null)
        start=node;
        else{
            node.next=start;
            start=node;
        }
    }
    void display(){
        if(start==null)
        System.out.print("List is empty");
        else{
            temp=start;
            while(temp!=null){
                System.out.print(temp.data+"   ");
                temp=temp.next;
            }
        }
    }
    void menu(){
        System.out.print("\n1-> Insert\n2-> delete\n3->display\n0-> exit\nEnter your choice: ");
    }
    public static void main(String args[]){
        int choice;
        LinkedListImpl li=new LinkedListImpl();
        Scanner s=new Scanner(System.in);
        while(true){
            li.menu();
            choice=s.nextInt();
            switch(choice){
                case 1:li.insertAtFirst();break;
                case 3:li.display();break;
                case 0:System.exit(0);break;
                default:System.out.print("default");break;
            }
        }
    }
}