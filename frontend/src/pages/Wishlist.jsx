import { useState } from 'react'
import '../css/Wishlist.css'
import { getPopularMovies } from '../services/api'
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'


function Wishlist() {
    const { favorites } = useMovieContext()

    if (favorites.length > 0) {
        return (
            <div>
                <h2>Your wishlist!</h2>
                <div className="movies-grid">
                    {favorites.map((movie) => (
                        movie.title.toLowerCase() &&
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>)

    }
    return (
        <div>
            <h2>Wishlist is empty!</h2>
        </div>
    )

}

export default Wishlist