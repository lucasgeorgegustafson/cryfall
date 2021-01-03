import json
from database import db
from models.card import Card

card_data = ['oracle_id',
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
                
                return card_dict


def make_card(card_dict, card_data):

    card = Card() 
    
    for attribute in card_data:
        if attribute in card_dict:
            card.attribute = card_dict[attribute]
    card.scryfall_id = card_dict['oracle_id']

    return card

