import React from "react";
import "../style/homeauth.css";
import "../style/style.css";
import { getPopularMovies } from "../services/movieService";
import { useState,useEffect } from "react";
import Landingnavbar from "../components/public/Landingnavbar";
import LandingFooter from "../components/public/LandingFooter";
import { useNavigate } from "react-router-dom";
const Popular = () => {
      const [movie, setMovies] = useState([]);
const navigate=useNavigate()
  useEffect(() => {
    const fetchUpcoming = async () => {
      try {
        const data = await getPopularMovies();
        setMovies(data.results);
        console.log(data.results)
      } catch (error) {
        console.log(error);
      }
    };

    fetchUpcoming();
  }, []);

  return (
    <>
    <Landingnavbar/>
    <section className="section" >
      <div className="container">
        <div className="sectionHeader">
          <div className="sectionHeaderLeft">
            <div
             
            ></div>

            <h2 className="sectionTitle">Popular Movies</h2>

            <p className="sectionSubtitle">
              Discover the movies everyone is watching right now.
            </p>
          </div>
        </div>

        <div className="movieGrid movieGridLarge">
          {movie.map((movies) => {
           
            return (
              <div className="upcomingCard" key={movies.id}>
                <div className="upcomingCardBanner">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movies.backdrop_path}`}
                    alt={movies.title}
                  />

                  <div className="upcomingCountdown">
                    ⏳ {movies.release_date} 
                  </div>
                </div>

                <div className="upcomingCardBody">
                  <span className="label">
                      ⭐ {movies.vote_average.toFixed(1)}
                  </span>

                  <p className="upcomingCardTitle">
                    {movies.title}
                  </p>

                  <button className="btnGhost btnSm mt1" onClick={()=>navigate(`/movie/${movies.id}`)} >
                     <i className="fa fa-info-circle"></i> Details
                  </button>
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    <LandingFooter/>
    </>
  );
};

export default Popular;