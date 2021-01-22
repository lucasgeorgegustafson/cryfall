import React, { useState, useEffect } from 'react';

import DecksListDeck from './DecksListDeck.js';

import {
  List,
} from '@material-ui/core';

export default function DecksList(props) {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [decks, setDecks] = useState([]);

  useEffect( () => {
    props.api.fetchDecks()
      .then(
        (result) => {
          setIsLoaded(true);
          setDecks(result.decks);
        },
        //TODO: handle errors
        (error) => {
          setIsLoaded(true);
          setError();
        }
      )
  }, [])

  const deleteDeck = (id) => {

    return props.api.deleteDeck(id)
      .then(() => {
        const newDecks = decks.filter(e => e.id !== id);
        setDecks(newDecks);
      });
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <List dense={false}>
        {decks.map((deck) => { return <DecksListDeck key={deck.id} api={props.api} deck={deck} deleteDeck={deleteDeck} /> })}
      </List>
    );
  }
}

