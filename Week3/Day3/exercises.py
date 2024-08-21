# class Circle:
#     color = "red"
#     pi_number = 3.141592653589793238462643383279502884197

#     def __init__(self, diameter):
#         self.diameter = diameter

#     def grow(self, factor=2):
#         self.diameter = self.diameter * factor

#     def get_color(self):
#        return Circle.color

#     def get_area(self):
#         return round(Circle.pi_number * (self.diameter /2)**2, 2)
            

# circle1 = Circle(2)
# print(circle1.color)
# print(Circle.color)
# print(circle1.get_color())
# circle1.grow(3)
# print(circle1.diameter)
# print(circle1.get_area())

# # Create a Car class with two attributes: year, kilometrage. 
# # Add a dunder method to compare cars. Car A is greater than car B if its year is greater and its kilometrage is less.
# # Bonus question: What will happen if we try to do Car_a < car_b?

# class Car:
# 	def __init__(self, year, kilometrage):
# 		self.year = year
# 		self.kilometrage = kilometrage

# 	def __gt__(self, car2):
# 		return self.year > car2.year and self.kilometrage < car2.kilometrage
	

# car1 = Car(2024, 10000)
# car2 = Car(2018, 5000)

# print(car2 > car1)

import os

total = 5
i = 0

while i <=5:
	os.mkdir()

	
