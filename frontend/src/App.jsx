import './css/App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Wishlist from './pages/Wishlist.jsx'
import NavBar from "./components/NavBar"
import { MovieProvider } from './contexts/MovieContext.jsx'

function App() {
  return (
    <div>
      <MovieProvider>
      <NavBar/>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </main>
      </MovieProvider>
    </div>
  )
}

export default App
