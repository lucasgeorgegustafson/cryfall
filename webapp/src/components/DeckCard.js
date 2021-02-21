import React from 'react'
import PropTypes from 'prop-types'

import {
  ListItem,
  ListItemText
} from '@material-ui/core'

function costToManaIcons (cost) {
  return [...cost.matchAll(/{(.*?)}/g)].map((match, idx) => {
    const cost = match[1].toLowerCase().replace('/', '')
    return <i key={idx} className={'ms ms-' + cost + ' ms-cost'} />
  })
}

const DeckCard = (props) => {
  return (
    <ListItem>
      <ListItemText primary={props.deckCard.qty_main} />
      <ListItemText primary={props.deckCard.card.name} />
      {props.deckCard.card.mana_cost !== null && <ListItemText primary={costToManaIcons(props.deckCard.card.mana_cost)} />}
    </ListItem>
  )
}

DeckCard.propTypes = {
  deckCard: PropTypes.object.isRequired
}

export default DeckCard
