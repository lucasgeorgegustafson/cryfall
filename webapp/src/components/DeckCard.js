import React from 'react'
import PropTypes from 'prop-types'
import { ListItem, ListItemText, makeStyles } from '@material-ui/core'

import ManaCost from './ManaCost.js'
import DeckCardModel from '../models/DeckCard.js'

const useStyles = makeStyles((theme) => ({
  listItem: {
    paddingTop: '1px',
    paddingBottom: '1px'
  },
  cardName: {
    textAlign: 'left',
    marginTop: '0px',
    marginBottom: '0px'
  },
  qty: {
    width: '2em'
  },
  cost: {
    fontSize: '90%'
  },
  icon: {
    marginRight: '0.3em'
  }
}))

const DeckCard = (props) => {
  const classes = useStyles()

  return (
    <ListItem className={classes.listItem}>
      <span className={classes.qty}>{props.deckCard.getQty(props.isSideboard)}</span>
      {props.isSideboard && props.deckCard.isCompanion ? <i className={`ms ms-ability-companion ms-mechanic ${classes.icon}`} /> : null}
      <ListItemText primary={props.deckCard.card.name} className={classes.cardName} />
      {props.deckCard.card.manaCost !== null && <div className={classes.cost}><ManaCost cost={props.deckCard.card.manaCost} /></div>}
    </ListItem>
  )
}

DeckCard.propTypes = {
  deckCard: PropTypes.instanceOf(DeckCardModel).isRequired,
  isSideboard: PropTypes.bool
}

export default DeckCard
