# list unpacking

a,b,c, *other, d = [1,2,3,4,5,6,7,8,9]

print(a) #1
print(b) #2
print(c) #3
print(other) #[4,5,6,7,8]
print(d) #9

# list- set - dictionary comprehensions

my_list = [char for char in 'hello']
my_list2 = [num for num in range(0,100)]
my_list3 = [num**2 for num in range(0,100)]
my_list4 = [num**2 for num in range(0,100) if num % 2 == 0]

# for char in 'hello':
# 	my_list.append(char)

print(my_list)
print('-' * 50)
print(my_list2)
print('-' * 50)
print(my_list3)
print('-' * 50)
print(my_list4)










