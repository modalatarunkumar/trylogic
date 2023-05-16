# a=int(input("Enter a number"))
for x in range(1,5):
    for y in range(1,x):
        print("* ",end="")
    for yy in range(x,5):
        print("  ",end="")
    for z in range(x,5):
        print("* ",end="")
    for zz in range(1,x):
        print("  ",end="")
    print()
print("End")
# a=int(input("Enter a number"))
