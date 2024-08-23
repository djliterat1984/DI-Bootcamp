# Instructions :
# The goal is to create a class that represents a simple circle.
# A Circle can be defined by either specifying the radius or the diameter.
# The user can query the circle for either its radius or diameter.

# Other abilities of a Circle instance:

# Compute the circle’s area
# Print the attributes of the circle - use a dunder method
# Be able to add two circles together, and return a new circle with the new radius - use a dunder method
# Be able to compare two circles to see which is bigger, and return a Boolean - use a dunder method
# Be able to compare two circles and see if there are equal, and return a Boolean- use a dunder method
# Be able to put them in a list and sort them
# Bonus (not mandatory) : Install the Turtle module, and draw the sorted circles

from operator import attrgetter
import turtle

class Circle:
	PI = 3.14
	circles = []
	sorted_circles = []

	def __init__(self, radius = 0, diameter = 0):
		if radius == 0 and diameter == 0:
			raise ValueError("The values are wrongs")
		if radius == 0:
			self.radius = diameter / 2
		else:
			self.radius = radius
		
		if diameter == 0:
			self.diameter = radius * 2
		else:
			self.diameter = diameter
		self.circle_list = []

	def get_area(self):
		area = Circle.PI * self.radius **2
		return area
	
	def __attributes__(self):
		print("Radius: ", self.radius)
		print("Diameter: ", self.diameter)

	def __add__(self, other):
		new_radius = self.radius + other.radius
		return Circle(new_radius)
	
	def __is_bigger__(self, circle2):
		return self.radius > circle2.radius
	
	def __are_equals__(self, circle2):
		return self.radius == circle2.radius
	
	def add_to_list(self, *args):
			global sorted_circles
			Circle.circles.append(self)
			for circle in args:
				Circle.circles.append(circle)
			
			sorted_circles = sorted(Circle.circles, key=attrgetter('radius'))
			i = 1
			for circle in sorted_circles:
				print(f"circle num {i} has radius: {circle.radius}")
				i+=1
			
circle1 = Circle(80)
circle2 = Circle(50)

print("Circle 1 area: ", circle1.get_area())

circle1.__attributes__()

new_circle = circle1 + circle2
print("new circle radius: ",new_circle.radius)
print(circle1.__is_bigger__(circle2))
print(circle1.__are_equals__(circle2))
circle1.add_to_list(circle2)

s = turtle.getscreen()
t = turtle.Turtle()
for circle in sorted_circles:
	t.circle(circle.radius)
	t.clear()

