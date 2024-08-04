# excercise 1

my_age = 40
in_many_years = my_age + 123879

print(f"You will have {in_many_years}")

# excercise 2

first_name = "Diego"
last_name = "Literat"

print(first_name + " " + last_name)

# excercise

# Place a comment next to each variable. The comments will:


# Explain what each variable does
# Find out the type of each
# Format each variable into a print statement

#For example,  
#my_name = "Frank"  this line creates a name variable type: string 
#print("My name is {}".format(my_name))

# cars = 100
# space_in_a_car = 4.0
# drivers = 30
# passengers = 90
# cars_not_driven = cars - drivers
# cars_driven = drivers
# carpool_capacity = cars_driven * space_in_a_car
# average_passengers_per_car = passengers / cars_driven


# print(f"There are, {cars}, cars available.")
# print(f"There are only, {drivers}, drivers available.")
# print("There will be", cars_not_driven, "empty cars today.")
# print("We can transport", carpool_capacity, "people today.")
# print("We have", passengers, "to carpool today.")
# print("We need to put about", average_passengers_per_car,"in each car.")


number = int(input("Enter a number between 1 and 100"))

if(number % 3==0 and number %5 ==0):
	print("FzzBuzz")
elif(number % 3 == 0):
	print("Fizz")
elif(number%5 == 0):
	print("Buzz")