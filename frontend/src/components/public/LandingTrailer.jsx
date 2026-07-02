import React, { useEffect, useState } from "react";
import "../public/style/Landingnavbar.css";
import "../../style/style.css";

import {
  getTrendingMovies,
  getMovieTrailer,
} from "../../services/movieService";

const LandingTrailer = () => {
  const [trailers, setTrailers] = useState([]);

  useEffect(() => {
    const fetchTrailers = async () => {
      try {
        // Get trending movies
        const movieData = await getTrendingMovies();

        // Only first 5 movies
        const movies = movieData.results.slice(0, 5);

        // Fetch trailer for each movie
        const trailerData = await Promise.all(
          movies.map(async (movie) => {
            const videoData = await getMovieTrailer(movie.id);

            const trailer = videoData.results.find(
              (video) =>
                video.site === "YouTube" &&
                video.type === "Trailer"
            );

            return {
              ...movie,
              trailerKey: trailer?.key,
            };
          })
        );

        setTrailers(trailerData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTrailers();
  }, []);

  const playTrailer = (key) => {
    if (!key) {
      alert("Trailer not available");
      return;
    }

    window.open(
      `https://www.youtube.com/watch?v=${key}`,
      "_blank"
    );
  };

  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="sectionHeader">
          <div className="sectionHeaderLeft">
            <div
              className="accentLine"
              style={{
                background:
                  "linear-gradient(90deg,var(--crimson),var(--gold))",
              }}
            ></div>

            <h2 className="sectionTitle">Latest Trailers</h2>

            <p className="sectionSubtitle">
              Recent releases and what's arriving in cinemas
            </p>
          </div>
        </div>

        <div className="scrollRow">
          {trailers.map((movie) => (
            <div className="landingTrailerCard" key={movie.id}>
              <div className="landingTrailerThumb">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  alt={movie.title}
                />

                <div
                  className="landingTrailerPlay"
                  onClick={() => playTrailer(movie.trailerKey)}
                  style={{ cursor: "pointer" }}
                >
                  <i className="fa fa-play"></i>
                </div>

                <div className="landingTrailerOverlay"></div>
              </div>

              <div className="landingTrailerBody">
                <p className="landingTrailerTitle">
                  {movie.title}
                </p>

                <p className="landingTrailerLabel">
                  Official Trailer
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingTrailer;