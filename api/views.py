from flask import Blueprint
from database import db
from flask import abort
from models.card import Card
from models.deck import Deck
from models.deck_card import DeckCard
from sqlalchemy.orm.exc import NoResultFound
import card_import

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


@blueprint.route("/decks/<int:deck_id>/cards", methods = ('GET',))
def list_deck_cards(deck_id):
    deck = Deck.query.get(deck_id)

    if deck == None:
        return abort(404)

    deck_cards = []

    for deck_card in deck.cards:
        deck_cards.append(deck_card_to_api_response(deck_card))

    return {'deck_cards': deck_cards}

#TODO: add endpoint for put request
@blueprint.app_errorhandler(404)
def not_found(error):
    return {'error': 'resource not found'}


@blueprint.route("/cards", methods = ('GET',))
def list_cards():
    cards = Card.query.limit(100).all()
    card_list = []

    for card in cards:
        card_list.append(card_to_api_response(card))

    return {'cards': card_list}


@blueprint.route("/cards/<name>", methods = ('GET',))
def search_card(name):
    try:
        card = db.session.query(Card).filter(Card.name == name).one()
    except NoResultFound:
        abort(404)

    return card_to_api_response(card)




def deck_to_api_response(deck):
    return {'id': deck.id,
            'name': deck.name,
            'format': deck.format}

def card_to_api_response(card):
    return {'oracle_id': card.oracle_id,
            'name': card.name,
            'mana_cost': card.mana_cost,
            'cmc': card.cmc,
            'type_line': card.type_line,
            'oracle_text': card.oracle_text,
            'power': card.power,
            'toughness': card.toughness,
            'colors': card.colors,
            'color_identity': card.color_identity,
            'legalities': card.legalities,
            'image_uri': card.image_uri,
            'opp_image_uri': card.opp_image_uri}

def deck_card_to_api_response(deck_card):
    return {'qty_main': deck_card.qty_main,
            'qty_sideboard': deck_card.qty_sideboard,
            'is_commander': deck_card.is_commander,
            'is_companion': deck_card.is_companion,
            'card': card_to_api_response(deck_card.card)}

