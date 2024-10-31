import translators.server
# Instructions :
# Consider this list

french_words= ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"] 
# Look at this result :
# {"Bonjour": "Hello", "Au revoir": "Goodbye", "Bienvenue": "Welcome", "A bientôt": "See you soon"}
# You have to recreate the result using a translator module. Take a look at the googletrans module
translated_words = {}
in_language = 'fr'
out_language = 'en'
for fword in french_words:
	output_translate = translators.server.translate_text(fword, from_language=in_language,to_language=out_language)
	translated_words[fword] = output_translate

print(translated_words)

# translation = translators.server.translate_text("Bonjour", from_language='fr',to_language='en')
# print(translation)