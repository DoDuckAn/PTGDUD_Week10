const initialState={
    counter:0
}

const CounterReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "+":
            return {...state,counter:parseInt(state.counter)+1}
        case "-":
            return {...state,counter:parseInt(state.counter)-1}
        default:
            return state;
    }
}
export default CounterReducer