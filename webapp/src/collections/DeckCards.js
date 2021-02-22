import DeckCard from '../models/DeckCard.js'

export default class DeckCards extends Array {
  constructor (...props) {
    const cards = props.map(apiDeckCard => new DeckCard(apiDeckCard))
    super(...cards)
  }
}
