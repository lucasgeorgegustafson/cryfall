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


def make_card(card_dict):

    card = Card()

    card.scryfall_id = card_dict['oracle_id']
    card.name = card_dict['name']
    card.mana_cost = card_dict['mana_cost']
    card.cmc = card_dict['cmc']
    card.type_line = card_dict['type_line']
    card.oracle_text = card_dict['oracle_text']
    if 'power' in card_dict:
        card.power = card_dict['power']
    if 'toughness' in card_dict:
        card.toughness = card_dict['toughness']
    card.colors = card_dict['colors']
    card.color_identity = card_dict['color_identity']
    card.legalities = card_dict['legalities']

    return card

