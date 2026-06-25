const axios=require('axios')

const BASE_URL="https://api.themoviedb.org/3";

const tmdb=axios.create({
    baseURL:BASE_URL,
    headers:{
        Authorization:`Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
        Accept:"application/json",
    },
})

module.exports=tmdb