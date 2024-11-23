import React, { useState } from "react";
function CounterFunction() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count+1) 
    }
    const decreament = () => {
        setCount(count -1)
    }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increase</button>
      <button onClick={decreament}>Decrease</button>
    </div>
  );
}

export default CounterFunction
