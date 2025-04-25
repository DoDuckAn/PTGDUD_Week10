import { useSelector } from 'react-redux'
const DisplayChangeRedux=()=>{
    const counter=useSelector(state=>state.counter.counter)

    return(
        <div className="flex flex-col border p-5 justify-center items-center gap-4">
            <h1>Some random component useSelector</h1>
            <p>counter: {counter}</p>
        </div>
    )
}

export default DisplayChangeRedux