import React from 'react'
import PropTypes from 'prop-types'
import { List } from '@material-ui/core'

import DeckCard from './DeckCard.js'

const DeckCardsList = (props) => {
  return (
    <List dense>
      {props.deckCards.map((deckCard) => {
        return <DeckCard key={deckCard.card.oracle_id} deckCard={deckCard} />
      })}
    </List>
  )
}

DeckCardsList.propTypes = {
  deckCards: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default DeckCardsList
