import java.util.Scanner;
class LinkedList
{
int value;
LinkedList next;
}
class Main
{
LinkedList start,temp;
void insertAtFirst(){
int value;
Scanner s=new Scanner(System.in);
System.out.print("\nEnter the value to be added to list:");value=s.nextInt();
LinkedList temp1=new LinkedList();
temp1.value=value;
temp1.next=null;
if(start==null)
start=temp1;
else{
temp1.next=start;
start=temp1;
}
}
void insertAtEnd(){
int value;Scanner s=new Scanner(System.in);
System.out.print("\nEnter the value to added at end:");
value=s.nextInt();LinkedList temp1=new LinkedList();
temp1.value=value;
temp1.next=null;
if(start==null)
start=temp1;
else{
temp=start;
while(temp.next!=null)
temp=temp.next;
temp.next=temp1;
}
}
void deleteAtFirst(){
if(start==null)
System.out.println("List is empty delete not possible");
else if(start.next==null)
start=null;
else{
temp=start;
start=start.next;
temp.next=null;
}//else
}

void deleteAtEnd(){
if(start==null)
System.out.println("List is empty delete not possible");
else if(start.next==null)
start=null;
else{
temp=start;
while(temp.next.next!=null)
temp=temp.next;
temp.next=null;
}//else

}
void display(){
if(start==null)
System.out.println("List is empty");
else{
temp=start;
while(temp!=null){
System.out.printf("%2d",temp.value);
temp=temp.next;
}
}
}
void index()
{
System.out.print("\n1-> insert at first\n2->insert at end\n3->deleteAtFirst\n4->deleteAtEnd\n7->display\n0-> exit\nEnter:");
}
public static void main(String args[]){
int a;
Scanner s = new Scanner(System.in);
Main m=new Main();
while(true){
m.index();a=s.nextInt();
switch(a){
case 1: m.insertAtFirst();break;
case 2: m.insertAtEnd();break;
case 3: m.deleteAtFirst();break;
case 4: m.deleteAtEnd();break;
case 7: m.display();break;
case 0: System.exit(0);break;
}//switch close
}//while close
}//main method close
}//Main class close