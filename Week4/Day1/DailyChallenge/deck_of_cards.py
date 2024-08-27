# Part 2: Create a deck of cards class.
# The Deck of cards class should NOT inherit from a Card class.

# The requirements are as follows:

# The Card class should have a suit (Hearts, Diamonds, Clubs, Spades) and a value (A,2,3,4,5,6,7,8,9,10,J,Q,K)
# The Deck class :
# 	should have a shuffle method which makes sure the deck of cards has all 52 cards and then rearranges them randomly.
# 	should have a method called deal which deals a single card from the deck. After a card is dealt, it should be removed from the deck.

import random

class Card:
	def __init__(self, suit, value):
		self.suit = suit
		self.value = value

class Deck:
	def __init__(self):
		self.cards = []
	
	def shuffle(self):
		for suit in suits:
			for value in values:
				card = Card(suit,value)
				self.cards.append(card)
		
		random.shuffle(self.cards)

		while len(self.cards) > 0:
			self.deal(self.cards[0])	
		
	def deal(self, card):
		print(f'{card.suit}, {card.value}')
		self.cards.remove(card)

suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']	
values = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']

deck = Deck()
deck.shuffle()

























































