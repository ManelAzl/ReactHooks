import React from "react";
import MovieList from './MovieList';
import Filter from './Filter';
import AddMovie from './AddMovie';

function HomePage({ movies, filterTitle, filterRating, setFilterTitle, setFilterRating, addMovie, filteredMovies }) {
    return (
        <div>
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
                <div className="row">
                    <div className="col-12">
                        <MovieList movies={filteredMovies} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;