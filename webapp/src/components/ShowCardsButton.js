import React from 'react'
import PropTypes from 'prop-types'
import { IconButton } from '@material-ui/core'

const ShowCardsButton = (props) => {
  return (
    <IconButton aria-label='show-cards' onClick={props.onClick}>
      <i className='ms ms-counter-lore' />
    </IconButton>
  )
}

ShowCardsButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default ShowCardsButton
