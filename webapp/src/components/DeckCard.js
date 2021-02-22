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
  const qtyField = props.isSideboard ? 'qty_sideboard' : 'qty_main'

  return (
    <ListItem>
      <ListItemText primary={props.deckCard[qtyField]} />
      {props.isSideboard && props.deckCard.is_companion ? <i className='ms ms-ability-companion ms-mechanic' /> : null}
      <ListItemText primary={props.deckCard.card.name} />
      {props.deckCard.card.mana_cost !== null && <ListItemText primary={costToManaIcons(props.deckCard.card.mana_cost)} />}
    </ListItem>
  )
}

DeckCard.propTypes = {
  deckCard: PropTypes.object.isRequired,
  isSideboard: PropTypes.bool
}

export default DeckCard
