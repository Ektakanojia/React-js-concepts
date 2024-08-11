import { useCallback, useEffect, useState,useRef } from "react"
function App() {
const[length ,setLength]= useState(8);
 const[numberAllowed,setNumberAllowed] =useState(false);
 const[character,setCharacter] = useState(false);
 const[password,setPassword] = useState("");
 const passwordRef = useRef(null);


 const passwordGenerator = useCallback(()=>{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed) str += "0123456789"
  if(character) str+="`~{}[]></?*&^%$#@"
  for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random()*str.length+1);
    pass += str.charAt(char)
  }
  setPassword(pass)
 }, [length,numberAllowed,character,setPassword]);

const copyPasswordToClipBoard = useCallback(()=>{
  //here we can directly accessing the window object beacause we are working on the core react ,where we get the window object
  //but in next.js it's not possible because waha pe server side rendering 
  passwordRef.current?.select()
  //there is one more method for selecting in the given range
  //passwordRef.current?.setSelectionRange(0,3)
  window.navigator.clipboard.writeText(password)
},[password]);
 useEffect(()=>{passwordGenerator()},[length,numberAllowed,character,passwordGenerator])

  return (
 
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500" >
          <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input 
            type="text" 
            value={password} 
            className="outline-none w-full py-1 px-3" 
            placeholder="password" 
            ref={passwordRef}
            readOnly/>
             <button  className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipBoard}>Copy</button>
        </div>
         <div className='flex text-sm gap-x-2'>
             <div className='flex items-center gap-x-1'>
                <input 
                type="range" 
                min={8}
                 max={100} 
                 value={length} 
                 className="cursor-pointer" 
                 onChange={(e)=>{setLength(e.target.value)}}

                 />
                <label>Length:{length}</label>
             </div>
             <div className="flex items-center gap-x-1">
                 <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={()=>{setNumberAllowed((prev)=>!prev)}}/>
                 <label htmlFor="numberInput">Number</label>
             </div>
             <div className="flex items-center gap-x-1">
                 <input type="checkbox" defaultChecked={character} id="characterInput" onChange={()=>{setCharacter((prev)=>!prev)}}/>
                 <label htmlFor="characterInput">Character</label>
             </div>
         </div>
      </div>
  
  )
}

export default App
