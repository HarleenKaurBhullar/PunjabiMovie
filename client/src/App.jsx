import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './pages/home'
import Homepage from './pages/home'
import NavBar from './components/NavBar'
import GenreListPage from './pages/genres'
import GenreMoviePage from './pages/genrepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieDescPage from './pages/MoviePage'
import Search from './pages/SearchResult'
import About from './pages/aboutus'
import ScrollToTop from './components/ScrollToTop'
function App() {

  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/genre' element={<GenreListPage/>}></Route>
      <Route path='/genre/:genre_name' element={<GenreMoviePage/>}></Route>
      <Route path='/movie/:id' element={<MovieDescPage/>}></Route>
      <Route path="/search" element={<Search />} />
      <Route path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
