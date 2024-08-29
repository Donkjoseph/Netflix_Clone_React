import React, { useState, useEffect } from 'react';
import { base_url, api_key, imageUrl } from '../Urls/Urls';
import axios from 'axios';
import './RowPost.css';

function RowPost() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(`${base_url}/trending/movie/day?api_key=${api_key}&language=en-US`)
            .then((response) => {
                setMovies(response.data.results);
            })
            .catch((error) => {
                console.error('Error fetching the trending movies:', error);
            });
    }, []);

    return (
        <div className='row'>
            <h2>Trending Movies Today</h2>
            <div className="posters">
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        className='poster'
                        src={`${imageUrl}${movie.poster_path}`}
                        alt={movie.title}
                    />
                ))}
            </div>
        </div>
    );
}

export default RowPost;
