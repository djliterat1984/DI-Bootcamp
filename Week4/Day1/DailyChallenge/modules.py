import requests
import time

print("First time")
print("==========")
start = time.time()
x = requests.get('https://w3schools.com')
end = time.time()
print("w3schools: ", end - start)
start = time.time()
x = requests.get('https://google.com')
end = time.time()
print("Google: ", end - start)
start = time.time()
x = requests.get('https://www.ynet.co.il')
end = time.time()
print("Ynet: ", end - start)
start = time.time()
x = requests.get('https://www.imdb.com/')
end = time.time()
print("IMDB: ",end - start)

print("=========================================================================")
print("Second time")
print("==========")
start = time.time()
x = requests.get('https://w3schools.com')
end = time.time()
print("w3schools: ", end - start)
start = time.time()
x = requests.get('https://google.com')
end = time.time()
print("Google: ", end - start)
start = time.time()
x = requests.get('https://www.ynet.co.il')
end = time.time()
print("Ynet: ", end - start)
start = time.time()
x = requests.get('https://www.imdb.com/')
end = time.time()
print("IMDB: ",end - start)