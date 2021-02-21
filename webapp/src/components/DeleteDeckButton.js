import React from 'react'
import PropTypes from 'prop-types'
import { IconButton } from '@material-ui/core'
import { DeleteTwoTone as DeleteIcon } from '@material-ui/icons'

const DeleteDeckButton = (props) => {
  return (
    <IconButton aria-label='delete' onClick={props.onClick}>
      <DeleteIcon color='action' />
    </IconButton>
  )
}

DeleteDeckButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default DeleteDeckButton
