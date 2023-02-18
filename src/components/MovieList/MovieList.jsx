import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'

import MovieItem from '../MovieItem/MovieItem';
import AddMovie from '../AddMovie/AddMovie';
import AddMovieModal from '../AddMovieModal/AddMovieModal';
import SortBy from '../SortBy/SortBy';
function MovieList(props) {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const genreFilter = useSelector(store => store.filteredGenre);

    
    const [showAddMovie, setShowAddMovie] = useState(false)
    const showModalHandler = () => {
        setShowAddMovie(!showAddMovie);
    }

    useEffect(() => {
        if(genreFilter.length === 0){
            dispatch({ type: 'FETCH_MOVIES' });
        }
    }, []);

    return (
        <main className='movie-list-container'>
            {
                showAddMovie && <AddMovieModal onShowModal={showModalHandler}/>
            }
            <h1 className='movie-list-title'>Movies</h1>
            <SortBy/>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <MovieItem
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            poster={movie.poster}/>
                    );
                })}
                <AddMovie onShowModal={showModalHandler}/>
            </section>
        </main>

    );
}

export default MovieList;