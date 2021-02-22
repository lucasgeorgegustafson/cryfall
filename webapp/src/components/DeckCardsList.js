import React from 'react'
import PropTypes from 'prop-types'

import { List, makeStyles } from '@material-ui/core'

import DeckCardsListSection from './DeckCardsListSection.js'

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

  const categorized = categorize(props.deckCards)
  const listItems = []

  if (categorized.creature.length > 0) {
    listItems.push(<DeckCardsListSection sectionName='creature' deckCards={categorized.creature} />)
  }

  if (categorized.planeswalker.length > 0) {
    listItems.push(<DeckCardsListSection sectionName='planeswalker' deckCards={categorized.planeswalker} />)
  }

  if (categorized.instant.length > 0) {
    listItems.push(<DeckCardsListSection sectionName='instant' deckCards={categorized.instant} />)
  }

  if (categorized.sorcery.length > 0) {
    listItems.push(<DeckCardsListSection sectionName='sorcery' deckCards={categorized.sorcery} />)
  }

  if (categorized.enchantment.length > 0) {
    listItems.push(<DeckCardsListSection sectionName='enchantment' deckCards={categorized.enchantment} />)
  }

  if (categorized.artifact.length > 0) {
    listItems.push(<DeckCardsListSection sectionName='artifact' deckCards={categorized.artifact} />)
  }

  if (categorized.land.length > 0) {
    listItems.push(<DeckCardsListSection sectionName='land' deckCards={categorized.land} />)
  }

  if (categorized.sideboard.length > 0) {
    listItems.push(<DeckCardsListSection sectionName='sideboard' deckCards={categorized.sideboard} isSideboard />)
  }

  return (
    <List dense className={classes.root}>
      {listItems}
    </List>
  )
}

DeckCardsList.propTypes = {
  deckCards: PropTypes.arrayOf(PropTypes.object).isRequired
}

function categorize (deckCards) {
  const result = {
    creature: [],
    planeswalker: [],
    instant: [],
    sorcery: [],
    enchantment: [],
    artifact: [],
    land: [],
    sideboard: []
  }

  deckCards.forEach((deckCard) => {
    if (deckCard.qty_sideboard > 0) {
      result.sideboard.push(deckCard)
    }
    if (deckCard.qty_main > 0) {
      result[getPrimaryType(deckCard.card)].push(deckCard)
    }
  })

  return result
}

function getFrontType (card) {
  return card.type_line.split('//', 1)[0]
}

function getPrimaryType (card) {
  const superAndType = getFrontType(card).split(' — ', 1)[0].toLowerCase()
  let primaryType = ''

  if (superAndType.includes('land')) {
    primaryType = 'land'
  } else if (superAndType.includes('planeswalker')) {
    primaryType = 'planeswalker'
  } else if (superAndType.includes('creature')) {
    primaryType = 'creature'
  } else if (superAndType.includes('artifact')) {
    primaryType = 'artifact'
  } else if (superAndType.includes('enchantment')) {
    primaryType = 'enchantment'
  } else if (superAndType.includes('instant')) {
    primaryType = 'instant'
  } else if (superAndType.includes('sorcery')) {
    primaryType = 'sorcery'
  } else {
    console.error('Unable to parse type line: ' + card.type_line)
  }

  return primaryType
}

export default DeckCardsList
