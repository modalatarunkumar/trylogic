import java.util.Scanner;
class LinkedList{
	int num;
	LinkedList next=null;
}
class SingleList{
	LinkedList start=null,temp=null;
	void menu(){
		System.out.print("\n1->Insert at first\n2->Delete at first\n3->Display\n0->Exit\nEnter the choice:");
	}
	void insertatfirst(){
		System.out.print("\nEnter value to insert:");
		Scanner s=new Scanner(System.in);
		LinkedList newNode=new LinkedList();
		newNode.num=s.nextInt();
		newNode.next=start;
		start=newNode;
	}
	void deleteatfirst(){
		if(start==null)
			System.out.print("Deletion not possible(List is empty)");
		else{
			temp=start;
			System.out.print("Element deleted is \'"+temp.num+"\'");
			start=start.next;
			temp.next=null;
		}
	}
	void display(){
		if(start==null)
			System.out.print("List is Empty");
		else{
			temp=start;
			while(temp!=null){
			System.out.println(temp.num);
			temp=temp.next;
			}
		}
	}
	public static void main(String []args){
		
		SingleList list=new SingleList();
			while(true){
			Scanner s=new Scanner(System.in);
			list.menu();
			int choice=s.nextInt();
			switch(choice)
			{
				case 1:list.insertatfirst();break;
				case 3:list.display();break;
				case 2:list.deleteatfirst();break;
				case 0:System.exit(0);break;
			}
		}
	
	}
	
}