a=[3,2,1,5,6,7,8]
small=1
c=[]
# for i in range(len(li)):
#     if(small<li[i]):
#         small=li[i]
for i in range(min(a),max(a)+1):
    if i not in a:
        c=c+[i]
print(c[0])