import { useDispatch, useSelector } from 'react-redux'
import { dec, inc } from './counterSlicer'
const CounterUseRedux=()=>{
    const dispatch=useDispatch()
    const counter=useSelector(state=>state.counter)

    return(
        <div className="flex flex-col border p-5 justify-center items-center gap-4">
            <h1>Redux</h1>
            <p>counter: {counter}</p>
            <div className="flex gap-4">
                <button onClick={()=>dispatch(dec)}>
                    -
                </button>
                <button onClick={()=>dispatch(inc)}>
                    +
                </button>
            </div>
        </div>
    )
}

export default CounterUseRedux