import React, { useReducer, useEffect } from 'react'
import { List } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

import DecksListDeck from './DecksListDeck.js'

const DecksList = (props) => {
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { error: null, isLoaded: false, decks: [] }
  )

  useEffect(() => {
    props.api.fetchDecks()
      .then(
        (result) => {
          setState({ isLoaded: true, decks: result.decks })
        },
        (error) => {
          console.error(error)
          setState({ isLoaded: true, error: 'Unable to fetch decks' })
        }
      )
  }, [props.api])

  const deleteDeck = (id) => {
    return props.api.deleteDeck(id)
      .then(() => {
        const newDecks = state.decks.filter(e => e.id !== id)
        setState({ decks: newDecks })
      })
  }

  if (state.error) {
    return <Alert severity="error">{state.error}</Alert>
  } else if (!state.isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <List dense={false}>
        {state.decks.map((deck) => { return <DecksListDeck key={deck.id} api={props.api} deck={deck} deleteDeck={deleteDeck} /> })}
      </List>
    )
  }
}

DecksList.propTypes = {

}

export default DecksList
