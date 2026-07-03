import api from "./api";

export const getTrendingMovies = async () => {
    const response = await api.get("/movies/trending");
    return response.data;
};
export const getMovieDetails=async(movieId)=>{
    const response=await api.get(`/movies/${movieId}`);
    return response.data

}
export const getPopularMovies=async()=>{
    const response=await api.get("/movies/popular")
    return response.data
}
export const getTopRatedMovies=async()=>{
    const response=await api.get("/movies/top-rated")
    return response.data
}

export const getMovieTrailer=async(id)=>{
    const response=await api.get(`/movies/${id}/videos`)
    return response.data
}

export const getUpcomingMovie=async()=>{
     const response=await api.get("/movies/upcoming")
    return response.data
}

export const searchMovies = async (query) => {
    const response = await api.get(`/movies/search?query=${query}`);
    return response.data;
};