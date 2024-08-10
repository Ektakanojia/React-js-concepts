import { useState } from "react"

function App() {
  const[color ,setColor] = useState("olive")
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
         <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"red" ,color:"white"}} onClick={()=>setColor("red")}>
              Red
         </button>
         <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"green" ,color:"white"}}  onClick={()=>setColor("green")}>
              Green
         </button>
         <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"blue" ,color:"white"}} onClick={()=>setColor("blue")}>
              Blue
         </button>
         <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"orange" ,color:"white"}} onClick={()=>setColor("orange")}>
              Orange
         </button>
         <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"purple" ,color:"white"}} onClick={()=>setColor("purple")}>
              Purple
         </button>
         <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"pink" ,color:"white"}} onClick={()=>setColor("pink")}>
              Pink
         </button>
         <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"black" ,color:"white"}} onClick={()=>setColor("black")}>
              Black
         </button>
         <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"brown" ,color:"white"}} onClick={()=>setColor("brown")}>
              Brown
         </button>
      </div>
      </div>
    </div>
  )
}

export default App
