import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders site header', () => {
  render(<App />)
  const h1Element = document.querySelector('h1')
  expect(h1Element).toBeInTheDocument()
})
