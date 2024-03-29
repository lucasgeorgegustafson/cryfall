from database import db

class Card(db.Model):
    __tablename__ = 'cards'

    oracle_id = db.Column(db.String(128), primary_key=True)
    name = db.Column(db.Text, nullable=False)
    mana_cost = db.Column(db.Text, nullable=True)
    cmc = db.Column(db.Float(), nullable=False)
    type_line = db.Column(db.Text, nullable=False)
    oracle_text = db.Column(db.Text, nullable=True)
    power = db.Column(db.String(128), nullable=True)
    toughness = db.Column(db.String(128), nullable=True)
    colors = db.Column(db.JSON(), nullable=False, server_default='[]')
    color_identity = db.Column(db.JSON(), nullable=False, server_default='[]')
    legalities = db.Column(db.JSON(), nullable=False)
    image_uri = db.Column(db.Text, nullable=True)
    opp_image_uri = db.Column(db.Text, nullable=True)
    decks = db.relationship('DeckCard', back_populates = 'card')

    @staticmethod
    def from_dict(card_dict):
        card = Card()

        card.oracle_id = card_dict['oracle_id']
        card.name = card_dict['name']
        if 'mana_cost' in card_dict:
            card.mana_cost = card_dict['mana_cost']
        card.cmc = card_dict['cmc']
        card.type_line = card_dict['type_line']
        if 'oracle_text' in card_dict:
            card.oracle_text = card_dict['oracle_text']
        if 'power' in card_dict:
            card.power = card_dict['power']
        if 'toughness' in card_dict:
            card.toughness = card_dict['toughness']
        if 'colors' in card_dict:
            card.colors = card_dict['colors']
        card.color_identity = card_dict['color_identity']
        card.legalities = card_dict['legalities']
        if 'image_uris' in card_dict and 'normal' in card_dict['image_uris']:
            card.image_uri = card_dict['image_uris']['normal']
        elif card_dict['layout'] == 'modal_dfc':
            card.image_uri = card_dict['card_faces'][0]['image_uris']['normal']
            card.opp_image_uri = card_dict['card_faces'][1]['image_uris']['normal']

        return card
