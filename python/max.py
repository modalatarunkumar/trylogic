name='78 jhansi89 67jhan98mahesh786jhan8 90 300'
k=0
a=[]
nn=''
n=name.split(' ')
for i in range(len(n)):
    if(n[i].isdigit()):
        k+=int(n[i])
print(k)
print(n)
for i in range(0,9):
    nn+=str(name.split(str(i)))
print(nn)