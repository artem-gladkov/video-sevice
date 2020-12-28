import React, {useEffect} from "react";
import {connect} from 'react-redux'
import {getGenres, getMovies} from "../redux/selectors";
import './MoviesPage.scss'
import MoviesCard from "../components/MoviesCard/MoviesCard";
import GenresCard from "../components/GenresCard/GenresCard";
import {setMovies} from "../redux/movies-reducer";
import {moviesApi} from "../api/api";
import Preloader from "../components/common/Preloader/Preloader";

const MoviesPage = (props) => {
  const {movies, setMovies, genres} = props

  useEffect(() => {
    moviesApi.getMovies().then(result => {
      setMovies(result)
    })
  }, [setMovies])

  return (
    <div className='moviesPage'>
      {movies
        ? <MoviesCard movies={movies} cardTitle='Новинки'/>
        : <Preloader/>}
      <GenresCard genres={genres} cardTitle='Жанры'/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  movies: getMovies(state),
  genres: getGenres(state)
})

export default connect(mapStateToProps, {setMovies})(MoviesPage)