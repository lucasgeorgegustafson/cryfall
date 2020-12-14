import './App.css';

import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from '@material-ui/core';

import {
  Delete as DeleteIcon,
} from '@material-ui/icons';

class DecksList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      decks: [],
    };
  }

  componentDidMount() {
    fetch("/decks")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            decks: result.decks
          });
        },
        //TODO: handle errors
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, decks } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <List component="ul">
          {
            decks.map(
              (deck) => {
                return (<DecksListDeck deck={deck} key={deck.id} />);
              }
            )
          }
        </List>
      );
    }
  }
}

class DecksListDeck extends React.Component {
  proptypes = {
    id: PropTypes.number,
    deck: PropTypes.object,
  };

  render() {
    return (
      <ListItem>
        {this.props.deck.name}
        <DeleteDeckButton deckId={this.props.id} />
      </ListItem>
    );
  }
}

class DeleteDeckButton extends React.Component {
  proptypes = {
    deckId: PropTypes.number,
  };

  render() {
    return (
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <h1>
          <i className="ms ms-u ms-cost" id="header-logo-icon"></i>
          <span className="title-text">Cryfall</span>
        </h1>
        <DecksList />
      </Container>
    </div>
  );
}

export default App;


