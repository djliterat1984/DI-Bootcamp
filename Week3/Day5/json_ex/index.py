import json
import random

json_file = 'file.json'
with open(json_file, 'r') as file_obj:
    family = json.load(file_obj)

print(family)

def random_color():
  r = random.randrange(255)
  g = random.randrange(255)
  b = random.randrange(255)
  return (r, g, b)


for key in family:
  if key == 'children':
    children = list(family[key])
    for child in children:
      print(f'{child['firstName']}, {child['age']}')

family['children'][0]['favorite_color']='blue'
family['children'][1]['favorite_color']='green'


json_file = "file.json"
with open(json_file, 'w') as file_obj:
    json.dump(family, file_obj, indent = 2)

    

      