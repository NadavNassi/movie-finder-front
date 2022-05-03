import { httpService } from "./http.service"

async function query(movieName) {
    try {

        const movies = await httpService.get('movie', { q: movieName })
        return movies
    } catch (error) {
        throw new Error(error)
    }
}

async function getById(omdbID) {
    try {
        const movie = await httpService.get(`movie/${omdbID}`)
        return movie
    } catch (error) {
        throw new Error('Movie not found')
    }
}


export const movieService = {
    query,
    getById
}