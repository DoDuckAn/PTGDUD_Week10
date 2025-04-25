import { createSlice } from '@reduxjs/toolkit'

const todosSlice=createSlice({
    name:'todos',
    initialState:{
        todos:[]
    },
    reducers:{
        addTodo:(state,action)=>{
            state.todos.push({
                id:Date.now(),
                text:action.payload,
                toggle:false
            })
        },
        deleteTodo:(state,action)=>{
            state.todos=state.todos.filter(item=>item.id!==action.payload)
        },
        toggleTodo:(state,action)=>{
            let todo=state.todos.find(item=>item.id===action.payload)
            todo.toggle=!todo.toggle
        }
    }
})

export const {addTodo,toggleTodo,deleteTodo}=todosSlice.actions
export default todosSlice.reducer