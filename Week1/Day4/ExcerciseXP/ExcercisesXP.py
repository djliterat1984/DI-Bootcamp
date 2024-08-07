# Exercise 1 : Favorite Numbers
# Instructions
# 1.Create a set called my_fav_numbers with all your favorites numbers.
# 2.Add two new numbers to the set.
# 3.Remove the last number.
# 4.Create a set called friend_fav_numbers with your friend’s favorites numbers.
# 5.Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.

# 1
my_fav_numbers = set((1,10,21))
print(my_fav_numbers)

# 2
first_new_number = 34
my_fav_numbers.add(first_new_number)
second_new_number = 56
my_fav_numbers.add(second_new_number)
print(my_fav_numbers)

# 3
my_fav_numbers.remove(second_new_number)
print(my_fav_numbers)

# 4
friend_fav_numbers = set((45,67,23,89,60))

# 5
our_fav_numbers = set()
our_fav_numbers.update(my_fav_numbers)
our_fav_numbers.update(friend_fav_numbers)
print(our_fav_numbers)


# Exercise 2: Tuple
# Instructions
# Given a tuple which value is integers, is it possible to add more integers to the tuple?

# NO, it is imposibble. Only if you convert the tuple to list, you can do it.

# Exercise 3: List
# Instructions
# Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];

# 1.Remove “Banana” from the list.
# 2.Remove “Blueberries” from the list.
# 3.Add “Kiwi” to the end of the list.
# 4.Add “Apples” to the beginning of the list.
# 5.Count how many apples are in the basket.
# 6.Empty the basket.
# 7.Print(basket)

basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# 1 
basket.pop(0)
print(basket)

# 2
basket.pop()
print(basket)

# 3
basket.append("Kiwi")
print(basket)

# 4
basket.insert(0,"Apples")
print(basket)

# 5
apples_count = basket.count("Apples")
print(apples_count)

# 6
basket.clear()

# 7
print(basket)

# Exercise 4: Floats
# Instructions
# 1.Recap – What is a float? What is the difference between an integer and a float?
# 2.Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 
# (don’t hard-code the sequence).
# 3.Can you think of another way to generate a sequence of floats?

# 1. Float is a number with decimal numbers. The difference between integer and 
# float is that an integer number doesn't have decimal numbers.

# 2
numbers = []
count = 1.5

while count <= 5:
	numbers.append(count)
	count += 0.5

# 3
numbers = []
count = 0
if count <=5:
	numbers.append(count) #1.5
	count += 0.5
	if count <=5:
		numbers.append(count) #2
		count += 0.5
		if count <=5:
			numbers.append(count) #2.5
			count += 0.5
			if count <=5:
				numbers.append(count) #3
				count += 0.5
				if count <=5:
					numbers.append(count) #3.5
					count += 0.5
					if count <=5:
						numbers.append(count) #4
						count += 0.5
						if count <=5:
							numbers.append(count) #4.5
							count += 0.5
							if count <=5:
								numbers.append(count) #5
								count += 0.5

# Exercise 5: For Loop
# Instructions
# 1.Use a for loop to print all numbers from 1 to 20, inclusive.
# 2.Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.

# 1
numbers_range = range(1,21)
for n in numbers_range:
	print(n)

# 2
for n in numbers_range:
	if n % 2 == 0:
		print(n)

# Exercise 6 : While Loop
# Instructions
# Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.

my_name = "diego"
user_name = input("What's your name? ").lower()
while my_name != user_name:
	user_name = input("What's your name? ")

# Exercise 7: Favorite fruits
# Instructions
# 1.Ask the user to input their favorite fruit(s) (one or several fruits).
# 2.Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
# 3.Store the favorite fruit(s) in a list (convert the string of words into a list of words).
# 4.Now that we have a list of fruits, ask the user to input a name of any fruit.
# 5.If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
# 6.If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.

# 1 

fruits = input('What are your favorites fruits (one or several). Please separate them with space. eg. "apple mango cherry".')

# fruits_list = fruits.split(" ")

fruits_list2 = []

fruit = ""
for w in fruits:
	if w != " ":
		fruit += w
	else:
		fruits_list2.append(fruit)
		fruit = ""

any_fruit = input("Please write the name of any fruit")

if any_fruit in fruits_list2:
	print("You chose one of your favorite fruits! Enjoy!")
else: 
	print("You chose a new fruit. I hope you enjoy")
	

# Exercise 8: Who ordered a pizza ?
# Instructions
# Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
# As they enter each topping, print a message saying you’ll add that topping to their pizza.
# Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).

topping = input("Give me pizza topping")
total = 0
PIZZA_PRICE = 10
TOPPING_PRICE = 2.5
toppings_list = []

while topping != "quit":
	toppings_list.append(topping)
	print('you will add that topping to their pizza.')
	total += TOPPING_PRICE
	topping = input("Give me another pizza topping")

for t in toppings_list:
	print(t)

total += PIZZA_PRICE

print(f"Total: {total}")

# Exercise 9: Cinemax
# Instructions
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.

# Ask a family the age of each person who wants a ticket.

# Store the total cost of all the family’s tickets and print it out.

# A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
# Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
# At the end, print the final list.

total_price = 0
is_restricted = False
list_names = ['Diego', 'Alex', 'Tomy', 'Andy']


if is_restricted:
	for name in list_names:
		age = int(input("Give me your age"))
		if 16 <= age <= 21:
			list_names.remove(name)

	print(list_names)
else:
	age = int(input("Give me your age"))
	if 3 <= age <= 12:
		total_price += 10
	elif age > 12:
		total_price += 15 

	print(f"the total cost is {total_price}")


# Exercise 10 : Sandwich Orders
# Instructions
# Using the list below :

# sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

# The deli has run out of pastrami, use a while loop to remove all occurrences of “Pastrami sandwich” from sandwich_orders.
# We need to prepare the orders of the clients:
# Create an empty list called finished_sandwiches.
# One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.
# After all the sandwiches have been made, print a message listing each sandwich that was made, such as:
# I made your tuna sandwich
# I made your avocado sandwich
# I made your egg sandwich
# I made your chicken sandwich

sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
finished_sandwiches = []
is_finished = True

# it's impossible to remove all ocurrencies with while loop, I can only remove one ocurrency.
for sandwich in sandwich_orders:
	if sandwich == "Pastrami sandwich":
		sandwich_orders.remove(sandwich)
	else:
		if is_finished:
			finished_sandwiches.append(sandwich)
			sandwich_orders.remove(sandwich)

if len(sandwich_orders) == 0:
	for f in finished_sandwiches:
		print(f'I made your {sandwich}')
		










