number = input('enter a number ')
numbers_range = range(1,11)

for i in numbers_range:
	total = 0
	total = i*int(number)
	print(f'{number} * {i} = {total}')

number = 1
while number <= 10:
	print(number)
	number += 1
	