import Card from './Card.js'

export default class DeckCard {
  constructor (props) {
    this.qtyMain = props.qty_main
    this.qtySideboard = props.qty_sideboard
    this.isCompanion = props.is_companion
    this.isCommander = props.is_commander
    this.card = new Card(props.card)
  }

  getQty (sideboard = false) {
    return sideboard ? this.qtySideboard : this.qtyMain
  }
}
