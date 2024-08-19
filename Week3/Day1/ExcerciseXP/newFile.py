import random
from exerciceXP import Dog

class PetDog(Dog):
	def __init__(self, name, age, weight, trained=False):
		super().__init__(name, age, weight)
		self.trained = trained
	
	def train(self):
		print(self.bark())
		self.trained = True
	
	def play(self, *args):
		dog_names = ""
		args_length = len(args)
		i = 0
		for name in args:
			if args_length == i:
				dog_names += name
			else:	
				dog_names += name + ", "
		print(f'{dog_names} all play together')
	
	def do_trick(self):
		number = random.randrange(1,5)
		if number == 1:
			print(f'{self.name} does a barrel roll')
		elif number == 2:
			print(f'{self.name} stands on his back legs')		
		elif number == 3:
			print(f'{self.name} shakes your hand')		
		elif number == 4:
			print(f'{self.name} plays dead')	

petdog1 = PetDog("Pocho", 5, 20)
petdog1.do_trick()
petdog1.do_trick()
petdog1.do_trick()
petdog1.do_trick()
petdog1.do_trick()
petdog1.do_trick()
petdog1.do_trick()
petdog1.do_trick()
petdog1.do_trick()
petdog1.do_trick()
petdog1.do_trick()
petdog1.do_trick()
petdog1.do_trick()
petdog1.do_trick()
petdog1.do_trick()
petdog1.do_trick()
petdog1.do_trick()
petdog1.do_trick()
petdog1.do_trick()
petdog1.do_trick()
petdog1.do_trick()
petdog1.do_trick()
petdog1.do_trick()
petdog1.do_trick()
petdog1.do_trick()
petdog1.do_trick()
petdog1.do_trick()
petdog1.do_trick()
petdog1.do_trick()
petdog1.do_trick()
petdog1.do_trick()
petdog1.do_trick()
petdog1.do_trick()
petdog1.do_trick()
petdog1.do_trick()
petdog1.do_trick()
petdog1.do_trick()
