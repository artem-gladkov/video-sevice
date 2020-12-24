import React from 'react'
import './GenresItem.scss'

const GenreItem = (props) => {
  const {title, photo, className} = props
  return (
    <div className={`genreItem ${className}`}>
      <img src={photo} alt="Картинка жанра" className='genreItem__photo'/>
      <div className='genreItem__title'>{title}</div>
    </div>
  )
}

export default GenreItem