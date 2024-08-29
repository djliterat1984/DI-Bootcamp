# Instructions
# In cryptography, a Caesar cipher is one of the simplest and most widely known encryption techniques.
# It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet.

# For example, with a left shift of 3 –> D would be replaced by A,
# –> E would become B, and so on.

# The method is named after Julius Caesar, who used it in his private correspondence.

# Create a python program that encrypts and decrypts messages with ceasar cypher.
# The user enters the program, and then the program asks him if he wants to encrypt or decrypt, and then execute encryption/decryption on a given message and a given shift.

# Check out this tutorial

# Hint:

# for letter in text:
#     cypher_text += chr(ord(letter) + 3)

alphabet_list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
user_action = ''
user_text = ''

while user_action != 'e' or user_action != 'd':
	encrypted_txt = ''
	decrypted_txt = ''
	user_action = input("Enter \"e\" to encrypt or \"d\" to decrypt or \"q\" to quit: ")
	
	if user_action == 'q':
		break
	
	if user_action == 'e' or user_action == 'd':
		user_text = input("Write the text: ")
		for char in user_text:
			if user_action == 'e':
				try:
					if char.isalpha():
						char_index = alphabet_list.index(char.lower())
						new_char =''
						if char_index <= 22:
							new_char = alphabet_list[char_index + 3]
						elif char_index == 23:
							new_char = alphabet_list[0]
						elif char_index == 24:
							new_char = alphabet_list[1]
						elif char_index == 25:
							new_char = alphabet_list[2]
						if char.isupper():
							encrypted_txt += new_char.upper()
						else:
							encrypted_txt += new_char
					else:
						encrypted_txt += char	
				except:
					print("Error")
			elif user_action == 'd':
				if char.isalpha():
					char_index = alphabet_list.index(char.lower())
					new_char = alphabet_list[char_index - 3]
					if char.isupper():
						decrypted_txt += new_char.upper()
					else:
						decrypted_txt += new_char
				else:
					decrypted_txt += char

		if user_action == 'e':
			print(encrypted_txt)
		elif user_action == 'd':
			print(decrypted_txt)


	






