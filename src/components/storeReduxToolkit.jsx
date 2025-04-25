import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlicer'
import todosReducer from './toDoSlicer'
const store=configureStore({
    reducer:{
        counter:counterReducer,
        todos:todosReducer
    }
})

export default store