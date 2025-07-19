import React from 'react'
import { useEffect,useState } from 'react'

 
function Github() {
   const [data,setdata] = useState([])
    useEffect(()=>{
       fetch('https://api.github.com/users/Ahmad-x-khan')
       .then(response => response.json())
       .then(data =>{
        console.log(data);
        setdata (data)
       })
    
    },[])
  return (
    <>
      <div className='flex flex-wrap text-center bg-amber-950 text-white p-2 items-center justify-center mx-0.5 '>  
         <img className=' rounded-full p-2'  src={data.avatar_url} alt="Git picture"  width={100}/>
        Github followers : {data.followers}
       
      </div>
    </> 
  )
}

export default Github