# Instructions :
# The goal of the exercise is to create a class that will help you analyze a specific text. A text can be just a simple string, like “Today, is a happy day” or it can be an external text file.

# Part I
# First, we will analyze a simple string, like “A good book would sometimes cost as much as a good house.”

# 1.Create a class called Text that takes a string as an argument and store the text in a attribute.
# Hint: You need to manually copy-paste the text, straight into the code

class Text:
	def __init__(self, text):
		self.text = text
		self.frequency_words = {}
	
	def get_word_list(self):
		word_list = str(self.text).lower().split(' ')
		return word_list
	
	def set_frequency_words(self):
		freq_list = {}
		for w in word_list:
			if w.isspace() or w=='':
				continue
			if w in freq_list:	
				freq_list[w] += 1
			else:
				freq_list[w] = 1
		
		self.frequency_words = freq_list
	
	def get_frequency_word(self,word):
		try:
			return f'The word {word.upper()} is {self.frequency_words[word]} times in the text'
		except:
			return f'The word {word} is not in the text'

	def get_most_common_word(self):
		most_common_words = []
		max_value = max(self.frequency_words.values())
		for key in self.frequency_words.keys():
			if self.frequency_words[key] == max_value:
				most_common_words.append(key)
		
		return f'The most common word is \"{most_common_words[0]}\", {self.frequency_words[most_common_words[0]]} times.'
	
	def get_unique_words(self):
		unique_words = []
		for key in self.frequency_words.keys():
			if self.frequency_words[key] == 1:
				unique_words.append(key)
		
		return unique_words
	
	def get_text_from_file(file_name):
		with open(file_name,'r') as file:
			return file.readlines()
			
text = Text("A good book would sometimes cost as much as a good house.")
word_list = text.get_word_list()
text.set_frequency_words()
print(text.get_most_common_word())
print(text.get_unique_words())

# 2.Implement the following methods:
#  - a method to return the frequency of a word in the text (assume words are separated by whitespace) return None or a meaningful message.
#  - a method that returns the most common word in the text.
#  - a method that returns a list of all the unique words in the text.


# Part II
# Then, we will analyze a text coming from an external text file. Download the_stranger.txt file.

# Implement a classmethod that returns a Text instance but with a text file:

#     >>> Text.from_file('the_stranger.txt')
# Hint: You need to open and read the text from the text file.


# Now, use the provided the_stranger.txt file and try using the class you created above.


file_name = 'the_stranger.txt'
file_text = Text.get_text_from_file(file_name)
text_fixed = str(file_text).replace('\\n\',',' ').replace('\'', '')
text2 = Text(text_fixed)
word_list = text2.get_word_list()
text2.set_frequency_words()
print(text2.get_frequency_word('the'))
print(text2.get_most_common_word())
print(text2.get_unique_words())

# Bonus:
# Create a class called TextModification that inherits from Text.

# Implement the following methods:
# a method that returns the text without any punctuation.
# a method that returns the text without any english stop-words (check out what this is !!).
# a method that returns the text without any special characters.
# Note: Instead of creating a child class, you could also implements those methods as static methods in the Text class.

# Note: Feel free to implement/create any attribute, method or function needed to make this work, be creative :)

class TextModification(Text):
	def __init__(self, text):
		super().__init__(text)
		
	def remove_punctuation(self,text):
		text_without_punctuation = ''
		for l in text:
			if not str(l).isalpha():
				text_without_punctuation += l
				
		return text_without_punctuation
	

		


textModification = TextModification('h')
textModification.remove_punctuation('.')
textModification.remove_punctuation(',')
textModification.remove_punctuation(';')
textModification.remove_punctuation(':')
textModification.remove_punctuation('\"')
