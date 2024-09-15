# Mini-Project: Characters game
# Description
# 1.Create a class called Character with the following attributes and methods:
# 	- attribute name
# 	- attribute life – starts with a default value of 20
# 	- attribute attack – the base attack of a character (integer) will be a default of 10
# 	- method basic_attack() - accepts another Character instance as a parameter. Your character will <attack> the other character so his <life> points should drop.

class Character:
	def __init__(self) -> None:
		self.name = ''
		self.life = 20
		self.attack = 10
	
	def basic_attack(self, other_character):
		if isinstance(other_character,Character):
			other_character.life -= self.attack

# Instructions
# 1.Now create 3 different classes that inherit from Character:
#   Every character type should say (ie. print) something when they are created, get creative :)
# 		1.Druid:
# 			- meditate() - increases life by 10, decrease attack by 2
# 			- animal_help()- increases attack by 5
# 			- fight() - accepts another Character instance as a parameter and subtracts (0.75*life + 0.75*attack) from the other character’s life.
# 			Example:
# 			druid.fight(other_char): other_char.life - (0.75*self.life + 0.75*self.attack)

class Druid(Character):
	def __init__(self,life,attack):
		super().__init__(self,life,attack)
	
	def meditate(self):
		self.life += 10
		self.attack -= 2
	
	def animal_help(self):
		self.attack += 5
	
	def fight(self, other_character):
		if isinstance(other_character,Character):
			other_character.life -= (0.75*self.life + 0.75*self.attack) 

# 		2.Warrior:
# 				- brawl() - accepts another Character instance as a parameter, subtracts (2*attack) to the other characters life and adds (0.5*attack) to his own life.
# 				- train() - increases both your attack and life points by 2.
# 				- roar() - accepts another Character instance as a parameter and subtracts their attack points by 3.

class Warrior(Character):
	def __init__(self,life,attack):
		super().__init__(life,attack)
	
	def brawl(self, other_character):
		if isinstance(other_character,Character):
			other_character.life -= (self.attack * 2)
			self.life += (0.5 * self.attack)

	def train(self):
		self.life += 2
		self.attack += 2
	
	def roar(self, other_character):
		if isinstance(other_character,Character):
			other_character.attack -= 3

# 		3.Mage:
# 				- curse() – accepts another Character instance as a parameter and subtracts their attack points by 2.
# 				- summon() - increases attack attribute by 3 points.
# 				- cast_spell() - accepts another Character instance as a parameter and subtracts attack/life to the other character’s life points (eg if your attack is 20 and life is 5 you will subtract 4 life points).

class Mage(Character):
	def __init__(self,life,attack):
		super().__init__(life,attack)

	def curse(self,other_character):
		if isinstance(other_character,Character):
			other_character.attack -= 2
	
	def summon(self):
		self.attack += 3
	
	def cast_spell(self,other_character):
		if isinstance(other_character,Character):
			other_character.life -= self.attack/self.life

# 2.Once all your classes are created start testing them, create one of each character and use each of their method.


character = Character()
other_character = Character()
character.basic_attack(other_character)

druid = Druid(20,10)
druid.meditate()
druid.animal_help()
druid.fight(other_character)

warrior = Warrior(20,10)
warrior.brawl(other_character)
warrior.train()
warrior.roar(other_character)

mage = Mage(20,10)
mage.curse(other_character)
mage.summon()
mage.cast_spell(other_character)