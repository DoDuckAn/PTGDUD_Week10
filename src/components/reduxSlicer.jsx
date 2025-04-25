import { createSlice } from '@reduxjs/toolkit'

const reduxsSlice=createSlice({
    name:'todos',
    initialState:{
        todos:[],
        theme:false,
        cartItems:[]
    },
    reducers:{
        addTodo:(state,action)=>{
            state.todos.push({
                id:Date.now(),
                text:action.payload,
                toggle:false,
                cartItems:[]
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
        },
        addItem:(state,action)=>{
            state.cartItems.push({
                id:Date.now(),
                name:action.payload.name,
                price:action.payload.price,
                quantity:1
            })
            console.log("cart:",state.cartItems);
            
        },
        removeItem:(state,action)=>{
            state.cartItems=state.cartItems.filter(item=>item.id!==action.payload)
        },
        updateQuantity:(state,action)=>{
            if(action.payload.quantity===0)
                return
            let updateItem=state.cartItems.find(item=>item.id===action.payload.id)
            updateItem.quantity=action.payload.quantity
        }
    }
})

export const {addTodo,toggleTodo,deleteTodo,toggleTheme,addItem,removeItem,updateQuantity}=reduxsSlice.actions
export default reduxsSlice.reducer