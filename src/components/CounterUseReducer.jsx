import { useReducer } from "react"

const CounterUseReducer=()=>{
    const reducer=(state,action)=>{
        switch (action.type) {
            case "+":
                return parseInt(state)+1
            case "-":
                return parseInt(state)-1
            default:
                break;
        }
    }

    const [counter,dispatchCounter]=useReducer(reducer,0)
    return(
        <div className="flex flex-col border p-5 justify-center items-center gap-4">
            <h1>useReducer</h1>
            <p>counter: {counter}</p>
            <div className="flex gap-4">
                <button onClick={()=>dispatchCounter({type:"-"})}>
                    -
                </button>
                <button onClick={()=>dispatchCounter({type:"+"})}>
                    +
                </button>
            </div>
        </div>
    )
}

export default CounterUseReducer