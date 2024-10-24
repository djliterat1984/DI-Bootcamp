# Exercise 1 : Restaurant Menu Manager
# Instructions
# Description: Create a restaurant menu management system for a manager. 
# The program should allow the manager to view the menu, add an item and delete an item.
# PART 1
# In this exercise we will use PostgreSQL and Python.
# 1.Create a new database and a new table in pgAdmin (or in psql). The table is named Menu_Items and contains the columns
		# item_id : SERIAL PRIMARY KEY
		# item_name : VARCHAR(30) NOT NULL
		# item_price : SMALLINT DEFAULT 0

import psycopg2
from menu_editor import show_user_menu
from menu_manager import MenuManager
from menu_item import MenuItem

def create_table(table_name):
		
	HOSTNAME = 'localHost'
	USERNAME = 'postgres'
	PASSWORD = 'dl210684#'
	DATABASE = 'restaurantMenu'
	PORT = 5434
	connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE, port=PORT)
	connection.autocommit = False
	cursor = connection.cursor()
	query = f'''
		CREATE TABLE {table_name}(
			item_id SERIAL PRIMARY KEY,
			item_name VARCHAR(30) NOT NULL,
			item_price SMALLINT DEFAULT 0
		);
		'''
	cursor.execute(query) # execute the query
	connection.commit()
	connection.close()

#create_table('menu_items')

# to load all items from exercise week 3 day 5
# json_file = 'restaurant_menu.json'
# with open(json_file, 'r') as file:
# 	menu = json.load(file)	
# for i in menu['items']:
# 		item = MenuItem(i['name'], i['price'])
# 		item.save()


# 2.In the file menu_item.py, create a new class called MenuItem, the attributes should be the name and price of each item.
#DONE
# 3.Create several methods (save, delete, update) these methods will allow a user to save, delete and update items from the Menu_Items table. The update method can update the name as well as the price of an item.
#DONE
# 4.In the file menu_manager.py, create a new class called MenuManager
		# 1.Create a Class Method called get_by_name that will return a single item from the Menu_Items table depending on it’s name, if an object is not found (there is no item matching the name in the get_by_name method) return None.
		# 2.Create a Class Method called all_items which will return a list of all the items from the Menu_Items table.

# Codebox:
# item = MenuItem('Burger', 35)
# item.save()
# item.delete()
# item.update('Veggie Burger', 37)
# item2 = MenuManager.get_by_name('Beef stew')
# print(item2)
# items = MenuManager.all_items()
# print(items)

# Part 2
# 1.Create a file called menu_editor.py , which will have the following functions:
	# 1.show_user_menu() - this function should display the program menu (not the restaurant menu!), and ask the user to :
			# 1.View an Item (V)
			# 2.Add an Item (A)
			# 3.Delete an Item (D)
			# 4.Update an Item (U)
			# 5.Show the Menu (S)
			# Call the appropriate function that matches the user’s input.


	# 2.add_item_to_menu() - this function should ask the user to input the item’s name and price. This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
			# If the item was added successfully print a message which states: item was added successfully.

	# 3.remove_item_from_menu()- this function should ask the user to input the name of the item they want to remove from the restaurant’s menu. This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
			# If the item was deleted successfully – print a message to let the user know this was completed.
			# If not – print a message which states that there was an error.

	# 4.update_item_from_menu()- this function should ask the user to input the name and price of the item they want to update from the restaurant’s menu, as well as to input the name and price they want to change them with. This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
			# If the item was updated successfully – print a message to let the user know this was completed.
			# If not – print a message which states that there was an error.

	# 5.show_restaurant_menu() - print the restaurant’s menu.

# 2.When the user chooses to exit the program, display the restaurant menu and exit the program.