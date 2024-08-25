def remove_white_spaces(item):
	return str(item).strip()

class AnagramChecker:
	def __init__(self):
		with open("/Users/chaim/Projects/developerInstitute/Di-Bootcamp/Week4/Day1/ExcerciseXP/anagram/sowpods.txt",'r') as words_list:
			words = words_list.readlines()
			fixed_words = list(map(remove_white_spaces, words))
		
		self.word_list = fixed_words
	
	def is_valid_word(self, word):
		return str(word).upper() in self.word_list
	
	def get_anagrams(self, word):
		words_with_equal_length = self.get_same_length_words(word)	
		anagram_list = []
		user_lower_word = str(word).lower()
		for w in words_with_equal_length:
			lower_word_list = str(w).lower()
			if lower_word_list == user_lower_word:
				continue
			response = self.is_anagram(user_lower_word, lower_word_list)
			if response:
				anagram_list.append(w)
		return(anagram_list)
	
	def is_anagram(self,user_word,word_list):
			i= 0
			new_word = ''
			while i < len(user_word):
				char = user_word[i] 
				if char in word_list:
					if i == len(user_word) - 1:
						if user_word[len(user_word) - 1] in word_list:
							return True
					
					i+=1
					new_word += char
					word_list = word_list.replace(char,'')
				else:
					return False
	
	def get_same_length_words(self,item):
		words = []
		for x in self.word_list:
			if len(x) == len(item):
				words.append(x)
		return words

# an = AnagramChecker()	
# print(an.get_anagrams('TEAM'))

