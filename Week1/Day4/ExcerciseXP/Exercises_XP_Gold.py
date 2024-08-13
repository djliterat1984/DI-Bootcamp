# Exercise 1: Concatenate lists
# Instructions
# Write code that concatenates two lists together without using the + sign.

myList1 = ["juego", "silla", "mesa"]
myList2 = ["auto", "mochila", 'laptop']

myList1.append(myList2)

print(myList1)

print("------------------------------------------------------------------------------")

# Exercise 2: Range of numbers
# Instructions
# Create a loop that goes from 1500 to 2500 and prints all multiples of 5 and 7.

range_numbers = range(1500, 2500)
i = 1500
number_list = []

while i <= 2500:
	if i%5 == 0 or i%7 == 0:
		number_list.append(i)
	
	i += 1

print(number_list)

print("------------------------------------------------------------------------------")

# Exercise 3: Check the index
# Instructions
# Using this variable

names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

# Ask a user for their name, if their name is in the names list print out the index of the first occurence of the name.
# Example: if input is 'Cortana' we should be printing the index 1

name = input("Give me your name: ")

if name in names:
	index = names.index(name)
	print(index)

print("------------------------------------------------------------------------------")

# Exercise 4: Greatest Number
# Instructions
# Ask the user for 3 numbers and print the greatest number.
#     Test Data
#     Input the 1st number: 25
#     Input the 2nd number: 78
#     Input the 3rd number: 87

#     The greatest number is: 87

number1 = int(input("give me a number "))
number2 = int(input("give me a number "))
number3 = int(input("give me a number "))

# list_numbers = [number1, number2, number3]
# list_numbers.sort()
if number1 > number2:
	if number1 > number3:
		print(f"The greatest number is: {number1}")
	else:
		print(f"The greatest number is: {number3}")
else:
	if number2 > number3:
		print(f"The greatest number is: {number2}")
	else:
		print(f"The greatest number is: {number3}")
		
print("------------------------------------------------------------------------------")

# Exercise 5: The Alphabet
# Instructions
# Create a string of all the letters in the alphabet
# Loop over each letter and print a message that contains the letter and whether its a vowel or a consonant.

alphabet = "abcdefghijklmnopqrstuvwxyz"

for l in alphabet:
	if l == "a" or l == "e" or l == "i" or l == "o" or l == "u":
		print(f"{l} is vowel")
	else:
		print(f"{l} is consonant")


print("------------------------------------------------------------------------------")	

# Exercise 6: Words and letters
# Instructions
# Ask a user for 7 words, store them in a list named words.
# Ask the user for a single character, store it in a variable called letter.
# Loop through the words list and print the index of the first appearence of the letter variable in each word of the list.
# If the letter doesn’t exist in one of the words, print a friendly message with the word and the letter.

str_words = input("Write 7 words and separate them with space: ")
words = []
word = ""
length_word = len(str_words)
counter = 0

for i in str_words:
	counter += 1
	if i == ' ':
		words.append(word)
		word = ""
	elif counter == length_word:
		word += i
		words.append(word)
	else:
		word += i

print(words)

letter = input('Give me a sigle character: ')

for w in words:
	if w.__contains__(letter):
		print(w.index(letter))
	else:
		print(f'Unfortunately the letter {letter} is not in the word {w}')

print("------------------------------------------------------------------------------")

# Exercise 7: Min, Max, Sum
# Instructions
# Create a list of numbers from one to one million and then use min() and max() to make sure your list actually starts at one and ends at one million. Use the sum() function to see how quickly Python can add a million numbers.

range_numbers2 = range(1, 1000001)

print(min(range_numbers2))
print(max(range_numbers2))

sum_numbers = 0

total_sum = sum(range_numbers2)
print(total_sum)
	 
print("------------------------------------------------------------------------------")

# Exercise 8 : List and Tuple
# Instructions
# Write a program which accepts a sequence of comma-separated numbers. Generate a list and a tuple which contain every number.
# Suppose the following input is supplied to the program: 34,67,55,33,12,98

# Then, the output should be:

# ['34', '67', '55', '33', '12', '98']
# ('34', '67', '55', '33', '12', '98')

n = "34,67,55,33,12,98"
list_formatted = []
item = ""

for i in n:
	if i == ',':
		list_formatted.append(item)
		item=""
	else:
		item += i

print(list_formatted)

tuple_comma = tuple(list_formatted)
print(tuple_comma)

print("------------------------------------------------------------------------------")

# Exercise 9 : Random number
# Instructions
# Ask the user to input a number from 1 to 9 (including).
# Get a random number between 1 and 9. Hint: random module.
# If the user guesses the correct number print a message that says Winner.
# If the user guesses the wrong number print a message that says better luck next time.
# Bonus: use a loop that allows the user to keep guessing until they want to quit.
# Bonus 2: on exiting the loop tally up and display total games won and lost.

r_number = int(input("Give me a number from 1 to 9: "))

import random
random_number = random.randrange(1,9)

if r_number == random_number:
	print("Winner")
else:
	print('Better luck next time')





	