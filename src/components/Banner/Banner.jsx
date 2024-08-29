import React, { useState, useEffect } from 'react';
import { base_url, api_key, imageUrl } from '../Urls/Urls';
import axios from 'axios';
import './Banner.css';

function Banner() {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        axios.get(`${base_url}/trending/movie/day?api_key=${api_key}&language=en-US`)
            .then((response) => {
                setMovie(response.data.results[0]);
            })
            .catch((error) => {
                console.error('Error fetching the trending movie:', error);
            });
    }, []);

    return (
        <div
            className='banner'
            style={{
                backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
            }}
        >
            <div className='content'>
                <h1 className='title'>{movie ? movie.title : "Loading..."}</h1>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My List</button>
                </div>
                <h1 className='description'>
                    {movie ? movie.overview : "Loading description..."}
                </h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    );
}

export default Banner;
