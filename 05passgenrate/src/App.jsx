import { useState,useCallback,useEffect,useRef } from 'react'

import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [number, setnumber] = useState(false);
  const [charecter, setcharecter] = useState(false);
  const [password, setpassword] = useState("");

   const passwordreff = useRef(null)

   const copypassword = useCallback (()=>{
              passwordreff.current?.select();
              window.navigator.clipboard.writeText(password)
              },[password])
  const passwordgenrater = useCallback(()=>{
      let pass= ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if(number)str +="0123456789"
      if(charecter)str +="!@#$%^&*()-_+={}[]`"

       for(let i=1; i<=length; i++)
      {
       let char = Math.floor(Math.random() * str.length + 1)
       pass += str.charAt(char)
      }

       setpassword(pass)

      } ,[length,number,charecter, setpassword] )

      useEffect(()=>{
       passwordgenrater();
      }, [ length,number, charecter, passwordgenrater])

  
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8  bg-gray-300'>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input type="text" 
            value={password}
            ref={passwordreff}
            className='outline-none w-full py-1 px-3 bg-amber-50 '
            placeholder='password'
            readOnly
            />
            <button className='bg-blue-600 outline-none px-3 py-0.5 shrink-0 'onClick={copypassword} >copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length}  className='cursor-pointer'onChange={(e)=>{setlength(e.target.value)}} />
            <label htmlFor="">Length : {length}</label>

          </div>
      
      
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={setnumber} id='numberInput'  onChange={()=>{setnumber((prev)=>!prev);}} />
            <label htmlFor="numberInput">Number</label>

          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={setcharecter} id='characterInput'  onChange={()=>{setcharecter((prev)=>!prev);}} />
            <label htmlFor="characterInput">charecter</label>

          </div>
      </div>
     </div>
    </>
  )
}

export default App
