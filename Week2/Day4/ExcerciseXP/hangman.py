import random

wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
word = random.choice(wordslist) 
selected_letters = []
hidden_word = ''
for w in word:
	if w.isspace():
		hidden_word += " "
	else:
		hidden_word += "*"

def addLetterToSelectedLetters(letter):
	selected_letters.append(letter)

def get_letter():
	guess_letter = input("Choose a letter: ")
	if guess_letter.isdigit():
		print("Invalid entry")
		return None
	elif guess_letter in selected_letters:
		print("You did that already")
		return None
	else:
		return guess_letter

def check_letter(letter):
	if letter in selected_letters:
		return False
	return letter in word

def show_letter(letter):
	positions_letter = []
	index = 0
	length_word = len(word)
	while index < length_word:
		if word[index] == letter:
			positions_letter.append(index)
		index+=1

	update_word = ""
	global hidden_word
	list_hidden_word = list(hidden_word)
	for i in positions_letter:
		list_hidden_word[i] = letter
	
	for i in list_hidden_word:
		update_word += i
		
	hidden_word = update_word

def check_win():
	return "*" not in hidden_word

def add_body_part():
	pass

def print_board():
	global hidden_word
	global selected_letters
	print(hidden_word)
	print(f'wrong_guesses: {wrong_guesses}', end=" ")
	print(selected_letters)

wrong_guesses = 0
def play():
	print(hidden_word)
	global wrong_guesses
	while wrong_guesses < 6:
		is_new_letter = False
		while is_new_letter == False:
			letter = get_letter()
			if letter != None:
				is_new_letter = True

		success = check_letter(str(letter))
		if success:
			show_letter(letter)
		else:
			add_body_part()
			wrong_guesses += 1
		addLetterToSelectedLetters(letter)
		print_board()
		is_win = check_win()
		if is_win:
			print("You winner")
			break
	if wrong_guesses == 6:
		print("You lose")	

play()
	

