import React from "react";
import MovieList from './MovieList';
import Filter from './Filter';
import AddMovie from './AddMovie';

funtion HomePage({ movies, filterTitle, filterRating, setFilterTitle, setFilterRating, addMovie ,filteredMovie}) {
    return (
        <div>
            <header className="App-header">
                <h1>Movie App</h1>
            </header>
            <div classNmae="container">
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
                    <MovieList movies={filteredMovies} />
                </div>
            </div>
        </div>
    );
}

export defalut HomePage;