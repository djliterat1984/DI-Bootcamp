# map

my_list = [1,2,3]
your_list = [10,20,30]
their_list = [5,4,3]

def multiply_by2(item):
	return item * 2

print(list(map(multiply_by2, my_list)))
# [2, 4, 6]
print(my_list)
# [1, 2, 3]

# filter

def only_odd(item):
	return item % 2	!= 0
	
print(list(filter(only_odd, my_list)))
# [1, 3]
print(my_list)
# [1, 2, 3]

# zip

print(list(zip(my_list,your_list,their_list)))
# [(1, 10, 5), (2, 20, 4), (3, 30, 3)]
print(my_list)
# [1, 2, 3]

# reduce

from functools import reduce

def accumulator(acc,item):
	return acc + item

print(reduce(accumulator, my_list,0))
