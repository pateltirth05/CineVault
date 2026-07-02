import React from "react";
import "../style/homeauth.css";
import "../style/style.css";
import { getUpcomingMovie } from "../services/movieService";
import { useState,useEffect } from "react";
import Landingnavbar from "../components/public/Landingnavbar";
import LandingFooter from "../components/public/LandingFooter";
const Upcoming = () => {
      const [movie, setMovies] = useState([]);

  useEffect(() => {
    const fetchUpcoming = async () => {
      try {
        const data = await getUpcomingMovie();
        setMovies(data.results);
        console.log(data.results)
      } catch (error) {
        console.log(error);
      }
    };

    fetchUpcoming();
  }, []);
  const today = new Date();

const upcomingMovies = movie.filter((movie) => {
    return new Date(movie.release_date) > today;
});
  return (
    <>
    <Landingnavbar/>
    <section className="section" style={{  }}>
      <div className="container">
        <div className="sectionHeader">
          <div className="sectionHeaderLeft">
            <div
             
            ></div>

            <h2 className="sectionTitle">Coming Soon</h2>

            <p className="sectionSubtitle">
              Don't miss these upcoming releases
            </p>
          </div>
        </div>

        <div className="movieGrid movieGridLarge">
          {upcomingMovies.map((movies) => {
            const releaseDate = new Date(movies.release_date);
const today = new Date();

const diffTime = releaseDate.getTime() - today.getTime();

const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return (
              <div className="upcomingCard" key={movies.id}>
                <div className="upcomingCardBanner">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movies.backdrop_path}`}
                    alt={movies.title}
                  />

                  <div className="upcomingCountdown">
                    ⏳ {daysLeft} days
                  </div>
                </div>

                <div className="upcomingCardBody">
                  <span className="label">
                      ⭐ {movies.popularity.toFixed(2)}
                  </span>

                  <p className="upcomingCardTitle">
                    {movies.title}
                  </p>

                  <button className="btnGhost btnSm mt1">
                    <i className="fa fa-bell"></i> Notify Me
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

export default Upcoming;