from database import db
from models.deck import Deck
from models.deck_card import DeckCard


decks = [
    Deck(
        name = 'Red White Cycling',
        format = 'Standard',
        cards = [
            DeckCard(card_oracle_id = 'ae005f00-3817-40ca-b8be-069a4085cfee', qty_main = 4), # Zenith Flare
            DeckCard(card_oracle_id = '44add927-4e6b-408e-907f-6a665add8b16', qty_main = 4), # Flourishing Fox
            DeckCard(card_oracle_id = 'c9de9f0b-bf07-4171-b54d-69033424a212', qty_main = 4), # Valiant Rescuer
            DeckCard(card_oracle_id = '13e2a2c3-5ab5-4de4-96ca-5f9c72137000', qty_main = 4), # Drannith Healer
            DeckCard(card_oracle_id = 'edd1727e-3a6e-4d0e-b7ae-fae2108d2147', qty_main = 4), # Drannith Stinger
            DeckCard(card_oracle_id = 'a9b8d020-4d72-4934-8942-df29ef19fc1d', qty_main = 4), # Needleverge Pathway
            DeckCard(card_oracle_id = '4924b3a4-a218-4783-8a4d-82361fdecc78', qty_main = 4), # Riverglide Pathway
            DeckCard(card_oracle_id = '1c633e02-95ef-445e-b4e0-fbfbc5ed9cc9', qty_main = 4), # Brightclimb Pathway
            DeckCard(card_oracle_id = '00625242-9348-4ef4-b975-f2ac82fee21d', qty_main = 1), # Savai Triome
            DeckCard(card_oracle_id = 'c7fa1dda-9312-4ec8-82cd-a1ba7bc33497', qty_main = 1), # Raugrin Triome
            DeckCard(card_oracle_id = '78301998-fd9b-4cd5-afad-dbcb43cac2a7', qty_main = 3), # Shatterskull Smashing
            DeckCard(card_oracle_id = 'bc71ebf6-2056-41f7-be35-b2e5c34afa99', qty_main = 2), # Plains
            DeckCard(card_oracle_id = '1720d38a-c3c1-4294-85c1-a91fc7179d6f', qty_main = 2), # Boon of the Wish-Giver
            DeckCard(card_oracle_id = 'ea908d2d-d443-4385-a71a-ebb00938cd57', qty_main = 3), # Shredded Sails
            DeckCard(card_oracle_id = '11cf103c-f8a3-4892-942d-2c4472dd5716', qty_main = 4), # Go For Blood
            DeckCard(card_oracle_id = '256d884f-5dea-4906-a53d-cf14d43e6bc8', qty_main = 4), # Memory Leak
            DeckCard(card_oracle_id = '8747ca90-ac1d-45fd-89fe-aac385cd66b4', qty_main = 4), # Startling Development
            DeckCard(card_oracle_id = 'ca4fdf89-a74e-4086-8109-b0f9dd91710e', qty_main = 4), # Footfall Crater
            DeckCard(card_oracle_id = '3bc757c1-3adb-4321-8832-8e1cc9e687f7', qty_sideboard = 1, is_companion = True), # Lurrus
        ]
    ),

]


def seed_db():
    return seed_decks()


def seed_decks():
    for deck in decks:
        db.session.add(deck)

    return db.session.commit()



