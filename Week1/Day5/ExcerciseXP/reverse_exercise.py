# Input:
# You have entered a wrong domain
# Output:
# domain wrong a entered have You

def raw_input():
	return "You have entered a wrong domain"

reverseinp= raw_input() 
words_list = reverseinp.split()
reverse_list = words_list[::-1]
length = len(words_list)
reversed = ''
for w in reverse_list:
	if reverse_list.index(w) == length - 1:
		reversed += w
	else:
		reversed += w + " "

print(reverseinp)
print(reversed) 



