
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
import Trending from './pages/Trending'
import Discover from './pages/Discover'
function App() {

  return (
    <>
    
  
 
   
   <Routes>
<Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
<Route path='/login' element={<PublicRoute><Login/></PublicRoute>}/>
<Route path='/register' element={<PublicRoute><Register/></PublicRoute>}/>
<Route path='/' element={<PublicRoute><Landing/></PublicRoute>}/>
<Route path='/movie/:id' element={<PublicRoute><MovieDetails/></PublicRoute>}/>
<Route path='/upcoming' element={<PublicRoute><Upcoming/></PublicRoute>}/>
<Route path='/popular' element={<PublicRoute><Popular/></PublicRoute>}/>
<Route path='/trending' element={<PublicRoute><Trending/></PublicRoute>}/>
<Route path='/discover' element={<PublicRoute><Discover/></PublicRoute>}/>
   </Routes>
   {/* <CTABanner/> */}
  
    </>
  )
}

export default App
