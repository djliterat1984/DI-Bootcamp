# Exercise 1 : Convert lists into dictionaries
# Instructions
# Convert the two following lists, into dictionaries.
# Hint: Use the zip method
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
# Expected output:
# {'Ten': 10, 'Twenty': 20, 'Thirty': 30}

for item in zip(keys,values):
	print(item)

'--------------------------------------------------------------------------'

# Exercise 2 : Cinemax #2
# Instructions
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.

# Given the following object:

family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

# How much does each family member have to pay ?

# Print out the family’s total cost for the movies.
# Bonus: Ask the user to input the names and ages instead of using the provided family variable (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).

total = 0

for x,y in family.items():
	if 3 <= y <= 12:
		total +=10
	elif y > 12:
		total += 15

print(f"The total to pay is: {total}")

'--------------------------------------------------------------------------'

# Exercise 3: Zara
# Instructions
# Here is some information about a brand.
# name: Zara 
# creation_date: 1975 
# creator_name: Amancio Ortega Gaona 
# type_of_clothes: men, women, children, home 
# international_competitors: Gap, H&M, Benetton 
# number_stores: 7000 
# major_color: 
#     France: blue, 
#     Spain: red, 
#     US: pink, green


# 2. Create a dictionary called brand which value is the information from part one (turn the info into keys and values).
# The values type_of_clothes and international_competitors should be a list. The value of major_color should be a dictionary.
# 3. Change the number of stores to 2.
# 4. Print a sentence that explains who Zaras clients are.
# 5. Add a key called country_creation with a value of Spain.
# 6. Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.
# 7. Delete the information about the date of creation.
# 8. Print the last international competitor.
# 9. Print the major clothes colors in the US.
# 10. Print the amount of key value pairs (ie. length of the dictionary).
# 11. Print the keys of the dictionary.
# 12. Create another dictionary called more_on_zara with the following details:

# creation_date: 1975 
# number_stores: 10 000

# 13. Use a method to add the information from the dictionary more_on_zara to the dictionary brand.
# 14. Print the value of the key number_stores. What just happened ?

# 2
brand = {
	'name': 'Zara', 
	'creation_date': 1975, 
	'creator_name': 'Amancio Ortega Gaona',
	'type_of_clothes': [
		'men', 
		'women', 
		'children', 
		'home'
	], 
	'international_competitors': [
		'Gap', 
		'H&M', 
		'Benetton'
	],
	'number_stores': 7000, 
	'major_color':{ 
		'France': 'blue', 
		'Spain': 'red', 
		'US': [
			'pink', 
			'green'
		]
	}
}

# 3
brand['number_stores'] = 2

# 4
print(f'Zara\'s clients are {brand["type_of_clothes"][0]}, {brand["type_of_clothes"][1]} and {brand["type_of_clothes"][2]}')

#5
brand['country_creation'] = 'Spain'

# 6
# if international_competitors in brand:
# 	competitors = list(brand['international_competitors'])
# 	competitors.append("Desigual")
# 	print(brand['international_competitors'])

# 7
del brand['creation_date']

# 8
int_comp = list(brand['international_competitors'])
last_item = int_comp[len(int_comp) - 1]

# 9
us_major_color = list(brand['major_color']['US'])

for color in us_major_color:
	print(color)

# 10
amount_items = len(brand.items())
print(amount_items)

# 11
keys = brand.keys()

for key in keys:
	print(key)

# 12
more_on_zara = {
	'creation_date': 1975,
	'number_stores': 10000
}

# 13
brand.update(more_on_zara)

# 14
print(brand['number_stores'])

'--------------------------------------------------------------------------'

# Exercise 4 : Disney characters
# Instructions
# Use this list :

users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
# Analyse these results :

# #1/

# >>> print(disney_users_A)
# {"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}

# #2/

# >>> print(disney_users_B)
# {0: "Mickey",1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}

# #3/ 

# >>> print(disney_users_C)
# {"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}


# 1.Use a for loop to recreate the 1st result. Tip : don’t hardcode the numbers.
# 2.Use a for loop to recreate the 2nd result. Tip : don’t hardcode the numbers.
# 3.Use a method to recreate the 3rd result. Hint: The 3rd result is sorted alphabetically.
# 4.Only recreate the 1st result for:
# 5.The characters, which names contain the letter “i”.
# 6.The characters, which names start with the letter “m” or “p”.

# 1
disney_users_A = {}

for user in users:
	disney_users_A[user] = users.index(user)

print(disney_users_A)

# 2
disney_users_B = {}
for user in users:
    disney_users_B[users.index(user)] = user

print(disney_users_B)

# 3
disney_users_c = {}
users.sort()
for user in users:
	disney_users_c[user] = users.index(user)

print(disney_users_c)

# 4
disney_users_A = {}

for user in users:
	if user.lower().startswith('m') or user.lower().startswith('p') and 'i' in user:
		disney_users_A[user] = users.index(user)

print(disney_users_A)



















