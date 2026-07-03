import React, { useEffect, useState } from 'react'
import "../public/style/Landingnavbar.css"
import "../../style/style.css"
import { getPopularMovies } from '../../services/movieService'
import { Link, useNavigate } from 'react-router-dom'
const LandingHero = () => {

    const [movie,setMovie]=useState([])
    const [search,setSearch]=useState("")
    const navigate=useNavigate()

    const handleSearch=()=>{
      if(!search.trim()){
       return;
      }
       navigate(`/discover?q=${encodeURIComponent(search)}`)
    }
    useEffect(()=>{
     const fetchMovie=async()=>{
        try {
             const data=await getPopularMovies()
         setMovie(data.results)
        //  console.log(data.results)
        } catch (error) {
              console.log(error)
        }
        
     }
     fetchMovie()
    },[])
  return (
    <>
    <section class="landingHero">
  <div class="landingHeroBg">
    <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&q=80" alt="Cinema" />
  </div>
  <div class="landingHeroOverlay"></div>
  <div class="container">
    <div class="landingHeroContent">
      <h1 class="displayFont landingHeroTitle">Millions of movies to discover. <span class="goldText">Explore now.</span></h1>
      <p class="landingHeroDesc">Search across thousands of titles — get details, cast, trailers, and ratings powered by TMDB.</p>
      <div class="landingSearchBar">
        <i class="fa fa-search landingSearchIcon"></i>
        <input type="text" id="heroSearch" class="landingSearchInput" placeholder="Search for a movie, actor, director..." autocomplete="off" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <button class="landingSearchBtn" onClick={handleSearch}>Search</button>
      </div>
      <div class="landingHeroTags">
        <span class="landingHeroTagLabel">Popular:</span>
        {movie.slice(0,5).map((movies)=>(
            <span  className='landingTag' key={movies.id}>{movies.title}</span>
        ))}
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default LandingHero