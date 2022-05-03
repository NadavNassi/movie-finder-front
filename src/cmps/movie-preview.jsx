import React from 'react'
import { Link } from 'react-router-dom'
import { CardUI } from './card-ui'
import NoImg from '../assets/imgs/No_image_available.png'

export const MoviePreview = ({ movie }) => {
    return (
        <div className="movie-preview">
            <Link to={`/${movie.imdbID}`}>
                <CardUI
                    txt1={movie.Title}
                    txt2={movie.Year}
                    img={movie.Poster === 'N/A' ? NoImg : movie.Poster}
                />
            </Link>
        </div>
    )
}


