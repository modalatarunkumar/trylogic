"""x='information'
y=''
n=109
for j in range(len(x)):
    for i in range(26):
        if(n+i==ord(x[j])):
            y+=chr(n-i+1)
        elif(n-i==ord(x[j])):
            y+=chr(n+i+1)
print(y)"""
"""x=input("Enter a string").lower()
y=''
n=109
for j in range(len(x)):
    for i in range(26):
        if(n+i==ord(x[j])):
            y+=str(n+i+1-97)+'-'
        elif(n-i==ord(x[j])):
            y+=str(n-i+1-97)+'-'
print(y[:-1])"""
a=input().lower()
y=''
c=''
for i in range(len(a)):
    if 97<=ord(a[i])<=122:
        y+=str(ord(a[i])-96)+'-'
    else:
        y=y[:-1]+a[i]
print(y[:-1])