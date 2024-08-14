# Exercise 1 : What are you learning ?
# Instructions
# 1.Write a function called display_message() that prints one sentence telling everyone what you are learning in this course.
# 2.Call the function, and make sure the message displays correctly.

import random


def display_message():
	print("I\'m learning Python and JavaScript")

display_message()

# Exercise 2: What’s your favorite book ?
# Instructions
# 1.Write a function called favorite_book() that accepts one parameter called title.
# 2.The function should print a message, such as "One of my favorite books is <title>".
# 3.For example: “One of my favorite books is Alice in Wonderland”
# 4.Call the function, make sure to include a book title as an argument when calling the function.

def favorite_book(title):
	print(f"One of my favorite books is {title}")

favorite_book("The Lord of the Rings")

# Exercise 3 : Some Geography
# Instructions
# 1.Write a function called describe_city() that accepts the name of a city and its country as parameters.
# 2.The function should print a simple sentence, such as "<city> is in <country>".
# 3.For example “Reykjavik is in Iceland”
# 4.Give the country parameter a default value.
# 5.Call your function.

def describe_city(city, country):
	print(f"{city} is in {country}")

describe_city("Buenos Aires", "Argentina")

# Exercise 4 : Random
# Instructions
# 1.Create a function that accepts a number between 1 and 100 and generates another number randomly between 1 and 100. Use the random module.
# 2.Compare the two numbers, if it’s the same number, display a success message, otherwise show a fail message and display both numbers.

def compare_numbers(number):
	if number < 1 or number > 100:
		print("The number is wrong")
	random_number = random.randrange(1,100)
	if number == random_number:
		print("Excellent!!!!!")
	else:
		print(f"I\'m sorry, maybe next time. Your number is {number} and my number is {random_number}")

my_number = int(input("Give me a number between 1 and 100: "))
compare_numbers(my_number)


# Exercise 5 : Let’s create some personalized shirts !
# Instructions
# 1.Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
# 2.The function should print a sentence summarizing the size of the shirt and the message printed on it, such as "The size of the shirt is <size> and the text is <text>"
# 3.Call the function make_shirt().
# 4.Modify the make_shirt() function so that shirts are large by default with a message that reads “I love Python” by default.
# 5.Call the function, in order to make a large shirt with the default message
# 6.Make medium shirt with the default message
# 7.Make a shirt of any size with a different message.

# Bonus: Call the function make_shirt() using keyword arguments.

def make_shirt(size, text):
	print(f'The size of the shirt is {size} and the text is {text}')

make_shirt("large", "I\'m the best")

def make_shirt_default(size="large", text="I love Python"):
	print(f'The size of the shirt is {size} and the text is {text}')

make_shirt_default()

def make_shirt_k(**kwargs):
	values = []
	for key,value in kwargs.items():
		values.append(value)
	print(f'The size of the shirt is {values[0]} and the text is {values[1]}')

make_shirt_k(size="large", text="I\'m the best")

# Exercise 6 : Magicians …
# Instructions
# Using this list of magician’s names

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# 1.Create a function called show_magicians(), which prints the name of each magician in the list.
# 2.Write a function called make_great() that modifies the original list of magicians by adding the phrase "the Great" to each magician’s name.
# 3.Call the function make_great().
# 4.Call the function show_magicians() to see that the list has actually been modified.

def show_magicians(magic_names):
	for name in magic_names:
		print(name)

def make_great():
	for i,name in enumerate(magician_names):
		magician_names[i] = f"The great {name}"

make_great()
show_magicians(magician_names)

# Exercise 7 : Temperature Advice
# Instructions
# 1.Create a function called get_random_temp().
# 	1.This function should return an integer between -10 and 40 degrees (Celsius), selected at random.
# 	2.Test your function to make sure it generates expected results.

def get_random_temp():
	return random.randrange(-10, 40)

for i in range(0,100):
	print(get_random_temp())

# 2.Create a function called main().
# 	1.Inside this function, call get_random_temp() to get a temperature, and store its value in a variable.
# 	2.Inform the user of the temperature in a friendly message, eg. “The temperature right now is 32 degrees Celsius.”

def main():
	temp = get_random_temp()
	print(f'The temperature right now is {temp} degrees Celsius.')

