import React from 'react'

import './App.css'
import Api from './Api'

import DecksList from './components/DecksList.js'

import {
  Container
} from '@material-ui/core'

function App () {
  const api = new Api()

  return (
    <div className='App'>
      <Container maxWidth='sm'>
        <h1>
          <i className='ms ms-u ms-cost' id='header-logo-icon' />
          <span className='title-text'>Cryfall</span>
        </h1>
        <DecksList api={api} />
      </Container>
    </div>
  )
}

export default App
