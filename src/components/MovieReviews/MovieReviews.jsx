import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../api";

const MovieReviews = () => {
    const params = useParams();
    console.log(params);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchMovieReviews(params.movieId);
                setReviews(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [params.movieId]); 
    return (
        <div>
            <h2>Reviews</h2>
            {reviews.length > 0 ? (
                <ul>
                    {reviews.map((review) => {
                        <li key={review.id}>
                            <h3>{review.author}</h3>
                            <p>{review.content}</p>
                        </li>
                    })}
                </ul>
            ) : (
                <p>No reviews available for this movie</p>
            )}
        </div>
    );
};

export default MovieReviews;