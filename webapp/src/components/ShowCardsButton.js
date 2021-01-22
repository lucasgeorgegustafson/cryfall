import React from 'react';

import {
  IconButton,
} from '@material-ui/core';

export default function ShowCardsButton(props) {

  return (
    <IconButton aria-label="show-cards" onClick={props.onClick}>
      <i className="ms ms-counter-lore"></i>
    </IconButton>
  );
}

