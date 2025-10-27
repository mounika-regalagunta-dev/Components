import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const q =100
  return <div className='Parent'>
    <h2>This is parent class</h2> 
    <div className='First_Child'>
      <nav>
        <ul>
          <li>Home</li>
          <li>News</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </nav>
    </div>
    <div className='Second_Child'>
      <h3>This is {q} Second child class</h3>
    </div>
  </div>
}

export default App
