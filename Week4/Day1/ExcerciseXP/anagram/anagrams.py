from anagram_checker import AnagramChecker

user_selection = ''

while user_selection.lower() != 'exit':
	user_selection = input("Enter a word to get anagrams or write Exit to quit the program: ")
	if user_selection.lower() != "exit":
		last_character = user_selection[len(user_selection)- 1]
		if last_character.isspace():
			user_selection = user_selection.replace(last_character, '')

		first_character = user_selection[0]
		if first_character.isspace():
			user_selection = user_selection.replace(first_character, '')
		
		for char in user_selection:
			if char.isalpha():
				continue
			elif char.isspace():
				print("How do we know how many words were typed? Please only type alphabet characters. ")
				break
			else:
				print("The word is not allowed. Please only type alphabet characters.")
				break
			
		anagram_checker = AnagramChecker()
		is_valid = anagram_checker.is_valid_word(user_selection)
		if is_valid:
			anagrams = anagram_checker.get_anagrams(user_selection)
			if len(anagrams) > 0:
				print(f"YOUR WORD: {user_selection.upper()}")
				print('this is a valid English word.')
				print('Anagrams for your word: ', end="")
				length = len(anagrams)
				for anagram in anagrams:
					if anagrams[length - 1] == anagram:
						print(f'{anagram}.')
					else:	
						print(anagram, end=", ")
			else:
				print('Don\'t found anagrams for this word')
		else:
			print('The word is not a valid English word.')
