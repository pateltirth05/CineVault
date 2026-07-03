import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { searchMovies } from '../services/movieService'
import { Link } from 'react-router-dom'
const Discover = () => {
    const location =useLocation()
    const query=new URLSearchParams(location.search).get("q")
     const [movies, setMovies] = useState([]);
    useEffect(() => {

        const fetchMovies = async () => {

            if (!query) return;

            try {

                const data = await searchMovies(query);

                setMovies(data.results);

            } catch (error) {

                console.log(error);

            }

        };
        fetchMovies()
    },[query])
  return (
    <>
      <div className="container">

            <h1>Search Results</h1>

            <h3>
                Searching for : {query}
            </h3>

            <div className="movieGrid">

                {movies.map((movie) => (

                    <div
                        className="movieCard"
                        key={movie.id}
                    >

                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                        />

                        <h3>{movie.title}</h3>

                        <p>
                            ⭐ {movie.vote_average.toFixed(1)}
                        </p>

                        <Link
                            to={`/movie/${movie.id}`}
                        >
                            Details
                        </Link>

                    </div>

                ))}

            </div>

        </div>

    </>
  )
}

export default Discover