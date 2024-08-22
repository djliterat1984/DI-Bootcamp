# # # Download this text file http://www.practicepython.org/assets/nameslist.txt and do the following steps

# # # Read the file line by line
# # # Read only the 5th line of the file
# # # Read only the 5 first characters of the file
# # # Read all the file and return it as a list of strings. Then split each word
# # # Find out how many occurences of the names "Darth", "Luke" and "Lea" are in the file
# # # Append your first name at the end of the file
# # # Append "SkyWalker" next to each first name "Luke"

# import json
# import requests


# # with open("names.txt",'a+') as names:
# # 	names_list = names.readlines()
# # 	print(names_list)
# # 	print(names.readline(5))

# # 	line_1 = names.readline(1)
# # 	print(line_1[0:5])
# # 	list_names = list(names.read())
# # 	for name in list_names:
# # 		print(name.split())
	
# # 	lea = 0 
# # 	darth = 0
# # 	luke = 0

# # 	for name in list_names:
# # 		if name == 'Luke':
# # 			luke +=1
# # 		elif name == 'Lea':
# # 			lea +=1
# # 		else:
# # 			darth +=1

# # 	print(lea, darth, luke)
# # 	names.write("Diego")
# # 	sky_walker = []
# # 	for name in names:
# # 		if name == 'Luke':
# # 			sky_walker.append(name)
# # 			sky_walker.append('Sky walker')
# # 		else:
# # 			sky_walker.append(name)
	
# response = requests.get("http://api.open-notify.org/iss-now.json")
# print(response.text)
# print(response.headers)
# print(response.json())

# response = requests.get("http://api.open-notify.org/astros.json")
# data = response.text
# print(response.request.url)
# print(response.request.body)

import json
import requests

response = requests.get("https://api.chucknorris.io/jokes/random")
data = json.loads(response.text)
print(data['value'])

response = requests.get("https://api.chucknorris.io/jokes/random")
data = json.loads(response.text)
print(data['value'])

response = requests.get("https://api.chucknorris.io/jokes/random")
data = json.loads(response.text)
print(data['value'])

response = requests.get("https://api.chucknorris.io/jokes/random")
data = json.loads(response.text)
print(data['value'])

response = requests.get("https://api.chucknorris.io/jokes/random")
data = json.loads(response.text)
print(data['value'])

response = requests.get("https://api.chucknorris.io/jokes/random")
data = json.loads(response.text)
print(data['value'])

response = requests.get("https://api.chucknorris.io/jokes/random")
data = json.loads(response.text)
print(data['value'])

response = requests.get("https://api.chucknorris.io/jokes/random")
data = json.loads(response.text)
print(data['value'])

response = requests.get("https://api.chucknorris.io/jokes/random")
data = json.loads(response.text)
print(data['value'])

response = requests.get("https://api.chucknorris.io/jokes/random")
data = json.loads(response.text)
print(data['value'])

response = requests.get("https://api.chucknorris.io/jokes/random")
data = json.loads(response.text)
print(data['value'])

response = requests.get("https://api.chucknorris.io/jokes/random")
data = json.loads(response.text)
print(data['value'])
