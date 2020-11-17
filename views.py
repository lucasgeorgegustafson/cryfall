from models.deck import Deck
from flask import Blueprint

blueprint = Blueprint('decks', __name__)

@blueprint.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@blueprint.route("/decks", methods = ('GET',))
def list_decks():
    decks = Deck.query.all()
    deck_list = [{'id': deck.id, 'name': deck.name} for deck in decks]
    return {'decks': deck_list}
