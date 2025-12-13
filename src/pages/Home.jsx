import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react"
import '../css/Home.css'
import { searchMovies, getPopularMovies } from "../services/api"

function Home() {
    const [searchQuery, setSearchQuery] = useState("")
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    // the following will only run one time, because [] won't change after first loading. 
    // You do this for example when you want to fetch data
    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                console.log(err)
                setError("Failed to load movies")
            }
            finally {
                setLoading(false)
            }
        }
        loadPopularMovies()
    }, []);


    const handleSearch = async (e) => {
        e.preventDefault()

        if (!searchQuery.trim()) return
        if (loading) return 
        setLoading(true)

        try {

            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            // setError(null)

        } catch (err) {
            console.log(err)
            setError("Failed to search movies")
        } finally {
            setLoading(false)
        }


        setSearchQuery("")
    }

    return (
        <div className="home">

            <form className="search-form" onSubmit={handleSearch}>
                <input type="text"
                    placeholder="Search movies..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} />
                <button type="submit" className="search-button">Search</button>
            </form>

            {loading ? (<div className="loading">Loading...</div> ): ( 
            <div className="movies-grid">
                
                {movies.map((movie) => (
                    
                    movie.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>)}
        </div>
    )
}

export default Home