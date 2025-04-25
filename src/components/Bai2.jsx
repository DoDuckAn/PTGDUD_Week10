import {} from '@reduxjs/toolkit'
import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, toggleTodo } from './reduxSlicer'

const Bai2=()=>{
    const dispatch=useDispatch()
    const todos=useSelector(state=>state.redux.todos)
    const [task,setTask]=useState('')
    const inputRef=useRef()
    return(
        <div className="flex flex-col border p-5 justify-center items-center gap-4">
            <h1>Bai2</h1>
            <input type='text' ref={inputRef} className='border-1 p-2' onChange={(e)=>setTask(e.target.value)}/>
            <button className='p-4 rounded-xl' onClick={()=>{dispatch(addTodo(task));setTask('');inputRef.current.value=''}}>Thêm</button>
            <div className='flex flex-col gap-5'>
                {todos.map((item,index)=>{
                    return(
                        <div key={index} className='border-1 w-[800px] flex justify-between'>
                            <p className='p-3 w-[600px] text-start'>{item.text}</p>
                            <div className='flex gap-3'>
                                <button className='border-1' onClick={()=>{dispatch(deleteTodo(item.id))}}>delete</button>
                                <button onClick={()=>{dispatch(toggleTodo(item.id))}} 
                                    className={`border-1 p-4 rounded-xl ${item.toggle?'bg-green-400':'bg-gray-400'}`}>
                                    check
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Bai2