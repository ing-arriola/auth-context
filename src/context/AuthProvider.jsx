import { createContext, useState } from "react";

const AuthContext = createContext({}); // AuthContext is a context object that defines where authentication-related data can be accessed.

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => { // AuthProvider is a component that uses AuthContext to provide and manage the authentication state for its children.
    const [auth, setAuth] = useState({})
    console.log(children)
    return(
        <AuthContext.Provider value={{auth,setAuth}} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;