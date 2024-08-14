playerX_moves = []
playerO_moves = []
current_Player = ""
total_moves = 0
chosen_positions = {'1':" ",'2':" ",'3':" ",'4':" ",'5':" ",'6':" ",'7':" ",'8':" ",'9':" "}
winning_alternatives = [
	[{'row':1, 'column': 1},{'row':1, 'column': 2},{'row':1, 'column': 3}],
	[{'row':2, 'column': 1},{'row':2, 'column': 2},{'row':2, 'column': 3}],
	[{'row':3, 'column': 1},{'row':3, 'column': 2},{'row':3, 'column': 3}],
	[{'row':1, 'column': 1},{'row':2, 'column': 1},{'row':3, 'column': 1}],
	[{'row':1, 'column': 2},{'row':2, 'column': 2},{'row':3, 'column': 2}],
	[{'row':1, 'column': 3},{'row':2, 'column': 3},{'row':3, 'column': 3}],
	[{'row':1, 'column': 1},{'row':2, 'column': 2},{'row':3, 'column': 3}],
	[{'row':1, 'column': 3},{'row':2, 'column': 2},{'row':3, 'column': 1}]
]


# – To display the Tic Tac Toe board (GUI).
def display_board():
	print("*********************")

	for key,value in chosen_positions.items():
		if key == '1' or key == '4' or key == '7':
			print(f"*   {value}  ", end="")
		elif key == "2" or key == '5' or key == '8':
			print(f"|  {value}  |", end="")
		elif key == '3' or key == '6':
			print(f"  {value}   *",)
			print("* _ _ _|_ _ _|_ _ _ *")
		elif key == '9':
			print(f"  {value}   *",)
			print("*      |     |      *")
				
	print("*********************\n\n")


# – To get the position from the player.
def player_input(player): 
	if player == "playerX":
		print("Player X's turn\n")
	else:
		print("Player O's turn\n")

	position_row = int(input("Enter row: "))
	position_column = int(input("Enter column: "))
	global total_moves
	total_moves += 1
	global current_Player
	current_Player = player
	add_chosen_position(position_row, position_column, current_Player)
	if player == "playerX":
		playerX_moves.append({"row": position_row, "column":position_column})
	else:
		playerO_moves.append({"row": position_row, "column":position_column})


def add_chosen_position(row, column, player):
	if row == 1 and column == 1:
		if player == 'playerX':
			chosen_positions.update({"1": "X"})
		else:
			chosen_positions.update({"1": "O"})
	elif row == 1 and column == 2:
		if player == 'playerX':
			chosen_positions.update({"2": "X"})
		else:
			chosen_positions.update({"2": "O"})
	elif row == 1 and column == 3:
		if player == 'playerX':
			chosen_positions.update({"3": "X"})
		else:
			chosen_positions.update({"3": "O"})
	elif row == 2 and column == 1:
		if player == 'playerX':
			chosen_positions.update({"4": "X"})
		else:
			chosen_positions.update({"4": "O"})
	elif row == 2 and column == 2:
		if player == 'playerX':
			chosen_positions.update({"5": "X"})
		else:
			chosen_positions.update({"5": "O"})
	elif row == 2 and column == 3:
		if player == 'playerX':
			chosen_positions.update({"6": "X"})
		else:
			chosen_positions.update({"6": "O"})
	elif row == 3 and column == 1:
		if player == 'playerX':
			chosen_positions.update({"7": "X"})
		else:
			chosen_positions.update({"7": "O"})
	elif row == 3 and column == 2:
		if player == 'playerX':
			chosen_positions.update({"8": "X"})
		else:
			chosen_positions.update({"8": "O"})
	elif row == 3 and column == 3:
		if player == 'playerX':
			chosen_positions.update({"9": "X"})
		else:
			chosen_positions.update({"9": "O"})

#  – To check whether there is a winner or not.
def check_win():
	current_list_moves = get_current_list_player()
	counter_check = 0
	if len(current_list_moves) < 3 and counter_check < 3:
		play()
	else:
		for i in winning_alternatives:
			counter_check = 0
			for j in current_list_moves:
				if j in i:
					counter_check += 1
					if counter_check == 3:
						display_board()
						print(f'The winner is: {current_Player}')
						break
					elif total_moves == 9:
						display_board()
						print("The match ended tied")
						break
			if counter_check == 3 or total_moves == 9:
				break
		if counter_check < 3 and total_moves < 9:
			play()				
		
# – The main function, which calls all the functions created above.
def play():
	display_board()
	player_input(get_next_player())
	check_win()

def get_next_player():
	if current_Player == "" or current_Player == "playerO":
		return 'playerX'
	return 'playerO'

def get_current_list_player():
	if current_Player == "playerX":
		return playerX_moves
	
	return playerO_moves

play()