import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Quote from './frontend/Quote/Quote'
import SubmitQuote from './frontend/Submit/Submit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Quote/>
        <SubmitQuote/>
      </div>
    </>
  )
}

export default App
