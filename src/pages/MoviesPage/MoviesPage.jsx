import { useEffect, useState } from "react";
import { searchMovies } from "../../api";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import s from "./MoviesPage.module.css";

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") || "";
    useEffect(() => {
        if (query) {
            const fetchMovies = async () => {
                try {
                    const data = await searchMovies(query);
                    setMovies(data);
                } catch (error) {
                    console.log(error);
                }
            };
            fetchMovies();
        }
    }, [query]);
    const handleSearch = (event) => {
        event.preventDefault();
        const form = event.target;
        const searchQuery = form.elements.query.value;
        setSearchParams({ query: searchQuery });
    }
    return (
        <div>
            <form className={s.form} onSubmit={handleSearch}>
                <input className={s.input}
                    type="text"
                    name="query"
                    defaultValue={query}
                />
                <button className={s.btn} type="submit">Search</button>
            </form>
            {movies.length > 0 ? (
                <MovieList movies={movies} /> 
            ) : (
                <p className={s.text}>Movies not found</p>
            )}
        </div>
    );
};

export default MoviesPage;