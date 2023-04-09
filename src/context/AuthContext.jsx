import React, {
    useContext,
    useState,
    useEffect,
    createContext,
} from 'react'

const AuthContext = createContext();

export const AuthProvider =({children}) => {
  const value = {}

    return <AuthContext.Provider value = {
        value
    } > 
       {children} 
     
    </AuthContext.Provider>
}

export function useAuth() {
    return useContext(AuthContext)
}