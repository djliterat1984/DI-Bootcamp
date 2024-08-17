# Exercise 1: Cats
# Instructions
# Using this class

class Cat:
  def __init__(self, cat_name, cat_age):
			self.name = cat_name
			self.age = cat_age
# 1.Instantiate three Cat objects using the code provided above.

cat1=Cat("Mimi", 7)
cat2=Cat("Fofo", 9)
cat3=Cat("Chichi", 8)

cat_list = [cat1, cat2,cat3]

# 2.Outside of the class, create a function that finds the oldest cat and returns the cat.

def get_oldest_cat(cat_list):
	age = 0
	oldestCat = None
	for cat in cat_list:
		cat:Cat
		if cat.age > age:
			age = cat.age
			oldestCat = cat
	
	return oldestCat
			
oldest_cat = get_oldest_cat(cat_list) 

# 3.Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. Use the function previously created.

print(f'The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.') 

# Exercise 2 : Dogs
# Instructions
# 1.Create a class called Dog.
# 2.In this class, create an __init__ method that takes two parameters : name and height. This function instantiates two attributes, which values are the parameters.
# 3.Create a method called bark that prints the following string “<dog_name> goes woof!”.
# 4.Create a method called jump that prints the following string “<dog_name> jumps <x> cm high!”. x is the height*2.
# 5.Outside of the class, create an object called davids_dog. His dog’s name is “Rex” and his height is 50cm.
# 6.Print the details of his dog (ie. name and height) and call the methods bark and jump.
# 7.Create an object called sarahs_dog. Her dog’s name is “Teacup” and his height is 20cm.
# 8.Print the details of her dog (ie. name and height) and call the methods bark and jump.
# 9.Create an if statement outside of the class to check which dog is bigger. Print the name of the bigger dog.

class Dog:
	def __init__(self, name, height):
		self.name = name
		self.height = height
	
	def bark(self):
		print(f'{self.name} goes woof!')
	
	def jump(self):
		print(f'{self.name} jumps {self.height * 2} cm high!')

def get_bigger_dog(dog1:Dog, dog2:Dog):
	if dog1.height > dog2.height:
		return dog1.name
	return dog2.name

davids_dog = Dog("Rex", 50)
print(davids_dog.name, davids_dog.height)
davids_dog.bark()
davids_dog.jump()

sarahs_dog = Dog("Teacup",20)
print(sarahs_dog.name, sarahs_dog.height)
sarahs_dog.bark()
sarahs_dog.jump()

print(get_bigger_dog(davids_dog, sarahs_dog))

# Exercise 3 : Who’s the song producer?
# Instructions
# 1.Define a class called Song, it will show the lyrics of a song.
# 	Its __init__() method should have two arguments: self and lyrics (a list).
# 2.Inside your class create a method called sing_me_a_song that prints each element of lyrics on its own line.
class Song:
	def __init__(self, lyrics:list):
		self.lyrics = lyrics
	
	def sing_me_a_song(self):
		for line in self.lyrics:
			print(line)

# 3.Create an object, for example:

stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])

# 4.Then, call the sing_me_a_song method. The output should be:

stairway.sing_me_a_song()

# There’s a lady who's sure
# all that glitters is gold
# and she’s buying a stairway to heaven


# Exercise 4 : Afternoon at the Zoo
# Instructions
# 1.Create a class called Zoo.
# 2.In this class create a method __init__ that takes one parameter: zoo_name.
#   It instantiates two attributes: animals (an empty list) and name (name of the zoo).
# 3.Create a method called add_animal that takes one parameter new_animal. This method adds the new_animal to the animals list as long as it isn’t already in the list.
# 4.Create a method called get_animals that prints all the animals of the zoo.
# 5.Create a method called sell_animal that takes one parameter animal_sold. This method removes the animal from the list and of course the animal needs to exist in the list.
# 6.Create a method called sort_animals that sorts the animals alphabetically and groups them together based on their first letter.
# Example

# { 
#     1: "Ape",
#     2: ["Baboon", "Bear"],
#     3: ['Cat', 'Cougar'],
#     4: ['Eel', 'Emu']
# }


# 7.Create a method called get_groups that prints the animal/animals inside each group.

# 8.Create an object called ramat_gan_safari and call all the methods.
# Tip: The zookeeper is the one who will use this class.
# Example
# Which animal should we add to the zoo --> Giraffe
# x.add_animal(Giraffe)

class Zoo:
	def __init__(self, zoo_name):
		self.name = zoo_name
		self.animals = []
		self.grouped_list = {}
	
	def add_animal(self, new_animal):
		if new_animal not in self.animals:
			self.animals.append(new_animal)
	
	def get_animals(self):
		for animal in self.animals:
			print(animal)
	
	def sell_animal(self, animal_sold):
		if animal_sold in self.animals:
			self.animals.remove(animal_sold)
	
	def sort_animals(self):
		self.animals.sort()
		i= 1
		for animal in self.animals:
			animal_index = self.animals.index(animal)
			if animal_index == 0:
				self.grouped_list[i] = animal
			else:
				last_animal = self.animals[animal_index - 1]
				if animal[0] == last_animal[0]:
					animnal_list = [self.grouped_list[i]]
					animnal_list.append(animal)
					self.grouped_list[i] = animnal_list
				else:
					i +=1
					self.grouped_list[i] = animal

	def get_groups(self):
		print(self.grouped_list)

ramat_gan_safari = Zoo("Ramat Gan Safari")
ramat_gan_safari.add_animal("Giraffe")
ramat_gan_safari.add_animal("Birds")
ramat_gan_safari.add_animal("Monkey")
ramat_gan_safari.add_animal("Reptiles")
ramat_gan_safari.add_animal("Lion")
ramat_gan_safari.add_animal("Red Panda")
ramat_gan_safari.add_animal("Wildlife")
ramat_gan_safari.add_animal("Tortoise")
ramat_gan_safari.add_animal("Elephant")

ramat_gan_safari.get_animals()
ramat_gan_safari.sell_animal("Wildlife")
ramat_gan_safari.get_animals()
sorted_animals = ramat_gan_safari.sort_animals()
ramat_gan_safari.get_groups()



