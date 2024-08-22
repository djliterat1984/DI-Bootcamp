# Download this text file http://www.practicepython.org/assets/nameslist.txt and do the following steps

# Read the file line by line
# Read only the 5th line of the file
# Read only the 5 first characters of the file
# Read all the file and return it as a list of strings. Then split each word
# Find out how many occurences of the names "Darth", "Luke" and "Lea" are in the file
# Append your first name at the end of the file
# Append "SkyWalker" next to each first name "Luke"

try:
   f = open("./names.txt",encoding = 'utf-8')
   i=1
   while i <= 100:
     line = f.readline(1)
     print(line)
     i+=1
     
finally:
   f.close()