# Challenge 1 : Sorting
# Instructions
# 1.Write a program that accepts a comma separated sequence of words as input and prints the words in a comma-separated sequence after sorting them alphabetically.
# 2.Use List Comprehension 

# Example:

# Suppose the following input is supplied to the program: without,hello,bag,world
# Then, the output should be: bag,hello,without,world

# I'm not understand how or where is it possible to apply List Comprehension in this case: 
# I receive string, then I need to convert to list, then to sort list (here???), finally to string again

words = 'without,hello,bag,world'
words_list = words.split(",")
words_list.sort()
new_words = ""
for w in words_list:
	if words_list.index(w) == len(words_list) - 1:
		new_words += w 
	else:	
		new_words += w + ","
print(new_words)

# Challenge 2 : Longest Word
# Instructions
# 1.Write a function that finds the longest word in a sentence. If two or more words are found, return the first longest word.
#  Characters such as apostrophe, comma, period count as part of the word (e.g. O’Connor is 8 characters long).
# Examples

# longest_word("Margaret's toy is a pretty doll.") ➞ "Margaret's"

# longest_word("A thing of beauty is a joy forever.") ➞ "forever."

# longest_word("Forgetfulness is by all means powerless!") ➞ "Forgetfulness"

def get_longest_word(sentence):
	words_list2 = str(sentence).split(" ")
	longest_word = ""
	for word in words_list2:
		length_word = len(word)
		index_word = words_list2.index(word)
		
		if index_word == 0:
			longest_word = word
		else:
			length_longest_word = len(longest_word)
			if length_word > length_longest_word:
				longest_word = word
	
	return longest_word

print(get_longest_word("Forgetfulness is by all means powerless!"))