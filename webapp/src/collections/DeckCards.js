import DeckCard from '../models/DeckCard.js'

export default class DeckCards extends Array {
  constructor (...props) {
    const cards = props.map(apiDeckCard => new DeckCard(apiDeckCard))
    super(...cards)
  }

  getCategorized () {
    const result = {
      creature: [],
      planeswalker: [],
      instant: [],
      sorcery: [],
      enchantment: [],
      artifact: [],
      land: [],
      sideboard: []
    }

    this.forEach((deckCard) => {
      if (deckCard.qtySideboard > 0) {
        result.sideboard.push(deckCard)
      }
      if (deckCard.qtyMain > 0) {
        result[deckCard.card.getPrimaryType()].push(deckCard)
      }
    })

    return result
  }
}
