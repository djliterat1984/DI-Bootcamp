# Exercise 1 : Cars
# Instructions
# 1.Copy the following string into your code: "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet".
# 2.Convert it into a list using Python (don’t do it by hand!).
# 3.Print out a message saying how many manufacturers/companies are in the list.
# 4.Print the list of manufacturers in reverse/descending order (Z-A).
# 5.Using loops or list comprehension:
# 	1.Find out how many manufacturers’ names have the letter ‘o’ in them.
# 	2.Find out how many manufacturers’ names do not have the letter ‘i’ in them.

brand_string = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"
brand_list = brand_string.replace(' ', '').split(',')

print(f'There are {len(brand_list)} manufacturers/companies')
brand_list.sort(reverse=True)
print(brand_list)

brands_with_o = [x for x in brand_list if x.find('o') > 0]
print(brands_with_o)

brands_without_i = [x for x in brand_list if not x.find('i') > 0]
print(brands_without_i,)

# 6.Bonus: There are a few duplicates in this list:
companies_list = ["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
# 	1.Remove these programmatically. (Hint: you can use set to help you).
# 	2.Print out the companies without duplicates, in a comma-separated string with no line-breaks (eg. “Acura, Alfa Romeo, Aston Martin, …”), also print out a message saying how many companies are now in the list.

companies_set = set(companies_list)
new_companies_list = list(companies_set)

for i in new_companies_list:
	if new_companies_list.index(i) == len(new_companies_list) - 1:
		print(i)
	else:
		print(i,end=", ")

# 7.Bonus: Print out the list of manufacturers in ascending order (A-Z), but reverse the letters of each manufacturer’s name.

new_companies_list.sort()

for i in new_companies_list:
	if new_companies_list.index(i) == len(new_companies_list) - 1:
		print(i[::-1])
	else:
		print(i[::-1],end=", ")










