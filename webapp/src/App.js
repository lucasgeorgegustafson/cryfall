import './App.css';

import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';

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
      </ListItem>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <h1>Cryfall</h1>
        <DecksList />
      </Container>
    </div>
  );
}

export default App;
