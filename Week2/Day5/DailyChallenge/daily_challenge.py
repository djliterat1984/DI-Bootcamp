# Instructions : Old MacDonald’s Farm
# 1.Take a look at the following code and output:
# File: market.py

# macdonald = Farm("McDonald")
# macdonald.add_animal('cow',5)
# macdonald.add_animal('sheep')
# macdonald.add_animal('sheep')
# macdonald.add_animal('goat', 12)
# print(macdonald.get_info())
# Output

# McDonald's farm

# cow : 5
# sheep : 2
# goat : 12

#     E-I-E-I-0!


# Create the code that is needed to receive the result provided above. Below are a few questions to assist you with your code:

# 1.Create a class called Farm. How should it be implemented?
# 2.Does the Farm class need an __init__ method? If so, what parameters should it take?
# 3.How many methods does the Farm class need?
# 4.Do you notice anything interesting about the way we are calling the add_animal method? What parameters should this function have? How many…?
# 5.Test your code and make sure you get the same results as the example above.
# 6.Bonus: nicely line the text in columns as seen in the example above. Use string formatting.

class Farm:
	def __init__(self,name):
		self.name = name
		self.animals_list = {}
	
	def add_animal(self, name, quantity=2):
		self.animals_list[name] = quantity
	
	def get_info(self):
		print(f'{self.name}\'s farm\n\n')
		for animal, quantity in self.animals_list.items():
			print(animal," : ",quantity)
		return('    E-I-E-I-0!')

	def get_animal_types(self):
		animal_list = list(self.animals_list.keys())
		animal_list.sort()
		return animal_list
	
	def get_short_info(self):
		animals_list = self.get_animal_types()
		info = f'{self.name}\'s farm has'
		for animal in animals_list:
			if animals_list.index(animal) == len(animals_list) - 1:
				info += f' and {animal}s'
			elif animals_list.index(animal) == 0:
				info += f' {animal}s'
			else:
				info += f', {animal}s'
		return info
		


macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print('\n\n',macdonald.get_info())


# Expand The Farm
# 1.Add a method called get_animal_types to the Farm class. This method should return a sorted list of all the animal types (names) in the farm. With the example above, the list should be: ['cow', 'goat', 'sheep'].

print(macdonald.get_animal_types())


# Add another method to the Farm class called get_short_info. This method should return the following string: “McDonald’s farm has cows, goats and sheeps.”. The method should call the get_animal_types function to get a list of the animals.
# Note : In English the plural form of the word “sheep” is sheep. But for the purpose of the exercise, let’s say that if there is more than 1 animal, an “s” should be added at the end of the word.

print(macdonald.get_short_info())




