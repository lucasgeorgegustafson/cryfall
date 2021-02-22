import React from 'react'
import PropTypes from 'prop-types'
import { ListSubheader, makeStyles } from '@material-ui/core'

import DeckCard from './DeckCard.js'
import { capitalizeString } from '../util/strings.js'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'inherit'
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0
  }
}))

const DeckCardsListSection = (props) => {
  const classes = useStyles()

  const qtyField = props.isSideboard ? 'qty_sideboard' : 'qty_main'
  const count = props.deckCards.reduce((accumulator, deckCard) => accumulator + deckCard[qtyField], 0)

  const renderedDeckCards = props.deckCards.map((deckCard) => {
    return <DeckCard key={deckCard.card.oracle_id} deckCard={deckCard} isSideboard={!!props.isSideboard} />
  })

  return (
    <li key={props.sectionName} className={classes.root}>
      <ul className={classes.ul}>
        <ListSubheader>
          {props.sectionName !== 'sideboard' ? <i className={`ms ms-${props.sectionName}`} /> : null}
          {capitalizeString(props.sectionName)} ({count})
        </ListSubheader>
        {renderedDeckCards}
      </ul>
    </li>
  )
}

DeckCardsListSection.propTypes = {
  sectionName: PropTypes.string.isRequired,
  deckCards: PropTypes.arrayOf(PropTypes.object).isRequired,
  isSideboard: PropTypes.bool
}

export default DeckCardsListSection
