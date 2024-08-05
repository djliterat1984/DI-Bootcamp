# python = 'I am PYHTON'
# #         012345678910
# print(python[1:4]) #' am '
# print(python[1:]) #' am PYHTON'
# print(python[:]) #'I am PYHTON'
# print(python[1:100]) #' am PYHTON'
# print(python[-1]) #'N'
# print(python[-4]) #'H'
# print(python[:-3]) #'I am PYH' 
# print(python[-3:])#'TON'
# print(python[::-1]) #'NOTHYP ma I'

# birth_year = input('what year were oyu born?')
# age = 2024 - int(birth_year)
# print(f'your age is {age}')

#username = input('enter your username ')
# password = input('enter your password ')

# password_length = len(password)
# hidden_password = '*' * password_length

# print(f'password {hidden_password} is {password_length} letters long')

is_magician = False
is_expert = False

if is_magician and is_expert:
	print('you are a master magician')
elif is_magician and not is_expert:
	print('at least you\'re getting there')
else:
	print('You need magic powers')