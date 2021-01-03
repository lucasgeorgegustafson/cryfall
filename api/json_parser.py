import json
from models.card import Card

attributes = ['oracle_id',
'name',
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
                
                return make_card(card_dict, attributes)


def make_card(card_dict, attributes):

    card = {}
    
    for attribute in attributes:
        if attribute in card_dict:
            card[attribute] = card_dict[attribute]

    return card

