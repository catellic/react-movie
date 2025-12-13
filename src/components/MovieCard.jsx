import '../css/MovieCard.css'
import setWishlist from '../pages/Wishlist'
import { useMovieContext } from '../contexts/MovieContext'

function MovieCard({movie}) {
    const {favorites, isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
    const favorite = isFavorite(movie.id)

    function onWishlistClick(e) {
        e.preventDefault()

        if (favorite) removeFromFavorites(movie.id)
            else addToFavorites(movie)
    }

    return (
        
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                <div>
                    <button className="favorite-btn" onClick={onWishlistClick}>❤️</button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
    )
}

export default MovieCard