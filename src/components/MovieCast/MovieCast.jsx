import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../api";
import s from "./MovieCast.module.css";

const MovieCast = () => {
    const params = useParams();
    console.log(params);
    const [cast, setCast] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchMovieCast(params.movieId);
                setCast(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [params.movieId]); 
    return (
        <div>
            <h2>Cast</h2>
            <ul className={s.cast}>
                {cast.map((actor) => {
                    <li key={actor.cast_id}>
                        {actor.name} as {actor.character}
                    </li>
                })}
            </ul>
        </div>
    );
};

export default MovieCast;

