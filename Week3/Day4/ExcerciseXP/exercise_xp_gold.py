# Exercise 1 : Upcoming Holiday
# Instructions
# 1.Write a function that displays today’s date.
# 2.The function should also display the amount of time left from now until the next upcoming holiday and print which holiday that is. (Example: the next holiday is New Years’ Eve in 30 days).
# Hint: Use a module to find the datetime and name of the upcoming holiday.

from datetime import date
import holidays

def get_next_holiday(country):
	us_holidays = holidays.country_holidays(country,years = 2024)
	today = date.today()

	for h_date, h_name in us_holidays.items():
		if h_date > today:
			left_time = h_date - today
			return f'The next holiday is {h_name} eve in {left_time.days} days'

print(f'Today is {date.today()}')	
print(get_next_holiday('AR'))

# Exercise 2 : How Old Are You On Jupiter?
# Instructions
# 1.Given an age in seconds, calculate how old someone would be on all those planets :

		# Earth: orbital period 365.25 Earth days, or 31557600 seconds
		# Example : if someone is 1,000,000,000 seconds old, the function should output that they are 31.69 Earth-years old.
		# Mercury: orbital period 0.2408467 Earth years
		# Venus: orbital period 0.61519726 Earth years
		# Mars: orbital period 1.8808158 Earth years
		# Jupiter: orbital period 11.862615 Earth years
		# Saturn: orbital period 29.447498 Earth years
		# Uranus: orbital period 84.016846 Earth years
		# Neptune: orbital period 164.79132 Earth years

earth_days_year = 365.25
earth_seconds_year = 31557600
mercury_year = 0.2408467 
venus_year = 0.61519726 
mars_year = 1.8808158 
jupiter_year = 11.862615 
saturn_year = 29.447498 
uranus_year = 84.016846 
neptune_year = 164.79132

def get_age_in_planet(earth_age, planet_year):
	return round(earth_age * planet_year, 2)

def get_all_ages_in_planets(age):
	earth_age = round(age/earth_seconds_year,2)
	mercury_age = get_age_in_planet(earth_age,mercury_year)
	venus_age = get_age_in_planet(earth_age,venus_year)
	mars_age = get_age_in_planet(earth_age,mars_year)
	jupiter_age = get_age_in_planet(earth_age,jupiter_year)
	saturn_age = get_age_in_planet(earth_age,saturn_year)
	uranus_age = get_age_in_planet(earth_age,uranus_year)
	neptune_age = get_age_in_planet(earth_age,neptune_year)

	planet_ages = {
		'earth':earth_age, 
		'mercury': mercury_age,
		'venus':venus_age,
		'mars': mars_age,
		'jupiter': jupiter_age,
		'saturn': saturn_age,
		'uranus': uranus_age,
		'neptune': neptune_age
	}

	return planet_ages

age = 1000000000
planet_ages = get_all_ages_in_planets(age)

for k,v in planet_ages.items():
	print(f'{k}: {v}')
	
# Exercise 3 : Regular Expression #1
# Instructions
# Hint: Use the RegEx (module)

# 1.Use the regular expression module to extract numbers from a string.

# Example

# return_numbers('k5k3q2g5z6x9bn') 
# Expected output : 532569

import re

word = 'k5k3q2g5z6x9bn'
numbers = re.findall('[0-9]', word)
print(numbers)

# Exercise 4 : Regular Expression #2
# Instructions
# Hint: Use the RegEx (module)

# 1.Ask the user for their full name (example: “John Doe”), and check the validity of their answer:
		# The name should contain only letters.
		# The name should contain only one space.
		# The first letter of each name should be upper cased.

name = "John Doe"
isValid = re.search('\D',name)
print(isValid)

# Exercise 5: Python Password Generator
# Instructions
# 1.Create a Python program that will generate a good password for you.

# Program flow:

# 1.Ask the user to type in the number of characters that the password should have (password length) – between 6 and 30 characters.
			# Validate the input. Make sure the user is inputing a number between 6 to 30. Create a loop which will continue to ask the user for an input until they enter a valid one.

# 2.Generate a password with the required length.

# 3.Print the password with a user-friendly message which reminds the user to keep the password in a safe place!

# Rules for the validity of the password

# 1.Each password should contain:
		# At least 1 digit (0-9)
		# At least 1 lower-case character (a-z)
		# At least 1 upper-case character (A-Z)
		# At least 1 special character (eg. !, @, #, $, %, ^, _, …)
		# Once there is at least 1 of each, the rest of the password should be composed of more characters from the options presented above.

# 2.Create a test function first!

# 3.Do the following steps 100 times, with different password lengths:
		# Generate a password.
		# Test the password to ensure that:
		# it fulfills all the requirements above (eg. it has at least one digit, etc.)
		# it has the specified length.