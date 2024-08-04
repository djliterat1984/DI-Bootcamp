# Exercise 1 : Hello World
# Print the following output in one line of code:

# Hello world
# Hello world
# Hello world
# Hello world

print("Hello world\n"*4)

# Exercise 2 : Some Math
# Write code that calculates the result of: (99^3)*8 (meaning 99 to the power of 3, times 8).

print(99**3*8)

# Exercise 3 : What Is The Output ?

# Predict the output of the following code snippets:
False # >>> 5 < 3
True # >>> 3 == 3
False # >>> 3 == "3"
TypeError # >>> "3" > 3
False # >>> "Hello" == "hello"

# Exercise 4 : Your Computer Brand
# Instructions
# 1.Create a variable called computer_brand which value is the brand name of your computer.
# 2.Using the computer_brand variable print a sentence that states the following: "I have a <computer_brand> computer".

computer_brand = "Apple"
print(f"I have a {computer_brand} computer")

# Exercise 5 : Your Information
# Instructions
# 1.Create a variable called name, and set it’s value to your name.
# 2.Create a variable called age, and set it’s value to your age.
# 3.Create a variable called shoe_size, and set it’s value to your shoe size.
# 4.Create a variable called info and set it’s value to an interesting sentence about yourself. The sentence must contain all the variables created in parts 1, 2 and 3.
# 5.Have your code print the info message.
# 6.Run your code

name = "Diego Literat"
age = 40
shoe_size = 42
info = f"My name is {name}, I'm {age} years old and my shoe size is {shoe_size}"

print(info)

# python3 excerciseXP.py

# Exercise 6 : A & B
# Instructions
# Create two variables, a and b.
# Each variable value should be a number.
# If a is bigger then b, have your code print Hello World.

a = 20
b = 10

if(a > b):
	print("Hello World")

# Exercise 7 : Odd Or Even
# Instructions
# Write code that asks the user for a number and determines whether this number is odd or even.

number = int(input("Enter a number"))

if(number%2 == 0):
	print("The number is even")
else:
	print("The number is odd")

# Exercise 8 : What’s Your Name ?
# Instructions
# Write code that asks the user for their name and determines whether or not you have the same name, print out a funny message based on the outcome.

my_name = "Diego"
user_name = input("Enter your name")

if(user_name == my_name):
	print("Yes!!!! You are the best, you have the same name as me")
else:
	print("Great name!!! I always wanted to have your name")
	
# Exercise 9 : Tall Enough To Ride A Roller Coaster
# Instructions
# Write code that will ask the user for their height in centimeters.
# If they are over 145cm print a message that states they are tall enough to ride.
# If they are not tall enough print a message that says they need to grow some more to ride.

user_height = int(input("Give me your height(in centimeters)"))

if(user_height > 145):
	print("You are tall enough to ride")
else:
	print("You need to grow some more to ride")

