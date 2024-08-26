import random


class Game:
	results = {'won':0,'lost':0,'drew':0}

	def __init__(self):
		pass
	
	def is_valid(self,item):
		return item == 'r' or item == 'p' or item == 's'

	def get_user_item(self):
		is_valid = False
		user_selection = ''
		while is_valid == False:
			user_selection = input("Select (r)ock/(p)aper/(s)cissors: ")
			is_valid = self.is_valid(user_selection.lower())
		
		return user_selection
	
	def get_computer_item(self):
		options = ['r','s','p']
		return random.choice(options)
	
	def get_game_result(self, user_item, computer_item):
		if user_item == computer_item:
			Game.results['drew'] += 1
			return 'draw'
		elif user_item == 'r' and computer_item == 's':
			Game.results['won'] += 1
			return 'win'
		elif user_item == 'r' and computer_item == 'p':
			Game.results['lost'] += 1
			return 'lose'
		elif user_item == 's' and computer_item == 'r':
			Game.results['lost'] += 1
			return 'lose'
		elif user_item == 's' and computer_item == 'p':
			Game.results['won'] += 1
			return 'win'
		elif user_item == 'p' and computer_item == 'r':
			Game.results['won'] += 1
			return 'win'
		elif user_item == 'p' and computer_item == 's':
			Game.results['lost'] += 1
			return 'lose'
		
	def play(self):
		user_selection = self.get_user_item()
		user_selected_name = self.get_name_selection(user_selection)
		computer_selection = self.get_computer_item()
		computer_selected_name = self.get_name_selection(computer_selection)
		result = self.get_game_result(user_selection,computer_selection)
		print(f'You selected {user_selected_name}. The computer selected {computer_selected_name}. You {result}.')

	def get_name_selection(self,item):
		if item == 'r':
			return 'rock'
		elif item == 's':
			return 'scissors'
		elif item == 'p':
			return 'paper'

# game = Game()
# game.play(