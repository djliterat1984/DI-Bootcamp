# Exercise 1
# Instructions
# Write a script that inserts an item at a defined index in a list.
from math import sqrt


my_list = [1,2,3,4,5,6,7]
def insert_item(item, index):
	my_list.insert(index,item)
	print(my_list)

insert_item(99,8)

# Exercise 2
# Instructions
# Write a script that counts the number of spaces in a string.
space = ' '

def count_spaces(item):
	print(str(item).count(space))

count_spaces(' fjksdhdskdjls fsL  ')

# Exercise 3
# Instructions
# Write a script that calculates the number of upper case letters and lower case letters in a string.

def type_char_count(item:str):
	uppercase_count = 0
	lowercase_count = 0
	for i in item:
		if i.isupper():
			uppercase_count += 1
		elif i.islower():
			lowercase_count += 1

	return (uppercase_count, lowercase_count)

types_count =type_char_count('Users/chaim/.vscode/ extensions/')
print(types_count[0])
print(types_count[1])

# Exercise 4
# Instructions
# Write a function to find the sum of an array without using the built in function:

def my_sum(items):
	len_items = len(items)
	i = 0
	sum_items = 0
	while i < len_items:
		sum_items += items[i]
		i+=1
	
	return sum_items

print(my_sum([1,5,4,2]))
#     >>>12


# Exercise 5
# Instructions
# Write a function to find the max number in a list

def find_max(my_list:list):
	return max(my_list)

print(find_max([0,1,3,50]))
#     >>>50


# Exercise 6
# Instructions
# Write a function that returns factorial of a number

def factorial(number:int):
	factorial = 1
	while number > 0:
		factorial *= number
		number -= 1
	
	print(factorial)

factorial(4)
#     >>>24


# Exercise 7
# Instructions
# Write a function that counts an element in a list (without using the count method):


def list_count(my_list, item):
	counter = 0
	for i in my_list:
		if i == item:
			counter += 1

	print(counter)

list_count(['a','a','t','o'],'a')
#     >>>2


# Exercise 8
# Instructions
# Write a function that returns the L2-norm (square root of the sum of squares) of the sum of a list:

def norm(my_list):
	subtotal = 0
	for i in my_list:
		subtotal+= i*i
	print(sqrt(subtotal))

norm([1,2,2])
#     >>>3


# Exercise 9
# Instructions
# Write a function to find if an array is monotonic (sorted either ascending of descending)

def is_mono(my_list):
	ascending = False
	descending = False
	i=1
	while i < len(my_list):
		if my_list[i] > my_list[i-1]:
			descending = True
			if ascending == True:
				break
		elif my_list[i] < my_list[i-1]:
			ascending = True
			if descending == True:
				break
		
		i+=1
	
	return ascending != descending
		
print(is_mono([7,6,5,5,2,0]))
#     >>>True

print(is_mono([2,3,3,3]))
#     >>>True

print(is_mono([1,2,0,4]))
#     >>>False


# Exercise 10
# Instructions
# Write a function that prints the longest word in a list.

def get_longest_word(my_list):	
	i=1
	longest = ''
	while i < len(my_list):
		if len(my_list[i]) > len(my_list[i-1]):
			longest = my_list[i]
		elif len(my_list[i]) < len(my_list[i-1]):
			longest = my_list[i-1]
		else:
			longest = my_list[i]
		
		i +=1

	print(longest)	

get_longest_word(['hola','hola','adj'])

# Exercise 11
# Instructions
# Given a list of integers and strings, put all the integers in one list, and all the strings in another one.

str_list = []
int_list = []
def get_str_and_int_lists(my_list:list):
	for i in my_list:
			if type(i) == str:
				str_list.append(i)	
			else:
				int_list.append(i)

get_str_and_int_lists(['hola',1,'3',3,6,8])
print(str_list)
print(int_list)

# Exercise 12
# Instructions
# Write a function to check if a string is a palindrome:

def is_palindrome(word):
	i = 0
	length = len(word)
	while i < length/2:
		if i+1 >= length/2 and word[i] == word[length-(i+1)]:
			i+=1
			return True
		else:
			if word[i] != word[length-(i+1)]:
				return False
			i+=1
	
print(is_palindrome('radar'))
#     >>>True   012345678   0-8 1-7 2-6 3-5 4       0123456789  0-9 1-8 2-7 3-6 4-5   len -(i+1)

print(is_palindrome('John'))
#     >>>False


# Exercise 13
# Instructions
# Write a function that returns the amount of words in a sentence with length > k:

def sum_over_k(sentence:str, min):
	words = sentence.split()
	return list(filter(lambda x: len(x)>min ,words))

sentence = 'Do or do not there is no try'
k=2
print(sum_over_k(sentence,k))
print(len(sum_over_k(sentence,k)))
# 3


# Exercise 14
# Instructions
# Write a function that returns the average value in a dictionary (assume the values are numeric):

def dict_avg(values):
	return sum(values)/len(values)	

print(dict_avg({'a': 1,'b':2,'c':8,'d': 1}.values()))
#     >>>3


# Exercise 15
# Instructions
# Write a function that returns common divisors of 2 numbers:

def common_div(num1,num2):
	min_value = min(num1,num2)
	common_values = []
	while min_value > 1:
		if num1%min_value == 0 and num2%min_value == 0:
			common_values.append(min_value)
		min_value -= 1
	common_values.sort()
	return common_values

print(common_div(10,20))
#     >>>[2,5,10]


# Exercise 16
# Instructions
# Write a function that test if a number is prime:

def is_prime(num):
	i = num -1
	while i >= 1:
		if i == 1:
			return True
		if num%i == 0:
			return False
		i -= 1

print(is_prime(11))
#     >>>True


# Exercise 17
# Instructions
# Write a function that prints elements of a list if the index and the value are even:

def weird_print(values:list):
	index = 0
	succes_values = []
	for i in values:
		if i%2 == 0 and index%2 == 0:
			succes_values.append(i)
		index +=1
	
	return succes_values

print(weird_print([1,2,2,3,4,5]))
#     >>>[2,4]


# Exercise 18
# Instructions
# Write a function that accepts an undefined number of keyworded arguments and return the count of different types:

def type_count(**kargs):
	int_values = 0 
	str_values = 0 
	float_values = 0 
	bool_values = 0
	for v in kargs.values():
		if type(v) == int:
			int_values += 1
		elif type(v) == str:
			str_values += 1
		elif type(v) == float:
			float_values += 1
		elif type(v) == bool:
			bool_values += 1
		
	return int_values,str_values,float_values, bool_values

print(type_count(a=1,b='string',c=1.0,d=True,e=False))
#     >>>int: 1, str:1 , float:1, bool:2


# Exercise 19
# Instructions
# Write a function that mimics the builtin .split() method for strings.
# By default the function uses whitespace but it should be able to take an argument for any character and split with that argument.

def split2(string, separator=" "):
	split_list = []
	word = ''
	for i in string:
		if i == separator:
			split_list.append(word)
			word = ''
		else:
			word += i
	split_list.append(word)
	return split_list

print(split2('hola como estas, todo bien?'))
print(('hola como estas, todo bien?').split())
print(split2('hola como estas, todo bien?',',') )
print(('hola como estas, todo bien?').split(','))

# Exercise 20
# Instructions
# Convert a string into password format.
# Example:
# input : "mypassword"
# output: "***********"

def convert_to_password(password):
	return '*'*len(password)

print(convert_to_password('mypassword'))