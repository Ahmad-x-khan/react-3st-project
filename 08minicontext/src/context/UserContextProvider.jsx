// import React from "react";

// import Usercontext from "./Usercontext";

// const UserContextProvider = ({childern})=>{
//     const [user, setuser] = React.useState(null);

// return(
//     <Usercontext.Provider value={{user, setuser}}>
//         {childern}
//     </Usercontext.Provider>
// )
// }

// export default UserContextProvider;
import React from "react";
import Usercontext from "./Usercontext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <Usercontext.Provider value={{user, setUser}}>
        {children}
        </Usercontext.Provider>
    )
}

export default UserContextProvider