import React from 'react'

import {
  IconButton
} from '@material-ui/core'

import {
  DeleteTwoTone as DeleteIcon
} from '@material-ui/icons'

export default function DeleteDeckButton (props) {
  return (
    <IconButton aria-label='delete' onClick={props.onClick}>
      <DeleteIcon color='action' />
    </IconButton>
  )
}
