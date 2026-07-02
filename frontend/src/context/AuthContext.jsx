import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";
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
    useEffect(() => {
  console.log("AuthContext mounted");

  const checkUser = async () => {
    console.log("checkUser started");

    const token = localStorage.getItem("token");
    console.log("Token:", token);

    try {
      const response = await api.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Response:", response.data);

      setUser(response.data);
    } catch (error) {
      console.log("ERROR:", error);
      console.log("STATUS:", error.response?.status);
      console.log("DATA:", error.response?.data);
    } finally {
      setLoading(false);
    }
  };

  checkUser();
}, []);
    return(
        <AuthContext.Provider value={{user,loading,login,logout}}>{children}</AuthContext.Provider>
    )
}
export const useAuth=()=>{
    return useContext(AuthContext)
}