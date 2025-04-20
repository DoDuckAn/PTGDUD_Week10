import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterUseReducer from './components/CounterUseReducer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CounterUseReducer/>
    </>
  )
}

export default App
