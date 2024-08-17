# Exercise 1: Birthday Look-up
# Instructions
# 1.Create a variable called birthdays. Its value should be a dictionary.
# 2.Initialize this variable with birthdays of 5 people of your choice. For each entry in the dictionary, the key should be the person’s name, and the value should be their birthday. Tip : Use the format “YYYY/MM/DD”.
# 3.Print a welcome message for the user. Then tell them: “You can look up the birthdays of the people in the list!”“
# 	1.Ask the user to give you a person’s name and store the answer in a variable.
# 	2.Get the birthday of the name provided by the user.
# 	3.Print out the birthday with a nicely-formatted message.

# -----------------------------------------
birthdays = {
	"diego": '1984/06/21',
	"liby": '1984/04/02',
	'iaakov': '2012/01/29',
	'miju': '2013/03/15',
	'iair': '2014/03/14',	
}

print("Welcome to birthday page!!!")
print("You can look up the birthdays of the people in the list!")
# -----------------------------------------

# Exercise 2: Birthdays Advanced
# Instructions
# 1.Before asking the user to input a person’s name print out all of the names in the dictionary.
# 2.If the person that the user types is not found in the dictionary, print an error message (“Sorry, we don’t have the birthday information for <person’s name>”)

# -----------------------------------------
for key, value in birthdays.items():
	print(f'{key}: {value}')

want_add_new_birthday = input("Do you want to add new birthday? YES-NO: ")

if want_add_new_birthday.lower() == "yes":
	new_name = input("Enter the name: ")
	date = input("Enter the date of birthday with this format YYYY/MM/DD: ")
	birthdays[new_name] = date

name = input("Give me the name to get the birthday")

if name in birthdays.keys():
	birthday = birthdays[name.lower()]
	print(f"Super!!! your birthday date is: {birthday}")
else:
	print(f'Sorry, we don\'t have the birthday information for {name}')

# -----------------------------------------

# Exercise 3: Add Your Own Birthday
# Instructions
# 1.Add this new code: before asking the user to input a person’s name to look up, ask the user to add a new birthday:
# 	1.Ask the user for a person’s name – store it in a variable.
# 	2.Ask the user for this person’s birthday (in the format “YYYY/MM/DD”) - store it in a variable.
# 	3.Now add this new data into your dictionary.
# 2.Make sure that if the user types any name that exists in the dictionary – including the name that he entered himself – the corresponding birthday is found and displayed.

# made in exercise 2.

# Exercise 4: Fruit Shop
# Instructions
items = {
    "banana": 4,
    "apple": 2,
    "orange": 1.5,
    "pear": 3
}
# 1.Using the dictionary above, each key-value pair represents an item and its price - print all the items and their prices in a sentence.

for key, value in items.items():
	print(f'- {key}: ${value}', end=' ')
	print('')

# 2.Using the dictionary below, each value are dictionaries containing both the price and the amount of items in stock -
#   write some code to calculate how much it would cost to buy everything in stock.
items2 = {
    "banana": {"price": 4 , "stock":10},
    "apple": {"price": 2, "stock":5},
    "orange": {"price": 1.5 , "stock":24},
    "pear": {"price": 3 , "stock":1}
}

total_cost_product = {}
for key,value in items2.items():
	total_cost_product[key] = int(value['price'] * value['stock'])
	print(f'{key}: {total_cost_product[key]}')
	


