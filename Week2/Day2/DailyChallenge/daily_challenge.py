matrix = [
	['7','T','h','i','s','$','#','^'],
	['i','s','%',' ','M','a','t','r'],
	['i','x','?','#',' ',' ','%','!'],
]

message = ''

for i in matrix:
	for j in i:
		value=str(j)
		succes = value.isalpha()
		if succes:
			message += value
		else:
			index_value = i.index(value)	
			old_value = i[index_value - 1]
			if old_value.isalpha():
				message += " "

print(message)