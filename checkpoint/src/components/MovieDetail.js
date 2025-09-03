import React from 'react';
import { useParams, Link } from 'react-router-dom';

function MovieDetail({ movies }) {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));
  
  if (!movie) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger">Movie not found</div>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <Link to="/" className="btn btn-primary mb-3">← Back to Home</Link>
      
      <div className="card">
        <div className="row g-0">
          <div className="col-md-4">
            <img 
              src={movie.posterURL} 
              alt={movie.title} 
              className="img-fluid rounded-start"
              style={{width: '100%', height: 'auto'}}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">{movie.title}</h1>
              <p className="text-muted">Rating: ⭐{movie.rating}/10</p>
              <p className="card-text">{movie.description}</p>
              <h4>Detailed Plot</h4>
              <p className="card-text">{movie.details}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h3>Trailer</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src={movie.trailerLink}
            title={`${movie.title} Trailer`}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;