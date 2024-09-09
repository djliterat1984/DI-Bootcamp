# Exercise 1
# Instructions
# Draw the following pattern using for loops:
#   *
#  ***
# *****
total = 5
i=1
for i in range(total+1):
	if i%2 == 0:
		i+=1
		continue
	
	total_spaces = total - i
	print(" " * int(total_spaces/2) + '*'* i+ " " * int(total_spaces/2))
	i+=1


# Draw the following pattern using for loops:
#     *
#    **
#   ***
#  ****
# *****
i = 0
for i in range(total+1):
	spaces = total - i
	print(' '* spaces + '*'*i) 
	i+=1


# Draw the following pattern using for loops:
# *
# **
# ***
# ****
# *****
# *****
#  ****
#   ***
#    **
#     *

i = 1

for i in range((total*2)+1):
	if i < total:
		print("*" * i)
	elif i == total:
		print('*' * total)
		print('*' * total)
	elif i > total:
		char_count_to_print = total*2 - i
		spaces = i - total
		print(' '* spaces + '*' * char_count_to_print)
	i+=1

# Exercise 2
# Instructions
# Analyse this code before executing it. Write some comments next to each line. Write the value of each variable and their changes, and add the final output. Try to understand the purpose of this program.
my_list = [2, 24, 12, 354, 233] # create a list with values
for i in range(len(my_list) - 1): # iterate with for loop between 0 and last index of the list
    minimum = i #set minimum to i value
    for j in range( i + 1, len(my_list)): # iterate with for loop between i+1 and length of the list
        if(my_list[j] < my_list[minimum]): # compare the value in the actual position (j) with value in minimum position 
            minimum = j # set minimum to j value
            if(minimum != i): #asks if minimum value and i are differents 
                my_list[i], my_list[minimum] = my_list[minimum], my_list[i] # set in position i the value on position minimum and reverse
print(my_list)