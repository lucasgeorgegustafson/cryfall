from database import db
from models.model import Base

class Deck(Base):
    __tablename__ = 'decks'

    name = db.Column(db.String(128))
    format = db.Column(db.String(128), nullable=False)
