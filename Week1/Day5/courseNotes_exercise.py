# Access the value of key history


sample_dict = { 
   "class":{ 
      "student":{ 
         "name":"Mike",
         "marks":{ 
            "physics":70,
            "history":80
         }
      }
   }
}

class_dict = sample_dict['class']
student = class_dict['student']
marks = student['marks']
history_value = marks['history']


# Delete set of keys from Python Dictionary


sample_dict = {
  "name": "Kelly",
  "age":25,
  "salary": 8000,
  "city": "New york"
}
# keys_to_remove = ["name", "salary"]

# Expected output:
# {'city': 'New york', 'age': 25}

del sample_dict["name"]
del sample_dict["salary"]

print(sample_dict)