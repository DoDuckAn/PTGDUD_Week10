import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlicer'
import reduxReducer from './reduxSlicer'
const store=configureStore({
    reducer:{
        counter:counterReducer,
        redux:reduxReducer
    }
})

export default store