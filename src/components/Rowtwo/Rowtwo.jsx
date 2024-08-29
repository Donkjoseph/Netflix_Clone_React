import React, { useState, useEffect } from 'react';
import { base_url, api_key, imageUrl } from '../Urls/Urls';
import axios from 'axios';
import './Rowtwo.css';

function Rowtwo() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(`${base_url}/movie/top_rated?api_key=${api_key}&language=en-US`)
            .then((response) => {
                setMovies(response.data.results);
            })
            .catch((error) => {
                console.error('Error fetching the top-rated movies:', error);
            });
    }, []);

    return (
        <div className='row'>
            <h2>Top Rated Movies of All Time</h2>
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

export default Rowtwo;
