from database import db
from models.deck import Deck

def seed_db():
    decks = [
        Deck(name='Boros Cycling', format='standard'),
        Deck(name='Gruul Adventures', format='standard'),
        Deck(name='Esper Doom', format='standard'),
        Deck(name='Dimir Rogues', format='standard'),
        Deck(name='Mono Green Tron', format='modern')
    ]

    [ db.session.add(deck) for deck in decks ]

    return db.session.commit()
