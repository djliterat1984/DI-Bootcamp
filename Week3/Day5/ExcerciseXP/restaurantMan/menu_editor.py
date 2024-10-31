from menu_manager import MenuManager

menu_manager:MenuManager

def load_manager():
	global menu_manager
	menu_manager = MenuManager()
	menu_manager.add_new_valentin_day_item()
	
def show_user_menu():
	printHeart()
	option_selected = ''
	while(option_selected != 'x'):
		print('(a) Add an item')
		print('(d) Delete an item')
		print('(v) View the menu')
		print('(x) Exit')
		option_selected = input('Choose an option: ')
		if option_selected == 'a':
			add_item_to_menu()
		elif option_selected == 'd':
			remove_item_from_menu()
		elif option_selected == 'v':
			show_restaurant_menu()
			menu_manager.save_to_file()
		elif option_selected == 'x':
			exit(1)
	
def add_item_to_menu():
	global menu_manager
	product_name = input('Enter the procuct name: ')
	product_price = input('Enter the procuct price: ')
	menu_manager.add_item(product_name, product_price)

def remove_item_from_menu():
	global menu_manager
	product_name = input('Which product do you want to remove? ')
	success = menu_manager.remove_item(product_name)	
	if success:
		print('The item has been deleted')
	else:
		print('Oh No!! There was an error!')
		
def printHeart():
	heart = [ 
		" ***   *** ",
		"***** *****",
		"***********",
		" ********* ",
		"   *****   ",
		"     *     "
	]

	for line in heart:
		print(line)

def show_restaurant_menu():
	print(menu_manager.menu)
	
# load_manager()
show_user_menu()

