import json
from database import db
from models.card import Card

def import_cards(file_path):

    with open(file_path) as oracle_cards:

        cards = json.load(oracle_cards)
        cards_len = len(cards)

        for i, card_dict in enumerate(cards):
            if (i + 1) % 100 == 0:
                print(f'{i + 1} of {cards_len}')
            card = Card.from_dict(card_dict)
            db.session.add(card)
            if (i + 1) % 500 == 0:
                db.session.commit()

        db.session.commit()

