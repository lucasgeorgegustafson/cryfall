import React from 'react'
import PropTypes from 'prop-types'
import { ListSubheader, makeStyles } from '@material-ui/core'

import DeckCard from './DeckCard.js'
import DeckCardModel from '../models/DeckCard.js'
import { capitalizeString } from '../util/strings.js'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'inherit'
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0
  },
  icon: {
    marginRight: '0.5em'
  }
}))

const DeckCardsListSection = (props) => {
  const classes = useStyles()
  const count = props.deckCards.reduce((accumulator, deckCard) => accumulator + deckCard.getQty(props.isSideboard), 0)

  const renderedDeckCards = props.deckCards.map((deckCard) => {
    return <DeckCard key={deckCard.card.oracleId} deckCard={deckCard} isSideboard={!!props.isSideboard} />
  })

  return (
    <li key={props.sectionName} className={classes.root}>
      <ul className={classes.ul}>
        <ListSubheader key={`subheader-${props.sectionName}`}>
          {props.sectionName !== 'sideboard' ? <i className={`ms ms-fw ms-${props.sectionName} ${classes.icon}`} /> : null}
          {capitalizeString(props.sectionName)} ({count})
        </ListSubheader>
        {renderedDeckCards}
      </ul>
    </li>
  )
}

DeckCardsListSection.propTypes = {
  sectionName: PropTypes.string.isRequired,
  deckCards: PropTypes.arrayOf(PropTypes.instanceOf(DeckCardModel)).isRequired,
  isSideboard: PropTypes.bool
}

export default DeckCardsListSection
