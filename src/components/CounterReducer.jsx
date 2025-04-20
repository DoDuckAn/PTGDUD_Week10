const CounterReducer=(state=0,action)=>{
    switch (action.type) {
        case "+":
            return {...state,value:parseInt(state.value)+1}
        case "-":
            return {...state,value:parseInt(state.value)-1}
        default:
            return state;
    }
}
export default CounterReducer