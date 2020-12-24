import React from "react";
import './GenresCard.scss'
import GenreItem from "./GenreItem/GenresItem";
import photoOne from '../../assets/img/smile.png'
import photoTwo from '../../assets/img/sad.png'
import photoThree from '../../assets/img/alien.png'
import photoFour from '../../assets/img/ghost.png'


const GenresCard = (props) => {
  const {cardTitle} = props

  return (
    <div className='genresCard'>
      <h2 className='cardTitle genresCard__title'>{cardTitle}</h2>
      <div className='genresCard__body'>
        <GenreItem title='Комедии' photo={photoOne} className='genreItem_bg_yellow'/>
        <GenreItem title='Драмы' photo={photoTwo} className='genreItem_bg_peach'/>
        <GenreItem title='Фантастика' photo={photoThree} className='genreItem_bg_blue'/>
        <GenreItem title='Ужасы' photo={photoFour} className='genreItem_bg_gray'/>
      </div>
    </div>
  )

}

export default GenresCard