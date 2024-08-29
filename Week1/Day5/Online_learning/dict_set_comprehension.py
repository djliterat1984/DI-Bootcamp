# dictionary comprehension:

simple_dict = {
	"a":1,
	"b":4
}

my_dict = {k:v**2 for k,v in simple_dict.items()}
my_dict2 = {k:v*2 for k,v in simple_dict.items()}
my_dict3 = {k:v**2 for k,v in simple_dict.items() if v%2 == 0}

print(my_dict) #{'a': 1, 'b': 16}
print(my_dict2) #{'a': 1, 'b': 8}
print(my_dict3) #{}'b': 16}

my_dict4 = {num:num*2 for num in [1,2,3]}
print(my_dict4) #{1: 2, 2: 4, 3: 6}