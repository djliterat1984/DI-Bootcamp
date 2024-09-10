# Exercise 1 : Call History
# Instructions
# 1.Create a class called Phone. This class takes a parameter called phone_number. When instantiating an object create an attribute called call_history which value is an empty list.

# 2.Add a method called call that takes both self and other_phone (i.e another Phone object) as parameters. The method should print a string stating who called who, and add this string to the phone’s call_history.

# 3.Add a method called show_call_history. This method should print the call_history.

# 4.Add another attribute called messages to your __init__() method which value is an empty list.

# 5.Create a method called send_message which is similar to the call method. Each message should be saved as a dictionary with the following keys:
# to : the number of another Phone object
# from : your phone number (also a Phone object)
# content

# 6.Create the following methods: show_outgoing_messages(self), show_incoming_messages(self), show_messages_from(self)

# 7.Test your code !!!

class Phone:
	def __init__(self,phone_number):
		self.call_history = []
		self.phone_number = phone_number
		self.messages = []

	def call(self,other_phone):
		message = (f'{self.phone_number} called to {Phone(other_phone).phone_number}')
		print(message)
		self.call_history.append(message)
	
	def show_call_history(self):
		for call in self.call_history:
			print(call)
	
	def send_message(self, other_phone, content):
		print(f"Message from {other_phone} to {self.phone_number}")
		print(content)
		self.messages.append({'to':other_phone, 'from':self.phone_number, 'content':content})

	def show_outgoing_messages(self):
		pass
	
	def show_incoming_messages(self):
		pass	
	
	def show_messages_from(self):
		pass
	

phone = Phone('3456789')
other_phone1 = Phone('1234567')
other_phone2 = Phone('8543589')
phone.call(other_phone1.phone_number)
phone.call(other_phone2.phone_number)
phone.show_call_history()
phone.send_message('5943438348','hello world')
