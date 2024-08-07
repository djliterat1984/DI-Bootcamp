# Challenge 1
# Ask the user for a number and a length.
# Create a program that prints a list of multiples of the number until the list length reaches length.
# Examples

# number: 7 - length 5 ➞ [7, 14, 21, 28, 35]

# number: 12 - length 10 ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

# number: 17 - length 6 ➞ [17, 34, 51, 68, 85, 102]

number = int(input("Give me a number "))
length_list = int(input("Give me a length "))
i = 1
multiples_list = []

while i <= length_list:
	result = number * i
	multiples_list.append(result)
	i+=1

print(multiples_list)

# Challenge 2
# Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.
# Examples

# user's word : "ppoeemm" ➞ "poem"

# user's word : "wiiiinnnnd" ➞ "wind"

# user's word : "ttiiitllleeee" ➞ "title"

# user's word : "cccccaaarrrbbonnnnn" ➞ "carbon"
# Notes
# Final strings won’t include words with double letters (e.g. “passing”, “lottery”).


word = input("Give me a word ")
new_word = ""
count_letters = 0

for i in word:
	if count_letters == 0:
		new_word += i
		count_letters = 1
	elif i != new_word[count_letters - 1]:
		new_word += i
		count_letters += 1

print(new_word)