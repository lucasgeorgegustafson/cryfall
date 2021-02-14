import React, { useReducer, useEffect } from 'react';

import DecksListDeck from './DecksListDeck.js';

import {
  List,
} from '@material-ui/core';

export default function DecksList(props) {
  const [state, setState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {error: null, isLoaded: false, decks: []}
  );

  useEffect( () => {
    props.api.fetchDecks()
      .then(
        (result) => {
          setState({isLoaded: true, decks: result.decks})
        },
        //TODO: handle errors
        (error) => {
          setState({isLoaded: true});
        }
      )
  }, [props.api]);

  const deleteDeck = (id) => {

    return props.api.deleteDeck(id)
      .then(() => {
        const newDecks = state.decks.filter(e => e.id !== id);
        setState({decks: newDecks});
      });
  }

  if (state.error) {
    return <div>Error: {state.error.message}</div>;
  } else if (!state.isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <List dense={false}>
        {state.decks.map((deck) => { return <DecksListDeck key={deck.id} api={props.api} deck={deck} deleteDeck={deleteDeck} /> })}
      </List>
    );
  }
}

