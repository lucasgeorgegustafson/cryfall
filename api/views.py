from flask import Blueprint
from database import db
from flask import abort
from models.card import Card
from models.deck import Deck
from models.deck_card import DeckCard
import json_parser

blueprint = Blueprint('decks', __name__)

@blueprint.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


@blueprint.route("/decks", methods = ('GET',))
def list_decks():
    decks = Deck.query.all()
    deck_list = [] 

    for deck in decks:
        deck_dict = {'id': deck.id,
                     'name': deck.name,
                     'format': deck.format}
        deck_list.append(deck_dict)   

    return {'decks': deck_list}


@blueprint.route("/decks/<int:id>", methods = ('GET',))
def get_deck(id):
    deck = Deck.query.get(id)

    if deck == None:
        return abort(404)
    
    return {'id': deck.id,
            'name': deck.name,
            'format': deck.format}

    
@blueprint.route("/decks/<int:id>", methods = ('DELETE',))
def delete_deck(id):
    deck = Deck.query.get(id)

    if deck == None:
        return abort(404) 
    
    db.session.delete(deck)
    db.session.commit()

    return {'id': deck.id,
            'name': deck.name,
            'format': deck.format}

@blueprint.app_errorhandler(404)
def not_found(error):
    return {'error': 'resource not found'}


@blueprint.route("/cards", methods = ('GET',))
def list_cards():
    cards = Card.query.limit(100).all()
    card_list = [] 

    for card in cards:
        card_dict = {'scryfall_id': card.id,
                     'name': card.name}
        card_list.append(card_dict)   

    return {'cards': card_list}


@blueprint.route("/cards/<name>", methods = ('GET',))
def add_card(name):
    card_dict = json_parser.parse_json(name)
    card = json_parser.make_card(card_dict)

    db.session.add(card)
    db.session.commit()

    return {key: value for (key, value) in card_dict.items() if key in json_parser.card_data}
