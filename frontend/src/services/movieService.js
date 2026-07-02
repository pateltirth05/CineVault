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