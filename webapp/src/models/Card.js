export default class Card {
  constructor (props) {
    this.name = props.name
    this.manaCost = props.mana_cost
    this.oracleId = props.oracle_id
    this.typeLine = props.type_line
    this.imageURI = props.image_uri
  }

  getFrontType () {
    return this.typeLine.split('//', 1)[0]
  }

  getPrimaryType () {
    const superAndType = this.getFrontType().split(' — ', 1)[0].toLowerCase()
    let primaryType = ''

    if (superAndType.includes('land')) {
      primaryType = 'land'
    } else if (superAndType.includes('planeswalker')) {
      primaryType = 'planeswalker'
    } else if (superAndType.includes('creature')) {
      primaryType = 'creature'
    } else if (superAndType.includes('artifact')) {
      primaryType = 'artifact'
    } else if (superAndType.includes('enchantment')) {
      primaryType = 'enchantment'
    } else if (superAndType.includes('instant')) {
      primaryType = 'instant'
    } else if (superAndType.includes('sorcery')) {
      primaryType = 'sorcery'
    } else {
      console.error(`Unable to get primary type from type line: ${this.typeLine}`)
    }

    return primaryType
  }
}
