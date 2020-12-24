import React from "react";
import MovieItem from "./MovieItem/MovieItem";
import './MoviesCard.scss'

const MoviesCard = (props) => {
  const {movies, cardTitle} = props
  const moviesElements = movies.map(movie => <MovieItem key={movie.id}
                                                        title={movie.title}
                                                        photo={movie.photoSrc}
                                                        description={movie.description}/>)

  return (
    <div className='moviesCard'>
      <h2 className='cardTitle moviesCard__title'>{cardTitle}</h2>
      <div className='moviesCard__body'>
        {moviesElements}
      </div>

    </div>
  )

}

export default MoviesCard