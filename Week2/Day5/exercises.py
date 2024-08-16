# class Dog():
#     # Initializer / Instance Attributes
#     def __init__(self, name_of_the_dog):
#         print("A new dog has been initialized !")
#         print("His name is", name_of_the_dog)
#         self.name = name_of_the_dog

#     def bark(self):
#         print(f"{self.name} barks ! WAF")

#     def walk(self, number_of_meters):
#         print(f"{self.name} walked {number_of_meters} meters")

# shelter_dog = Dog("Rex")
# shelter_dog.walk(10)
# shelter_dog.name = "Pocho"
# print(shelter_dog.name)

class Person():
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def show_details(self):
    print("Hello my name is " + self.name)

  def rename(self):
    new_name = input("What is your new name? ")
    self.name = new_name

first_person = Person("John", 36)
first_person.show_details()