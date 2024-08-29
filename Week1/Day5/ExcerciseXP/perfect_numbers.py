x = int(input('Enter the Number: ')) 

i = 1
sum_divisors = 0

while i < x:
	if x%i == 0:
		sum_divisors += i
	i+=1

print(sum_divisors == x)