import React, { useState } from 'react'
import { registerUser } from '../services/authService'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate=useNavigate();
  const [formData,setformData]=useState({name:"",email:"",password:""})
  const handleChange=(e)=>{
    setformData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
     
      const data=await registerUser(formData)
          alert(data.message);
      navigate("/login")
    } catch (error) {
       alert(error.response?.data?.message);
    }
  }
  return (
   <>
    <div style={{marginTop:"30px"}}>Register</div>
    <form onSubmit={handleSubmit} style={{margin:"80px",color:'white'}}>
      <input type='text' name='name' value={formData.name} placeholder='name' onChange={handleChange}/>
      <br></br>
      <input type='email' name='email' value={formData.email} placeholder='email' onChange={handleChange}/>
      <br></br>
      <input type='password' name='password' value={formData.password} placeholder='password' onChange={handleChange}/>
      <br></br>
         <button type='submit' style={{color:'white'}}>Create Account</button>
    </form>
   </>
  )
}

export default Register