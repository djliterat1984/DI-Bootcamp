# Instructions :
# This challenge is about Biology that will put emphasis on your knowledge of classes, inheritance and 
# polymorphism.

# 1.Build a DNA object. DNA is composed of chromosomes which is itself composed of Genes.
#   - A Gene is a single value 0 or 1, it can mutate (flip).
# 	- A Chromosome is a series of 10 Genes. It also can mutate, meaning a random number of genes can 
#     randomly flip (1/2 chance to flip).
# 	- A DNA is a series of 10 chromosomes, and it can also mutate the same way Chromosomes can mutate.

# 2.Implement these classes as you see fit.

# 3.Create a new class called Organism that accepts a DNA object and an environment parameter that sets 
#   the probability for its DNA to mutate.

# 4.Instantiate a number of Organism and let them mutate until one gets to a DNA which is only made of 1s.
#   Then stop and record the number of generations (iterations) it took.
# Write your results in you personal biology research notebook and tell us your conclusion :).

import random


class DNA:
	def __init__(self):
		self.chromosomes:Chromosom = []
	
	def set_list_of_chromosom(self):
		i=1
		while i <= 10:
			chromosom = Chromosom()
			self.chromosomes.append(chromosom.get_list_of_gen())
			i+=1		

class Chromosom:
	def __init__(self):
		pass
	
	def get_list_of_gen(self):
		genes = []
		i=1
		while i <= 10:
			genes.append(Gen())
			i+=1
		return genes
		
class Gen:
	def __init__(self):
		self.value = random.choice([0,1])

class Organism:
	def __init__(self, dna:DNA, environment:float = 0.5):
		self.dna = dna
		self.environment = environment

	def mutate_to_one_value(self):
		mutate_to_one = False
		total_1 = 0
		iterations = 0

		while mutate_to_one == False:
			gen_list = []
			for chromosome in self.dna.chromosomes:
				for gen in chromosome:
					gen_list.append(gen.value)

			print(gen_list)
			for chromosome in self.dna.chromosomes:
				for gen in chromosome:
					if gen.value == 1:
						total_1 +=1
						# if random.random() > 0.50:
					gen.value = random.choice([0,1])
				
			iterations +=1
			if total_1 == 100:
				mutate_to_one = True
		
		return iterations

					

				
			

dna = DNA()
dna.set_list_of_chromosom()

organism1 = Organism(dna)
iterations1 = organism1.mutate_to_one_value()
print('iterations1: ',iterations1)
organism2 = Organism(dna)
iterations2 = organism2.mutate_to_one_value()
print('iterations2: ',iterations2)
organism3 = Organism(dna)
iterations3 = organism3.mutate_to_one_value()
print('iterations3: ',iterations3)
organism4 = Organism(dna)
iterations4 = organism4.mutate_to_one_value()
print('iterations4: ',iterations4)






