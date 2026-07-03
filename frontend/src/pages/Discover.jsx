import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Landingnavbar from "../components/public/Landingnavbar";
import LandingFooter from "../components/public/LandingFooter";

import {
  searchMovies,
  getPopularMovies,
} from "../services/movieService";

import "../style/style.css";

const Discover = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const query = new URLSearchParams(location.search).get("q");

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState(query || "");

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);

      try {
        let data;

        if (query) {
          data = await searchMovies(query);
        } else {
          data = await getPopularMovies();
        }

        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    };

    fetchMovies();
  }, [query]);

  const handleSearch = () => {
    if (!search.trim()) return;

    navigate(`/discover?q=${encodeURIComponent(search)}`);
  };

  const quickSearch = (term) => {
    setSearch(term);
    navigate(`/discover?q=${encodeURIComponent(term)}`);
  };
    return (
    <>
      <Landingnavbar />

      <div className="container" style={{ paddingTop: "120px", paddingBottom: "80px" }}>

        {/* HERO */}

        <div
          style={{
            textAlign: "center",
            marginBottom: "4rem",
          }}
        >
          <h1 className="displayFont">Discover Movies</h1>

          <p
            style={{
              color: "var(--textMuted)",
              marginTop: "1rem",
            }}
          >
            Search thousands of movies from TMDB.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              marginTop: "2rem",
            }}
          >
            <input
              className="formInput"
              style={{
                width: "500px",
              }}
              placeholder="Search movies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
            />

            <button
              className="btnPrimary"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>

          <div
            style={{
              marginTop: "1.5rem",
              display: "flex",
              justifyContent: "center",
              gap: ".75rem",
              flexWrap: "wrap",
            }}
          >
            <span>Popular:</span>

            {["Batman", "Dune", "Interstellar", "Superman"].map((tag) => (
              <button
                key={tag}
                className="genrePill"
                onClick={() => quickSearch(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* RESULT BAR */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <div>
            <h2>
              {query
                ? `Results for "${query}"`
                : "Popular Movies"}
            </h2>

            <p
              style={{
                color: "var(--textMuted)",
              }}
            >
              {movies.length} movies found
            </p>
          </div>

          <select className="sortSelect">
            <option>Popularity</option>
            <option>Top Rated</option>
            <option>Latest</option>
          </select>
        </div>
                {/* Loading */}
        {loading && (
          <div
            style={{
              textAlign: "center",
              padding: "5rem 0",
            }}
          >
            <h2>Loading movies...</h2>
          </div>
        )}

        {/* Empty State */}
        {!loading && movies.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "5rem 0",
            }}
          >
            <div style={{ fontSize: "4rem" }}>🎬</div>

            <h2
              style={{
                marginTop: "1rem",
              }}
            >
              No Movies Found
            </h2>

            <p
              style={{
                color: "var(--textMuted)",
                marginTop: ".5rem",
              }}
            >
              Try another movie title.
            </p>
          </div>
        )}

        {/* Movie Grid */}

        {!loading && movies.length > 0 && (
          <div className="movieGrid movieGridLarge">
            {movies.map((movie) => (
              <div
                className="movieCard"
                key={movie.id}
              >
                {/* Poster */}

                <div className="movieCardPoster">
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : "https://placehold.co/500x750?text=No+Image"
                    }
                    alt={movie.title}
                  />
                </div>

                {/* Overlay */}

                <div className="movieCardOverlay">
                  <div className="movieCardActions">
                    <Link
                      to={`/movie/${movie.id}`}
                      className="btnPrimary btnSm"
                    >
                      <i className="fa fa-info-circle"></i> Details
                    </Link>
                  </div>
                </div>

                {/* Card Body */}

                <div className="movieCardBody">
                  <p className="movieCardTitle">
                    {movie.title}
                  </p>

                  <div className="movieCardMeta">
                    <span className="movieCardRating">
                      <i className="fa fa-star"></i>{" "}
                      {movie.vote_average.toFixed(1)}
                    </span>

                    <span>
                      {movie.release_date?.split("-")[0]}
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: ".85rem",
                      color: "var(--textMuted)",
                      marginTop: ".75rem",
                      minHeight: "45px",
                    }}
                  >
                    {movie.overview
                      ? movie.overview.length > 90
                        ? movie.overview.slice(0, 90) + "..."
                        : movie.overview
                      : "No overview available."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination (UI Only) */}

        {!loading && movies.length > 0 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "4rem",
              gap: ".75rem",
            }}
          >
            <button className="pageBtn">1</button>
            <button className="pageBtn">2</button>
            <button className="pageBtn">3</button>
          </div>
        )}
      </div>

      <LandingFooter />
    </>
  );
};

export default Discover;