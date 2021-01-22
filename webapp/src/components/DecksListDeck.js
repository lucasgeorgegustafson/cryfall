import React, { useState } from 'react';

import '../App.css';

import DeleteDeckButton from './DeleteDeckButton.js';
import ShowCardsButton from './ShowCardsButton.js';
import DeckCard from './DeckCard.js';

import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Collapse,
} from '@material-ui/core';

export default function DecksListDeck(props) {

  const [isDeleted, setIsDeleted] = useState(false);
  const [showCards, setShowCards] = useState(false);
  const [deckCards, setDeckCards] = useState(props.deckCards);

  const handleShowCardsButtonClick = () => {

    if (!showCards && !deckCards) {
      props.api.fetchDeckCards(props.deck.id).then((result) => {
        setDeckCards(result.deck_cards);
        setShowCards(!showCards);
      });
    } else {
      setShowCards(!showCards);
    }
  }

  const handleDeleteButtonClick = () => {

    window.confirm(`Delete ${props.deck.name}?`) &&
      setIsDeleted(true);
  }

  return (
    <Collapse
      in={!isDeleted}
      timeout={500}
      onExited={() => { props.deleteDeck(props.deck.id) }}
    >
        <ListItem className="decks-list-deck">
          <ListItemText primary={props.deck.name} secondary={props.deck.format} />
          {(showCards) ?
            <List dense={false}>
              {deckCards.map((deckCard) => { return <DeckCard key={deckCard.card.oracle_id} deckCard={deckCard} />})}
            </List>
            : undefined
          }
          <ListItemSecondaryAction>
            <ShowCardsButton
              deckId={props.deck.id}
              onClick={handleShowCardsButtonClick}
            />
            <DeleteDeckButton
              deckId={props.deck.id}
              onClick={handleDeleteButtonClick}
            />
          </ListItemSecondaryAction>
        </ListItem>
    </Collapse>
  );
}

