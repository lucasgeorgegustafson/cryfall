import '../App.css'

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ListItem, ListItemText, makeStyles, Dialog } from '@material-ui/core'

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
  },
  dialogImage: {
    borderRadius: '20px'
  },
  dialogPaper: {
    backgroundColor: 'transparent'
  }
}))

const DeckCard = (props) => {
  const [showCardImage, setShowCardImage] = useState(false)
  const classes = useStyles()

  const handleShowCardImageClick = () => {
    if (!showCardImage) {
      setShowCardImage(!showCardImage)
    }
  }

  const handleCloseCardImageDialog = () => {
    setShowCardImage(false)
  }

  let cardImageDialog = null

  if (showCardImage) {
    cardImageDialog = (
      <div>
        <Dialog open={showCardImage} onClose={handleCloseCardImageDialog} classes={{ paper: classes.dialogPaper }}>
          {props.deckCard.card.imageURI.length > 0
            ? <img id='card-pic' className={classes.dialogImage} src={props.deckCard.card.imageURI} />
            : <h1>This card has no picture!</h1>}
        </Dialog>
      </div>
    )
  }

  return (
    <ListItem className={classes.listItem}>
      {cardImageDialog}
      <span className={classes.qty}>{props.deckCard.getQty(props.isSideboard)}</span>
      {props.isSideboard && props.deckCard.isCompanion ? <i className={`ms ms-ability-companion ms-mechanic ${classes.icon}`} /> : null}
      <ListItemText primary={props.deckCard.card.name} className={classes.cardName} onClick={handleShowCardImageClick} />
      {props.deckCard.card.manaCost !== null && <div className={classes.cost}><ManaCost cost={props.deckCard.card.manaCost} /></div>}
    </ListItem>
  )
}

DeckCard.propTypes = {
  deckCard: PropTypes.instanceOf(DeckCardModel).isRequired,
  isSideboard: PropTypes.bool
}

export default DeckCard
