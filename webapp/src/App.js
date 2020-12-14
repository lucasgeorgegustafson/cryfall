import './App.css';
import Api from './Api';

import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Fade,
} from '@material-ui/core';

import {
  Delete as DeleteIcon,
} from '@material-ui/icons';

class DecksList extends React.Component {
  proptypes = {
    api: PropTypes.instanceOf(Api),
  };

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      decks: [],
    };
  }

  componentDidMount() {
    const api = this.props.api;

    api.fetchDecks()
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
                return (<DecksListDeck deck={deck} key={deck.id} api={this.props.api} />);
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
    deck: PropTypes.object,
    api: PropTypes.instanceOf(Api),
  };

  render() {
    return (
      //TODO: make the fadeout work
      <Fade in={true} timeout={1000} exit={true}>
        <ListItem className="decks-list-deck">
          {this.props.deck.name}
          <DeleteDeckButton deckId={this.props.deck.id} api={this.props.api} />
        </ListItem>
      </Fade>
    );
  }
}

class DeleteDeckButton extends React.Component {
  proptypes = {
    deckId: PropTypes.number,
    api: PropTypes.instanceOf(Api),
  }; 

  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { api, deckId } = this.props;
    //TODO: decouple this from its parent components
    api.deleteDeck(deckId).then(() => e.target.closest(".decks-list-deck").remove());
  }
  
  render() {
    return (
        <IconButton aria-label="delete" onClick={this.handleClick}>
          <DeleteIcon />
        </IconButton>
    );
  }
}

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


