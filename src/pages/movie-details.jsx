import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material';
import NoImg from '../assets/imgs/No_image_available.png'
import { Loader } from '../cmps/loader'



import { movieService } from '../services/movie.service'
import { Ratings } from '../cmps/ratings';

export const MovieDetails = () => {

    const [movie, setMovie] = useState(null)
    const [isErr, setErr] = useState(false)

    let navigate = useNavigate()
    const { omdbID } = useParams()
    useEffect(() => {
        getMovie(omdbID)
        // eslint-disable-next-line
    }, [omdbID])

    const getMovie = async (omdbID) => {
        try {
            const movieToFind = await movieService.getById(omdbID)
            setMovie(movieToFind)
        } catch (error) {
            setErr(true)
            setTimeout(handleBack, 3000)
        }
    }

    const handleBack = () => {
        navigate('/')
    }

    if (isErr) return <div className="item-details"><h1>No video found. Redirecting</h1></div>
    if (!movie) return <Loader />
    return (
        <div className="item-details">
            <img src={movie.poster === 'N/A' ? NoImg : movie.poster} alt="" />
            <div className="details-data">
                <p>Title: {movie.title}</p>
                <p>Release date: {movie.released}</p>
                <p>Rated: {movie.rated}</p>
                <p>Genre: {movie.genre}</p>
                <p>Director: {movie.director}</p>
                <p>Writer: {movie.writer}</p>
                <p>Actors: {movie.actors}</p>
                <p>Plot: {movie.plot}</p>
                <p>Language: {movie.language}</p>
                <p>Country: {movie.country}</p>
                <p>Awards: {movie.awards}</p>
                <div>Ratings: {movie.ratings.map(rating => <Ratings key={rating.Source} rating={rating} />)}</div>
                <p>Metascore: {movie.metascore}</p>
                <p>IMDB Rating: {movie.imdbRating}</p>
                <p>IMDB Votes: {movie.imdbVotes}</p>
                <p>Production: {movie.production}</p>
                <p>Website: {movie.website}</p>
            </div>
            <div className="item-actions">
                <Button onClick={handleBack}>Back to search</Button>
            </div>
        </div>
    )
}
