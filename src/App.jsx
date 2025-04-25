import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterUseReducer from './components/CounterUseReducer'
import { Provider } from 'react-redux' 
import storeRedux from './components/storeRedux'
import CounterUseRedux from './components/CounterUseRedux'
import DisplayChangeRedux from './components/DisplayChangeRedux'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={storeRedux}>
        <CounterUseReducer/>
        <CounterUseRedux/>
        <DisplayChangeRedux/>
      </Provider>
    </>
  )
}

export default App
