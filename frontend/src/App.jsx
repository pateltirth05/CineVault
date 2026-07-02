
import './App.css'
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

import Hero from './components/Hero'
import ProtectedRoute from './components/ProtectedRoute'
import PublicRoute from './components/PublicRoute'
import Landing from './pages/Landing'
import MovieDetails from './pages/MovieDetails'
import Upcoming from './pages/Upcoming'
import Popular from './pages/Popular'
function App() {

  return (
    <>
    
  
 
   
   <Routes>
<Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
<Route path='/login' element={<PublicRoute><Login/></PublicRoute>}/>
<Route path='/register' element={<PublicRoute><Register/></PublicRoute>}/>
<Route path='/' element={<PublicRoute><Landing/></PublicRoute>}/>
<Route path='/movie/:id' element={<MovieDetails/>}/>
<Route path='/upcoming' element={<Upcoming/>}/>
<Route path='/popular' element={<Popular/>}/>
   </Routes>
   {/* <CTABanner/> */}
  
    </>
  )
}

export default App
