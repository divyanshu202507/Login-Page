import React from 'react'
import Left from './Left.jsx'
import Right from './Right.jsx'
import './App.css'

const App = () => {
  return (
    <div  className="body" style={{ display: 'flex' , height: '80vh' ,width: '90vw', margin: 0, padding: 0 }}> 
<Left />
<Right />
    </div>
  )
}

export default App