
#1.Using the input function, ask the user for a string. The string must be 10 characters long.
# 	If it’s less than 10 characters, print a message which states “string not long enough”.
#   If it’s more than 10 characters, print a message which states “string too long”.
#   If it’s 10 characters, print a message which states “perfect string” and continue the exercise.

# 2.Then, print the first and last characters of the given text.

# 3.Using a for loop, construct the string character by character: Print the first character, then the second, then the third, until the full string is printed. For example:
# 	The user enters "HelloWorld"
# 	Then, you have to construct the string character by character
# 	H
# 	He
# 	Hel
# 	... etc
# 	HelloWorld


# 4. Bonus: Swap some characters around then print the newly jumbled string (hint: look into the shuffle method). For example:
# Hlrolelwod

#1
my_string = input('Give me a string ')
string_length = len(my_string)

if string_length < 10:
	print('string not long enough')
elif string_length > 10:
	print('string too long')
else:
	print('perfect string')

#2
first_character = my_string[0]
last_character = my_string[string_length - 1]
print(f'first character: {first_character}, last character {last_character}')

#3
new_string = ""
for i in my_string:
	new_string += i
	print(new_string)

#4
import random

my_list = []
for i in my_string:
	my_list.append(i)

random.shuffle(my_list)

new_string = ""
for i in my_list:
	new_string += i

print(new_string)
