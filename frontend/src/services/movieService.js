import api from "./api";

export const getTrendingMovies = async () => {
    const response = await api.get("/movies/trending");
    return response.data;
};
export const getMovieDetails=async(movieId)=>{
    const response=await api.get(`/movies/${movieId}`);
    return response.data

}