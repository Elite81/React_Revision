import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './counter.jsx'
import CounterFunction from './CounterFunction.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Counter />
    <CounterFunction/>
    
  </StrictMode>
);
