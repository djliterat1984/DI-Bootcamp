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

class Circle:
	PI = 3.14

	def __init__(self, radius = 0, diameter = 0):
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
		print(self.radius)
		print(self.diameter)
	
	def __add__circles__(self,*args):
		radius = self.radius
		for circle in args:
			radius += circle.radius

		return Circle(radius)
	
	def __is_bigger__(self, circle2):
		return self.radius > circle2.radius
	
	def __are_equals__(self, circle2):
		return self.radius == circle2.radius
	
	def add_to_list(self):
			self.circle_list.append(self)
			self.circle_list.sort()


circle1 = Circle(4)
circle2 = Circle(5)
circle1.__attributes__()
circle1.add_to_list()
print(Circle.Circle_List)
print(circle1.get_area())
circle1.__add__circles__(Circle(5), Circle(6))
circle1.__is_bigger__(circle2)
circle1.__are_equals__(circle2)
circle1.add_to_list(circle1)
print(Circle.Circle_List)
