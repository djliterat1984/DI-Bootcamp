from menu_manager import MenuManager
from menu_item import MenuItem
from tabulate import tabulate


def show_user_menu():
	print('View an Item (V)')
	print('Add an Item (A)')
	print('Delete an Item (D)')
	print('Update an Item (U)')
	print('Show the Menu (S)')
	option = input('Select an option: ')
	execute_option(option.lower())

def execute_option(option):
	try:
		if option == 'v':
			show_item_info()
		elif option == 'a':
			add_item_to_menu()
		elif option == 'd':
			remove_item_from_menu()
		elif option == 'u':
			update_item_from_menu()
		elif option == 's':
			show_restaurant_menu()
	except Exception as err:
		print(err)

def show_item_info():
	userInput=input('Enter a product name: ')
	product = MenuManager.get_by_name(userInput.capitalize())
	if product != None:
		print('==================================================')
		print(f'Id: {product[0]} - Product Name: {product[1]} - Price: {product[2]}')
		print('==================================================')
	else:
		print('The product was not found')

def add_item_to_menu():
	product_name = input('Enter the product name: ')
	product_price = input('Enter the price: ')
	new_product = MenuItem(product_name.capitalize(),product_price)
	try:
		new_product.save()
		print('Item was added successfully.')
	except Exception as err:
		print(err)
		
def remove_item_from_menu():
	product_name = input('Enter the product name to remove: ')
	product = MenuManager.get_by_name(product_name.capitalize())
	item = MenuItem(product[1],product[2])
	try:	
		item.delete()
		print('The item was deleted successfully')
	except Exception as err:
		print(err)

def update_item_from_menu():
	product_name = input('Enter the product name to update: ')
	product_price = input('Enter the price to update: ')
	item = MenuItem(product_name.capitalize(),product_price)

	new_product_name = input('Enter the new product name: ')
	new_product_price = input('Enter the new price: ')
	
	try:
		item.update(new_product_name.capitalize(),new_product_price)
		print('the item was updated successfully.')
	except Exception as err:
		print(err)
	
def show_restaurant_menu():
	option_selected = ''
	while(option_selected != 'x'):
		print('(v) View the menu')
		print('(x) Exit')
		option_selected = input('Choose an option: ')
		if option_selected.lower() == 'v':
			show_user_menu()
		elif option_selected.lower() == 'x':
			exit(1)
	
show_restaurant_menu()