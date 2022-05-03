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
            handleSubmit(searchQuerry)
        }
        // eslint-disable-next-line
    }, [])

    const handleSubmit = async (movieName) => {
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
                <SearchMovie handleSubmit={handleSubmit} />
            </div>
            {isError && <h1>Sorry, can't find your movie right now. please try again later</h1>}
            {Array.isArray(movies) && movies.length !== 0 && <MovieList movies={movies} />}
        </section>
    )
}



// [
//     {
//         Title: "The Lion King",
//         Year: "1994",
//         imdbID: "tt0110357",
//         Type: "movie",
//         Poster: "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg",
//     },
//     {
//         Title: "The Lion King",
//         Year: "2019",
//         imdbID: "tt6105098",
//         Type: "movie",
//         Poster: "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg",
//     },
//     {
//         Title: "The Lion King 2: Simba's Pride",
//         Year: "1998",
//         imdbID: "tt0120131",
//         Type: "movie",
//         Poster: "https://m.media-amazon.com/images/M/MV5BY2Y3MTk2MDgtOTc1Yy00ZmFjLThlNTEtMDQ1Y2EzZmRjMzVjXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg",
//     },
//     {
//         Title: "The Lion King 3: Hakuna Matata",
//         Year: "2004",
//         imdbID: "tt0318403",
//         Type: "movie",
//         Poster: "https://m.media-amazon.com/images/M/MV5BOGZiMDQ1YTQtMGVlOC00OTJiLWFkYzMtYjdiYmY0NWM5YzVjXkEyXkFqcGdeQXVyOTg4MDk3MTQ@._V1_SX300.jpg",
//     },
//     {
//         Title: "The Lion King",
//         Year: "1994",
//         imdbID: "tt0323073",
//         Type: "game",
//         Poster: "https://m.media-amazon.com/images/M/MV5BNzVmNzQ2ZmYtMmUzNy00MzhjLTg4ODUtMTQ0MjMzYTdkMDg5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
//     },
//     {
//         Title: "Simba: The King Lion",
//         Year: "1995–",
//         imdbID: "tt2374051",
//         Type: "series",
//         Poster: "https://m.media-amazon.com/images/M/MV5BNjkyOTczZGEtYmJhZC00ODIxLTg2NTQtNzUxNmNhZDgxN2Q1XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg",
//     },
//     {
//         Title: "Leo the Lion: King of the Jungle",
//         Year: "1994",
//         imdbID: "tt0234092",
//         Type: "movie",
//         Poster: "https://m.media-amazon.com/images/M/MV5BOThjNzQ4MjktODE0Mi00NzM2LTljN2QtYjE5YWQ4NGQyOTNkXkEyXkFqcGdeQXVyODIxNjk4NzQ@._V1_SX300.jpg",
//     },
//     {
//         Title: "The Making of 'The Lion King'",
//         Year: "1994",
//         imdbID: "tt0366742",
//         Type: "movie",
//         Poster: "https://m.media-amazon.com/images/M/MV5BNmMxM2E3NWItZjUzOS00MmE4LTkyMmYtM2UwZTJhMDUyZTUwXkEyXkFqcGdeQXVyODA0MzEyNjU@._V1_SX300.jpg",
//     },
//     {
//         Title: "The Lion King: A Musical Journey with Elton John",
//         Year: "1994",
//         imdbID: "tt0245234",
//         Type: "movie",
//         Poster: "N/A",
//     },
//     {
//         Title: "The Lion King: Timon and Pumbaa's Jungle Games",
//         Year: "1995",
//         imdbID: "tt0215934",
//         Type: "game",
//         Poster: "https://m.media-amazon.com/images/M/MV5BZTY0NTZjMWItY2MxNS00MGFkLTk0MjMtMjQ4Y2QyNmFjNTk2XkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg",
//     },
// ]