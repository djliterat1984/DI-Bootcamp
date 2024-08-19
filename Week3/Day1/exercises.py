# class Door:
# 	def __init__(self, is_opened = True):
# 		self.is_opened = is_opened

# 	def close_door(self):
# 		self.is_opened = False
	
# 	def open_door(self):
# 		self.is_opened = True

# class BlockedDoor(Door):
# 	def open_door():
# 		raise ValueError("Blocked door cannot be opened or closed")
	
# 	def close_door():
# 		raise ValueError("Blocked door cannot be opened or closed")
	

# class Alien():
# 	def __init__(self, name, planet):
# 			self.name = name
# 			self.planet = planet

# 	def fly(self):
# 			print(self.name, 'is flying!')

# 	def sleep(self):
# 			print("Aliens don't sleep")

# class Animal():
#     def __init__(self, name):
#         self.name = name

#     def sleep(self):
#         print("zzzZZZZZ")

# class Dog(Animal):
#     def bark(self):
#         print(f"{self.name} barked, WAF !")

# class AlienDog(Alien, Dog):
#     def bark(self):
#         print(f"{self.name} barked, 0ul10ul0u (that's how aliens dogs bark..) !")


# my_normal_dog = Dog("Roger")
# my_normal_dog.sleep()
# # # >> zzzZZZZZ

# my_normal_dog.bark()
# # # >> Roger barked, WAF !

# my_alien_dog = AlienDog("Rex", "Neptune")
# print(my_alien_dog.planet)
# # # >> Neptune

# my_alien_dog.fly()
# # # >> Rex is flying!

# my_alien_dog.sleep()
# # # >> Aliens don't sleep

# my_alien_dog.bark()
# # # >> Rex barked, 0ul10ul0u (that's how aliens dogs bark..) !

# class A():

#     def dothis(self):
#         print("doing this in A")


# class B(A):
#     pass


# class C():
#     def dothis(self):
#         print("doing this in C")


# class D(C, B):
#     pass

# d_instance = D()
# d_instance.dothis()

my_list = [2,3,1,2,"four",42,1,5,3,"imanumber"]


def sum_numbers(my_list):
    total = 0
    for number in my_list:
        try:
            total += number 
        except:
            continue
    return total

print(sum_numbers(my_list))