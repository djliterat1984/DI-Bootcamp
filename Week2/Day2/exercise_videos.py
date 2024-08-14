def highest_even(li):
	evens = []
	for i in li:
		if i%2 == 0:
			evens.append(i)
	return max(evens)

print(highest_even([2,10,2,3,4,8,11]))