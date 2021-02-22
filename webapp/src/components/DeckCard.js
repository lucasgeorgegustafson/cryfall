import React from 'react'
import PropTypes from 'prop-types'
import { ListItem, ListItemText } from '@material-ui/core'

import DeckCardModel from '../models/DeckCard.js'

function costToManaIcons (cost) {
  return [...cost.matchAll(/{(.*?)}/g)].map((match, idx) => {
    const cost = match[1].toLowerCase().replace('/', '')
    return <i key={idx} className={'ms ms-' + cost + ' ms-cost'} />
  })
}

const DeckCard = (props) => {
  return (
    <ListItem>
      <ListItemText primary={props.deckCard.getQty(props.isSideboard)} />
      {props.isSideboard && props.deckCard.isCompanion ? <i className='ms ms-ability-companion ms-mechanic' /> : null}
      <ListItemText primary={props.deckCard.card.name} />
      {props.deckCard.card.manaCost !== null && <ListItemText primary={costToManaIcons(props.deckCard.card.manaCost)} />}
    </ListItem>
  )
}

DeckCard.propTypes = {
  deckCard: PropTypes.instanceOf(DeckCardModel).isRequired,
  isSideboard: PropTypes.bool
}

export default DeckCard
