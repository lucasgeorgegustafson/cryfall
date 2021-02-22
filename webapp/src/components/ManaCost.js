import React from 'react'
import PropTypes from 'prop-types'

import { apiCostToIconCost } from '../util/cards.js'

function costToManaIcons (apiCost) {
  return apiCostToIconCost(apiCost).map((icon, idx) => <i key={idx} className={'ms ms-' + icon + ' ms-cost ms-shadow'} />)
}

const ManaCost = (props) => {
  return <div>{costToManaIcons(props.cost)}</div>
}

ManaCost.propTypes = {
  cost: PropTypes.string
}

export default ManaCost
