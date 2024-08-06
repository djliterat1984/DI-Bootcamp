# 1. Predict the output of the following code snippets:

print(3 <= 3 < 9) #true
print(3 == 3 == 3) #true
print(bool(0)) #false
print(bool(5 == "5")) #false
print(bool(4 == 4) == bool("4" == "4")) #true
print(bool(bool(None))) #false
x = (1 == True) 
y = (1 == False)
a = True + 4
b = False + 10

print("x is", x) #true
print("y is", y) #false
print("a:", a) #5
print("b:", b) #10

# Output:

# True
# True
# False
# False
# True
# False
# x is True
# y is False
# a: 5
# b: 10

# Use python to find out how many characters are in the following text, use a single line of code (beyond the establishment of your my_text variable).
my_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

print(len(my_text))

# Exercise 5: Longest word without a specific character
# Instructions
# 1.Keep asking the user to input the longest sentence they can without the character “A”.
# 2.Each time a user successfully sets a new longest sentence, print a congratulations message.

sentence = input("Write a sentence without \"A\" character ")
index_character = sentence.find('A')

if index_character != -1:
	print("The sentence is not correct")
else:
	print("Congratulations")








