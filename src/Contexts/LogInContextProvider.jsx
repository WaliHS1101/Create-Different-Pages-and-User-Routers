import React, { useState } from 'react'
import { createContext } from 'react'
import Users from '../Components/Users';

const LogInContext = createContext();

function LogInContextProvider({ children }) {
    const [user, setUser] = useState(Users);

    return (
        <LogInContext.Provider value={{ user, setUser }}>
            {children}
        </LogInContext.Provider>

    )
}

export default LogInContextProvider;
export { LogInContext };