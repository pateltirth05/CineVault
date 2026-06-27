import React, { useEffect, useState } from 'react'
import { getTrendingMovies } from '../services/movieService'

const Home = () => {
  const [movies,setMovies]=useState([])
  useEffect(()=>{
   const fetchMovies=async()=>{
    try {
      const data=await getTrendingMovies();

      setMovies(data.results)
    } catch (error) {
      console.log(error)
    }
   }
   fetchMovies()
  },[])
  console.log(movies)
  return (
<>
<h1>Home</h1>
</>
  )
}

export default Home