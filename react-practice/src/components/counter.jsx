import { useState } from 'react'

// Counter component
const counter = () => {
    // Declare state variable 'count' with initial value 0
    const [count, setCount] = useState(0);

    return (
        // Centered container with some styling
        <div style={{textAlign:"center", marginTop:"50px", display:"flex", alignItems:"center", flexDirection:"column", gap:"20px"}}>
            {/* Display the current count */}
            <h1> Counter : {count}</h1>
            <div style={{display:"flex", gap:"10px"}}>
                {/* Increment button */}
                <button onClick={() => setCount(count => count + 1)}>Increment</button>
                {/* Decrement button */}
                <button onClick={() => setCount(count => count - 1)}>Decrement</button>
                {/* Reset button */}
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    )
}

export default counter