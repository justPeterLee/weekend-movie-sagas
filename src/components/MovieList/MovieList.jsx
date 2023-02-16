import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'

import MovieItem from '../MovieItem/MovieItem';
import AddMovie from '../AddMovie/AddMovie';
function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main className='movie-list-container'>
            <h1 className='movie-list-title'>Movies</h1>
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
                <AddMovie/>
            </section>
        </main>

    );
}

export default MovieList;