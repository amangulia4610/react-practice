import { useState } from 'react'

const counter = () => {

    const [count,setCount]= useState(0);

  return (
    <div style={{textAlign:"center", marginTop:"50px", display:"flex", alignItems:"center", flexDirection:"column", gap:"20px"}}>
        <h1> Counter : {count}</h1>
        <div style={{display:"flex", gap:"10px"}}>
        <button onClick={()=> setCount(count=> count +1)}>Increment</button>
        <button onClick={()=> setCount(count=> count-1)}> Decrement</button>


        <button onClick={()=> setCount(0)}> Reset</button>
        </div>
    </div>
  )
}

export default counter