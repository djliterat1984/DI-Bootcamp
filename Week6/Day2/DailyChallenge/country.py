import json
import psycopg2
import requests


class Country:
	def __init__(self):
		self.name= ''
		self.capital= ''
		self.flag = ''
		self.subregion = ''
		self.population = 0
		self.country_names = []

	def get_country_names(self):
		response = requests.get('https://restcountries.com/v3.1/all')
		json_countries = response.content
		countries = json.loads(json_countries)
		for country in countries:
			self.country_names.append(country['name']['common'])
		return self.country_names
		
	def save(self,index):
		country = get_query(self,index)
		self.name= country['name']['common']
		self.capital= country['capital'][0]
		self.flag = country['flags']['png']
		self.subregion = country['subregion']
		self.population = country['population']
		query = "INSERT INTO country_items (name, capital,flag,subregion,population) VALUES ('%s', '%s', '%s', '%s', %s) " 
		formatted_query = query % (country['name']['common'], country['capital'][0],country['flags']['png'],country['subregion'],country['population'])
		HOSTNAME = 'localHost'
		USERNAME = 'postgres'
		PASSWORD = 'dl210684#'
		DATABASE = 'countries'
		PORT = 5434
		connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE, port=PORT)
		cursor = connection.cursor()
		cursor.execute(formatted_query)
		connection.commit()
		connection.close()
		
def get_query(self, index):
	country_name = self.country_names[index]
	response = requests.get(f'https://restcountries.com/v3.1/name/{country_name}')
	return json.loads(response.content)[0]
			
def execute_query(queryAction):
	HOSTNAME = 'localHost'
	USERNAME = 'postgres'
	PASSWORD = 'dl210684#'
	DATABASE = 'countries'
	PORT = 5434
	connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE, port=PORT)
	cursor = connection.cursor()
	query = queryAction
	cursor.execute(query)
	connection.close()
		
		