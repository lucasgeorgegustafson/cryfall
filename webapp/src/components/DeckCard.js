import React from 'react';

import {
  ListItem,
  ListItemText,
} from '@material-ui/core';

export default function DeckCard(props) {

  return (
    <ListItem>
      <ListItemText primary={props.deckCard.card.name} secondary={`qty. ${props.deckCard.qty_main}`} />
    </ListItem>
  )
}

