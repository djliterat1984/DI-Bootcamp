import json
import re
import psycopg2

class MenuManager:
	#this 3 methods I added to load the json file of items 
	def __init__(self):
		json_file = 'restaurant_menu.json'
		with open(json_file, 'r') as file:
			self.menu = json.load(file)
	
	def add_item(self,name, price, is_valentin = False):		
		if is_valentin:
			items = self.menu['valentin_day']
			items.append({'name': name, 'price': price})	
		else:
			items = self.menu['items']
			items.append({'name': name, 'price': price})
		
	
	def remove_item(self, name):
		items = self.menu['items']
		index = 0
		for i in items:
			if i['name'] == name:
				del items[index]
				return True
			index += 1		
		return False
			
	def save_to_file(self):
		json_file = 'restaurant_menu.json'
		with open(json_file, 'w') as file_obj:
			json.dump(self.menu, file_obj, indent = 2)

	def is_valid_price(self,price):
		pattern = r'^\d{2}.14$'
		return bool(re.match(pattern, price))

	def add_new_valentin_day_item(self):
		name_new_item = input('Enter the item name: ')
		price_new_item = input('Enter the price: ')
		
		item_words = name_new_item.split(' ')
		for word in item_words:
			is_word_valid = self.check_word(word)
			if is_word_valid == False:
				print('The Item is not valid')
				break
			
		e_letter_count = name_new_item.lower().count('e')
		
		isValid = self.is_valid_price(price_new_item)
		
		if isValid and e_letter_count >= 2:
			print('isValid')
			self.add_item(name_new_item, price_new_item, True)
			self.save_to_file()
		else:
			print('The item don\'t has more or equal than 2 \"E\" letter or the price is not valid')
	
	def check_word(self,word):	
		print(word)
		if word[0].islower():
			return False
		if '-' in word:
			index = word.find('-')
			if word[index +1 ].isupper():
				return False
			
		has_number = False
		i=0
		for i in range (0,len(word)):
			if word[i].isnumeric():
				has_number = True
		
		if has_number:
			print('The item name has number/s')
			return False

menuManager = MenuManager()
menuManager.add_new_valentin_day_item()
# menuManager.add_item('Pancho', 20)
# result = menuManager.remove_item('Pancho')
# menuManager.save_to_file()
