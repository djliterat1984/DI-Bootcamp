# Instructions :
# 1.Create a class to handle paginated content in a website. A pagination is used to divide long lists of content in a series of pages.

import math


class Pagination:
	def __init__(self,items, pageSize = 10):
		self.items = items
		self.pageSize = int(pageSize)
		self.currentPage = 1
		self.totalPages = math.ceil(len(items)/pageSize)

	def getVisibleItems(self):
		items_start = int((self.currentPage - 1) * self.pageSize)
		items_stop = int(self.pageSize * self.currentPage)
		if len(self.items) < items_stop:
			items_stop = len(self.items)
		print(self.items[items_start:items_stop])
	
	def prevPage(self):
		self.currentPage -= 1
		self.getVisibleItems()

	def nextPage(self):
		self.currentPage += 1
		self.getVisibleItems()
		
	def firstPage(self):
		self.currentPage = 1
		self.getVisibleItems()

	def lastPage(self):
		self.currentPage = self.totalPages
		self.getVisibleItems()

	def goToPage(self, page_number):
		self.currentPage = int(page_number)
		self.getVisibleItems()
		
# 2.The Pagination class will accept 2 parameters:

# 	items (default: None): It will contain a list of contents to paginate.
# 	pageSize (default: 10): The amount of items to show in each page.
# So for example we could initialize our pagination like this:

alphabetList = list("abcdefghijklmnopqrstuvwxyz")

p = Pagination(alphabetList, 4)

p.getVisibleItems() 
# ["a", "b", "c", "d"]

p.nextPage()

# p.getVisibleItems()
# ["e", "f", "g", "h"]

p.lastPage()

# p.getVisibleItems()
# ["y", "z"]

# 3.The Pagination class will have a few methods:

# 	getVisibleItems() : returns a list of items visible depending on the pageSize
# 	So for example we could use this method like this:

# 	p.getVisibleItems() 
# # ["a", "b", "c", "d"]
# 	You will have to implement various methods to go through the pages such as:
# 		prevPage()
# 		nextPage()
# 		firstPage()
# 		lastPage()
# 		goToPage(pageNum)

# Here’s a continuation of the example above using nextPage and lastPage:

# alphabetList = list("abcdefghijklmnopqrstuvwxyz")

# p = Pagination(alphabetList, 4)

# p.getVisibleItems() 
# # ["a", "b", "c", "d"]

# p.nextPage()

# p.getVisibleItems()
# # ["e", "f", "g", "h"]

# p.lastPage()

# p.getVisibleItems()
# # ["y", "z"]


# Notes

# The second argument (pageSize) could be a float, in that case just convert it to an int (this is also the case for the goToPage method)
# The methods used to change page should be chainable, so you can call them one after the other like this: p.nextPage().nextPage()
# Please set the p.totalPages and p.currentPage attributes to the appropriate number as there cannot be a page 0.
# If a page is outside of the totalPages attribute, then the goToPage method should go to the closest page to the number provided (e.g. there are only 5 total pages, but p.goToPage(10) is given: the p.currentPage should be set to 5; if 0 or a negative number is given, p.currentPage should be set to 1).


