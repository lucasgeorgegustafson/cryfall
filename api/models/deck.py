from database import db
from models.model import Base

class Deck(Base):
    __tablename__ = 'decks'

    name = db.Column(db.String(128))
    format = db.Column(db.String(128), nullable=False)
    cards = db.relationship('DeckCard', back_populates = 'deck')

    def count_cards(self):
        count = 0
        for card in self.cards:
            count += card.qty_main + card.qty_sideboard

        return count

    def count_main(self):
        count = 0
        for card in self.cards:
            count += card.qty_main

        return count

    def count_sideboard(self):
        count = 0
        for card in self.cards:
            count += card.qty_sideboard

        return count
