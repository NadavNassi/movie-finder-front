import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { movieService } from '../services/movie.service'
import { SearchMovie } from '../cmps/search-movie'
import { MovieList } from '../cmps/movie-list'

export const Home = () => {
    const [movies, setMovies] = useState([])
    const [isError, setIsError] = useState(false)
    const { search } = useLocation()
    const query = new URLSearchParams(search)

    useEffect(() => {
        const searchQuerry = query.get('q')
        if (searchQuerry) {
            searchMovies(searchQuerry)
        }
        // eslint-disable-next-line
    }, [search])

    const searchMovies = async (movieName) => {
        try {
            setIsError(false)
            setMovies([])
            const moviesToUpdate = await movieService.query(movieName)
            setMovies(moviesToUpdate)
        } catch (error) {
            setIsError(true)
        }
    }
    return (
        <section className="home">
            <div className="title">
                <h2>Welcome to Movie Finder!</h2>
                <h3>Please enter movie name and press Search button</h3>
                <SearchMovie />
            </div>
            {isError && <h1>Sorry, can't find your movie right now. please try again later</h1>}
            {Array.isArray(movies) && movies.length !== 0 && <MovieList movies={movies} />}
        </section>
    )
}
