# Building a Weather App
# The current weather data can be retrieved from OpenWeatherMap using the Observation module in PyOWM (Python OpenWeatherMap).
# Use this documentation for this Mini Project.

# 1.Get the current weather in Tel Aviv.
# 2.Get current wind info of Tel Aviv.
# 3.Get today’s sunrise and sunset times of Tel Aviv.
# 4.Display all these information in a user friendly way.

# 5.Recreate these steps, but this time, ask the user for a location (display the information in a user friendly way).
# 	- Instead of working with the name of the city, retrieve the id of the city.
# 	- Check out the documentation section : “Identifying cities and places via city IDs”.

# 6.Retrieve weather forecasts : The OpenWeatherMap free tier gives you access to 5 day forecasts. The forecasts contain the weather data in three-hour intervals.
# 	- The methods for retrieving the forecast are:
# 			- forecast_at_place('Los Angeles, US', '3h')
# 			- forecast_at_id(5391959, '3h')
# 			- forecast_at_coords(lat=37.774929, lon=-122.419418, interval='3h')
# 			Forecasts are useful if you want to know what the weather conditions will be throughout the day/week.

# 7.Use this API to retrieve the Air Pollution in a specific city.

import json
import api_data as api
import requests
import datetime as dt

found_city = False
city_id = ''
city_name = ''
while found_city == False:
	city_name = input("Give me a place to return you the weather: ")

	with open("/Users/chaim/Projects/developerInstitute/Di-Bootcamp/Week4/Day2/ExcerciseXP/city_list.json", 'r') as cities:
		city_list_str = cities.read()

		city_list = list(json.loads(city_list_str))
	
		for c in city_list:
			if c['name'].lower() == city_name.lower():
				city_id = c['id']
				break

		if city_id != '':
			found_city = True
		else:
			print("Not found")

weather_resp = requests.get(f'{api.endpoint}/weather?id={city_id}&appid={api.apikey}')
data = json.loads(weather_resp.text) 
weather = data['weather'][0]
wind_data = data["wind"]
sunrise = dt.datetime.fromtimestamp(data["sys"]["sunrise"])
sunset = dt.datetime.fromtimestamp(data["sys"]["sunset"])
# print(weather)
# print(wind_data)
# print(sunrise,sunset)
print(f'Today the weather will be {weather['description']}, the wind\'s speed will be {wind_data['speed']}. Sunrise wil be {sunrise.hour}:{sunrise.minute}:{sunrise.second} and the sunset wil be {sunset.hour}:{sunset.minute}:{sunset.second}')

forecast_resp = requests.get(f'{api.endpoint}/forecast?id={city_id}&appid={api.apikey}')
forecast_data = json.loads(forecast_resp.text)
forecast = forecast_data["list"]
print(f"The forecast for the next days in {city_name.capitalize()}:")
for f in forecast:
	day = dt.datetime.fromtimestamp(f['dt'])
	temperature = f['main']['temp']
	feels_like = f['main']['feels_like']
	temp_max = f['main']['temp_max']
	temp_min = f['main']['temp_min']
	humidity = f['main']['humidity']
	print(f"{day}: Temp.: {temperature}F, feels like: {feels_like}, min {temp_min}F -  max {temp_max}F, humdity {humidity}")

# import matplotlib.pyplot as plt
# import numpy as np

# fig = plt.figure(layout='constrained', facecolor='lightskyblue')
# figR = fig.subfigures(2)
# figR.set_facecolor('paleturquoise')
# axR = figR.subplots(1, 2, sharey=True)
# axR[0].set_title('Axes 1')
# figR.suptitle('Right subfigure')

# plt.show()


















# Mini project : XP Ninja
# BONUS: Your goal is to produce a weather GUI that shows the three-day humidity forecast for a city of your choice.
# If you’ve never built a GUI with Python, don’t worry! We’ll be going through step by step how to build it. We will be using Matplotlib to
# plot the weather data. Matplotlib uses Tkinter behind the scenes to display the interactive GUI.



# You have to reproduce this bar chart:





# You will have to use :

# the matplotlib module for the bar chart
# the pytz and datetime module for the date
# the pyowm module for the weather


# Instructions:

# Start by updating the values for the ylabel and title by creating a function called init_plot().
# Create a function called plot_temperatures() to determine the details of the bar chart.
# Create a function called write_humidity_on_bar_chart() to display the % humidity in the bar chart.
# Style the bar chart