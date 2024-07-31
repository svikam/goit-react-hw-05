import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";
const apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDVhNTgwMTZkMzRkOWQ1YTE4ZGE4MzY0NmFlOWQ0MyIsIm5iZiI6MTcyMjE5NjY4NC4zMjY4NzgsInN1YiI6IjY2YTY5YTM4MTE1NjA4NGI1ZmRhZjdmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sce4peyIeArO3F890Rj104UajZ5ah1_Un64fjeujY4k";
const options = {
    headers: {
        Authorization: `Bearer ${apiKey}`
    }
};
export const fetchTrendingMovies = async () => {
    const url = `${baseUrl}/trending/movie/day`;
    const response = await axios.get(url, options);
    return response.data.results;
}

export const searchMovies = async (query) => {
    const url = `${baseUrl}/search/movie`;
    const params = {
        query,
        include_adult: false,
        language: "en-US",
        page: 1,
        };
    const response = await axios.get(url, { ...options, params });
    return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
    const url = `${baseUrl}/movie/${movieId}`;
    const response = await axios.get(url, options);
    return response.data;
};

export const fetchMovieCast = async (movieId) => {
    const url = `${baseUrl}/movie/${movieId}/credits`;
    const response = await axios.get(url, options);
    return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
    const url = `${baseUrl}/movie/${movieId}/reviews`;
    const response = await axios.get(url, options);
    return response.data.results;
};