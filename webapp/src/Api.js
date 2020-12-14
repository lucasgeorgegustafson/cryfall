class Api {
  fetchDecks() {
    return fetch('/decks').then(response => response.json());
  }

  deleteDeck(deckId) {
      return fetch('/decks/' + deckId, {
          method: 'DELETE',
      }).then(response => response.json());
  }
}

export default Api;
