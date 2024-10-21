import psycopg2

class MenuManager:
	@classmethod
	def get_by_name(cls,name:str):
		connection = get_connection()
		cursor = connection.cursor()
		query = "SELECT * FROM menu_items WHERE item_name = %s"
		data = name
		cursor.execute(query,(data,))
		output = cursor.fetchone()
		connection.close()
		if output != None:
			return output	
		else:
			return None
		
	@classmethod
	def all_items(cls):
		connection = get_connection()
		cursor = connection.cursor()
		query = f'SELECT * FROM menu_items'
		cursor.execute(query)
		output = cursor.fetchall()
		connection.close()
		return output	

def get_connection():
	HOSTNAME = 'localHost'
	USERNAME = 'postgres'
	PASSWORD = 'dl210684#'
	DATABASE = 'restaurantMenu'
	PORT = 5434
	connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE, port=PORT)
	return connection

# menuManager = MenuManager()
# menuManager.add_item('Pancho', 20)
# result = menuManager.remove_item('Pancho')
# menuManager.save_to_file()