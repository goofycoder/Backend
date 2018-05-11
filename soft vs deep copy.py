import copy

a = [1,2,3]
b = [4,5]
c = [a,b]


d = copy.deepcopy(c)    # deep copy
e = copy.copy(c)        # shallow copy
f = c

print(id(d[0]) == id(c[0]))    # False

print(id(e[0]) == id(c[0]))    # True

print(id(c)==id(f))            # True
