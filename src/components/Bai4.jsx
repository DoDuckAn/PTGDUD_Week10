import {} from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem, updateQuantity} from './reduxSlicer'
import { useState } from 'react'

const Bai4=()=>{
    const [showModal,setShowModal]=useState(false)
    const dispatch=useDispatch()
    let totalMoney=0
    const cartItems=useSelector(state=>state.redux.cartItems)
    cartItems.forEach(item=>totalMoney+=item.quantity*item.price)
    return(
        <div className={`border flex flex-col gap-6 items-center`}>
            <h1>Bai4</h1>
            <button className='border' onClick={()=>setShowModal(true)}>cart</button>
            {showModal&&(
                <div className='fixed inset-0 z-50 bg-black/20 flex items-center justify-center'>
                    <div className='relative bg-white rounded-2xl p-6 w-[600px] h-[800px] overflow-y-auto flex flex-col gap-3'>
                        <button className=' text-2xl top-4 right-2 absolute' onClick={()=>setShowModal(false)}>X</button>
                        <h1>shopping cart</h1>
                        <div className='flex flex-col items-start gap-3'>
                        <div className='flex w-full'>
                            <p className='flex flex-1/4'>name</p>
                            <p className='flex flex-1/4'>price</p>
                            <p className='flex flex-1/4'>quantity</p>
                            <p className='flex flex-1/4'></p>
                        </div>
                            {cartItems.map((item,index)=>{
                                return(
                                    <div key={index} className='flex gap-2 items-center w-full'>
                                        <p className='flex flex-1/4'>{item.name}</p>
                                        <p className='flex flex-1/4'>{item.price}</p>
                                        <div className='flex gap-2 justify-center items-center'>
                                            <button className='border' onClick={()=>{dispatch(updateQuantity({
                                                id:item.id,
                                                quantity:item.quantity-1
                                            }))}}>
                                                -
                                            </button>
                                            <p className='flex flex-1/4'>{item.quantity}</p>
                                            <button className='border' onClick={()=>{dispatch(updateQuantity({
                                                id:item.id,
                                                quantity:item.quantity+1
                                            }))}}>
                                                +
                                            </button>
                                        </div>
                                        <button onClick={()=>{dispatch(removeItem(item.id))}} className='flex flex-1/4 border bg-red-400'>Remove</button>
                                    </div>
                            )})}
                            <p className='w-full text-end'>total:{totalMoney}</p>
                        </div>
                    </div>
                </div>
            )}
            <div className='flex gap-5 border w-[80%] p-3'>
                <div className='flex flex-col gap-3 items-center border p-2'>
                    <p>chuối</p>
                    <p>price:20</p>
                    <button className='border'
                        onClick={()=>dispatch(addItem({
                            name:'chuối',
                            price:20
                        }))}
                    >
                        Mua
                    </button>
                </div>
                <div className='flex flex-col gap-3 items-center border p-2'>
                    <p>tàu</p>
                    <p>price:200</p>
                    <button className='border'
                        onClick={()=>dispatch(addItem({
                            name:'tàu',
                            price:200
                        }))}
                    >
                        Mua
                    </button>
                </div>
                <div className='flex flex-col gap-3 items-center border p-2'>
                    <p>thỏ</p>
                    <p>price:230</p>
                    <button className='border'
                        onClick={()=>dispatch(addItem({
                            name:'thỏ',
                            price:230
                        }))}
                    >
                        Mua
                    </button>
                </div>
                <div className='flex flex-col gap-3 items-center border p-2'>
                    <p>mikey</p>
                    <p>price:15</p>
                    <button className='border'
                        onClick={()=>dispatch(addItem({
                            name:'mikey',
                            price:15
                        }))}
                    >
                        Mua
                    </button>
                </div>
                <div className='flex flex-col gap-3 items-center border p-2'>
                    <p>hawktuah</p>
                    <p>price:100</p>
                    <button className='border'
                        onClick={()=>dispatch(addItem({
                            name:'hawktuah',
                            price:100
                        }))}
                    >
                        Mua
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Bai4