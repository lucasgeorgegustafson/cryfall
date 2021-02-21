import '../App.css'

import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Api from '../Api.js'
import DeleteDeckButton from './DeleteDeckButton.js'
import ShowCardsButton from './ShowCardsButton.js'
import DeckCard from './DeckCard.js'

import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Collapse,
  Dialog
} from '@material-ui/core'

const DecksListDeck = (props) => {
  const [isDeleted, setIsDeleted] = useState(false)
  const [showCards, setShowCards] = useState(false)
  const [deckCards, setDeckCards] = useState(props.deckCards)

  const handleShowCardsButtonClick = () => {
    if (!showCards && !deckCards) {
      props.api.fetchDeckCards(props.deck.id).then((result) => {
        setDeckCards(result.deck_cards)
        setShowCards(!showCards)
      })
    } else {
      setShowCards(!showCards)
    }
  }

  const handleDeleteButtonClick = () => {
    window.confirm(`Delete ${props.deck.name}?`) &&
      setIsDeleted(true)
  }

  const handleCloseDialog = () => {
    setShowCards(false)
  }

  let showCardsDialog = null
  if (showCards) {
    showCardsDialog = (
      <div>
        <Dialog open={showCards} onClose={handleCloseDialog}>
          <List dense>
            {deckCards.map((deckCard) => {
              return <DeckCard key={deckCard.card.oracle_id} deckCard={deckCard} />
            })}
          </List>
        </Dialog>
      </div>
    )
  }

  return (
    <Collapse
      in={!isDeleted}
      timeout={500}
      onExited={() => { props.deleteDeck(props.deck.id) }}
    >
      <ListItem className='decks-list-deck'>
        <ListItemText primary={props.deck.name} secondary={props.deck.format} />
        {showCardsDialog}
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
  )
}

DecksListDeck.propTypes = {
  deck: PropTypes.object.isRequired,
  api: PropTypes.instanceOf(Api).isRequired,
  deleteDeck: PropTypes.func.isRequired,
  deckCards: PropTypes.arrayOf(PropTypes.object)
}

export default DecksListDeck
