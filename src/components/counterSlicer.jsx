import { createSlice } from '@reduxjs/toolkit'

const counterSlicer=createSlice({
    name:'counter',
    initialState:{
        counter:0
    },
    reducers:{
        inc:(state)=>{
            state.counter+=1
        },
        dec:(state)=>{
            state.counter-=1
        }
    }
})

export const{inc,dec}=counterSlicer.actions
export default counterSlicer.reducer