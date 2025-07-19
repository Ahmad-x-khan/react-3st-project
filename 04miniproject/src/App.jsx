import { useState } from 'react'
import './Index.css'
import './App.css'

function App() {
  const [color, setcolor] = useState("olive")

  return (
 
    <div className="w-full h-screen duration-200" style={{backgroundColor : color}}>
         <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
               <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white py-2 rounded-3xl px-3">
                   <button onClick={()=>setcolor("red")} className=' rounded-full px-4 py-1 outline-none shadow-lg  text-amber-50' style={{backgroundColor:"red"}}>Red</button>
                   <button onClick={()=>setcolor("green")} className=' rounded-full px-4 py-1 outline-none shadow-lg  text-amber-50' style={{backgroundColor:"Green"}}>Green</button>
                   <button onClick={()=>setcolor("blue")} className=' rounded-full px-4 py-1 outline-none shadow-lg  text-amber-50' style={{backgroundColor:"Blue"}}>Blue</button>
                   <button onClick={()=>setcolor("black")} className=' rounded-full px-4 py-1 outline-none shadow-lg  text-amber-50' style={{backgroundColor:"Black"}}>Black</button>
                   <button onClick={()=>setcolor("white")} className=' rounded-full px-4 py-1 outline-none shadow-lg' style={{backgroundColor:"white"}}>White</button>
                   <button onClick={()=>setcolor("yellow")} className=' rounded-full px-4 py-1 outline-none shadow-lg' style={{backgroundColor:"yellow"}}>Yellow</button>
                   <button onClick={()=>setcolor("grey")} className=' rounded-full px-4 py-1 outline-none shadow-lg  text-amber-50 ' style={{backgroundColor:"Grey"}}>Grey</button>

                  
               </div> 
           </div>
     </div> 
  
  )
}

export default App
