# Exercise 1 : Student Grade Summary
# Instructions
# You are given a dictionary containing student names as keys and lists of their grades as values. Your task is to create a summary report that calculates the average grade for each student, assigns a letter grade, and determines the class average.



# Initial Data:


# student_grades = {
#     "Alice": [88, 92, 100],
#     "Bob": [75, 78, 80],
#     "Charlie": [92, 90, 85],
#     "Dana": [83, 88, 92],
#     "Eli": [78, 80, 72]
# }


# Requirements:
# Calculate the average grade for each student and store the results in a new dictionary called student_averages.
# Assign each student a letter grade (A, B, C, D, F) based on their average grade according to the following scale, and store the results in a dictionary called student_letter_grades:
# A: 90 and above
# B: 80 to 89
# C: 70 to 79
# D: 60 to 69
# F: Below 60
# Calculate the class average (the average of all students’ averages) and print it.
# Print the name of each student, their average grade, and their letter grade.
# Hints:
# Use loops to iterate through the student_grades dictionary.
# You may use sum() and len() functions to help calculate averages.
# Initialize empty dictionaries for student_averages and student_letter_grades before filling them with data.


# Solution


# 🌟 Exercise 2 : Advanced Data Manipulation and Analysis
# Instructions
# In this exercise, you will analyze data from a hypothetical online retail company to gain insights into sales trends and customer behavior. The data is represented as a list of dictionaries, where each dictionary contains information about a single purchase.



# sales_data = [
#     {"customer_id": 1, "product": "Smartphone", "price": 600, "quantity": 1, "date": "2023-04-03"},
#     {"customer_id": 2, "product": "Laptop", "price": 1200, "quantity": 1, "date": "2023-04-04"},
#     {"customer_id": 1, "product": "Laptop", "price": 1000, "quantity": 1, "date": "2023-04-05"},
#     {"customer_id": 2, "product": "Smartphone", "price": 500, "quantity": 2, "date": "2023-04-06"},
#     {"customer_id": 3, "product": "Headphones", "price": 150, "quantity": 4, "date": "2023-04-07"},
#     {"customer_id": 3, "product": "Smartphone", "price": 550, "quantity": 1, "date": "2023-04-08"},
#     {"customer_id": 1, "product": "Headphones", "price": 100, "quantity": 2, "date": "2023-04-09"},
# ]


# Tasks:
# Total Sales Calculation: Calculate the total sales for each product category (i.e., the total revenue generated from each type of product). Use a loop to iterate through the data and a dictionary to store the total sales for each product.

# Customer Spending Profile: Determine the total amount spent by each customer. Use a dictionary to maintain the sum of amounts each customer has spent.

# Sales Data Enhancement:

# Add a new field to each transaction called “total_price” that represents the total price for that transaction (quantity * price).
# Use a loop to modify the sales_data list with this new information.
# High-Value Transactions:

# Using list comprehension, create a list of all transactions where the total price is greater than $500.
# Sort this list by the total price in descending order.
# Customer Loyalty Identification:

# Identify any customer who has made more than one purchase, suggesting potential loyalty.
# Use a dictionary to count purchases per customer, then use a loop or comprehension to identify customers meeting the loyalty criterion.
# Bonus: Insights and Analysis:

# Calculate the average transaction value for each product category.
# Identify the most popular product based on the quantity sold.
# Provide insights into how these analyses could inform the company’s marketing strategies.









sales_data = [
    {"customer_id": 1, "product": "Smartphone", "price": 600, "quantity": 1, "date": "2023-04-03", "total_price": 0},
    {"customer_id": 2, "product": "Laptop", "price": 1200, "quantity": 1, "date": "2023-04-04", "total_price": 0},
    {"customer_id": 1, "product": "Laptop", "price": 1000, "quantity": 1, "date": "2023-04-05", "total_price": 0},
    {"customer_id": 2, "product": "Smartphone", "price": 500, "quantity": 2, "date": "2023-04-06", "total_price": 0},
    {"customer_id": 3, "product": "Headphones", "price": 150, "quantity": 4, "date": "2023-04-07", "total_price": 0},
    {"customer_id": 3, "product": "Smartphone", "price": 550, "quantity": 1, "date": "2023-04-08", "total_price": 0},
    {"customer_id": 1, "product": "Headphones", "price": 100, "quantity": 2, "date": "2023-04-09", "total_price": 0},
]

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

	# if sale['customer_id'] in customers:
		

	# sale['total_price'] = sale['price'] * sale["quantity"]

	# print(sale["total_price"])

for tot_sale in total_sales:
	print(f"{tot_sale}: {total_sales[tot_sale]}")

for cus in customers:
	print('total customer: ', customers[cus])

# print(f"Smartphones sales: {smartphone_sales}")
# print(f"Laptop sales: {laptop_sales}")
# print(f"Headphones sales: {headphones_sales}")

# print(f'Total amount spent by customer 1: ${customers['total_customer_1']}')
# print(f'Total amount spent by customer 2: ${customers['total_customer_2']}')
# print(f'Total amount spent by customer 3: ${customers['total_customer_3']}')