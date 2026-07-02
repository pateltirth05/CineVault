import { createContext, useContext, useEffect, useState } from "react";

const AuthContext=createContext()

export const AuthProvider=({children})=>{

    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const login=(userData,token)=>{
         localStorage.setItem("token",token)
         setUser(userData)
    }
    const logout=()=>{
        localStorage.removeItem("token");
        setUser(null)
    }
    useEffect(()=>{
        const checkUser =async()=>{
            try {
                const token=localStorage.getItem("token")

                if(!token){
                    setLoading(false)
                    return;
                }
                const response=await api.get("/auth/me",{
                    headers:{
                        Authorization:`Bearer ${token}`,
                    },
                })
                setUser(response.data)
            } catch (error) {
                localStorage.removeItem("token")
                setUser(null)

            }
            finally{
                setLoading(false)
            }
        }
        checkUser()
    },[])
    return(
        <AuthContext.Provider value={{user,loading,login,logout}}>{children}</AuthContext.Provider>
    )
}
export const useAuth=()=>{
    return useContext(AuthContext)
}