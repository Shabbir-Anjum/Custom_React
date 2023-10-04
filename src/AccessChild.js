import React from "react";

export default function AccessChild(props) {
    
  const rest = () => {
    props.reset(0);
  };
  const image = () => {
    props.setimage('https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80');
  };
  const color=()=>{
    props.setcolor('green')
  }
  return (
    <>
      <div>
        <br />
        <button onClick={rest}>Reset from Child</button>
      </div>
      <div>
        <br />
        <button onClick={color}>Change Color from child</button>
      </div>
      <div>
        <br />
        <button onClick={image}>Change image from child</button>
      </div>
    </>
  );
}
