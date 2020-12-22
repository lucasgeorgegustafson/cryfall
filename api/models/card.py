from database import db

class Card(db.Model):
    __tablename__ = 'cards'

    scryfall_id = db.Column(db.String(128), primary_key=True)
    name = db.Column(db.Text, nullable=False)
    mana_cost = db.Column(db.Text, nullable=False)
    cmc = db.Column(db.Float(), nullable=False)
    type_line = db.Column(db.Text, nullable=False)
    oracle_text = db.Column(db.Text, nullable=False) 
    power = db.Column(db.String(128), nullable=True)
    toughness = db.Column(db.String(128), nullable=True)
    colors = db.Column(db.JSON(), nullable=False, server_default='[]')
    color_identity = db.Column(db.JSON(), nullable=False, server_default='[]')
    legalities = db.Column(db.JSON(), nullable=False)
