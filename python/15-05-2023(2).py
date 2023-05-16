frst='ab'
scnd='pqrst'
strng=''
if(len(frst)>len(scnd)):
    for i in range(0,len(scnd)):
        strng+=frst[i]+scnd[i]
    strng+=frst[i+1:]
elif len(frst)<len(scnd):
    for i in range(0,len(frst)):
        strng+=frst[i]+scnd[i]
    strng+=scnd[i+1:]
else:
    for i in range(0,len(frst)):
        strng+=frst[i]+scnd[i]
print(strng)