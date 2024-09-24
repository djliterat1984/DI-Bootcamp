import psycopg2


class MenuManager:
	def __init__(self):
		pass

	@classmethod
	def get_by_name(cls,name:str):
		HOSTNAME = 'localHost'
		USERNAME = 'postgres'
		PASSWORD = 'dl210684#'
		DATABASE = 'restaurantMenu'
		PORT = 5434

		connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE, port=PORT)
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
		HOSTNAME = 'localHost'
		USERNAME = 'postgres'
		PASSWORD = 'dl210684#'
		DATABASE = 'restaurantMenu'
		PORT = 5434

		connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE, port=PORT)
		cursor = connection.cursor()
		query = f'SELECT * FROM menu_items'
		cursor.execute(query)
		output = cursor.fetchall()
		connection.close()
		return output	
		
		
	