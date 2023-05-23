a='ainformation'
i=0
b=''
if(ord(a[i])<=109):
    b+=chr(ord(a[i])+13-ord(a[i])+109)
print(b)