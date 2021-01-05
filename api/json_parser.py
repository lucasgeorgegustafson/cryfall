import json
from database import db
from models.card import Card

card_data = ['name',
'mana_cost',
'cmc',
'type_line',
'oracle_text',
'power',
'toughness',
'colors',
'color_identity',
'legalities']


def parse_json(name):

    with open('oracle-cards.json') as oracle_cards:
        for card_dict in json.load(oracle_cards):
            if card_dict['name'] == name:

                return card_dict
