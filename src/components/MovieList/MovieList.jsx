import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movies = [] }) => {
    const location = useLocation();
    return (
        <div>
            <ul className={s.list}>
                {movies.map(movie => (
                    <li className={s.movieCard} key={movie.id.toString()}>
                        <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.original_title} />
                            <h3 className={s.title}>{movie.original_title}</h3>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        
    );
};

export default MovieList;