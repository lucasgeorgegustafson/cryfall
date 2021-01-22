import React from 'react';
import PropTypes from 'prop-types';

import './App.css';
import Api from './Api';

import DecksList from './components/DecksList.js';
import DecksListDeck from './components/DecksListDeck.js';
import DeleteDeckButton from './components/DeleteDeckButton.js';
import ShowCardsButton from './components/ShowCardsButton.js';
import DeckCard from './components/DeckCard.js';

import {
  Container,
} from '@material-ui/core';

function App() {
  const api = new Api();

  return (
    <div className="App">
      <Container maxWidth="sm">
        <h1>
          <i className="ms ms-u ms-cost" id="header-logo-icon"></i>
          <span className="title-text">Cryfall</span>
        </h1>
        <DecksList api={api} />
      </Container>
    </div>
  );
}

export default App;

