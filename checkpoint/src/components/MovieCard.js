import React from "react";

const MovieCard = ({ movie }) => {
    return (
            <div className="movie-card">
                        <div className="card">
                                        <img src={movie.posterURL} className="card-img-top" alt={movie.title} />
                                                        <div className="card-body">
                                                                            <h5 className="card-title">{movie.title}</h5>
                                                                                                <p className="card-text">{movie.description}</p>
                                                                                                                    <div className="rating">
                                                                                                                                            <span>Rating: {movie.rating}/10</span>
                                                                                                                                                                </div>
                                                                                                                                                                                </div>
                                                                                                                                                                                            </div>
                                                                                                                                                                                                    </div>
                                                                                                                                                                                                        );

                                                                                                                                                                                                        };

                                                                                                                                                                                                        export default MovieCard;