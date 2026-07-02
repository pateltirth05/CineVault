import React from 'react'
import "../public/style/Landingnavbar.css"
import "../../style/style.css"
import { useState } from 'react';
import { useEffect } from 'react';
import { getTopRatedMovies } from '../../services/movieService';
const LandingTopRated = () => {
     const [movies,setMovie]=useState([]);
        useEffect(()=>{
            const fetchMovies=async()=>{
                 try {
                            const data=await getTopRatedMovies()
                            setMovie(data.results)
                        } catch (error) {
                            console.log(error.message)
                        }
            }
            fetchMovies()
        },[])
  return (
    <>
 <section className="landingDarkStrip">
  <div className="container">
    <div className="sectionHeader">
      <div className="sectionHeaderLeft">
        <div
          className="accentLine"
          style={{
            background:
              "linear-gradient(90deg,var(--gold),#9B59B6)",
          }}
        ></div>

        <h2 className="sectionTitle">Top Rated of All Time</h2>

        <p className="sectionSubtitle">
          Highest rated titles from the TMDB catalog
        </p>
      </div>

      <button className="btnGhost">
        Full List <i className="fa fa-arrow-right"></i>
      </button>
    </div>

    <div className="landingTopRatedGrid">
      {movies.slice(0,6).map((movie, index) => (
        <div className="landingTopRatedItem" key={movie.id}>
          <span className="landingTopRatedRank">
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="landingTopRatedPoster">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </div>

          <div className="landingTopRatedBody">
            <p className="landingTopRatedTitle">
              {movie.title}
            </p>

            <div className="movieCardMeta">
              <span className="movieCardRating">
                ⭐ {movie.vote_average.toFixed(1)}
              </span>

              <span>
                {movie.release_date}
              </span>
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

export default LandingTopRated