# Exercise 1 : Student Grade Summary
# Instructions
# You are given a dictionary containing student names as keys and lists of their grades as values. Your task is to create a summary report that calculates the average grade for each student, assigns a letter grade, and determines the class average.

# Initial Data:

student_grades = {
    "Alice": [88, 92, 100],
    "Bob": [75, 78, 80],
    "Charlie": [92, 90, 85],
    "Dana": [83, 88, 92],
    "Eli": [78, 80, 72]
}


# Requirements:
# 1.Calculate the average grade for each student and store the results in a new dictionary called student_averages.
student_averages = {}
for student, value in student_grades.items():
	average = sum(value)/len(value)
	student_averages.update({student: average})

print(student_averages)

# 2.Assign each student a letter grade (A, B, C, D, F) based on their average grade according to the following scale, and store the results in a dictionary called student_letter_grades:
# A: 90 and above
# B: 80 to 89
# C: 70 to 79
# D: 60 to 69
# F: Below 60
student_letter_grades = {}
for key, value in student_averages.items():
	letter_grade = ""
	if value >= 90:
		letter_grade = "A"
	elif 80 < value <= 89:
		letter_grade = "B"
	elif 70 < value <= 79:
		letter_grade = "C"
	elif 60 < value <= 69:
		letter_grade = "D"
	elif value < 60:
		letter_grade = "F"
	
	student_letter_grades.update({key: letter_grade})

print(student_letter_grades)

# 3.Calculate the class average (the average of all students’ averages) and print it.

class_average = sum(student_averages.values())/len(student_averages)
print(class_average)

# 4.Print the name of each student, their average grade, and their letter grade.

for key,value in student_averages.items():
	print(f"Name: {key} - Average grade: {value} - Letter grade: {student_letter_grades[key]}")


# Hints:
# Use loops to iterate through the student_grades dictionary.
# You may use sum() and len() functions to help calculate averages.
# Initialize empty dictionaries for student_averages and student_letter_grades before filling them with data.


# Solution


# 🌟 Exercise 2 : Advanced Data Manipulation and Analysis
# Instructions
# In this exercise, you will analyze data from a hypothetical online retail company to gain insights into sales trends and customer behavior. The data is represented as a list of dictionaries, where each dictionary contains information about a single purchase.

sales_data = [
    {"customer_id": 1, "product": "Smartphone", "price": 600, "quantity": 1, "date": "2023-04-03"},
    {"customer_id": 2, "product": "Laptop", "price": 1200, "quantity": 1, "date": "2023-04-04"},
    {"customer_id": 1, "product": "Laptop", "price": 1000, "quantity": 1, "date": "2023-04-05"},
    {"customer_id": 2, "product": "Smartphone", "price": 500, "quantity": 2, "date": "2023-04-06"},
    {"customer_id": 3, "product": "Headphones", "price": 150, "quantity": 4, "date": "2023-04-07"},
    {"customer_id": 3, "product": "Smartphone", "price": 550, "quantity": 1, "date": "2023-04-08"},
    {"customer_id": 1, "product": "Headphones", "price": 100, "quantity": 2, "date": "2023-04-09"},
]

# Tasks:
# 1.Total Sales Calculation: Calculate the total sales for each product category (i.e., the total revenue generated from each type of product). Use a loop to iterate through the data and a dictionary to store the total sales for each product.
# 2.Customer Spending Profile: Determine the total amount spent by each customer. Use a dictionary to maintain the sum of amounts each customer has spent.

total_sales = {}
customers = {}

for sale in sales_data:
	product = sale["product"]
	total_price = sale["price"] * sale["quantity"]
	
	if product in total_sales:
		total_sales[product] += total_price
	else:
		total_sales[product] = total_price

	customer = sale['customer_id']
	if customer in customers:
		customers[sale["customer_id"]] += total_price
	else:
		customers[sale["customer_id"]] = total_price

print('Total sales: ', total_sales)
print("total spent by customer: ", customers)

# 3.Sales Data Enhancement:
# 	- Add a new field to each transaction called “total_price” that represents the total price for that transaction (quantity * price).
# 	- Use a loop to modify the sales_data list with this new information.

for sale in sales_data:
	sale["total_price"] = sale["price"] * sale["quantity"]

print("Data with new column total price: ")
for sale in sales_data:
	print(sale)

# 4.High-Value Transactions:
# 	- Using list comprehension, create a list of all transactions where the total price is greater than $500.
# 	- Sort this list by the total price in descending order.

transactions = [sale for sale in sales_data if sale["total_price"] > 500]
transactions.sort(key=lambda x: x["total_price"], reverse=True)
print('High-Value Transactions: ')
for trans in transactions:
	print(trans)

# 5.Customer Loyalty Identification:
# 	- Identify any customer who has made more than one purchase, suggesting potential loyalty.
# 	- Use a dictionary to count purchases per customer, then use a loop or comprehension to identify customers meeting the loyalty criterion.

total_customers_sales = {}
for sale in sales_data:
	customer_id = sale["customer_id"]
	if customer_id in total_customers_sales:
		total_customers_sales[customer_id] += 1
	else:
		total_customers_sales[customer_id] = 1

loyalty_customers = [key for key,value in total_customers_sales.items() if value >=2]

print('total_customers_sales: ', total_customers_sales)
print('loyalty_customers: ',loyalty_customers)

# 6.Bonus: Insights and Analysis:
# 	- Calculate the average transaction value for each product category.
# 	- Identify the most popular product based on the quantity sold.
# 	- Provide insights into how these analyses could inform the company’s marketing strategies.
