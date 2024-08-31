# Exercise 1 : What’s your name ?
# Instructions
# 1.Write a function called get_full_name() that takes three arguments: 1: first_name, 2: middle_name 3: last_name.
# 2.middle_name should be optional, if it’s omitted by the user, the name returned should only contain the first and the last name.
# For example, get_full_name(first_name="john", middle_name="hooker", last_name="lee") will return John Hooker Lee.
# But get_full_name(first_name="bruce", last_name="lee") will return Bruce Lee.

def get_full_name(first_name, middle_name='', last_name=''):
	if middle_name != '':
		return f'{first_name} {middle_name} {last_name}'
	else:
		return f'{first_name} {last_name}'

# print(get_full_name(first_name="diego",last_name="literat"))
# print(get_full_name(first_name="diego",middle_name= 'Javier', last_name="literat"))


# Exercise 2 : From English to Morse
# Instructions
# Write a function that converts English text to morse code and another one that does the opposite.
# Hint: Check the internet for a translation table, every letter is separated with a space and every word is separated with a slash /.

morse_code = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..', '.----', '..---', '...--', '....-', '.....', '-....', '--...', '---..', '----.', '-----', '---...', '--..--', '.-.-.-', '-..-.', '-.-.--', '.--.-.', '.-...' '-.--.', '-.--.-', '-....-', '-...-','.-.-.']
alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','1','2','3','4','5','6','7','8','9','0',':', ',', '.','/', '!', '@', '&', '(', ')', '-', '=', '+']
morse_dict = {}
for key in alphabet:
	for value in morse_code:
		morse_dict[key] = value
		morse_code.remove(value)
		break

def format_letter(char):
	if char == 'í':
		return 'i'
	elif char == 'á':
		return 'a'	
	elif char == 'é':
		return 'e' 
	elif char == 'ü' or char == 'ú':
		return 'u'
	elif char == 'ó':
		return 'o'
	else:
		return char
	
def convert_to_morse(text):
	morse_code_txt = ''
	for char in text:
		if char.isspace():
			morse_code_txt += '/ '
		else:
			char = format_letter(char)
			morse_code_txt += morse_dict[char.lower()] + ' '

	return morse_code_txt

def convert_to_text(code):
	normal_text = ''
	for char in code.split():
		if char == '/':
			normal_text += " "
		else:
			for key, value in morse_dict.items():
				if value == char:
					normal_text += key
	
	return normal_text

morse_text = convert_to_morse("La negativa de X a eliminar cuentas vinculadas a simpatizantes del ex presidente Jair Bolsonaro ha sido un punto central del conflicto. De Moraes había ordenado anteriormente la eliminación de varios perfiles que, según él, promovían desinformación. Musk se negó a cumplir con la orden, acusando al juez de actuar sin justificación y de manera arbitraria.")
print(morse_text)
print(convert_to_text(morse_text))


# Exercise 3 : Box of stars
# Instructions
# Write a function named box_printer that takes any amount of strings (not in a list) and prints them, one per line, in a rectangular frame.
# For example calling box_printer("Hello", "World", "in", "reallylongword", "a", "frame") will result as:
# ******************
# * Hello          *
# * World          *
# * in             *
# * reallylongword *
# * a              *
# * frame          *
# ******************

def box_printer(*args):
	max_length = len(max(args))
	print("*" * (max_length + 4))
	for v in args:
		space_count = max_length - len(v)
		space_char = ' '
		print(f'* {v}{space_char*space_count} *')
	print("*" * (max_length + 4))

box_printer("Hello", "World", "in", "reallylongword", "a", "frame")

# Exercise 4 : What is the purpose of this code?
# Analyse this code before executing it. What is the purpose of this code?

def insertion_sort(alist):
	for index in range(1,len(alist)):
		currentvalue = alist[index]
		position = index
		 
		while position>0 and alist[position-1]>currentvalue:
			alist[position]=alist[position-1]
			position = position-1
			
		alist[position]=currentvalue


alist = [54,26,93,17,77,31,44,55,20]
insertion_sort(alist)
print(alist)