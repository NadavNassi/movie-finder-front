
import React from 'react'
import { MoviePreview } from './movie-preview'

export const MovieList = ({ movies }) => {
    return (
        <div className="movie-list">
            {movies.map(movie => {
                return <MoviePreview key={movie.imdbID} movie={movie} />
            })}
        </div>
    )
}
