# 1 Create a user profile for your new game.
# This user profile will be stored in a dictionary with keys: 'age', 'username', 'weapons', 'is_active' and 'clan'

user_profile = {
	'age':0,
	'username': '',
	'weapons':None,
	'is_active':False,
	'clan':None
}

# 2 iterate and print all the keys in the above user.

for key in user_profile.keys():
	print(key)

# 3 Add a new weapon to your user

user_profile['weapons'] = ['gun']
print(user_profile)

# 4 Add a new key to include 'is_banned'. Set it to false

user_profile['is_banned']= False
print(user_profile)

# 5 Ban the user by setting the previous key to True

user_profile['is_banned'] = True
print(user_profile)

# 6 create a new user2 my copying the previous user and update the age value and username value.

user2 = user_profile.copy()
user2.update({"age":30, "username":"Pedro"})
print(user_profile)
print(user2)