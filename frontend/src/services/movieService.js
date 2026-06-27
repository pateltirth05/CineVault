import api from "./api";

export const getTrendingMovies = async () => {
    const response = await api.get("/movies/trending");
    return response.data;
};