# Exercise 1: Formula
# Instructions
# 1.Write a program that calculates and prints a value according to this given formula:
# Q = Square root of [(2 * C * D)/H]
# 2.Following are the fixed values of C and H:
# C is 50.
# H is 30.
# 3.Ask the user for a comma-separated string of numbers, use each number from the user as D in the formula and return all the results
# For example, if the user inputs: 100,150,180
# The output should be:

# 18,22,24

import math

C = 50
H = 30

str_number_list = input("give me 3 numbers separated by comma: ")
number_list = str_number_list.split(",")

for D in number_list:
	Q = round(math.sqrt((2 * C * int(D))/H))
	print(Q)

# Exercise 2 : List of integers
# Instructions
# Given a list of 10 integers to analyze. For example:

#     [3, 47, 99, -80, 22, 97, 54, -23, 5, 7] 
#     [44, 91, 8, 24, -6, 0, 56, 8, 100, 2] 
#     [3, 21, 76, 53, 9, -82, -3, 49, 1, 76] 
#     [18, 19, 2, 56, 33, 17, 41, -63, -82, 1]
# 1.Store the list of numbers in a variable.
# 2.Print the following information:
# 	a. The list of numbers – printed in a single line
# 	b. The list of numbers – sorted in descending order (largest to smallest)
# 	c. The sum of all the numbers
# 3.A list containing the first and the last numbers.
# 4.A list of all the numbers greater than 50.
# 5.A list of all the numbers smaller than 10.
# 6.A list of all the numbers squared – eg. for [1, 2, 3] you would print “1 4 9”.
# 7.The numbers without any duplicates – also print how many numbers are in the new list.
# 8.The average of all the numbers.
# 9.The largest number.
# 10.The smallest number.
# 11.Bonus: Find the sum, average, largest and smallest number without using built in functions.
# 12.Bonus: Instead of using pre-defined lists of numbers, ask the user for 10 numbers between -100 and 100. Ask the user for an integer between -100 and 100 – repeat this question 10 times. Each number should be added into a variable that you created earlier.
# 13.Bonus: Instead of asking the user for 10 integers, generate 10 random integers yourself. Make sure that these random integers are between -100 and 100.
# 14.Bonus: Instead of always generating 10 integers, let the amount of integers also be random! Generate a random positive integer no smaller than 50.
# 15.Bonus: Will the code work when the number of random numbers is not equal to 10?

list_numbers2 = [3, 47, 99, -80, 22, 97, 54, -23, 5, 7, 22]
numbers = ""

for n in list_numbers2:
	numbers += str(n) + ", "

print(numbers)
list_numbers2.sort(reverse=True)

numbers = ""
for n in list_numbers2:
	numbers += str(n) + ", "
print(numbers)
print(sum(list_numbers2))

first_number = list_numbers2[0]
last_number = list_numbers2[len(list_numbers2) - 1]
first_and_last = [first_number, last_number]

print(first_and_last)

numbers_greater_50 = []
numbers_smaller_10 = []
squared_numbers = []

for n in list_numbers2:
	if n > 50:
		numbers_greater_50.append(n)

	if n < 10:
		numbers_smaller_10.append(n)
	
	squared_numbers.append(n*n)

print("4 ",numbers_greater_50)
print("5 ",numbers_smaller_10)
print("6 ",squared_numbers)
print("7 ",set(list_numbers2))
print("7 ",len(set(list_numbers2)))
print("8 ",sum(list_numbers2)/len(list_numbers2))
print("9 ",max(list_numbers2))
print("10 ",min(list_numbers2))



# Exercise 3: Working on a paragraph
# Find an interesting paragraph of text online. (Please keep it appropriate to the social context of our class.)
# Paste it to your code, and store it in a variable.
# Let’s analyze the paragraph. Print out a nicely formatted message saying:
# How many characters it contains (this one is easy…).
# How many sentences it contains.
# How many words it contains.
# How many unique words it contains.
# Bonus: How many non-whitespace characters it contains.
# Bonus: The average amount of words per sentence in the paragraph.
# Bonus: the amount of non-unique words in the paragraph.

text = "Las fuerzas rusas afirmaron que habían “desbaratado los intentos” ucranianos “de penetrar profundamente” en esta región fronteriza. El gobernador regional ruso, Alexéi Smirnov, reconoció no obstante que las fuerzas ucranianas tomaron el control de 28 localidades e indicó que la operación abarca una zona de 40 kilómetros de ancho y 12 kilómetros de profundidad en territorio ruso. Según cálculos realizados el martes por la agencia de noticias AFP a partir de datos del Instituto para el Estudio de la Guerra (ISW), que se basa en fuentes rusas, las tropas ucranianas han avanzado 800 km2 en la región de Kursk. A modo de comparación, Rusia ganó 1.360 km2 en territorio ucraniano desde el 1 de enero de 2024, según cálculos de la AFP basados en datos de ISW."

characters = len(text)
sentences = len(text.split('.'))
words = len(text.split(' '))
unique_words = len(set(text.split(' ')))
# 8
characters_without_non_whitespaces = len(text.replace(" ", ""))

print(f"This text has {characters} characters, {sentences} sentences, {words} words, {unique_words} unique words and characters without non-whitespaces {characters_without_non_whitespaces}" )

# Exercise 4 : Frequency Of The Words
# Instructions
# Write a program that prints the frequency of the words from the input.

# Suppose the following input is supplied to the program:
# New to Python or choosing between Python 2 and Python 3? Read Python 2 or Python 3.

# Then, the output should be:

#     2:2
#     3.:1
#     3?:1
#     New:1
#     Python:5
#     Read:1
#     and:1
#     between:1
#     choosing:1
#     or:2
#     to:1

text = "New to Python or choosing between Python 2 and Python 3? Read Python 2 or Python 3."
list_words = text.split(" ")
my_dict_words = {}

for word in list_words:
	if word in my_dict_words.keys():
		new_value = my_dict_words[word] + 1
		my_dict_words.update({word: new_value})
	else:
		my_dict_words.update({word: 1})

for key, value in my_dict_words.items():
	print(key,":",value)