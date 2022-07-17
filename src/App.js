import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from 'routing/Routes'
import Navbar from 'components/Header'

import './App.scss'

function App() {
  return (
    <div className='app-container'>
      <Router>
        <Navbar />
        <div className='main-container'>
          <Routes />
        </div>
      </Router>
    </div>
  )
}

export default App
