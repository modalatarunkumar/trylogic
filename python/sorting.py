li=[8,7,1,2,5]
for i in range(len(li)):
    for j in range(i+1,len(li)):
        if(li[i]>li[j]):
            li[i],li[j]=li[j],li[i]
print(li)