import { useState } from 'react'

import './App.css'

function App() {

  const handleClick = function () {
    alert("Hi!, Mensart");
  };

  return (
    <div>
      <h1>Hello!</h1>
      <button onClick={handleClick}>Click Here</button>
   </div>
  )
}

export default App
