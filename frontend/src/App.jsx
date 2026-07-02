
import './App.css'
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CTABanner from './components/CTABanner'
import Hero from './components/Hero'
import ProtectedRoute from './components/ProtectedRoute'
import PublicRoute from './components/PublicRoute'
function App() {

  return (
    <>
    
    <Navbar/>
 
   
   <Routes>
<Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
<Route path='/login' element={<PublicRoute><Login/></PublicRoute>}/>
<Route path='/register' element={<PublicRoute><Register/></PublicRoute>}/>

   </Routes>
   {/* <CTABanner/> */}
   <Footer/>
    </>
  )
}

export default App
