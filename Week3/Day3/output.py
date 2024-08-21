def separator_line():
	print('-' * 30)

print('Defaultdict')
from collections import defaultdict  
nums = defaultdict(int)  
nums['one'] = 1  
nums['two'] = 2
nums['three'] = 3 
print(nums['four'])

separator_line()

print('Counter')
from collections import Counter  
list = [1,2,3,4,1,2,6,7,3,8,1,2,2]  
answer=Counter()
answer = Counter(list)  
print(answer[2])  

separator_line()

print('Deque')
from collections import deque  
#initialization
list = ["a","b","c"]  
deq = deque(list)  
print(deq)  

#insertion
deq.append("z")  
deq.appendleft("g")  
print(deq)
#removal
deq.pop()  
deq.popleft()  
print(deq)

separator_line()

print('Named Tuple')
from collections import namedtuple
Student = namedtuple('Student', 'fname, lname, age')  
s1 = Student('Peter', 'James', '13')  
print(s1.fname) 

separator_line()

print('Chain Map')
import collections

dictionary1 = { 'a' : 1, 'b' : 2 }  
dictionary2 = { 'c' : 3, 'b' : 4 }  
chain_Map = collections.ChainMap(dictionary1, dictionary2)  
print(chain_Map.maps) 

separator_line()

print('Ordered Dict')
from collections import OrderedDict  
order = OrderedDict()  
order['a'] = 1  
order['b'] = 2  
order['c'] = 3  
print(order)  

#unordered dictionary
unordered=dict()
unordered['a'] = 1  
unordered['b'] = 2  
unordered['c'] = 3 
print("Default dictionary", unordered)

separator_line()

print('====================')
print('Infinite Iterators')
print('====================')

print('Count')
import itertools

result = itertools.count(start = 0, step = 2)

for number in result:
# termination condition
    if number < 8:
        print (number)
    else:
        break
    
separator_line()

print('Cycle')
result2 = itertools.cycle('12345')
counter = 0

for number in result2:
# termination condition
    if counter < 10 :
        print (number)
        counter = counter + 1
    else:
        break

separator_line()

print('Repeat')
result3 = itertools.repeat('hello', times = 2)

for word in result3:
    print (word)

separator_line()

print('====================')
print('Finite Iterators')
print('====================')

print('Chain')
list_one = ['a', 'b', 'c']
list_two =['d', 'e', 'f']
list_three = ['1', '2', '3']

result4 = itertools.chain(list_one, list_two, list_three)

for element in result4:
  print (element)

separator_line()

print('Compress')
names = ['Alice', 'James', 'Matt']
have_flu = [True, True, False]

result5 = itertools.compress(names, have_flu)

for element in result5:
  print (element)

separator_line()

print('DropWhile')
my_list = [0, 0, 1, 2, 0]

result6 = itertools.dropwhile(lambda x: x == 0, my_list)

for elements in result6:
  print (elements)


