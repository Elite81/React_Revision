import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './counter.jsx'
import CounterFunction from './CounterFunction.jsx'
import Calculate from './calculate.jsx'
import FunctionCalculate from './FunctionCalculate.jsx'
import FunctionTasks from './functionTasks.jsx'
import FlashCard from './FlashCard.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App />
    <Counter />
    <CounterFunction />
    <Calculate /> 
    <FunctionCalculate />
    <FunctionTasks/> */}
    <FlashCard/>
    
  </StrictMode>
);
