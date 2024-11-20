import React, { useState } from "react";



function CounterFunction() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count+1) 
    }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increament</button>
    </div>
  );
}

export default CounterFunction
