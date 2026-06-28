import React, { useState } from 'react'
import { loginUser } from '../services/authService'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate=useNavigate()
  const [formData,setFormData]=useState({
    email:"",
    password:""
  })
  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();

    try {
      const data=await loginUser(formData)
      console.log(data)
      localStorage.setItem("token",data.token)
      navigate("/")
    } catch (error) {
      console.log(error.response?.data)
    }
  }
  return (
    <>
    <form onSubmit={handleSubmit} style={{color:'white',margin:"90px"}}>

      <input
    type="email"
    name="email"
    value={formData.email}
    placeholder='email'
    onChange={handleChange}
/><br>
</br>
<input
    type="password"
    name="password"
    placeholder='password'
    value={formData.password}
    onChange={handleChange}
/>
<button type='submit' style={{color:'white'}}>Login</button>
    </form>
    </>
  )
}

export default Login