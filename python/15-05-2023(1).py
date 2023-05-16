li=[5,9,2,5,6]
sum=0
for i in range(0,len(li)):
    for j in range(i,len(li)):
        temp=0
        for k in range(i,j+1):
            print(li[k],end=" ")
            temp+=li[k]
        if temp>sum:
            sum=temp
        print()
print("sum ",sum)