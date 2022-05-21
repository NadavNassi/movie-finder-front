import { httpService } from "./http.service"

async function query(movieName) {
    try {
        const user = JSON.parse(localStorage.user)
        if (!user) throw new Error()
        const headers = { 'x-access-token': user.token }

        const movies = await httpService.get('movie', { q: movieName }, headers)
        return movies
    } catch (error) {
        throw new Error(error)
    }
}

async function getById(omdbID) {
    try {
        const user = JSON.parse(localStorage.user)
        if (!user) throw new Error()
        const headers = { 'x-access-token': user.token }
        const movie = await httpService.get(`movie/${omdbID}`, null, headers)
        return movie
    } catch (error) {
        throw new Error('Movie not found')
    }
}


export const movieService = {
    query,
    getById
}