import itertools
import random
from database import db
from models.deck import Deck

deck_colors = [
    'Colorless',
    'Mono White',
    'Mono Blue',
    'Mono Black',
    'Mono Red',
    'Mono Green',
    'WU',
    'Azorius',
    'UB',
    'Dimir',
    'BR',
    'Rakdos',
    'RG',
    'Gruul',
    'GW',
    'Selesnya',
    'WB',
    'Orzhov',
    'UR',
    'Izzet',
    'BG',
    'Golgari',
    'RW',
    'Boros',
    'WUG',
    'Bant',
    'WUB',
    'Esper',
    'UBR',
    'Grixis',
    'BRG',
    'Jund',
    'WRG',
    'Naya',
    'WBG',
    'Abzan',
    'WUR',
    'Jeskai',
    'UBG',
    'Sultai',
    'WBR',
    'Mardu',
    'URG',
    'Temur',
    '4c',
    '5c'
]

deck_archetypes = [
    'Aggro',
    'Midrange',
    'Control',
    'Combo',
    'Superfriends',
    'Reanimator',
    'Tempo',
    'Ramp',
    'Party',
    'Landfall',
    'Tron',
    'Burn',
    'Flash',
    'Devotion',
    'Sacrifice',
    'Humans',
    'Merfolk',
    'Faeries',
    'Goblins',
    'Knights',
    'Slivers'
]

deck_formats = [
    'standard',
    'historic',
    'commander',
    'brawl',
    'pioneer',
    'modern',
    'pauper',
    'legacy',
    'vintage'
]


def seed_db():
    return seed_decks()


def seed_decks():
    for _ in itertools.repeat(None, 25):
        db.session.add(generate_deck())

    return db.session.commit()


def generate_deck():
    deck_name = random.choice(deck_colors) + ' ' + random.choice(deck_archetypes)
    deck_format = random.choice(deck_formats)

    return Deck(name=deck_name, format=deck_format)
