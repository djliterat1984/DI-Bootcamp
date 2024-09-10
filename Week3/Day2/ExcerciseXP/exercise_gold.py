# Exercise 1: Bank Account
# Instructions
# Part I:

# 1.Create a class called BankAccount that contains the following attributes and methods:
		# balance - (an attribute)
		# __init__ : initialize the attribute
		# deposit : - (a method) accepts a positive int and adds to the balance, raise an Exception if the int is not positive.
		# withdraw : - (a method) accepts a positive int and deducts from the balance, raise an Exception if not positive


# Part II : Minimum balance account

# 1.Create a MinimumBalanceAccount that inherits from BankAccount.
# 2.Extend the __init__ method and accept a parameter called minimum_balance with a default value of 0.
# 3.Override the withdraw method so it only allows the user to withdraw money if the balance remains higher than the minimum_balance, raise an Exception if not.


# Part III: Expand the bank account class

# 1.Add the following attributes to the BankAccount class:
		# username
		# password
		# authenticated (False by default)

# 2.Create a method called authenticate. This method should accept 2 strings : a username and a password. If the username and password match the attributes username and password the method should set the authenticated boolean to True.

# 3.Edit withdraw and deposit to only work if authenticated is set to True, if someone tries an action without being authenticated raise an Exception

class BankAccount:
	def __init__(self, username, password):
		self.balance = 0
		self.username = username
		self.password= password
		self.authenticated = False

	def deposit(self, amount:int):
		if self.authenticated:
			if amount > 0: 
				self.balance += amount 
			else:
				raise Exception('The deposit needs to be positive.')
		else:
			raise Exception('You are not authenticated.')
	
	def withdraw(self, amount:int):
		if self.authenticated:
			if amount > 0: 
				self.balance -= amount 
			else:
				raise Exception('The extraction needs to be positive.')
		else:
			raise Exception('You are not authenticated.')
		
	def authenticate(self, username, password):
		if self.username == username and self.password == password:
			self.authenticated = True
			return self.authenticated
		
class MinimumBalanceAccount(BankAccount):
	def __init__(self, minimum_balance = 0):
		self.minimum_balance = minimum_balance
	
	def withdraw(self, amount: int):
		if self.authenticated:
			remainder = self.balance - amount
			if remainder > self.minimum_balance:
				self.balance -= amount
			else:
				raise Exception('You can\'t extract this amount of money.')			
		else:
			raise Exception('You are not authenticated.')

# Part IV: BONUS Create an ATM class

# 1.__init__:
		# Accepts the following parameters: account_list and try_limit.

		# Validates that account_list contains a list of BankAccount or MinimumBalanceAccount instances.
		# Hint: isinstance()

		# Validates that try_limit is a positive number, if you get an invalid input raise an Exception, then move along and set try_limit to 2.
		# Hint: Check out this tutorial

		# Sets attribute current_tries = 0

		# Call the method show_main_menu (see below)

# 2.Methods:
		# show_main_menu:
			# This method will start a while loop to display a menu letting a user select:
				# Log in : Will ask for the users username and password and call the log_in method with the username and password (see below).
				# Exit.

		# log_in:
		# 	Accepts a username and a password.

		# Checks the username and the password against all accounts in account_list.
		# 	If there is a match (ie. use the authenticate method), call the method show_account_menu.
		# 	If there is no match with any existing accounts, increment the current tries by 1. Continue asking the user for a username and a password, until the limit is reached (ie. try_limit attribute). Once reached display a message saying they reached max tries and shutdown the program.

		# show_account_menu:
		# 	Accepts an instance of BankAccount or MinimumBalanceAccount.
		# 	The method will start a loop giving the user the option to deposit, withdraw or exit.

class ATM:
	def __init__(self, account_list, try_limit):
		is_bank_account = False
		for i in account_list:
			is_bank_account = isinstance(i,(BankAccount,MinimumBalanceAccount))
		
		self.account_list = account_list
		if try_limit > 0:
			self.try_limit = try_limit
		else:
			self.try_limit = 2

		self.current_tries = 0
		self.show_main_menu()

	def show_main_menu(self):
		while self.try_limit <= self.current_tries:
			if self.try_limit == self.current_tries:
				break
			
			selection = input('Select an option: Login - Exit')
			if selection.lower() == 'exit':
				break
			
			user_name = input('Enter your Username: ')
			password = input('Enter your password: ')
			logged_in = self.log_in(user_name, password)
			if logged_in == True:
				break
	
	def log_in(self, username, password):
		is_matched = False
		for acc in self.account_list:
			is_matched = acc.authenticate(username,password)
			if is_matched:
				self.show_account_menu(acc)
				break
		
		if is_matched == False:
			self.current_tries += 1
		
		return is_matched

	def show_account_menu(self, bank_account):
		if isinstance(bank_account, (BankAccount, MinimumBalanceAccount)):
			selected_user_operation = input('What do you want to do? (D)eposit, (W)ithdraw or (E)xit?: ')
			while selected_user_operation.lower() != 'd' or selected_user_operation.lower() != 'w' or selected_user_operation.lower() != 'e':
				selected_user_operation = input('Please select a correct option (D)eposit, (W)ithdraw or (E)xit?: ')
					 
			if selected_user_operation.lower() == 'd':
				bank_account.deposit()
			elif selected_user_operation == 'w':
				bank_account.withdraw()
				
