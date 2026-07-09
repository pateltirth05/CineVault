import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieDetails } from '../services/movieService'
import { useAuth } from '../context/AuthContext'
import Appnavbar from '../components/app/Appnavbar'
import Landingnavbar from '../components/public/Landingnavbar'
import AppFooter from '../components/app/AppFooter'
import LandingFooter from '../components/public/LandingFooter'
import MovieHero from '../components/MovieHero'
import "../style/style.css"
import "../style/moviedetails.css"
import MovieTabs from '../components/MovieTabs'
import LockedMovieContent from '../components/public/LockedMovieContent'
const MovieDetails = () => {
  const {id}=useParams()
  const [movie,setMovie]=useState(null)
  const {user}=useAuth()

  const [activeTab,setActiveTab]=useState("overview")
  useEffect(()=>{
    const fetchMovie=async()=>{
      try {
        const data=await getMovieDetails(id)
        setMovie(data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchMovie()
  },[id])
  return (
   <>
   {user ? <Appnavbar/> :<Landingnavbar/>}
   {movie && <MovieHero movie={movie}/>}
  <div className="container detailBody">
    <MovieTabs activeTab={activeTab} setActiveTab={setActiveTab} />

    {user ? (
        <>
            {/* Later */}
            {/* Overview */}
            {/* Cast */}
            {/* Reviews */}
            {/* Media */}
            {/* Similar */}
        </>
    ) : (
        <LockedMovieContent activeTab={activeTab} />
    )}
</div>
   {user ? <AppFooter/> :<LandingFooter/>}
   </>
  )
}

export default MovieDetails