import React from 'react'
import './App.css'


import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile'
import Login from './components/Login'

function App() {
  

  return (
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App

// import './App.css'

// import Profile from './component/Profile'
// import Login from './component/Login'
// import UserContextProvider from './context/UserContextProvider'



// function App() {
  

//   return (
//     <UserContextProvider>
//      <h1>Hi welcome to our page</h1>
//      <Login/>
//      <Profile/>
//     </UserContextProvider>
//   )
// }

// export default App