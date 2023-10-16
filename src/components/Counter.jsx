import React, { useState } from 'react'
import { decrement, increment, incrementByAmount, reset } from '../redux/counterSlice'
import { useDispatch, useSelector } from 'react-redux'

function Counter() {
const [amount,setAmount]=useState("")
  const dispatch = useDispatch()
  const count = useSelector((state)=>state.counterSlice.count)
  const handleIncrement=()=>{
    if(amount=="")
    {
      alert("please provide amount !")
    }
    else{
      dispatch(incrementByAmount(Number(amount)))
    }
  }
  return (
    <div style={{height:'70vh'}} className='w-100 d-flex justify-content-center align-items-center'>
      <div className='w-25 d-flex justify-content-center align-items-center flex-column border rounded p-5'>
        <h1 style={{fontSize:'100px'}}>{count}</h1>
      <div className='w-100 d-flex justify-content-between align-items-center mt-5'>
        <button className='btn btn-warning' onClick={()=>dispatch(decrement())}>Decrement</button>
        <button className='btn btn-danger' onClick={()=>dispatch(reset())}>Reset</button>
        <button className='btn btn-success' onClick={()=>dispatch(increment())}>Increment</button>
      </div>
      <div className="d-flex mt-3">
        <input type="text" className='form-control' placeholder='enter amount to incremented' onChange={e=>setAmount(e.target.value)} />
        <button onClick={handleIncrement} className='btn btn-primary ms-3'>Add</button>
      </div>
      </div>
    </div>
  )
}

export default Counter
