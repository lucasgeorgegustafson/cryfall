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
        deck_list.append(deck_to_api_response(deck))

    return {'decks': deck_list}


@blueprint.route("/decks/<int:id>", methods = ('GET',))
def get_deck(id):
    deck = Deck.query.get(id)

    if deck == None:
        return abort(404)

    return deck_to_api_response(deck)


@blueprint.route("/decks/<int:id>", methods = ('DELETE',))
def delete_deck(id):
    deck = Deck.query.get(id)

    if deck == None:
        return abort(404)

    db.session.delete(deck)
    db.session.commit()

    return deck_to_api_response(deck)

@blueprint.app_errorhandler(404)
def not_found(error):
    return {'error': 'resource not found'}


@blueprint.route("/cards", methods = ('GET',))
def list_cards():
    cards = Card.query.limit(100).all()
    card_list = []

    for card in cards:
        card_dict = {'oracle_id': card.oracle_id,
                     'name': card.name}
        card_list.append(card_dict)

    return {'cards': card_list}


@blueprint.route("/cards/<name>", methods = ('GET',))
def search_card(name):
    card_dict = json_parser.parse_json(name)
    card = Card.from_dict(card_dict)

    db.session.add(card)
    db.session.commit()

    return card_to_api_response(card)


def deck_to_api_response(deck):
    return {'id': deck.id,
            'name': deck.name,
            'format': deck.format}

def card_to_api_response(card):
    return {'oracle_id': deck.oracle_id,
            'name': deck.name,
            'mana_cost': deck.mana_cost,
            'cmc': deck.cmc,
            'type_line': deck.type_line,
            'oracle_text': deck.oracle_text,
            'power': deck.power,
            'toughness': deck.toughness,
            'colors': deck.colors,
            'color_identity': deck.color_identity,
            'legalities': deck.legalities}
