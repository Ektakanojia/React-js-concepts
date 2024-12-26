import {useState} from "react"
const Header =(prop)=>{
    const[name,setName]= useState("Ekta kanojia")
    return(
        <div>
          <h1>Hello,{name} from {prop.data}</h1>
          <button onClick={()=>setName("Deepika")}>Update</button>
        </div>
        
    )
}
export default Header;