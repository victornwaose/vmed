import React, {
    useContext,
    useState,
    useEffect,
    createContext,
    useRef
} from 'react'
import {
    supabase
} from '../supabase'

const AuthContext = createContext();

export const AuthProvider =({
    children
}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const emailRef = useRef()
    const passwordRef = useRef() 
    const firstName = useState()
    const lastName = useState()

    // useEffect(() => {
    //     const session = supabase.auth.session();
    
    //     setUser(session?.user ?? null);
    //     setLoading(false);
    
    //     const { data: authListener } = supabase.auth.onAuthStateChange(
    //       async (event, session) => {
    //         setUser(session?.user ?? null);
    //         setLoading(false);
    //       }
    //     );
    
    //     return () => {
    //       authListener.unsubscribe();
    //     };
    //   }, []);
    

    

    
    const value = {
    // signUp: data => supabase.auth.signUp(data),
    // signIn: (provider) => {
    //     supabase.auth.signIn({ provider });
    //   },
    
    // signOut: async () => {
    //     await supabase.auth.signOut();
    //     setUser(null);
    //   },
    //     user,emailRef,passwordRef,firstName,lastName
    user, 
    setUser,
    loading,
    setLoading,
    emailRef,
    passwordRef,
    firstName,
    lastName
     }

    return <AuthContext.Provider value = {
        value
    } > {
        children
    } 
    </AuthContext.Provider>
}

export function useAuth() {
    return useContext(AuthContext)
}