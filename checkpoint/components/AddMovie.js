import React, { useState } from 'react';

const AddMovie = ({ onAddMovie }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && posterURL) {
      onAddMovie({
        title,
        description,
        posterURL,
        rating: parseFloat(rating)
      });
      // Reset form
      setTitle("");
      setDescription("");
      setPosterURL("");
      setRating(0);
    }
  };

  return (
    <div className="add-movie">
      <h3>Add New Movie</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Movie Title"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="url"
            className="form-control"
            value={posterURL}
            onChange={(e) => setPosterURL(e.target.value)}
            placeholder="Poster URL"
            required
          />
        </div>
        <div className="form-group">
          <label>Rating (0-10):</label>
          <input
            type="number"
            className="form-control"
            min="0"
            max="10"
            step="0.1"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;