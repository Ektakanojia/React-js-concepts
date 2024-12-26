import './App.css';
import User from './User'
import {useState} from 'react'
function App() {
  const[name,setName]=useState("Ekta")
  const[last,setLast]=useState("kanojia")
  function updateName(name,last){
   setName(
    name="Aisha",
   )
   setLast(
    last="Moonis"
   )
  }
  return (
    <div className="App">
    <h1>Props in react native </h1>
     <User firstName={name} lastName={last} email={"kanojiaekta211@gmail.com"}/>
     <button onClick={updateName}>UpdateName</button>
    </div>
  );
}

export default App;
