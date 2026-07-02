import React, { useEffect, useState } from 'react'
import "../public/style/Landingnavbar.css"
import "../../style/style.css"
import { getPopularMovies } from '../../services/movieService';
import { Link, Navigate, useNavigate } from 'react-router-dom';
const LandingPopular = () => {
    const [movies,setMovie]=useState([]);
    const navigate=useNavigate()
    useEffect(()=>{
        const fetchMovies=async()=>{
             try {
                        const data=await getPopularMovies()
                        setMovie(data.results)
                    } catch (error) {
                        console.log(error.message)
                    }
        }
        fetchMovies()
    },[])

  return (
    <>
    <section class="section" style={{paddingTop:'0'}}>
  <div class="container">
    <div class="sectionHeader">
      <div class="sectionHeaderLeft">
        <div class="accentLine"></div>
        <h2 class="sectionTitle">Popular People</h2>
        <p class="sectionSubtitle">Actors and directors trending this week</p>
      </div>
      <Link to="/search.html?type=people" class="btnGhost">All People <i class="fa fa-arrow-right"></i></Link>
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
              <button className="btnPrimary btnSm" onClick={()=>navigate(`/movie/${movie.id}`)} >
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

export default LandingPopular