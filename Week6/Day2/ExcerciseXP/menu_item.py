import psycopg2


class MenuItem:
	def __init__(self,name,price):
		self.name = name
		self.price = price
		# self.connection = connection
		# self.cursor = cursor
	
	def save(self):
		HOSTNAME = 'localHost'
		USERNAME = 'postgres'
		PASSWORD = 'dl210684#'
		DATABASE = 'restaurantMenu'
		PORT = 5434
		connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE, port=PORT)
		connection.autocommit = False
		cursor = connection.cursor()

		query = "INSERT INTO menu_items (item_name, item_price) VALUES (%s,%s)"
		data = (self.name,self.price)
		try:
			cursor.execute(query,data) # execute the query
			connection.commit()
		except Exception as err:
			print(err)
		
		connection.close()
	
	def update(self, name, price):
		HOSTNAME = 'localHost'
		USERNAME = 'postgres'
		PASSWORD = 'dl210684#'
		DATABASE = 'restaurantMenu'
		PORT = 5434
		connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE, port=PORT)
		cursor = connection.cursor()
		self.name = name
		self.price = price
		query = "UPDATE menu_items SET item_name = '%s', item_price = '%d'" % (name,price)
		cursor.execute(query) # execute the query
		connection.commit()
		connection.close()
	
	def delete(self):
		HOSTNAME = 'localHost'
		USERNAME = 'postgres'
		PASSWORD = 'dl210684#'
		DATABASE = 'restaurantMenu'
		PORT = 5434
		connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE, port=PORT)
		cursor = connection.cursor()
		query = "DELETE FROM menu_items WHERE item_name = '%s' AND item_price = '%d'" % (self.name,self.price)
 
		data = (self.name,self.price)
		cursor.execute(query,data) # execute the query
		connection.commit()
		connection.close()
			
	
	