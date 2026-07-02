import React, { useEffect, useState } from 'react'
import { getTrendingMovies,getMovieDetails } from '../services/movieService'
import Hero from '../components/Hero'

const Home = () => {

 
  const [movies,setMovies]=useState([])
  useEffect(()=>{
   const fetchMovies=async()=>{
    try {
      const data=await getTrendingMovies();

      setMovies(data.results)
      const heroDetails = await getMovieDetails(data.results[0].id);

console.log(heroDetails);
    } catch (error) {
      console.log(error)
    }
   }
   fetchMovies()
  },[])
   console.log(movies[0])

  return (
<>
{/* <h1>Home</h1>
{movies.map((movie)=>(
    <>
  <h1 key={movie.id}>{movie.title}</h1>
  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} style={{width:'150px',height:"250px"}}/>
  </>
))} */}
{movies.length > 0 && <Hero movie={movies[0]} />}
</>
  )
}

export default Home