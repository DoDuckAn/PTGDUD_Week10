import { createSlice } from '@reduxjs/toolkit'

const reduxsSlice=createSlice({
    name:'todos',
    initialState:{
        todos:[],
        theme:false
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
        },
        toggleTheme:(state)=>{
            state.theme=!state.theme
        }
    }
})

export const {addTodo,toggleTodo,deleteTodo,toggleTheme}=reduxsSlice.actions
export default reduxsSlice.reducer