import { useState } from 'react';
import './App.css'
function App() {
  //let counter =15;
  const[counter,setCounter]= useState(15)
  const addValue =()=>{
    console.log("add is clicked",counter)
  
      setCounter( previousCounter=> previousCounter+1);
      setCounter(previousCounter=> previousCounter+1 );
      setCounter(previousCounter=> previousCounter+1);
      setCounter(previousCounter=> previousCounter+1 );
    
}
const removeValue =()=>{
     if(counter>0){
      setCounter(counter-1);
     }
      console.log("remove is clicked", counter)
}
  return (
    <>
     <h1>usestate hooks</h1>
     <h1>counter :{counter}</h1>
     <button style={{backgroundColor:"black" ,color:"white"}} onClick={addValue}>Add</button>
     <button style={{backgroundColor:"black" ,color:"white"}} onClick={removeValue}>Remove</button>
     <h2>footer:{counter}</h2>
    </>
  )
}
export default App
