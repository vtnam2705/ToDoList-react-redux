import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function ListMovie() {
    const [movie, setMovie] = useState([]);

    const fetchMovie = async () => {
        const dataMovie = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=8a30938a421006aa949c377557b5c678');
        const movies = await dataMovie.json();
        setMovie(movies.results);
        console.log(movies.results);
    }
    

    useEffect(() => {
        fetchMovie();
    }, []);
    return (
        <div className='container'>
            <div className='row mt-5'>
                {movie.map((movie) => {
                    return (
                        <div className='col-3 mb-2' key={movie.id}>
                            <div className='card d-flex text-center'>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                    alt={movie.title}
                                />
                                <div className='p-2'>
                                    <p className='mb-0'>{movie.title}</p>
                                    <h6>Release date: {movie.release_date}</h6>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
