import { Home } from './pages/home'
import { MovieDetails } from './pages/movie-details'


export const routes = [
    {
        path: '/',
        element: <Home />,
    },

    {
        path: '/:omdbID',
        element: <MovieDetails />
    },

]