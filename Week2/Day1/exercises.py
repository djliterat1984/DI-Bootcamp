# functions
def calculation(a, b):
	add = a + b
	if a > b:
		subtr = a - b
	else:
		subtr = b - a
	return (add,subtr)

res = calculation(40, 10)
print(res)
addition, subtraction = res
print(addition, subtraction)



# map - filter
people = ["Rick", "Morty", "Beth", "Jerry", "Snowball"]

filtered_function = filter(lambda s: len(s) <= 4, people)

map_function = map(lambda s: f"Hello {s}", filtered_function)
print(list(map_function))
