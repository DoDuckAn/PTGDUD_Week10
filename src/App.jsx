import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterUseReducer from './components/CounterUseReducer'
import { Provider } from 'react-redux' 
import storeRedux from './components/storeRedux'
import CounterUseRedux from './components/CounterUseRedux'
import DisplayChangeRedux from './components/DisplayChangeRedux'
import storeReduxToolkit from './components/storeReduxToolkit'
import Bai2 from './components/Bai2'
import Bai3 from './components/Bai3'
import Bai4 from './components/Bai4'
function App() {
  return (
    <>
      <Provider store={storeReduxToolkit}>
        <CounterUseReducer/>
        <CounterUseRedux/>
        <DisplayChangeRedux/>
        <Bai2/>
        <Bai3/>
        <Bai4/>
      </Provider>
    </>
  )
}

export default App
