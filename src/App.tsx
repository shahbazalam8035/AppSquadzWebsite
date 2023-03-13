import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './pages/Home'
import {BrowserRouter as Router , Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
    <Home/>
    </div>
  )
}

export default App
