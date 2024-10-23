# Instructions
# Using this REST Countries API, create the functionality which will write 10 random countries to your database.

# These are the attributes which you should populate your tables with: name, capital, flag, subregion, population.

import random
import psycopg2
import tabulate
from country import Country


def create_table(table_name):
	HOSTNAME = 'localHost'
	USERNAME = 'postgres'
	PASSWORD = 'dl210684#'
	DATABASE = 'countries'
	PORT = 5434
	connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE, port=PORT)
	connection.autocommit = False
	cursor = connection.cursor()
	query = f'''
		CREATE TABLE {table_name}(
			item_id SERIAL PRIMARY KEY,
			name VARCHAR(30) NOT NULL,
			capital VARCHAR(30) NOT NULL,
			flag VARCHAR(200) NOT NULL,
			subregion VARCHAR(30) NOT NULL,
			population INTEGER DEFAULT 0
		)
		'''
	cursor.execute(query) # execute the query
	connection.commit()
	connection.close()

# create_table('country_items')

def save_random_countries(quantity_countries):
	country = Country()	
	country_name_list = country.get_country_names()	
	i = 1	
	while i <= quantity_countries:
		index = random.randrange(0, len(country_name_list) - 1)		
		country.save(index)
		i += 1

save_random_countries(10)

# def all_items():
# 		connection = get_connection()
# 		cursor = connection.cursor()
# 		query = f'SELECT * FROM country_items'
# 		cursor.execute(query)
# 		output = cursor.fetchall()
# 		connection.close()
		

# 		print(tabulate.tabulate(output))

# def get_connection():
# 	HOSTNAME = 'localHost'
# 	USERNAME = 'postgres'
# 	PASSWORD = 'dl210684#'
# 	DATABASE = 'countries'
# 	PORT = 5434
# 	connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE, port=PORT)
# 	return connection

# all_items()
