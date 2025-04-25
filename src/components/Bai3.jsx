import {} from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from './reduxSlicer'

const Bai3=()=>{
    const dispatch=useDispatch()
    const theme=useSelector(state=>state.redux.theme)
    return(
        <div className={`h-[300px] ${theme?"bg-gray-400":"bg-white border"}`}>
            <h1>Bai3</h1>
            <button className='border' onClick={()=>{dispatch(toggleTheme())}}>toggleTheme</button>
        </div>
    )
}

export default Bai3