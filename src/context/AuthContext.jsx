import React, {
    useContext,
    useState,
    useEffect,
    createContext,
} from 'react';

import {  
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut, 
        onAuthStateChanged } 
        from "firebase/auth";

import {auth} from "../firebase";

const AuthContext = createContext();

 const AuthProvider =({children}) => {

    const [user, setUser] =useState({});
    const [alert, setAlert]= useState({
        open:  "false",
        message: "",
        type: "sucess"
    });

    const createUser =(email,password)=> {
        return createUserWithEmailAndPassword(auth, email,password)

    }


    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log(currentUser);;
            setUser(currentUser);
      });
    
      return () => {
        unsubscribe()
      }

    }, [])
    

    return <AuthContext.Provider value = {{
        alert,
        setAlert, 
        createUser
    }} > 
       {children} 
     
    </AuthContext.Provider>
}

export default AuthProvider;

export const AuthState =()=> {
    return useContext(AuthContext)
};