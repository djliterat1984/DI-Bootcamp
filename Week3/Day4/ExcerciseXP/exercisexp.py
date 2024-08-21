# Exercise 1: Currencies
# Instructions
from datetime import datetime,date
import random
import string
# from typing import Any
from faker import Faker


class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount 

    def __str__(self):
        if self.amount == 1:
            return f'{self.amount} {self.currency}'
        return f'{self.amount} {self.currency}s'
    
    def __int__(self):
        return self.amount
    
    def __add__(self, num2):
        if type(num2) == int:
            return self.amount.__add__(num2)
        else:
            if self.currency == num2.currency:
                amount2 = int(num2.amount)
                return self.amount.__add__(amount2)
            # else:
            #     raise TypeError("Cannot add between Currency type <dollar> and <shekel>")
    
    def __call__(self):
        return self.__str__()
    
    def __iadd__(self, num2):
        self.amount = self.amount.__add__(num2)
        return self.amount
    
    def __repr__(self):
      	return self.__str__()
    

# Using the code above, implement the relevant methods and dunder methods which will output the results below.
# Hint : When adding 2 currencies which don’t share the same label you should raise an error.
c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(str(c1))
# '5 dollars'

print(int(c1))
# 5

print(repr(c1))
# '5 dollars'

print(c1.amount + 5)
# 10

print(c1 + c2)
# 15

print(c1()) 
# 5 dollars

c1.amount += 5 
print(c1)
# 10 dollars

c1.amount += c2.amount
print(c1())
# 20 dollars

c1 + c3
# TypeError: Cannot add between Currency type <dollar> and <shekel>


# Exercise 2: Import
# Instructions
# 1.In a file named func.py create a function that sum 2 numbers, and prints the result
# 2.In a file named exercise_one.py import the function and call it to print the result
# Hint: You can use the the following syntaxes:

# import module_name 

# OR 

# from module_name import function_name 

# OR 

# from module_name import function_name as fn 

# OR

# import module_name as mn


# 🌟 Exercise 3: String module
# Instructions
# Generate random String of length 5
# Note: String must be the combination of the UPPER case and lower case letters only. No numbers and a special symbol.
# Hint: use the string module

new_string = str(random.choices(string.ascii_letters, k=5))
print(new_string)

# 🌟 Exercise 4 : Current Date
# Instructions
# 1.Create a function that displays the current date.
# Hint : Use the datetime module.

def current_date():
    today = date.today()
    print(f'Today is {today.month} {today.day},{today.year}')

current_date()

# Exercise 5 : Amount of time left until January 1st
# Instructions
# 1.Create a function that displays the amount of time left from now until January 1st.
# (Example: the 1st of January is in 10 days and 10:34:01hours).

def left_time_amount():
    today = datetime.now()
    init_time = datetime(today.year, today.month, today.day, today.hour, today.minute, today.second)
    end_time = datetime(today.year + 1, 1, 1,0,0)
    left_time = end_time - init_time
    left_hours = int(left_time.seconds/3600)
    left_minutes = int((left_time.seconds - 3600 * left_hours)/60)
    left_seconds = (left_time.seconds - 3600 * left_hours - left_minutes * 60)

    if left_hours < 10:
        left_hours = f'0{left_hours}'
    if left_minutes < 10:
        left_minutes = f'0{left_minutes}'
    if left_seconds < 10:
        left_seconds = f'0{left_seconds}'

    print(f'The 1st of January is in {left_time.days} days and {left_hours}:{left_minutes}:{left_seconds} hours')

left_time_amount()

# Exercise 6 : Birthday and minutes
# Instructions
# Create a function that accepts a birthdate as an argument (in the format of your choice), then displays a message stating how many minutes the user lived in his life.

def minutes_live(birthday):
    date_birthday_txt = str(birthday).split('/')
    month_birthday = int(date_birthday_txt[0])
    day_birthday = int(date_birthday_txt[1])
    year_birthday = int(date_birthday_txt[2])
    date_birthday = datetime(year_birthday,month_birthday,day_birthday)
    today = datetime.now()
    difference = today - date_birthday
    days_in_minutes = difference.days * 24 * 60
    seconds_in_minutes = int(difference.seconds /60)
    total_minutes = days_in_minutes + seconds_in_minutes
    print(f'Total minutes that you lived so far: {total_minutes}')

# birthday = input('Enter your birthday(in this format MM/DD/YYYY):')
# minutes_live(birthday)

# Exercise 7 : Faker Module
# Instructions
# 1.Install the faker module, and take a look at the documentation and learn how to properly implement faker in your code.
fake = Faker()

# 2.Create an empty list called users. Tip: It should be a list of dictionaries.
users = []

# 3.Create a function that adds new dictionaries to the users list. Each user has the following keys: name, adress, langage_code. Use faker to populate them with fake data.

print(fake.name)


def add_user(name,adress,language_code):
    user = {'name':name,'adress': adress,'language_code':language_code}
    users.append(user)

add_user(fake.name(),fake.address(),fake.language_code())
add_user(fake.name(),fake.address(),fake.language_code())
add_user(fake.name(),fake.address(),fake.language_code())
add_user(fake.name(),fake.address(),fake.language_code())
add_user(fake.name(),fake.address(),fake.language_code())
add_user(fake.name(),fake.address(),fake.language_code())
add_user(fake.name(),fake.address(),fake.language_code())
add_user(fake.name(),fake.address(),fake.language_code())
add_user(fake.name(),fake.address(),fake.language_code())
add_user(fake.name(),fake.address(),fake.language_code())
add_user(fake.name(),fake.address(),fake.language_code())
add_user(fake.name(),fake.address(),fake.language_code())
add_user(fake.name(),fake.address(),fake.language_code())
add_user(fake.name(),fake.address(),fake.language_code())
add_user(fake.name(),fake.address(),fake.language_code())
add_user(fake.name(),fake.address(),fake.language_code())
add_user(fake.name(),fake.address(),fake.language_code())
add_user(fake.name(),fake.address(),fake.language_code())
add_user(fake.name(),fake.address(),fake.language_code())
add_user(fake.name(),fake.address(),fake.language_code())
add_user(fake.name(),fake.address(),fake.language_code())
add_user(fake.name(),fake.address(),fake.language_code())
add_user(fake.name(),fake.address(),fake.language_code())
add_user(fake.name(),fake.address(),fake.language_code())
add_user(fake.name(),fake.address(),fake.language_code())
add_user(fake.name(),fake.address(),fake.language_code())
add_user(fake.name(),fake.address(),fake.language_code())

for user in users:
    print(user.values())