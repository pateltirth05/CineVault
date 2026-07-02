import React, { useEffect, useState } from 'react'
import "../public/style/Landingnavbar.css"
import "../../style/style.css"
import { getTrendingMovies } from '../../services/movieService'
const LandingTrending = () => {
    const [movies,setMovie]=useState([])
    useEffect(()=>{
      const fetchMovies=async()=>{
        try {
            const data=await getTrendingMovies()
            setMovie(data.results)
        } catch (error) {
            console.log(error.message)
        }
      }
      fetchMovies()
    },[])
  return (
   <>
   {/* <section class="section">
  <div class="container">
    <div class="sectionHeader">
      <div class="sectionHeaderLeft">
        <div class="accentLine"></div>
        <h2 class="sectionTitle">Trending</h2>
      </div>
      <div class="flex gap1">
        <button class="genrePill genrePillActive" >Today</button>
        <button class="genrePill" >This Week</button>
        <a href="search.html?section=trending" class="btnGhost">View All <i class="fa fa-arrow-right"></i></a>
      </div>
    </div>
    <div class="scrollRow scrollRowWide" id="trendingRow"></div>
  </div>
</section> */}
<section className="section">
  <div className="container">
    <div className="sectionHeader">
      <div className="sectionHeaderLeft">
        <div className="accentLine"></div>
        <h2 className="sectionTitle">Trending</h2>
      </div>

      <div className="flex gap1">
        <button className="genrePill genrePillActive">
          Today
        </button>

       
      </div>
    </div>

    <div className="scrollRow scrollRowWide">
      {movies.map((movie) => (
        <div className="movieCard"  style={{ flex: '0 0 180px'}} key={movie.id}>
          <div className="movieCardPoster" style={{  width: '230px',height:' 290px'}}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </div>

          <div className="movieCardOverlay">
            <div className="movieCardActions">
              <button className="btnPrimary btnSm">
                <i className="fa fa-info-circle"></i> Details
              </button>
            </div>
          </div>

          <div className="movieCardBody">
            <p className="movieCardTitle">{movie.title}</p>

            <div className="movieCardMeta">
              <span className="movieCardRating">
                ⭐ {movie.vote_average.toFixed(1)}
              </span>

              <span>{movie.release_date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
   </>
  )
}

export default LandingTrending