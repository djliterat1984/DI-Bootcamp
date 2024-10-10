import json

class MenuManager:
	def __init__(self):
		json_file = 'restaurant_menu.json'
		with open(json_file, 'r') as file:
			self.menu = json.load(file)
	
	def add_item(self,name, price):		
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
	
		
# menuManager = MenuManager()
# menuManager.add_item('Pancho', 20)
# result = menuManager.remove_item('Pancho')
# menuManager.save_to_file()
