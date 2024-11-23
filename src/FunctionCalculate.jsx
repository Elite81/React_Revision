import React from 'react'
import { useState } from "react";
function FunctionCalculate() {

    const [count, setCount] = useState({
      num1: Math.ceil(Math.random() * 10),
      num2: Math.ceil(Math.random() * 10),
      response: '',
      score: 0
    });

    const addition = (Event) => {
        
        if (Event.key =="Enter") {
            const answer = count.num1 + count.num2;
            if (answer == parseInt(count.response)) {
                setCount((prevState) => ({
                  ...prevState,
                  score: prevState.score + 1,
                  response: "",
                  num1: Math.ceil(Math.random() * 10),
                  num2: Math.ceil(Math.random() * 10),
                }));
                
            } else {
                setCount(prevCount => ({
                    ...prevCount,
                    response: ""
              }))
            }
        } 
    }
    const handleChange = (Event) => {
        setCount(prevCount => ({
            ...prevCount,
            response: Event.target.value
        }))
    }

  return (
      <div>
          <h1>{count.num1} + {count.num2}</h1>
          <input type="text"
              onKeyUp={addition}
              value={count.response}
              onChange={handleChange}
          />
          <h3>{ count.score}</h3>
    </div>
  )
}

export default FunctionCalculate