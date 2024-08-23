import random

# Exercise 1 – Random Sentence Generator
# Instructions
# Description: In this exercise we will create a random sentence generator. We will do this by asking the user how long the sentence should be and then printing the generated sentence.

# Hint : The generated sentences do not have to make sense.

# 1.Download this word list

# 2.Save it in your development directory.

# 3.Create a function called get_words_from_file. This function should read the file’s content and return the words as a collection. What is the correct data type to store the words?

def get_words_from_file():
	with open("words.txt",'r') as words:
		return words.readlines()

# 4.Create another function called get_random_sentence which takes a single parameter called length. The length parameter will be used to determine how many words the sentence should have. The function should:
# 	 -use the words list to get your random words.
# 	 -the amount of words should be the value of the length parameter.

# 5.Take the random words and create a sentence (using a python method), the sentence should be lower case.

def  get_random_sentence(length):
	selected_words = random.choices(word_list,k=sentence_length)
	fixed_list =[]
	for w in selected_words:
		word = str(w).strip()
		fixed_list.append(word.lower())

	sentence = " ".join(fixed_list)
	return sentence
	
# 6.Create a function called main which will:
# 	1.Print a message explaining what the program does.
# 	2.Ask the user how long they want the sentence to be. Acceptable values are: an integer between 2 and 20. Validate your data and test your validation!
# 		-If the user inputs incorrect data, print an error message and end the program.
# 		-If the user inputs correct data, run your code.

def main():
	print('Prints a sentence with the amount of words selected and with random words')

main()

word_list = get_words_from_file()
sentence_length = int(input("How many words do you want in the sentence? The amount must be between 2 and 20: "))
if sentence_length > 20 or sentence_length < 2:
	print("The amount of words is wrong")
else:
	sentence = get_random_sentence(sentence_length)
	print(sentence)

# Exercise 2: Working with JSON
# Instructions
import json
sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

# Access the nested “salary” key from the JSON-string above.
dict = json.loads(sampleJson)
print(dict['company']['employee']['payable']['salary'])
# Add a key called “birth_date” to the JSON-string at the same level as the “name” key.
dict['company']['employee']['birth-date'] = "06/21/1984"
print(dict)

# Save the dictionary as JSON to a file.
json_file = 'file.json'
with open(json_file, 'w') as file_obj:
    json.dump(dict, file_obj, indent = 2)

