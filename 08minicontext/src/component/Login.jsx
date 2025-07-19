// import React, {useState, useContext} from 'react'
// import   Usercontext from '../context/Usercontext'


// function Login() {
//     const [username , setusername] = useState('');
//     const [password, setpassword] = useState('')

//     const {setuser} = useContext(Usercontext)

//     const handlesubmitt = (e)=>{
//          e.preventDefault()
//          setuser({username,password})
//     }
//   return (
//     <div>
//         <h2>Login</h2>
//         <input type="text" placeholder='username'  
//         value={username}
//         onChange={(e)=>setusername(e.target.value)}
//         />
//         <input type="Password" placeholder='Password'
//          value={password}
//         onChange={(e)=>setpassword(e.target.value)}
    
//          />
//         <button onClick={handlesubmitt}>Button</button>
//     </div>
//   )
// }

// export default Login;
import React, {useState, useContext} from 'react'
import Usercontext from '../context/Usercontext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(Usercontext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='username'  />
        {" "}
        <input type='text' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password'  />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login