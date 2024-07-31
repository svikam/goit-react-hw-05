import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../../api";
import MovieList from "../../components/MovieList/MovieList";
import s from "./HomePage.module.css"

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchTrendingMovies();
                setMovies(data);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);
    return (
        <div>
            <h1 className={s.title}>Trending today</h1>
            <MovieList movies={movies}/> 
        </div>
    );
};

export default HomePage; 