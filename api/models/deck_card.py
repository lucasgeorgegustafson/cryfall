from database import db
from models.model import Base
from models.card import Card
from models.deck import Deck

class DeckCard(db.Model):

    __tablename__ = 'deck_cards'

    deck_id = db.Column(db.Integer, db.ForeignKey(Deck.id), primary_key=True)
    card_oracle_id = db.Column(db.String(128), db.ForeignKey(Card.oracle_id), primary_key=True)
    qty_main = db.Column(db.Integer, nullable=False, server_default='0')
    qty_sideboard = db.Column(db.Integer, nullable=False, server_default='0')
    is_commander = db.Column(db.Boolean, nullable=False, server_default='false')
    is_companion = db.Column(db.Boolean, nullable=False, server_default='false')
    card = db.relationship('Card', back_populates = 'decks')
    deck = db.relationship('Deck', back_populates = 'cards')
