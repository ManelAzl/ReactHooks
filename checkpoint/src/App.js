import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description: "A thief who steals corporate secrets through dream-sharing technology is given the task of planting an idea into the mind of a C.E.O.",
      posterURL: "https://i.pinimg.com/originals/4c/76/fb/4c76fba647a1a3e46ea74dbb37675b8a.jpg",
      rating: 8.8,
      details:"Dom Cobb and Arthur are extractors who perform corporate espionage using experimental dream-sharing technology to infiltrate their targets subconscious and extract information. Their latest target, Saito, is impressed with Cobb's ability to layer multiple dreams within each other. He offers to hire Cobb for the ostensibly impossible job of implanting an idea into a person's subconscious; performing inception on Robert Fischer, the son of Saito's competitor Maurice Fischer, with the idea to dissolve his father's company. In return, Saito promises to clear Cobb's criminal status, allowing him to return home to his children.",
      trailerLink:"https://www.youtube.com/embed/YoHD9XEInc0"
    },
    {
      id: 2,
      title: "The Dark Knight",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      posterURL: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      rating: 9.0,
      details: "A gang of masked criminals rob a mafia-owned bank in Gotham City, betraying and killing each other until the sole survivor, the Joker, reveals himself as the mastermind and escapes with the money. The vigilante Batman, district attorney Harvey Dent, and police lieutenant Jim Gordon ally to eliminate Gotham's organized crime. Batman's true identity, the billionaire Bruce Wayne, publicly supports Dent as Gotham's legitimate protector, believing Dent's success will allow him to retire as Batman and romantically pursue his childhood friend Rachel Dawes—despite her being with Dent.",
      trailerLink:"https://www.youtube.com/embed/EXeTwQWrcwY"
    },
    {
      id: 3,
      title: "Interstellar",
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      posterURL: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      rating: 8.6,
      details:"Cooper is enlisted to pilot the Endurance spacecraft through the wormhole as part of a mission to colonize a habitable planet with 5000 frozen embryos and ensure humanity's survival. Meanwhile, Professor Brand would continue his work on solving a gravity equation whose solution would supposedly enable construction of a spacecraft for an exodus from Earth. Cooper accepts against Murph's wishes and promises to return. When she refuses to see him off, he leaves her his wristwatch to compare their relative time when he returns.",
      trailerLink:"https://www.youtube.com/embed/nyc6RJEEe0U"
    }
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  const addMovie = (newMovie) => {
    setMovies([...movies, { ...newMovie, id: movies.length + 1 }]);
  };

  const filteredMovies = movies.filter(movie => {
    return (
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRating
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie App</h1>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Filter 
              filterTitle={filterTitle}
              filterRating={filterRating}
              setFilterTitle={setFilterTitle}
              setFilterRating={setFilterRating}
            />
          </div>
          <div className="col-md-6">
            <AddMovie onAddMovie={addMovie} />
          </div>
        </div>
        <MovieList movies={filteredMovies} />
      </div>
    </div>
  );
}

export default App;