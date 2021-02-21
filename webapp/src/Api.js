class Api {
  fetchDecks () {
    return window.fetch('/decks').then(response => response.json())
  }

  deleteDeck (deckId) {
    return window.fetch('/decks/' + deckId, {
      method: 'DELETE'
    }).then(response => response.json())
  }

  fetchDeckCards (deckId) {
    return window.fetch('/decks/' + deckId + '/cards').then(response => response.json())
  }
}

export default Api
