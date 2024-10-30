# Exercise 1 : Temperature
# Instructions
# 1.Write a base class called Temperature.
		# Implement the following subclasses: Celsius, Kelvin, Fahrenheit.
		# Each of the subclasses should have a method which can convert the temperture to another type.
		# You must consider different designs and pick the best one according to the SOLID Principle.

import random


class Temperature:
	def __init__(self):
		pass

class Celsius(Temperature):
	def convertTo(temperature, type:str):
		if type.lower() == 'kelvin':
			kelvinTemp = temperature * 1
		else:
			fahrenheitTemp = temperature * 1
			
class Kelvin(Temperature):
	def convertTo(temperature, type:str):
		if type.lower() == 'celsius':
			kelvinTemp = temperature * 1
		else:
			fahrenheitTemp = temperature * 1

class Fahrenheit(Temperature):
	def convertTo(temperature, type:str):
		if type.lower() == 'kelvin':
			kelvinTemp = temperature * 1
		else:
			fahrenheitTemp = temperature * 1



# Exercise 2: In the Quantum Realm
# Instructions
#1. Write a class called QuantumParticle and implement the following:
		# The attributes - The particle has an initial position (x), momentum (y) and spin (p)

		# The method position() - Position measurement: generate a random position (integer between 1 and 10,000)

		# The method momentum() - Momentum measurement: generate a random momentum (float - a number between 0 and 1)

		# The method spin() - Spin measurement: can randomly be 1/2 or -1/2

		# Create a method that implements a disturbance. A disturbance occurs each time a measurement is made 
		# (e.g. one of the measurements method is called). Disturbance changes the position and the momentum 
		# of the particle (randomly generated) and then prints ‘Quantum Interferences!!’

		# Implement a meaningful representation of the particle (repr)

class QuantumParticle:
	def __init__(self, position=0, momentum=0):
		self.x = 0
		self.y = 0
		self.spin = 0
		self.isEntangled = False
		self.particleEntangled = None		

	def position(self):
		position = random.randrange(1,10000)
		self.disturbance(position)
		if self.isEntangled:
			self.particleEntangled.position = -self.position
	
	def momentum(self):
		momentum = random.randrange(0,1,0.0000001)
		self.disturbance(momentum)
		self.particleEntangled.momentum = -self.momentum
	
	def spin(self): 
		spin = random.choice([0.5, -0.5])
		self.disturbance(spin)
		self.particleEntangled.spin = -self.spin
		
	def disturbance(self,measurement,type):
		if type == 'position':
			self.position = measurement * 1.1
		elif type == 'momentum':
			self.momentum = measurement * 0.9
		else:
			self.spin = measurement + 0.1
		
		print('Quantum Interferences!!')
			
	def entangle(self,particle2):
		if(self.isEntangled):
			print('Spooky Action at a Distance !!')
		else:
			self.particleEntangled = particle2
			self.isEntangled = True
			self.momentum
			particle2.isEntangled = True
			print('Particle p1 is now in quantum entanglement with Particle p2')
		
		
			
particle = QuantumParticle()
particle.position()
particle.momentum()
particle.spin()
repr(particle)

# 2.Quantum Entanglement: two particle can be entangled, meaning that if I measure the spin of one of them 
# the second one is automatically set to the opposite value. A quantum particle can only be entangled 
# to another quantum particle (check that when you run the method !!)
# Modify as you see fit the attributes and methods of your class to fit the previous definition
# When two particles are entangled print: ‘Spooky Action at a Distance !!’


# >>>p1 = QuantumParticle(x=1,p=5.0)
# >>>p2 = QuantumParticle(x=2,p=5.0)
# >>>p1.entangle(p2)
# >>>'Particle p1 is now in quantum entanglement with Particle p2'
# >>>p1 = QuantumParticle()
# >>>p2 = QuantumParticle()
# >>>p1.entangle(p2)
# >>>'Spooky Action at a Distance'

# =============================================================

# solution chatgpt:

# Here’s a Python implementation of the `QuantumParticle` class with the specified attributes and methods, including the concept of quantum entanglement:

# ```python
# import random

# class QuantumParticle:
#     def __init__(self, x=None, y=None, p=None):
#         self.x = x if x is not None else random.randint(1, 10000)  # Initial position
#         self.y = y if y is not None else random.uniform(0, 1)      # Initial momentum
#         self.p = p if p is not None else random.choice([-1/2, 1/2])  # Initial spin
#         self.entangled_particle = None

#     def position(self):
#         self.disturbance()
#         self.x = random.randint(1, 10000)
#         return self.x

#     def momentum(self):
#         self.disturbance()
#         self.y = random.uniform(0, 1)
#         return self.y

#     def spin(self):
#         self.disturbance()
#         self.p = random.choice([-1/2, 1/2])
#         if self.entangled_particle:
#             self.entangled_particle.set_opposite_spin()
#             print("Spooky Action at a Distance !!")
#         return self.p

#     def disturbance(self):
#         print("Quantum Interferences!!")
#         self.x = random.randint(1, 10000)
#         self.y = random.uniform(0, 1)

#     def set_entangled(self, other):
#         if isinstance(other, QuantumParticle):
#             self.entangled_particle = other
#             other.entangled_particle = self
#             print("Particles are now entangled!")

#     def set_opposite_spin(self):
#         self.p = -self.p

#     def __repr__(self):
#         return (f"QuantumParticle(x={self.x}, y={self.y:.2f}, p={self.p})")

# # Example usage
# particle1 = QuantumParticle()
# particle2 = QuantumParticle()

# particle1.set_entangled(particle2)

# print(particle1)
# print(particle2)

# particle1.spin()  # This will affect both particles
# print(particle1)
# print(particle2)
# ```

# ### Explanation:
# - **Attributes**: Each particle has `x` (position), `y` (momentum), and `p` (spin). Default values are assigned if not provided during initialization.
# - **Methods**:
#   - `position()`, `momentum()`, and `spin()`: Generate random values and call the `disturbance()` method, which alters the particle’s position and momentum while printing a message.
#   - `disturbance()`: Alters the position and momentum randomly, simulating the effects of measurement in quantum mechanics.
#   - `set_entangled()`: Allows one particle to entangle with another, printing a message when entangled.
#   - `set_opposite_spin()`: Changes the spin of the particle to the opposite value.
# - **Representation**: The `__repr__` method provides a meaningful string representation of the particle's state.

# You can create instances of `QuantumParticle`, entangle them, and measure their properties as shown in the example usage.