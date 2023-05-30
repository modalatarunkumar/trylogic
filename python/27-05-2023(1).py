li=[0,1,2,3,4,5,6,7,8,9,10]
max=0
for k in range(0,len(li)):
    for i in range(k,len(li)):
        for j in range(k,i+1):
            print(li[j],end=" ")
        print()