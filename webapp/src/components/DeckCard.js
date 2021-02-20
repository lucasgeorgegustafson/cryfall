import React from 'react';

import {
  ListItem,
  ListItemText,
} from '@material-ui/core';

function costToManaIcons(cost) {
    return [...cost.matchAll(/{(.*?)}/g)].map(match => {
        const cost = match[1].toLowerCase().replace('/', '');        return <i className={'ms ms-' + cost + ' ms-cost'}></i>
    });
}

export default function DeckCard(props) {

  return (
    <ListItem>
      <ListItemText primary={props.deckCard.qty_main} />
      <ListItemText primary={props.deckCard.card.name} />
      {props.deckCard.card.mana_cost !== null && <ListItemText primary={costToManaIcons(props.deckCard.card.mana_cost)} />}
    </ListItem>
  )
}

