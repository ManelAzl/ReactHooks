import React from "react";
import { useParamas, Link} from 'react-router-dom';

function MovieDetail ({ movies }) {
    const { id } = useParams();
    const movie = movies.find(m => m.id === parseInt(id));
    if (!movie) {
        return <div>Movie not found</div>;
    }

    return (
        <div className="movie-detail">
            <link to="/" className="back-button">← Back to Home</link>
            <h1>{movie.title}</h1>
            <div className="trailer-container">
                <iframe
                    width="100%"
                    height="500"
                    src={movie.trailerLink}
                    title={`${movie.title} Trailer`}
                    allowFullScreen
                ></iframe>
            </div>
            <div className="description">
                <h2>Description</h2>
                <p>{movie.description}</p>
                <h3>Detailed Plot</h3>
                <p>{movie.details}</p>
                <div className="rating">
                    <span>Rating: {movie.rating}/10</span>
                </div>
            </div>
        </div>

    );
}

export default MovieDetail;