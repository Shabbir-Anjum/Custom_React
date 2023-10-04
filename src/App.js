import React, { useState } from 'react'
import AccessChild from './AccessChild';

function App() {
  let [value, setvalue]= useState(12)
  let [image, setimage]= useState('https://images.unsplash.com/photo-1613323593608-abc90fec84ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')
  let [color, setcolor]= useState('red')
  const Addvalue=()=>{
    setvalue(value + 1);
  }
  const removeValue=()=>{
    setvalue(value-1)
  } 
  const clearValue=()=>{
    setvalue(0)
  }
  return (
    <div style={{backgroundColor: color}}>
    <div className='center'>
    <h1 text-3xl red underline>Counter</h1>
    <div>
      Value: {value}
    </div>
    <br/>
    <div>
      <button onClick={Addvalue} >add value</button>
    </div>
    <br/>
    <div>
      <button onClick={removeValue} >Remove value</button>
    </div>
    <br/>
    <div>
      <button onClick={clearValue} >Reset from parent</button>
    </div>
    <AccessChild setcolor={setcolor} setimage={setimage} reset={setvalue} />
    </div>
    <img className='image' src={image} alt='Erorr'/>
    </div>
  );
}

export default App;
