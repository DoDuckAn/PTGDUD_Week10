import { createStore } from "redux"
import CounterReducer from "./CounterReducer"

const storeRedux=createStore(CounterReducer)

export default storeRedux