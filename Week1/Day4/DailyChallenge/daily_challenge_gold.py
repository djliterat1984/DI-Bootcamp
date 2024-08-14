# Instructions
# Ask the user for their birthdate (specify the format, for example: DD/MM/YYYY).
# Display a little cake as seen below:
#        ___iiiii___
#       |:H:a:p:p:y:|
#     __|___________|__
#    |^^^^^^^^^^^^^^^^^|
#    |:B:i:r:t:h:d:a:y:|
#    |                 |
#    ~~~~~~~~~~~~~~~~~~~

# The number of candles on the cake should be the last number of the users age, if they are 53, then add 3 candles.

# Bonus : If they were born on a leap year, display two cakes !

from datetime import date


birthday = input("Give me your date of birthday (DD/MM/YYYY)")
birth_list = birthday.split("/")
today = date.today()
year = today.year
birthday_year = int(birth_list[2])
birthday_month = int(birth_list[1])
birthday_day = int(birth_list[0])
last_number=0

if today.month > birthday_month:
	age_str = str(year - birthday_year)
	last_number = int(age_str[len(age_str) - 1])
elif today.month < birthday_month: 
	age_str = str(year - birthday_year + 1)
	last_number = int(age_str[len(age_str) - 1])
else:
	if today.day > birthday_day:
		age_str = str(year - birthday_year)
		last_number = int(age_str[len(age_str) - 1])
	else:
		age_str = str(year - birthday_year + 1)
		last_number = int(age_str[len(age_str) - 1])

total_characters = 19
quanity_underline = round((total_characters - last_number)/2)
if quanity_underline % 2 == 0:
	print("_"*quanity_underline, "i"*last_number, "_"*quanity_underline)
else:
	print("_"*quanity_underline, "i"*last_number, "_"*(total_characters - last_number - quanity_underline))

print("   |:H:a:p:p:y:|   ")
print(" __|_ _ _ _ _ _|__ ")
print("|^^^^^^^^^^^^^^^^^|")
print("|:B:i:r:t:h:d:a:y:|")
print("|                 |")
print("~~~~~~~~~~~~~~~~~~~")

