import logo from './logo.svg';
import './App.css';
import React from 'react';


class DecksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      decks: []
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
        <div className="DecksList">
          {
            decks.map(
              (deck) => {
                return (<DecksListDeck deck={deck} />);
              }
            )
          }
        </div>
      );
    }
  } 
} 

class DecksListDeck extends React.Component {

  render() {
    return (<p>id: {this.props.deck.id}, name: {this.props.deck.name}</p>);

  }
}


	  

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          THIS IS MAGIC!!!!
        </p>
      </header>
      <DecksList />
    </div>
  );
}

export default App;