main()

# 3.Let’s add more functionality to the main() function. Write some friendly advice relating to the temperature:
# 	1.below zero (eg. “Brrr, that’s freezing! Wear some extra layers today”)
# 	2.between zero and 16 (eg. “Quite chilly! Don’t forget your coat”)
# 	3.between 16 and 23
# 	4.between 24 and 32
# 	5.between 32 and 40

def main2():
	temp = get_random_temp()
	if temp < 0:
		print('Brrrr, that\'s freezing! Wear some extra layers today')
	elif 0 <= temp < 16:
		print('Quite chilly! Don\'t forget your coat') 
	elif 16 <= temp <= 23:
		print("Nice day to walk!!!!")
	elif 24 <= temp < 32:
		print("Today it will be some heat")
	else:
		print("Super!!! Let\'s go to the sea!!!")

main2()

# 4.Change the get_random_temp() function:
# 	1.Add a parameter to the function, named ‘season’.
# 	2.Inside the function, instead of simply generating a random number between -10 and 40, set lower and upper limits based on the season, eg. if season is ‘winter’, temperatures should only fall between -10 and 16.
# 	3.Now that we’ve changed get_random_temp(), let’s change the main() function:
# 	4.Before calling get_random_temp(), we will need to decide on a season, so that we can call the function correctly. Ask the user to type in a season - ‘summer’, ‘autumn’ (you can use ‘fall’ if you prefer), ‘winter’, or ‘spring’.
# 	5.Use the season as an argument when calling get_random_temp().

def get_random_temp2(season):
	if season.lower() == "winter":
		return random.randrange(-10, 10)
	elif season.lower() == "autumn":
		return random.randrange(10, 17)
	elif season.lower() == "spring":
		return random.randrange(17, 24)
	else:
		return random.randrange(24,40)
	
def main3():
	season = input("Write the current season: ")
	temp = get_random_temp2(season)
	if temp < 0:
		print('Brrrr, that\'s freezing! Wear some extra layers today')
	elif 0 <= temp < 16:
		print('Quite chilly! Don\'t forget your coat') 
	elif 16 <= temp <= 23:
		print("Nice day to walk!!!!")
	elif 24 <= temp < 32:
		print("Today it will be some heat")
	else:
		print("Super!!! Let\'s go to the sea!!!")

main3()

# 5.Bonus: Give the temperature as a floating-point number instead of an integer.

float_temperature = random.uniform(-10.0, 40.0)

# 6.Bonus: Instead of asking for the season, ask the user for the number of the month (1 = January, 12 = December). Determine the season according to the month.

def get_current_season(month_number):
	if 1 <= month_number <= 3:
		return "winter"
	elif 4 <= month_number <= 6:
		return "spring"
	elif 7 <= month_number <= 9:
		return "summer"
	else:
		return "autumn"

month = int(input("Write the current month: "))
season = get_current_season(month)



# Exercise 8 : Star Wars Quiz
# Instructions
# This project allows users to take a quiz to test their Star Wars knowledge.
# The number of correct/incorrect answers are tracked and the user receives different messages depending on how well they did on the quiz.

# Here is an array of dictionaries, containing those questions and answers

data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]


# 1.Create a function that asks the questions to the user, and check his answers. Track the number of correct, incorrect answers. Create a list of wrong_answers
# 2.Create a function that informs the user of his number of correct/incorrect answers.
# Bonus : display to the user the questions he answered wrong, his answer, and the correct answer.
# If he had more then 3 wrong answers, ask him to play again.

wrong_answers = []
quantity_correct = 0
quantity_incorrect = 0

def questions():
	global quantity_correct
	global quantity_incorrect
	for item in data:
		answer = input(item["question"])
		if answer == item["answer"]:
			quantity_correct += 1
		else:
			quantity_incorrect += 1
			wrong_answers.append({"question": item["question"], "wrong_answer":answer, "correct_answer": item["answer"]})

def answers_info():
	print(f"You have {quantity_correct} correct answers and {quantity_incorrect} incorrect answers")
	if quantity_incorrect > 3:
		response = input("Do you want to play again? YES - NO ")
		if response.upper() == "YES":
			questions() 

questions()
print(wrong_answers)
answers_info()
