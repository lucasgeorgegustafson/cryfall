import './App.css';
import Api from './Api';

import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Collapse,
} from '@material-ui/core';

import {
  DeleteTwoTone as DeleteIcon,
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

  deleteDeck(id) {
    const api = this.props.api;
    const decks = this.state.decks;

    return api.deleteDeck(id)
      .then(() => {
        const newDecks = decks.filter(e => e.id !== id);
        this.setState({ decks: newDecks });
      });
  }

  render() {
    const { error, isLoaded, decks, deckCards } = this.state;
    const api = this.props.api;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <List dense={false}>
          {decks.map((deck) => { return <DecksListDeck key={deck.id} api={api} deck={deck} deleteDeck={this.deleteDeck.bind(this)} /> })}
        </List>
      );
    }
  }
}

class DecksListDeck extends React.Component {
  proptypes = {
    api: PropTypes.instanceOf(Api),
    deck: PropTypes.object.isRequired,
    deleteDeck: PropTypes.func.isRequired,
    deckCards: PropTypes.array
  };

  constructor(props) {
    super(props);

    this.state = {
      isDeleted: false,
      showCards: false,
      deckCards: this.props.deckCards,
    };
  }

  handleShowCardsButtonClick() {
    const { deck, api } = this.props;
    const showCardsNewVal = !this.state.showCards;
    const newState = { showCards: showCardsNewVal };

    if (showCardsNewVal && !this.state.deckCards) {
      api.fetchDeckCards(deck.id).then((result) => {
        newState.deckCards = result.deck_cards;
        this.setState(newState);
      });
    } else {
      this.setState(newState);
    }
  }

  handleDeleteButtonClick() {
    window.confirm(`Delete ${this.props.deck.name}?`) &&
    this.setState({ isDeleted: true });
  }

  render() {
    const { deck, deleteDeck } = this.props;
    const { isDeleted, showCards, deckCards } = this.state;

    return (
      <Collapse
        in={!isDeleted}
        timeout={500}
        onExited={() => { deleteDeck(deck.id) }}
      >
        <ListItem className="decks-list-deck">
          <ListItemText primary={deck.name} secondary={deck.format} />
          <ListItemSecondaryAction>
            <ShowCardsButton
              deckId={deck.id}
              onClick={this.handleShowCardsButtonClick.bind(this)}
            />
            <DeleteDeckButton
              deckId={deck.id}
              onClick={this.handleDeleteButtonClick.bind(this)}
            />
          </ListItemSecondaryAction>
            {(showCards) ?
              <List dense={false}>
                {deckCards.map((deckCard) => { return <DeckCard key={deckCard.oracle_id} deckCard={deckCard} />})}
              </List>
              : undefined
            }
        </ListItem>
      </Collapse>
    );
  }
}

class DeleteDeckButton extends React.Component {
  proptypes = {
    onClick: PropTypes.func.isRequired,
  };

  render() {
    const onClick = this.props.onClick;

    return (
      <IconButton aria-label="delete" onClick={onClick}>
        <DeleteIcon color='action' />
      </IconButton>
    );
  }
}

class ShowCardsButton extends React.Component {
  proptypes = {
    onClick: PropTypes.func.isRequired,
  };

  render() {
    const onClick = this.props.onClick;

    return (
      <IconButton aria-label="show-cards" onClick={onClick}>
        <i className="ms ms-counter-lore"></i>
      </IconButton>
    );
  }
}

class DeckCard extends React.Component {
  proptypes = {
    deckCard: PropTypes.object.isRequired,
  };

  render() {
    const { deckCard } = this.props;

    return (
      <ListItem>
        <ListItemText primary={deckCard.name} />
      </ListItem>
    )
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


