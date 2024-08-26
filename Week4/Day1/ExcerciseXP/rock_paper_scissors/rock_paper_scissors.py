from game import Game

def get_user_menu_choice():
	print("MENU")
	print('(g) Play a new game')
	print('(x) Show scores and exit')
	print('(q) Quit')

	user_selection = input('Select an option: ')
	return user_selection.lower()
	
def print_results(results):
	print('Game Results')
	print(f'You won {results['won']} times')
	print(f'You lost {results['lost']} times')
	print(f'You drew {results['drew']} times')
		

def main():
	is_playing = True
	while is_playing:
		user_selection = get_user_menu_choice()
		game = Game()
		if user_selection == 'g':
			game.play()
		elif user_selection == 'x' or  user_selection == 'q':
			print_results(game.results)
			is_playing = False
		else:
			print("Select a valid option.")

main()