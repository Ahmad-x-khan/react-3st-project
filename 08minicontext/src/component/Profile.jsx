// import React, {useContext} from 'react'
// import Usercontext from '../context/Usercontext'

// function Profile() {
//     const {user} = useContext(Usercontext)
//   if(!user) return  <div>plese Login</div>
//   return <div>Welcome {user.username}</div>
// }

// export default Profile
import React, {useContext} from 'react'
import Usercontext from '../context/Usercontext'
import Login from './Login'

function Profile() {
    const {user} = useContext(Usercontext)

    if (!user) return <Login />

    return <div>Welcome {user.username}</div>
}

export default Profile