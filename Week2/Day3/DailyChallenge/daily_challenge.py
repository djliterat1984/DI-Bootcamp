# Instructions
# Here is a python code that generates a list of 20000 random numbers, called list_of_numbers, and a target number.

import random

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]

target_number   = 3728

pairs_sum = []

for i in list_of_numbers:
	if i > target_number:
		continue
	
	num2 = target_number - i
	if num2 in list_of_numbers:
		pairs_sum.append((num2,i))

final_list = set(pairs_sum)
print(final_list)
# Copy this code, and create a program that finds, within list_of_numbers all the pairs of number that sum to the target number

# For example

# 1000 and 2728 sums to the target_number 3728
# 1864 and 1864 sums to the target_number 3728
