import { useState } from 'react'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Body from './Components/Body'
import DivOfBody from './Components/DivOfBody'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'

function App() {

  return (
    <div>
      <Header />
      <Navbar />
      <Body />
      <DivOfBody />
    </div>
  )
}

export default App