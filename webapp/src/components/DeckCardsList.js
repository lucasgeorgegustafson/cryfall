import React from 'react'
import PropTypes from 'prop-types'
import { List, makeStyles } from '@material-ui/core'

import DeckCardsListSection from './DeckCardsListSection.js'
import DeckCards from '../collections/DeckCards.js'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 560,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 600
  }
}))

const DeckCardsList = (props) => {
  const classes = useStyles()

  const categorized = props.deckCards.getCategorized()
  const listItems = []

  if (categorized.creature.length > 0) {
    listItems.push(<DeckCardsListSection key='section-creature' sectionName='creature' deckCards={categorized.creature} />)
  }

  if (categorized.planeswalker.length > 0) {
    listItems.push(<DeckCardsListSection key='section-planeswalker' sectionName='planeswalker' deckCards={categorized.planeswalker} />)
  }

  if (categorized.instant.length > 0) {
    listItems.push(<DeckCardsListSection key='section-instant' sectionName='instant' deckCards={categorized.instant} />)
  }

  if (categorized.sorcery.length > 0) {
    listItems.push(<DeckCardsListSection key='section-sorcery' sectionName='sorcery' deckCards={categorized.sorcery} />)
  }

  if (categorized.enchantment.length > 0) {
    listItems.push(<DeckCardsListSection key='section-enchantment' sectionName='enchantment' deckCards={categorized.enchantment} />)
  }

  if (categorized.artifact.length > 0) {
    listItems.push(<DeckCardsListSection key='section-artifact' sectionName='artifact' deckCards={categorized.artifact} />)
  }

  if (categorized.land.length > 0) {
    listItems.push(<DeckCardsListSection key='section-land' sectionName='land' deckCards={categorized.land} />)
  }

  if (categorized.sideboard.length > 0) {
    listItems.push(<DeckCardsListSection key='section-sideboard' sectionName='sideboard' deckCards={categorized.sideboard} isSideboard />)
  }

  return (
    <List dense className={classes.root}>
      {listItems}
    </List>
  )
}

DeckCardsList.propTypes = {
  deckCards: PropTypes.instanceOf(DeckCards).isRequired
}

export default DeckCardsList
