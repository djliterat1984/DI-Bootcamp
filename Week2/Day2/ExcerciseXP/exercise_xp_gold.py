# Exercise 1 : When will I retire ?
# Instructions
# The point of the exercise is to check if a person can retire depending on their age and their gender.
# Note : Let’s say retirement age is 67 for men, and 62 for women (born after April, 1947).

# 1.Create a function get_age(year, month, day)
#   Hard-code the current year and month in your code (there are better ways of doing this, but for now it will be enough.)
# 2.After calculating the age of a person, the function should return the age (the age is an integer).
# 3.Create a function can_retire(gender, date_of_birth).
# 	It should call the get_age function (with what arguments?) in order to receive an age.
# 	Now it has all the information it needs in order to determine if the person with the given gender and date of birth is able to retire or not.
# 4.Calculate. You may need to do a little more hard-coding here.
# 5.Return True if the person can retire, and False if he/she can’t.

# def get_age(year,month,day):
# 	current_year = 2024
# 	current_month = 9
# 	age = current_year - year
# 	if month > current_month:
# 		age -= 1
# 	return age

# def can_retire(gender, date_of_birth):
# 	date_info = str(date_of_birth).split('/')
# 	year = int(date_info[0])
# 	month = int(date_info[1])
# 	day = int(date_info[2])

# 	age = get_age(year,month,day)

# 	if gender == 'm':
# 		return age >= 67
# 	else:
# 		return age >= 62

# gender = input("Enter your Gender, f or m: ")
# date_of_birth = input("Enter your birthday in format yyyy/mm/dd: ")
# retire = can_retire(gender, date_of_birth)	

# if retire:
# 	print("You can retire.")
# else:
# 	print("You can't retire.")

# Some Hints

# 1.Ask for the user’s gender as “m” or “f”.
# 2.Ask for the user’s date of birth in the form of “yyyy/mm/dd”, eg. “1993/09/21”.
# 3.Call can_retire to get a definite value for whether the person can or can’t retire.
# 4.Display a message informing the user whether they can retire or not.
#	  As always, test your code to ensure it works.


# Exercise 2 : Sum
# Instructions
# 1.Write a function that accepts one parameter (an int: X) and returns the value of X+XX+XXX+XXXX.
# Example:
# If X=3, the output when calling our function should be 3702 (3 + 33 + 333 + 3333)

# Hint: treating our number as a int or a str at different points in our code may be helpful

import random


def sum_number(num):
	return num + int(str(num)*2) + int(str(num)*3) + int(str(num)*4)

number = int(input("Enter a number: "))
total = sum_number(number)
print(total)

# Exercise 3 : Double Dice
# Instructions
# 1.Create a function that will simulate the rolling of a dice. Call it throw_dice. It should return an integer between 1 and 6.

def throw_dice():
	return random.randrange(1,7)

# 2.Create a function called throw_until_doubles.
# 	1.It should keep throwing 2 dice (using your throw_dice function) until they both land on the same number, ie. until we reach doubles.
# 		For example: (1, 2), (3, 1), (5,5) → then stop throwing, because doubles were reached.
# 	2.This function should return the number of times it threw the dice in total. In the example above, it should return 3.

def throw_until_doubles():
	num1 = 0
	num2 = 1
	throws = 0
	while num1 != num2:
		num1 = throw_dice()
		num2 = throw_dice()
		throws += 1
	
	return throws
# 3.Create a main function.
# 	It should throw doubles 100 times (ie. call your throw_until_doubles function 100 times), and store the results of those function calls (in other words, how many throws it took until doubles were thrown, each time) in a collection. (What kind of collection? Read below to understand what we will need the data for, and this should help you decide which data structure to use).

def main():
	i = 1
	throw_list = []
	while i <=100:
		throw = throw_until_doubles()
		throw_list.append(throw)
		i+=1

# 4.After the 100 doubles are thrown, print out a message telling the user how many throws it took in total to reach 100 doubles.
	total_throws = 0
	for t in throw_list:
		total_throws +=t
	
	print(f"Total throws: {total_throws}")

# 5.Also print out a message telling the user the average amount of throws it took to reach doubles. Round this off to 2 decimal places.
	average = float(total_throws/len(throw_list))
	print(f'Average throws to reach doubles: {average}')

main()

# 6.For example:

# 	1.If the results of the throws were as follows (your code would do 100 doubles, not just 3):
# 		1.(1, 2), (3, 1), (5, 5)
# 		2.(3, 3)
# 		3.(2, 4), (1, 2), (3, 4), (2, 2)

# 	2.Then my output would show something like this:
# 		1.Total throws: 8
# 		2.Average throws to reach doubles: 2.67.