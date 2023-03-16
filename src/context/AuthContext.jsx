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
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const emailRef = useRef()
    const passwordRef = useRef() 
    const firstName = useState()
    const lastName = useState()


    // useEffect(() => {
    //     // Check active sessions and sets the user
    //     const session = supabase.auth.session()

    //     setUser(session?.user ?? null)
    //     setLoading(false)

    //     // Listen for changes on auth state (logged in, signed out, etc.)
    //     const {
    //         data: listener
    //     } = supabase.auth.onAuthStateChange(async (event, session) => {
    //         setUser(session?.user ?? null)
    //         setLoading(false)
    //     })

    //     return () => {
    //         listener?.unsubscribe()
    //     }
    // }, [])

    
    const value = {
        // signUp: (data) => supabase.auth.signUp(data),
        // signIn: (data) => supabase.auth.signIn(data),
        // signOut: () => supabase.auth.signOut(),
        user,emailRef,passwordRef,firstName,lastName
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