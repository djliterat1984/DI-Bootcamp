# Print the following output in one line of code:
# Hello world
# Hello world
# Hello world
# Hello world
# I love python
# I love python
# I love python
# I love python

print('\nHello World' *4,'\nI love python' * 4)

month = int(input("Enter the current month number "))
if month >= 3 and month <=5:
	print('We are in the Spring')
elif month >= 6 and month <= 8:
	print('We are in the Summer')
elif month >= 9 and month <= 11:
	print('We are in the Autumn')
else:
	print('We are in the Winter')

