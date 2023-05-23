class ob:
    def __init__(self,a,b):
        self.b=b
        self.a=a
    def prnt(self):
        print(self.a,' ',self.b)

k=ob(10,20)
k.prnt()
for i in range(21):
    for j in range(21):
        k=ob(i,j)
        k.prnt()