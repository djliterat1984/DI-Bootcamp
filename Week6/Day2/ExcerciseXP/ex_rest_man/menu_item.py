import psycopg2

from menu_manager import MenuManager

class MenuItem:
	def __init__(self,name,price):
		self.name = name
		self.price = price
	
	def save(self):
		query = f"""INSERT INTO menu_items (item_name, item_price) VALUES {self.name, self.price}"""
		execute_query(query)
	
	def update(self, name='', price=0):
		if name == '':		
			name = self.name
		
		if price == 0:		
			price = self.price
			
		item_id = MenuManager.get_by_name(self.name)[0]
		query = "UPDATE menu_items SET item_name = '%s', item_price = '%s' WHERE item_id = '%s' " % (name,price,item_id)
		execute_query(query)
	
	def delete(self):
		item_id = MenuManager.get_by_name(self.name)[0]
		query = "DELETE FROM menu_items WHERE item_id = '%s'" % (item_id)

		data = (item_id)
		execute_query(query,data)
		
def execute_query(queryAction, dataQuery=()):
	HOSTNAME = 'localHost'
	USERNAME = 'postgres'
	PASSWORD = 'dl210684#'
	DATABASE = 'restaurantMenu'
	PORT = 5434
	connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE, port=PORT)
	cursor = connection.cursor()
	query = queryAction
	
	try:
		if dataQuery == ():
			cursor.execute(query)
		else:
			cursor.execute(query,dataQuery)
		
		connection.commit()
	except Exception as err:
		print(err)
	
	connection.close()
	