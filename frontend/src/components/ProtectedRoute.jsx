import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const {user,loading}=useAuth();

    if(loading){
        return <h2>Loading...</h2>

    }
    if(!user){
        return <Navigate to="/" replace/>
    }
  return children
}

export default ProtectedRoute