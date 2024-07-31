import { Suspense, useEffect, useRef, useState } from "react";
import { useParams, NavLink, Outlet, Link, useLocation } from "react-router-dom";
import { fetchMovieDetails } from "../../api";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
    const params = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    const goBackRef = useRef(location.state?.from || "/movies");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchMovieDetails(params.movieId);
                setMovie(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [params.movieId]);
    if (!movie) {
        return <h2>Loading...</h2>
    }
    return (
        <div>
            <Link to={goBackRef.current}>Go back</Link>
            <p className={s.title}>{movie.original_title}</p>
            <div className={s.flex}>
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.original_title} />
                <p>{movie.overview}</p>
            </div>
            <nav className={s.nav}>
                <NavLink to="cast" state={{ from: goBackRef.current }}>Cast</NavLink>
                <NavLink to="reviews" state={{ from: goBackRef.current }}>Reviews</NavLink>
            </nav>
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet />
            </Suspense>
        </div>
    );
};

export default MovieDetailsPage;