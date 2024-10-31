# Exercise 1 : Restaurant Menu Manager - Regular Expressions
# Instructions
# Goal: The Manager wants to have a special Valentine’s night, but there are some rules.



# 1.Create a new list of special Valentine’s day items inside the json file. For now the list should be empty.

# 2.Ask to the manager for a new Valentine item to add, if the item is correct (ie. follows the rules below), 
# then add it to the list inside the json file.
# 	1.Each word in the item name should begin with an uppercase letter and because it’s Valentines Day, the first word needs to begin with a capital “V”.

# 	2.If the name contains connection words, they should begin in lowercase.
# 	Example: Vegetable Soup of Valentines-day

# 	3.The name of the meal needs to contain at least two “e”, and no numbers.

# 	4.The price needs to match the following pattern: XX,14, where X are numbers. REG EXPRESSION

# 3.Create an algorithm that displays a heart made of stars (*), when the menu is showed.

# Exercise 2 : Dungeons & Dragons
# Instructions
# 1.For a game of Dungeons & Dragons, each player starts by generating a character they can play with. 
# This character has, among other things, six attributes/stats:
		# Strength
		# Dexterity
		# Constitution
		# Intelligence
		# Wisdom
		# Charisma

import json
import random


class Character:
	def __init__(self,name,age):
		self.strength = self.setScore()
		self.dexterity = self.setScore()
		self.constitution = self.setScore()
		self.intelligence = self.setScore()
		self.wisdom = self.setScore()
		self.charisma = self.setScore()
		self.name = name
		self.age = age
	
	def setScore(self):
		shots = []
		i = 1
		while i <= 4:
			shot = random.randint(1,6)
			print(shot)
			shots.append(shot)
			i+=1 
		print(shots)
		shots.sort(reverse=True)
		print(shots)
		print(shots[3])
		shots.remove(shots[3])
		suma = sum(shots)
		return sum(shots)
	
class Game:
	def __init__(self):
		json_file = 'ex_ninja.json'
		with open(json_file, 'r') as file:
			self.characters = []
	
	def startGame(self):
		num_players = int(input('How many players are playing? '))
		self.create_players(num_players)
		
	def create_players(self,num_players):
		i=1
		while i <= num_players:
			username = input('Enter your name: ')
			age = int(input('Enter your age: '))
			character = Character(username,age)
			self.characters.append(
				{
					'name': username,
					'age':age,
					'strength':character.strength,
					'dexterity':character.dexterity,
					'constitution':character.constitution,
					'intelligence': character.intelligence,
					'wisdom': character.wisdom,
					'charisma': character.charisma
				}
			)
			i+=1
	
	def print_characters(self):
		characters = self.characters 
		print(characters)
		# for char in characters:
		# 	print(char)
			# print(f'Character name is {char.name}, is {char.age} years old. ' )
			# print(f'Strength: {char.strength}, Dexterity: {char.dexterity}, Constitution: {char.constitution}, Intelligence: {char.intelligence}, Wisdom: {char.wisdom}, Charisma: {char.charisma}')
		
		json_file = 'ex_ninja.json'
		with open(json_file, 'w') as file_obj:
			json.dump(self.characters, file_obj, indent = 2)
		
		

# 2.These six abilities have scores that are determined randomly. You do this by rolling four 6-sided 
# dice and record the sum of the largest three dice. You do this six times, once for each ability.
# For example, the six throws of four dice may look like:
		# 5, 3, 1, 6: You discard the 1 and sum 5 + 3 + 6 = 14, which you assign to strength.
		# 3, 2, 5, 3: You discard the 2 and sum 3 + 5 + 3 = 11, which you assign to dexterity.
		# 1, 1, 1, 1: You discard the 1 and sum 1 + 1 + 1 = 3, which you assign to constitution.
		# 2, 1, 6, 6: You discard the 1 and sum 2 + 6 + 6 = 14, which you assign to intelligence.
		# 3, 5, 3, 4: You discard the 3 and sum 5 + 3 + 4 = 12, which you assign to wisdom.
		# 6, 6, 6, 6: You discard the 6 and sum 6 + 6 + 6 = 18, which you assign to charisma.

# 3.Create a class called Character and a class called Game for this exercise.

# 4.The point of this exercise is to generate characters for players looking to start a game quickly.
		# Start by asking the user how many players are playing.
		# Each user then creates his/her character, let them establish what the characters name and age are.
		# Output the characters created into the following formats:
		# txt: a nicely formatted text file for the players to use
		# json: a json file of all the characters and attributes


# Hint: the Character class should be in charge of creating characters, 
# the Game class should be in charge of how many times the Character gets instantiated and of exporting 
# the data in json or txt

game = Game()
game.startGame()
game.print_characters()

