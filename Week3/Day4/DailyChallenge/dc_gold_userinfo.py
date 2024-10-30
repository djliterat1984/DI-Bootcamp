# Instruction: Information from the user
# Harder Daily Challenge
# Notice : solve this exercise using a lambda function.

# 1.Ask a user for the following inputs 5 times:
		# Name (string)
		# Age (int)
		# Score (int)

import operator


inputs = []
i=0
while i < 5:
	name = input('Enter Your Name')
	age = input('Enter Your Age')
	score = input('Enter Your score')
	inputTuple = lambda name, age, score : (name,age,score)
	
	inputs.append(inputTuple(name,age,score))
	i += 1

# 2.Build a list of tuples using these inputs, each tuple should contain a name, age and score.
print(inputs)

# 3.Sort the list by the following priority Name > Age > Score.

inputs.sort(key=operator.itemgetter(0,1,2))

print(inputs)
# If the following tuples are given as input to the script:

# Tom,19,80
# John,20,90
# Jony,17,91
# Jony,17,93
# Json,21,85
# Then, the output of the program should be:
# [('John', '20', '90'), ('Jony', '17', '91'), ('Jony', '17', '93'), ('Json', '21', '85'), ('Tom', '19', '80')]
# Note : The lambda function will not print but sort
